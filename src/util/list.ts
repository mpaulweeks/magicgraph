export function unique<T>(arr: T[]) {
  return Array.from(new Set(arr).values());
}

export function sortBy<T, S>(arr: T[], cb: (elm: T) => S): T[] {
  const copy = arr.concat();
  copy.sort((a,b) => cb(a) < cb(b) ? -1 : 1);
  return copy;
}

export function groupBy<T, K>(arr: T[], cb: (elm: T) => K): T[][] {
  const lookup = new Map<K, T[]>();
  arr.forEach(elm => {
    const key = cb(elm);
    const bin = lookup.get(key) ?? [];
    lookup.set(key, bin.concat(elm));
  });
  return Array.from(lookup.values());
}
