import clsx from "clsx";
import Link from "next/link";
import { Props } from "@/app/_components/parts/ButtonLink/types";
import styles from "./style.module.css";

export const ButtonLink = ({
  className,
  href,
  size = "medium",
  color = "primary",
  ...props
}: Props) => {
  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        styles["button-link"],
        styles[size],
        styles[color],
        className,
      )}
    />
  );
};
