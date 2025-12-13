import { segments } from "../../data/segments.mjs";
import { SingleBar } from "cli-progress";

export async function fetchSegments() {
  const filteredSegments = segments.filter(
    (segment) => !!segment.stravaSegmentId
  );

  const bar = new SingleBar({
    format:
      "Fetching segments [{bar}] {percentage}% | {value}/{total}",
  });
  bar.start(filteredSegments.length, 0);

  const result = await Promise.all(
    filteredSegments.map(async (segment) => {
      const url = `https://www.strava.com/stream/segments/${segment.stravaSegmentId}?streams%5B%5D=latlng&streams%5B%5D=distance`;
      const response = await fetch(url);
      const data = await response.json();
      if ("error" in data) {
        throw new Error(
          `Error fetching segment '${segment.stravaSegmentId}'`,
          data.error
        );
      }

      bar.increment();
      return {
        ...segment,
        latlng: data.latlng,
        distanceStream: data.distance,
      };
    })
  );

  bar.stop();

  return result;
}
