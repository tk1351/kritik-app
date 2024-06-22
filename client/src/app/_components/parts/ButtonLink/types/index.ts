import { ComponentPropsWithRef } from "react";
import { BaseColor, BaseSize } from "@/app/_types";

export type Props = ComponentPropsWithRef<"a"> & {
  href: string;
  size?: Extract<BaseSize, "xsmall" | "small" | "medium" | "large">;
  color?: BaseColor;
};
