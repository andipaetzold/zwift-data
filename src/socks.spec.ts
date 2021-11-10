import { socks } from "./socks";

it("Unique ids", () => {
  expect(new Set(socks.map((s) => s.id)).size).toBe(socks.length);
});
