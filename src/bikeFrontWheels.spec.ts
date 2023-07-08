import { bikeFrontWheels } from "./bikeFrontWheels";

it("Unique ids", () => {
  expect(new Set(bikeFrontWheels.map((s) => s.id)).size).toBe(
    bikeFrontWheels.length,
  );
});
