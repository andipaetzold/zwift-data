export function formatDistance(d) {
  if (d === undefined) {
    return undefined;
  }
  return Math.round(+d) / 1000;
}

export function formatElevation(e) {
  if (e === undefined) {
    return undefined;
  }
  return Math.round(+e);
}
