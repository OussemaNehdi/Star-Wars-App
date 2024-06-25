"use server"
import {db} from './database';

//server function calls

async function giveMeInfos(myString: string) {
    const response = await fetch(`https://swapi.dev/api/people/?search=${myString}&format=json`);
    const data = await response.json();
    return data;
}

export async function serverStartSearch(searchTerm : string) {
    try {
        
        const myString = searchTerm;
        const infos = await giveMeInfos(myString);

        console.log(infos)

        return infos;
    } catch (error) {
        console.error("Error fetching number fact:", error);
        return { fact: error, number: 0, found: false, type: "trivia" };
    }
}

export async function serverSaveResults(myInfos : any) {
    try {
        
        const actors = myInfos;
        for (let i = 0; i < actors.length; i++) {
            await db.insertInto('actor').values({ person: actors[i].name, eye_color: actors[i].eye_color }).execute();
        }
    
        return new Response(JSON.stringify({ message: "everything inserted successfully" }), { status: 200 });
      } catch (error) {
        console.error('Error inserting stuff:', error);

        return new Response('Internal Server Error', { status: 500 });
      }
}
const getActors = async () => {
    const x = await db.selectFrom('actor').selectAll().execute();
    return x;
}
export async function serverGetActors() {
    const actors = await getActors();
    return {"actors" : actors};
}