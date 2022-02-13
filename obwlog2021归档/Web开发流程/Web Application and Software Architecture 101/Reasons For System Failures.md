In this lesson, we will discuss the common reasons for system failure.
在本课中，我们将讨论系统故障的常见原因。

Before delving into the HA system design, fault-tolerance, and redundancy, we will first discuss the common reasons why systems fail.
在深入研究 HA 系统设计、容错和冗余之前，我们将首先讨论系统失败的常见原因。

## Software crashes [#](https://www.educative.io/courses/web-application-software-architecture-101/gk0wVGGr78l#Software-crashes)

I am sure you are pretty familiar with software crashes. Applications crash all the time, be it on a mobile phone or a desktop.
我相信你对软件崩溃相当熟悉。无论是在手机上还是在桌面上，应用程序都会崩溃。

We also deal with corrupt software files. Remember the BSOD blue screen of death in Windows? OS crashing, memory-hogging unresponsive processes. Likewise, software running on cloud nodes crashes unpredictably and takes down the entire node.
我们还处理过损坏的软件文件。还记得 Windows 中的 BSOD 蓝屏死机吗？操作系统崩溃，占用内存的无反应进程。同样地，在云节点上运行的软件也会不可预测地崩溃，并使整个节点瘫痪。

## Hardware failures [#](https://www.educative.io/courses/web-application-software-architecture-101/gk0wVGGr78l#Hardware-failures)

Another reason for system failure is hardware crashes, including overloaded CPU and RAM, hard disk failures, nodes going down, and network outages.
系统故障的另一个原因是硬件崩溃，包括 CPU 和 RAM 过载、硬盘故障、节点宕机和网络中断。

## Human errors [#](https://www.educative.io/courses/web-application-software-architecture-101/gk0wVGGr78l#Human-errors)

This is the biggest reason for system failures. It includes flawed configurations and what not.
这是系统故障的最大原因。它包括有缺陷的配置什么的。

Google made a tiny network configuration error, and it took down almost half of the internet in Japan. [This is an interesting read](https://thenextweb.com/google/2017/08/28/google-japan-internet-blackout/) .
谷歌犯了一个小小的网络配置错误，导致日本几乎一半的互联网瘫痪。这是一个有趣的阅读。

## Planned downtime [#](https://www.educative.io/courses/web-application-software-architecture-101/gk0wVGGr78l#Planned-downtime)

Besides the unplanned crashes, there are planned down times that involve routine maintenance operations, patching software, hardware upgrades, etc.
除了计划外的崩溃，还有涉及日常维护操作、修补软件、硬件升级等的计划停机时间。

These are the primary reasons for system failures. Now, let's talk about how HA systems are designed to overcome these system downtime scenarios.
这些是系统故障的主要原因。现在，让我们谈谈 HA 系统是如何设计来克服这些系统停机情况的。

---

笔记：

系统故障主要原因：
1. 软件崩溃
无论是在手机上还是在桌面上，应用程序都会崩溃。操作系统崩溃，占用内存的无反应进程；在云节点上运行的软件也会不可预测地崩溃，并使整个节点瘫痪。
2. 硬件崩溃
CPU 和 RAM 过载、硬盘故障、节点宕机和网络中断等。
3. 人类操作因素
包括有缺陷的配置等。
4. 计划停机时间
日常维护操作、修补软件、硬件升级等。
