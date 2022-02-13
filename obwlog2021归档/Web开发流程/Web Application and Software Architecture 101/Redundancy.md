In this lesson, we will explore redundancy as a high availability mechanism.
在本课中，我们将探讨冗余作为一种高可用性机制。

## Redundancy – Active-passive HA mode [#](https://www.educative.io/courses/web-application-software-architecture-101/Bnjg2JmzGPx#Redundancy-%E2%80%93-Active-passive-HA-mode)

> Redundancy is duplicating the components or instances and keeping extras on standby to take over in case the active instances go down. It is the fail-safe, backup mechanism.
> 冗余是复制组件或实例，并保持额外的待机状态，以便在活动实例发生故障时接管。它是故障安全的备份机制。

![[High Availability - Redundancy.png]]

In the above diagram, you can see the instances that are active and on standby. The standby instances take over in case any of the active instances goes down.
在上图中，你可以看到活动和待机的实例。备用实例在任何一个活动实例发生故障时接管。

This approach is also known as _active-passive HA mode_. An initial set of nodes are active, and a set of redundant nodes are passive, on standby. Active nodes get replaced by passive nodes, in case of failures.
这种方法也被称为主动-被动 HA 模式。一组初始的节点是主动的，一组冗余的节点是被动的，处于待机状态。在发生故障的情况下，主动节点会被被动节点取代。

There are systems like GPS, aircrafts, and communication satellites that have zero downtime. The availability of these systems is ensured by making the components redundant.
有一些系统，如 GPS、飞机和通信卫星，具有零停机时间。这些系统的可用性是通过使组件冗余来保证的。

## Getting rid of single points of failure [#](https://www.educative.io/courses/web-application-software-architecture-101/Bnjg2JmzGPx#Getting-rid-of-single-points-of-failure)

Distributed systems became so popular solely because we could get rid of the single points of failure present in a monolithic architecture.
分布式系统之所以如此流行，完全是因为我们可以摆脱单体架构中存在的单点故障。

A large number of distributed nodes work in conjunction with each other to achieve a single synchronous application state.
大量的分布式节点相互配合，实现单一的同步应用状态。

When so many redundant nodes are deployed, there are no single points of failure in the system. In case a node goes down redundant nodes take its place. Thus, the system as a whole remains unimpacted.
当如此多的冗余节点被部署时，系统中就没有单点故障。如果一个节点发生故障，冗余节点会取代它的位置。因此，系统作为一个整体仍然不受影响。

Single points of failure at the application level mean bottlenecks. We should detect bottlenecks in performance testing and get rid of them as soon as we can.
应用层面上的单点故障意味着瓶颈。我们应该在性能测试中发现瓶颈，并尽快摆脱它们。

## Monitoring and automation [#](https://www.educative.io/courses/web-application-software-architecture-101/Bnjg2JmzGPx#Monitoring-and-automation)

Systems should be well monitored in real-time to detect any bottlenecks or single point of failures. Automation enables the instances to self-recover without any human intervention. It gives the instances the power of self-healing.
系统应得到良好的实时监控，以检测任何瓶颈或单点故障。自动化使实例能够在没有任何人工干预的情况下进行自我恢复。它使实例具有自我修复的能力。

Also, the systems become intelligent enough to add or remove instances on the fly as per the requirements.
此外，系统变得足够智能，可以根据需求添加或删除实例。

Since the most common cause of failures is human error, automation helps cut down failures to a big extent.
由于故障的最常见原因是人为错误，自动化有助于在很大程度上减少故障。

---

笔记：

冗余：复制组件或实例，并保持额外的待机状态，以便在活动实例发生故障时接管，它是故障安全的备份机制。备用在任何一个活动发生故障时接管。
这种方法也被称为 主动-被动 HA 模式。一组初始的节点是主动的，一组冗余的节点是被动的，处于待机状态。在发生故障的情况下，主动节点会被被动节点取代。

大量的分布式节点相互配合，实现单一的同步应用状态，当如此多的冗余节点被部署时，系统中就没有单点故障。如果一个节点发生故障，冗余节点会取代它的位置。因此，系统作为一个整体仍然不受影响。
应用层面上的单点故障意味着瓶颈。我们应该在性能测试中发现瓶颈并尽快处理。

系统应得到良好的实时监控以检测任何瓶颈或单点故障。自动化使实例能够在没有任何人工干预的情况下进行自我恢复，它使实例具有自我修复的能力。
