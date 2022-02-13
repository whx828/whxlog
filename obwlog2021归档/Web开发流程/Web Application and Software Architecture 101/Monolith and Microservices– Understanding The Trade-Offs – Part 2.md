This lesson continues the discussion of the trade-offs involved when choosing between a monolith and microservices architecture
本课继续讨论在单体架构和微服务架构之间进行选择时所涉及的权衡取舍

## Segment high-level architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/q2Vj0V7RG23#Segment-high-level-architecture)
Segment 高层架构

Segment's data infrastructure ingests hundreds of thousands of events per second. These events are then directed to different _APIs_ and webhooks via a message queue. These _APIs_ are also called server-side destinations, and there are over a hundred of these destinations at _Segment_.
Segment 的数据基础设施每秒钟摄取数十万个事件。然后，这些事件通过消息队列被引导到不同的 API 和 Webhooks。这些 API 也被称为服务器端目的地，在 Segment 有超过一百个这样的目的地。

When they started with a monolith architecture. They had an _API_ that ingested events from different sources, and the events were then forwarded to a distributed message queue. According to configuration and settings, the queue moved the event payload further to different destination APIs.
当他们开始使用单体架构的时候。他们有一个从不同来源摄取事件的 API，然后事件被转发到一个分布式消息队列。根据配置和设置，队列将事件有效载荷进一步转移到不同的目的地 API。

![[Segment Original Event Distribution Monolith Architecture.png]]

> _If you aren't aware of what a message queue, webhook, and data ingestion are? No worries, we will discuss these in detail in the latter part of this course. The example I am currently discussing is pretty straightforward, nothing complicated. So, we can focus on this right now and can delve into the rest of the concepts in detail later._
> 如果你不知道什么是消息队列、Webhook 和数据摄取？不用担心，我们将在本课程的后半部分详细讨论这些。我目前讨论的例子是非常直接的，没有什么复杂的。所以，我们现在可以专注于此，以后再详细探讨其他的概念。

In the monolithic architecture, as all the events were moved into a single queue, some of the events often failed to deliver to the destinations and were retired by the queue after stipulated time intervals.
在单体架构中，由于所有的事件都被移到一个队列中，一些事件经常不能被送到目的地，在规定的时间间隔后被队列退役。

This made the queue contain both the new as well as the failed events waiting to be retried. This eventually flooded the queue resulting in a delay of the delivery of events to the destinations.
这使得队列同时包含了新的和失败的事件，等待重试。这最终淹没了队列，导致事件交付给目的地的延迟。

To tackle the queue flooding issue, the engineering team at _Segment_ split the monolith into microservices and created a separate microservice for every destination.
为了解决队列淹没的问题，Segment 的工程团队将单体拆分为微服务，并为每个目的地创建一个单独的微服务。

Every service contained its own individual distributed message queue. This helped cut down the load on a single queue and enabled the system to scale also increasing the throughput.
每个服务都包含它自己的独立分布式消息队列。这有助于减少单一队列的负载，并使系统能够扩展，同时增加吞吐量。

![[Segment Microservices Architecture.png]]

In this scenario, even if a certain queue got flooded it didn't impact the event delivery of other services. This is how _Segment_ leveraged fault isolation with the microservices architecture.
在这种情况下，即使某个队列被淹没，也不会影响其他服务的事件交付。这就是 Segment 利用微服务架构进行故障隔离的方式。

Over time as the business gained traction additional destinations were added. Every destination had a separate microservice and a queue. The increase in the number of services led to an increase in the complexity of the architecture.
随着时间的推移，随着业务的发展，增加了更多的目的地。每个目的地都有一个独立的微服务和一个队列。服务数量的增加导致了架构复杂性的增加。

Separate services had separate _event throughput_ and _traffic load patterns_. A single-scale policy couldn't be applied to all the queues commonly. Every service and the queue needed to be uniquely scaled based on its traffic load pattern and this process had to be done manually.
独立的服务有独立的事件吞吐量和流量负载模式。单一规模的策略不能普遍应用于所有队列。每个服务和队列都需要根据其流量负载模式进行独特的扩展，这个过程必须手动完成。

_Auto scaling_ was implemented in the infrastructure but every service had distinct CPU & memory requirements. This required manual tuning of the infrastructure, meaning _more queues needed more resources for maintenance._
基础设施中实现了自动缩放，但每个服务都有不同的 CPU 和内存要求。这需要对基础设施进行手动调整，这意味着更多的队列需要更多的资源来维护。

To tackle this, _Segment_ eventually reverted to monolith architecture calling their architecture a _Centrifuge_ that combined all the individual queues for different destinations into a single monolith service.
为了解决这个问题，Segment 最终恢复了单片机架构，将他们的架构称为离心机，将不同目的地的所有单独队列合并为一个单片机服务。

The info that I have provided on Segment architecture in this lesson is very high-level. If you wish to go into more details and take a look at the Centrifuge architecture, go through these resources:
我在本课中提供的关于 Segment 架构的信息非常高级。如果您想了解更多细节并查看 Centrifuge 架构，请浏览以下资源：

 [Goodbye Microservices: From 100s Of Problem Children To 1 Superstar](https://segment.com/blog/goodbye-microservices/)
再见微服务：从 100 个问题儿童到 1 个超级明星

 [Centrifuge: A Reliable System For Delivering Billions Of Events Per Day](https://segment.com/blog/introducing-centrifuge/)
离心机：每天交付数十亿个事件的可靠系统

Below is another instance of a popular service that transitioned from microservices to a monolith architecture.
下面是另一个从微服务过渡到单体架构的流行服务实例。

## Istio – The move from microservices to a monolith [#](https://www.educative.io/courses/web-application-software-architecture-101/q2Vj0V7RG23#Istio-%E2%80%93-The-move-from-microservices-to-a-monolith)
Istio – 从微服务到单体应用的转变

[Istio](https://istio.io/) is an open-source service mesh that enables us to connect, secure, control, and observe microservices. It enables us to have control over how microservices share data with each other.
Istio 是一个开源服务网格，使我们能够连接、保护、控制和观察微服务。它使我们能够控制微服务如何相互共享数据。

It recently transitioned from a microservices to a monolith architecture. According to the _Istio_ team, having a monolith architecture enabled them to deliver value and achieve the goals they intended to.
它最近从微服务转变为单体架构。根据 Istio 团队的说法，拥有单体架构使他们能够交付价值并实现他们想要实现的目标。

**_Recommended Read_** – [Istio Is An Example Of When Not To Do Microservices](https://blog.christianposta.com/microservices/istio-as-an-example-of-when-not-to-do-microservices/) .
推荐阅读——Istio 是关于什么时候不做微服务的一个例子。

**_Recommended Watch_** - [Microservices - Are They Still Worth It?](https://www.youtube.com/watch?v=sZd4xTQlrIE&t=44s)
推荐观看──微服务 - 它们还值得吗？

---

笔记：

![[Segment Original Event Distribution Monolith Architecture.png]]

![Segment Microservices Architecture.png](app://local/%2FUsers%2Fpro%2FDropbox%2Fobwlog%2FWeb%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%2FWeb%20Application%20and%20Software%20Architecture%20101%2FSegment%20Microservices%20Architecture.png?1642223306376)


