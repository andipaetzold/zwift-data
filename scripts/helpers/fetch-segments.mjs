import { segments } from "../../data/segments.mjs";
import { SingleBar } from "cli-progress";
import { fetchStream } from "./fetch-stream.mjs";

export async function fetchSegments() {
  const filteredSegments = segments.filter(
    (segment) => !!segment.stravaSegmentId,
  );

  const bar = new SingleBar({
    format: "Fetching segments [{bar}] {percentage}% | {value}/{total}",
  });
  bar.start(filteredSegments.length, 0);

  const result = await Promise.all(
    filteredSegments.map(async (segment) => {
      const stream = await fetchStream(segment.stravaSegmentId);
      bar.increment();
      return { ...segment, ...stream };
    }),
  );

  bar.stop();

  return result;
}
