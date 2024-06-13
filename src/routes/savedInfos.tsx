import {For,  createResource} from 'solid-js';
import styles from '/src/components/styles.module.css';

////might need to refresh the page due to a bug



const getActors = async () => {
    const res = await fetch("http://localhost:3001/api/getSavedInfos");
    const data = await res.json();
    return data.actors;
}



export default function savedFactsShow() {
  
    const [actors] = createResource(getActors);
    return ( 
    <main class={styles.main}>
      <ul class={styles.ul}>
        <For each={actors()}>{(actor, i) =>
          <li class={styles.li}>
            <h3>Name:</h3> {actor.person} <h3>Eye Color</h3> {actor.eye_color}
        </li>
        }
        </For>

    </ul>
    </main>
    );


}




