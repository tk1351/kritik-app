import type { FunctionComponent, PropsOf } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import styles from "./style.module.css";
import type { Props } from "~/components/parts/Heading/types";

export const Heading = component$(
  <C extends string | FunctionComponent = "h1">({
    as,
    className,
    size = "medium",
    ...props
  }: { as?: C; className?: string } & PropsOf<string extends C ? "h1" : C> &
    Props) => {
    const Cmp = as || "h1";
    return (
      <Cmp class={[styles.title, styles[size], className]} {...props}>
        <Slot />
      </Cmp>
    );
  },
);
