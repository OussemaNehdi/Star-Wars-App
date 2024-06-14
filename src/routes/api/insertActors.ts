
import pkg from 'pg';
import { APIEvent } from "@solidjs/start/server";

import {db} from '../database';


export async function POST(event: APIEvent) {
    try {
        const body = await event.request.json();
        const actors = body.actors;
  
    
        if (!actors) {
          return new Response('Invalid input', { status: 400 });
        }
    
        for (let i = 0; i < actors.length; i++) {
            await db.insertInto('actor').values({ person: actors[i].name, eye_color: actors[i].eye_color }).execute();
        }
    
        return new Response(JSON.stringify({ message: "everything inserted successfully" }), { status: 200 });
      } catch (error) {
        console.error('Error inserting stuff:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
}