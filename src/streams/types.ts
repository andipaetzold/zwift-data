/** A geographic point in latitude, longitude order, in degrees. */
export type Coordinate = readonly [latitude: number, longitude: number];

/** Ordered coordinates from the corresponding Strava segment stream. */
export type Coordinates = ReadonlyArray<Coordinate>;

/** Rounded Strava streams with matching indices across all three arrays. */
export interface StreamData {
  /** Latitude, longitude pairs in degrees, rounded to six decimals in source order. */
  readonly latlng: Coordinates;
  /** Cumulative distance in meters, rounded to one decimal. */
  readonly distance: ReadonlyArray<number>;
  /** Altitude in meters, rounded to one decimal without corrections. */
  readonly altitude: ReadonlyArray<number>;
}
