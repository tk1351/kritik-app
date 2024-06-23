import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Props } from "~/components/parts/ButtonLink/types";
import styles from "./style.module.css";

export const ButtonLink = component$<Props>(
  ({ href, size = "medium", color = "primary", class: _class }, ...props) => {
    return (
      <Link
        href={href}
        class={[styles["button-link"], styles[size], styles[color], _class]}
        {...props}
      >
        <Slot />
      </Link>
    );
  },
);
