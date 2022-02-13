In this lesson, we will discuss some common data ingestion use cases in the industry.
在本课中，我们将讨论行业中一些常见的数据摄取用例。

This is the part where I talk about some of the data streaming use cases commonly required in the industry.
这是我谈论行业中普遍需要的一些数据流用例的部分。

## Moving Big Data into Hadoop [#](https://www.educative.io/courses/web-application-software-architecture-101/YQNPK7E7XV9#Moving-Big-Data-into-Hadoop)
将大数据移入 Hadoop 中

This is data ingestion's most popular use. As discussed before, Big Data from IoT devices, social apps, and other sources, streams through data pipelines and moves into the most popular distributed data processing framework Hadoop for analysis.
这是数据摄取的最流行的用途。正如之前所讨论的，来自物联网设备、社交应用和其他来源的大数据，通过数据管道流，并进入最流行的分布式数据处理框架 Hadoop 进行分析。

## Streaming data from databases to Elastic search server [#](https://www.educative.io/courses/web-application-software-architecture-101/YQNPK7E7XV9#Streaming-data-from-databases-to-Elasticsearch-server)
从数据库流向 Elastic search 服务器的数据

_Elastic search_ is an open-source framework for implementing search in web applications. It is a de facto search framework used in the industry simply because of its advanced features and it being open source. These features enable businesses to write their own custom solutions when they need them.
Elastic search 是一个开源的框架，用于在网络应用中实现搜索。它是业界使用的事实上的搜索框架，仅仅是因为它的高级功能和它是开源的。这些功能使企业在需要时可以编写自己的定制解决方案。

In the past, I wrote a product search software with a few of my friends as a service using _Java_, _Spring Boot_, and _Elastic search_. We would stream and index quite a large amount of product data from the legacy storage solutions to the Elastic search server in order to make the products come up in the search results.
过去，我和我的几个朋友用 Java、Spring Boot 和 Elastic 搜索编写了一个产品搜索软件，作为一项服务。我们将大量的产品数据从传统的存储解决方案中流转并索引到 Elastic search 服务器，以使产品出现在搜索结果中。

All the data intended to show up in the search was replicated from the main storage to the Elastic-search storage. Also, as the new data was persisted in the main storage it was asynchronously delivered to the Elastic server in real-time for indexing.
所有打算在搜索中出现的数据都从主存储中复制到 Elastic search 存储中。同时，当新的数据被保存在主存储中时，它被异步地实时传递到 Elastic 服务器上进行索引。

## Log processing [#](https://www.educative.io/courses/web-application-software-architecture-101/YQNPK7E7XV9#Log-processing)
日志处理

If your project isn't a hobby project, chances are it's running on a cluster. When we talk about running a large-scale service, monolithic systems are a thing of the past. With so many microservices running concurrently. There is a massive number of logs, which are generated over a period of time. Logs are the only way to move back in time, track errors, and study the system's behavior.
如果你的项目不是一个业余项目，那么它有可能是在一个集群上运行。当我们谈及运行大规模服务时，单体系统已经成为过去。由于有这么多的微服务在并发地运行。有大量的日志，这些日志是在一段时间内产生的。日志是回溯时间、追踪错误和研究系统行为的唯一途径。

So, to study the behavior of the system holistically, we have to stream all the logs to a central place. Ingest logs to a central server to run analytics on it with the help of solutions like the Elastic LogStash Kibana(ELK) stack, etc.
因此，为了全面研究系统的行为，我们必须将所有的日志流向一个中心位置。在 Elastic LogStash Kibana(ELK)堆栈等解决方案的帮助下，将日志录入到中央服务器，对其运行分析。

## Stream processing engines for real-time events [#](https://www.educative.io/courses/web-application-software-architecture-101/YQNPK7E7XV9#Stream-processing-engines-for-real-time-events)
用于实时事件的流处理引擎

Real-time streaming and data processing are the core components in systems handling LIVE information such as sports. It's imperative that the architectural setup in place is efficient enough to ingest data, analyze it, figure out the behavior in real-time, and quickly push the updated information to the fans. After all, the whole business depends on it.
实时流和数据处理是处理体育等实时信息的系统的核心组成部分。当务之急是，现有的架构设置要足够高效，以摄取数据、分析数据、实时弄清行为，并迅速将更新的信息推送出去。毕竟，整个业务都依赖于此。

Message queues like _Kafka_ and stream computation frameworks like _Apache Storm, Apache Nifi, Apache Spark, Samza, Kinesis_, etc are used to implement the real-time large-scale data processing features in online applications.
像 Kafka 这样的消息队列和 Apache Storm、Apache Nifi、Apache Spark、Samza、Kinesis 等流计算框架被用来实现在线应用中的实时大规模数据处理功能。

This is a good read on the topic:
这是一个关于这个话题的好读物：

An Insight into [Netflix's real-time streaming platform](https://medium.com/netflix-techblog/keystone-real-time-stream-processing-platform-a3ee651812a)
对 Netflix 实时流媒体平台的深入了解

Alright!! time to have a look into data pipelines in the next lesson.
好了！是时候在下一课看看数据管道了。

---

笔记：

实时流和数据处理是处理体育等实时信息的系统的核心组成部分。现有的架构设置要足够高效，以摄取数据、分析数据、实时弄清行为，并迅速将更新的信息推送出去。
