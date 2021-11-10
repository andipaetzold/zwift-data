import { segments } from "./segments";
import { worlds } from "./worlds";

it("Unique slugs", () => {
  expect(new Set(segments.map((s) => s.slug)).size).toBe(segments.length);
});

describe.each(segments)("$name", (segment) => {
  it("World exists", () => {
    const worldSlugs = worlds.map((w) => w.slug);
    expect(worldSlugs).toContain(segment.world);
  });

  it("Urls", () => {
    if (segment.stravaSegmentId && segment.stravaSegmentUrl) {
      expect(
        segment.stravaSegmentUrl.startsWith("https://www.strava.com/segments/")
      ).toBeTruthy();
    }

    if (segment.whatsOnZwiftUrl) {
      expect(
        segment.whatsOnZwiftUrl.startsWith("https://whatsonzwift.com")
      ).toBeTruthy();
    }
  });
});
