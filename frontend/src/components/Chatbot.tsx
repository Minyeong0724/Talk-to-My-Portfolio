'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, X, Sparkles, User, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(""); 
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const exampleQuestions = [
    { icon: '📝', text: '민영님에 대해 알아보기' },
    { icon: '📨', text: '연락처 확인' },
    { icon: '👩‍💻', text: '대표 프로젝트 확인' },
    { icon: '📄', text: '백엔드 프로젝트는 어떤 걸 했나요?' },
    { icon: '📄', text: 'SW 프로젝트는 어떤 걸 했나요?' }
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setIsOpen(true); 
    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

    try {
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
      {/* 1. 메인 프롬프트 입력창 & 추천 리스트 (중앙 배치용) */}
      <div className="flex flex-col items-center w-full gap-6">
        <div className="relative w-full group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.nativeEvent.isComposing) return;
              if (e.key === 'Enter') {
                handleSendMessage(input);
              }
            }}
            placeholder="민영 님에 대해 무엇이든 물어보세요.."
            className="w-full px-4 py-2 pr-16 rounded-2xl border-2 border-blue-100 bg-white dark:bg-gray-800 dark:border-gray-700 focus:border-blue-400 focus:outline-none shadow-sm transition-all text-md"
          />
          <button 
            onClick={() => handleSendMessage(input)}
            disabled={isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-all">
              <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full">
          {exampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q.text)}
              className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <span>{q.icon}</span>
              <span>{q.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. 우측 하단 고정 로봇 버튼 (유지) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <Bot className="w-8 h-8" />
      </button>

      {/* 3. 챗봇 모달창 (유지) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white dark:bg-gray-900 w-full max-w-4xl h-[85vh] rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
          >
            <div className="p-6 border-b flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-gray-900 dark:text-white">Minyeong AI Chat</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6 text-left">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                  <Bot className="w-16 h-16 mb-4" />
                  <p>궁금한 점을 입력해주세요!</p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'justify-start'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-100 dark:bg-gray-800'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
                  </div>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm text-left ${
                    msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.role === "ai" ? (
                      <div className="markdown-content prose dark:prose-invert max-w-none text-left leading-relaxed">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 shrink-0" />
                  <div className="h-12 w-48 bg-gray-100 dark:bg-gray-800 rounded-2xl" />
                </div>
              )}
            </div>

            <div className="p-6 border-t bg-white dark:bg-gray-900">
              <div className="relative">
                <input
                  type="text"
                  placeholder="추가로 궁금한 점을 물어보세요..."
                  onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) return;
                    if (e.key === 'Enter') {
                      handleSendMessage((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                  className="w-full p-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-400 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}