# A must-read paper and tutorial list for speech separation based on neural networks

This repository contains papers for pure speech separation and multimodal speech separation.

By Kai Li (if you have any suggestions, please contact me! Email: tsinghua.kaili@gmail.com).

Tip: For speech separation beginners, I recommend you to read "deep clustering" & "PIT&uPIT" works which will help understand the problem.

If you have found the code for some of the articles below, welcome to add links.

:bangbang: New board: New papers are introduced every week ! [Weekly_Report.md](https://github.com/JusperLee/Speech-Separation-Paper-Tutorial/blob/add_week_reading/Weekly_Report.md)

# Pure Speech Separation

:heavy_check_mark: [Joint Optimization of Masks and Deep Recurrent Neural Networks for Monaural Source Separation, Po-Sen Huang, TASLP 2015] [[Paper]](https://arxiv.org/pdf/1502.04149) [[Code (posenhuang)]](https://github.com/posenhuang/deeplearningsourceseparation)

:heavy_check_mark: [Complex Ratio Masking for Monaural Speech Separation, DS Williamson, TASLP 2015] [[Paper]](https://ieeexplore.ieee.org/abstract/document/7364200/)

:heavy_check_mark: [Deep clustering: Discriminative embeddings for segmentation and separation, JR Hershey,  ICASSP 2016] [[Paper]](https://arxiv.org/abs/1508.04306) [[Code (Kai Li)]](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation) [[Code (funcwj)]](https://github.com/funcwj/deep-clustering) [[Code (asteroid)]](https://github.com/mpariente/asteroid/blob/master/egs/wsj0-mix/DeepClustering)

:heavy_check_mark: [Single-channel multi-speaker separation using deep clustering, Y Isik, Interspeech 2016] [[Paper]](https://arxiv.org/pdf/1607.02173) [[Code (Kai Li)]](https://github.com/JusperLee/Deep-Clustering-for-Speech-Separation) [[Code (funcwj)]](https://github.com/funcwj/deep-clustering)

:heavy_check_mark: [Permutation invariant training of deep models for speaker-independent multi-talker speech separation, Dong Yu, ICASSP 2017] [[Paper]](https://arxiv.org/pdf/1607.00325) [[Code (Kai Li)]](https://github.com/JusperLee/UtterancePIT-Speech-Separation)

:heavy_check_mark: [Recognizing Multi-talker Speech with Permutation Invariant Training, Dong Yu, ICASSP 2017] [[Paper]](https://arxiv.org/pdf/1704.01985)

:heavy_check_mark: [Multitalker speech separation with utterance-level permutation invariant training of deep recurrent neural networks, M Kolbæk, TASLP 2017] [[Paper]](https://arxiv.org/pdf/1703.06284) [[Code (Kai Li)]](https://github.com/JusperLee/UtterancePIT-Speech-Separation)

:heavy_check_mark: [Deep attractor network for single-microphone speaker separation, Zhuo Chen, ICASSP 2017] [[Paper]](https://arxiv.org/abs/1611.08930) [[Code (Kai Li)]](https://github.com/JusperLee/DANet-For-Speech-Separation)

:heavy_check_mark: [A consolidated perspective on multi-microphone speech enhancement and source separation, Sharon Gannot, TASLP 2017] [[Paper]](https://ieeexplore.ieee.org/document/7805139)

:heavy_check_mark: [Alternative Objective Functions for Deep Clustering, Zhong-Qiu Wang, ICASSP 2018] [[Paper]](http://www.merl.com/publications/docs/TR2018-005.pdf)

:heavy_check_mark: [End-to-End Speech Separation with Unfolded Iterative Phase Reconstruction Zhong-Qiu Wang et al. 2018] [[Paper]](https://arxiv.org/pdf/1804.10204.pdf)

:heavy_check_mark: [Speaker-independent Speech Separation with Deep Attractor Network, Luo Yi, TASLP 2018] [[Paper]](https://arxiv.org/pdf/1707.03634) [[Code (Kai Li)]](https://github.com/JusperLee/DANet-For-Speech-Separation)

:heavy_check_mark: [Tasnet: time-domain audio separation network for real-time, single-channel speech separation, Luo Yi, ICASSP 2018] [[Paper]](https://arxiv.org/pdf/1711.00541) [[Code (Kai Li)]](https://github.com/JusperLee/Conv-TasNet) [[Code (asteroid)]](https://github.com/mpariente/asteroid/blob/master/egs/whamr/TasNet)

:heavy_check_mark: [Supervised Speech Separation Based on Deep Learning An Overview, DeLiang Wang, Arxiv 2018] [[Paper]](https://arxiv.org/ftp/arxiv/papers/1708/1708.07524.pdf) 

:heavy_check_mark: [An Overview of Lead and Accompaniment Separation in Music, Zafar Raﬁ, TASLP 2018] [[Paper]](https://arxiv.org/pdf/1804.08300) 

:heavy_check_mark: [Conv-TasNet: Surpassing Ideal Time-Frequency Magnitude Masking for Speech Separation, Luo Yi, TASLP 2019] [[Paper]](https://ieeexplore.ieee.org/iel7/6570655/6633080/08707065.pdf) [[Code (Kai Li)]](https://github.com/JusperLee/Conv-TasNet) [[Code (asteroid)]](https://github.com/mpariente/asteroid/blob/master/egs/wham/ConvTasNet)

:heavy_check_mark: [Divide and Conquer: A Deep CASA Approach to Talker-independent Monaural Speaker Separation, Yuzhou Liu, TASLP 2019] [[Paper]](https://arxiv.org/pdf/1904.11148) [[Code]](https://github.com/yuzhou-git/deep-casa)

:heavy_check_mark: [Dual-path RNN: efficient long sequence modeling for time-domain single-channel speech separation, Luo Yi, Arxiv 2019] [[Paper]](https://arxiv.org/pdf/1910.06379) [[Code (Kai Li)]](https://github.com/JusperLee/Dual-Path-RNN-Pytorch)

:heavy_check_mark: [End-to-end Microphone Permutation and Number Invariant Multi-channel Speech Separation, Luo Yi, Arxiv 2019] [[Paper]](https://arxiv.org/pdf/1910.14104) [[Code]](https://github.com/yluo42/TAC)

:heavy_check_mark: [FaSNet: Low-latency Adaptive Beamforming for Multi-microphone Audio Processing, Yi Luo , Arxiv 2019] [[Paper]](https://arxiv.org/abs/1909.13387)

:heavy_check_mark: [A comprehensive study of speech separation: spectrogram vs waveform separation, Fahimeh Bahmaninezhad, Interspeech 2019] [[Paper]](https://arxiv.org/pdf/1905.07497)

:heavy_check_mark: [Discriminative Learning for Monaural Speech Separation Using Deep Embedding Features, Cunhang Fan, Interspeech 2019] [[Paper]](https://www.isca-speech.org/archive/Interspeech_2019/pdfs/1940.pdf)

:heavy_check_mark: [FaSNet: Low-latency Adaptive Beamforming for Multi-microphone Audio Processing, Yi Luo, Arxiv 2019] [[Paper]](https://arxiv.org/abs/1909.13387)

:heavy_check_mark: [Interrupted and cascaded permutation invariant training for speech separation, Gene-Ping Yang, ICASSP, 2020][[Paper]](https://arxiv.org/abs/1910.12706)

:heavy_check_mark: [FurcaNeXt: End-to-end monaural speech separation with dynamic gated dilated temporal convolutional networks, Liwen Zhang, MMM 2020] [[Paper]](https://arxiv.org/pdf/1902.04891)

:heavy_check_mark: [Filterbank design for end-to-end speech separation, Manuel Pariente et al., ICASSP 2020] [[Paper]](https://128.84.21.199/abs/1910.10400)

:heavy_check_mark: [Voice Separation with an Unknown Number of Multiple Speakers, Eliya Nachmani, Arxiv 2020] [[Paper]](https://arxiv.org/pdf/2003.01531.pdf) [[Demo]](https://enk100.github.io/speaker_separation/)

:heavy_check_mark: [AN EMPIRICAL STUDY OF CONV-TASNET, Berkan Kadıoglu , Arxiv 2020] [[Paper]](https://arxiv.org/pdf/2002.08688.pdf) [[Code]](https://github.com/JusperLee/Deep-Encoder-Decoder-Conv-TasNet)

:heavy_check_mark: [Voice Separation with an Unknown Number of Multiple Speakers, Eliya Nachmani, Arxiv 2020] [[Paper]](https://arxiv.org/pdf/2003.01531.pdf)

:heavy_check_mark: [Wavesplit: End-to-End Speech Separation by Speaker Clustering, Neil Zeghidour et al. Arxiv 2020 ] [[Paper]](https://arxiv.org/abs/2002.08933)

:heavy_check_mark: [La Furca: Iterative Context-Aware End-to-End Monaural Speech Separation Based on Dual-Path Deep Parallel Inter-Intra Bi-LSTM with Attention, Ziqiang Shi, Arxiv 2020] [[Paper]](https://arxiv.org/pdf/2001.08998.pdf)

:heavy_check_mark: [Enhancing End-to-End Multi-channel Speech Separation via Spatial Feature Learning, Rongzhi Gu, Arxiv 2020] [[Paper]](https://arxiv.org/abs/2003.03927)

:heavy_check_mark: [Deep Attention Fusion Feature for Speech Separation with End-to-End Post-ﬁlter Method, Cunhang Fan, Arxiv 2020] [[Paper]](https://arxiv.org/abs/2003.07544)

:heavy_check_mark: [Enhancing End-to-End Multi-channel Speech Separation via Spatial Feature Learning, Rongzhi Guo, ICASSP 2020] [[Paper]](https://arxiv.org/pdf/2003.03927.pdf)

:heavy_check_mark: [A Multi-Phase Gammatone Filterbank for Speech Separation Via Tasnet, David Ditter, ICASSP 2020] [[Paper]](https://ieeexplore.ieee.org/abstract/document/9053602) [[Code]](https://github.com/sp-uhh/mp-gtf)

:heavy_check_mark: [Lightweight U-Net Based Monaural Speech Source Separation for Edge Computing Device, Kwang Myung Jeon, ICCE 2020] [[Paper]](https://ieeexplore.ieee.org/abstract/document/9043051)

:heavy_check_mark: [LibriMix: An Open-Source Dataset for Generalizable Speech Separation, Joris Cosentino, Arxiv 2020] [[Paper]](https://arxiv.org/pdf/2005.11262) [[Code]](https://github.com/JorisCos/LibriMix)

:heavy_check_mark: [An End-to-end Architecture of Online Multi-channel Speech Separation, Jian Wu, Interspeech 2020] [[Paper]](https://arxiv.org/pdf/2009.03141.pdf)

:heavy_check_mark: [SAGRNN: Self-Attentive Gated RNN for Binaural Speaker Separation with Interaural Cue Preservation, Ke Tan, IEEE Signal Processing Letters] [[Paper]](https://arxiv.org/pdf/2009.01381.pdf)

:heavy_check_mark: [A convolutional recurrent neural network with attention framework for speech separation in monaural recordings, Chao Sun, Scientific Reports] [[Paper]](https://www.nature.com/articles/s41598-020-80713-3)

:heavy_check_mark: [Unsupervised Sound Separation Using Mixture Invariant Training, Scott Wisdom, NeurIPS 2020] [[Paper]](https://arxiv.org/pdf/2006.12701)

:heavy_check_mark: [Causal Deep CASA for Monaural Talker-Independent Speaker Separation, Yuzhou Liu, TASLP 2019] [[Paper]](https://ieeexplore.ieee.org/abstract/document/9136887/)

:heavy_check_mark: [Sparse, Efficient, and Semantic Mixture Invariant Training: Taming In-the-Wild Unsupervised Sound Separation, Scott Wisdom, Arxiv 2021] [[Paper]](https://arxiv.org/abs/2106.00847)

:heavy_check_mark: [Tune-In: Training Under Negative Environments with Interference for Attention Networks Simulating Cocktail Party Effect, Jun Wang, Arxiv 2021] [[Paper]](https://arxiv.org/abs/2103.01461)

:heavy_check_mark: [Speech Separation Using an Asynchronous Fully Recurrent Convolutional Neural Network, Kai Li, NeuralPS 2021] [[Paper]](https://openreview.net/pdf?id=SlxH2AbBBC2) [[Code]](https://github.com/JusperLee/AFRCNN-For-Speech-Separation)

--------------

# Multi-Model Speech Separation

:heavy_check_mark: [Audio-Visual Speech Enhancement Using Multimodal Deep Convolutional Neural Networks, Jen-Cheng Hou, TETCI 2017] [[Paper]](https://arxiv.org/pdf/1703.10893) [[Code]](https://github.com/avivga/audio-visual-speech-enhancement)

:heavy_check_mark: [The Conversation: Deep Audio-Visual Speech Enhancement, Triantafyllos Afouras, Interspeech 2018] [[Paper]](https://arxiv.org/pdf/1804.04121)

:heavy_check_mark: [End-to-end audiovisual speech recognition, Stavros Petridis, ICASSP 2018] [[Paper]](https://arxiv.org/pdf/1802.06424) [[Code]](https://github.com/mpc001/end-to-end-lipreading)

:heavy_check_mark: [The Sound of Pixels, Hang Zhao, ECCV 2018] [[Paper]](http://openaccess.thecvf.com/content_ECCV_2018/papers/Hang_Zhao_The_Sound_of_ECCV_2018_paper.pdf) [[Code]](https://github.com/hangzhaomit/Sound-of-Pixels)

:heavy_check_mark: [Looking to Listen at the Cocktail Party: A Speaker-Independent Audio-Visual Model for Speech Separation, ARIEL EPHRAT, ACM Transactions on Graphics 2018] [[Paper]](https://arxiv.org/pdf/1804.03619) [[Code]](https://github.com/JusperLee/Looking-to-Listen-at-the-Cocktail-Party)

:heavy_check_mark: [Learning to Separate Object Sounds by Watching Unlabeled Video, Ruohan Gao, ECCV 2018] [[Paper]](http://openaccess.thecvf.com/content_ECCV_2018/papers/Ruohan_Gao_Learning_to_Separate_ECCV_2018_paper.pdf)

:heavy_check_mark: [Time domain audio visual speech separation, Jian Wu, Arxiv 2019] [[Paper]](https://arxiv.org/pdf/1904.03760)

:heavy_check_mark: [Audio-Visual Speech Separation and Dereverberation with a Two-Stage Multimodal Network, Ke Tan, Arxiv 2019] [[Paper]](https://arxiv.org/pdf/1909.07352)

:heavy_check_mark: [Co-Separating Sounds of Visual Objects, Ruohan Gao, ICCV 2019] [[Paper]](http://openaccess.thecvf.com/content_ICCV_2019/papers/Gao_Co-Separating_Sounds_of_Visual_Objects_ICCV_2019_paper.pdf) [[Code]](https://github.com/rhgao/co-separation)

:heavy_check_mark: [AudioVisual Deep Clustering for Speech Separation, Rui Lu, TASLP 2019] [[Paper]](https://ieeexplore.ieee.org/document/8762221)

:heavy_check_mark: [Multi-modal Multi-channel Target Speech Separation, Rongzhi Guo, J-STSP 2020] [[Paper]](https://arxiv.org/pdf/2003.07032.pdf)

:heavy_check_mark: [An Overview of Deep-Learning-Based Audio-Visual Speech Enhancement and Separation, Daniel Michelsanti, Arxiv 2020] [[Paper]](https://arxiv.org/abs/2008.09586)

:heavy_check_mark: [Deep Audio-Visual Speech Separation with Attention Mechanism, Chenda Li, ICASSP 2020] [[Paper]](https://ieeexplore.ieee.org/document/9054180)

:heavy_check_mark: [Looking into Your Speech: Learning Cross-modal Affinity for Audio-visual Speech Separation, Jiyoung Lee, CVPR 2021] [[Paper]](https://openaccess.thecvf.com/content/CVPR2021/papers/Lee_Looking_Into_Your_Speech_Learning_Cross-Modal_Affinity_for_Audio-Visual_Speech_CVPR_2021_paper.pdf) [[Demo Page]](https://caffnet.github.io/)

:heavy_check_mark: [Audio-Visual Speech Separation Using Cross-Modal Correspondence Loss, Naoki Makishima, ICASSP 2021] [[Paper]](https://arxiv.org/abs/2103.01463)

:heavy_check_mark: [VisualVoice: Audio-Visual Speech Separation with Cross-Modal Consistency, Ruohan Gao, CVPR 2021] [[Paper]](https://openaccess.thecvf.com/content/CVPR2021/papers/Gao_VisualVoice_Audio-Visual_Speech_Separation_With_Cross-Modal_Consistency_CVPR_2021_paper.pdf) [[Demo Page]](http://vision.cs.utexas.edu/projects/VisualVoice/) [[Code]](https://github.com/facebookresearch/VisualVoice)



--------------

# Evaluation index

:heavy_check_mark: [Performance measurement in blind audio sourceseparation, Emmanuel Vincent et al., TASLP 2004] [[Paper]](https://hal.inria.fr/inria-00544230/document)

:heavy_check_mark: [SDR – Half-baked or Well Done?, Jonathan Le Roux, ICASSP 2019] [[Paper]](https://arxiv.org/pdf/1811.02508)

--------------

# Dataset

:heavy_check_mark: [WSJ0] [[Dataset Link]](https://catalog.ldc.upenn.edu/LDC93S6A)

:heavy_check_mark: [WHAM & WHAMR] [[Dataset Link]](http://wham.whisper.ai/)

:heavy_check_mark: [Microsoft DNS Challenge] [[Dataset Link]](https://github.com/microsoft/DNS-Challenge)

:heavy_check_mark: [AVSpeech] [[Dataset Link]](https://looking-to-listen.github.io/avspeech/download.html)

:heavy_check_mark: [LRW] [[Dataset Link]](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/lrw1.html)

:heavy_check_mark: [LRS2] [[Dataset Link]](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/lrs2.html)

:heavy_check_mark: [LRS3] [[Dataset Link]](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/lrs2.html) [[Multi Model Data Processing Script]](https://github.com/JusperLee/LRS3-For-Speech-Separationhttps://github.com/JusperLee/LRS3-For-Speech-Separation)

:heavy_check_mark: [VoxCeleb] [[Dataset Link]](http://www.robots.ox.ac.uk/~vgg/data/voxceleb/)

:heavy_check_mark: [LibriMix] [[Dataset Link]](https://github.com/JorisCos/LibriMix)

:heavy_check_mark: [LibriSS] [[Dataset Link]](https://github.com/yluo42/TAC/blob/master/data/create_dataset.py)

--------------

# Video Tutorial

:heavy_check_mark: [Speech Separation, Hung-yi Lee, 2020] [[Video]](https://www.youtube.com/watch?v=tovg5ZxNgIo&t=8s) [[Slide]](http://speech.ee.ntu.edu.tw/~tlkagk/courses/DLHLP20/SP%20(v3).pdf)

> I may not be able to get all the articles completely. So if you have an excellent essay or tutorial, you can update it in my format. At the same time, if you think the repository meets your needs, please give a star or fork, thank you.
