import { writeFileSync } from "fs";
import fetch from "node-fetch";
import { routes } from "../data/routes.mjs";
import { worlds } from "../data/worlds.mjs";

const response = await fetch(
  "https://www.zwift.com/zwift-web-pages/gamedictionary"
);

const responseData = await response.json();

function formatDistance(d) {
  if (d === undefined) {
    return undefined;
  }
  return Math.round(+d) / 1000;
}

function formatElevation(e) {
  if (e === undefined) {
    return undefined;
  }
  return Math.round(+e);
}

// Routes
{
  const data = responseData.GameDictionary.ROUTES[0].ROUTE.map((item) => {
    const manualRouteData = routes.find((r) => r.id === +item.$.signature);

    if (!manualRouteData) {
      console.warn(`Missing manual data for "${item.$.name}"`);
    }

    const manualWorldData = worlds.find((w) => w.gameDictionary === item.$.map);
    if (!manualWorldData) {
      throw new Error(`Unknown world: "${item.$.map}"`);
    }

    return {
      id: +item.$.signature,
      name: item.$.name,
      slug: manualRouteData?.slug ?? item.$.signature,
      world: manualWorldData.slug,
      eventOnly: item.$.eventOnly === "1",
      distance: formatDistance(item.$.distanceInMeters),
      elevation: formatElevation(item.$.ascentInMeters),
      leadInDistance: formatDistance(item.$.leadinDistanceInMeters),
      leadInElevation: formatElevation(item.$.leadinAscentInMeters),
      leadInDistanceFreeRide: formatDistance(
        item.$.freeRideLeadinDistanceInMeters
      ),
      leadInElevationFreeRide: formatElevation(
        item.$.freeRideLeadinAscentInMeters
      ),
      leadInDistanceMeetups: formatDistance(
        item.$.meetupLeadinDistanceInMeters
      ),
      leadInElevationInMeetups: formatElevation(
        item.$.meetupLeadinAscentInMeters
      ),
      segments: manualRouteData?.segments ?? [],
      levelLocked: item.$.levelLocked === "1",
      lap: item.$.supportedLaps === "1",
      supportsTT: item.$.supportsTimeTrialMode === "1",
      supportsMeetups: item.$.blockedForMeetups === "0",
      sports: item.$.sports === "2" ? ["running"] : ["running", "cycling"],
      experience: manualRouteData?.experience ?? undefined,
      stravaSegmentId: manualRouteData?.stravaSegmentId ?? undefined,
      stravaSegmentUrl: manualRouteData?.stravaSegmentId
        ? `https://www.strava.com/segments/${manualRouteData.stravaSegmentId}`
        : undefined,
      zwiftInsiderUrl: manualRouteData?.zwiftInsiderUrl ?? undefined,
      whatsOnZwiftUrl: manualRouteData?.whatsOnZwiftUrl ?? undefined,
    };
  });
  writeData(data, "routes", "Route");
}

// Achievements
{
  const data = responseData.GameDictionary.ACHIEVEMENTS[0].ACHIEVEMENT.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "achievements", "Achievements");
}

// Bike Frames
{
  const data = responseData.GameDictionary.BIKEFRAMES[0].BIKEFRAME.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      modelYear: item.$.modelYear === "0" ? undefined : +item.$.modelYear,
      isTT: item.$.isTT === "1",
    })
  );
  writeData(data, "bikeFrames", "BikeFrame");
}

// Bike Front Wheels
{
  const data =
    responseData.GameDictionary.BIKEFRONTWHEELS[0].BIKEFRONTWHEEL.map(
      (item) => ({
        id: +item.$.signature,
        name: item.$.name,
        imageName: item.$.imageName,
      })
    );
  writeData(data, "bikeFrontWheels", "BikeFrontWheel");
}

// Bike Rear Wheels
{
  const data = responseData.GameDictionary.BIKEREARWHEELS[0].BIKEREARWHEEL.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "bikeRearWheels", "BikeRearWheel");
}

// Bike Shoes
{
  const data = responseData.GameDictionary.BIKESHOES[0].BIKESHOE.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "bikeShoes", "BikeShoe");
}

// Challenges
{
  const data = responseData.GameDictionary.CHALLENGES[0].CHALLENGE.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "challenges", "Challenge");
}

// Glasses
{
  const data = responseData.GameDictionary.GLASSES[0].GLASS.map((item) => ({
    id: +item.$.signature,
    name: item.$.name,
    imageName: item.$.imageName,
  }));
  writeData(data, "glasses", "Glass");
}

// Headgear
{
  const data = responseData.GameDictionary.HEADGEARS[0].HEADGEAR.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "headgears", "Headgear");
}

// Jerseys
{
  const data = responseData.GameDictionary.JERSEYS[0].JERSEY.map((item) => ({
    id: +item.$.signature,
    name: item.$.name,
    imageName: item.$.imageName,
  }));
  writeData(data, "jerseys", "Jersey");
}

// Paint Jobs
{
  const data = responseData.GameDictionary.PAINTJOBS[0].PAINTJOB.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
    })
  );
  writeData(data, "paintJobs", "PaintJob");
}

// Run Shirts
{
  const data = responseData.GameDictionary.RUNSHIRTS[0].RUNSHIRT.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "runShirts", "RunShirt");
}

// Run Shoes
{
  const data = responseData.GameDictionary.RUNSHOES[0].RUNSHOE.map((item) => ({
    id: +item.$.signature,
    name: item.$.name,
    imageName: item.$.imageName,
  }));
  writeData(data, "runShoes", "RunShoe");
}

// Run Shorts
{
  const data = responseData.GameDictionary.RUNSHORTS[0].RUNSHORT.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "runShorts", "RunShort");
}

// Socks
{
  const data = responseData.GameDictionary.SOCKS[0].SOCK.map((item) => ({
    id: +item.$.signature,
    name: item.$.name,
    imageName: item.$.imageName,
  }));
  writeData(data, "socks", "Sock");
}

// Training Plans
{
  const data = responseData.GameDictionary.TRAINING_PLANS[0].TRAINING_PLAN.map(
    (item) => ({
      id: +item.$.signature,
      name: item.$.name,
      imageName: item.$.imageName,
    })
  );
  writeData(data, "trainingPlans", "TrainingPlan");
}

// Notable Moment Types
{
  const data =
    responseData.GameDictionary.NOTABLE_MOMENT_TYPES[0].NOTABLE_MOMENT_TYPE.map(
      (item) => ({
        id: +item.$.signature,
        name: item.$.name,
        imageName: item.$.imageName,
        priority: +item.$.priority,
      })
    );
  writeData(data, "notableMomentTypes", "NotableMomentType");
}

// Unlockable Categories
{
  const data =
    responseData.GameDictionary.UNLOCKABLE_CATEGORIES[0].UNLOCKABLE_CATEGORY.map(
      (item) => ({
        id: +item.$.signature,
        name: item.$.name,
      })
    );
  writeData(data, "unlockableCategories", "UnlockableCategory");
}

function writeData(data, name, typeName) {
  console.log(`Writing data: ${typeName}`);

  const content = `import { ${typeName} } from "./types";

// prettier-ignore
export const ${name}: ${typeName}[] = ${JSON.stringify(data, undefined, 2)};
`;
  writeFileSync(`./src/${name}.ts`, content);
}
