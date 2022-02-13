In this lesson, you will learn about which type of scaling is best for a given scenario.
在本课中，您将了解哪种扩展类型最适合给定场景。

## Pros and cons of vertical and horizontal scaling [#](https://www.educative.io/courses/web-application-software-architecture-101/xoEWLMnmwoP#Pros-and-cons-of-vertical-and-horizontal-scaling)

This is the part where I talk about the pluses and minuses of both approaches.
这是我谈论两种方法优缺点的部分。

Vertical scaling for obvious reasons is simpler in comparison to scaling horizontally because we do not have to touch the code or make any complex distributed system configurations. It takes much less administrative, monitoring, and management efforts as opposed to managing a distributed environment.
与水平扩展相比，出于显而易见的原因，垂直扩展更简单，因为我们不必接触代码或进行任何复杂的分布式系统配置。与管理分布式环境相比，它需要更少的管理、监控和管理工作。

A major downside of vertical scaling is availability risk. The servers are powerful but few in number. There is always a risk of them going down and the entire website going offline, which doesn't happen when the system is scaled horizontally. It becomes more highly available.
垂直扩展的一个主要缺点是可用性风险。服务器功能强大，但数量很少。它们总是存在宕机和整个网站脱机的风险，这在系统水平扩展时不会发生。它变得更加高度可用。

## What about the code? Why does the code need to change when it has to run on multiple machines? [#](https://www.educative.io/courses/web-application-software-architecture-101/xoEWLMnmwoP#What-about-the-code?-Why-does-the-code-need-to-change-when-it-has-to-run-on-multiple-machines?)

If you need to run the code in a distributed environment, it needs to be _stateless_. There should be no state in the code. **What do I mean by that?**
如果你需要在分布式环境中运行代码，它需要是无状态的。代码中不应该有任何状态。我这么说是什么意思呢？

There can be no _static instances_ in the class. Static instances hold application data and if a particular server goes down all the static data/state is lost. The app is left in an inconsistent state.
类中不能有静态的实例。静态实例保存着应用程序的数据，如果某个服务器发生故障，所有的静态数据/状态都会丢失。应用程序就会处于一个不一致的状态。

Rather, use a persistent memory like a _Key-value_ store to hold the data and remove all the state/static variable from the class. This is why functional programming became so popular with distributed systems. The functions don't retain any state.
相反，使用像键值存储这样的持久性存储器来保存数据，并从类中删除所有的状态/静态变量。这就是为什么函数式编程在分布式系统中变得如此流行。函数不保留任何状态。

Always have a ballpark estimate on mind when designing your app. **How much traffic will it have to deal with?**
在设计你的应用程序时，总是要有一个大概的估计。它将需要处理多少流量？

Today, development teams are adopting a distributed micro-services architecture right from the start, and workloads are meant to be deployed on the cloud. So, inherently the workloads are horizontally scaled out on the fly.
今天，开发团队从一开始就采用分布式微服务架构，工作负载要部署在云上。因此，工作负载本来就是横向扩展的，可以随心所欲。

![[Microservice Architecture 1.png]]

The upsides of horizontally scaling include no limit to augmenting the hardware capacity. Data is replicated across different geographical regions as nodes and data centers are set up across the globe.
水平扩展的好处包括对增加硬件容量没有限制。随着节点和数据中心在全球范围内建立，数据会跨不同地理区域复制。

I'll discuss cloud, serverless, and microservices in the upcoming lessons. So, stay tuned.
我将在接下来的课程中讨论云、无服务器和微服务。所以，请继续关注。

## Which scalability approach is right for your app? [#](https://www.educative.io/courses/web-application-software-architecture-101/xoEWLMnmwoP#Which-scalability-approach-is-right-for-your-app?)

If your app is a utility or a tool that is expected to receive minimal consistent traffic, it may not be mission critical. For instance, an internal tool of an organization or something similar.
如果您的应用程序是一个实用程序或工具，预计会收到最少的一致流量，则它可能不是关键任务。例如，组织的内部工具或类似的东西。

Why bother hosting it in a distributed environment? A single server is enough to manage the traffic, so go ahead with vertical scaling when you know that the traffic load will not increase significantly.
为什么要在分布式环境中托管它呢？一台服务器足以管理流量，所以当你知道流量负载不会大幅增加时，就可以进行垂直扩展。

If your app is a public-facing social app like a social network, a fitness app, or something similar, then traffic is expected to spike exponentially in the near future. Both high availability and horizontal scalability is important to you.
如果你的应用程序是一个面向公众的社交应用程序，如社交网络，健身应用程序，或类似的东西，那么在不久的将来，流量预计将呈指数级激增。高可用性和横向可扩展性对你来说都很重要。

Build to deploy it on the cloud, and always have horizontal scalability in mind right from the start.
构建部署在云上，并从一开始就始终考虑到横向扩展性。

---

笔记：
与水平扩展相比，垂直扩展更简单，我们不必接触代码或进行任何复杂的分布式系统配置。与分布式环境相比，它需要更少的管理、监控和管理工作；垂直扩展的主要缺点是可用性风险。服务器功能强大，但数量很少，它们总是存在宕机和整个网站脱机的风险，这在水平扩展时不会发生。

如果你需要在分布式环境中运行代码，它需要是无状态的，代码中不应该有任何状态。
例如类中不能有静态实例。静态实例保存着应用程序的数据，如果某个服务器发生故障，所有的静态数据/状态都会丢失，应用程序就会处于一个不一致的状态。这就是为什么函数式编程在分布式中变得如此流行，因为函数不保留任何状态。

当你知道流量负载不会大幅增加时，就可以进行垂直扩展，几台机器升升级足矣；
如果你预计流量将呈指数级激增，高可用性和横向可扩展性对你来说都很重要。可以考虑构建部署在云上，并从一开始就考虑横向扩展。横向扩展的好处包括对增加硬件容量没有限制。随着节点和数据中心在全球范围内建立，数据会跨不同地理区域复制。
