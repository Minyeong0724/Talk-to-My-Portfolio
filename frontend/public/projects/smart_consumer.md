# 💳 소비 성향 분석 리포트: 내 소비는 평균일까?
**Large-scale Card Consumption Data Analysis & High-Availability Infrastructure**

**2026. 02 ~ 2026. 03 (우리FIS 아카데미 Toy Project)**

![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white) ![Servlet](https://img.shields.io/badge/Servlet-007396?style=flat-square&logo=java&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white) ![Tomcat](https://img.shields.io/badge/Apache%20Tomcat-F8DC75?style=flat-square&logo=apachetomcat&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

530만 건의 실제 카드 소비 데이터를 기반으로 사용자의 소비 패턴을 동일 연령대 및 성별 그룹과 비교 분석하는 웹 서비스입니다. 단순한 기능 구현을 넘어, 대용량 데이터 환경에서의 **쿼리 성능 최적화**와 **무중단 서비스를 위한 서버 이중화 아키텍처**를 직접 구축하는 데 집중했습니다.

[👉 깃허브 저장소 바로가기](https://github.com/your-repo-link)

---

## 🚀 주요 기능 및 특징

* **소비 분석 대시보드**: 개인 지출 상위 Top 5 카테고리를 원형 차트로 시각화하여 직관적인 소비 패턴 확인 기능을 제공합니다.
* **또래 집단 비교 분석**: 동일 연령대와 성별을 기준으로 그룹화된 평균 소비 통계 데이터와 사용자의 데이터를 실시간으로 비교합니다.
* **고가용성 인프라**: Nginx를 활용한 로드밸런싱과 Tomcat 서버 클러스터링을 통해 시스템 안정성을 확보했습니다.
* **데이터 정합성 관리**: 대용량 시계열 데이터의 특성을 고려한 DB 설계와 이상치 제거를 통해 분석 결과의 신뢰도를 높였습니다.

---

## 🛠️ 기여 부분 (Technical Contribution)

### **1. 고가용성 및 무중단 서비스 아키텍처 설계**
* **서버 이중화 및 로드밸런싱**: Nginx를 리버스 프록시로 설정하고 2대의 Tomcat 서버로 트래픽을 분산하여 부하를 제어했습니다.
* **세션 공유 전략**: 다중 WAS 환경에서 세션 불일치 문제를 해결하기 위해 **Tomcat Clustering(all-to-all)** 방식을 도입, 로드밸런싱 환경에서도 로그인 상태가 유지되도록 설계했습니다.
* **DB 복제(Replication)**: InnoDB 기반의 Source-Replica 구조를 구축하여 데이터 장애 시에도 읽기 전용 복제본을 통한 서비스 지속이 가능하도록 단일 장애점(SPOF)을 제거했습니다.

### **2. 530만 건 대용량 데이터 최적화 및 품질 관리**
* **성능 개선(Indexing)**: 대시보드 로딩 시 1분 이상 소요되던 Full Table Scan 문제를 `SEQ` 컬럼 인덱스 추가를 통해 획기적으로 개선했습니다.
* **이상 데이터 정제**: 소비 내역 분석 중 소분류의 합이 대분류와 일치하지 않는 이상 데이터를 직접 발견하여 배제하는 등 엄밀한 품질 관리를 수행했습니다.
* **DB 정규화**: 대용량 환경에 맞춰 DB 정규화를 진행하고, 하드웨어 성능을 효율적으로 활용하기 위한 데이터 모델링을 수행했습니다.

### **3. 시스템 필터 및 보안 적용**
* **전역 인코딩 및 인증 제어**: `CharacterEncodingFilter`를 통한 UTF-8 처리와 `AuthFilter`를 활용한 미인증 요청 차단 로직을 구현하여 보안성을 강화했습니다.

---

## 💡 기술적 도전과 해결

### **"대용량 시계열 데이터 처리에 따른 참조 무결성 이슈"**
* **문제**: 사용자 정보 테이블과 소비 이력 테이블 간의 외래키(FK) 설정 시, 연도별로 변하는 연령 정보로 인해 참조 무결성 오류가 발생했습니다.
* **해결**: DB 수준의 강제적인 FK 제약 조건 대신, 애플리케이션 레벨에서 데이터 정합성을 관리하도록 설계 구조를 변경하여 시계열 데이터의 유연성을 확보했습니다.

---

## 🏗️ 시스템 아키텍처
```
클라이언트 (웹 브라우저 / API 클라이언트)
        │ HTTP 요청
        ▼
┌─────────────────────┐
│       Nginx         │  ← Presentation 계층 (정적 리소스, 트래픽 제어)
│                     │    
└──────────┬──────────┘
         부하분산 
    ┌───────┴────────┐
    ▼                ▼
┌────────┐      ┌────────┐
│Tomcat 1│      │Tomcat 2│  ← Application 계층 (Servlets & JSP, HikariCP)
│ :8080  │      │ :8090  │
└────┬───┘      └───┬────┘
     │   Read/Write │
     ▼              ▼
┌──────────────────────┐
│  MySQL Source (R/W)  │  ← Data 계층 (Docker Container)
└──────────────────────┘
         │ Replication
         ▼
┌──────────────────────┐
│  MySQL Replica (R)   │
└──────────────────────┘
```


---

## 📈 성과 및 배운 점

* **인프라 운영 역량**: 리버스 프록시, 로드밸런싱, 서버 클러스터링 등 엔터프라이즈급 인프라 구성 요소를 직접 구축하며 고가용성 시스템에 대한 이해도를 높였습니다.
* **데이터 엔지니어링 경험**: 530만 건이라는 실제 대규모 데이터를 다루며 인덱스 설계의 중요성과 데이터 정합성 관리의 복잡성을 직접 체감하고 해결했습니다.
* **성능 최적화 역량**: 병목 현상을 진단하고 인덱싱 등의 조치를 통해 사용자 경험(UX)을 개선하는 일련의 과정을 성공적으로 완수했습니다.

---

## 🖼️ 작업 화면
*이미지를 클릭하면 크게 볼 수 있습니다.*

| 개인 소비 분석 (Pie Chart) | 또래 집단 비교 대시보드 |
| :---: | :---: |
| ![Dashboard1](https://github.com/user-attachments/assets/8e0b988f-9b52-4073-a8ac-ed1802c75f52) | ![Dashboard2](https://github.com/user-attachments/assets/375c888a-6bca-4cda-96e1-166fcd6299b3) |

