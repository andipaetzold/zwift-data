import { segments } from "../../data/segments.mjs";
import { writeData } from "./write-data.mjs";
import { prepareRoute } from "./prepare-route.mjs";
import { fetchSegments } from "./fetch-segments.mjs";
import { SingleBar } from "cli-progress";

export async function updateData() {
  const response = await fetch(
    "https://www.zwift.com/zwift-web-pages/gamedictionary"
  );
  const responseData = await response.json();
  delete responseData.GameDictionary["$"];
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
    const segmentsWithLatLng = await fetchSegments();

    const bar = new SingleBar({
      format: "Preparing routes [{bar}] {percentage}% | {value}/{total}",
    });
    bar.start(responseExtendedData.ROUTES.ROUTE.length, 0);

    const data = await Promise.all(responseExtendedData.ROUTES.ROUTE.map(async item => {
      const itemResult = await prepareRoute(item, segmentsWithLatLng)
      bar.increment();
      return itemResult;
    }))
    const dataFiltered = data.filter(d => d !== undefined);
    await writeData(dataFiltered, "routes", "Route");

    bar.stop();
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
