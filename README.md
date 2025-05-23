# Awesome Speech Separation 🗣️➡️👤+👤

A curated list of research papers, implementations, and resources for speech separation. This repository aims to provide a comprehensive overview of recent advancements in the field, helping researchers and practitioners stay updated.

## 📜 Table of Contents

- [🚀 Introduction](#-introduction)
- [🧩 Method Taxonomy](#-method-taxonomy)
- [📚 Categorized Paper List](#-categorized-paper-list)
  - [🏗️ By Network Architecture](#️-by-network-architecture)
  - [💡 By Core Separation Mechanism / Model Type](#-by-core-separation-mechanism--model-type)
  - [🌀 By Learning & Generation Strategy](#-by-learning--generation-strategy)
  - [🗣️ By Speaker Handling](#️-by-speaker-handling)
- [🌟 Highlights](#-highlights)
- [🤝 How to Contribute](#-how-to-contribute)
- [📝 Citation](#-citation)
- [📄 License](#-license)

## 🚀 Introduction

Speech separation, also known as source separation in audio, is the task of isolating individual speech signals from a mixture containing multiple speakers or interfering sounds. This is crucial for enhancing speech intelligibility and usability in various applications, such as:
- Automatic Speech Recognition (ASR) in noisy or multi-talker environments.
- Hearing aids and assistive listening devices.
- Teleconferencing systems and voice communication.
- Speaker diarization and recognition.
- Music information retrieval and audio editing.

Key challenges include handling highly overlapped speech, varying numbers of speakers, background noise, reverberation, and achieving low-latency processing for real-time applications. Recent research has heavily focused on deep learning techniques to address these challenges.

## 🧩 Method Taxonomy

The papers in this survey are organized based on several key characteristics of the proposed speech separation methods. This multi-faceted categorization aims to help researchers find relevant work based on their specific interests. The main categories include:

-   **Network Architecture:** Groups papers by the primary neural network architecture employed, such as U-Net, Conv-TasNet, or Dual-Path structures.
-   **Core Separation Mechanism / Model Type:** Focuses on the fundamental type of model used for separation, for instance, whether it's Attention-Based, CNN-Based, RNN-Based, or leverages State-Space Models.
-   **Learning & Generation Strategy:** Distinguishes papers based on how they learn and whether they generate outputs. This includes subsections for Generative Models (like Diffusion and GAN-based approaches) and specific Learning Paradigms (e.g., Permutation Invariant Training, Clustering-based, Unsupervised).
-   **Speaker Handling:** Highlights methods designed for scenarios where speaker information is unknown or the number of speakers is variable (Speaker-Agnostic).

A single paper may appear under multiple categories if it fits several criteria (e.g., a Dual-Path model that is also Attention-Based and uses PIT).

## 📚 Categorized Paper List

### 🏗️ By Network Architecture

#### U-Net Based Models
- **EDSep**: *EDSep: An Effective Diffusion-Based Method for Speech Source Separation*, 2025. [Paper](https://arxiv.org/pdf/2501.15965) Code: N/A
- **Fast-GeCo**: *Noise-robust Speech Separation with Fast Generative Correction*, 2024. [Paper](https://arxiv.org/pdf/2406.07461) [Code](https://github.com/WangHelin1997/Fast-GeCo)
- **SepDiff**: *Sepdiff: Speech separation based on denoising diffusion mode*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095979) Code: N/A
- **S4M**: *A Neural State-Space Model Approach to Efficient Speech Separation*, 2023. [Paper](https://arxiv.org/pdf/2305.16932) [Code](https://github.com/JusperLee/S4M)
- **Diff-Refiner**: *Diffusion-based signal refiner for speech separation*, 2023. [Paper](https://arxiv.org/pdf/2305.05857) Code: N/A
- **TDANet**: *An efficient encoder-decoder architecture with top-down attention for speech separation*, 2022. [Paper](https://arxiv.org/pdf/2209.15200) [Code](https://github.com/JusperLee/TDANet)
- **A-FRCNN**: *Speech Separation Using an Asynchronous Fully Recurrent Convolutional Neural Network*, 2021. [Paper](https://proceedings.neurips.cc/paper_files/paper/2021/file/be1bc7997695495f756312886f566110-Paper.pdf) [Code](https://github.com/JusperLee/AFRCNN-For-Speech-Separation)
- **MSGT-TasNet**: *Multi-Scale Group Transformer for Long Sequence Modeling in Speech Separation*, 2021. [Paper](https://www.ijcai.org/proceedings/2020/0450.pdf) Code: N/A
- **Sudo RM -RF**: *Sudo RM -RF: Efficient Networks for Universal Audio Source Separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9231900) [Code](https://github.com/etzinis/sudo_rm_rf)
- **Deep CASA**: *Divide and Conquer: A Deep CASA Approach to Talker-Independent Monaural Speaker Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8834838) [Code](https://github.com/yuzhou-git/deep-casa)
- **Chimera++ sign**: *Deep Learning Based Phase Reconstruction for Speaker Separation: A Trigonometric Perspective*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8683231) Code: N/A
- **Wave-UNet**: *Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation*, 2018. [Paper](https://arxiv.org/pdf/1806.03185) [Code](https://github.com/f90/Wave-U-Net)

#### Conv-TasNet Based Models
- **Conv-TasNet GAN**: *Exploring GANs With Conv-TasNet: Adversarial Training for Speech Separation*, 2024. [Paper](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ohiou1714137508806109&disposition=inline) Code: N/A
- **CodecSS**: *Speech Separation using Neural Audio Codecs with Embedding Loss*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10848753) Code: N/A
- **TCodecSS**: *Towards Audio Codec-based Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2406.12434) Code: N/A
- **MossFormer2**: *MossFormer2: Combining Transformer and RNN-Free Recurrent Network for Enhanced Time-Domain Monaural Speech Separation*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10445985) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **DiffSep**: *Diffusion-Based Generative Speech Source Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095310) [Code](https://github.com/fakufaku/diffusion-separation)
- **MossFormer**: *MossFormer: Pushing the Performance Limit of Monaural Speech Separation Using Gated Single-Head Transformer with Convolution-Augmented Joint Self-Attentions*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096646) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **MTDS**: *Efficient Monaural Speech Separation with Multiscale Time-Delay Sampling*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746882) Code: N/A
- **QDPN**: *QDPN - Quasi-dual-path Network for single-channel Speech Separation*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/rixen22_interspeech.pdf) Code: N/A
- **Unknow-SS**: *single channel voice separation for unknown number of speakers under reverberant and noisy settings*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413627) Code: N/A
- **WaveSplit**: *Wavesplit: End-to-End Speech Separation by Speaker Clustering*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9495162) [Code](https://github.com/asdlei99/WaveSplit-pytorch-incomplete)
- **TS-MixIT**: *Teacher-Student MixIT for Unsupervised and Semi-supervised Speech Separation*, 2021. [Paper](https://arxiv.org/pdf/2106.07843) Code: N/A
- **Conv-TasSAN**: *Conv-TasSAN: Separative Adversarial Network based on Conv-TasNet*, 2020. [Paper](https://www.isca-archive.org/interspeech_2020/deng20b_interspeech.pdf) Code: N/A
- **Two-Step CTN**: *Two-Step Sound Source Separation: Training On Learned Latent Targets*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054172) [Code](https://github.com/etzinis/two_step_mask_learning)
- **MixIT**: *Unsupervised Sound Separation Using Mixture Invariant Training*, 2020. [Paper](https://proceedings.neurips.cc/paper_files/paper/2020/file/28538c394c36e4d5ea8ff5ad60562a93-Paper.pdf) [Code](https://github.com/google-research/sound-separation)
- **FurcaNeXt**: *FurcaNeXt: End-to-End Monaural Speech Separation with Dynamic Gated Dilated Temporal Convolutional Networks*, 2020. [Paper](https://link.springer.com/chapter/10.1007/978-3-030-37731-1_53) [Code](https://github.com/ShiZiqiang/furcanext-samples)
- **ConvTasNet**: *Conv-TasNet: Surpassing Ideal Time–Frequency Magnitude Masking for Speech Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8707065) [Code](https://github.com/JusperLee/Conv-TasNet)
- **OR-PIT**: *Recursive speech separation for unknown number of speakers*, 2019. [Paper](https://arxiv.org/pdf/1904.03065) [Code](https://github.com/tky823/DNN-based_source_separation)
- **SSGAN-PIT**: *Permutation Invariant Training of Generative Adversarial Network for Monaural Speech Separation*, 2018. [Paper](https://www.isca-archive.org/interspeech_2018/chen18i_interspeech.pdf) Code: N/A
- **ADAN**: *Speaker-Independent Speech Separation With Deep Attractor Network*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8264702) [Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwili6iLyNSMAxUShq8BHZnXFSoQFnoECBsQAQ&url=https%3A%2F%2Fgithub.com%2Fnaplab%2FDANet&usg=AOvVaw3KziucfYdKvm1o4ucrOKQ1&opi=89978449)
- **TaSNet**: *Deep Attractor Network for Single-Microphone Speaker Separation, Single-Channel Speech Separation"*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462116) [Code](https://github.com/kaituoxu/TasNet)
- **Chimera++ Network**: *Alternative Objective Functions for Deep Clustering*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462507/) [Code](https://github.com/pseeth/deep-learning-for-practitioners/blob/master/README.md)
- **DANet**: *Deep Attractor Network for Single-Microphone Speaker Separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952155) [Code](https://github.com/naplab/DANet)
- **PIT**: *Permutation invariant training of deep models for speaker-independent multi-talker speech separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952154) Code: N/A
- **DPCL**: *Deep clustering: Discriminative embeddings for segmentation and separation*, 2016. [Paper](https://ieeexplore.ieee.org/abstract/document/7471631) [Code](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation)

#### Dual-Path Based Models
- **ReSepFormer**: *Resource-Efficient Separation Transformer*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446670) [Code](https://github.com/speechbrain/speechbrain/blob/develop/recipes/WSJ0Mix/separation/hparams/resepformer.yaml)
- **SepTDA**: *Boosting Unknown-Number Speaker Separation with Transformer Decoder-Based Attractor*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446032) Code: N/A
- **SPMamba**: *SPMamba: State-space model is all you need in speech separation*, 2024. [Paper](https://arxiv.org/pdf/2404.02063) [Code](https://github.com/JusperLee/SPMamba)
- **pSkiM**: *Predictive Skim: Contrastive Predictive Coding for Low-Latency Online Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10097107) Code: N/A
- **Separate And Diffuse**: *Separate And Diffuse: Using a Pretrained Diffusion Model for Improving Source Separation*, 2023. [Paper](https://arxiv.org/pdf/2301.10752) [Code](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material)
- **TF-GridNet**: *TF-GridNet: Integrating Full- and Sub-Band Modeling for Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10214650) [Code](https://github.com/espnet/espnet)
- **UNSSOR**: *UNSSOR: Unsupervised Neural Speech Separation by Leveraging Over-determined Training Mixtures*, 2023. [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/6b44765c9201730a27f7931afb4d7434-Paper-Conference.pdf) Code: N/A
- **SepEDA**: *Speech Separation for an Unknown Number of Speakers Using Transformers With Encoder-Decoder Attractors*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/chetupalli22_interspeech.pdf) Code: N/A
- **SkiM**: *Skim: Skipping Memory Lstm for Low-Latency Real-Time Continuous Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746372) [Code](https://github.com/espnet/espnet)
- **SFSRNet**: *SFSRNet: Super-resolution for Single-Channel Audio Source Separation*, 2022. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/21372) [Code](https://github.com/arda-num/SFSRNet)
- **TFPSNet**: *TFPSNet: Time-Frequency Domain Path Scanning Network for Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9747554) Code: N/A
- **Sandglasset**: *Sandglasset: A Light Multi-Granularity Self-Attentive Network for Time-Domain Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413837) [Code](https://github.com/Zhongyang-debug/Sandglasset-A-Light-Multi-Granularity-Self-Attentive-Network-For-Time-Domain-Speech-Separation)
- **SepFormer**: *Attention Is All You Need In Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413901) [Code](https://github.com/speechbrain/speechbrain/tree/develop/recipes/WSJ0Mix)
- **Multi-Decoder Dprnn**: *Multi-Decoder Dprnn: Source Separation for Variable Number of Speakers*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9414205) [Code](https://junzhejosephzhu.github.io/Multi-Decoder-DPRNN/)
- **DPTCN-ATPP**: *DPTCN-ATPP: Multi-scale End-to-end Modeling for Single-channel Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9645957) Code: N/A
- **DPTNet**: *Dual-Path Transformer Network: Direct Context-Aware Modeling for End-to-End Monaural Speech Separation*, 2020. [Paper](https://arxiv.org/pdf/2007.13975) [Code](https://github.com/ujscjj/DPTNet)
- **DPRNN**: *Dual-path RNN: efficient long sequence modeling for time-domain single-channel speech separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054266) [Code](https://github.com/JusperLee/Dual-Path-RNN-Pytorch)
- **VSUNOS**: *Voice Separation with an Unknown Number of Multiple Speakers*, 2020. [Paper](https://proceedings.mlr.press/v119/nachmani20a/nachmani20a.pdf) [Code](https://github.com/facebookresearch/svoice)

#### Other Arch Based Models
- **TIGER**: *TIGER: Time-frequency Interleaved Gain Extraction and Reconstruction for Efficient Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2410.01469) [Code](https://github.com/JusperLee/TIGER)
- **DIP**: *Speech Separation With Pretrained Frontend to Minimize Domain Mismatch*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10640238) Code: N/A
- **HuBERT**: *Cocktail Hubert: Generalized Self-Supervised Pre-Training for Mixture and Single-Source Speech*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096630) Code: N/A
- **CycleGAN-SS**: *Cycle GAN-Based Audio Source Separation Using Time–Frequency Masking*, 2023. [Paper](https://link.springer.com/article/10.1007/s00034-022-02178-1) Code: N/A
- **PGSS**: *PGSS: Pitch-Guided Speech Separation*, 2023. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26542) Code: N/A
- **SSL-SS**: *Investigating Self-Supervised Learning for Speech Enhancement and Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746303) Code: N/A
- **VAE**: *Unsupervised Blind Source Separation with Variational Auto-Encoders*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9616154) [Code](https://github.com/jundsp/VAE-BSS)
- **CDGAN**: *Generative adversarial networks for single channel separation of convolutive mixed speech signals*, 2021. [Paper](https://www.sciencedirect.com/science/article/pii/S0925231221000734) Code: N/A
- **CBLDNN-GAT**: *CBLDNN-Based Speaker-Independent Speech Separation Via Generative Adversarial Training*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462505) Code: N/A
- **SSGAN**: *Generative Adversarial Source Separation*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8461671) Code: N/A
- **uPIT-BLSTM**: *Multitalker Speech Separation With Utterance-Level Permutation Invariant Training of Deep Recurrent Neural Networks*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7979557) [Code](https://github.com/JusperLee/UtterancePIT-Speech-Separation)
- **DPCL**: *Single-Channel Multi-Speaker Separation using Deep Clustering*, 2016. [Paper](https://arxiv.org/pdf/1607.02173) Code: N/A

### 💡 By Core Separation Mechanism / Model Type

#### Attention-Based Models
- **ReSepFormer**: *Resource-Efficient Separation Transformer*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446670) [Code](https://github.com/speechbrain/speechbrain/blob/develop/recipes/WSJ0Mix/separation/hparams/resepformer.yaml)
- **SPMamba**: *SPMamba: State-space model is all you need in speech separation*, 2024. [Paper](https://arxiv.org/pdf/2404.02063) [Code](https://github.com/JusperLee/SPMamba)
- **CodecSS**: *Speech Separation using Neural Audio Codecs with Embedding Loss*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10848753) Code: N/A
- **TCodecSS**: *Towards Audio Codec-based Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2406.12434) Code: N/A
- **HuBERT**: *Cocktail Hubert: Generalized Self-Supervised Pre-Training for Mixture and Single-Source Speech*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096630) Code: N/A
- **Separate And Diffuse**: *Separate And Diffuse: Using a Pretrained Diffusion Model for Improving Source Separation*, 2023. [Paper](https://arxiv.org/pdf/2301.10752) [Code](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material)
- **UNSSOR**: *UNSSOR: Unsupervised Neural Speech Separation by Leveraging Over-determined Training Mixtures*, 2023. [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/6b44765c9201730a27f7931afb4d7434-Paper-Conference.pdf) Code: N/A
- **TDANet**: *An efficient encoder-decoder architecture with top-down attention for speech separation*, 2022. [Paper](https://arxiv.org/pdf/2209.15200) [Code](https://github.com/JusperLee/TDANet)
- **SFSRNet**: *SFSRNet: Super-resolution for Single-Channel Audio Source Separation*, 2022. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/21372) [Code](https://github.com/arda-num/SFSRNet)
- **TFPSNet**: *TFPSNet: Time-Frequency Domain Path Scanning Network for Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9747554) Code: N/A
- **SepFormer**: *Attention Is All You Need In Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413901) [Code](https://github.com/speechbrain/speechbrain/tree/develop/recipes/WSJ0Mix)
- **MSGT-TasNet**: *Multi-Scale Group Transformer for Long Sequence Modeling in Speech Separation*, 2021. [Paper](https://www.ijcai.org/proceedings/2020/0450.pdf) Code: N/A

#### CNN-Based Models
- **EDSep**: *EDSep: An Effective Diffusion-Based Method for Speech Source Separation*, 2025. [Paper](https://arxiv.org/pdf/2501.15965) Code: N/A
- **Conv-TasNet GAN**: *Exploring GANs With Conv-TasNet: Adversarial Training for Speech Separation*, 2024. [Paper](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ohiou1714137508806109&disposition=inline) Code: N/A
- **Fast-GeCo**: *Noise-robust Speech Separation with Fast Generative Correction*, 2024. [Paper](https://arxiv.org/pdf/2406.07461) [Code](https://github.com/WangHelin1997/Fast-GeCo)
- **SepDiff**: *Sepdiff: Speech separation based on denoising diffusion mode*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095979) Code: N/A
- **DiffSep**: *Diffusion-Based Generative Speech Source Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095310) [Code](https://github.com/fakufaku/diffusion-separation)
- **Unknow-SS**: *single channel voice separation for unknown number of speakers under reverberant and noisy settings*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413627) Code: N/A
- **TS-MixIT**: *Teacher-Student MixIT for Unsupervised and Semi-supervised Speech Separation*, 2021. [Paper](https://arxiv.org/pdf/2106.07843) Code: N/A
- **DPTCN-ATPP**: *DPTCN-ATPP: Multi-scale End-to-end Modeling for Single-channel Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9645957) Code: N/A
- **Conv-TasSAN**: *Conv-TasSAN: Separative Adversarial Network based on Conv-TasNet*, 2020. [Paper](https://www.isca-archive.org/interspeech_2020/deng20b_interspeech.pdf) Code: N/A
- **Two-Step CTN**: *Two-Step Sound Source Separation: Training On Learned Latent Targets*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054172) [Code](https://github.com/etzinis/two_step_mask_learning)
- **Sudo RM -RF**: *Sudo RM -RF: Efficient Networks for Universal Audio Source Separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9231900) [Code](https://github.com/etzinis/sudo_rm_rf)
- **MixIT**: *Unsupervised Sound Separation Using Mixture Invariant Training*, 2020. [Paper](https://proceedings.neurips.cc/paper_files/paper/2020/file/28538c394c36e4d5ea8ff5ad60562a93-Paper.pdf) [Code](https://github.com/google-research/sound-separation)
- **FurcaNeXt**: *FurcaNeXt: End-to-End Monaural Speech Separation with Dynamic Gated Dilated Temporal Convolutional Networks*, 2020. [Paper](https://link.springer.com/chapter/10.1007/978-3-030-37731-1_53) [Code](https://github.com/ShiZiqiang/furcanext-samples)
- **Deep CASA**: *Divide and Conquer: A Deep CASA Approach to Talker-Independent Monaural Speaker Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8834838) [Code](https://github.com/yuzhou-git/deep-casa)
- **ConvTasNet**: *Conv-TasNet: Surpassing Ideal Time–Frequency Magnitude Masking for Speech Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8707065) [Code](https://github.com/JusperLee/Conv-TasNet)
- **Wave-UNet**: *Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation*, 2018. [Paper](https://arxiv.org/pdf/1806.03185) [Code](https://github.com/f90/Wave-U-Net)

#### RNN-Based Models
- **pSkiM**: *Predictive Skim: Contrastive Predictive Coding for Low-Latency Online Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10097107) Code: N/A
- **SSL-SS**: *Investigating Self-Supervised Learning for Speech Enhancement and Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746303) Code: N/A
- **SkiM**: *Skim: Skipping Memory Lstm for Low-Latency Real-Time Continuous Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746372) [Code](https://github.com/espnet/espnet)
- **MTDS**: *Efficient Monaural Speech Separation with Multiscale Time-Delay Sampling*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746882) Code: N/A
- **CDGAN**: *Generative adversarial networks for single channel separation of convolutive mixed speech signals*, 2021. [Paper](https://www.sciencedirect.com/science/article/pii/S0925231221000734) Code: N/A
- **WaveSplit**: *Wavesplit: End-to-End Speech Separation by Speaker Clustering*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9495162) [Code](https://github.com/asdlei99/WaveSplit-pytorch-incomplete)
- **Multi-Decoder Dprnn**: *Multi-Decoder Dprnn: Source Separation for Variable Number of Speakers*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9414205) [Code](https://junzhejosephzhu.github.io/Multi-Decoder-DPRNN/)
- **DPRNN**: *Dual-path RNN: efficient long sequence modeling for time-domain single-channel speech separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054266) [Code](https://github.com/JusperLee/Dual-Path-RNN-Pytorch)
- **VSUNOS**: *Voice Separation with an Unknown Number of Multiple Speakers*, 2020. [Paper](https://proceedings.mlr.press/v119/nachmani20a/nachmani20a.pdf) [Code](https://github.com/facebookresearch/svoice)
- **OR-PIT**: *Recursive speech separation for unknown number of speakers*, 2019. [Paper](https://arxiv.org/pdf/1904.03065) [Code](https://github.com/tky823/DNN-based_source_separation)
- **SSGAN-PIT**: *Permutation Invariant Training of Generative Adversarial Network for Monaural Speech Separation*, 2018. [Paper](https://www.isca-archive.org/interspeech_2018/chen18i_interspeech.pdf) Code: N/A
- **CBLDNN-GAT**: *CBLDNN-Based Speaker-Independent Speech Separation Via Generative Adversarial Training*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462505) Code: N/A
- **ADAN**: *Speaker-Independent Speech Separation With Deep Attractor Network*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8264702) [Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwili6iLyNSMAxUShq8BHZnXFSoQFnoECBsQAQ&url=https%3A%2F%2Fgithub.com%2Fnaplab%2FDANet&usg=AOvVaw3KziucfYdKvm1o4ucrOKQ1&opi=89978449)
- **TaSNet**: *Deep Attractor Network for Single-Microphone Speaker Separation, Single-Channel Speech Separation"*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462116) [Code](https://github.com/kaituoxu/TasNet)
- **Chimera++ Network**: *Alternative Objective Functions for Deep Clustering*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462507/) [Code](https://github.com/pseeth/deep-learning-for-practitioners/blob/master/README.md)
- **DANet**: *Deep Attractor Network for Single-Microphone Speaker Separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952155) [Code](https://github.com/naplab/DANet)
- **uPIT-BLSTM**: *Multitalker Speech Separation With Utterance-Level Permutation Invariant Training of Deep Recurrent Neural Networks*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7979557) [Code](https://github.com/JusperLee/UtterancePIT-Speech-Separation)
- **PIT**: *Permutation invariant training of deep models for speaker-independent multi-talker speech separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952154) Code: N/A
- **DPCL**: *Deep clustering: Discriminative embeddings for segmentation and separation*, 2016. [Paper](https://ieeexplore.ieee.org/abstract/document/7471631) [Code](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation)
- **DPCL**: *Single-Channel Multi-Speaker Separation using Deep Clustering*, 2016. [Paper](https://arxiv.org/pdf/1607.02173) Code: N/A

#### Mixed-Based Models
- **SepTDA**: *Boosting Unknown-Number Speaker Separation with Transformer Decoder-Based Attractor*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446032) Code: N/A
- **DIP**: *Speech Separation With Pretrained Frontend to Minimize Domain Mismatch*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10640238) Code: N/A
- **TIGER**: *TIGER: Time-frequency Interleaved Gain Extraction and Reconstruction for Efficient Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2410.01469) [Code](https://github.com/JusperLee/TIGER)
- **MossFormer2**: *MossFormer2: Combining Transformer and RNN-Free Recurrent Network for Enhanced Time-Domain Monaural Speech Separation*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10445985) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **S4M**: *A Neural State-Space Model Approach to Efficient Speech Separation*, 2023. [Paper](https://arxiv.org/pdf/2305.16932) [Code](https://github.com/JusperLee/S4M)
- **PGSS**: *PGSS: Pitch-Guided Speech Separation*, 2023. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26542) Code: N/A
- **TF-GridNet**: *TF-GridNet: Integrating Full- and Sub-Band Modeling for Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10214650) [Code](https://github.com/espnet/espnet)
- **MossFormer**: *MossFormer: Pushing the Performance Limit of Monaural Speech Separation Using Gated Single-Head Transformer with Convolution-Augmented Joint Self-Attentions*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096646) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **SepEDA**: *Speech Separation for an Unknown Number of Speakers Using Transformers With Encoder-Decoder Attractors*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/chetupalli22_interspeech.pdf) Code: N/A
- **QDPN**: *QDPN - Quasi-dual-path Network for single-channel Speech Separation*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/rixen22_interspeech.pdf) Code: N/A
- **A-FRCNN**: *Speech Separation Using an Asynchronous Fully Recurrent Convolutional Neural Network*, 2021. [Paper](https://proceedings.neurips.cc/paper_files/paper/2021/file/be1bc7997695495f756312886f566110-Paper.pdf) [Code](https://github.com/JusperLee/AFRCNN-For-Speech-Separation)
- **Sandglasset**: *Sandglasset: A Light Multi-Granularity Self-Attentive Network for Time-Domain Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413837) [Code](https://github.com/Zhongyang-debug/Sandglasset-A-Light-Multi-Granularity-Self-Attentive-Network-For-Time-Domain-Speech-Separation)
- **DPTNet**: *Dual-Path Transformer Network: Direct Context-Aware Modeling for End-to-End Monaural Speech Separation*, 2020. [Paper](https://arxiv.org/pdf/2007.13975) [Code](https://github.com/ujscjj/DPTNet)
- **Chimera++ sign**: *Deep Learning Based Phase Reconstruction for Speaker Separation: A Trigonometric Perspective*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8683231) Code: N/A

#### State-Space Model Models
- **SPMamba**: *SPMamba: State-space model is all you need in speech separation*, 2024. [Paper](https://arxiv.org/pdf/2404.02063) [Code](https://github.com/JusperLee/SPMamba)
- **S4M**: *A Neural State-Space Model Approach to Efficient Speech Separation*, 2023. [Paper](https://arxiv.org/pdf/2305.16932) [Code](https://github.com/JusperLee/S4M)

#### Other Method Models
- **Diff-Refiner**: *Diffusion-based signal refiner for speech separation*, 2023. [Paper](https://arxiv.org/pdf/2305.05857) Code: N/A
- **CycleGAN-SS**: *Cycle GAN-Based Audio Source Separation Using Time–Frequency Masking*, 2023. [Paper](https://link.springer.com/article/10.1007/s00034-022-02178-1) Code: N/A
- **VAE**: *Unsupervised Blind Source Separation with Variational Auto-Encoders*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9616154) [Code](https://github.com/jundsp/VAE-BSS)
- **SSGAN**: *Generative Adversarial Source Separation*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8461671) Code: N/A

### 🌀 By Learning & Generation Strategy

#### Generative Models

##### Diffusion Models
- **EDSep**: *EDSep: An Effective Diffusion-Based Method for Speech Source Separation*, 2025. [Paper](https://arxiv.org/pdf/2501.15965) Code: N/A
- **Fast-GeCo**: *Noise-robust Speech Separation with Fast Generative Correction*, 2024. [Paper](https://arxiv.org/pdf/2406.07461) [Code](https://github.com/WangHelin1997/Fast-GeCo)
- **SepDiff**: *Sepdiff: Speech separation based on denoising diffusion mode*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095979) Code: N/A
- **Diff-Refiner**: *Diffusion-based signal refiner for speech separation*, 2023. [Paper](https://arxiv.org/pdf/2305.05857) Code: N/A
- **Separate And Diffuse**: *Separate And Diffuse: Using a Pretrained Diffusion Model for Improving Source Separation*, 2023. [Paper](https://arxiv.org/pdf/2301.10752) [Code](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material)
- **DiffSep**: *Diffusion-Based Generative Speech Source Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095310) [Code](https://github.com/fakufaku/diffusion-separation)

##### GAN-based Models
- **Conv-TasNet GAN**: *Exploring GANs With Conv-TasNet: Adversarial Training for Speech Separation*, 2024. [Paper](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ohiou1714137508806109&disposition=inline) Code: N/A
- **CycleGAN-SS**: *Cycle GAN-Based Audio Source Separation Using Time–Frequency Masking*, 2023. [Paper](https://link.springer.com/article/10.1007/s00034-022-02178-1) Code: N/A
- **CDGAN**: *Generative adversarial networks for single channel separation of convolutive mixed speech signals*, 2021. [Paper](https://www.sciencedirect.com/science/article/pii/S0925231221000734) Code: N/A
- **Conv-TasSAN**: *Conv-TasSAN: Separative Adversarial Network based on Conv-TasNet*, 2020. [Paper](https://www.isca-archive.org/interspeech_2020/deng20b_interspeech.pdf) Code: N/A
- **SSGAN-PIT**: *Permutation Invariant Training of Generative Adversarial Network for Monaural Speech Separation*, 2018. [Paper](https://www.isca-archive.org/interspeech_2018/chen18i_interspeech.pdf) Code: N/A
- **SSGAN**: *Generative Adversarial Source Separation*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8461671) Code: N/A

##### Other Generative Models
- **PGSS**: *PGSS: Pitch-Guided Speech Separation*, 2023. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26542) Code: N/A

#### Learning Paradigms

##### PIT-based Methods
- **EDSep**: *EDSep: An Effective Diffusion-Based Method for Speech Source Separation*, 2025. [Paper](https://arxiv.org/pdf/2501.15965) Code: N/A
- **ReSepFormer**: *Resource-Efficient Separation Transformer*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446670) [Code](https://github.com/speechbrain/speechbrain/blob/develop/recipes/WSJ0Mix/separation/hparams/resepformer.yaml)
- **Conv-TasNet GAN**: *Exploring GANs With Conv-TasNet: Adversarial Training for Speech Separation*, 2024. [Paper](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=ohiou1714137508806109&disposition=inline) Code: N/A
- **SepTDA**: *Boosting Unknown-Number Speaker Separation with Transformer Decoder-Based Attractor*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446032) Code: N/A
- **SPMamba**: *SPMamba: State-space model is all you need in speech separation*, 2024. [Paper](https://arxiv.org/pdf/2404.02063) [Code](https://github.com/JusperLee/SPMamba)
- **Fast-GeCo**: *Noise-robust Speech Separation with Fast Generative Correction*, 2024. [Paper](https://arxiv.org/pdf/2406.07461) [Code](https://github.com/WangHelin1997/Fast-GeCo)
- **DIP**: *Speech Separation With Pretrained Frontend to Minimize Domain Mismatch*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10640238) Code: N/A
- **TIGER**: *TIGER: Time-frequency Interleaved Gain Extraction and Reconstruction for Efficient Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2410.01469) [Code](https://github.com/JusperLee/TIGER)
- **CodecSS**: *Speech Separation using Neural Audio Codecs with Embedding Loss*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10848753) Code: N/A
- **TCodecSS**: *Towards Audio Codec-based Speech Separation*, 2024. [Paper](https://arxiv.org/pdf/2406.12434) Code: N/A
- **MossFormer2**: *MossFormer2: Combining Transformer and RNN-Free Recurrent Network for Enhanced Time-Domain Monaural Speech Separation*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10445985) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **SepDiff**: *Sepdiff: Speech separation based on denoising diffusion mode*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095979) Code: N/A
- **S4M**: *A Neural State-Space Model Approach to Efficient Speech Separation*, 2023. [Paper](https://arxiv.org/pdf/2305.16932) [Code](https://github.com/JusperLee/S4M)
- **HuBERT**: *Cocktail Hubert: Generalized Self-Supervised Pre-Training for Mixture and Single-Source Speech*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096630) Code: N/A
- **Diff-Refiner**: *Diffusion-based signal refiner for speech separation*, 2023. [Paper](https://arxiv.org/pdf/2305.05857) Code: N/A
- **CycleGAN-SS**: *Cycle GAN-Based Audio Source Separation Using Time–Frequency Masking*, 2023. [Paper](https://link.springer.com/article/10.1007/s00034-022-02178-1) Code: N/A
- **pSkiM**: *Predictive Skim: Contrastive Predictive Coding for Low-Latency Online Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10097107) Code: N/A
- **PGSS**: *PGSS: Pitch-Guided Speech Separation*, 2023. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/26542) Code: N/A
- **Separate And Diffuse**: *Separate And Diffuse: Using a Pretrained Diffusion Model for Improving Source Separation*, 2023. [Paper](https://arxiv.org/pdf/2301.10752) [Code](https://openreview.net/attachment?id=UXALv0lJZS&name=supplementary_material)
- **DiffSep**: *Diffusion-Based Generative Speech Source Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10095310) [Code](https://github.com/fakufaku/diffusion-separation)
- **TF-GridNet**: *TF-GridNet: Integrating Full- and Sub-Band Modeling for Speech Separation*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10214650) [Code](https://github.com/espnet/espnet)
- **MossFormer**: *MossFormer: Pushing the Performance Limit of Monaural Speech Separation Using Gated Single-Head Transformer with Convolution-Augmented Joint Self-Attentions*, 2023. [Paper](https://ieeexplore.ieee.org/abstract/document/10096646) [Code](https://github.com/modelscope/ClearerVoice-Studio)
- **SepEDA**: *Speech Separation for an Unknown Number of Speakers Using Transformers With Encoder-Decoder Attractors*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/chetupalli22_interspeech.pdf) Code: N/A
- **SSL-SS**: *Investigating Self-Supervised Learning for Speech Enhancement and Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746303) Code: N/A
- **SkiM**: *Skim: Skipping Memory Lstm for Low-Latency Real-Time Continuous Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746372) [Code](https://github.com/espnet/espnet)
- **TDANet**: *An efficient encoder-decoder architecture with top-down attention for speech separation*, 2022. [Paper](https://arxiv.org/pdf/2209.15200) [Code](https://github.com/JusperLee/TDANet)
- **MTDS**: *Efficient Monaural Speech Separation with Multiscale Time-Delay Sampling*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9746882) Code: N/A
- **QDPN**: *QDPN - Quasi-dual-path Network for single-channel Speech Separation*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/rixen22_interspeech.pdf) Code: N/A
- **SFSRNet**: *SFSRNet: Super-resolution for Single-Channel Audio Source Separation*, 2022. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/21372) [Code](https://github.com/arda-num/SFSRNet)
- **TFPSNet**: *TFPSNet: Time-Frequency Domain Path Scanning Network for Speech Separation*, 2022. [Paper](https://ieeexplore.ieee.org/abstract/document/9747554) Code: N/A
- **Unknow-SS**: *single channel voice separation for unknown number of speakers under reverberant and noisy settings*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413627) Code: N/A
- **A-FRCNN**: *Speech Separation Using an Asynchronous Fully Recurrent Convolutional Neural Network*, 2021. [Paper](https://proceedings.neurips.cc/paper_files/paper/2021/file/be1bc7997695495f756312886f566110-Paper.pdf) [Code](https://github.com/JusperLee/AFRCNN-For-Speech-Separation)
- **Sandglasset**: *Sandglasset: A Light Multi-Granularity Self-Attentive Network for Time-Domain Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413837) [Code](https://github.com/Zhongyang-debug/Sandglasset-A-Light-Multi-Granularity-Self-Attentive-Network-For-Time-Domain-Speech-Separation)
- **CDGAN**: *Generative adversarial networks for single channel separation of convolutive mixed speech signals*, 2021. [Paper](https://www.sciencedirect.com/science/article/pii/S0925231221000734) Code: N/A
- **SepFormer**: *Attention Is All You Need In Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413901) [Code](https://github.com/speechbrain/speechbrain/tree/develop/recipes/WSJ0Mix)
- **MSGT-TasNet**: *Multi-Scale Group Transformer for Long Sequence Modeling in Speech Separation*, 2021. [Paper](https://www.ijcai.org/proceedings/2020/0450.pdf) Code: N/A
- **Multi-Decoder Dprnn**: *Multi-Decoder Dprnn: Source Separation for Variable Number of Speakers*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9414205) [Code](https://junzhejosephzhu.github.io/Multi-Decoder-DPRNN/)
- **DPTCN-ATPP**: *DPTCN-ATPP: Multi-scale End-to-end Modeling for Single-channel Speech Separation*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9645957) Code: N/A
- **DPTNet**: *Dual-Path Transformer Network: Direct Context-Aware Modeling for End-to-End Monaural Speech Separation*, 2020. [Paper](https://arxiv.org/pdf/2007.13975) [Code](https://github.com/ujscjj/DPTNet)
- **Conv-TasSAN**: *Conv-TasSAN: Separative Adversarial Network based on Conv-TasNet*, 2020. [Paper](https://www.isca-archive.org/interspeech_2020/deng20b_interspeech.pdf) Code: N/A
- **DPRNN**: *Dual-path RNN: efficient long sequence modeling for time-domain single-channel speech separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054266) [Code](https://github.com/JusperLee/Dual-Path-RNN-Pytorch)
- **VSUNOS**: *Voice Separation with an Unknown Number of Multiple Speakers*, 2020. [Paper](https://proceedings.mlr.press/v119/nachmani20a/nachmani20a.pdf) [Code](https://github.com/facebookresearch/svoice)
- **Two-Step CTN**: *Two-Step Sound Source Separation: Training On Learned Latent Targets*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9054172) [Code](https://github.com/etzinis/two_step_mask_learning)
- **Sudo RM -RF**: *Sudo RM -RF: Efficient Networks for Universal Audio Source Separation*, 2020. [Paper](https://ieeexplore.ieee.org/abstract/document/9231900) [Code](https://github.com/etzinis/sudo_rm_rf)
- **FurcaNeXt**: *FurcaNeXt: End-to-End Monaural Speech Separation with Dynamic Gated Dilated Temporal Convolutional Networks*, 2020. [Paper](https://link.springer.com/chapter/10.1007/978-3-030-37731-1_53) [Code](https://github.com/ShiZiqiang/furcanext-samples)
- **Deep CASA**: *Divide and Conquer: A Deep CASA Approach to Talker-Independent Monaural Speaker Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8834838) [Code](https://github.com/yuzhou-git/deep-casa)
- **ConvTasNet**: *Conv-TasNet: Surpassing Ideal Time–Frequency Magnitude Masking for Speech Separation*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8707065) [Code](https://github.com/JusperLee/Conv-TasNet)
- **OR-PIT**: *Recursive speech separation for unknown number of speakers*, 2019. [Paper](https://arxiv.org/pdf/1904.03065) [Code](https://github.com/tky823/DNN-based_source_separation)
- **SSGAN-PIT**: *Permutation Invariant Training of Generative Adversarial Network for Monaural Speech Separation*, 2018. [Paper](https://www.isca-archive.org/interspeech_2018/chen18i_interspeech.pdf) Code: N/A
- **CBLDNN-GAT**: *CBLDNN-Based Speaker-Independent Speech Separation Via Generative Adversarial Training*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462505) Code: N/A
- **TaSNet**: *Deep Attractor Network for Single-Microphone Speaker Separation, Single-Channel Speech Separation"*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462116) [Code](https://github.com/kaituoxu/TasNet)
- **Wave-UNet**: *Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation*, 2018. [Paper](https://arxiv.org/pdf/1806.03185) [Code](https://github.com/f90/Wave-U-Net)
- **SSGAN**: *Generative Adversarial Source Separation*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8461671) Code: N/A
- **uPIT-BLSTM**: *Multitalker Speech Separation With Utterance-Level Permutation Invariant Training of Deep Recurrent Neural Networks*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7979557) [Code](https://github.com/JusperLee/UtterancePIT-Speech-Separation)
- **PIT**: *Permutation invariant training of deep models for speaker-independent multi-talker speech separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952154) Code: N/A

##### Clustering-based Methods
- **WaveSplit**: *Wavesplit: End-to-End Speech Separation by Speaker Clustering*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9495162) [Code](https://github.com/asdlei99/WaveSplit-pytorch-incomplete)
- **Chimera++ sign**: *Deep Learning Based Phase Reconstruction for Speaker Separation: A Trigonometric Perspective*, 2019. [Paper](https://ieeexplore.ieee.org/abstract/document/8683231) Code: N/A
- **ADAN**: *Speaker-Independent Speech Separation With Deep Attractor Network*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8264702) [Code](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwili6iLyNSMAxUShq8BHZnXFSoQFnoECBsQAQ&url=https%3A%2F%2Fgithub.com%2Fnaplab%2FDANet&usg=AOvVaw3KziucfYdKvm1o4ucrOKQ1&opi=89978449)
- **Chimera++ Network**: *Alternative Objective Functions for Deep Clustering*, 2018. [Paper](https://ieeexplore.ieee.org/abstract/document/8462507/) [Code](https://github.com/pseeth/deep-learning-for-practitioners/blob/master/README.md)
- **DANet**: *Deep Attractor Network for Single-Microphone Speaker Separation*, 2017. [Paper](https://ieeexplore.ieee.org/abstract/document/7952155) [Code](https://github.com/naplab/DANet)
- **DPCL**: *Deep clustering: Discriminative embeddings for segmentation and separation*, 2016. [Paper](https://ieeexplore.ieee.org/abstract/document/7471631) [Code](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation)
- **DPCL**: *Single-Channel Multi-Speaker Separation using Deep Clustering*, 2016. [Paper](https://arxiv.org/pdf/1607.02173) Code: N/A

##### Unsupervised Methods
- **UNSSOR**: *UNSSOR: Unsupervised Neural Speech Separation by Leveraging Over-determined Training Mixtures*, 2023. [Paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/6b44765c9201730a27f7931afb4d7434-Paper-Conference.pdf) Code: N/A
- **VAE**: *Unsupervised Blind Source Separation with Variational Auto-Encoders*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9616154) [Code](https://github.com/jundsp/VAE-BSS)
- **TS-MixIT**: *Teacher-Student MixIT for Unsupervised and Semi-supervised Speech Separation*, 2021. [Paper](https://arxiv.org/pdf/2106.07843) Code: N/A
- **MixIT**: *Unsupervised Sound Separation Using Mixture Invariant Training*, 2020. [Paper](https://proceedings.neurips.cc/paper_files/paper/2020/file/28538c394c36e4d5ea8ff5ad60562a93-Paper.pdf) [Code](https://github.com/google-research/sound-separation)

No specific learning paradigm models found in these sub-categories.

### 🗣️ By Speaker Handling

#### Speaker-Agnostic / Unknown Number of Speakers Methods
- **SepTDA**: *Boosting Unknown-Number Speaker Separation with Transformer Decoder-Based Attractor*, 2024. [Paper](https://ieeexplore.ieee.org/abstract/document/10446032) Code: N/A
- **SepEDA**: *Speech Separation for an Unknown Number of Speakers Using Transformers With Encoder-Decoder Attractors*, 2022. [Paper](https://www.isca-archive.org/interspeech_2022/chetupalli22_interspeech.pdf) Code: N/A
- **Unknow-SS**: *single channel voice separation for unknown number of speakers under reverberant and noisy settings*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9413627) Code: N/A
- **VAE**: *Unsupervised Blind Source Separation with Variational Auto-Encoders*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9616154) [Code](https://github.com/jundsp/VAE-BSS)
- **Multi-Decoder Dprnn**: *Multi-Decoder Dprnn: Source Separation for Variable Number of Speakers*, 2021. [Paper](https://ieeexplore.ieee.org/abstract/document/9414205) [Code](https://junzhejosephzhu.github.io/Multi-Decoder-DPRNN/)
- **VSUNOS**: *Voice Separation with an Unknown Number of Multiple Speakers*, 2020. [Paper](https://proceedings.mlr.press/v119/nachmani20a/nachmani20a.pdf) [Code](https://github.com/facebookresearch/svoice)
- **OR-PIT**: *Recursive speech separation for unknown number of speakers*, 2019. [Paper](https://arxiv.org/pdf/1904.03065) [Code](https://github.com/tky823/DNN-based_source_separation)

## 🌟 Highlights

This survey includes a diverse range of speech separation techniques. Some notable highlights and trends include:

-   **Dominance of Deep Learning:** The field is heavily driven by various deep neural network architectures.
-   **End-to-End Time-Domain Methods:** Models like **Conv-TasNet** and its variants (e.g., **MossFormer**, **QDPN**) operating directly on waveforms continue to be influential.
-   **Dual-Path Architectures:** Networks such as **DPRNN**, **SepFormer**, **ReSepFormer**, and **TF-GridNet** demonstrate strong performance for modeling long sequences by alternating local and global processing.
-   **Attention Mechanisms:** Transformer-based models and other attention mechanisms (e.g., **SepFormer**, **SPMamba**) are widely adopted for capturing complex dependencies.
-   **Rise of Generative Models:**
    -   **Diffusion Models** (e.g., **EDSep**, **SepDiff**, **Fast-GeCo**) are an emerging and promising direction, showing competitive results by iteratively refining separated signals.
    -   **GAN-based approaches** (e.g., **Conv-TasNet GAN**, **SSGAN-PIT**) are explored for potentially improving perceptual quality.
-   **Speaker-Agnostic Solutions:** Significant research (e.g., **SepTDA**, **SepEDA**, **VSUNOS**) focuses on separating speech when the number of speakers is unknown or variable.
-   **Novel Sequence Models:** Exploration of **State-Space Models** (e.g., **SPMamba**, **S4M**) offers alternatives to traditional RNNs and Transformers.
-   **Open Source Contributions:** Many researchers provide public code (see links in the paper lists), fostering reproducibility and further innovation. Models from **SpeechBrain** and researchers like **JusperLee** are notable examples.

## 🤝 How to Contribute


We welcome contributions from the community to help make this repository more comprehensive and up-to-date! Whether you are a researcher, practitioner, or enthusiast, you can contribute in the following ways:

### 📥 Add New Papers

If you come across a relevant paper that is missing from this list:

* Ensure it is **related to speech separation**, especially recent work or impactful methods.
* Make sure to include: title, authors, year, paper link (preferably arXiv/IEEE/ACL/AAAI/etc.), and code link (if available).
* Add it to the appropriate category in the markdown file and submit a pull request (PR).

### 🛠 Improve Categorization

Some methods may span multiple categories (e.g., architecture + model type). You can:

* Suggest reclassification.
* Help clarify descriptions.
* Point out missing tags or incorrect placements.

### 📊 Enhance Metadata

We aim to make the list more useful by adding metadata such as:

* Dataset used.
* Evaluation metrics reported (e.g., SI-SNR, SDR, PESQ).
* Training settings or challenges addressed (e.g., reverberation, low-latency).
  If you want to enrich any entry, feel free to send a PR or open an issue.

### 🧪 Add Demos or Benchmarks

If you have interactive demos, benchmark results, or reproducible notebooks for any of the listed papers, let us know or contribute them to a separate section.

### ✨ Suggest Improvements

General suggestions on formatting, structure, or other speech-related resources (e.g., tutorials, toolkits, blog posts) are welcome via:

* [GitHub Issues](https://github.com/[YourGitHubUsername]/[YourRepoName]/issues)
* Pull Requests with improvements

### 📜 Contributor Guidelines

Before submitting a PR:

1. Make sure your changes follow the current markdown style and indentation.
2. Verify all links (paper/code) are active and correct.
3. Add your name to the contributors section (if available).

## 📝 Citation

If you use this survey in your research, please consider citing the repository:

```bibtex
@misc{AwesomeSpeechSeparationSurveyYOUR_GITHUB_USERNAME_YEAR,
  author    = {Community Contributors and [Your GitHub Username/Organization Name]},
  title     = {Awesome Speech Separation: A Curated List of Research},
  year      = {2024}, # Or the current year of the version you are citing
  publisher = {GitHub},
  journal   = {GitHub repository},
  howpublished = {\url{https://github.com/[YourGitHubUsername]/[YourRepoName]}} % Replace with actual URL
}
```
Please replace `[YourGitHubUsername]/[YourRepoName]` and update other placeholders as appropriate.

## 📄 License

This work is licensed under the [MIT License](LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
