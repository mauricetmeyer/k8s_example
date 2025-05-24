import { DataSource, Entity, EntityManager, EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { SnakeNamingStrategy }                  from 'typeorm-naming-strategies';

import { Registry } from './registry';

export type AccessorTransactionFn = (manager: EntityManager) => Promise<any>

export function Model(name: string, table: string)
{
  return (target: any) => {
    if (Registry.get(name)) {
      /**
       * The entity definition is already registered.
       * Maybe throw an error here? */
      return;
    }

    target.prototype.modelName = name;
    Registry.register(target);

    /**
     * This decorator automatically
     * sets up the TypeORM representation. */
    Entity(table)(target);
  };
}

export class Accessor
{
  public handle?: DataSource;

  constructor(private url: string)
  {
    /**
     * Nothing... */
  }

  /**
   * Connects to the database.
   *
   * @returns Promise<Accessor>
   */
  public async connect(): Promise<Accessor>
  {
    /**
     * Get list of entities from the registry,
     * and try to connect to Postgres instance. */
    this.handle = new DataSource({
      url: this.url,
      type: 'postgres',
      synchronize: false,
      entities: Registry.getEntities(),
      namingStrategy: new SnakeNamingStrategy(),
      ssl: process.env.POSTGRES_CERT ? { ca: process.env.POSTGRES_CERT } : false
    });

    await this.handle.initialize();
    return this;
  }

  public transaction (fn: AccessorTransactionFn) : Promise<any>
  {
    if (!this.handle) {
      throw new Error('Accessor is not connected to the database');
    }

    return this.handle.transaction(fn);
  }

  public getRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T>
  {
    if (!this.handle) {
      throw new Error('Accessor is not connected to the database');
    }

    return this.handle.getRepository<T>(entity);
  }
}
