import { ComponentPropsWithRef } from "react";
import { BaseSize } from "@/app/_types";

type Size = BaseSize;
export type Tag = "p" | "span" | "li";
export type Props<T extends Tag> = {
  tag?: T;
  size?: Size;
  bold?: boolean;
} & ComponentPropsWithRef<T>;
