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
    return { latlng: data.latlng, distanceStream: data.distance };
  } catch (cause) {
    throw new Error(`Error fetching Strava segment '${stravaSegmentId}'`, {
      cause,
    });
  }
}
