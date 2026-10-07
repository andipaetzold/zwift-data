import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fetchStream } from "./fetch-stream.mjs";
import { writeCoordinates } from "./write-coordinates.mjs";
import { prepareRoute } from "./prepare-route.mjs";
import { routes as routeMetadata } from "../../src/routes";
import { worlds } from "../../data/worlds.mjs";

const latlng = [
  [40.123456, -73.456789],
  [40.123457, -73.456788],
];
const stream = { latlng, distance: [0, 10] };

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

it("fetches coordinates and distances once using the environment cookie", async () => {
  vi.stubEnv("STRAVA_COOKIE", "test-cookie");
  const fetchMock = mockResponse(stream);
  expect(await fetchStream(123)).toEqual({ latlng, distanceStream: [0, 10] });
  expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
    expect.stringContaining("/123?"),
    { headers: { cookie: "test-cookie" } },
  );
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

describe("coordinate generation", () => {
  let directory;
  beforeEach(async () => {
    directory = await mkdtemp(join(tmpdir(), "zwift-coordinates-test-"));
  });
  afterEach(async () => {
    await rm(directory, { recursive: true, force: true });
  });

  it("preserves point precision and order, sorts slugs, and omits missing streams", async () => {
    const routes = [
      { slug: "z-route", latlng },
      { slug: "a-route", latlng },
      { slug: "missing" },
    ];
    await writeCoordinates(routes, [{ slug: "sprint", latlng }], directory);
    expect(await readdir(join(directory, "routes"))).toEqual([
      "a-route.ts",
      "z-route.ts",
    ]);
    const file = await readFile(join(directory, "routes/a-route.ts"), "utf8");
    const data = JSON.parse(
      file.match(/= ([\s\S]*);\nexport/)[1].replace(/,(\s*])/g, "$1"),
    );
    expect(data).toEqual(latlng);
    const index = await readFile(join(directory, "routes.ts"), "utf8");
    expect(index).toContain('from "./routes/a-route.js"');
    expect(index.indexOf('"a-route"')).toBeLessThan(index.indexOf('"z-route"'));
    await writeCoordinates(
      [...routes].reverse(),
      [{ slug: "sprint", latlng }],
      directory,
    );
    expect(await readFile(join(directory, "routes.ts"), "utf8")).toBe(index);
  });

  it("removes stale data files after a successful refresh", async () => {
    await writeCoordinates([{ slug: "old", latlng }], [], directory);
    await writeFile(join(directory, "types.ts"), "keep this file");
    await writeCoordinates([{ slug: "new", latlng }], [], directory);
    expect(await readdir(join(directory, "routes"))).toEqual(["new.ts"]);
    expect(await readFile(join(directory, "types.ts"), "utf8")).toBe(
      "keep this file",
    );
  });

  it.each(
    [
      [{ slug: "../invalid", latlng }],
      [
        { slug: "same", latlng },
        { slug: "same", latlng },
      ],
    ].map((entries) => ({ entries })),
  )(
    "keeps the prior snapshot for invalid or duplicate slugs %#",
    async ({ entries }) => {
      await writeCoordinates([{ slug: "original", latlng }], [], directory);
      const original = await readFile(join(directory, "routes.ts"), "utf8");
      await expect(writeCoordinates(entries, [], directory)).rejects.toThrow();
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

  it("fetches once and keeps coordinates separate from route metadata", async () => {
    const route = routeMetadata.find((entry) => entry.stravaSegmentId);
    const fetchMock = mockResponse(stream);
    const prepared = await prepareRoute(dictionaryEntry(route), []);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(prepared.latlng).toEqual(latlng);
    expect(prepared.route.slug).toBe(route.slug);
    expect(prepared.route.segmentsOnRoute).toEqual([]);
    expect(prepared.route).not.toHaveProperty("latlng");
    expect(prepared.route).not.toHaveProperty("distanceStream");
  });

  it("does not fetch routes without a Strava mapping", async () => {
    const route = routeMetadata.find((entry) => !entry.stravaSegmentId);
    const fetchMock = mockResponse(stream);
    const prepared = await prepareRoute(dictionaryEntry(route), []);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(prepared.latlng).toBeUndefined();
    expect(prepared.route.segmentsOnRoute).toEqual([]);
  });

  it("does not fetch excluded routes", async () => {
    const fetchMock = mockResponse(stream);
    expect(await prepareRoute({ map: "" }, [])).toBeUndefined();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
