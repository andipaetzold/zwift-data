import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fetchStream } from "./fetch-stream.mjs";
import { fetchSegments } from "./fetch-segments.mjs";
import { segments as manualSegments } from "../../data/segments.mjs";
import { writeStreams } from "./write-streams.mjs";
import { prepareRoute } from "./prepare-route.mjs";
import { routes as routeMetadata } from "../../src/routes";
import { worlds } from "../../data/worlds.mjs";

const latlng = [
  [40.123456, -73.456789],
  [40.123457, -73.456788],
];
const stream = {
  latlng,
  distance: [0, 10.123456],
  altitude: [-3.12345, 60.98765],
};
const fetchedStream = {
  latlng,
  distanceStream: stream.distance,
  altitudeStream: stream.altitude,
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

function mockResponse(data, overrides = {}) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    url: "https://www.strava.com/stream/segments/123",
    json: async () => data,
    ...overrides,
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

it("fetches all three streams once using the environment cookie", async () => {
  vi.stubEnv("STRAVA_COOKIE", "test-cookie");
  const fetchMock = mockResponse(stream);
  expect(await fetchStream(123)).toEqual(fetchedStream);
  expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
    expect.stringContaining(
      "/123?streams%5B%5D=latlng&streams%5B%5D=distance&streams%5B%5D=altitude",
    ),
    { headers: { cookie: "test-cookie" } },
  );
});

it("retains segment metadata distance alongside the distance stream", async () => {
  mockResponse(stream);
  const fetched = await fetchSegments();
  const original = manualSegments.find((segment) => segment.stravaSegmentId);
  expect(fetched[0].distance).toBe(original.distance);
  expect(fetched[0]).toMatchObject(fetchedStream);
});

it.each([
  { data: stream, response: { ok: false, status: 429 } },
  { data: stream, response: { url: "https://www.strava.com/login" } },
  { data: { error: "unavailable" } },
])("rejects unsuccessful requests %#", async ({ data, response }) => {
  mockResponse(data, response);
  await expect(fetchStream(123)).rejects.toThrow(
    "Error fetching Strava segment '123'",
  );
});

describe("stream generation", () => {
  let directory;
  beforeEach(async () => {
    directory = await mkdtemp(join(tmpdir(), "zwift-streams-test-"));
  });
  afterEach(async () => {
    await rm(directory, { recursive: true, force: true });
  });

  it("preserves raw streams, sorts slugs, and omits missing mappings", async () => {
    const routes = [
      { slug: "z-route", ...fetchedStream },
      { slug: "a-route", ...fetchedStream },
      { slug: "missing" },
    ];
    await writeStreams(
      routes,
      [{ slug: "sprint", ...fetchedStream }],
      directory,
    );
    expect(await readdir(join(directory, "routes"))).toEqual([
      "a-route.ts",
      "z-route.ts",
    ]);
    const file = await readFile(join(directory, "routes/a-route.ts"), "utf8");
    const data = JSON.parse(
      file
        .match(/= ([\s\S]*);\nexport/)[1]
        .replace(/\b(latlng|distance|altitude):/g, '"$1":')
        .replace(/,(\s*[\]}])/g, "$1"),
    );
    expect(data).toEqual(stream);
    const index = await readFile(join(directory, "routes.ts"), "utf8");
    expect(index).toContain('from "./routes/a-route.js"');
    expect(index.indexOf('"a-route"')).toBeLessThan(index.indexOf('"z-route"'));
    await writeStreams(
      [...routes].reverse(),
      [{ slug: "sprint", ...fetchedStream }],
      directory,
    );
    expect(await readFile(join(directory, "routes.ts"), "utf8")).toBe(index);
  });

  it("removes stale data files after a successful refresh", async () => {
    await writeStreams([{ slug: "old", ...fetchedStream }], [], directory);
    await writeFile(join(directory, "types.ts"), "keep this file");
    await writeStreams([{ slug: "new", ...fetchedStream }], [], directory);
    expect(await readdir(join(directory, "routes"))).toEqual(["new.ts"]);
    expect(await readFile(join(directory, "types.ts"), "utf8")).toBe(
      "keep this file",
    );
  });

  it.each(
    [
      [{ slug: "../invalid", ...fetchedStream }],
      [
        { slug: "same", ...fetchedStream },
        { slug: "same", ...fetchedStream },
      ],
    ].map((entries) => ({ entries })),
  )(
    "keeps the prior snapshot for invalid or duplicate slugs %#",
    async ({ entries }) => {
      await writeStreams(
        [{ slug: "original", ...fetchedStream }],
        [],
        directory,
      );
      const original = await readFile(join(directory, "routes.ts"), "utf8");
      await expect(writeStreams(entries, [], directory)).rejects.toThrow();
      expect(await readFile(join(directory, "routes.ts"), "utf8")).toBe(
        original,
      );
      expect(await readdir(join(directory, "routes"))).toEqual(["original.ts"]);
    },
  );
});

describe("route preparation", () => {
  function dictionaryEntry(route) {
    return {
      signature: String(route.id),
      name: route.name,
      map: worlds.find((world) => world.slug === route.world).gameDictionary,
      distanceInMeters: "1000",
      ascentInMeters: "10",
      leadinDistanceInMeters: "0",
      leadinAscentInMeters: "0",
      freeRideLeadinDistanceInMeters: "0",
      freeRideLeadinAscentInMeters: "0",
      meetupLeadinDistanceInMeters: "0",
      meetupLeadinAscentInMeters: "0",
    };
  }

  it("fetches once and keeps all streams separate from route metadata", async () => {
    const route = routeMetadata.find((entry) => entry.stravaSegmentId);
    const fetchMock = mockResponse(stream);
    const prepared = await prepareRoute(dictionaryEntry(route), []);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(prepared.stream).toEqual(fetchedStream);
    expect(prepared.route.slug).toBe(route.slug);
    expect(prepared.route.segmentsOnRoute).toEqual([]);
    expect(prepared.route).not.toHaveProperty("latlng");
    expect(prepared.route).not.toHaveProperty("distanceStream");
    expect(prepared.route).not.toHaveProperty("altitudeStream");
    expect(prepared.route.distance).toBe(1);
  });

  it("does not fetch routes without a Strava mapping", async () => {
    const route = routeMetadata.find((entry) => !entry.stravaSegmentId);
    const fetchMock = mockResponse(stream);
    const prepared = await prepareRoute(dictionaryEntry(route), []);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(prepared.stream).toBeUndefined();
    expect(prepared.route.segmentsOnRoute).toEqual([]);
  });

  it("does not fetch excluded routes", async () => {
    const fetchMock = mockResponse(stream);
    expect(await prepareRoute({ map: "" }, [])).toBeUndefined();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
