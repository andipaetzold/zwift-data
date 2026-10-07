import { routes as routeMetadata } from "./routes.js";
import { segments as segmentMetadata } from "./segments.js";
import { routes, segments } from "./streams/index.js";

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
});
