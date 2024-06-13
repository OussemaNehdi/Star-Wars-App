import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';
import {For,  createResource} from 'solid-js';

const { Pool } = pkg;

//included the database here due to a bug (caused by const {Pool} = pkg ?)

const dialect = new PostgresDialect({
    pool: new Pool({
      database: 'secondNewDataBase',
      host: 'ep-sparkling-sunset-a2vq12ly.eu-central-1.aws.neon.tech',
      user: 'secondNewDataBase_owner',
      port: 5432,
      max: 10, 
      ssl: true,
      password: 'L2QhPXiekfT9',
      
    }),
  });

const db = new Kysely<Database>({
    dialect,
});

const getActors = async () => {
    const x = await db.selectFrom('actor').selectAll().execute();
    return x;
}

export async function GET() {
    const actors = await getActors();
    return {"actors" : actors};
}