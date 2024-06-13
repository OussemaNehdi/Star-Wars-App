import { Title } from "@solidjs/meta";
import ShowSaved from "../components/showSaved";
import SearchStuff from "../components/searchStuff";

export default function Home() {


    

  return (
    <main>
      <Title>Index</Title>
      <h1>Home</h1>
    
      {ShowSaved()}
      {SearchStuff()}

    </main>
  );
}
