import clsx from "clsx";
import { forwardRef } from "react";
import { Props } from "@/components/parts/Button/types";
import styles from "./style.module.css";

export const Button = forwardRef<HTMLButtonElement, Props>(function ButtonBase(
  { className, size = "medium", color = "primary", ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(styles.button, styles[size], styles[color], className)}
    />
  );
});
