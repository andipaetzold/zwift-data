import { bikeRearWheels } from "./bikeRearWheels.js";

it("Unique ids", () => {
  expect(new Set(bikeRearWheels.map((s) => s.id)).size).toBe(
    bikeRearWheels.length,
  );
});
