import { routes as routeMetadata } from "./routes";
import { segments as segmentMetadata } from "./segments";
import { routes, segments } from "./coordinates";

describe.each([
  { name: "routes", metadata: routeMetadata, coordinates: routes },
  { name: "segments", metadata: segmentMetadata, coordinates: segments },
])("$name coordinates", ({ metadata, coordinates }) => {
  it("covers exactly the entries with Strava mappings", () => {
    expect(Object.keys(coordinates).sort()).toEqual(
      metadata
        .filter((entry) => entry.stravaSegmentId)
        .map((entry) => entry.slug)
        .sort(),
    );
  });

  it("contains valid latitude/longitude pairs", () => {
    for (const slug of Object.keys(coordinates)) {
      const points = coordinates[slug];
      expect(points!.length).toBeGreaterThanOrEqual(2);
      for (const point of points!) {
        if (
          point.length !== 2 ||
          !Number.isFinite(point[0]) ||
          Math.abs(point[0]) > 90 ||
          !Number.isFinite(point[1]) ||
          Math.abs(point[1]) > 180
        ) {
          throw new Error(`Invalid coordinate: ${point}`);
        }
      }
    }
  });

  it("returns undefined for missing coverage", () => {
    expect(coordinates["unknown-slug"]).toBeUndefined();
    for (const entry of metadata.filter((entry) => !entry.stravaSegmentId)) {
      expect(coordinates[entry.slug]).toBeUndefined();
    }
  });
});
