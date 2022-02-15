import { routes } from "./routes";
import { segments } from "./segments";
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

  it("Urls", () => {
    if (route.stravaSegmentId && route.stravaSegmentUrl) {
      expect(
        route.stravaSegmentUrl.startsWith("https://www.strava.com/segments/")
      ).toBeTruthy();
    }

    if (route.zwiftInsiderUrl) {
      // (former) Rebel routes don't include /route/
      expect(
        route.zwiftInsiderUrl.startsWith("https://zwiftinsider.com/")
      ).toBeTruthy();
    }

    if (route.whatsOnZwiftUrl) {
      expect(
        route.whatsOnZwiftUrl.startsWith("https://whatsonzwift.com")
      ).toBeTruthy();
    }
  });

  describe("Segments", () => {
    route.segments.map((segmentSlug) => {
      describe(segmentSlug, () => {
        it("should exist", () => {
          const segmentSlugs = segments.map((segment) => segment.slug);

          route.segments.forEach((s) => {
            expect(segmentSlugs).toContain(s);
          });
        });

        it("should be in same world", () => {
          const segment = segments.find((s) => s.slug === segmentSlug)!;

          expect(segment.world).toBe(route.world);
        });

        // it("should be in segmentsOnRoute", () => {
        //   if (!route.stravaSegmentId) {
        //     return;
        //   }

        //   const segment = segments.find((s) => s.slug === segmentSlug)!;
        //   if (!segment.stravaSegmentId) {
        //     return;
        //   }

        //   expect(
        //     route.segmentsOnRoute.find((sor) => sor.segment === segment.slug)
        //   ).toBeDefined();
        // });
      });
    });

    it("should not be duplicate", () => {
      const segmentSlugs = route.segments;
      expect(new Set(segmentSlugs).size).toBe(segmentSlugs.length);
    });
  });

  describe("Calculated segment", () => {
    route.segmentsOnRoute.map((sor) =>
      it(`${sor.segment} should be included in manual list`, () => {
        expect(route.segments).toContain(sor.segment);
      })
    );
  });
});
