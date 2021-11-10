import { jerseys } from "./jerseys";

it("Unique ids", () => {
  expect(new Set(jerseys.map((s) => s.id)).size).toBe(jerseys.length);
});
