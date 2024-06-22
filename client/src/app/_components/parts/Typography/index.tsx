import clsx from "clsx";
import { createElement } from "react";
import { Props, Tag } from "@/app/_components/parts/Typography/types";
import styles from "./style.module.css";

export const Typography = <T extends Tag>({
  tag,
  className,
  children,
  size = "medium",
  bold,
  ...props
}: Props<T>) => {
  return createElement(
    tag || "p",
    {
      className: clsx(
        styles.typography,
        styles[size],
        bold && styles.bold,
        className,
      ),
      ...props,
    },
    children,
  );
};
