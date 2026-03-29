# 💳 유연하고 확장 가능한 MSA 기반 카드 결제 시스템 구축
**Microservices-based Card Payment & Settlement System**

**2026. 03 (Team Project)**

![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-6DB33F?style=flat-square&logo=spring&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

짧은 기간 내에 고도화된 결제 시스템을 구축하기 위해 **MSA(Microservices Architecture)** 를 도입한 프로젝트입니다. 기존 모놀리식 구조의 보안 취약점과 로직 중복 문제를 해결하고, 서비스 간 독립적인 확장성을 확보하는 데 집중했습니다.

## 🏗 시스템 아키텍처 (System Architecture)

![Architecture Diagram](https://github.com/user-attachments/assets/368ff3b6-eb9a-4483-b4c8-dc60076f1186)



---

## 🚀 PM으로서의 리더십: 명세와 표준화

시스템의 복잡도가 높은 MSA 특성을 고려하여, **PM(Project Manager)** 역할을 수행하며 팀의 개발 효율성을 극대화했습니다.

* **아키텍처 선제 설계**: API Gateway, Eureka, Config 서버 및 3개 핵심 서비스(승인, 청구, 매입)의 구조를 정립하여 서비스 간 통신 병목을 방지했습니다.
* **개발 표준 수립**: 통신 규약을 문서화하고 Swagger-UI 및 README의 표준 포맷을 설정하여 5인 팀의 개발 환경을 통일했습니다.
* **지식 공유 및 교육**: 아키텍처에 생소한 팀원들을 위해 구조도를 직접 그려 공유하고 지속적인 기술 가이드를 제공했습니다.
* **테스트 주도 품질 관리**: 단위 테스트와 통합 테스트를 주기적으로 점검하여 결합 시 발생할 수 있는 오류를 사전에 격리하고 즉각 수정했습니다.

---

## 🛠 주요 기능 및 구현 상세

### **1. 인프라 고도화 및 보안 일원화**
* **API Gateway 도입**: 모든 서비스의 단일 진입점을 구축하여 JWT 기반의 인증과 보안 정책을 일원화했습니다.
* **Service Discovery & Config**: **Eureka Server**를 통한 동적 서비스 디스커버리와 **Config Server**를 활용한 중앙 집중식 설정 관리를 구현하여 인프라 유연성을 확보했습니다.

### **2. 마이크로서비스별 핵심 로직 분리**
* **승인 서비스 (Approval)**: 카드 승인 요청 및 취소 로직을 처리하며, 잔액 부족, 한도 초과 등 다양한 응답 코드를 관리합니다.
* **청구 서비스 (Billing)**: 승인된 내역을 기반으로 월별 청구 데이터를 생성 및 합산합니다.
* **정산 서비스 (Settlement)**: 가맹점별, 날짜별 정산 배치 프로세스를 수동/자동 트리거로 실행하여 정합성을 보장합니다.

---

## 🔑 주요 API 시나리오

| 기능 분류 | Method | Endpoint | 상세 설명 |
| :--- | :--- | :--- | :--- |
| **인증** | `POST` | `/auth/token` | 클라이언트 인증을 통한 JWT 토큰 발급 |
| **승인** | `POST` | `/api/authorizations/request` | 한도/잔액/카드 상태 체크 후 거래 승인 |
| **정산** | `POST` | `/api/settlements/trigger` | 특정 날짜의 정산 배치 수동 실행 |
| **청구** | `POST` | `/api/billing/monthly` | 특정 카드 및 월 기준 청구 데이터 생성 |

---

## 💡 기술적 도전 및 성과

### **"유연한 확장이 가능한 인프라 구조 완성"**
* **문제**: 서비스가 늘어남에 따라 각 서비스가 외부 기관(VAN사)과 개별 통신할 때 발생하는 비효율과 보안 관리의 어려움이 예상되었습니다.
* **해결**: 단일 진입점인 API Gateway를 통해 보안 로직을 통합하고, 서비스 그룹을 유기적으로 연결했습니다. 이 과정을 통해 입사 후 안정적인 시스템 운영과 서비스 확장에 즉각 기여할 수 있는 실무 감각을 익혔습니다.

### **"통합 시나리오의 성공적인 결합"**
* **성과**: 체계적인 API 명세와 지식 공유 덕분에 최종 통합 단계에서 병목 현상 없이 각자의 서비스를 성공적으로 결합했습니다. 특히 오류 발생 시 특정 서비스만 격리하여 수정할 수 있는 MSA의 장점을 극대화하는 성과를 거두었습니다.


