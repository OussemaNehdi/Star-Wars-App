import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';
import {For,  createResource} from 'solid-js';

const { Pool } = pkg;

//included the database here due to a bug (caused by const {Pool} = pkg ?)

const dialect = new PostgresDialect({
    pool: new Pool({
      database: 'newDataBase',
      host: 'ep-yellow-pine-a5talan4.us-east-2.aws.neon.tech',
      user: 'mySimple_owner',
      port: 5432,
      max: 10, 
      ssl: true,
      password: 'yqNDIKY4Lve8',
      
    }),
  });

const db = new Kysely<Database>({
    dialect,
});

const getActors = async () => {
    const x = await db.selectFrom('actor').selectAll().execute();
    return x;
}



export default function savedFactsShow() {
  
    const [actors] = createResource(getActors);
    return ( 
    <main>
      <ul>
        <For each={actors()}>{(actor , i)=>
        <li>
            name : {actor.person} / eye color : {actor.eye_color}
        </li>
        }
        </For>

    </ul>
    </main>
    );


}




