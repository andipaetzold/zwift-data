import fetch from "node-fetch";
import { segments } from "../../data/segments.mjs";
import { routes } from "../../data/routes.mjs";
import { worlds } from "../../data/worlds.mjs";
import { writeData } from "./write-data.mjs";
import { formatDistance, formatElevation } from "./format.mjs";
import { findSegmentsOnRoute } from "./find-segments-on-route.mjs";
import { fetchSegments } from "./fetch-segments.mjs";

export async function updateData() {
  const response = await fetch(
    "https://www.zwift.com/zwift-web-pages/gamedictionary"
  );
  const responseData = await response.json();
  const responseExtendedData = Object.fromEntries(
    Object.entries(responseData.GameDictionary).map(([key1, value1]) => [
      key1,
      {
        [Object.keys(value1[0])[0]]: Object.values(value1[0])[0].map(
          (value2) => value2.$
        ),
      },
    ])
  );
  const segmentsWithLatLng = await fetchSegments();

  // Segments
  {
    const data = [];
    for (const segment of segments) {
      data.push({
        ...segment,
        zwifterBikesUrl: segment.zwifterBikesPath
          ? `https://zwifterbikes.web.app/route/${segment.zwifterBikesPath}`
          : undefined,
      });
    }
    await writeData(data, "segments", "Segment");
  }

  // Routes
  {
    const data = [];
    for (const item of responseExtendedData.ROUTES.ROUTE) {
      if (
        item.map === "" ||
        item.map === "GRAVEL MOUNTAIN" || // skip until release or map bounds are available
        item.name === "Critcade Test" // skip test route
      ) {
        continue;
      }

      const manualRouteData = routes.find((r) => r.id === +item.signature);

      if (!manualRouteData) {
        console.warn(`Missing manual data for "${item.name}"`);
      }

      const manualWorldData = worlds.find((w) => w.gameDictionary === item.map);
      if (!manualWorldData) {
        throw new Error(`Unknown world: "${item.map}"`);
      }

      let segmentsOnRoute = [];
      if (manualRouteData?.stravaSegmentId) {
        segmentsOnRoute = await findSegmentsOnRoute(
          manualRouteData,
          segmentsWithLatLng.filter((s) => s.world === manualWorldData.slug)
        );
      }

      data.push({
        id: +item.signature,
        name: item.name,
        slug: manualRouteData?.slug ?? item.signature,
        world: manualWorldData.slug,
        eventOnly: item.eventOnly === "1",
        distance: formatDistance(item.distanceInMeters),
        elevation: formatElevation(item.ascentInMeters),
        leadInDistance: formatDistance(item.leadinDistanceInMeters),
        leadInElevation: formatElevation(item.leadinAscentInMeters),
        leadInDistanceFreeRide: formatDistance(
          item.freeRideLeadinDistanceInMeters
        ),
        leadInElevationFreeRide: formatElevation(
          item.freeRideLeadinAscentInMeters
        ),
        leadInDistanceMeetups: formatDistance(
          item.meetupLeadinDistanceInMeters
        ),
        leadInElevationInMeetups: formatElevation(
          item.meetupLeadinAscentInMeters
        ),
        segments: manualRouteData?.segments ?? [],
        segmentsOnRoute,
        levelLocked: item.levelLocked === "1",
        lap: item.supportedLaps === "1",
        supportsTT: item.supportsTimeTrialMode === "1",
        supportsMeetups: item.blockedForMeetups === "0",
        sports: item.sports === "2" ? ["running"] : ["running", "cycling"],
        experience:
          item.xp && +item.xp > 10
            ? +item.xp
            : manualRouteData?.experience ?? undefined,
        stravaSegmentId: manualRouteData?.stravaSegmentId ?? undefined,
        stravaSegmentUrl: manualRouteData?.stravaSegmentId
          ? `https://www.strava.com/segments/${manualRouteData.stravaSegmentId}`
          : undefined,
        zwiftInsiderUrl: manualRouteData?.zwiftInsiderUrl ?? undefined,
        whatsOnZwiftUrl: manualRouteData?.whatsOnZwiftUrl ?? undefined,
        zwifterBikesUrl: manualRouteData?.zwifterBikesPath
          ? `https://zwifterbikes.web.app/route/${manualRouteData.zwifterBikesPath}`
          : undefined,
      });
    }
    await writeData(data, "routes", "Route");
  }

  // Achievements
  {
    const data = responseExtendedData.ACHIEVEMENTS.ACHIEVEMENT.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "achievements", "Achievement");
  }

  // Bike Frames
  {
    const data = responseExtendedData.BIKEFRAMES.BIKEFRAME.map((item) => ({
      id: +item.signature,
      name: item.name,
      modelYear: item.modelYear === "0" ? undefined : +item.modelYear,
      isTT: item.isTT === "1",
    }));
    await writeData(data, "bikeFrames", "BikeFrame");
  }

  // Bike Front Wheels
  {
    const data = responseExtendedData.BIKEFRONTWHEELS.BIKEFRONTWHEEL.map(
      (item) => ({
        id: +item.signature,
        name: item.name,
        imageName: item.imageName,
      })
    );
    await writeData(data, "bikeFrontWheels", "BikeFrontWheel");
  }

  // Bike Rear Wheels
  {
    const data = responseExtendedData.BIKEREARWHEELS.BIKEREARWHEEL.map(
      (item) => ({
        id: +item.signature,
        name: item.name,
        imageName: item.imageName,
      })
    );
    await writeData(data, "bikeRearWheels", "BikeRearWheel");
  }

  // Bike Shoes
  {
    const data = responseExtendedData.BIKESHOES.BIKESHOE.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "bikeShoes", "BikeShoe");
  }

  // Challenges
  {
    const data = responseExtendedData.CHALLENGES.CHALLENGE.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "challenges", "Challenge");
  }

  // Glasses
  {
    const data = responseExtendedData.GLASSES.GLASS.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "glasses", "Glass");
  }

  // Headgear
  {
    const data = responseExtendedData.HEADGEARS.HEADGEAR.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "headgears", "Headgear");
  }

  // Jerseys
  {
    const data = responseExtendedData.JERSEYS.JERSEY.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "jerseys", "Jersey");
  }

  // Paint Jobs
  {
    const data = responseExtendedData.PAINTJOBS.PAINTJOB.map((item) => ({
      id: +item.signature,
      name: item.name,
    }));
    await writeData(data, "paintJobs", "PaintJob");
  }

  // Run Shirts
  {
    const data = responseExtendedData.RUNSHIRTS.RUNSHIRT.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "runShirts", "RunShirt");
  }

  // Run Shoes
  {
    const data = responseExtendedData.RUNSHOES.RUNSHOE.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "runShoes", "RunShoe");
  }

  // Run Shorts
  {
    const data = responseExtendedData.RUNSHORTS.RUNSHORT.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "runShorts", "RunShort");
  }

  // Socks
  {
    const data = responseExtendedData.SOCKS.SOCK.map((item) => ({
      id: +item.signature,
      name: item.name,
      imageName: item.imageName,
    }));
    await writeData(data, "socks", "Sock");
  }

  // Training Plans
  {
    const data = responseExtendedData.TRAINING_PLANS.TRAINING_PLAN.map(
      (item) => ({
        id: +item.signature,
        name: item.name,
        imageName: item.imageName,
      })
    );
    await writeData(data, "trainingPlans", "TrainingPlan");
  }

  // Notable Moment Types
  {
    const data =
      responseExtendedData.NOTABLE_MOMENT_TYPES.NOTABLE_MOMENT_TYPE.map(
        (item) => ({
          id: +item.signature,
          name: item.name,
          imageName: item.imageName,
          priority: +item.priority,
        })
      );
    await writeData(data, "notableMomentTypes", "NotableMomentType");
  }

  // Unlockable Categories
  {
    const data =
      responseExtendedData.UNLOCKABLE_CATEGORIES.UNLOCKABLE_CATEGORY.map(
        (item) => ({
          id: +item.signature,
          name: item.name,
        })
      );
    await writeData(data, "unlockableCategories", "UnlockableCategory");
  }
}
