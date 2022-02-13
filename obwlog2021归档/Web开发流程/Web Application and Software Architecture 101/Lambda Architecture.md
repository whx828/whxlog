In this lesson, you will learn about Lambda architecture of data processing.
在本课中，您将了解数据处理的 Lambda 架构。

## What is lambda architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/x100zj6EADJ#What-is-lambda-architecture?)
什么是 Lambda 架构？
> _Lambda_ is a distributed data processing architecture that leverages both the _batch_ and the _real-time_ streaming data processing approaches to tackle the latency issues that arise out of the _batch processing_ approach. It joins the results from both approaches before presenting them to the end-user.
> Lambda 是一个分布式数据处理架构，它同时利用批处理和实时流数据处理方法来解决批处理方法所产生的延迟问题。它将两种方法的结果连接起来，然后再呈现给终端用户。

![[Lambda Data Processing Architecture.png]]

_Batch processing_ does take time considering the massive amounts of data businesses have today. However, the accuracy of the approach is high, and the results are comprehensive.
考虑到今天企业拥有的海量数据，批量处理确实需要时间。然而，该方法的准确性很高，而且结果很全面。

On the contrary, _real-time streaming data processing_ provides quick access to insights. In this scenario, the analytics is run over a small portion of data so the results are not that accurate or comprehensive when compared to that of the batch approach.
相反，实时流式数据处理提供了快速获得见解的机会。在这种情况下，分析是在一小部分数据上运行的，所以与批处理方法相比，其结果不是那么准确或全面。

_Lambda architecture_ makes the most of the two approaches.
Lambda 架构最大限度地发挥了这两种方法的作用。

## Layers of the Lambda architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/x100zj6EADJ#Layers-of-the-Lambda-architecture)
Lambda 架构的层数

The architecture has typically three layers:
该架构通常有三个层次：

- Batch layer
批量层
- Speed layer
速度层
- Serving layer
服务层

The _batch layer_ deals with the results acquired via batch processing the data. The _Speed layer_ gets data from the real-time streaming data processing, and the _serving layer_ combines the results obtained from both the _batch_ and the _speed_ layers.
批量层处理通过批量处理数据获得的结果。速度层从实时流媒体数据处理中获取数据，服务层结合从批处理和速度层获得的结果。

---

笔记：

Lambda 是一个分布式数据处理架构，它同时利用批处理和实时流数据处理方法来解决批处理方法所产生的延迟问题，将两种方法的结果连接起来，然后再呈现给终端用户。

Lambda 架构分为：

- Batch layer
批量层
- Speed layer
速度层
- Serving layer
服务层
