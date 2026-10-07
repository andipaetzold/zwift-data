import { socks } from "./socks.js";

it("Unique ids", () => {
  expect(new Set(socks.map((s) => s.id)).size).toBe(socks.length);
});
