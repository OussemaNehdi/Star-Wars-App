import { Title } from "@solidjs/meta";
import styles from '/src/components/styles.module.css';
import {createSignal} from "solid-js"

import C1 from "./home"
import C2 from "./savedInfos"

export default function MyHome() {
    const [myValue , setMyValue] = createSignal("1")

    const whenChanged = (e : Event) => {
        setMyValue(e.target.value)
    }

    return (
    <main class={styles.main}>
      <Title>Home</Title>
      <h2>What do you want to do?</h2>
      

    <select onChange={whenChanged}>
        <option value="1">Search for a charcter</option>
        <option value="2">My Saved charcters</option>
    </select>

    {
        myValue() == "1" ? 
        <C1></C1> :
        <C2></C2>

    }



    </main>
  );
}
