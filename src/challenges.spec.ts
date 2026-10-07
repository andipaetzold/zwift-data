import { challenges } from "./challenges.js";

it("Unique ids", () => {
  expect(new Set(challenges.map((s) => s.id)).size).toBe(challenges.length);
});
