import { runShorts } from "./runShorts.js";

it("Unique ids", () => {
  expect(new Set(runShorts.map((s) => s.id)).size).toBe(runShorts.length);
});
