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
});
