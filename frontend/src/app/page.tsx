"use client";

import ProjectsSection from "@/components/ProjectsSection";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth font-sans dark:bg-gray-950">
      
      {/* 1. INFO & CHATBOT SECTION */}
      {/* 2번 방법 반영: min-h-screen 대신 min-h-[92vh]를 사용하여 다음 섹션을 살짝 노출 */}
      <section 
        id="info" 
        className="relative snap-start min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-9 text-center py-15">
          <div className="space-y-10 max-w-4xl mx-auto">
          {/* 메인 타이틀: 줄바꿈 최적화 */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.3] text-gray-900 dark:text-white tracking-tight">
            사용자의 입장에서 문제를 읽고,<br />
            <span className="text-blue-600 block md:inline">기술로 다정한 맞춤형 솔루션</span>을<br />
            제공하는 개발자 남민영입니다.
          </h1>

          {/* 본문 설명: 너비를 더 좁히고(max-w-2xl), 행간을 넓힘(leading-loose) */}
          <div className="text-base md:text-[15px] text-gray-600 dark:text-gray-300 leading-[1.8] max-w-2xl mx-auto space-y-1.5 break-keep">
            <p>
              기계공학부터 컴퓨터 비전까지, 다양한 분야를 넘나들며 제가 배운 가장 값진 경험은<br className="hidden md:block" />
              사용자의 언어로 세상을 바라보는 법이었습니다.
            </p>
            
            <p>
              기술은 그 자체로 존재할 때보다 누군가의 삶에 녹아들어 불편함을 걷어낼 때 가장 빛난다고 믿습니다. 
              기숙사생의 냉장고 관리 시스템부터 이미지를 3D 모델로 재구성하는 연구까지, 
              <span className="font-medium text-gray-900 dark:text-white"> 소외되는 이 없이 누구나 기술의 혜택을 온전히 누릴 수 있는 환경</span>을 꿈꿉니다.
            </p>
            
            <p>
              사용자의 숨은 필요를 읽어내어 오직 그들만을 위해 설계된 최선의 솔루션을 제공하는 일,<br className="hidden md:block" />
              저는 기술을 통해 우리 일상의 다정한 변화를 만들어가고 싶습니다.
            </p>
          </div>
        </div>

          <div className="w-full max-w-[550px] transition-all duration-500 ease-in-out">
            <Chatbot />
          </div>
        </div>

        {/* 1번 방법 반영: 애니메이션 스크롤 유도 아이콘 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce cursor-pointer">
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            Scroll Down
          </span>
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section 
        id="projects" 
        className="snap-start min-h-screen px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center border-t border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-5xl w-full flex flex-col gap-8">
          <h2 className="text-3xl font-bold border-b pb-4 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
            Projects
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400">
            프로젝트를 클릭하면 상세 내용을 확인하실 수 있습니다.
          </p>

          <ProjectsSection />
        </div>
      </section>
      
    </div>
  );
}