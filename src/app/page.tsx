export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-32 py-20">
      <section id="info" className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Info</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">안녕하세요! 프론트엔드 개발자 남민영입니다.</p>
        {/* 추후 여기에 상세 프로필 내용을 채웁니다 */}
      </section>

      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p>프로젝트 상세 내용이 들어갈 자리입니다.</p>
      </section>

      <section id="experiences" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Experiences</h2>
        <p>인턴 경험 등이 들어갈 자리입니다.</p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Send Email</h2>
        <p>EmailJS를 활용한 메일 전송 폼이 들어갈 자리입니다.</p>
      </section>
    </div>
  );
}