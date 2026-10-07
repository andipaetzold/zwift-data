import { paintJobs } from "./paintJobs.js";

it("Unique ids", () => {
  expect(new Set(paintJobs.map((s) => s.id)).size).toBe(paintJobs.length);
});
