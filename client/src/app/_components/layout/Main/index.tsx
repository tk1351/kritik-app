import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./style.module.css";

type Props = ComponentPropsWithoutRef<"main"> & {
  children: ReactNode;
};

export const Main = ({ className, children }: Props) => {
  return <main className={clsx(styles.container, className)}>{children}</main>;
};
