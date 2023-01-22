export class IdMapper<T> {
  private counter = 1;
  readonly lookup = new Map<T, number>();

  id(key: T): number {
    if (!this.lookup.has(key)) {
      this.lookup.set(key, this.counter++);
    }
    return this.lookup.get(key)!;
  }
}
