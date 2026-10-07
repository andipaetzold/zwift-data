export function validateCoordinates(latlng) {
  if (
    !Array.isArray(latlng) ||
    latlng.length < 2 ||
    !latlng.every(
      (point) =>
        Array.isArray(point) &&
        point.length === 2 &&
        Number.isFinite(point[0]) &&
        Math.abs(point[0]) <= 90 &&
        Number.isFinite(point[1]) &&
        Math.abs(point[1]) <= 180,
    )
  ) {
    throw new Error("Invalid latitude/longitude stream");
  }
}

export async function fetchStream(stravaSegmentId) {
  try {
    const response = await fetch(
      `https://www.strava.com/stream/segments/${stravaSegmentId}?streams%5B%5D=latlng&streams%5B%5D=distance`,
      {
        headers: process.env.STRAVA_COOKIE
          ? { cookie: process.env.STRAVA_COOKIE }
          : {},
      },
    );
    if (!response.ok || new URL(response.url).pathname.startsWith("/login")) {
      throw new Error(`Strava returned ${response.status} or requires login`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error("Strava returned an error");
    }
    validateCoordinates(data.latlng);
    if (
      !Array.isArray(data.distance) ||
      data.distance.length !== data.latlng.length ||
      !data.distance.every(
        (distance) => Number.isFinite(distance) && distance >= 0,
      )
    ) {
      throw new Error("Invalid distance stream");
    }
    return { latlng: data.latlng, distanceStream: data.distance };
  } catch (cause) {
    throw new Error(`Error fetching Strava segment '${stravaSegmentId}'`, {
      cause,
    });
  }
}
