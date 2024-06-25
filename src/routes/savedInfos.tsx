import {For,  createResource} from 'solid-js';
import styles from '/src/components/styles.module.css';
import { serverGetActors } from '~/serverFunctions';

//might need to refresh the page due to a bug

//1 server functions call from the "use server" file serverFunctions.ts
const getActors = async () => {
    const res = await serverGetActors();
    return res.actors
}


export default function savedFactsShow() {
  
    const [actors] = createResource(getActors);
    return ( 
    <main class={styles.main}>
      <Suspense fallback= {<div>Loading ...</div>}>
      <ul class={styles.ul}>
      <For each={actors()}>{(actor, i) =>
        <li class={styles.li}>
          <h3>Name:</h3> {actor.person} <h3>Eye Color</h3> {actor.eye_color}
      </li>
      }
      </For>

  </ul>

      </Suspense>
    </main>
    );


}




