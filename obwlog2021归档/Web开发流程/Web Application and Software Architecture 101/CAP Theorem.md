In this lesson, you will learn about the CAP theorem.
在本课中，您将了解 CAP 定理。

## What is the CAP theorem? [#](https://www.educative.io/courses/web-application-software-architecture-101/7X50KR5Z3rG#What-is-the-CAP-theorem?)
什么是 CAP 定理？

_CAP_ stands for **consistency**, **availability**, **partition tolerance**. We've gone through consistency and availability in great detail. _Partition tolerance_ means _fault tolerance_, how tolerant the system is of failures or partitions. It keeps working even if a few nodes go down.
CAP 是一致性、可用性、分区容错性的缩写。我们已经非常详细地介绍了一致性和可用性。分区容错性是指容错性，即系统对故障或分区的容忍度。即使有几个节点发生故障，它也能继续工作。

You will find many definitions of the theorem online. The assert that amongst the three, _consistency_, _availability_ and _partition tolerance_, we have to pick two. I find this a teeny tiny bit confusing, so I will try to explain the theorem more simply.
你可以在网上找到许多关于该定理的定义。他们断言，在一致性、可用性和分区容错性这三者之间，我们必须选择两个。我觉得这有点令人困惑，所以我将尝试更简单地解释该定理。

> _The CAP theorem_ simply states that in case of a network failure, when a few of the nodes of the system are down, we have to make a choice between _availability_ and _consistency_
> CAP 定理简单地说，在网络故障的情况下，当系统中的一些节点出现故障时，我们必须在可用性和一致性之间做出选择。

If we pick _availability_, this means when a few nodes go down, the other nodes are available to the users for making updates. In this situation, the system is inconsistent because the nodes that are down don't get updated with the new data. When they come back online, if a user fetches the data from them, they’ll return the old values they had when they went down.
如果我们选择可用性，这意味着当几个节点瘫痪时，其他节点可以供用户进行更新。在这种情况下，系统是不一致的，因为停机的节点没有得到新数据的更新。当它们重新上线时，如果用户从它们那里获取数据，它们会返回它们停机时的旧值。

If we pick _consistency_, in this scenario, we have to lock down all the nodes for further writes until the nodes that have gone down come back online. This ensures the _strong consistency_ of the system because all the nodes will have the same entity values.
如果我们选择一致性，在这种情况下，我们必须锁定所有节点的进一步写入，直到已经停机的节点重新上线。这就保证了系统的强一致性，因为所有的节点都有相同的实体值。

Picking between _availability_ and _consistency_ largely depends on our use case and the business requirements. We have been through this in great detail. Also, the design of the distributed systems forces us to choose one. We can't have both _availability_ and _consistency_ at the same time.
在可用性和一致性之间做出选择，主要取决于我们的用例和业务需求。我们已经很详细地了解了这一点。另外，分布式系统的设计也迫使我们选择一个。我们不可能同时拥有可用性和一致性。

Nodes spread around the globe will take some time to reach a consensus. It's impossible to have zero-latency unless we transit data faster than or at the speed of time.
分布在全球各地的节点将需要一些时间来达成共识。除非我们传输数据的速度超过或达到时间的速度，否则不可能有零延迟。

> P.S. It's the speed of time, not the speed of light. Speed of light does not have zero latency, and it does take some time to travel from one point to the other.
> P.S. 是时间速度，不是光速。光速没有零延迟，从一个点到另一个点确实需要一些时间。

---

笔记：

分区容错性是指容错性，即系统对故障或分区的容忍度。即使有几个节点发生故障，它也能继续工作。
而 CAP 是一致性、可用性、分区容错性的缩写。
因此 CAP 定理简单地说就是：在网络故障的情况下，当系统中的一些节点出现故障时，我们必须在可用性和一致性之间做出选择。分布式系统的设计也迫使我们在二者中选择一个，我们不可能同时拥有可用性和一致性。

如果我们选择可用性，这意味着当几个节点瘫痪时，其他节点可以供用户进行更新。在这种情况下，系统是不一致的，因为停机的节点没有得到新数据的更新。当它们重新上线时，如果用户从它们那里获取数据，它们会返回它们停机时的旧值。
如果我们选择一致性，在这种情况下，我们必须锁定所有节点的进一步写入，直到已经停机的节点重新上线。这就保证了系统的强一致性，因为所有的节点都有相同的实体值。
