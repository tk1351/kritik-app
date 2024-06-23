import styles from "./style.module.css";
import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer>
      <div class={styles.footer__container}>Copyright © 2024-present</div>
    </footer>
  );
});
