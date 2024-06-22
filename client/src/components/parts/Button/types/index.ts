import { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"button"> & {
  size?: "xsmall" | "small" | "medium" | "large";
  color?: "primary" | "secondary" | "light";
};
