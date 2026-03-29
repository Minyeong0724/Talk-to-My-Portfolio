import React, { useState } from 'react';
import { projects } from '@/data/ProjectData'; //
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedPath(project.contentPath)} // 클릭 시 경로 설정
            className="cursor-pointer group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
          >
            {/* 썸네일 영역 */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-white/90 dark:bg-black/70 rounded-full">
                {project.category}
              </span>
            </div>

            {/* 카드 정보 영역 */}
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-1">{project.period}</p>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                {project.description}
              </p>
              
              {/* 스택 뱃지 */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map(stack => (
                  <span key={stack} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 연동 */}
      <ProjectModal 
        isOpen={!!selectedPath} 
        onClose={() => setSelectedPath(null)} 
        contentPath={selectedPath || ''} 
      />
    </section>
  );
};

export default ProjectsSection;