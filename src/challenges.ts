import { Challenge } from "./types";

export const challenges: ReadonlyArray<Challenge> = (
  [
    [1231, "CLIMB MT.EVEREST", "CLIMB_MT_EVEREST"],
    [1234153, "RIDE CALIFORNIA", "RIDE_CALIFORNIA"],
    [15313453, "TOUR ITALY", "TOUR_ITALY"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
