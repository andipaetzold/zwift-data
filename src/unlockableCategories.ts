import { UnlockableCategory } from "./types";

export const unlockableCategories: ReadonlyArray<UnlockableCategory> = (
  [
    [0, "CYCLING_BIKE"],
    [1, "CYCLING_JERSEY"],
    [2, "CYCLING_WHEELS"],
    [3, "CYCLING_PAINTJOB"],
    [4, "CYCLING_HEADGEAR"],
    [5, "CYCLING_SHOES"],
    [6, "CYCLING_GLOVES"],
    [7, "RUNNING_HEADGEAR"],
    [8, "RUNNING_SHOES"],
    [9, "RUNNING_KIT"],
    [10, "SOCKS"],
    [11, "EYEWEAR"],
    [12, "STREAK_FLAIR"],
  ] as const
).map(([id, name]) => ({ id, name }));
