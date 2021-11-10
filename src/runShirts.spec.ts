import { runShirts } from "./runShirts";

it("Unique ids", () => {
  expect(new Set(runShirts.map((s) => s.id)).size).toBe(runShirts.length);
});
