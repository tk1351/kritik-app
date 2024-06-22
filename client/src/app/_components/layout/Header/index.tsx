"use client";

import Link from "next/link";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header__container}>
        <nav className={styles.navigation}>
          <Link href="/" className={styles.link}>
            <span className={styles.link__text}>Kritik</span>
          </Link>
          <Link href="/" className={styles.link}>
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
};
