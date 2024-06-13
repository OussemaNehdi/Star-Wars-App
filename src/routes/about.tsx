import { Title } from "@solidjs/meta";
import styles from '/src/components/styles.module.css';

export default function Home() {
  return (
    <main class={styles.main}>
      <Title>About</Title>
      <h1>About</h1>
      This is a fun website to learn about star wars actors with the option of saving them to check them the next time!!
    </main>
  );
}
