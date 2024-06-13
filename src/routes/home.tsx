import { Title } from "@solidjs/meta";
import { For,createSignal } from "solid-js";

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
        console.log("Cat fact saved successfully!");
    } else {
        console.log("Failed to save cat fact.");
    }
    
}


  return (
    <main>
      <Title>Welcome</Title>
      <h1>Welcome</h1>

      


      <form onSubmit={startSearch}>
        <input
          type="search"
          value={searchTerm()}
          onInput={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Show Results</button>
        
      </form>
      <button onClick={saveResults}>Save Results</button>
      <style>{`
        input[type=search]::-webkit-search-cancel-button {
          -webkit-appearance: searchfield-cancel-button;
        }
      `}</style>

      <ul>
        <For each={myInfos()}>{(myInfo , i)=>
        <li>
            Name : {myInfo.name}   Eye color : {myInfo.eye_color}
        </li>
        }
        </For>

    </ul>
    
    </main>
  );
}
