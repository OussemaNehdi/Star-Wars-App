import { Title } from "@solidjs/meta";
import { For,createEffect,createSignal } from "solid-js";
import styles from '/src/components/styles.module.css';
import { serverStartSearch, serverSaveResults } from "~/serverFunctions";

export default function Home() {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [debouncedInputValue, setDebouncedInputValue] = createSignal("")

  const [myInfos , setMyInfos] = createSignal([]);

  const handleInputChange = (e : Event) => {
    setSearchTerm(e.target.value);
    //could add other code logic here if needed (could also add the custom suggestions box)
  };
  createEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInputValue(searchTerm());
      
    }, 1000);
    searchTerm()
    return () => clearTimeout(timeout);
  
  }
);

//2 server function calls from the "use server" file serverFunctions.ts
  const startSearch = async (e : Event) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const res = await serverStartSearch(searchTerm())
    setMyInfos(res.results)
  };

  const saveResults = async () => {
    await serverSaveResults(myInfos())
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
      <p>Debounced Value : {debouncedInputValue()}</p>
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
