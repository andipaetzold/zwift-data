import { routes as routeMetadata } from "./routes";
import { segments as segmentMetadata } from "./segments";
import { routes, segments } from "./streams";

describe.each([
  { name: "routes", metadata: routeMetadata, streams: routes },
  { name: "segments", metadata: segmentMetadata, streams: segments },
])("$name streams", ({ metadata, streams }) => {
  it("covers exactly the entries with Strava mappings", () => {
    expect(Object.keys(streams).sort()).toEqual(
      metadata
        .filter((entry) => entry.stravaSegmentId)
        .map((entry) => entry.slug)
        .sort(),
    );
  });

  it("returns undefined for missing coverage", () => {
    expect(streams["unknown-slug"]).toBeUndefined();
    for (const entry of metadata.filter((entry) => !entry.stravaSegmentId)) {
      expect(streams[entry.slug]).toBeUndefined();
    }
  });
});
