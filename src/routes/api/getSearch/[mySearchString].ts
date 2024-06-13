import { APIEvent } from "@solidjs/start/server";


async function giveMeInfos(myString: string) {
    const response = await fetch(`https://swapi.dev/api/people/?search=${myString}&format=json`);
    const data = await response.json();
    return data;
}

export async function GET(event: APIEvent) {
    try {
        
        const myString = event.params.mySearchString;
        const infos = await giveMeInfos(myString);

        
        return infos;
    } catch (error) {
        console.error("Error fetching number fact:", error);
        return { fact: error, number: 0, found: false, type: "trivia" };
    }
}