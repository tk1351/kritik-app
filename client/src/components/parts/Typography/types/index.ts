import { ComponentPropsWithRef } from "react";

type Size = "xsmall" | "small" | "medium" | "large" | "xlarge" | "x2large";
export type Tag = "p" | "span" | "li";
export type Props<T extends Tag> = {
  tag?: T;
  size?: Size;
  bold?: boolean;
} & ComponentPropsWithRef<T>;
