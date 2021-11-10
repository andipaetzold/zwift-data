import { notableMomentTypes } from "./notableMomentTypes";

it("Unique ids", () => {
  expect(new Set(notableMomentTypes.map((s) => s.id)).size).toBe(notableMomentTypes.length);
});
