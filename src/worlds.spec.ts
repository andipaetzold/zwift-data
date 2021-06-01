import { worlds } from "./worlds";

it("Unique ids", () => {
  const worldIds = worlds.map((w) => w.id).filter((id) => id !== undefined);
  expect(new Set(worldIds).size).toBe(worldIds.length);
});

it("Unique slugs", () => {
  const worldSlugs = worlds.map((world) => world.slug);
  expect(new Set(worldSlugs).size).toBe(worldSlugs.length);
});
