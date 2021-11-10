import { paintJobs } from "./paintJobs";

it("Unique ids", () => {
  expect(new Set(paintJobs.map((s) => s.id)).size).toBe(paintJobs.length);
});
