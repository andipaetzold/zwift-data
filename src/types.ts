export interface World {
  id: number;
  name: string;
  slug: WorldSlug;
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
  id?: number;
  world: WorldSlug;
  name: string;
  slug: string;
  distance: number;
  elevation: number;
  leadInDistance?: number;
  leadInElevation?: number;
  experience?: number;
  segments: string[];
  stravaSegmentId?: number;
  stravaSegmentUrl?: string;
  zwiftInsiderUrl?: string;
  whatsOnZwiftUrl?: string;
  sports: Sport[];
  eventOnly: boolean;
}

export type Sport = "running" | "cycling";

export interface Segment {
  world: WorldSlug;
  name: string;
  slug: string;
  distance: number;
  elevation?: number;
  avgIncline?: number;
  stravaSegmentId?: number;
  stravaSegmentUrl?: string;
  type: SegmentType;
  whatsOnZwiftUrl?: string;
  climbType?: "HC" | "4" | "3" | "2" | "1";
}

export type SegmentType = "sprint" | "climb" | "segment";
