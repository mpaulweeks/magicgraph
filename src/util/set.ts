export class Interset<T> {
  set: Set<T>;
  constructor(arr: T[]) {
    this.set = new Set(arr);
  }

  intersects(other: T[]): boolean {
    return other.some(c => this.set.has(c));
  }
}
