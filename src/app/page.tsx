import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>
        This <code className={styles.code}>First</code>{" "}
        page.
      </h1>
    </div>
  );
}
