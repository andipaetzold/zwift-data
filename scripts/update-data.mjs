import { writeFileSync } from "fs";
import fetch from "node-fetch";

const response = await fetch(
  "https://www.zwift.com/zwift-web-pages/gamedictionary"
);

const responseData = await response.json();

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

export const ${name}: ${typeName}[] = ${JSON.stringify(data, undefined, 2)};
`;
  writeFileSync(`./src/${name}.ts`, content);
}
