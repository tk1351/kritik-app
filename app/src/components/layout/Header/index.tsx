import styles from "./style.module.css";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header>
      <div class={styles.header__container}>
        <nav class={styles.navigation}>
          <Link href="/" class={styles.link}>
            <span class={styles.link__text}>Kritik</span>
          </Link>
          <Link href="/login" class={styles.link}>
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
});
