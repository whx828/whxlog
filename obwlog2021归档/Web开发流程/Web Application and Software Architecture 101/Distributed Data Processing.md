In this lesson, we will discuss distributed data processing and the technologies used for it.
在本课中，我们将讨论分布式数据处理和用于它的技术。

Alright, people! This lesson is all about distributed data processing. I'll talk about what it is, how different it is compared to a centralized data processing system, the architectures involved in it, and more.
好了，各位！这节课是关于分布式数据处理的。本课是关于分布式数据处理的。我将谈论什么是分布式数据处理，与集中式数据处理系统相比有什么不同，其中涉及的架构，以及更多。

So, let's get on with it.
所以，让我们继续吧。

## What is distributed data processing? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#What-is-distributed-data-processing?)
什么是分布式数据处理？

> _Distributed-data processing_ means diverging large amounts of data to several different nodes running in a cluster for parallel processing.
> 分布式数据处理是指将大量的数据分流到在一个集群中运行的几个不同的节点进行并行处理。

All the nodes execute the task allotted parallelly, working in conjunction with each other coordinated by a node-coordinator. _Apache Zookeeper_ is a pretty popular, de facto, node coordinator used in the industry.
所有的节点都平行地执行分配的任务，在节点协调者的协调下，相互配合工作。Apache Zookeeper 是业界相当流行的、事实上的节点协调器。

Since the nodes are distributed and the tasks are executed parallelly, this makes the entire set-up pretty _scalable_ and _highly available_. The workload can be scaled both horizontally and vertically. Data is made _redundant_ and _replicated_ across the cluster to avoid any sort of data loss.
由于节点是分布式的，任务是平行执行的，这使得整个设置具有相当的可扩展性和高可用性。工作负载可以水平和垂直地扩展。数据是冗余的，并在集群中进行复制，以避免任何形式的数据丢失。

![[Distributed Data Processing.png]]

Processing data in a distributed environment helps accomplish the task in significantly less time as opposed to when running it on a centralized data processing system.
相对于在集中式数据处理系统中运行，在分布式环境中处理数据有助于在更短的时间内完成任务。

In a distributed system the tasks are shared by several nodes. On the contrary, in a centralized system, the tasks are queued in a queue to be processed one by one.
在一个分布式系统中，任务由几个节点共享。相反，在集中式系统中，任务被排在队列中，一个一个地处理。

## Distributed data processing technologies [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#Distributed-data-processing-technologies)
分布式数据处理技术

Here are some of the popular technologies that are used in the industry for large scale data processing.
以下是一些流行的技术，在行业中被用于大规模数据处理。

### MapReduce – Apache Hadoop [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#MapReduce-%E2%80%93-Apache-Hadoop)
MapReduce - Apache Hadoop

_MapReduce_ is a programming model written for managing distributed data processing across several different machines in a cluster, distributing tasks to several machines, running work in parallel, and managing all the communication and data transfer within different parts of the system.
MapReduce 是为管理分布式数据处理而编写的编程模型，它跨越集群中的几台不同机器，将任务分配给几台机器，并行运行工作，并管理系统不同部分内的所有通信和数据传输。

The _Map_ part of the programming model involves sorting the data based on a parameter and the _Reduce_ part involves summarizing the sorted data.
该编程模型的 Map 部分涉及根据参数对数据进行排序，Reduce 部分涉及对排序后的数据进行汇总。

The most popular open-source implementation of the _MapReduce programming model_ is _Apache Hadoop_. The framework is used by all big guns in the industry to manage massive amounts of data in their system. It is used by Twitter for running analytics. It is used by Facebook for storing big data.
最流行的 MapReduce 编程模型的开源实现是 Apache Hadoop。该框架被业界用来管理他们系统中的大量数据。Twitter 用它来运行分析。Facebook 用它来存储大数据。

### Apache Spark [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#Apache-Spark)
Apache Spark

_Apache Spark_ is an open-source cluster computing framework. It provides high performance for both batch and real-time in-stream processing. It can work with diverse data sources and facilitates parallel execution of work in a cluster.
Apache Spark 是一个开源的集群计算框架。它为批量和实时的流式处理提供了高性能。它可以与不同的数据源一起工作，并促进集群中工作的并行执行。

Spark has a cluster manager and distributed data storage. The cluster manager facilitates communication between different nodes running together in a cluster whereas the distributed storage facilitates storing Big Data. Spark seamlessly integrates with distributed data stores like _Cassandra, HDFS, MapReduce File System, Amazon S3_, etc.
Spark 有一个集群管理器和分布式数据存储。集群管理器促进了集群中一起运行的不同节点之间的通信，而分布式存储则促进了大数据的存储。Spark 与分布式数据存储无缝集成，如 Cassandra、HDFS、MapReduce 文件系统、Amazon S3 等。

### Apache Storm [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#Apache-Storm)
Apache Storm

_Apache Storm_ is a distributed stream processing framework. In the industry, it is primarily used for processing massive amounts of streaming data. It has several different use cases, such as real-time analytics, machine learning, distributed remote procedure calls, etc.
Apache Storm 是一个分布式流处理框架。在业界，它主要用于处理大量的流式数据。它有几个不同的用例，如实时分析、机器学习、分布式远程程序调用等。

### Apache Kafka [#](https://www.educative.io/courses/web-application-software-architecture-101/RLnjvrRwlAL#Apache-Kafka)
Apache Kafka

_Apache Kafka_ is an open-source distributed stream processing and messaging platform. It's written using _Java_ and _Scala_, and it was developed by _LinkedIn_.
Apache Kafka 是一个开源的分布式流处理和消息传递平台。它是用 Java 和 Scala 编写的，由 LinkedIn 开发。

The storage layer of Kafka involves a distributed scalable pub-sub message queue. It helps read and write streams of data like a messaging system.
Kafka 的存储层涉及到一个分布式可扩展的 发布-订阅(pub-sub) 消息队列。它像一个消息传递系统一样帮助读写数据流。

Kafka is used in the industry to develop real-time features such as notification platforms, managing streams of massive amounts of data, monitoring website activity and metrics, messaging, and log aggregation.
Kafka 在业界被用来开发实时功能，如通知平台、管理海量数据流、监控网站活动和指标、消息传递和日志聚合。

_Hadoop_ is preferred for _batch processing_ of data whereas _Spark, Kafka_, and _Storm_ are preferred for processing real-time streaming data.
Hadoop 是批处理数据的首选，而 Spark、Kafka 和 Storm 则是处理实时流数据的首选。

So, by now, I am sure you have a good idea of what data processing is and are aware of its use-cases in modern application development and the technologies involved.
所以，到现在为止，我相信你对什么是数据处理有一个很好的概念，并且知道它在现代应用开发中的使用情况和所涉及的技术。

Let's take a look at a couple of architectures involved in the process: _Lambda_ and _Kappa_.
让我们来看看这个过程中涉及的几个架构。Lambda 和 Kappa。

---

笔记：

分布式数据处理：将大量的数据分流到在一个集群中运行的几个不同的节点进行并行处理，所有的节点都平行地执行分配的任务，在节点协调者的协调下，相互配合工作。
由于节点是分布式的，任务是平行执行的，这使得整个设置具有相当的可扩展性和高可用性。工作负载可以水平和垂直地扩展。数据是冗余的，并在集群中进行复制，以避免任何形式的数据丢失。

相对于在集中式数据处理系统中运行，在分布式环境中处理数据有助于在更短的时间内完成任务。
在一个分布式系统中，任务由几个节点共享；而在集中式数据系统中，任务被排在队列中，一个一个地处理。
