import { unlockableCategories } from "./unlockableCategories";

it("Unique ids", () => {
  expect(new Set(unlockableCategories.map((s) => s.id)).size).toBe(
    unlockableCategories.length
  );
});
