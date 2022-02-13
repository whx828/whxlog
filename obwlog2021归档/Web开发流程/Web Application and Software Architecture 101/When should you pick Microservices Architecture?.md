In this lesson, you will learn about the pros and cons of microservice architecture and when to pick it for your project.
在本课中，你将了解到微服务架构的优点和缺点，以及何时为你的项目选择它。

## Pros of microservice architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#Pros-of-microservice-architecture)
微服务架构的优点

### No Single Points of failure [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#No-Single-Points-of-failure)
没有单点故障

Since microservices is a loosely coupled architecture, there is no single point of failure. Therefore, even if a few of the services go down, the application as a whole is still up.
由于微服务是一个松散耦合的架构，没有单点故障。因此，即使有几个服务出现故障，整个应用程序仍然是正常的。

### Leverage the heterogeneous technologies [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#Leverage-the-heterogeneous-technologies)
利用异构技术

Every component interacts with each other via a _REST API Gateway interface_. The components can leverage the polyglot persistence architecture and other heterogeneous technologies together like _Java_, _Python_, _Ruby_, _NodeJS_, etc.
每个组件都通过 REST API 网关接口相互交互。这些组件可以同时利用多语言持久性架构和其他异构技术，如 Java、Python、Ruby、NodeJS 等。

_Polyglot persistence_ uses multiple database types, like _SQL_ and _NoSQL_ together in an architecture. We will discuss this in detail in the database lesson.
Polyglot 持久性在一个架构中使用多种数据库类型，例如 SQL 和 NoSQL。我们将在数据库课程中详细讨论这一点。

### Independent and continuous deployments [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#Independent-and-continuous-deployments)
独立和持续部署

The deployments can be independent and continuous. We can have dedicated teams for every microservice, and it can be scaled independently without impacting other services.
部署可以是独立的和连续的。我们可以为每个微服务配备专门的团队，并且可以独立扩展而不影响其他服务。

## Cons of microservices architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#Cons-of-microservices-architecture)
微服务架构的缺点

### Complexities in management [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#Complexities-in-management)
管理上的复杂性

Microservices is a distributed environment where there are so many nodes running together. As a result, managing and monitoring them gets complex.
微服务是一个分布式环境，有许多节点在一起运行。因此，管理和监控它们变得很复杂。

We need to set up additional components to manage microservices such as a node manager like _Apache Zookeeper_, which is a _distributed tracing_ service for monitoring the nodes etc.
我们需要建立额外的组件来管理微服务，比如像 Apache Zookeeper 这样的节点管理器，它是一个用于监控节点的分布式跟踪服务等。

We need more skilled resources and maybe a dedicated team to manage these services.
我们需要更多的技术资源，也许需要一个专门的团队来管理这些服务。

### No strong consistency [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#No-strong-consistency)
没有强一致性

_Strong consistency_ is hard to guarantee in a distributed environment. Things are _eventually consistent_ across the nodes, and this limitation is due to the distributed design.
强一致性在分布式环境中很难保证。事情最终在各节点之间是一致的，这种限制是由于分布式设计造成的。

We will discuss both strong and eventual consistencies in the database chapter.
我们将在数据库章节中讨论强一致性和最终一致性。

## When should you pick a microservices architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/qZm36XD3EX0#When-should-you-pick-a-microservices-architecture?)
你应该在什么时候选择微服务架构？

The microservice architecture fits best for complex use cases and for apps that expect traffic to increase exponentially in the future, like a fancy social network application.
微服务架构最适合复杂的用例，也最适合预计未来流量会成倍增长的应用，比如一个花哨的社交网络应用。

A typical social networking application has various components such as messaging, real-time chat, LIVE video streaming, image uploads, Like and Share features, etc.
一个典型的社交网络应用有各种组件，如消息传递、实时聊天、现场视频流、图片上传、赞和分享功能等。

In this scenario, I would suggest developing each component separately, keeping the _Single Responsibility_ and the _Separation of Concerns_ principles in mind.
在这种情况下，我建议分别开发每个组件，牢记单一责任和关注点分离的原则。

Writing every feature in a single codebase would take no time to become a mess.
在一个单一的代码库中编写每一个功能将不费吹灰之力，成为一个烂摊子。

So, by now, we have gone through three approaches in the context of monolithic and microservices:
所以，到现在为止，我们已经经历了在单体和微服务方面的三种方法。

1.  Picking a monolithic architecture
选择一个单体架构
2.  Picking a microservice architecture
挑选一个微服务架构
3.  Starting with a monolithic architecture and later scaling out into a microservice architecture.
从单体架构开始，后来扩展到微服务架构。

Picking a monolithic or a microservice architecture largely depends on our use case.
选择单体还是微服务架构在很大程度上取决于我们的用例。

I'll suggest keeping things simple and having a thorough understanding of the requirements. Get the lay of the land, build something only when you need it, and keep evolving the code iteratively. This is the right way to go.
我建议保持简单，并对需求有一个彻底的了解。了解土地的布局，只在需要时才建立一些东西，并不断地迭代进化代码。这才是正确的方法。

---

笔记：

微服务是一个松散耦合的架构，没有单点故障。因此，即使有几个服务出现故障，整个应用程序仍然是正常的。
每个组件都通过 REST API 网关接口相互交互。这些组件可以同时利用多语言持久性架构和其他异构技术，如 Java、Python、Ruby、NodeJS 等。
可以为每个微服务配备专门部署，并且可以独立扩展而不影响其他服务。

微服务需要建立额外的组件来管理微服务，比如像 Apache Zookeeper 这样的节点管理器，它是一个用于监控节点的分布式跟踪服务等。

微服务架构最适合复杂的用例，也最适合预计未来流量会成倍增长的应用。例如一个典型的社交网络应用，有各种组件，如消息传递、实时聊天、现场视频流、图片上传、赞和分享功能等。
建议的方案是分别开发每个组件，牢记单一责任和关注点分离的原则。
