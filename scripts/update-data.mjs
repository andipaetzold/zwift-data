import fetch from "node-fetch";
import { writeFileSync } from "fs";

const response = await fetch(
  "https://www.zwift.com/zwift-web-pages/gamedictionary"
);

const responseData = await response.json();

// Bike Frames
{
  const bikeFrames = responseData.GameDictionary.BIKEFRAMES[0].BIKEFRAME;
  const data = bikeFrames.map((bikeFrame) => ({
    id: +bikeFrame.$.signature,
    name: bikeFrame.$.name,
    modelYear:
      bikeFrame.$.modelYear === "0" ? undefined : +bikeFrame.$.modelYear,
    isTT: bikeFrame.$.isTT === "1",
  }));

  const content = `import { BikeFrame } from "./types";

export const bikeFrames: BikeFrame[] = ${JSON.stringify(data, undefined, 2)};
`;

  writeFileSync("./src/bike-frames.ts", content);
}

// Jerseys
{
  const jerseys = responseData.GameDictionary.JERSEYS[0].JERSEY;
  const data = jerseys.map((jersey) => ({
    id: +jersey.$.signature,
    name: jersey.$.name,
    imageName: jersey.$.imageName,
  }));

  const content = `import { Jersey } from "./types";

export const jerseys: Jersey[] = ${JSON.stringify(data, undefined, 2)};
`;

  writeFileSync("./src/jersey.ts", content);
}

// Run Shirts
{
  const runShirts =
    responseData.GameDictionary.RUNSHIRTS[0].RUNSHIRT;
  const data = runShirts.map((runShirt) => ({
    id: +runShirt.$.signature,
    name: runShirt.$.name,
    imageName: runShirt.$.imageName,
  }));

  const content = `import { RunShirt } from "./types";

export const runShirt: RunShirt[] = ${JSON.stringify(
    data,
    undefined,
    2
  )};
`;

  writeFileSync("./src/run-shirt.ts", content);
}

// Run Shorts
{
  const runShorts =
    responseData.GameDictionary.RUNSHORTS[0].RUNSHORT;
  const data = runShorts.map((runShort) => ({
    id: +runShort.$.signature,
    name: runShort.$.name,
    imageName: runShort.$.imageName,
  }));

  const content = `import { RunShort } from "./types";

export const runShort: RunShort[] = ${JSON.stringify(
    data,
    undefined,
    2
  )};
`;

  writeFileSync("./src/run-short.ts", content);
}

// Training Plans
{
  const trainingPlans =
    responseData.GameDictionary.TRAINING_PLANS[0].TRAINING_PLAN;
  const data = trainingPlans.map((trainingPlan) => ({
    id: +trainingPlan.$.signature,
    name: trainingPlan.$.name,
    imageName: trainingPlan.$.imageName,
  }));

  const content = `import { TrainingPlan } from "./types";

export const trainingPlans: TrainingPlan[] = ${JSON.stringify(
    data,
    undefined,
    2
  )};
`;

  writeFileSync("./src/training-plans.ts", content);
}
