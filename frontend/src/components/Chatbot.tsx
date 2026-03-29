"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. 플로팅 버튼 (화면 우측 하단 고정) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center text-3xl border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform z-50"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* 2. 챗봇 모달창 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[550px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* 헤더 */}
          <div className="p-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
              <span className="text-sm">새 AI 채팅</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="flex gap-3 text-gray-400">
              <button className="hover:text-gray-600">📝</button>
              <button className="hover:text-gray-600">🗂️</button>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-600">—</button>
            </div>
          </div>

          {/* 본문 (노션 스타일 제안 목록) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="flex flex-col items-center gap-4 mt-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-2xl">🪄</div>
              <h2 className="text-xl font-bold dark:text-white">더욱 강화된 성능의 Minyeong AI</h2>
              <p className="text-sm text-gray-500 text-center">민영님에 대해 궁금한 점을 물어보거나<br/>수행할 작업을 요청해 보세요!</p>
            </div>

            <div className="space-y-2">
              {[
                { icon: "🦆", text: "민영님에 대해 알아보기" },
                { icon: "A文", text: "이 페이지 요약해줘" },
                { icon: "🔍", text: "기술 스택 상세 보기" },
                { icon: "✅", text: "연락처 및 SNS 확인" },
              ].map((item, idx) => (
                <button key={idx} className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl text-left transition-colors">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 하단 입력창 (노션 레이아웃) */}
          <div className="p-4 bg-white dark:bg-gray-900">
            <div className="relative border-2 border-blue-400 rounded-2xl p-4 shadow-sm bg-white dark:bg-gray-800">
              {/* 포트폴리오 페이지 태그 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-500 mb-2">
                📄 포트폴리오 페이지
              </div>
              
              <textarea 
                placeholder="AI로 무엇이든 시도해 보세요..."
                className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none dark:text-white"
                rows={2}
              />
              
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="flex gap-4 text-xl grayscale opacity-50">
                  <button>+</button>
                  <button>⚙️</button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">자동</span>
                  <button className="text-xl">🎙️</button>
                  <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 text-sm">↑</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}