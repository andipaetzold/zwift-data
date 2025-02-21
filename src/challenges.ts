import { Challenge } from "./types";

export const challenges: ReadonlyArray<Challenge> = (
  [
    [1231, "Climb Mt. Everest", "Climb_Mt__Everest"],
    [4000, "Factory Tour", "Factory_Tour"],
    [1234153, "Ride California", "Ride_California"],
    [15313453, "Tour Italy", "Tour_Italy"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
