import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Chatbot from "@/components/Chatbot"; 
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nam Min-yeong | Portfolio",
  description: "개발자 남민영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* 헤더 높이(h-16)만큼 상단 여유를 줍니다 */}
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}