import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';

const { Pool } = pkg;

const dialect = new PostgresDialect({
    pool: new Pool({
      database: 'replaceWithDatabase',
      host: 'replaceWithHost',
      user: 'replaceWithOwner',
      port: 5432,
      max: 10, 
      ssl: true,
      password: 'fakepass',
      
    }),
  });

export const db = new Kysely<Database>({
    dialect,
});