import { bikeFrontWheels } from "./bikeFrontWheels.js";

it("Unique ids", () => {
  expect(new Set(bikeFrontWheels.map((s) => s.id)).size).toBe(
    bikeFrontWheels.length,
  );
});
