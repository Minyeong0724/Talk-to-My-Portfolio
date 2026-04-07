# 🧊 사용자 설명을 통한 단일 이미지 기반 동적 3D 장면 제어
**Conditional Control from a Single Image to a Dynamic 3D Scene via User Prompts**

**2023. 12 ~ 2024. 12 (DGIST 'UGRP' 5인 졸업 연구 프로젝트)**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) ![Stable Diffusion](https://img.shields.io/badge/Stable%20Diffusion-000000?style=flat-square&logo=stabilityai&logoColor=white) ![Gaussian Splatting](https://img.shields.io/badge/3DGS-FFD700?style=flat-square&logo=nvidia&logoColor=black) ![Blender](https://img.shields.io/badge/Blender-F5792A?style=flat-square&logo=blender&logoColor=white)

---

단일 2D 이미지와 사용자의 텍스트 프롬프트를 결합하여 고품질의 3D 장면을 생성하고, 객체를 자유롭게 조작할 수 있는 인터랙티브 환경을 구축한 연구입니다. 기존 기술의 한계인 **Occlusion(객체에 의한 배경 가려짐)** 문제를 해결하기 위해 객체와 배경을 완전히 분리하여 재구성하는 독립적 파이프라인을 설계했습니다.

---

## 🚀 주요 연구 내용 및 기술적 성취

* **텍스트 기반 객체 분리**: SAM(Segment Anything Model)을 사용하여 사용자가 의도한 객체만 정밀하게 마스킹하고 추출하는 로직을 구현했습니다.
* **배경 복원(Inpainting)**: Stable Diffusion 기반 기술을 적용, 객체가 제거된 빈 공간을 주변 맥락에 맞게 생성하여 "가려진 영역"의 정보를 복원했습니다.
* **듀얼 트랙 3D 재구성**: 분리된 객체와 배경을 독립적인 3D 모델로 생성하여 객체별 독립적인 제어권을 확보했습니다.
* **Gaussian Splatting 렌더링**: 3DGS 기법을 도입하여 부드럽고 사실적인 실시간 렌더링을 구현했습니다.

---

## 🛠️ 핵심 기여 및 구현 상세

### **1. 연구 파이프라인 설계 및 단계별 데이터 연동**
* **순차적 실험 프로세스 관리**: SAM, Stable Diffusion, 3DGS 등 각기 다른 환경의 오픈소스 모델들을 유기적으로 연결하는 연구 파이프라인을 설계했습니다. 각 모델의 결과물을 분석하여 다음 단계의 입력 조건에 부합하도록 데이터를 가공하고 전달하는 프로세스를 담당했습니다.
* **데이터 정합성 검증**: 객체 분리 및 배경 복원 단계에서 생성된 중간 산출물들이 최종 3D 재구성 단계에서 시각적 왜곡을 일으키지 않도록 품질을 관리하며 실험의 신뢰도를 높였습니다.

### **2. 세그먼트 기반 객체 매핑 및 인터랙션 구현**
* **텍스트 쿼리 기반 객체 식별**: SAM으로 사전 분리된 객체 인스턴스 중 사용자가 입력한 텍스트(예: "Table")에 해당하는 객체를 매핑하여 분리해주는 인터랙션 구조를 적용했습니다.
* **오픈소스 기술 이식 및 활용**: 최신 오픈소스 로직을 프로젝트 환경에 맞춰 안정적으로 이식하고, 단일 이미지 환경에서 객체 제어 가능성을 확인하기 위한 최적의 파라미터를 설정했습니다.

### **3. 최신 기술 분석 및 연구 방향 수립**
* **SOTA 논문 스터디**: 3D Gaussian Splatting 및 생성형 AI 관련 최신 연구 사례를 분석하여, 프로젝트의 목표인 '실시간 3D 장면 제어'에 가장 적합한 기술 스택을 선정하고 연구의 이론적 근거를 마련했습니다.

---

## 💡 연구 성과 및 시사점

* **기존 방식의 한계 돌파**: 명시적 객체 분리를 통해 디테일을 보존하면서도 가려진 배경까지 완벽하게 복원하는 성과를 거두었습니다.
* **이론 및 실무 역량 강화**: 최신 SOTA 논문을 실제 시스템 설계에 녹여내어 고품질 3D 결과물을 도출하는 엔지니어링 역량을 증명했습니다.

---


## 🔍 트러블 슈팅 (Troubleshooting)

### **1. [Project Management] 기술적 완벽주의와 일정 관리의 충돌**
* **문제**: 연구가 활발한 분야 특성상 매달 쏟아지는 최신 SOTA 논문을 리서치하고 아키텍처를 수정하는 데 매몰되어, 실제 모델 적용 및 파이프라인 최적화 단계의 일정이 지연되었습니다.
* **해결**: 완벽한 하나의 모델에 집중하기보다 가용 가능한 **최소 기능 모델(MVP)**을 먼저 통합하는 방식으로 전환했습니다. 작업 방식을 **Agile**하게 수정하여 우선순위가 높은 핵심 기능을 먼저 검증했습니다.
* **성과**: 학기 일정과 연구의 균형을 맞추며 기한 내에 성공적으로 결과물을 도출했으며, 실무적인 프로젝트 운영과 리스크 관리의 중요성을 학습했습니다.

### **2. [Technical] SAM 출력 형식의 커스터마이징 (RGBA 추출)**
* **문제**: 기본 튜토리얼 적용 시 객체가 단순히 채색되어 강조되는 결과물만 도출되었습니다. 3D 병합을 위해서는 객체 영역만 투명하게 분리된 파일이 필요했습니다.
* **해결**: 분리된 객체 마스크의 픽셀 값을 분석하고 **RGBA 채널을 직접 적용**하는 로직을 추가하여, 원하는 객체만 투명 배경의 독립된 파일로 추출하는 데 성공했습니다.

### **3. [Technical] 객체 세그멘테이션 정교화 (Object Isolation)**
* **문제**: "Table"을 검색할 때 인접한 "Laptop" 등 다른 객체가 하나의 덩어리로 묶여 분리되는 현상이 발생했습니다.
* **해결**: 모델의 세그멘테이션 파라미터(Confidence Threshold 등)를 조정하고 프롬프트 매핑 로직을 정교화하여, 혼재된 객체 중 목표로 하는 단일 인스턴스만 정확히 분리되도록 정확도를 높였습니다.

---

## 🖼️ 3D 장면 재구성 결과 및 기존 방법과의 비교


| 입력 이미지 | 물체가 지워진 배경 이미지(inpainted) | 분리된 물체 이미지 |
| :---: | :---: | :---: |
| ![Original](/images/A_comparison/input_image.png) | ![Inpainted](/images/A_comparison/inpainted_image.png) | ![Segmented](/images/A_comparison/segmented_image.png) |

| 이전 방법 | 우리 방법 | 
| :---: | :---: | 
| ![Previous_method](images/A_comparison/previous_method_image.png) | ![Our_method](images/A_comparison/our_method_image.png) | 

---