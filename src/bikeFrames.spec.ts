import { bikeFrames } from "./bikeFrames";

it("Unique ids", () => {
  expect(new Set(bikeFrames.map((s) => s.id)).size).toBe(bikeFrames.length);
});
