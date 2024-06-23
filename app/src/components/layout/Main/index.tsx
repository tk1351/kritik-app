import { component$, Slot } from "@builder.io/qwik";
import styles from "./style.module.css";

type Props = {
  className?: string;
};

export const Main = component$<Props>(({ className }) => {
  return (
    <main class={[styles.container, className]}>
      <Slot />
    </main>
  );
});
