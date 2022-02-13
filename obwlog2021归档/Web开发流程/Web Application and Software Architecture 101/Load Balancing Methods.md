In this lesson, you will get an insight into hardware and software load balancing.
在本课中，你将深入了解硬件和软件的负载平衡。

There are primarily three modes of load balancing:
主要有三种模式的负载平衡。
1.  _DNS Load Balancing_
DNS 负载平衡
2.  _Hardware-based Load Balancing_
基于硬件的负载平衡
3.  _Software-based Load Balancing_
基于软件的负载平衡

We discussed _DNS load balancing_ in the previous lesson. So, in this one, we will discuss hardware and software load balancing.
我们在上一课中讨论了 DNS 负载平衡。因此，在这一课中，我们将讨论硬件和软件负载平衡。

Without further ado. Let's get on with it.
不多说了。让我们开始吧。

_Hardware-based_ and _software-based_ are common ways of balancing traffic loads on large-scale services. Let's begin with hardware-based load balancing.
基于硬件和基于软件是平衡大规模服务的流量负载的常见方法。让我们从基于硬件的负载均衡开始。

## Hardware load balancers [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Hardware-load-balancers)

_Hardware load balancers_ are highly performant physical hardware. They sit in front of the application servers and distribute the load based on the number of existing open connections to a server, compute utilization, and several other parameters.
硬件负载均衡器是高性能的物理硬件。它们位于应用服务器的前面，并根据与服务器的现有开放连接数、计算利用率和其他一些参数来分配负载。

Since these load balancers are physical hardware they need maintenance and regular updates, just like any other server hardware would need. They are expensive to set up in comparison to _software load balancers_, and their upkeep may require a certain skill set.
由于这些负载均衡器是物理硬件，它们需要维护和定期更新，就像任何其他服务器硬件需要的那样。与软件负载平衡器相比，它们的设置成本很高，而且它们的维护可能需要一定的技能。

If the business has an _IT team_ and _network specialists_ in house, they can take care of these load balancers. Otherwise, the developers are expected to wrap their heads around how to set up these hardware load balancers with some assistance from vendors. This is why developers prefer working with software load balancers.
如果企业内部有一个 IT 团队和网络专家，他们可以照顾这些负载均衡器。否则，开发人员要在供应商的一些协助下，围绕如何设置这些硬件负载均衡器进行思考。这就是为什么开发人员更喜欢与软件负载平衡器合作。

When using _hardware load balancers_, we may also have to overprovision them to deal with the peak traffic, which is not the case with _software load balancers_.
当使用硬件负载均衡器时，我们可能还需要过度配置，以处理峰值流量，而软件负载均衡器则不存在这种情况。

_Hardware load balancers_ are primarily picked because of their top-notch performance.
挑选硬件负载均衡器主要是因为其一流的性能。

Now, let's take a look at _software-based load balancing_.
现在，让我们来看看基于软件的负载均衡。

## Software load balancers [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Software-load-balancers)

_Software load balancers_ can be installed on commodity hardware and _VMs_. They are more cost-effective and offer more flexibility to the developers. _Software load balancers_ can be upgraded and provisioned easily compared to _hardware load balancers_.
软件负载均衡器可以安装在商品硬件和虚拟机上。它们更具成本效益，并为开发人员提供更多的灵活性。与硬件负载均衡器相比，软件负载均衡器可以轻松升级和配置。

You will also find several _Load Balancers as a Service (LBaaS)_ services online that enable you to directly plug in load balancers into your application without you having to do any sort of setup.
你还可以在网上找到一些负载平衡器即服务（LBaaS）服务，使你能够直接将负载平衡器插入你的应用程序，而不需要你做任何形式的设置。

_Software load balancers_ are pretty advanced compared to _DNS load balancing_ as they consider many parameters such as _content hosted by the servers, cookies, HTTP headers, CPU and memory utilization, load on the network_, and so on to route traffic across the servers.
与 DNS 负载平衡相比，软件负载平衡器相当先进，因为它们考虑了许多参数，如服务器托管的内容、cookies、HTTP 头、CPU 和内存利用率、网络上的负载等，以便在服务器上路由流量。

They also continually perform health checks on the servers to keep an updated list of _in-service_ machines.
他们还不断地对服务器进行健康检查，以保持一个最新的在役机器列表。

Development teams prefer to work with _software load balancers_ as _hardware load balancers_ require specialists to manage them.
开发团队更喜欢与软件负载均衡器合作，因为硬件负载均衡器需要专家来管理它们。

[HAProxy](https://www.haproxy.com/) is one example of a _software load balancer_ that is used widely by the big guns in the industry to scale their systems, including _GitHub, Reddit, Instagram, AWS, Tumblr, StackOverflow_, and many more.
HAProxy 是软件负载均衡器的一个例子，被业界大佬们广泛用于扩展他们的系统，包括 GitHub、Reddit、Instagram、AWS、Tumblr、StackOverflow 等等。

Besides the _Round Robin algorithm_ which _DNS Load balancers_ use, _software load balancers_ leverage several other algorithms to efficiently route traffic across the machines. Let's take a look.
除了 DNS 负载平衡器使用的 Round Robin 算法外，软件负载平衡器还利用其他几种算法，在机器上有效地路由流量。让我们来看看。

## Algorithms/Traffic Routing Approaches Leveraged by Load Balancers [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Algorithms/Traffic-Routing-Approaches-Leveraged-by-Load-Balancers)

### Round Robin and Weighted Round Robin [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Round-Robin-and-Weighted-Round-Robin)

We know that the _Round Robin algorithm_ sends _IP addresses_ of machines sequentially to the clients. Parameters on the servers, such as _load_, their _CPU consumption_, and so on, are not taken into account when sending the _IP addresses_ to the clients.
我们知道，Round Robin 算法是按顺序将机器的 IP 地址发送给客户的。服务器上的参数，如负载、CPU 消耗等，在向客户发送 IP 地址时没有被考虑在内。

We have another approach known as the _Weighted Round Robin_ where based on the _server's compute_ and _traffic handling capacity_ weights are assigned to them. And then, based on server weights, traffic is routed to them using the _Round Robin algorithm_.
我们有另一种被称为加权循环的方法，根据服务器的计算和流量处理能力为它们分配权重。然后，根据服务器的权重，使用 Round Robin 算法将流量路由到它们。

With this approach, more traffic is converged to machines that can handle a higher traffic load, thus efficiently using the resources.
通过这种方法，更多的流量被汇聚到能够处理更高流量负载的机器上，从而有效地利用资源。

This approach is pretty useful when the service is deployed in different data centers having different compute capacities. More traffic can be directed to the larger data centers containing more machines.
当服务被部署在具有不同计算能力的不同数据中心时，这种方法是相当有用的。更多的流量可以被引导到包含更多机器的大型数据中心。

### Least connections [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Least-connections)

When using this algorithm, the traffic is routed to the machine that has the least open connections of all the machines in the cluster. There are two approaches to implement this.
当使用这种算法时，流量被路由到集群中所有机器中开放连接最少的机器。有两种方法来实现这一点。

In the first, it is assumed that all the requests will consume an equal amount of server resources, and the traffic is routed to the machine with the least open connections based on this assumption.
第一种，假设所有的请求将消耗等量的服务器资源，基于这一假设，流量被路由到具有最少开放连接的机器。

Now, in this scenario, there is a possibility that the machine with the least open connections might already be processing requests demanding most of its _CPU_ power. Routing more traffic to this machine would not be a good idea.
现在，在这种情况下，有一种可能性，即具有最小开放连接的机器可能已经在处理需要大部分 CPU 功率的请求。将更多的流量路由到这台机器并不是一个好主意。

In the other approach, the _CPU utilization_ and the _request processing time_ of the chosen machine is also taken into account before routing the traffic to it. Machines with the shortest request processing time, smallest CPU utilization, and the least open connections are the right candidates to process future client requests.
在另一种方法中，在将流量路由到所选机器之前，也会考虑到该机器的 CPU 利用率和请求处理时间。具有最短的请求处理时间、最小的 CPU 利用率和最少的开放连接的机器是处理未来客户请求的合适人选。

The least connections approach comes in handy when the server has long opened connections. For instance, consider persistent connections in a gaming application.
当服务器有长期开放的连接时，最少连接的方法就会派上用场。例如，考虑游戏应用中的持久连接。

### Random [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Random)

Following this approach, the traffic is randomly routed to the servers. The load balancer may also find similar servers in terms of existing load, request processing time, and so on. Then it randomly routes the traffic to these machines.
按照这种方法，流量被随机地路由到服务器上。负载均衡器也可以在现有负载、请求处理时间等方面找到类似的服务器。然后，它随机地将流量路由到这些机器上。

### Hash [#](https://www.educative.io/courses/web-application-software-architecture-101/q2J3l7z91O0#Hash)

In this approach, the _source IP_ where the request is coming from and the request URL are hashed to route the traffic to the backend servers.
在这种方法中，请求来自的源 IP 和请求的 URL 被哈希化，以将流量路由到后端服务器。

Hashing the _source IP_ ensures that the request of a client with a certain _IP_ will always be routed to the same server.
对源 IP 进行哈希处理可以确保使用某个 IP 的客户的请求总是被路由到同一个服务器。

This facilitates a better user experience as the server has already processed the initial client requests and holds the client's data in its local memory. There is no need for it to fetch the client session data from the session memory of the cluster and process the request. This reduces latency.
这有利于提供更好的用户体验，因为服务器已经处理了最初的客户端请求，并在其本地内存中保存了客户端的数据。它不需要从集群的会话存储器中获取客户端会话数据并处理请求。这就减少了延迟。

Hashing the _client IP_ also enables the client to re-establish the connection with the same server, that was processing its request in case the connection drops.
对客户端 IP 进行加密还可以使客户端与处理其请求的同一服务器重新建立连接，以备连接中断。

Hashing a _URL_ ensures that the request with that _URL_ always hits a certain cache that already has data on it. This is to ensure that there is no cache miss.
对一个 URL 进行哈希化处理，可以确保带有该 URL 的请求总是击中某个已经有数据的缓存。这是为了确保没有缓存丢失。

This also averts the need for duplicating data in every cache and is, thus, a more efficient way to implement caching.
这也避免了在每个缓存中重复数据的需要，因此是一种更有效的实现缓存的方式。

Well, this is pretty much it on the fundamentals of load balancing. In the next chapter, we will cover _monoliths_ and _microservices_.
好了，关于负载均衡的基本原理就讲到这里。在下一章，我们将介绍单体和微服务。

---

笔记：

硬件负载均衡器是高性能的物理硬件。它们位于应用服务器的前面，并根据与服务器的现有开放连接数、计算利用率和其他一些参数来分配负载。由于这些负载均衡器是物理硬件，它们需要维护和定期更新，就像任何其他服务器硬件需要的那样。与软件负载平衡器相比，它们的设置成本很高，而且它们的维护可能需要一定的技能。
如果企业内部有一个 IT 团队和网络专家，他们可以照顾这些负载均衡器。否则，开发人员要在供应商的一些协助下，围绕如何设置这些硬件负载均衡器进行思考。这就是为什么开发人员更喜欢与软件负载平衡器合作。当使用硬件负载均衡器时，我们可能还需要过度配置，以处理峰值流量，而软件负载均衡器则不存在这种情况。
挑选硬件负载均衡器主要是因为其一流的性能。

软件负载均衡器可以安装在商品硬件和虚拟机上。它们更具成本效益，并为开发人员提供更多的灵活性。与硬件负载均衡器相比，软件负载均衡器可以轻松升级和配置。
你还可以在网上找到一些负载平衡器即服务（LBaaS）服务，使你能够直接将负载平衡器插入你的应用程序，而不需要你做任何形式的设置。
与 DNS 负载平衡相比，软件负载平衡器相当先进，因为它们考虑了许多参数，如服务器托管的内容、cookies、HTTP 头、CPU 和内存利用率、网络上的负载等，以便在服务器上路由流量。
他们还不断地对服务器进行健康检查，以保持一个最新的在役机器列表。
开发团队更喜欢与软件负载均衡器合作，因为硬件负载均衡器需要专家来管理它们。

加权循环
根据服务器的计算和流量处理能力为它们分配权重。然后，根据服务器的权重，使用 Round Robin 算法将流量路由到它们。通过这种方法，更多的流量被汇聚到能够处理更高流量负载的机器上，从而有效地利用资源。
当服务被部署在具有不同计算能力的不同数据中心时，这种方法是相当有用的。更多的流量可以被引导到包含更多机器的大型数据中心。

最小连接
流量被路由到集群中所有机器中开放连接最少的机器。
有两种方法来实现这一点：
第一种，假设所有的请求将消耗等量的服务器资源，基于这一假设，流量被路由到具有最少开放连接的机器。这种情况下，有一种可能性，即具有最小开放连接的机器可能已经在处理需要大部分 CPU 功率的请求。将更多的流量路由到这台机器并不是一个好主意。
另一种方法，在将流量路由到所选机器之前，也会考虑到该机器的 CPU 利用率和请求处理时间。具有最短的请求处理时间、最小的 CPU 利用率和最少的开放连接的机器是处理未来客户请求的合适人选。当服务器有长期开放的连接时，最少连接的方法就会派上用场。

Hash
请求来自的源 IP 和请求的 URL 被哈希化，以将流量路由到后端服务器。
对源 IP 进行哈希处理可以确保使用某个 IP 的客户的请求总是被路由到同一个服务器。这有利于提供更好的用户体验，因为服务器已经处理了最初的客户端请求，并在其本地内存中保存了客户端的数据。它不需要从集群的会话存储器中获取客户端会话数据并处理请求。这就减少了延迟。
对客户端 IP 进行加密还可以使客户端与处理其请求的同一服务器重新建立连接，以备连接中断。
对一个 URL 进行哈希化处理，可以确保带有该 URL 的请求总是击中某个已经有数据的缓存。这是为了确保没有缓存丢失。这也避免了在每个缓存中重复数据的需要，因此是一种更有效的实现缓存的方式。
