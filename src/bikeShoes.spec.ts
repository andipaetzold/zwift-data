import { bikeShoes } from "./bikeShoes.js";

it("Unique ids", () => {
  expect(new Set(bikeShoes.map((s) => s.id)).size).toBe(bikeShoes.length);
});
