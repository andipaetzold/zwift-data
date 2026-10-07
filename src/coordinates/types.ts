/** A geographic point in latitude, longitude order, in degrees. */
export type Coordinate = readonly [latitude: number, longitude: number];

/** Ordered coordinates from the corresponding Strava segment stream. */
export type Coordinates = ReadonlyArray<Coordinate>;
