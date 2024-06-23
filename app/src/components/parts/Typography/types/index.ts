import type { BaseSize } from "~/types";
import type { PropsOf } from "@builder.io/qwik";

export type Props = {
  size?: BaseSize;
  bold?: boolean;
} & PropsOf<"p">;
