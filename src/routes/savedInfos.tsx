import {For,  createResource} from 'solid-js';


//might need to refresh the page due to a bug



const getActors = async () => {
    const res = await fetch("http://localhost:3001/api/getSavedInfos");
    const data = await res.json();
    return data.actors;
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




