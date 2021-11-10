import { bikeRearWheels } from "./bikeRearWheels";

it("Unique ids", () => {
  expect(new Set(bikeRearWheels.map((s) => s.id)).size).toBe(
    bikeRearWheels.length
  );
});
