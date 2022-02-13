In this lesson, you will learn about replication as a high availability mechanism.
在本课中，你将了解到复制是一种高可用性机制。

## Replication – Active-active HA mode [#](https://www.educative.io/courses/web-application-software-architecture-101/q2Glm948Zpp#Replication-%E2%80%93-Active-active-HA-mode)

Replication means having a number of similar nodes running the workload together. There are no standby or passive instances. When a single or a few nodes go down, the remaining nodes bear the load of the service. Think of this as load balancing.
复制意味着有一些类似的节点一起运行工作负载。不存在备用或被动的实例。当一个或几个节点发生故障时，其余的节点承担服务的负载。把这看成是负载平衡。

![[High Availability - Replication.png]]

This approach is also known as the _active-active high availability_ mode. In this approach, all the components of the system are active at any point in time.
这种方法也被称为主动-主动高可用性模式。在这种方法中，系统的所有组件在任何时间点都是活跃的。

## Geographical distribution of workload [#](https://www.educative.io/courses/web-application-software-architecture-101/q2Glm948Zpp#Geographical-distribution-of-workload)

As a contingency for natural disasters, regional power outages, and other big-scale failures, data center workloads are spread across different data centers across the world in different geographical zones.
作为应对自然灾害、区域性停电和其他大规模故障的应急措施，数据中心的工作负载被分散在全球不同地理区域的不同数据中心。

This avoids the single point of failure in the context of a data center. Also, the latency is reduced by quite an extent due to the proximity of data to the user.
这就避免了数据中心背景下的单点故障。同时，由于数据离用户很近，延迟也降低了相当程度。

All highly available fault-tolerant design decisions are subjective to how critical the system is. Designers must ask “what are the odds that the components will fail”?
所有高度可用的容错设计决定都是由系统的关键程度决定的。设计师必须问 "组件发生故障的几率有多大"？

Businesses often use multi-cloud platforms to deploy their workloads which ensures further availability. If things go south with one cloud provider, they have another to fail back over.
企业通常使用多云平台来部署他们的工作负载，这可以确保进一步的可用性。如果一个云供应商出了问题，他们还有另一个云供应商可以回避。

---

笔记：

复制意味着有一些类似的节点一起运行工作负载，不存在备用或被动的实例。当一个或几个节点发生故障时，其余的节点承担服务的负载。把这看成是负载平衡。
这种方法也被称为 主动-主动 HA 模式。在这种方法中，系统的所有组件在任何时间点都是活跃的。

数据中心的工作负载被分散在全球不同地理区域的不同数据中心，避免了数据中心背景下的单点故障。同时，由于数据离用户很近，延迟也降低了很多。
企业通常使用多云平台来部署他们的工作负载，可以确保进一步的可用性。
