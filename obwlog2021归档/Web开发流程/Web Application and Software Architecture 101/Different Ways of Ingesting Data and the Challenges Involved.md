In this lesson, we will discuss the different ways in which we can ingest the data. We will also cover the challenges involved in this process.
在这一课中，我们将讨论我们可以数据摄取的不同方式。我们还将介绍这一过程中涉及的挑战。

## Different ways to ingest data [#](https://www.educative.io/courses/web-application-software-architecture-101/7AgQN620KAy#Different-ways-to-ingest-data)
数据摄取的不同方式

There are two primary ways to ingest data: in _real-time_ and in _batches_, which run at regular intervals. Which of the two to pick depends entirely on the business requirements.
数据摄取有两种主要方式：实时和分批，即以固定的时间间隔运行。这两种方式的选择完全取决于业务需求。

Data ingestion in real-time is typically preferred in systems reading medical data, like a heartbeat or blood pressure via wearable IoT sensors where the time is critical. It is also preferred in systems handling financial data like stock market events, etc. These are a few instances where time, lives, and money are closely linked, and we need information as soon as we can get it.
在读取医疗数据的系统中，实时数据摄取通常是首选，如通过可穿戴物联网传感器读取心跳或血压，时间很关键。在处理金融数据的系统中，它也是首选，如股票市场事件等。这些都是时间、生命和金钱密切相关的几个例子，我们需要尽快获得信息。

On the contrary, in systems that read trends over time, we can always ingest data in batches. For instance, consider estimating the popularity of a sport in a region over a period of time.
相反，在读取长期趋势的系统中，我们总是可以分批数据摄取。例如，考虑估计一项运动在一个地区一段时间内的受欢迎程度。

Let's talk about some of the challenges that developers have to face when ingesting massive amounts of data. I have added this lesson just to give you a deeper insight into the entire process. In the upcoming lesson, I also talk about the general use-cases of data streaming in the application development domain.
让我们来谈谈开发人员在摄取大量数据时不得不面对的一些挑战。我增加这一课只是为了让你对整个过程有更深入的了解。在接下来的课程中，我还会谈论数据流在应用开发领域的一般用途。

## Challenges with data ingestion [#](https://www.educative.io/courses/web-application-software-architecture-101/7AgQN620KAy#Challenges-with-data-ingestion)
数据摄取的挑战

### Slow process [#](https://www.educative.io/courses/web-application-software-architecture-101/7AgQN620KAy#Slow-process)
缓慢过程

Data ingestion is a slow process. Why? We discussed this before. When the data is streamed from several different sources into the system, data coming from each and every source has a different format, different syntax, attached metadata, etc. The data as a whole is heterogeneous. It has to be transformed into a common format like _JSON_ or something to be understood well by the analytics system.
数据摄取是一个缓慢的过程。为什么呢？我们之前讨论过这个问题。当数据从几个不同的来源流向系统时，来自每一个来源的数据都有不同的格式、不同的语法、附加的元数据等。这些数据作为一个整体是异质的。它必须被转换为一种通用的格式，如 JSON 或其他格式，以便被分析系统很好地理解。

The conversion of data is a tedious process. It takes a lot of computing resources and time. Flowing data has to be staged at several stages in the pipeline, processed, and then moved ahead.
数据转换是一个繁琐的过程。它需要大量的计算资源和时间。流动的数据必须在管道中的几个阶段进行分期，处理，然后向前移动。

Also, data has to be authenticated and verified at each and every stage to meet the organization's security standards. With the traditional data cleansing processes, it takes weeks if not months to get useful information on hand. Traditional data ingestion systems like _ETL_ ain't that effective anymore.
此外，数据必须在每一个阶段进行认证和验证，以满足组织的安全标准。在传统的数据清理过程中，需要几周甚至几个月的时间才能获得有用的信息。传统的数据摄取系统，如 ETL，已经不是那么有效了。

**Okay! But, you just said data can be ingested in real-time right? So, how is it slow?**
好吧! 但是，你刚才说数据可以被实时摄取，对吗？那么，它怎么会慢呢？

I would like to bring up two things here. _First_, the modern data processing tech and frameworks are continually evolving to beat the limitations of the legacy, traditional data processing systems. Real-time data ingestion wasn't even possible with the traditional systems.
我想在这里提出两件事。首先，现代数据处理技术和框架正在不断发展，以克服传统数据处理系统的限制。实时数据摄取在传统系统中甚至是不可能的。

_Second_, analytics information obtained from real-time processing is not that accurate or holistic since the analytics continually runs on a limited set of data. This is because it streams as opposed to batch processing which takes into account the entire data set. So, basically the more time we spend studying the data the more accurate results we get.
第二，从实时处理中获得的分析信息并不那么准确或全面，因为分析不断地在有限的数据集上运行。这是因为它是流式处理，而不是考虑到整个数据集的批处理。因此，基本上我们花越多的时间研究数据，就能得到越准确的结果。

You'll learn more about this when we go through the _Lambda_ and the _Kappa_ architectures of data processing.
当我们通过数据处理的 Lambda 和 Kappa 架构时，你会了解更多这方面的信息。

### Complex and Expensive [#](https://www.educative.io/courses/web-application-software-architecture-101/7AgQN620KAy#Complex-and-Expensive)
复杂而昂贵

The entire data flow process is resource-intensive. A lot of heavy lifting has to be done to prepare the data before being ingested into the system. Also, it isn't a side process. A dedicated team is required to pull off something like that.
整个数据流过程是资源密集型的。在将数据摄入系统之前，必须做很多繁重的工作来准备数据。此外，这不是一个侧面的过程。需要一个专门的团队来完成这样的事情。

Engineering teams often come across scenarios where the tools and frameworks available in the market fail to serve their needs. They have no option other than to write a custom solution from the bare bones.
工程团队经常遇到这样的情况：市场上的工具和框架不能满足他们的需求。他们别无选择，只能从最基本的东西开始写一个定制的解决方案。

_Goblin_ is a data ingestion tool by LinkedIn. At one point in time, LinkedIn had fifteen data ingestion pipelines running which created several data management challenges. [To tackle this problem, LinkedIn wrote Goblin in-house.](https://engineering.linkedin.com/data-ingestion/gobblin-big-data-ease)
Goblin 是 LinkedIn 的一个数据摄取工具。在一个时间点上，LinkedIn 有 15 个数据摄取管道在运行，这造成了一些数据管理的挑战。为了解决这个问题，LinkedIn 在内部编写了 Goblin。

It is a part of the Apache Software Foundation. [This is a good read](https://engineering.linkedin.com/blog/2018/01/gobblin-enters-apache-incubation)
它是 Apache 软件基金会的一部分。这是一篇好文章

The semantics of the data coming from external sources changes sometimes because the data sources are not always under our control, which requires a change in the backend data processing code. Today the IoT machines in the industry are continually evolving at a rapid pace.
来自外部的数据语义有时会发生变化，因为数据源并不总是在我们的控制之下，这需要改变后端数据处理代码。如今，行业内的物联网机器在不断地快速发展。

These are the factors we have to keep in mind when setting up a data processing and analytics system.
这些都是我们在建立数据处理和分析系统时必须要注意的因素。

### Moving data around is risky [#](https://www.educative.io/courses/web-application-software-architecture-101/7AgQN620KAy#Moving-data-around-is-risky)
到处移动数据是有风险的

When data is moved around, it opens up the possibility of a breach. Moving data is vulnerable. It goes through several different staging areas, and the engineering teams have to put in additional effort and resources to ensure their system meets the security standards at all times.
当数据被四处移动时，就会出现漏洞的可能性。移动数据是脆弱的。它要经过几个不同的暂存区，工程团队必须投入额外的努力和资源，以确保他们的系统在任何时候都符合安全标准。

These are some of the challenges developers face when working with streaming data.
这些是开发人员在处理流式数据时面临的一些挑战。

---

笔记：

数据摄取有两种主要方式：实时和分批，分批即以固定的时间间隔运行。这两种方式的选择完全取决于业务需求。

数据摄取是一个缓慢的过程。当数据从几个不同的来源流向系统时，来自每一个来源的数据都有不同的格式、不同的语法、附加的元数据等。这些数据作为一个整体是异质的。它必须被转换为一种通用的格式，如 JSON 或其他格式，以便被分析系统很好地理解。
数据转换是一个繁琐的过程。它需要大量的计算资源和时间。流动的数据必须在管道中的几个阶段进行分期，处理，然后向前移动。
此外，数据必须在每一个阶段进行认证和验证，以满足组织的安全标准。在传统的数据清理过程中，需要几周甚至几个月的时间才能获得有用的信息。传统的数据摄取系统，如 ETL，已经不是那么有效了。

从实时处理中获得的分析信息并不那么准确或全面，因为分析不断地在有限的数据集上运行。这是因为它是流式处理，而不是考虑到整个数据集的批处理。
整个数据流过程是资源密集型的。在将数据摄入系统之前，必须做很多繁重的工作来准备数据。这不是一个侧面的过程。需要一个专门的团队来完成这样的事情。
当数据被四处移动时，就会出现漏洞的可能性。移动数据是脆弱的。它要经过几个不同的暂存区，工程团队必须投入额外的努力和资源，以确保他们的系统在任何时候都符合安全标准。
