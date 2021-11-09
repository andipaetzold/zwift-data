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
