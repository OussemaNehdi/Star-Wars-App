import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';

const { Pool } = pkg;

const dialect = new PostgresDialect({
    pool: new Pool({
      database: 'NewDataBaseX',
      host: 'ep-winter-brook-a2flmq4s.eu-central-1.aws.neon.tech',
      user: 'NewDataBaseX_owner',
      port: 5432,
      max: 10, 
      ssl: true,
      password: 'QxIBpctPh2u4',
      
    }),
  });

export const db = new Kysely<Database>({
    dialect,
});