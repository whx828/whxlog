In this lesson, you will learn about high availability and its importance in online services.
在本课中，您将了解高可用性及其在在线服务中的重要性。

Highly available computing infrastructure is the norm in the computing industry today. More so, when it comes to the cloud platforms, it is the key feature that enables the workloads running on them to be highly available.
高可用性的计算基础设施是当今计算行业的规范。更重要的是，当涉及到云平台时，它是使运行在其上的工作负载具有高可用性的关键特征。

This lesson is an insight into _high availability_. It covers all the frequently asked questions about it, including:
本课是对高可用性的深入了解。它涵盖了所有关于它的常见问题，包括。

- What is it?
它是什么？
- Why is it so important to businesses?
为什么它对企业如此重要？
- What is a _highly available cluster_?
什么是高可用集群？
- How do cloud platforms ensure high availability of the services running on them?
云平台如何确保在其上运行的服务的高可用性？
- What is _fault tolerance_ and _redundancy_? How are they related to high availability?
什么是容错和冗余？它们与高可用性有什么关系？

So, without any further ado. Let's get on with it.
所以，不用再多说了。让我们继续吧。

## What is high availability? [#](https://www.educative.io/courses/web-application-software-architecture-101/mEY0j3pmDgA#What-is-high-availability?)

> High availability, also known as _HA_, is the ability of the system to stay online despite having failures at the infrastructural level in real-time.
> 高可用性，也被称为 HA，是指系统在基础设施层面出现故障时仍能实时保持在线的能力。

High availability ensures the uptime of the service much more than the normal time. It improves the reliability of the system and ensures minimum downtime.
高可用性确保服务的正常运行时间远远超过正常时间。它提高了系统的可靠性，并确保最小的停机时间。

The sole mission of highly available systems is to stay online and stay connected. A very basic example of this is having back-up generators to ensure continuous power supply in case of any power outages.
高可用性系统的唯一任务是保持在线并保持连接。这方面的一个非常基本的例子是拥有备用发电机，以确保在任何停电情况下的持续电力供应。

In the industry, HA is often expressed as a percentage. For instance, when the system is _99.99999%_ highly available, it simply means _99.99999%_ of the total hosting time the service will be up. You might often see this in the Service Level Agreements (SLA) of cloud platforms.
在业界，HA 通常以百分比来表示。例如，当系统是 99.99999% 的高度可用时，它只是意味着服务的总托管时间的 99.99999% 将是正常的。你可能经常在云平台的服务水平协议（SLA）中看到这一点。

## How important is high availability to online services? [#](https://www.educative.io/courses/web-application-software-architecture-101/mEY0j3pmDgA#How-important-is-high-availability-to-online-services?)

Social applications going down for a bit and then bouncing back might not impact businesses that much. However, there are mission-critical systems like aircraft systems, spacecrafts, mining machines, hospital servers, and finance stock-market systems that cannot afford to go down at any time. After all, lives depend on it.
社交应用程序宕机一下，然后反弹，可能对企业影响不大。然而，有一些关键任务系统，如飞机系统、航天器、采矿机、医院服务器和金融股票市场系统，在任何时候都不能发生故障。毕竟，生命依赖于它。

The smooth functioning of the mission-critical systems relies on continual connectivity with their network/servers. These are the instances that do not work without super highly available infrastructures.
关键任务系统的顺利运作依赖于与其网络/服务器的持续连接。这些都是没有高度可用的基础设施就无法工作的实例。

Besides, no service likes to go down, critical or not.
此外，没有任何服务喜欢瘫痪，无论是否关键。

To meet the high availability requirements, systems are designed to be _fault-tolerant_ and their components are made _redundant_.
为了满足高可用性的要求，系统被设计成具有容错性，并且其组件是冗余的。

What are fault-tolerant and redundancy in systems designing? I will discuss this next.
什么是系统设计中的容错性和冗余性？接下来我将讨论这个问题。

---

笔记：

高可用性，也被称为 HA，是指系统在基础设施层面出现故障时仍能实时保持在线的能力。
在业界，HA 通常以百分比来表示。例如，当系统是 99.99999% 的高度可用时，它只是意味着服务的总托管时间的 99.99999% 将是正常的。
高可用性确保服务的正常运行时间远远超过正常时间。它提高了系统的可靠性，并确保最小的停机时间。
高可用性系统的唯一任务是保持在线并保持连接。
