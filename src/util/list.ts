export function unique<T>(arr: T[]) {
  return Array.from(new Set(arr).values());
}

export function sortBy<T, S>(arr: T[], cb: (elm: T) => S): T[] {
  const copy = arr.concat();
  copy.sort((a,b) => cb(a) < cb(b) ? -1 : 1);
  return copy;
}
