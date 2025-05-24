interface Ctor<T> {
  new (...args: any[]): T;
}

export class Registry {
  private static readonly lookup: Record<string, Ctor<any>> = {};
  public static get(name: string): Ctor<any> {
    return this.lookup[name];
  }

  public static register(model: Ctor<any>): void {
    this.lookup[model.prototype.modelName] = model;
  }

  public static getEntities(): Ctor<any>[] {
    return Object.values(this.lookup);
  }
}
