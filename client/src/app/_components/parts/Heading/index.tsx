import clsx from "clsx";
import { createElement } from "react";
import styles from "./style.module.css";
import { Props } from "./types";

export const Heading = ({
  level,
  className,
  children,
  size = "medium",
  ...props
}: Props) => {
  return createElement(
    `h${level}`,
    {
      className: clsx(styles.title, styles[size], className),
      ...props,
    },
    children,
  );
};
