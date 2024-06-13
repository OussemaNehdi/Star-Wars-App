import { Title } from "@solidjs/meta";
import { For,createSignal } from "solid-js";
import styles from '/src/components/styles.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [myInfos , setMyInfos] = createSignal([]);

  const handleInputChange = (e : Event) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm()); // debug
  };

  const startSearch = async (e : Event) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const res = await fetch(`http://localhost:3001/api/getSearch/${searchTerm()}`);
    if (res.ok) {
      console.log("Search done successfully");
      const data = await res.json();
      setMyInfos(data.results)


    } else {
      console.log("Failed to xxxsearch");
    }
  };
  const saveResults = async () => {
    const res = await fetch("http://localhost:3001/api/insertActors", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"actors": myInfos()})
    });
    if (res.ok) {
        console.log("Fact saved!");
    } else {
        console.log("Failed to save ");
    }
    
}


  return (
    <main class={styles.main}>
      <Title>Welcome</Title>
      <h1>Search a Character</h1>

      


      <form onSubmit={startSearch}>
        <input
          type="search"
          value={searchTerm()}
          onInput={handleInputChange}
          placeholder="Search..."
          class={styles.input}
        />
        <button type="submit" class={styles.button}>Show Results</button>
        
      </form>
      <button onClick={saveResults}>Save Results</button>
      <style>{`
        input[type=search]::-webkit-search-cancel-button {
          -webkit-appearance: searchfield-cancel-button;
        }
      `}</style>

<ul class={styles.ul}>
        <For each={myInfos()}>{(myInfo, i) =>
          <li class={styles.li}>
            <h3>Name:</h3> {myInfo.name} <h3>Eye Color</h3> {myInfo.eye_color}
          </li>
        }
        </For>
      </ul>
    
    </main>
  );
}
