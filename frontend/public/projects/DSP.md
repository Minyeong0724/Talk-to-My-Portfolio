# 🔊 Spectral Gating 알고리즘 기반 음성 노이즈 제거 (Noise Reduce)
**MATLAB Implementation of Spectral Gating for Speech Enhancement**

**2025. 04 ~ 2025. 05 (DGIST '디지털 신호처리' 3인 팀 프로젝트)**

![MATLAB](https://img.shields.io/badge/MATLAB-ED8B00?style=flat-square&logo=mathworks&logoColor=white) ![Signal Processing](https://img.shields.io/badge/Signal%20Processing-007ACC?style=flat-square&logo=audio-technica&logoColor=white) ![Simulink](https://img.shields.io/badge/Simulink-E11E22?style=flat-square&logo=mathworks&logoColor=white)

---

Python 환경에서 널리 쓰이는 `noisereduce` 라이브러리의 핵심인 'Spectral Gating' 알고리즘을 분석하고, 이를 MATLAB 환경에서 직접 설계 및 구현한 프로젝트입니다. 음성 신호에 포함된 정상(Stationary) 및 비정상(Non-stationary) 노이즈를 학습 데이터 없이 효율적으로 제거하는 파이프라인을 구축하였습니다.

---

## 🚀 주요 기능 및 특징

* **Spectral Gating 알고리즘**: 주파수 영역에서 신호와 노이즈를 분리하는 마스크를 생성하여 노이즈를 억제하는 고속 연산 알고리즘입니다.
* **학습 데이터 프리(Learning-free)**: 별도의 인공지능 학습 없이 신호의 통계적 특성(평균, 표준편차)만으로 노이즈를 정의합니다.
* **정상/비정상 노이즈 통합 대응**: 주변 소음이 일정한 경우(Stationary)와 시변적인 경우(Non-stationary)를 모두 처리할 수 있는 모델을 구현했습니다.
* **Simulink 모델링**: 알고리즘의 동작 과정을 시각적으로 확인하고 실시간 처리가 가능하도록 Simulink 블록 다이어그램으로 설계했습니다.

---

## 🛠️ 기여 부분 (Technical Contribution)

### **1. Python to MATLAB 알고리즘 이식 및 최적화**
* **코드 재현**: Python `noisereduce` 라이브러리의 소스 코드를 분석하여 MATLAB 환경에 맞는 `spectral_gating_stationary.m` 함수를 직접 작성했습니다.
* **라이브러리 오차 수정**: 파이썬 환경의 기본 윈도우 함수(Hanning)와 MATLAB의 기본값(Hamming) 차이를 발견하여 수동 보정함으로써 결과물의 일관성을 확보했습니다.

### **2. 시간-주파수 영역 마스킹 파이프라인 설계**
* **STFT 및 분석**: 입력 신호와 노이즈 구간에 STFT를 적용하고, 각 주파수 채널별 평균($\mu_n$)과 표준편차($\sigma_n$)를 기반으로 가변 임계값($\text{thresh}_n$)을 산출했습니다.
* **마스크(Msmooth) 생성**: 임계값을 기반으로 2차원 마스크를 생성하고, 외적(Outer product) 연산을 통한 Smoothing 필터를 적용하여 복원된 음성의 부자연스러운 왜곡(Musical Noise)을 최소화했습니다.

### **3. 지표 기반 하이퍼 파라미터 최적화**
* **NOIZEUS 데이터셋 활용**: Street, Airport, Train station 등 다양한 노이즈 환경과 SNR(0~15dB) 조건에서 성능을 정밀 테스트했습니다.
* **파라미터 스윕(Sweep)**: PESQ(음성 품질) 및 STOI(음성 명료도) 지표를 최대로 높이기 위해 임계값 계수($k$), 감쇠 비율(Prop decrease), 시간/주파수 평활화 계수($L_t, L_f$) 등의 최적 조합을 도출했습니다.

---

## 💡 기술적 도전과 해결

### **"비정상 노이즈 환경에서의 신호 복원력 강화"**
* **문제**: 소음이 일정하지 않은 환경(Low SNR 0~5dB)에서는 고정된 임계값을 사용하는 정상 노이즈 제거 방식의 성능이 급격히 저하되었습니다.
* **해결**: 비정상 노이즈 모델을 적용하여 주파수별 임계값을 시변적으로 추정하도록 설계했습니다. 이를 통해 Street noise와 같은 강한 소음 환경에서도 음성 신호를 더 뚜렷하게 복원할 수 있었습니다.

---

## 📈 결과 분석 및 시사점

* **노이즈 유형별 적응성**: Street noise 외에도 Car, Train station 등 다양한 노이즈 프로파일에서 안정적인 Denoising 성능을 확인했습니다.
* **성능 향상 확인**: 낮은 SNR(0dB) 환경에서 Stationary 방식보다 Non-stationary 방식이 음성 복원력이 우수함을 시각적 스펙트로그램 분석을 통해 입증했습니다.
* **효율적인 알고리즘 기여**: 적은 연산량으로도 높은 명료도(STOI)를 달성하는 하이퍼 파라미터 셋을 찾아 효율적인 음성 신호 처리 알고리즘의 기틀을 마련했습니다.

---

## 🖼️ 작업 화면
*이미지를 클릭하면 크게 볼 수 있습니다.*

| 노이즈 분석 및 마스크 알고리즘 | STFT 기반 주파수 분석 결과 |
| :---: | :---: |
| ![Algorithm_Flow](https://github.com/user-attachments/assets/algorithm_flow) | ![Spectrogram_Result](https://github.com/user-attachments/assets/spectrogram_analysis) |

