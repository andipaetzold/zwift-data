import * as turf from "@turf/turf";
import fetch from "node-fetch";

const TOLERANCE = 5;
const OPTIONS = { units: "meters" };

export async function findSegmentsOnRoute(route, segments) {
  console.log(`Calculating segments on route ${route.slug}`);

  const url = `https://www.strava.com/stream/segments/${route.stravaSegmentId}?streams%5B%5D=latlng&streams%5B%5D=distance`;
  const response = await fetch(url);
  const data = await response.json();
  const routeLatLng = data.latlng;
  const routeDistance = data.distance;

  const segmentsOnRoute = segments.flatMap((segment) =>
    findSegmentOnRoute(routeLatLng, segment)
  );
  return segmentsOnRoute
    .sort((a, b) => a.from - b.from)
    .map(({ segment, from, to }) => ({
      from: Math.round(routeDistance[from]) / 1_000,
      to: Math.round(routeDistance[to]) / 1_000,
      segment,
    }));
}

function findSegmentOnRoute(routeLatLng, segment) {
  const segmentLatLng = segment.latlng;
  const overlap = [];
  for (
    let startPointIndex = 0;
    startPointIndex < routeLatLng.length - 3;
    ++startPointIndex
  ) {
    if (
      turf.pointToLineDistance(
        turf.point(segmentLatLng[0]),
        turf.lineString(
          routeLatLng.slice(startPointIndex, startPointIndex + 2)
        ),
        OPTIONS
      ) > TOLERANCE
    ) {
      continue;
    }

    const overlapLength = doesRouteStartWithSegment(
      routeLatLng.slice(startPointIndex),
      segmentLatLng
    );
    if (overlapLength !== undefined) {
      overlap.push({
        from: startPointIndex,
        to: startPointIndex + overlapLength,
        segment: segment.slug,
      });
      startPointIndex += overlapLength;
    }
  }

  return overlap;
}

function doesRouteStartWithSegment(route, segment) {
  let routeIndex = 0;
  const routeBack = () => route[routeIndex];
  const routeFront = () => route[routeIndex + 1];
  const routeLine = () => turf.lineString([routeBack(), routeFront()]);

  let segmentIndex = 0;
  const segmentBack = () => segment[segmentIndex];
  const segmentFront = () => segment[segmentIndex + 1];
  const segmentLine = () => turf.lineString([segmentBack(), segmentFront()]);

  const {
    properties: { dist: startDistanceToRoute },
  } = turf.nearestPointOnLine(routeLine(), segmentBack(), OPTIONS);
  const {
    properties: { dist: startDistanceToSegment },
  } = turf.nearestPointOnLine(segmentLine(), routeBack(), OPTIONS);

  if (Math.min(startDistanceToRoute, startDistanceToSegment) > TOLERANCE) {
    return undefined;
  }

  while (routeIndex < route.length - 1 && segmentIndex < segment.length - 1) {
    const {
      properties: { dist: distanceToRoute },
    } = turf.nearestPointOnLine(routeLine(), segmentFront(), OPTIONS);

    const {
      properties: { dist: distanceToSegment },
    } = turf.nearestPointOnLine(segmentLine(), routeFront(), OPTIONS);

    if (Math.min(distanceToRoute, distanceToSegment) > TOLERANCE) {
      return 0;
    }

    if (distanceToRoute < distanceToSegment) {
      ++segmentIndex;
    } else {
      ++routeIndex;
    }
  }

  if (routeIndex >= route.length - 1) {
    return undefined;
  }

  return routeIndex;
}
