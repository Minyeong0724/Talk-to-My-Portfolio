# 💳 유연하고 확장 가능한 MSA 기반 카드 결제 시스템 구축
**Microservices-based Card Payment & Settlement System**

**2026. 03 (우리FIS 아카데미 5인 팀 프로젝트)**

![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-6DB33F?style=flat-square&logo=spring&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

짧은 기간 내에 고도화된 결제 시스템을 구축하기 위해 **MSA(Microservices Architecture)** 를 도입한 프로젝트입니다. 기존 모놀리식 구조의 보안 취약점과 로직 중복 문제를 해결하고, 서비스 간 독립적인 확장성을 확보하는 데 집중했습니다.

## 🏗 시스템 아키텍처 (System Architecture)

![Architecture Diagram](https://github.com/user-attachments/assets/368ff3b6-eb9a-4483-b4c8-dc60076f1186)

---

## 🚀 PM으로서의 리더십: 명세와 표준화

시스템의 복잡도가 높은 MSA 특성을 고려하여, **PM(Project Manager)** 역할을 수행하며 팀의 개발 효율성을 극대화하고 기술적 정합성을 맞추는 데 주도적인 역할을 했습니다.

* **비즈니스 로직 정합성 통일**: **코드 리뷰**를 통해 REST API 기반 통신과 Open Feign 방식 등 팀원 간 상이했던 비즈니스 로직 처리 방식을 하나로 통일하여 시스템의 일관성을 확보했습니다.
* **인프라 환경 구축 및 가이드 배포**: 서비스 운영의 핵심인 **Config Server 및 Eureka Server를 직접 구축**하고, 팀원(Client Server)들이 자신의 서비스를 손쉽게 등록하고 설정 정보를 관리할 수 있도록 **상세 연동 가이드라인을 제작 및 배포**했습니다.
* **아키텍처 선제 설계**: API Gateway, Eureka, Config 서버 및 3개 핵심 서비스(승인, 청구, 매입)의 구조를 정립하여 서비스 간 통신 병목을 방지했습니다.
* **개발 표준 수립**: 통신 규약을 문서화하고 Swagger-UI 및 README의 표준 포맷을 설정하여 5인 팀의 개발 환경을 통일했습니다.

---

## 🛠 주요 기능 및 구현 상세

### **1. 인프라 고도화 및 중앙 집중식 관리**
* **Service Discovery & Config (Core)**: 
    * **Spring Cloud Eureka**를 구축하여 각 마이크로서비스의 동적 등록 및 위치 투명성을 확보했습니다.
    * **Spring Cloud Config**를 통해 분산된 환경의 설정 정보를 중앙에서 관리하며, 런타임 시 설정 변경이 가능하도록 구현했습니다.
* **API Gateway 도입**: 모든 서비스의 단일 진입점을 구축하여 JWT 기반의 인증과 보안 정책을 일원화했습니다.

### **2. 마이크로서비스별 핵심 로직 분리**
* **승인 서비스 (Approval)**: 카드 승인 요청 및 취소 로직을 처리하며, 잔액 부족, 한도 초과 등 다양한 응답 코드를 관리합니다.
* **청구 서비스 (Billing)**: 승인된 내역을 기반으로 월별 청구 데이터를 생성 및 합산합니다.
* **정산 서비스 (Settlement)**: 가맹점별, 날짜별 정산 배치 프로세스를 수동/자동 트리거로 실행하여 데이터 정합성을 보장합니다.

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

### **"코드 리뷰를 통한 기술 부채 해결 및 생산성 향상"**
* **문제**: 프로젝트 중반, 서비스 간 통신 방식(REST vs OpenFeign)이 팀원마다 달라 데이터 동기화와 유지보수에 혼선이 발생했습니다.
* **해결**: 코드 리뷰 세션을 통해 인터페이스 규격과 비즈니스 처리 방식을 표준화했습니다. 또한, 공통 인프라(Eureka, Config) 설정 매뉴얼을 배포하여 팀원들이 인프라 설정에 쏟는 시간을 줄이고 핵심 로직 개발에 집중할 수 있는 환경을 조성했습니다.

### **"유연한 확장이 가능한 인프라 구조 완성"**
* **성과**: 단일 진입점인 API Gateway와 중앙 집중식 Config 관리를 통해 보안 로직을 통합하고 운영 효율을 극대화했습니다. 특히 오류 발생 시 특정 서비스만 격리하여 수정할 수 있는 MSA의 장점을 실제 통합 과정에서 증명하며 성공적으로 프로젝트를 완수했습니다.