import { worlds } from "./worlds";

it("Unique ids", () => {
  const worldIds = worlds.map((w) => w.id).filter((id) => id !== undefined);
  expect(new Set(worldIds).size).toBe(worldIds.length);
});

it("Unique slugs", () => {
  const worldSlugs = worlds.map((world) => world.slug);
  expect(new Set(worldSlugs).size).toBe(worldSlugs.length);
});

describe("Bounds", () => {
  worlds.forEach((world) => {
    it(world.slug, () => {
      expect(world.bounds[0][0]).toBeGreaterThanOrEqual(world.bounds[1][0]);
      expect(world.bounds[0][1]).toBeLessThanOrEqual(world.bounds[1][1]);
    });
  });
});
