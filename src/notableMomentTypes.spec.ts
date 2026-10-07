import { notableMomentTypes } from "./notableMomentTypes.js";

it("Unique ids", () => {
  expect(new Set(notableMomentTypes.map((s) => s.id)).size).toBe(
    notableMomentTypes.length,
  );
});
