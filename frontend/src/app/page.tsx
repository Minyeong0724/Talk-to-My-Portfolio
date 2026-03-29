"use client";

import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  // 프로젝트 데이터 (원하는 대로 수정 가능)
  const projects = [
    {
      id: 1,
      title: "금융 카드 소비 데이터 분석",
      type: "Team",
      period: "2026.02 - 2026.03",
      description: "대용량 금융 데이터를 효율적으로 처리하기 위한 멀티 레이어 아키텍처 설계 및 데이터 복제 구현",
      tech: ["Java", "Spring", "MySQL", "Nginx"],
      image: "💳", // 나중에 실제 이미지 경로(e.g., "/project1.png")로 교체하세요
    },
    {
      id: 2,
      title: "자율주행 Razbot",
      type: "Team",
      period: "202X.XX - 202X.XX",
      description: "라즈베리 파이를 활용한 자율주행 로봇 제어 및 경로 탐색 알고리즘 구현",
      tech: ["Python", "Raspberry Pi"],
      image: "🤖",
    },
    {
      id: 3,
      title: "C++ ATM 금융 시뮬레이터",
      type: "Personal",
      period: "202X.XX - 202X.XX",
      description: "기본적인 금융 거래 로직(입출금, 계좌이체 등)을 객체 지향적으로 설계한 시뮬레이터",
      tech: ["C++"],
      image: "🏧",
    },
    {
      id: 4,
      title: "배달 서비스 백엔드 (Toy)",
      type: "Personal",
      period: "202X.XX - 202X.XX",
      description: "도메인 모델링과 JPA 연관 관계 매핑을 통한 배달 시스템 백엔드 구축",
      tech: ["Spring Boot", "JPA", "MySQL"],
      image: "🚚",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

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
        
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-4">
          {["All", "Team", "Personal"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 cursor-pointer flex flex-col">
              {/* Thumbnail Placeholder */}
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-md font-semibold ${project.type === 'Team' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'}`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Icons (Badges) */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}