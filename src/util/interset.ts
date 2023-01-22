export class Interset<T> {
  private readonly set: Set<T>;
  constructor(arr: T[]) {
    this.set = new Set(arr);
  }

  get asArray() {
    return Array.from(this.set.values());
  }

  intersects(...other: T[]): boolean {
    return other.some(c => this.set.has(c));
  }
}
