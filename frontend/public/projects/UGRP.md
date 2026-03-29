# 🧊 사용자 설명을 통한 단일 이미지 기반 동적 3D 장면 제어
**Conditional Control from a Single Image to a Dynamic 3D Scene via User Prompts**

**2023. 12 ~ 2024. 12 (DGIST UGRP 졸업 연구 프로젝트)**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) ![Stable Diffusion](https://img.shields.io/badge/Stable%20Diffusion-000000?style=flat-square&logo=stabilityai&logoColor=white) ![Gaussian Splatting](https://img.shields.io/badge/3DGS-FFD700?style=flat-square&logo=nvidia&logoColor=black) ![Blender](https://img.shields.io/badge/Blender-F5792A?style=flat-square&logo=blender&logoColor=white)

---

단일 2D 이미지와 사용자의 텍스트 프롬프트를 결합하여 고품질의 3D 장면을 생성하고, 객체를 자유롭게 조작할 수 있는 인터랙티브 환경을 구축한 연구입니다. 기존 기술의 한계인 **Occlusion(객체에 의한 배경 가려짐)** 문제를 해결하기 위해 객체와 배경을 완전히 분리하여 재구성하는 독립적 파이프라인을 설계했습니다.

---

## 🚀 주요 연구 내용 및 특징

* **텍스트 기반 객체 분리**: Segment Anything Model(SAM)을 사용하여 사용자가 의도한 객체만 정밀하게 마스킹하고 추출합니다.
* **배경 복원(Inpainting)**: Stable Diffusion 기반 기술을 적용, 객체가 제거된 빈 공간을 주변 맥락에 맞게 생성하여 "가려진 영역"의 정보를 복원합니다.
* **듀얼 트랙 3D 재구성**: 분리된 객체는 Multi-view Diffusion 모델로, 배경은 Indoor Scene Assumption(평면 제약 조건)을 활용해 각각 독립적인 3D 모델로 생성합니다.
* **Gaussian Splatting 렌더링**: 기존 포인트 클라우드의 불연속성을 극복하기 위해 3DGS 기법을 도입, 부드럽고 사실적인 실시간 렌더링을 구현했습니다.
* **동적 인터랙션**: 통합된 3D 장면 내에서 사용자가 객체의 위치, 크기, 회전 등을 실시간으로 제어할 수 있는 기능을 제공합니다.

---

## 🛠️ 핵심 기여 및 구현 기술

### **1. Occlusion 극복을 위한 배경 인페인팅 파이프라인**
* **문제 해결**: 단일 시점 이미지에서 물체 뒤편의 정보를 알 수 없는 문제를 해결하기 위해, 객체를 제거한 후 배경의 기하학적 구조를 예측하여 채우는 인페인팅 기술을 적용했습니다.
* **일관성 확보**: Depth Inpainting 모델을 도입하여 새롭게 생성된 영역과 기존 배경 간의 기하학적 일관성을 유지했습니다.

### **2. 실내 공간 가정을 활용한 3D 재구성 최적화**
* **Planar Priors 적용**: 실내 장면이 벽, 바닥 등 평면 위주로 구성된다는 **Manhattan-World Assumption**을 활용하여 공간의 왜곡을 최소화하고 구조적 안정성을 높였습니다.
* **Joint Optimization**: 이미지 손실(Image Loss)과 기하학적 제약(Geometric Constraints)을 동시에 최적화하여 사실적인 공간감을 구현했습니다.

### **3. Gaussian Splatting 기반 통합 및 제어**
* **Composition**: 각각 생성된 객체와 배경의 Gaussian 파라미터를 통합하여 하나의 좌표계로 병합했습니다.
* **Adaptive 조작**: 사용자의 텍스트 명령에 따라 특정 객체만 선택적으로 렌더링하거나 변환(Transformation)할 수 있는 레이아웃 제어 로직을 완성했습니다.

---

## 💡 연구 성과 및 시사점

* **기존 방식의 한계 돌파**: 물체와 배경이 섞여 세부 정보가 뭉개지던 기존 방식과 달리, 명시적 분리를 통해 객체의 디테일을 보존하면서도 가려진 배경까지 완벽하게 복원하는 성과를 거두었습니다.
* **확장 가능성 입증**: 텍스트 프롬프트에 따라 서로 다른 3D 장면이 유연하게 생성되는 것을 확인하였으며, 이는 차세대 공간 컴퓨팅(Apple Vision Pro 등) 콘텐츠 제작의 효율을 높일 수 있는 기술임을 입증했습니다.
* **융합 역량 강화**: 최신 생성형 AI 모델들을 유기적으로 결합하여 복잡한 시스템을 설계하고, 이론적 가설을 실제 고품질 3D 결과물로 도출해냈습니다.

---

## 🖼️ 작업 화면
*이미지를 클릭하면 크게 볼 수 있습니다.*

| 연구 전체 파이프라인 (Overall Pipeline) | 3D 재구성 및 객체 통합 결과 |
| :---: | :---: |
| ![Pipeline](https://github.com/user-attachments/assets/overall_pipeline_placeholder) | ![Result](https://github.com/user-attachments/assets/reconstruction_result) |

