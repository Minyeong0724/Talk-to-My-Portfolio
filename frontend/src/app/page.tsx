"use client";

import { useState } from "react";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-32 font-sans">
      
      {/* 1. INFO SECTION */}
      <section id="info" className="min-h-[80vh] flex flex-col justify-center gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
          사용자의 입장에서 문제를 읽고,<br />
          <span className="text-blue-600">기술로 다정한 맞춤형 솔루션</span>을<br />
          제공하는 개발자 남민영입니다.
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl space-y-6">
          <p>
            기계공학부터 컴퓨터 비전까지, 다양한 분야를 넘나들며 제가 배운 가장 값진 경험은 사용자의 언어로 세상을 바라보는 법이었습니다.
          </p>
          <p>
            기술은 그 자체로 존재할 때보다 누군가의 삶에 녹아들어 불편함을 걷어낼 때 가장 빛난다고 믿습니다. 기숙사생의 공용 냉장고 항목을 관리해주는 시스템부터, 이미지를 3D 모델로 재구성해 사용자의 잠들어있던 경험을 일깨우는 연구까지. 저는 소외되는 이 없이 누구나 기술의 혜택을 온전히 누릴 수 있는 환경을 꿈꿉니다.
          </p>
          <p>
            사용자의 숨은 필요를 읽어내어 오직 그들만을 위해 설계된 최선의 솔루션을 제공하는 일, 저는 기술을 통해 우리 일상의 다정한 변화를 만들어가고 싶습니다.
          </p>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section id="skills" className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold border-b pb-4 border-gray-200 dark:border-gray-700">Tech Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Backend */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Spring Boot", "Spring JPA", "Java Servlet", "MySQL", "Nginx", "Tomcat"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Languages */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "C++", "JavaScript", "C"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* AI & Data */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">AI / Data</h3>
            <div className="flex flex-wrap gap-2">
              {["Spring AI", "RAG Architecture", "Object Detection", "Hallucination Research"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Frontend & Tools */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "Git", "Docker"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold border-b pb-4 border-gray-200 dark:border-gray-700">Projects</h2>
        
        <p className="text-gray-600 dark:text-gray-400">
          프로젝트를 클릭하면 상세 내용을 확인하실 수 있습니다.
        </p>

        {/* [교체] 기존의 필터 버튼과 카드 그리드 코드를 모두 지우고 이 한 줄만 넣으세요! */}
        <ProjectsSection />
      </section>
      
    </div>
  );
}