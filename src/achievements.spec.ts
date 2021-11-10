import { achievements } from "./achievements";

it("Unique ids", () => {
  expect(new Set(achievements.map((s) => s.id)).size).toBe(achievements.length);
});
