# 🗣️ Talk to My Portfolio : 대화형 AI 포트폴리오

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![Spring AI](https://img.shields.io/badge/Spring_AI-6DB33F?style=for-the-badge&logo=spring&logoColor=white) ![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)

> "사용자의 입장에서 문제를 읽고, 기술로 다정한 맞춤형 솔루션을 제공하는 개발자 남민영입니다."

단순히 텍스트를 나열한 이력서를 넘어, **저라는 개발자의 경험과 철학을 직접 물어보고 대답을 들을 수 있는 Interactive 포트폴리오**입니다. 사용자는 귀찮게 스크롤을 내릴 필요 없이, 내장된 AI 챗봇에게 "민영님의 MSA 프로젝트 아키텍처는 어때?"라고 자연스럽게 질문하고 원하는 답변을 얻을 수 있습니다.

## ✨ 주요 기능 (Key Features)

- **💬 RAG 기반 AI 챗봇 (Talk to Me)**
  - 내 포트폴리오 데이터(`my-data.md`)를 기반으로 질문에 답변하는 맞춤형 AI
  - Spring AI와 Google Vertex AI(Gemini)를 연동한 실시간 검색 증강 생성(RAG) 파이프라인 구축
- **📄 동적 마크다운 렌더링 (Dynamic Project Modals)**
  - 프로젝트 카드를 클릭하면 상세 기술 문서(`.md`)가 깔끔한 모달 형태로 렌더링
  - `react-markdown` 및 `remark-gfm`을 활용한 표(Table) 및 기술 뱃지 시각화 최적화
- **⚡ 사용자 경험(UX) 극대화**
  - Tailwind CSS v4의 Typography를 활용한 뛰어난 가독성
  - 다크모드 완벽 지원 및 반응형 웹 디자인 적용

---

## 🏗️ 아키텍처 및 기술 스택 (Tech Stack & Architecture)

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4, `@tailwindcss/typography`
- **Markdown:** `react-markdown`, `remark-gfm`

### Backend & AI (RAG Pipeline)
- **Framework:** Spring Boot 
- **AI Integration:** Spring AI
- **LLM & Embedding:** Google Cloud Vertex AI (`Gemini 2.0 Flash`, `text-embedding-004`)
- **Vector Database:** SimpleVectorStore (In-memory/File-based)

---

## 🔍 RAG 파이프라인 구현 상세 (How it works)

AI 챗봇이 거짓말(Hallucination)을 하지 않고 오직 제 포트폴리오 내용만을 기반으로 다정하게 답변할 수 있도록 파이프라인을 설계했습니다.

1. **데이터 전처리 (Ingestion):** 프로젝트 상세 내용과 제 가치관이 담긴 `my-data.md` 파일을 `TokenTextSplitter`를 사용해 의미가 끊기지 않도록 Overlap을 주어 청킹(Chunking)합니다.
2. **임베딩 및 저장:** Google의 `text-embedding-004` 모델을 활용해 텍스트를 고차원 벡터로 변환 후 `SimpleVectorStore`에 저장합니다.
3. **검색 및 생성 (Retrieval & Generation):** 사용자의 질문과 가장 유사도 거리가 가까운 문서를 추출(Semantic Search)하여, 챗봇의 페르소나(System Prompt)와 함께 Gemini 모델에 전달하여 최종 답변을 생성합니다.

---

## 🛠️ 트러블슈팅 및 기술적 고민 (Troubleshooting)

프로젝트를 진행하며 마주친 한계점들과 이를 기술적으로 해결한 과정입니다.

- **Spring AI 의존성 충돌 해결**
  - **문제:** 초기 세팅 시 Gradle이 Spring AI(Milestone) 라이브러리를 찾지 못해 빌드 실패.
  - **해결:** `settings.gradle`에 RepositoriesMode를 중앙 집중화하고, Google 인프라에 최적화된 `vertex-ai-gemini` 스타터로 교체하여 의존성 로드 문제를 해결했습니다.
- **Tailwind CSS v4 Typography 렌더링 이슈**
  - **문제:** 프로젝트 상세 모달 창에서 마크다운의 표와 리스트 문법이 일반 텍스트로 노출됨.
  - **해결:** Tailwind v4의 변경된 플러그인 적용 방식에 맞춰 `global.css` 내부에 `@plugin "@tailwindcss/typography";` 지시어를 직접 선언하고 `remark-gfm`을 도입하여 서식을 복구했습니다.
- **RAG 청킹(Chunking) 최적화**
  - **고민:** 마크다운 문서를 어떻게 쪼개야 검색 품질이 가장 좋을까?
  - **해결:** 토큰 사이즈 400, 최소 유지 100을 주어 정보의 밀집도와 맥락 보존의 트레이드오프(Trade-off)를 경험적으로 조율했습니다. 향후 Ragas 툴을 이용한 지표 기반 고도화를 계획하고 있습니다.

