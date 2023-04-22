export class Interset<T> {
  private readonly set: Set<T>;
  constructor(arr: T[]) {
    this.set = new Set(arr);
  }

  get asArray() {
    return Array.from(this.set.values());
  }

  has(...other: T[]): boolean {
    return other.some(c => this.set.has(c));
  }
  equals(...other: T[]): boolean {
    return (
      other.every(c => this.set.has(c)) && new Set(other).size === this.set.size
    );
  }
}
