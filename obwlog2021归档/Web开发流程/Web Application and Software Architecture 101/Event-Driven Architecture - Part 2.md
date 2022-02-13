This lesson contains the second part of the discussion on event-driven architecture. We will continue where we left off in the previous lesson.
本课包含关于事件驱动架构讨论的第二部分。我们将继续我们在上一课中的讨论。

## What are events? [#](https://www.educative.io/courses/web-application-software-architecture-101/gkmnPzLYq5k#What-are-events?)
什么是事件？

There are generally two kinds of processes in applications: _CPU intensive_ and _IO intensive_. In the context of web applications, IO means _events_. A large number of _IO_ operations mean a lot of events occurring over a period of time, and an event can be anything from a tweet to a click of a button, an HTTP request, an ingested message, a change in the value of a variable, etc.
在应用程序中一般有两种进程。CPU 密集型和 IO 密集型。在网络应用的背景下，IO 意味着事件。大量的 IO 操作意味着在一段时间内发生大量的事件，事件可以是任何东西，从一条推特到一个按钮的点击，一个 HTTP 请求，一个摄入的消息，一个变量值的变化，等等。

We know that Web 2.0 real-time applications have a lot of events. For instance, there is a lot of request-response between the client and the server, typically in an online game, messaging app etc. _Events_ happening too often is called a _stream of events_. In the previous chapter, we discussed how stream processing works.
我们知道，Web 2.0 的实时应用有很多事件。例如，在客户端和服务器之间有大量的 请求-响应，通常是在网络游戏、消息应用程序等。事件发生得太频繁被称为事件流。在上一章中，我们讨论了流处理的工作原理。

## Event-driven architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/gkmnPzLYq5k#Event-driven-architecture)
事件驱动的架构

_Non-blocking_ architecture is also known as _reactive_ or _event-driven_ architecture. _Event-driven_ architectures are pretty popular in modern web application development.
非阻塞式架构也被称为反应式或事件驱动式架构。事件驱动架构在现代 Web 应用开发中相当流行。

Technologies like _NodeJS_, frameworks in the _Java_ ecosystem like _Play_, and _ [Akka.io](http://akka.io/) _ are _non-blocking_ in nature and are built for modern high _IO_ scalable applications.
像 NodeJS 这样的技术，Java 生态系统中的框架，如 Play 和 Akka.io，在本质上都是非阻塞的，是为现代高 I/O 可扩展的应用而建立的。

They are capable of handling a big number of concurrent connections with minimal resource consumption. Modern applications need a fully asynchronous model to scale. These modern web frameworks provide more reliable behavior in a distributed environment. They are built to run on a cluster, handle large scale concurrent scenarios, and tackle problems that generally occur in a clustered environment. They enable us to write code without worrying about handling _multi-threads, thread lock, out of memory issues_ due to high _IO_ etc.
它们能够以最小的资源消耗处理大量的并发连接。现代应用程序需要一个完全异步的模型来扩展。这些现代网络框架在分布式环境中提供更可靠的行为。它们是为了在集群上运行，处理大规模的并发场景，并解决通常在集群环境中出现的问题。它们使我们能够编写代码，而不必担心处理多线程、线程锁、高 I/O 导致的内存不足等问题。

Returning to _Event-driven reactive_ architecture. It simply means reacting to the events occurring regularly. The code is written to react to the events as opposed to sequentially moving through the lines of codes.
返回到事件驱动的反应式架构。它只是意味着对定期发生的事件做出反应。编写代码是为了对事件做出反应，而不是按部就班地在代码行中移动。

I've already brought this up, but the sequence of events occurring over a period of time is called a _stream of events_. In order to react to the events, the system has to continually monitor the stream. _Event-driven_ architecture is all about processing _asynchronous data streams_. The application becomes inherently asynchronous.
我已经提过了，在一段时间内发生的事件序列被称为事件流。为了对事件做出反应，系统必须不断地监测事件流。事件驱动架构是关于处理异步数据流的。应用程序实际上已经内在异步了。

![[Event Driven Architecture.png]]

## Technologies for implementing the event driven architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/gkmnPzLYq5k#Technologies-for-implementing-the-event-driven-architecture)
实现事件驱动架构的技术

With the advent of Web 2.0, people in the tech industry felt the need to evolve the technologies to be powerful enough to implement modern web application use cases. _Spring Framework_ added _Spring Reactor_ module to the core _Spring repo_. Developers wrote _NodeJS_, _ [Akka.io](http://akka.io/) _, _Play_ etc.
随着 Web2.0 时代的到来，科技行业的人们感到有必要发展技术，使其足够强大，以实现现代 Web 应用的用例。Spring 框架在核心 Spring repo 中加入了 Spring Reactor 模块。开发人员编写了 NodeJS、Akka.io、Play 等。

So, you would have already figured that _reactive, event-driven_ applications are difficult to implement with thread-based frameworks. As dealing with _threads_, shared _mutable state_, and _locks_ make things a lot more complex, in an _event-driven_ system everything is treated as a _stream_. The level of abstraction is good, developers don't have to worry about managing the low-level memory stuff.
所以，你应该已经猜到了，反应式的、事件驱动的应用程序很难用基于线程的框架来实现。由于处理线程、共享变异状态和锁使事情变得更加复杂，在事件驱动的系统中，一切都被当作流来处理。这种抽象水平是很好的，开发者不必担心管理低级别的内存问题。

I am sure you are well aware of the data streaming use cases that apply here, like handling a large number of transaction events, handling changing stock prices, user events on an online shopping application, etc.
我相信你很清楚这里适用的数据流用例，比如处理大量的交易事件，处理不断变化的股票价格，在线购物应用的用户事件等。

_NodeJS_ is a single-threaded _non-blocking_ framework written to handle more _IO_ intensive tasks. It has an _event loop_ architecture. [This is a good read on it.](https://nodejs.org/fa/docs/guides/event-loop-timers-and-nexttick/)
NodeJS 是一个单线程的非阻塞框架，是为了处理更多的 I/O 密集型任务而编写的。它有一个事件循环架构。这是对它的一个很好的解读。

 [_LinkedIn_ uses the _Play_ framework for identifying the online status of its users.](https://www.8bitmen.com/linkedin-real-time-architecture-how-does-linkedin-identify-its-users-online/)
LinkedIn 使用 Play 框架来识别其用户的在线状态。

At the same time, I want to assert the fact that the emergence of _non-blocking_ tech does not mean that traditional tech is obsolete. Every tech has its use cases.
同时，我想强调的是，非阻塞技术的出现并不意味着传统技术已经过时。每种技术都有其使用情况。

_NodeJS_ is not fit for _CPU intensive_ tasks. _CPU intensive_ operations are operations that require a good amount of computational power like for graphics rendering, running ML algorithms, handling data in enterprise systems etc. It would be a mistake to pick _NodeJS_ for these purposes.
NodeJS 不适合于 CPU 密集型任务。CPU 密集型操作是需要大量计算能力的操作，如图形渲染、运行 ML 算法、处理企业系统的数据等。为这些目的选择 NodeJS 将是一个错误。

In the upcoming lessons, I will discuss the general guidelines to keep in mind when picking the server-side technology. This will give a better insight into how to pick the right backend technology.
在接下来的课程中，我将讨论在选择服务器端技术时需要注意的一般准则。这将使我们更好地了解如何挑选正确的后端技术。

---

笔记：

事件：在应用程序中一般有两种进程：CPU 密集型和 I/O 密集型。在网络应用的背景下，I/O 意味着事件。大量的 I/O 操作意味着在一段时间内发生大量的事件，事件可以是任何东西，从一条推特到一个按钮的点击，一个 HTTP 请求，一个摄入的消息，一个变量值的变化，等等。

非阻塞式架构也被称为反应式或事件驱动式架构。事件驱动式架构在现代 Web 应用开发中相当流行。
事件驱动式架构意味着对定期发生的事件做出反应。编写代码是为了对事件做出反应，而不是按部就班地在代码行中移动。
在一段时间内发生的事件序列被称为事件流。为了对事件做出反应，系统必须不断地监测事件流。事件驱动架构就是处理异步数据流的。
它们能够以最小的资源消耗处理大量的并发连接。现代应用程序需要一个完全异步的模型来扩展。这些现代网络框架在分布式环境中提供更可靠的行为。它们是为了在集群上运行，处理大规模的并发场景，并解决通常在集群环境中出现的问题。它们使我们能够编写代码，而不必担心处理多线程、线程锁、高 I/O 导致的内存不足等问题。

反应式的、事件驱动的应用程序很难用基于线程的框架来实现。由于处理线程、共享变异状态和锁使事情变得更加复杂，在事件驱动的系统中，一切都被当作流来处理，开发者不必担心管理低级别的内存问题。
