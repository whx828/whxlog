In this lesson, which is part one of the event-driven architecture section, we will cover concepts like blocking and non-blocking.
在这一课中，也就是事件驱动架构部分的第一部分，我们将介绍阻塞和非阻塞等概念。

When writing modern Web 2.0 applications, chances are you have come across terms like _reactive programming_ and _event-driven architecture_ and concepts like _blocking_ & _non-blocking_.
在编写现代 Web2.0 应用程序时，你有可能遇到过像反应式编程和事件驱动架构这样的术语以及像阻塞和非阻塞这样的概念。

_What are they? Should I be aware of them?_
它们是什么？我应该了解它们吗？

You might have also noticed that tech like _NodeJS_, _Play_, _Tornado_, and _[Akka.io](http://akka.io/)_ are gaining more popularity in the developer circles for modern application development in comparison to traditional tech.
你可能还注意到，与传统技术相比，NodeJS、Play、Tornado 和 Akka.io 等技术在现代应用开发的开发者圈子里越来越受欢迎。

Why is that the reason for that? Is it just that we are bored of working on the traditional tech like _Java_, _PHP_, etc. and are attracted towards the shiny new stuff, or are there technical reasons behind this?
为什么会有这样的原因呢？难道只是因为我们厌倦了在 Java、PHP 等传统技术上的工作，而被闪亮的新东西所吸引，还是这背后有技术原因？

In this lesson, you will go through each and every concept step by step to realize the demands of modern software application development.
在本课中，你将一步一步地了解每一个概念，以实现现代软件应用程序开发的要求。

So, without any further ado, let's get on with it.
所以，不再多说了，让我们继续吧。

Alright, at this point in the course, we know what _persistent connections_ are, what _asynchronous behavior_ is, and why do we need it. We can't really write real-time apps without implementing them.
好了，在课程的这一点上，我们知道什么是持久性连接，什么是异步行为，以及为什么我们需要它。如果不实现这些，我们就无法真正编写实时应用程序。

Let's start with _blocking_. What is it?
让我们从阻塞开始。它是什么？

## What is blocking? [#](https://www.educative.io/courses/web-application-software-architecture-101/N8RZVYO5rpK#What-is-blocking?)
什么是阻塞？

In web applications _blocking_ means the flow of execution is stopped while waiting for a process to complete. Until the process completes it cannot move on. Let's say we have a block of code of ten lines within a function and every line triggers another external function executing a specific task.
在网络应用中，阻塞意味着在等待一个进程完成时，执行的流程被停止。在该进程完成之前，它不能继续前进。假设我们在一个函数内有一个十行的代码块，每一行都会触发另一个外部函数，执行一个特定的任务。

Naturally, when the flow of execution enters the main function it will start executing the code from the top, from the first line. It will run the first line of code and will call the external function.
自然地，当执行流进入主函数时，它将从顶部开始执行代码，从第一行开始。它将运行第一行代码并将调用外部函数。

At this point in time until the external function returns the response, the flow is blocked. The flow won't move further. It just waits for the response, unless we add _asynchronous behavior_ to it by annotating it and moving the task to a separate thread. However, that's not what happens in the regular scenario, like in regular _CRUD-based_ apps. Right?
在这个时间点上，直到外部函数返回响应，流被阻断了。流程不会进一步移动。它只是在等待响应，除非我们通过注解它并将任务移到一个单独的线程中来为它添加异步行为。然而，这并不是在常规情况下发生的，就像在常规的基于 CRUD 的应用程序中。对吗？

So, this behavior is known as _blocking_ because the flow of execution is blocked.
所以，这种行为被称为阻塞，因为执行的流程被阻塞了。

## What is non-blocking? [#](https://www.educative.io/courses/web-application-software-architecture-101/N8RZVYO5rpK#What-is-non-blocking?)
什么是非阻塞？

Now, we have come to the _non-blocking_ approach. In this approach, the flow doesn't wait for the first function that is called to return the response. It just moves on to execute the next lines of code. This approach is a little not-so-consistent as opposed to the blocking approach because a function might not return anything or throw an error. Still, the code in the sequence up next is executed.
现在，我们已经来到了非阻塞的方法。在这种方法中，流程并不等待第一个被调用的函数返回响应。它只是继续前进，执行下一行代码。与阻塞式方法相比，这种方法有点不太一致，因为一个函数可能不返回任何东西或抛出一个错误。不过，接下来的序列中的代码还是会被执行。

The _non-blocking_ approach facilitates _Input-Output (IO)_ intensive operations. Besides the disk and other hardware-based operations, communication and network operations also fall under _IO_ operations.
非阻塞方法有利于 输入-输出（I/O）密集型操作。除了磁盘和其他基于硬件的操作，通信和网络操作也属于 I/O 操作。

We will continue this discussion in part two of the event-driven architecture lesson. You will have an insight into what events are what event-driven architecture is, and the technologies used to implement it.
我们将在事件驱动架构课程的第二部分继续这一讨论。你将深入了解什么是事件，什么是事件驱动架构，以及用来实现它的技术。

---

笔记：

阻塞：在网络应用中，阻塞意味着在等待一个进程完成时，执行的流程被停止，在该进程完成之前，它不能继续运行。
假设我们在一个函数内有一个十行的代码块，每一行都会触发另一个外部函数，执行一个特定的任务。当执行流进入主函数时，它将从顶部开始执行代码，从第一行开始。它将运行第一行代码并将调用外部函数。在这个时间点上，直到外部函数返回响应之前，流是被阻断的，不会进一步移动，它只会等待响应，除非注解它并将任务移到一个单独的线程中来为它添加异步行为。这种行为被称为阻塞，因为执行的流程被阻塞了。

非阻塞：流程并不等待第一个被调用的函数返回响应，它会继续前进，执行下一行代码。
与阻塞式方法相比，这种方法有点不太一致，因为一个函数可能不返回任何东西或抛出一个错误。然而接下来序列中的代码还是会被执行。
非阻塞方法有利于 输入-输出（I/O）密集型操作。除了磁盘和其他基于硬件的操作，通信和网络操作也属于 I/O 操作。
