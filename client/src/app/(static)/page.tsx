import Link from "next/link";
import { Button } from "@/components/parts/Button";
import { Typography } from "@/components/parts/Typography";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header__container}>
          <Link href="/" className={styles.link}>
            <span className={styles.link__text}>Kritik</span>
          </Link>
        </div>
      </header>
      <main className={styles.main__container}>
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <h1>Kritik</h1>
            <Typography size="x2large" bold>
              完全な批評のプラットフォーム
            </Typography>
            <Typography>
              当社のアプリは、ユーザーが自由に批評を投稿できるプラットフォームです。映画、音楽、アート、料理、さまざまなトピックについて意見を交換しましょう。他のユーザーと交流し、新しい視点を見つけるチャンスです。批評を投稿して、コミュニティに参加しましょう！
            </Typography>
          </div>
          <div className={styles.emoji__container}>
            <Typography className={styles.emoji}>
              <span>💡</span>
            </Typography>
          </div>
        </div>
        <div className={styles.buttons__container}>
          <Button type="button">Register</Button>
          <Button type="button" color="light">
            Log in
          </Button>
        </div>
      </main>
      <footer>
        <div className={styles.footer__container}>
          Copyright © 2024-present
        </div>
      </footer>
    </div>
  );
}
