"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Sun, Moon, Globe } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("Kor");

  // 하이드레이션 에러 방지를 위해 마운트 후 렌더링
  useEffect(() => setMounted(true), []);

  const toggleLanguage = () => {
    // 추후 i18next 연동 시 여기에 언어 변경 로직 추가
    setLang(lang === "Kor" ? "Eng" : "Kor");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 영역 */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          MinYeong<span className="text-blue-500">.</span>
        </Link>

        {/* 네비게이션 메뉴 */}
        <nav className="hidden md:flex gap-6 font-medium text-sm text-gray-600 dark:text-gray-300">
          <Link href="#info" className="hover:text-blue-500 transition-colors">Info</Link>
          <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link href="#experiences" className="hover:text-blue-500 transition-colors">Experiences</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">Send Email</Link>
        </nav>

        {/* 유틸리티 버튼 (언어 & 테마) */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors px-2 py-1"
          >
            <Globe size={16} />
            {lang}
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}