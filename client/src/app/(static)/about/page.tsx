import { ButtonLink } from "@/app/_components/parts/ButtonLink";
import { Heading } from "@/app/_components/parts/Heading";
import { Typography } from "@/app/_components/parts/Typography";
import styles from "./style.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <Heading level={1} size="large">
            Kritik
          </Heading>
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
        <ButtonLink href="/register">Register</ButtonLink>
        <ButtonLink href="/register" color="light">
          Log in
        </ButtonLink>
      </div>
    </>
  );
}
