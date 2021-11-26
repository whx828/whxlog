---
title: Beginning STM32 Developing with FreeRTOS, libopencm3 and GCC的学习笔记
---

- [FreeRTOS](https://freertos.org/)
  - Developed in partnership with the world’s leading chip companies over a 15-year period, and now downloaded every 170 seconds, FreeRTOS is a market-leading real-time operating system (RTOS) for microcontrollers and small microprocessors. Distributed freely under the MIT open source license, FreeRTOS includes a kernel and a growing set of IoT libraries suitable for use across all industry sectors. FreeRTOS is built with an emphasis on reliability and ease of use.
  - FreeRTOS 是与世界领先的芯片公司合作开发的，历时 15 年，现在每 170 秒下载一次，FreeRTOS 是市场领先的微控制器和小型微处理器实时操作系统。在 MIT 的开源许可下自由发布，FreeRTOS 包括一个内核和一系列适合所有行业使用的物联网库。FreeRTOS 强调可靠性和易用性。
  - FreeRTOS 提供了抢占式多任务，它在配置的任务之间自动分享 CPU 时间。然而，独立的任务确实为它们之间的安全互动增加了一些责任。这就是为什么 FreeRTOS 还提供了消息队列、信号灯、互斥等等来安全管理。
- [libopencm3](http://libopencm3.org/)
  - The libopencm3 project (previously known as libopenstm32) aims to create a free/libre/open-source (LGPL v3, or later) firmware library for various ARM Cortex-M3 microcontrollers, including ST STM32, Toshiba TX03, Atmel SAM3U, NXP LPC1000, EFM32 and others.
  - Libopencm3 项目(以前称为 libopenstm32)旨在为各种 ARM Cortex-M3 微控制器(包括 ST STM32、东芝 TX03、 atsammel 3u、 NXP LPC1000、 EFM32 等)创建一个免费/libre/开放源码(LGPL v3 或更高版本)固件库。
  - libopencm3 不仅为外设寄存器地址定义了内存地址，而且还为需要的特殊常数定义了宏。最后，该库包括经过测试的 C 函数，用于与硬件外设资源进行交互。
