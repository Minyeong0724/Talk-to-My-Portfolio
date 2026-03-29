# 🌌 가시광 영역 이미지 합성을 이용한 천체 사진 화질 개선
**Visible Light Image Synthesis for Astrophotography Enhancement**


**2025.09 ~ 2025.12 DIP(Digital Image Processing) Term Project**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

---

장노출 천체 촬영 시 발생하는 카메라 센서의 열 및 전기적 노이즈를 소프트웨어적으로 해결하기 위한 프로젝트입니다. 딥러닝 기반의 이미지 정합(Alignment) 파이프라인을 구축하여 별의 궤적(일주 운동)을 보정하고, 다중 이미지 합성을 통해 전체적인 화질을 혁신적으로 개선하였습니다.

---

## 🚀 주요 기능 및 특징

* **노이즈 저감 파이프라인**: 105장의 Dark 이미지와 100장의 Light 이미지를 활용하여 센서 고유의 열 및 전기적 노이즈를 효과적으로 제거합니다.
* **BatchAlignmentModel (DL)**: PyTorch를 활용해 이미지 간의 기하학적 변환 파라미터를 추정하고 Affine Transformation 행렬을 예측합니다.
* **Multi-scale 정렬 알고리즘**: Gaussian Blur를 적용한 저해상도 이미지에서 1차 정렬 후, 고해상도 이미지에서 미세 조정을 수행하여 국소 최적해(Local Minima) 문제를 해결했습니다.
* **고정밀 이미지 스태킹**: 픽셀 단위의 정합 후 평균값 합성을 통해 이미지 포화를 방지하며 배경 노이즈를 최소화했습니다.

---

## 🛠️ 기여 부분 (Technical Contribution)

### **1. Dark Frame 감산 및 이미지 전처리 구축**
* **노이즈 분리**: 원본(Light) 파일에서 센서 고유의 왜곡이 담긴 Dark 프레임을 감산하여 기초적인 노이즈를 제거했습니다.
* **특징점 추출 최적화**: 임계값 처리(Thresholding)로 별 영역을 추출한 뒤 가우시안 필터를 적용하여 정합에 최적화된 부드러운 밝기 변화를 구현했습니다.

### **2. PyTorch 기반 기하학적 변환 추정 모델 구현**
* **파라미터 예측**: 이미지 전체의 위치 관계를 학습해 이동량과 회전 각도를 포함한 변환 행렬을 예측하는 모델을 설계했습니다.
* **Adam Optimizer 활용**: 이동량과 각도 변화량의 스케일 차이를 극복하기 위해 Adam 옵티마이저를 적용하여 정합 오차를 최소화했습니다.

### **3. 지능형 이미지 정합 및 합성 프로세스**
* **상관관계 최적화**: 정합된 이미지들 사이의 상관관계가 극대화되도록 파라미터를 정밀하게 조정하여 픽셀 단위의 정렬을 수행했습니다.
* **시각적 품질 검증**: 기존 라이브러리 및 단순 합성 방식과 비교하여 별의 상이 얼마나 또렷하게 맺히는지 분석했습니다.

---

## 💡 기술적 도전과 해결

### **"지구 자전에 의한 별의 궤적 형성 보정"**
* **문제**: 단순 평균 합성 시 지구 자전으로 인해 별이 선 형태나 여러 개로 겹쳐 보이는 현상이 발생했습니다.
* **원인 분석**: 장시간 노출 시 피사체가 이동하며 발생하는 기하학적 왜곡이 단순 스태킹으로는 보정되지 않음을 확인했습니다.
* **해결**: 제안한 **BatchAlignmentModel**을 통해 기하학적 파라미터를 정밀하게 추정하여, 별의 상이 흩어지지 않고 한 점으로 모이는 선명한 천체 이미지를 구현했습니다.

---

## 📈 결과 분석 및 시사점

* **정밀한 정합 성능**: 단순 스태킹 방식에서 나타나는 별의 흐름 현상을 완전히 제거하고 픽셀 단위의 정확한 정렬을 달성했습니다.
* **배경 노이즈 억제**: 다중 이미지 합성을 통해 배경의 무작위 노이즈를 상쇄하여 피사체와 배경 간의 대비를 높였습니다.
* **장비 한계 극복**: 고가의 적도의 장비 없이도 소프트웨어적 합성을 통해 선명한 천체 사진을 얻을 수 있음을 입증했습니다.

---

## 🖼️ 작업 화면
*이미지를 클릭하면 크게 볼 수 있습니다.*

| 전처리 전 (원본) | 전처리 후 (추출) | 합성 결과 (최종) |
| :---: | :---: | :---: |
| ![Original](https://github.com/user-attachments/assets/light_frame_example) | ![Preprocessed](https://github.com/user-attachments/assets/preprocessed_star) | ![Final](https://github.com/user-attachments/assets/final_result) |

