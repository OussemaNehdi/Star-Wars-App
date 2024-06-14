import pkg from 'pg';

const { Pool } = pkg;



import {db} from '../database';


const getActors = async () => {
    const x = await db.selectFrom('actor').selectAll().execute();
    return x;
}

export async function GET() {
    const actors = await getActors();
    return {"actors" : actors};
}