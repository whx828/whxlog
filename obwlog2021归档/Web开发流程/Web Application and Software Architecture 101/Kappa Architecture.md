In this lesson, we will discuss the Kappa architecture of data processing
在本课中，我们将讨论数据处理的 Kappa 架构

## What is Kappa architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/7XKpVR4yAAG#What-is-Kappa-architecture?)
什么是 Kappa 架构？
> In Kappa architecture, all the data flows through a single data streaming pipeline as opposed to the Lambda architecture, which has different data streaming layers that converge into one.
> 在 Kappa 架构中，所有的数据都流经一个单一的数据流管道，而不是 Lambda 架构，它有不同的数据流层，并汇聚成一个。

![[Kappa Data Processing Architecture.png]]

The architecture flows the data of both _real-time_ and _batch processing_ through a single streaming pipeline, reducing the complexity of not having to manage separate layers for processing data.
该架构将实时和批处理的数据通过一个单一的流式管道进行流动，减少了不必为处理数据而管理独立层的复杂性。

## Layers of Kappa architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/7XKpVR4yAAG#Layers-of-Kappa-architecture)
Kappa 架构的各层

_Kappa_ contains only two layers: _Speed_, which is the streaming processing layer, and _serving_, which is the final layer.
Kappa 只包含两层。速度，也就是流处理层，以及服务，也就是最后一层。

_Kappa is not an alternative for Lambda_. Both the architectures have their use cases.
Kappa 不是 Lambda 的替代品。这两种架构都有各自的用例。

_Kappa_ is preferred if the batch and the streaming analytics results are fairly identical in a system. _Lambda_ is preferred if they are not.
如果系统中的批处理和流式分析结果相当一致，那么 Kappa 是首选。如果两者不一致，则以 Lambda 为首选。

Well, this concludes the stream processing chapter. Although the entire distributed data processing approach appears pretty smooth and efficient, it's important that we do not forget that setting up and managing a distributed data processing system is something not trivial. It requires years of work to perfect the system. Also, a distributed system does not promise _strong consistency_ of data.
好了，流处理章节到此结束。虽然整个分布式数据处理方法看起来相当顺利和高效，但重要的是，我们不要忘记，建立和管理一个分布式数据处理系统是一件不简单的事情。它需要多年的工作来完善这个系统。而且，分布式系统并不能保证数据的强一致性。

With this being said, let's move on to the next chapter, where I talk about different kinds of architectures involved in the domain of software development.
说到这里，让我们进入下一章，在那里我将谈论软件开发领域所涉及的不同类型的架构。

---

笔记：

Kappa 架构：所有的数据都流经一个单一的数据流管道。将实时和批处理的数据通过一个单一的流式管道进行流动，减少了不必为处理数据而管理独立层的复杂性。

Kappa 只包含两层：
- 速度层：流处理层
- 服务层

如果系统中的批处理和流式分析结果相当一致，那么 Kappa 是首选。如果两者不一致，则以 Lambda 为首选。
