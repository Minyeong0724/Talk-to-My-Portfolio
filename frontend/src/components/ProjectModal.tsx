import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'; 
import remarkGfm from 'remark-gfm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  contentPath: string;
}

const ProjectModal = ({ isOpen, onClose, contentPath }: Props) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (isOpen && contentPath) {
      fetch(contentPath)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error("Markdown fetch error:", err));
    }
  }, [isOpen, contentPath]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-10"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-black dark:hover:text-white text-xl">
          ✕
        </button>
        
        {/* [수정] 단순 텍스트 대신 ReactMarkdown과 prose 클래스를 사용합니다. */}
        <article className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:border-b-0">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default ProjectModal;