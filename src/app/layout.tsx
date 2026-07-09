import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阮琪珍老师 - 小学数学辅导专家",
  description: "5年教学经验，提分显著，耐心细致。专注小学数学辅导，帮助孩子爱上数学，轻松提分。",
  keywords: "小学数学辅导,数学老师,数学提分,奥数辅导,家教",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
