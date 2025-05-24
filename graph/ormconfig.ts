import { DataSource }          from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { env }                 from '@leaflytics/shared';

export default new DataSource({
  type: 'postgres',
  url:  env.str('POSTGRES_URI'),
  ssl: process.env.POSTGRES_CERT ? {
    rejectUnauthorized: false,
    ca: process.env.POSTGRES_CERT
  } : false,
  synchronize: false,
  entities: ['src/models/**.ts'],
  migrations: ['migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy()
});
