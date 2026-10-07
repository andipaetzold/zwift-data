import { trainingPlans } from "./trainingPlans.js";

it("Unique ids", () => {
  expect(new Set(trainingPlans.map((s) => s.id)).size).toBe(
    trainingPlans.length,
  );
});
