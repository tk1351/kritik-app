import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import * as Layout from "../../_components/layout";
import "../../reset.css";
import "../../globals.css";
import styles from "./layout.module.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kritik",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <div className={styles.container}>
          <Layout.Header />
          <Layout.Main>{children}</Layout.Main>
          <Layout.Footer />
        </div>
      </body>
    </html>
  );
}