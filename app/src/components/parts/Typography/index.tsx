import { component$, Slot } from "@builder.io/qwik";
import type { Props } from "./types";
import styles from "./style.module.css";

export const Typography = component$<Props>(
  ({ size = "medium", bold, class: _class }, ...props) => {
    return (
      <p class={[styles[size], bold && styles.bold, _class]} {...props}>
        <Slot />
      </p>
    );
  },
);
