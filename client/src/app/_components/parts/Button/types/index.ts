import { ComponentPropsWithoutRef } from "react";
import { BaseSize } from "@/app/_types";

export type Props = ComponentPropsWithoutRef<"button"> & {
  size?: Extract<BaseSize, "xsmall" | "small" | "medium" | "large">;
  color?: "primary" | "secondary" | "light";
};
