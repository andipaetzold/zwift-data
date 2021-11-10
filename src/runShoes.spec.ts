import { runShoes } from "./runShoes";

it("Unique ids", () => {
  expect(new Set(runShoes.map((s) => s.id)).size).toBe(runShoes.length);
});
