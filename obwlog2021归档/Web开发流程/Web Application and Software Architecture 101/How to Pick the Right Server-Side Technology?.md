In this lesson, you'll learn how to pick the right server-side technology for our projects.
在本课中，你将学习如何为我们的项目挑选正确的服务器端技术。

Before commencing the lesson, I would like to say that there is no rule of thumb that for a use case _X_ you should always pick a technology _Y_.
在开始上课之前，我想说的是，没有任何经验法则说对于一个用例 X 你应该总是选择一个技术 Y。

Everything depends on our business requirements. Every use case has its unique needs. There is no perfect tech, and everything has its pros and cons. You can be as creative as you want. There is no rule that holds us back.
一切都取决于我们的业务需求。每个用例都有其独特的需求。没有完美的技术，一切都有其优点和缺点。你可以随心所欲地发挥你的创造力。没有任何规则能束缚我们。

Alright, this being said. I have listed some of the general scenarios, or common use cases, in the world of application development and the fitting backend technology for those based on my development experience.
好吧，既然这样说了。我根据我的开发经验，列出了应用程序开发世界中的一些一般场景，或常见的用例，以及适合这些用例的后端技术。

## Real-time data interaction [#](https://www.educative.io/courses/web-application-software-architecture-101/qA9gjEo6P97#Real-time-data-interaction)
实时数据交互

Let's say you are building an app that needs to interact with the backend server in real-time to stream data to and fro. For instance, your app could be a messaging application, a real-time browser-based massive multiplayer game, a real-time collaborative text editor, or an audio-video streaming app like _Spotify_, _Netflix_, etc.
假设你正在构建一个需要与后端服务器实时互动的应用程序，以实现数据流的来往。例如，你的应用程序可能是一个消息传递应用程序，一个基于浏览器的实时大规模多人游戏，一个实时协作的文本编辑器，或者像 Spotify、Netflix 等音频视频流应用程序。

You need a _persistent connection_ between the client and server. You also need _non-blocking_ technology on the backend. We've already talked about both the concepts in detail.
你需要在客户端和服务器之间有一个持久的连接。你还需要在后端使用非阻塞技术。我们已经详细谈论过这两个概念了。

Some of the popular technologies that enable us to write these apps are _NodeJS_ and _Python_, which has a framework called _Tornado_. If you are working in the _Java_ Ecosystem you can look into _Spring Reactor_, _Play_, and [Akka.io](http://akka.io/).
一些使我们能够编写这些应用程序的流行技术是 NodeJS 和 Python，它有一个叫做 Tornado 的框架。如果你是在 Java 生态系统中工作，你可以研究 Spring Reactor、Play 和 Akka.io。

Once you start researching these technologies, go through the architecture concepts given in the developer docs. You'll gain further insights into how things work and what other tech and concepts you can leverage to implement your use case. One thing leads to the other.
一旦你开始研究这些技术，就去看看开发者文档中给出的架构概念。你会进一步了解事情的运作方式，以及你可以利用哪些其他技术和概念来实现你的用例。一件事会导致另一件事。

[Uber used NodeJS to write their core trip execution engine.](https://eng.uber.com/uber-tech-stack-part-two/) Using it they could easily manage a large number of concurrent connections.
Uber 使用 NodeJS 来编写他们的核心行程执行引擎。使用它，他们可以轻松地管理大量的并发连接。

## Peer-to-peer web application [#](https://www.educative.io/courses/web-application-software-architecture-101/qA9gjEo6P97#Peer-to-peer-web-application)
点对点的网络应用

If you intend to build a _peer-to-peer_ web app, for instance, a _P2P_ distributed search engine or a _P2P_ Live TV radio service, something similar to _LiveStation_ by _Microsoft_, look into _JavaScript_ protocols like _DAT_ and _IPFS_. Also, checkout _FreedomJS_, which is a framework for building _P2P_ web apps that work in modern web browsers.
如果你打算建立一个点对点的网络应用，例如，一个 P2P 分布式搜索引擎或一个 P2P 电视直播服务，类似于微软的 LiveStation，可以研究一下 DAT 和 IPFS 等 JavaScript 协议。此外，还可以看看 FreedomJS，它是一个用于构建 P2P 网络应用的框架，可以在现代网络浏览器中运行。

This is a good read [Netflix researching peer-to-peer technology for streaming data.](https://arstechnica.com/information-technology/2014/04/netflix-researching-large-scale-peer-to-peer-technology-for-streaming/)
这是一本研究流媒体数据的点对点技术的好书。

## CRUD-based regular application [#](https://www.educative.io/courses/web-application-software-architecture-101/qA9gjEo6P97#CRUD-based-regular-application)
基于 CRUD 的常规应用

Simple use cases such for regular _CRUD-based_ apps include an online movie booking portal, a tax filing app, etc.
对于基于 CRUD 的常规应用来说，这样的简单用例包括一个在线电影预订门户、一个报税应用，等等。

Today, _CRUD (Create Read Update Delete)_ is the most common form of web apps being built by businesses. Be it an online booking portal, an app collecting user data, or a social site, all have an _Model View Controller (MVC)_ architecture on the backend.
今天，CRUD（创建、读取、更新、删除）是企业正在建立的最常见的网络应用形式。无论是在线预订门户、收集用户数据的应用程序，还是社交网站，在后端都有一个模型视图控制器（MVC）架构。

Although the view part is tweaked a little with the rise of _UI_ frameworks by _React_, _Angular_, _Vue_, etc., the _Model View Controller_ pattern stays.
尽管随着 React、Angular、Vue 等 UI 框架的兴起，视图部分被稍作调整，但模型-视图-控制器模式依然存在。

Some of the popular technologies that help us implement these use cases are _Spring MVC_, _Python Django_, _Ruby on Rails_, _PHP Laravel_, and _ASP .NET MVC_.
一些帮助我们实现这些用例的流行技术是 Spring MVC、Python Django、Ruby on Rails、PHP Laravel 和 ASP .NET MVC。

## Simple, small scale applications [#](https://www.educative.io/courses/web-application-software-architecture-101/qA9gjEo6P97#Simple,-small-scale-applications)
简单的、小规模的应用

If you intend to write an app that doesn't involve much complexity like a blog or a simple online form or simple apps that integrate with social media running within the IFrame of the portal, including web browser-based strategy, airline, and football manager kind of games, you can pick _PHP_.
如果你打算写一个不涉及太多复杂问题的应用，如博客或简单的在线表格，或与社交媒体集成在门户的 IFrame 内运行的简单应用，包括基于 Web 浏览器的战略、航空和足球经理类游戏，你可以选择 PHP。

PHP is ideally used in these kinds of scenarios. We can also consider other web frameworks, like _Spring boot_ and _Ruby on Rails_, that cut down the verbosity, configuration, and development time by notches and facilitate rapid development. However, _PHP_ hosting will cost much less compared to hosting other technologies. It is ideal for very simple use cases.
在这类场景中，PHP 是最理想的应用。我们还可以考虑其他的网络框架，比如 Spring boot 和 Ruby on Rails，这些框架可以把冗长的语言、配置和开发时间减少很多，有利于快速开发。然而，与托管其他技术相比，PHP 托管的成本会低很多。它是非常简单的用例的理想选择。

## CPU and memory intensive applications [#](https://www.educative.io/courses/web-application-software-architecture-101/qA9gjEo6P97#CPU-and-memory-intensive-applications)
CPU 和内存密集型应用

Do you need to run _CPU_ intensive, _memory_ intensive, or heavy computational tasks on the backend, such as _Big Data processing_, _parallel processing_, and running _monitoring and analytics_, on quite a large amount of data?
你是否需要在后台运行 CPU 密集型、内存密集型或繁重的计算任务，如大数据处理、并行处理、运行监测和分析，对相当大的数据量？

Performance is critical in systems running tasks that are _CPU_ and _memory_ intensive. Handling massive amounts of data has its costs. A system with high latency and memory consumption can blow up the economy of a tech company.
在运行 CPU 和内存密集型任务的系统中，性能是至关重要的。处理海量的数据有其成本。一个具有高延迟和高内存消耗的系统可以炸毁一个科技公司的经济。

Also, regular web frameworks and scripting languages are not meant for number crunching.
此外，普通的网络框架和脚本语言并不是用来计算数字的。

_Tech commonly used in the industry to write performant, scalable, and distributed systems are: _
业界常用的编写高性能、可扩展和分布式系统的技术是：

_C++_ has features that facilitate low-level memory manipulation. This provides more control over memory to the developers when writing distributed systems. [The majority of the cryptocurrencies are written using this language](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) .
C++具有促进低层次内存操作的功能。在编写分布式系统时，这为开发人员提供了对内存的更多控制。大多数加密货币都是用这种语言编写的。

_Rust_ is a programming language similar to _C++_. It is built for high performance and safe concurrency. Lately, it's been gaining a lot of popularity amongst the developer circles.
Rust 是一种类似于 C++的编程语言。它是为高性能和安全的并发性而建立的。最近，它在开发者圈子里获得了很大的人气。

_Java_, _Scala_, and _Erlang_ are also a good pick. Most of the large-scale enterprise systems are written in _Java_.
Java、Scala 和 Erlang 也是一个不错的选择。大多数大型企业系统都是用 Java 编写的。

[Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch) is an open-source real-time search and analytics engine is written in _Java_.
Elasticsearch 是一个开源的实时搜索和分析引擎，是用 Java 编写的。

_Erlang_ is a functional programming language with built-in support for concurrency, fault-tolerance, and distribution. It facilitates the development of massively scalable systems. [This is a good read on Erlang](https://stackoverflow.com/questions/1636455/where-is-erlang-used-and-why)
Erlang 是一种函数式编程语言，内置对并发、容错和分布的支持。它促进了大规模可扩展系统的开发。

_Go_ is a programming language by _Google_ to write apps for multi-core machines and handle a large amount of data.
Go 是谷歌的一种编程语言，用于为多核机器编写应用程序并处理大量数据。

_Julia_ is a dynamically programmed language built for high performance, and running computations, and numerical analytics.
Julia 是一种动态编程语言，为高性能而构建，并运行计算和数字分析。

Well, this is pretty much it. In the next lesson, we'll talk about a few key things to bear in mind while researching picking a technology stack for our project.
好了，这就差不多了。在下一课中，我们将谈论在研究为我们的项目挑选技术栈时需要记住的几个关键事项。
