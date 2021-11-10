import { glasses } from "./glasses";

it("Unique ids", () => {
  expect(new Set(glasses.map((s) => s.id)).size).toBe(glasses.length);
});
