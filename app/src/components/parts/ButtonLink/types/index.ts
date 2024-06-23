import type { BaseColor, BaseSize } from "~/types";
import type { PropsOf } from "@builder.io/qwik";

export type Props = {
  href: string;
  size?: Extract<BaseSize, "xsmall" | "small" | "medium" | "large">;
  color?: BaseColor;
} & PropsOf<"a">;
