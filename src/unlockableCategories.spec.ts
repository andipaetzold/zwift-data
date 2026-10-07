import { unlockableCategories } from "./unlockableCategories.js";

it("Unique ids", () => {
  expect(new Set(unlockableCategories.map((s) => s.id)).size).toBe(
    unlockableCategories.length,
  );
});
