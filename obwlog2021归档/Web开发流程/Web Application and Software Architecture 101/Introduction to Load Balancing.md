In this lesson, you will understand load balancing and the need for it in web applications
在本课程中，您将了解负载均衡以及在 Web 应用程序中的需求。

## What is load balancing? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLqwq90KMDR#What-is-load-balancing?)

Load balancing is vital in enabling our service to scale well with an increase in traffic load, as well as stay highly available. Load balancing is facilitated by load balancers, which makes them a key component in the web application architecture.
负载均衡对于使我们的服务能够随着流量负载的增加而很好地扩展，以及保持高可用性至关重要。负载均衡是由负载均衡器促成的，这使它们成为网络应用架构中的一个关键组成部分。

Load balancers distribute heavy traffic load across the servers running in the cluster based on several different algorithms. This averts the risks of all the traffic converging on the service to a single or a few machines in the cluster.
负载均衡器根据几种不同的算法，在集群中运行的服务器之间分配沉重的流量负载。这避免了所有的流量都汇聚到集群中的一台或几台机器上的风险。

If the entire traffic on the service converges only to a few machines, this will not only overload them resulting in the increase in the latency of the application and killing its performance, but it will also eventually bring them down.
如果服务上的所有流量只集中在几台机器上，这不仅会使它们过载，导致应用程序的延迟增加，破坏其性能，而且最终会使它们瘫痪。

Load balancing helps us avoid all this mess. While processing a user request, if a server goes down, the load balancer automatically routes the future requests to other up and running servers in the cluster. This enables the service as a whole to stay available.
负载均衡可以帮助我们避免所有这些混乱。在处理用户请求时，如果一台服务器发生故障，负载均衡器会自动将未来的请求路由到集群中其他正常运行的服务器。这使得服务作为一个整体能够保持可用。

Load balancers act as a single point of contact for all the client requests.
负载均衡器充当了所有客户端请求的单一联系点。

![[Load Balancing.png]]

Load balancers can also be set up to efficiently manage traffic directed towards any component of the application, be it the _backend application server, database component, message queue, or any other component. This is done to uniformly spread the request load across the machines in the clusters powering that respective component._
负载均衡器也可以被设置为有效地管理针对应用程序的任何组件的流量，无论是后端应用服务器、数据库组件、消息队列，还是任何其他组件。这样做是为了将请求负载均匀地分散到支持该组件的集群中的机器上。

![[Load Balancing At Different Components Of The Application.png]]

## Performing health checks of the servers with load balancers [#](https://www.educative.io/courses/web-application-software-architecture-101/RLqwq90KMDR#Performing-health-checks-of-the-servers-with-load-balancers)

In order to intelligently route all the user requests to the running servers in the cluster, a load balancer should be well aware of its running status.
为了智能地将所有用户请求路由到集群中正在运行的服务器，负载均衡器应该很好地了解其运行状态。

To ensure that the user request is always routed to the machine that is up and running, load balancers regularly perform health checks on the machines in the cluster.
为了确保用户请求总是被路由到正在运行的机器上，负载均衡器定期对集群中的机器进行健康检查。

![[Health Checks By Load Balancer.png]]

Ideally, a load balancer maintains a list of machines that are up and running in the cluster in real-time, and the user requests are forwarded to only those machines that are in service. If a machine goes down it is removed from the list.
理想情况下，负载均衡器实时维护集群中正在运行的机器列表，用户请求只转发到那些正在服务的机器上。如果一台机器发生故障，它将从列表中删除。

Machines that are up and running in the cluster are known as _in-service_ machines, and the servers that are down are known as _out of service_ instances.
在集群中正常运行的机器被称为服务中的机器，而停机的服务器被称为停止服务的实例。

> Just for the record, _Node, Server, Server Node, Instance, and Machine_ all mean the same thing and can be used interchangeably.
> 为了记录在案，Node、Server、Server Node、Instance 和 Machine 都是同一个意思，可以互换使用。

After the _out of service_ instance comes back online and becomes _in-service_, the load balancer updates its list and starts routing the future requests to that particular instance all over again.
在失去服务的实例重新上线并投入使用后，负载平衡器会更新其列表，并开始将未来的请求重新路由到该特定实例。

Alright!! In the next few lessons, you will discover how load balancers work. To understand that well, you need to first understand the _Domain Name System (DNS)_.
好了！在接下来的几课中，你将发现负载均衡器是如何工作的。为了很好地理解这一点，你需要首先理解域名系统（DNS）。

We will discuss the DNS in the next lesson.
我们将在下一课中讨论 DNS。

---

笔记：

负载均衡对于使我们的服务能够随着流量负载的增加而很好地扩展，以及保持高可用性至关重要。负载均衡是由负载均衡器构成的，负载均衡器根据几种不同的算法，在集群中运行的服务器之间分配沉重的流量负载。这避免了所有的流量都汇聚到集群中的一台或几台机器上的风险。

如果服务上的所有流量只集中在几台机器上，这不仅会使它们过载，导致应用程序的延迟增加，破坏其性能，而且最终会使它们瘫痪。负载均衡可以避免这些混乱。在处理用户请求时，如果一台服务器发生故障，负载均衡器会自动将未来的请求路由到集群中其他正常运行的服务器。这使得服务作为一个整体能够保持可用。

负载均衡器充当了所有客户端请求的单一联系点。负载均衡器也可以被设置为有效地管理针对应用程序的任何组件的流量，无论是后端应用服务器、数据库组件、消息队列，还是任何其他组件。这样做是为了将请求负载**均匀地**分散到支持该组件的集群中的机器上。

理想情况下，负载均衡器实时维护集群中正在运行的机器列表，用户请求只转发到那些正在服务的机器上。如果一台机器发生故障，它将从列表中删除。
