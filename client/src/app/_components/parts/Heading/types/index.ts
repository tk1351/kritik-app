import { ComponentPropsWithRef, ReactNode } from "react";
import { BaseSize } from "@/app/_types";

export type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: Extract<BaseSize, "xsmall" | "small" | "medium" | "large" | "xlarge">;
  children: ReactNode;
} & ComponentPropsWithRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
