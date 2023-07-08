import * as turf from "@turf/turf";
import fetch from "node-fetch";
import range from "lodash/range.js";

const TOLERANCE = 5;
const OPTIONS = { units: "meters" };

export async function findSegmentsOnRoute(route, segments) {
  console.log(`Calculating segments on route ${route.slug}`);

  const url = `https://www.strava.com/stream/segments/${route.stravaSegmentId}?streams%5B%5D=latlng&streams%5B%5D=distance`;
  const response = await fetch(url);
  const data = await response.json();
  const routeLatLng = data.latlng;
  const routeDistance = data.distance;

  const segmentsOnRoute = segments
    .filter((s) => !(route.invalidSegments ?? []).includes(s.slug))
    .flatMap((segment) =>
      findSegmentOnRoute(routeLatLng, routeDistance, segment),
    );

  return segmentsOnRoute
    .sort((a, b) => a.from - b.from)
    .map(({ segment, from, to }) => ({
      from: Math.round(routeDistance[from]) / 1_000,
      to: Math.round(routeDistance[to]) / 1_000,
      segment,
    }));
}

function findSegmentOnRoute(routeLatLng, routeDistanceStream, segment) {
  const segmentDistanceInMeters = segment.distance * 1_000;

  const overlap = [];
  for (
    let startPointIndex = 0;
    startPointIndex < routeLatLng.length - 3;
    ++startPointIndex
  ) {
    if (
      lineDistance(
        segment.latlng.slice(0, 2),
        routeLatLng.slice(startPointIndex, startPointIndex + 2),
      ) > TOLERANCE
    ) {
      continue;
    }

    const routeDistanceStart = routeDistanceStream[startPointIndex];

    const newOverlaps = range(startPointIndex + 1, routeLatLng.length - 2)
      .filter(
        // check end
        (endPointIndex) =>
          lineDistance(
            segment.latlng.slice(
              segment.latlng.length - 3,
              segment.latlng.length - 1,
            ),
            routeLatLng.slice(endPointIndex, endPointIndex + 2),
          ) <= TOLERANCE,
      )
      .filter(
        // check distance
        (endPointIndex) =>
          Math.abs(
            segmentDistanceInMeters -
              (routeDistanceStream[endPointIndex] - routeDistanceStart),
          ) <=
          0.1 * segmentDistanceInMeters,
      )
      .filter(
        // check 20%
        (endPointIndex) => {
          if (startPointIndex === 384) {
            return true;
          }
          const middlePointIndex =
            startPointIndex +
            Math.ceil((endPointIndex - startPointIndex) * 0.2);

          for (
            let segmentIndex = 0;
            segmentIndex < segment.latlng.length - 1;
            ++segmentIndex
          ) {
            if (
              lineDistance(
                segment.latlng.slice(segmentIndex, segmentIndex + 2),
                routeLatLng.slice(middlePointIndex, middlePointIndex + 2),
              ) > TOLERANCE
            ) {
              continue;
            }

            if (
              Math.abs(
                routeDistanceStream[middlePointIndex] -
                  routeDistanceStart -
                  segment.distanceStream[segmentIndex],
              ) >
              0.1 * segmentDistanceInMeters
            ) {
              continue;
            }

            return true;
          }

          return false;
        },
      );

    if (newOverlaps.length === 0) {
      continue;
    }

    overlap.push({
      from: startPointIndex,
      to: newOverlaps[0],
      segment: segment.slug,
    });

    startPointIndex += Math.ceil((newOverlaps[0] - startPointIndex) / 2);
  }

  return overlap;
}

function lineDistance(lineA, lineB) {
  const distanceA = turf.pointToLineDistance(
    turf.point(lineA[0]),
    turf.lineString(lineB),
    OPTIONS,
  );
  const distanceB = turf.pointToLineDistance(
    turf.point(lineB[0]),
    turf.lineString(lineA),
    OPTIONS,
  );

  return Math.min(distanceA, distanceB);
}
