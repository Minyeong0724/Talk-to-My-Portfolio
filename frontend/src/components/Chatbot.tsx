"use client";

import { useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 메시지 전송 로직
  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return; // 로딩 중이거나 빈 값일 때 실행 방지
    
    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

    try {
      // 수정된 부분: 백엔드 주소를 변수로 처리
      const response = await fetch(`${BACKEND_URL}/api/chat/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("네트워크 응답에 문제가 있습니다.");
      
      const data = await response.text();
      setMessages((prev) => [...prev, { role: "ai", content: data }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "ai", content: "죄송합니다. 서버와 연결할 수 없습니다." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center text-3xl border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform z-50"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* 2. 챗봇 모달창 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* 헤더 생략 (동일) */}

          {/* 본문 (메시지 내역 및 제안 목록) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              // 초기 화면
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-2xl">🪄</div>
                <h2 className="text-xl font-bold dark:text-white text-center">강력한 성능의 Minyeong AI</h2>
                <div className="space-y-2 w-full">
                  {[
                    { icon: "🦆", text: "민영님에 대해 알아보기" },
                    { icon: "🔍", text: "기술 스택 상세 보기" },
                    { icon: "✅", text: "연락처 확인" },
                  ].map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleSendMessage(item.text)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl text-left transition-colors"
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm font-medium">{item.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // 채팅 내역 출력
              messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                  }`}>
                    {msg.role === "ai" ? (
                      <div className="markdown-content prose dark:prose-invert max-w-none text-sm leading-relaxed">
                        <ReactMarkdown>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && <div className="text-xs text-gray-400 animate-pulse">AI가 답변을 생각 중입니다...</div>}
          </div>

          {/* 하단 입력창 */}
          <div className="p-4 bg-white dark:bg-gray-900">
            <div className="relative border-2 border-blue-400 rounded-2xl p-4 shadow-sm bg-white dark:bg-gray-800">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  // [해결] 한글 조합 중(isComposing)일 때는 전송하지 않도록 막습니다.
                  if (e.nativeEvent.isComposing) return; 

                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(input);
                  }
                }}
                placeholder="AI로 무엇이든 시도해 보세요..."
                disabled={isLoading} // [추가] 전송 중에는 입력을 막습니다.
                className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none dark:text-white"
                rows={2}
              />
              <div className="flex justify-end mt-2">
                <button 
                  onClick={() => handleSendMessage(input)}
                  disabled={isLoading}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    input.trim() ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}