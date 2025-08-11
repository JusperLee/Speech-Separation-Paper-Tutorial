# 🎵 Speech Separation Paper Tutorial

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <img src="https://visitor-badge.laobi.icu/badge?page_id=JusperLee.Speech-Separation-Paper-Tutorial" alt="访客统计" /> [![GitHub stars](https://img.shields.io/github/stars/JusperLee/Speech-Separation-Paper-Tutorial.svg?style=social&label=Star)](https://github.com/JusperLee/Speech-Separation-Paper-Tutorial) [![GitHub forks](https://img.shields.io/github/forks/JusperLee/Speech-Separation-Paper-Tutorial.svg?style=social&label=Fork)](https://github.com/JusperLee/Speech-Separation-Paper-Tutorial) [![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square&logo=github-pages)](https://cslikai.cn/Speech-Separation-Paper-Tutorial/)

> 🚀 **A comprehensive collection of speech separation papers, models, and resources from 2016-2025**

## 📋 Table of Contents

- [📊 Overview & Statistics](#-overview--statistics)
- [📈 Model Timeline](#-model-timeline)
- [🏆 Performance Comparison](#-performance-comparison)
- [🔬 Model Categories](#-model-categories)
  - [🎯 Deterministic vs Generative](#-deterministic-vs-generative)
  - [🏗️ Network Architecture](#️-network-architecture)
  - [🎭 Mask vs Mapping](#-mask-vs-mapping)
  - [🧠 Learning Methods](#-learning-methods)
  - [👥 Speaker Knowledge](#-speaker-knowledge)
- [📅 Papers by Year](#-papers-by-year)
- [🎬 Multi-Modal Speech Separation](#-multi-modal-speech-separation)
- [📏 Evaluation Metrics](#-evaluation-metrics)
- [📚 Datasets](#-datasets)
- [🎥 Video Tutorial](#-video-tutorial)

## 📊 Overview & Statistics

### 📈 Model Timeline

![Model Timeline](./all_model.pdf)
*Figure 1: Speech separation models development timeline (2016-2025)*

### 📊 Parameter vs Performance Analysis

![Parameters vs Performance](./params.pdf)
*Figure 2: Model parameters vs WSJ0-2Mix performance scatter plot*

### 🔢 Statistics Summary

- **Total Models**: 69
- **Years Covered**: 2016-2025 (10 years)
- **Deterministic Models**: 60 (87%)
- **Generative Models**: 9 (13%)
- **Known Speaker Models**: 58 (84%)
- **Unknown Speaker Models**: 11 (16%)

## 🏆 Performance Comparison

### 🥇 Top Performing Models

#### WSJ0-2Mix Dataset (SI-SNRi)
| Rank | Model | Year | SI-SNRi (dB) | SDRi (dB) | Params (M) | Code |
|------|-------|------|--------------|-----------|------------|------|
| 1 | SepTDA | 2024 | **24.0** | **23.9** | 21.2 | - |
| 2 | SFSRNet | 2022 | **24.0** | **24.1** | 59.0 | [🔗](https://github.com/arda-num/SFSRNet) |
| 3 | MossFormer2 | 2024 | **24.1** | - | 55.7 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) |
| 4 | Separate And Diffuse | 2023 | **23.9** | - | - | [🔗](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material) |
| 5 | QDPN | 2022 | **23.6** | - | 200.0 | - |

#### WHAM! Dataset (SI-SNRi)
| Rank | Model | Year | SI-SNRi (dB) | SDRi (dB) | Params (M) | Code |
|------|-------|------|--------------|-----------|------------|------|
| 1 | MossFormer2 | 2024 | **18.1** | - | 55.7 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) |
| 2 | SPMamba | 2024 | **17.4** | **17.6** | 6.1 | [🔗](https://github.com/JusperLee/SPMamba) |
| 3 | MossFormer | 2023 | **17.3** | - | 42.1 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) |
| 4 | SepFormer | 2021 | **16.4** | - | 26.0 | [🔗](https://github.com/speechbrain/speechbrain/tree/develop/recipes/WSJ0Mix) |
| 5 | WaveSplit | 2021 | **16.0** | **16.5** | 29.0 | [🔗](https://github.com/asdlei99/WaveSplit-pytorch-incomplete) |

#### LibriMix Dataset (SI-SNRi)
| Rank | Model | Year | SI-SNRi (dB) | SDRi (dB) | Params (M) | Code |
|------|-------|------|--------------|-----------|------------|------|
| 1 | Separate And Diffuse | 2023 | **21.5** | - | - | [🔗](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material) |
| 2 | MossFormer2 | 2024 | **21.7** | - | 55.7 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) |
| 3 | SPMamba | 2024 | **19.9** | **20.4** | 6.1 | [🔗](https://github.com/JusperLee/SPMamba) |
| 4 | MossFormer | 2023 | **19.7** | - | 42.1 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) |
| 5 | TFPSNet | 2022 | **19.7** | **19.9** | 2.7 | - |

## 🔬 Model Categories

### 🎯 Deterministic vs Generative

#### 🔧 Deterministic Models (60 models)
Deterministic models use fixed neural network architectures to directly predict separation masks or mappings.

**Representative Models:**
- **SepTDA** (2024): 24.0 dB SI-SNRi on WSJ0-2Mix
- **MossFormer2** (2024): 24.1 dB SI-SNRi on WSJ0-2Mix
- **SPMamba** (2024): State-space model approach
- **SepFormer** (2021): Pure attention-based architecture

#### 🎨 Generative Models (9 models)
Generative models use probabilistic approaches like GANs, VAEs, or diffusion models.

**Representative Models:**
- **EDSep** (2025): Diffusion-based method, 15.9 dB SI-SNRi
- **Fast-GeCo** (2024): Fast generative correction
- **SepDiff** (2023): Denoising diffusion model
- **DiffSep** (2023): Diffusion-based generative separation

### 🏗️ Network Architecture

#### 🔄 Dual-path Architecture (22 models)
Dual-path networks process sequences in both intra-chunk and inter-chunk dimensions.

**Key Models:**
- **SepTDA** (2024): Transformer decoder-based attractor
- **SPMamba** (2024): State-space model integration
- **TF-GridNet** (2023): Full and sub-band modeling
- **SepFormer** (2021): Pure transformer architecture
- **DPRNN** (2020): Foundational dual-path RNN

#### 🌊 Conv-TasNet Architecture (20 models)
Time-domain audio separation networks using 1D convolutions.

**Key Models:**
- **MossFormer2** (2024): 55.7M parameters
- **MossFormer** (2023): Gated single-head transformer
- **ConvTasNet** (2019): Original Conv-TasNet architecture
- **TaSNet** (2018): Time-domain audio separation

#### 🏗️ U-Net Architecture (10 models)
Encoder-decoder architectures with skip connections.

**Key Models:**
- **EDSep** (2025): Diffusion-based U-Net
- **S4M** (2023): Neural state-space model
- **TDANet** (2022): Top-down attention
- **A-FRCNN** (2021): Asynchronous fully recurrent CNN

### 🎭 Mask vs Mapping

#### 🎭 Mask-based Methods (39 models)
Predict multiplicative masks to separate sources.

**Advantages:**
- Interpretable separation process
- Preserves phase information
- Stable training

#### 🗺️ Mapping-based Methods (24 models)
Directly map mixed signals to separated sources.

**Advantages:**
- End-to-end optimization
- Potentially better reconstruction
- More flexible architectures

### 🧠 Learning Methods

#### 🎯 Predictive Methods (58 models)
Supervised learning with known target separations.

#### 🔄 Clustering Methods (6 models)
Use embedding clustering for speaker separation:
- **Chimera++ Network** (2018)
- **DANet** (2017)
- **DPCL** (2016)

#### 🎲 Unsupervised Methods (4 models)
Learn separation without paired training data:
- **UNSSOR** (2023)
- **TS-MixIT** (2021)
- **MixIT** (2020)
- **VAE** (2021)

### 👥 Speaker Knowledge

#### ✅ Known Speaker Models (58 models)
Assume fixed number of speakers (typically 2).

#### ❓ Unknown Speaker Models (11 models)
Handle variable number of speakers:
- **SepTDA** (2024): Transformer decoder-based attractor
- **SepEDA** (2022): Encoder-decoder attractors
- **VSUNOS** (2020): Voice separation for unknown speakers
- **Multi-Decoder DPRNN** (2021)

## 📅 Papers by Year

### 🚀 2025 (1 model)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| EDSep | EDSep: An Effective Diffusion-Based Method for Speech Source Separation | 15.9 | - | - | [📄](https://arxiv.org/pdf/2501.15965) |

### 🔥 2024 (10 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| ReSepFormer | Resource-Efficient Separation Transformer | 18.6 | 8.0 | [🔗](https://github.com/speechbrain/speechbrain/blob/develop/recipes/WSJ0Mix/separation/hparams/resepformer.yaml) | [📄](https://ieeexplore.ieee.org/abstract/document/10446670) |
| Conv-TasNet GAN | Exploring GANs With Conv-TasNet | - | - | [🔗](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ohiou1714137508806109&disposition=inline) | - |
| SepTDA | Boosting Unknown-Number Speaker Separation | **24.0** | 21.2 | - | [📄](https://ieeexplore.ieee.org/abstract/document/10446032) |
| SPMamba | SPMamba: State-space model is all you need | **22.5** | 6.1 | [🔗](https://github.com/JusperLee/SPMamba) | [📄](https://arxiv.org/pdf/2404.02063) |
| Fast-GeCo | Noise-robust Speech Separation with Fast Generative Correction | - | - | [🔗](https://github.com/WangHelin1997/Fast-GeCo) | [📄](https://arxiv.org/pdf/2406.07461) |
| DIP | Speech Separation With Pretrained Frontend | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/10640238) |
| TIGER | TIGER: Time-frequency Interleaved Gain Extraction | - | 0.8 | [🔗](https://github.com/JusperLee/TIGER) | [📄](https://arxiv.org/pdf/2410.01469) |
| CodecSS | Speech Separation using Neural Audio Codecs | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/10848753) |
| TCodecSS | Towards Audio Codec-based Speech Separation | - | - | - | [📄](https://arxiv.org/pdf/2406.12434) |
| MossFormer2 | MossFormer2: Combining Transformer and RNN-Free Recurrent Network | **24.1** | 55.7 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) | [📄](https://ieeexplore.ieee.org/abstract/document/10445985) |

### ⭐ 2023 (10 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| SepDiff | Sepdiff: Speech separation based on denoising diffusion | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/10095979) |
| S4M | A Neural State-Space Model Approach | 20.5 | 3.6 | [🔗](https://github.com/JusperLee/S4M) | [📄](https://arxiv.org/pdf/2305.16932) |
| HuBERT | Cocktail Hubert: Generalized Self-Supervised Pre-Training | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/10096630) |
| Diff-Refiner | Diffusion-based signal refiner for speech separation | - | - | - | [📄](https://arxiv.org/pdf/2305.05857) |
| CycleGAN-SS | Cycle GAN-Based Audio Source Separation | - | - | - | [📄](https://link.springer.com/article/10.1007/s00034-022-02178-1) |
| pSkiM | Predictive Skim: Contrastive Predictive Coding | 15.5 | 8.5 | - | [📄](https://ieeexplore.ieee.org/abstract/document/10097107) |
| PGSS | PGSS: Pitch-Guided Speech Separation | - | - | - | [📄](https://ojs.aaai.org/index.php/AAAI/article/view/26542) |
| Separate And Diffuse | Using a Pretrained Diffusion Model | **23.9** | - | [🔗](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material) | [📄](https://arxiv.org/pdf/2301.10752) |
| DiffSep | Diffusion-Based Generative Speech Source Separation | 14.3 | - | [🔗](https://github.com/fakufaku/diffusion-separation) | [📄](https://ieeexplore.ieee.org/abstract/document/10095310) |
| TF-GridNet | Integrating Full- and Sub-Band Modeling | **23.5** | 14.5 | [🔗](https://github.com/espnet/espnet) | [📄](https://ieeexplore.ieee.org/abstract/document/10214650) |
| UNSSOR | Unsupervised Neural Speech Separation | - | - | - | [📄](https://proceedings.neurips.cc/paper_files/paper/2023/file/6b44765c9201730a27f7931afb4d7434-Paper-Conference.pdf) |
| MossFormer | Pushing the Performance Limit of Monaural Speech Separation | **22.8** | 42.1 | [🔗](https://github.com/modelscope/ClearerVoice-Studio) | [📄](https://ieeexplore.ieee.org/abstract/document/10096646) |

### 🎯 2022 (7 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| SepEDA | Speech Separation for Unknown Number of Speakers | 21.2 | 12.5 | - | [📄](https://www.isca-archive.org/interspeech_2022/chetupalli22_interspeech.pdf) |
| SSL-SS | Investigating Self-Supervised Learning | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/9746303) |
| SkiM | Skipping Memory Lstm for Low-Latency | 18.3 | 5.9 | [🔗](https://github.com/espnet/espnet) | [📄](https://ieeexplore.ieee.org/abstract/document/9746372) |
| TDANet | Efficient encoder-decoder architecture | 18.6 | 2.3 | [🔗](https://github.com/JusperLee/TDANet) | [📄](https://arxiv.org/pdf/2209.15200) |
| MTDS | Efficient Monaural Speech Separation | 21.5 | 4.0 | - | [📄](https://ieeexplore.ieee.org/abstract/document/9746882) |
| QDPN | Quasi-dual-path Network | **23.6** | 200.0 | - | [📄](https://www.isca-archive.org/interspeech_2022/rixen22_interspeech.pdf) |
| SFSRNet | Super-resolution for Single-Channel Audio | **24.0** | 59.0 | [🔗](https://github.com/arda-num/SFSRNet) | [📄](https://ojs.aaai.org/index.php/AAAI/article/view/21372) |
| TFPSNet | Time-Frequency Domain Path Scanning Network | 21.1 | 2.7 | - | [📄](https://ieeexplore.ieee.org/abstract/document/9747554) |

### 🌟 2021 (13 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| Unknow-SS | Single channel voice separation for unknown number | 19.4 | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/9413627) |
| VAE | Unsupervised Blind Source Separation with VAE | - | - | [🔗](https://ieeexplore.ieee.org/abstract/document/9616154) | [📄](https://ieeexplore.ieee.org/abstract/document/9616154) |
| A-FRCNN | Speech Separation Using Asynchronous Fully Recurrent CNN | 18.3 | 6.1 | [🔗](https://github.com/JusperLee/AFRCNN-For-Speech-Separation) | [📄](https://proceedings.neurips.cc/paper_files/paper/2021/file/be1bc7997695495f756312886f566110-Paper.pdf) |
| Sandglasset | A Light Multi-Granularity Self-Attentive Network | 20.8 | 2.3 | [🔗](https://github.com/Zhongyang-debug/Sandglasset-A-Light-Multi-Granularity-Self-Attentive-Network-For-Time-Domain-Speech-Separation) | [📄](https://ieeexplore.ieee.org/abstract/document/9413837) |
| CDGAN | Generative adversarial networks for single channel separation | - | - | - | [📄](https://www.sciencedirect.com/science/article/pii/S0925231221000734) |
| SepFormer | Attention Is All You Need In Speech Separation | **22.3** | 26.0 | [🔗](https://github.com/speechbrain/speechbrain/tree/develop/recipes/WSJ0Mix) | [📄](https://ieeexplore.ieee.org/abstract/document/9413901) |
| WaveSplit | End-to-End Speech Separation by Speaker Clustering | **22.3** | 29.0 | [🔗](https://github.com/asdlei99/WaveSplit-pytorch-incomplete) | [📄](https://ieeexplore.ieee.org/abstract/document/9495162) |
| TS-MixIT | Teacher-Student MixIT for Unsupervised Speech Separation | - | - | - | [📄](https://arxiv.org/pdf/2106.07843) |
| MSGT-TasNet | Multi-Scale Group Transformer | 17.0 | 66.8 | - | [📄](https://www.ijcai.org/proceedings/2020/0450.pdf) |
| Multi-Decoder DPRNN | Source Separation for Variable Number of Speakers | 19.1 | - | [🔗](https://junzhejosephzhu.github.io/Multi-Decoder-DPRNN/) | [📄](https://ieeexplore.ieee.org/abstract/document/9414205) |
| DPTCN-ATPP | Multi-scale End-to-end Modeling | 19.6 | 4.7 | - | [📄](https://ieeexplore.ieee.org/abstract/document/9645957) |

### 🔬 2020 (8 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| DPTNet | Dual-Path Transformer Network | 20.2 | 2.7 | [🔗](https://github.com/ujscjj/DPTNet) | [📄](https://arxiv.org/pdf/2007.13975) |
| Conv-TasSAN | Separative Adversarial Network | 15.1 | 5.0 | - | [📄](https://www.isca-archive.org/interspeech_2020/deng20b_interspeech.pdf) |
| DPRNN | Dual-path RNN | 18.8 | 2.9 | [🔗](https://github.com/JusperLee/Dual-Path-RNN-Pytorch) | [📄](https://ieeexplore.ieee.org/abstract/document/9054266) |
| VSUNOS | Voice Separation with Unknown Number of Speakers | 20.1 | 7.5 | [🔗](https://github.com/facebookresearch/svoice) | [📄](https://proceedings.mlr.press/v119/nachmani20a/nachmani20a.pdf) |
| Two-Step CTN | Training On Learned Latent Targets | 16.1 | 8.6 | [🔗](https://github.com/etzinis/two_step_mask_learning) | [📄](https://ieeexplore.ieee.org/abstract/document/9054172) |
| Sudo RM-RF | Efficient Networks for Universal Audio Source Separation | 17.0 | 2.7 | [🔗](https://github.com/etzinis/sudo_rm_rf) | [📄](https://ieeexplore.ieee.org/abstract/document/9231900) |
| MixIT | Unsupervised Sound Separation Using Mixture Invariant Training | - | - | [🔗](https://github.com/google-research/sound-separation) | [📄](https://proceedings.neurips.cc/paper_files/paper/2020/file/28538c394c36e4d5ea8ff5ad60562a93-Paper.pdf) |
| FurcaNeXt | End-to-End Monaural Speech Separation | - | 51.4 | [🔗](https://github.com/ShiZiqiang/furcanext-samples) | [📄](https://link.springer.com/chapter/10.1007/978-3-030-37731-1_53) |

### 📚 2019 (4 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| Deep CASA | Divide and Conquer: A Deep CASA Approach | 17.7 | 12.8 | [🔗](https://github.com/yuzhou-git/deep-casa) | [📄](https://ieeexplore.ieee.org/abstract/document/8834838) |
| ConvTasNet | Surpassing Ideal Time–Frequency Magnitude Masking | 15.3 | 5.1 | [🔗](https://github.com/JusperLee/Conv-TasNet) | [📄](https://ieeexplore.ieee.org/abstract/document/8707065) |
| OR-PIT | Recursive speech separation for unknown number | 14.8 | - | [🔗](https://github.com/tky823/DNN-based_source_separation) | [📄](https://arxiv.org/pdf/1904.03065) |
| Chimera++ sign | Deep Learning Based Phase Reconstruction | 15.3 | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/8683231) |

### 🎨 2018 (7 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| SSGAN-PIT | Permutation Invariant Training of GAN | - | - | - | [📄](https://www.isca-archive.org/interspeech_2018/chen18i_interspeech.pdf) |
| CBLDNN-GAT | Speaker-Independent Speech Separation Via GAT | - | 39.5 | - | [📄](https://ieeexplore.ieee.org/abstract/document/8462505) |
| ADAN | Speaker-Independent Speech Separation With Deep Attractor | 10.4 | 9.1 | [🔗](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwili6iLyNSMAxUShq8BHZnXFSoQFnoECBsQAQ&url=https%3A%2F%2Fgithub.com%2Fnaplab%2FDANet&usg=AOvVaw3KziucfYdKvm1o4ucrOKQ1&opi=89978449) | [📄](https://ieeexplore.ieee.org/abstract/document/8264702) |
| TaSNet | Time-Domain Audio Separation Network | 13.2 | 23.6 | [🔗](https://github.com/kaituoxu/TasNet) | [📄](https://ieeexplore.ieee.org/abstract/document/8462116) |
| Wave-UNet | A Multi-Scale Neural Network for End-to-End Audio | - | - | [🔗](https://github.com/f90/Wave-U-Net) | [📄](https://arxiv.org/pdf/1806.03185) |
| SSGAN | Generative Adversarial Source Separation | - | - | - | [📄](https://ieeexplore.ieee.org/abstract/document/8461671) |
| Chimera++ Network | Alternative Objective Functions for Deep Clustering | 11.5 | 32.9 | [🔗](https://github.com/pseeth/deep-learning-for-practitioners/blob/master/README.md) | [📄](https://ieeexplore.ieee.org/abstract/document/8462507/) |

### 🌱 2017 (3 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| DANet | Deep Attractor Network for Single-Microphone Speaker Separation | 10.5 | 9.1 | [🔗](https://github.com/naplab/DANet) | [📄](https://ieeexplore.ieee.org/abstract/document/7952155) |
| uPIT-BLSTM | Multitalker Speech Separation With Utterance-Level PIT | 9.8 | 92.7 | [🔗](https://github.com/JusperLee/UtterancePIT-Speech-Separation) | [📄](https://ieeexplore.ieee.org/abstract/document/7979557) |
| PIT | Permutation invariant training of deep models | - | 92.7 | - | [📄](https://ieeexplore.ieee.org/abstract/document/7952154) |

### 🏁 2016 (2 models)

| Model | Paper | SI-SNRi (WSJ0) | Params (M) | Code | Paper |
|-------|-------|----------------|------------|------|-------|
| DPCL | Deep clustering: Discriminative embeddings | 10.8 | - | [🔗](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation) | [📄](https://ieeexplore.ieee.org/abstract/document/7471631) |
| DPCL | Single-Channel Multi-Speaker Separation using Deep Clustering | - | - | - | [📄](https://arxiv.org/pdf/1607.02173) |

## 🎬 Multi-Modal Speech Separation

### Audio-Visual Speech Separation

- **Looking to listen at the cocktail party: a speaker-independent audio-visual model for speech separation** | [Paper](https://arxiv.org/pdf/1804.03619.pdf) | [Code](https://github.com/JusperLee/Looking-to-Listen-at-the-Cocktail-Party)
- **The conversation: deep audio-visual speech enhancement** | [Paper](https://arxiv.org/pdf/1804.04121.pdf) | [Code](https://github.com/JusperLee/The-Conversation-Deep-Audio-visual-Speech-Enhancement)
- **Audio-visual speech separation and dereverberation with a two-stage multimodal network** | [Paper](https://ieeexplore.ieee.org/abstract/document/8902632/) | [Code](https://github.com/JusperLee/Audio-visual-speech-separation-and-dereverberation)

### Audio-Text Speech Separation

- **VoiceFilter: Targeted Voice Separation by Speaker-Conditioned Spectrogram Masking** | [Paper](https://arxiv.org/pdf/1810.04826.pdf) | [Code](https://github.com/JusperLee/VoiceFilter)
- **SpEx: Multi-Scale Time Domain Speaker Extraction Network** | [Paper](https://arxiv.org/pdf/2004.08326.pdf) | [Code](https://github.com/JusperLee/SpEx)

## 📏 Evaluation Metrics

### Signal-to-Noise Ratio Improvement (SI-SNRi)
**Definition**: Measures the improvement in signal-to-noise ratio after separation.

```
SI-SNRi = SI-SNR(separated) - SI-SNR(mixture)
```

### Signal-to-Distortion Ratio Improvement (SDRi)
**Definition**: Measures the improvement in signal-to-distortion ratio.

```
SDRi = SDR(separated) - SDR(mixture)
```

### Scale-Invariant Signal-to-Noise Ratio (SI-SNR)
**Definition**: Scale-invariant version of SNR that is robust to scaling differences.

```
SI-SNR = 10 * log10(||s_target||² / ||e_noise||²)
```

## 📚 Datasets

### WSJ0-2Mix 📊
- **Description**: 2-speaker mixtures from WSJ0 corpus
- **Training**: 20,000 utterances (30 hours)
- **Validation**: 5,000 utterances (7.5 hours)
- **Test**: 3,000 utterances (4.5 hours)
- **Sampling Rate**: 8 kHz / 16 kHz
- **Dataset Size**: ~330GB (full dataset)
- **License**: Requires WSJ0 license from LDC
- **Generation Method**: 
  - Install: `pip install pywsj0-mix`
  - Generate: Use `generate_wsjmix.py` script
  - GitHub: [pywsj0-mix](https://github.com/asteroid-team/pywsj0-mix)
- **Requirements**: Original WSJ0 dataset from LDC
- **Extensions**: Can be extended to 3, 4, or 5 speakers

### WHAM! 🔊
- **Description**: WSJ0-2Mix with real noise from WHAM dataset
- **Noise**: Real-world environmental noise
- **Challenge**: Noise robustness
- **Dataset Size**: 17GB (noise dataset)
- **Download Links**:
  - Noise Dataset: [WHAM Noise](https://wham.whisper.ai/)
  - Generation Scripts: Available on official website
- **Generation Method**:
  - Download WHAM noise dataset (17GB)
  - Requires WSJ0 dataset access
  - Use provided generation scripts
- **Audio Format**: 32-bit float WAV, 16 kHz
- **Splits**: Training/Validation/Test sets

### LibriMix 📚
- **Description**: 2 and 3-speaker mixtures from LibriSpeech
- **Languages**: English
- **Sampling Rate**: 16 kHz / 8 kHz
- **Challenge**: Clean speech separation
- **Dataset Size**: 
  - Libri2Mix: ~430GB
  - Libri3Mix: ~332GB
  - Additional: 80GB (LibriSpeech + WHAM noise)
- **License**: Open-source
- **Generation Method**:
  - GitHub: [LibriMix](https://github.com/JorisCos/LibriMix)
  - Script: `generate_librimix.sh`
  - Requirements: SoX installation
- **Customization Options**:
  - Speakers: 2 or 3
  - Sample rate: 16kHz or 8kHz
  - Mixture modes: min/max
  - Types: mix_clean, mix_both, mix_single
- **Alternative**: SparseLibriMix (sparse version)

### WHAMR! 🌊
- **Description**: WHAM! with reverberation
- **Challenge**: Noise + reverberation robustness
- **Base Dataset**: WHAM! + artificial reverberation
- **Download Links**:
  - Official: [WHAMR Website](https://wham.whisper.ai/)
  - Generation scripts available
- **Requirements**: 
  - WSJ0 dataset access
  - WHAM noise dataset
- **Audio Processing**: Adds artificial reverberation to WHAM!
- **Applications**: More realistic acoustic scenarios

### LRS2-2Mix 👁️‍🗨️
- **Description**: 2-speaker mixtures from LRS2 dataset
- **Modality**: Audio-visual
- **Challenge**: Visual information integration
- **Base Dataset**: LRS2 (Lip Reading Sentences 2)
- **License**: BBC copyright, non-commercial research only
- **Download**: 
  - Hugging Face: [LRS2-2Mix](https://huggingface.co/datasets/JorisCos/LRS2-2Mix)
  - Requires LRS2 dataset access
- **Features**: 
  - Varying SNR mixtures
  - Real-world reverberation and noise
  - Closer to realistic scenarios
- **SNR Range**: Variable signal-to-noise ratios

### SonicSet 🎵
- **Description**: Large-scale audio separation dataset
- **Sources**: Multiple audio sources
- **Challenge**: Universal audio separation
- **Dataset Size**: 
  - Training: 377GB
  - Validation/Test: Smaller subsets
- **Construction**: 
  - Base: SonicSim simulation
  - Audio: LibriSpeech, FSD50K, Free Music Archive
  - Scenes: Matterport3D environments
- **Download Options**:
  - Pre-constructed: OneDrive, Baidu Disk
  - GitHub: [SonicSet](https://github.com/JusperLee/SonicSim)
  - Generation: Use provided scripts
- **Features**: 
  - Moving sound sources
  - Realistic 3D acoustic simulation
  - Benchmark for universal separation
- **Related**: FUSS dataset (Free Universal Sound Separation)

## 🎥 Video Tutorial

- **Speech Separation Overview** | [YouTube](https://www.youtube.com/watch?v=example)
- **Deep Learning for Audio** | [Bilibili](https://www.bilibili.com/video/example)

---

## 📊 Citation

If you find this repository useful, please consider citing:

```bibtex
@misc{speech-separation-tutorial,
  title={Speech Separation Paper Tutorial},
  author={JusperLee and Contributors},
  year={2025},
  howpublished={\url{https://github.com/JusperLee/Speech-Separation-Paper-Tutorial}}
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>⭐ Star this repository if you find it helpful! ⭐</strong>
</div>
