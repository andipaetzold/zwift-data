export interface World {
  /**
   * Zwift internal world/map id
   */
  id: number;

  /**
   * Name of the world/map
   */
  name: string;

  /**
   * Unique url-safe string to reference the world
   */
  slug: WorldSlug;

  /**
   * Bounds of the world
   */
  bounds: [
    [latitude: number, longitude: number],
    [latitude: number, longitude: number]
  ];

  /**
   * URL to the image of the world
   */
  imageUrl: string;
}

export type WorldSlug =
  | "bologna"
  | "crit-city"
  | "france"
  | "innsbruck"
  | "london"
  | "paris"
  | "makuri-islands"
  | "new-york"
  | "richmond"
  | "watopia"
  | "yorkshire";

export interface Route {
  /**
   * Zwift internal route id. Optional as the id is not present for all routes
   */
  id?: number;

  /**
   * The world the route is in
   */
  world: WorldSlug;

  /**
   * Name of the route
   */
  name: string;

  /**
   * Unique url-safe string to reference the route
   */
  slug: string;

  /**
   * Distance of the route in kilometers
   */
  distance: number;

  /**
   * Total elevation gain on the route in meters
   */
  elevation: number;

  /**
   * Distance of the lead in
   */
  leadInDistance?: number;

  /**
   * Elevation gain of the lead in
   */
  leadInElevation?: number;

  /**
   * Distance of the lead in during free ride or meetups
   */
  leadInDistanceFreeRide?: number;

  /**
   * Elevation gain of the lead in during free ride or meetups
   */
  leadInElevationFreeRide?: number;

  /**
   * Distance of the lead in during meetups
   */
  leadInDistanceMeetups?: number;

  /**
   * Elevation gain of the lead in during meetups
   */
  leadInElevationInMeetups?: number;

  /**
   * Experience points you gain when finishing the route
   */
  experience?: number;

  /**
   * Official segments on the route sorted by appearance. Segments are listed multiple times if they are ridden multiple times.
   */
  segments: ReadonlyArray<string>;

  /**
   * Id of the corresponding strava segment
   */
  stravaSegmentId?: number;

  /**
   * Url of the corresponding strava segment
   */
  stravaSegmentUrl?: string;

  /**
   * Url of the Zwift insiders page
   */
  zwiftInsiderUrl?: string;

  /**
   * Url of the route on What's on Zwift
   */
  whatsOnZwiftUrl?: string;

  /**
   * Types of sport that can complete this route
   */
  sports: ReadonlyArray<Sport>;

  /**
   * `true`, if the route can not be selected in the start screen and can only be ridden in events
   */
  eventOnly: boolean;

  /**
   * `true`, if the route can only be ridden from a certain level
   */
  levelLocked: boolean;

  /**
   * `true`, if the route is a lap
   */
  lap: boolean;

  /**
   * `true`, if the route supports time trial events
   */
  supportsTT: boolean;

  /**
   * `true`, if the route is available for meetups
   */
  supportsMeetups: boolean;
}

export type Sport = "running" | "cycling";

export interface Segment {
  /**
   * World the segment is in
   */
  world: WorldSlug;

  /**
   * Name of the segment
   */
  name: string;

  /**
   * Unique url-safe string to reference the segment
   */
  slug: string;

  /**
   * Distance of the segment
   */
  distance: number;

  /**
   * Total elevation gain of the segment
   */
  elevation?: number;

  /**
   * Average include of the segment. `0` if the segment is a lap.
   */
  avgIncline?: number;

  /**
   * Id of the corresponding strava segment
   */
  stravaSegmentId?: number;

  /**
   * Url of the corresponding strava segment
   */
  stravaSegmentUrl?: string;

  /**
   * Type of the segment
   */
  type: SegmentType;

  /**
   * Url of the route on What's on Zwift
   */
  whatsOnZwiftUrl?: string;

  /**
   * Rating of a climb segment. Only available if `type=climb`.
   */
  climbType?: "HC" | "4" | "3" | "2" | "1";
}

export type SegmentType = "sprint" | "climb" | "segment";

export interface BikeFrame {
  id: number;
  name: string;
  modelYear?: number;
  isTT: boolean;
}

export interface Jersey {
  id: number;
  name: string;
  imageName: string;
}

export interface TrainingPlan {
  id: number;
  name: string;
  imageName: string;
}

export interface RunShirt {
  id: number;
  name: string;
  imageName: string;
}

export interface RunShort {
  id: number;
  name: string;
  imageName: string;
}

export interface RunShoe {
  id: number;
  name: string;
  imageName: string;
}

export interface BikeShoe {
  id: number;
  name: string;
  imageName: string;
}

export interface BikeFrontWheel {
  id: number;
  name: string;
  imageName: string;
}

export interface BikeRearWheel {
  id: number;
  name: string;
  imageName: string;
}

export interface PaintJob {
  id: number;
  name: string;
}

export interface Sock {
  id: number;
  name: string;
  imageName: string;
}

export interface Glass {
  id: number;
  name: string;
  imageName: string;
}

export interface Headgear {
  id: number;
  name: string;
  imageName: string;
}

export interface Achievements {
  id: number;
  name: string;
  imageName: string;
}

export interface Challenge {
  id: number;
  name: string;
  imageName: string;
}

export interface NotableMomentType {
  id: number;
  name: string;
  priority: number;
  imageName: string;
}

export interface UnlockableCategory {
  id: number;
  name: string;
}
