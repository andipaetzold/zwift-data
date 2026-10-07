import { routes as routeMetadata } from "./routes.js";
import { segments as segmentMetadata } from "./segments.js";
import { routes, segments } from "./streams/index.js";
import * as latlng from "./streams/latlng.js";
import * as distance from "./streams/distance.js";
import * as altitude from "./streams/altitude.js";

describe.each([
  { name: "routes", metadata: routeMetadata, streams: routes },
  { name: "segments", metadata: segmentMetadata, streams: segments },
] as const)("$name streams", ({ name, metadata, streams }) => {
  it("covers exactly the entries with Strava mappings", () => {
    for (const field of [latlng, distance, altitude]) {
      expect(Object.keys(field[name]).sort()).toEqual(
        Object.keys(streams).sort(),
      );
    }
    for (const slug of Object.keys(streams)) {
      const stream = streams[slug];
      expect(latlng[name][slug]).toBe(stream?.latlng);
      expect(distance[name][slug]).toBe(stream?.distance);
      expect(altitude[name][slug]).toBe(stream?.altitude);
    }
    expect(Object.keys(streams).sort()).toEqual(
      metadata
        .filter((entry) => entry.stravaSegmentId)
        .map((entry) => entry.slug)
        .sort(),
    );
  });
});
