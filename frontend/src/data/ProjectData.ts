export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  category: "Personal" | "Team" | "Featured";
  techStack: string[];
  contentPath: string;
  thumbnail: string; 
}

export const projects: Project[] = [
  {
    id: "card-analysis",
    title: "소비 성향 분석 리포트",
    description: "530만 건의 대용량 데이터를 활용한 서버 이중화 및 가용성 인프라 구축 프로젝트",
    period: "2026. 02 ~ 2026. 03",
    category: "Team",
    techStack: ["Java", "Servlet", "MySQL", "Nginx", "Tomcat", "Docker"],
    contentPath: "/projects/smart_consumer.md",
    thumbnail: "/thumbnails/card-analysis.png"
  },
  {
    id: "msa-payment",
    title: "MSA 기반 카드 결제 시스템",
    description: "API Gateway 및 Eureka를 활용한 유연하고 확장 가능한 마이크로서비스 아키텍처 설계",
    period: "2026. 03",
    category: "Featured", // MSA와 PM 경험을 강조하기 위해 Featured 부여
    techStack: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "JWT", "Docker"],
    contentPath: "/projects/MSA_project.md",
    thumbnail: "/thumbnails/msa-payment.png"
  },
  {
    id: "razbot",
    title: "자율주행 라즈봇 전략 시스템",
    description: "QR코드 위치 인식과 소켓 통신을 이용한 실시간 자율주행 알고리즘 구현",
    period: "2024. 05 ~ 2024. 06",
    category: "Team",
    techStack: ["C", "C++", "OpenCV", "Raspberry Pi", "Linux"],
    contentPath: "/projects/rasbot.md",
    thumbnail: "/thumbnails/razbot.png"
  },
  {
    id: "astrophotography-enhancement",
    title: "천체 사진 화질 개선 시스템",
    description: "딥러닝 기반 이미지 정합 파이프라인을 통한 노이즈 저감 및 선명도 향상 연구",
    period: "2025. 09 ~ 2025. 12",
    category: "Personal",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    contentPath: "/projects/DIP.md",
    thumbnail: "/thumbnails/astrophotography.png"
  },
  {
    id: "spectral-gating-speech",
    title: "Spectral Gating 음성 노이즈 제거",
    description: "MATLAB을 이용한 신호처리 알고리즘 설계 및 비정상 노이즈 환경 음성 복원",
    period: "2025. 04 ~ 2025. 05",
    category: "Team",
    techStack: ["MATLAB", "Signal Processing", "Simulink"],
    contentPath: "/projects/DSP.md",
    thumbnail: "/thumbnails/spectral-gating.png"
  },
  {
    id: "dynamic-3d-scene",
    title: "사용자 프롬프트 기반 3D 장면 제어",
    description: "단일 이미지에서 객체와 배경을 분리하여 재구성하는 동적 인터랙티브 3D 연구",
    period: "2023. 12 ~ 2024. 12",
    category: "Featured", // 졸업 연구 프로젝트로서 Featured 부여
    techStack: ["Python", "PyTorch", "Stable Diffusion", "Gaussian Splatting", "Blender"],
    contentPath: "/projects/UGRP.md",
    thumbnail: "/thumbnails/dynamic-3d.png"
  }
];