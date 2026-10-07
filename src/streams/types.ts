/** A geographic point in latitude, longitude order, in degrees. */
export type Coordinate = readonly [latitude: number, longitude: number];

/** Ordered coordinates from the corresponding Strava segment stream. */
export type Coordinates = ReadonlyArray<Coordinate>;

/** Raw Strava streams with matching indices across all three arrays. */
export interface StreamData {
  /** Latitude, longitude pairs in degrees, in source order. */
  readonly latlng: Coordinates;
  /** Cumulative distance in meters. */
  readonly distance: ReadonlyArray<number>;
  /** Altitude in meters, without corrections. */
  readonly altitude: ReadonlyArray<number>;
}
