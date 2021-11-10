import { bikeShoes } from "./bikeShoes";

it("Unique ids", () => {
  expect(new Set(bikeShoes.map((s) => s.id)).size).toBe(bikeShoes.length);
});
