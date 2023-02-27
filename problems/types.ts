export type BooleanHashMap = Record<string, boolean>;

export class KeyMap {
  private map: BooleanHashMap;

  constructor(targetArray?: unknown[]) {
    this.map = targetArray ? this.createMapFrom(targetArray) : {};
  }

  from(targetArray: unknown[]): KeyMap {
    this.map = this.createMapFrom(targetArray);
    return this;
  }

  contains(key: string): boolean {
    return this.map[key];
  }

  private createMapFrom(targetArray: unknown[]): BooleanHashMap {
    return targetArray.reduce((map: BooleanHashMap, item) => {
      map[item as string] = true;
      return map;
    }, {});
  }
}
