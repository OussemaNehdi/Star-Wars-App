import { Title } from "@solidjs/meta";
import ShowSaved from "../components/showSaved";
import SearchStuff from "../components/searchStuff";
import styles from '/src/components/styles.module.css';

// IMPORTANT : USE PORT 3001 INSTEAD OF 3000
export default function Home() {


    

  return (
    <main class={styles.main}>
      <Title>Index</Title>
      <h1>Home</h1>
    
      {ShowSaved()}
      {SearchStuff()}

    </main>
  );
}
