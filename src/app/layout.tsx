import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "./styles.css";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "転職ランキング | おすすめの介護派遣会社を比較したい！｜[会社名]",
    description: "介護派遣会社の比較・検討に役立つ情報をご提供しています。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${notoSansJP.className} antialiased`}>{children}</body>
        </html>
    );
}
