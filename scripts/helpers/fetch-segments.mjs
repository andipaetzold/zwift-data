import { segments } from "../../data/segments.mjs";
import fetch from "node-fetch";

export async function fetchSegments() {
  return await Promise.all(
    segments
      .filter((segment) => !!segment.stravaSegmentId)
      .map(async (segment) => {
        console.log(`Loading segment ${segment.name}`);

        const url = `https://www.strava.com/stream/segments/${segment.stravaSegmentId}?streams%5B%5D=latlng&streams%5B%5D=distance`;
        const response = await fetch(url);
        const data = await response.json();
        return {
          ...segment,
          latlng: data.latlng,
          distanceStream: data.distance,
        };
      })
  );
}
