import { headgears } from "./headgears.js";

it("Unique ids", () => {
  expect(new Set(headgears.map((s) => s.id)).size).toBe(headgears.length);
});
