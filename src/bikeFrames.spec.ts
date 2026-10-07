import { bikeFrames } from "./bikeFrames.js";

it("Unique ids", () => {
  expect(new Set(bikeFrames.map((s) => s.id)).size).toBe(bikeFrames.length);
});
