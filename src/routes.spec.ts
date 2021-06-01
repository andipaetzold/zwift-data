import { routes } from "./routes";
import { segments } from "./segments";
import { Route } from "./types";
import { worlds } from "./worlds";

it("Unique ids", () => {
  const routeIds = routes.map((r) => r.id).filter((id) => id !== undefined);
  expect(new Set(routeIds).size).toBe(routeIds.length);
});

it("Unique slugs", () => {
  const routeSlugs = routes.map((r) => r.slug);
  expect(new Set(routeSlugs).size).toBe(routeSlugs.length);
});

describe.each(routes)("$name", (route) => {
  it("World exists", () => {
    const worldSlugs = worlds.map((world) => world.slug);
    expect(worldSlugs).toContain(route.world);
  });

  it("Segments exist", () => {
    const segmentSlugs = segments.map((segment) => segment.slug);

    route.segments.forEach((s) => {
      expect(segmentSlugs).toContain(s);
    });
  });
});
