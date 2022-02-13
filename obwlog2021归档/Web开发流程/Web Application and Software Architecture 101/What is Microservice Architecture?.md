In this lesson, you will learn about microservice architecture.
在本课中，您将了解微服务架构。

## What is microservices architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/gxpGnmG7zBr#What-is-microservices-architecture?)

> In a microservices architecture, different features/tasks are split into separate respective modules/codebases that work in conjunction to form a large service as a whole.
> 在微服务架构中，不同的功能/任务被分割成独立的各自的模块/代码库，这些模块/代码库协同工作，形成一个大型服务的整体。

Remember the _Single Responsibility_ and the _Separation of Concerns_ principles? Both principles are applied in a microservices architecture.
还记得单一责任和关注点分离的原则吗？这两个原则在微服务架构中都有应用。

This particular architecture facilitates easier and cleaner app maintenance, feature development, testing, and deployment compared to a monolithic architecture.
与单体架构相比，这种特殊的架构有利于更简单、更干净的应用维护、功能开发、测试和部署。

Imagine accommodating every feature in a single repository. **How complex would things be?** It would be a maintenance nightmare.
想象一下，在一个单一的存储库中容纳所有的功能。事情会有多复杂？这将是一个维护的噩梦。

Also, since the project is large, it is expected to be managed by several different teams. When modules are separate, they can be assigned to respective teams with minimal fuss, smoothing out the development process.
另外，由于项目很大，预计将由几个不同的团队来管理。当模块是独立的，它们可以被分配给各自的团队，以最小的麻烦，使开发过程更加顺畅。

**Did I mention scalability?** To scale, we need to split things up. We need to scale out when we can't scale up further. Microservices architecture is inherently designed to scale.
我有没有提到可扩展性？为了扩展，我们需要把事情拆开。当我们不能进一步扩大规模时，我们就需要缩小规模。微服务架构本身就是为扩展而设计的。

The diagram below represents a microservices architecture:
下图代表了一个微服务架构：

![[Microservice Architecture 2.png]]

Every service ideally has a separate database, so there are no single points of failure or system bottlenecks.
每个服务最好都有一个独立的数据库，所以没有单点故障或系统瓶颈。

Let's go through some of the pros and cons of using a microservices architecture.
让我们来看看使用微服务架构的一些优点和缺点。

---

笔记：

在微服务架构中，不同的功能/任务被分割成独立的各自的模块/代码库，这些模块/代码库协同工作，形成一个大型服务的整体。与单体架构相比，这种架构有利于更简单、更干净的应用维护、功能开发、测试和部署。
每个模块都是独立的，因此它们可以被分配给各自的团队，使开发过程更加顺畅。微服务架构本身就是为扩展而设计的。
每个服务都有一个独立的数据库，所以没有单点故障或系统瓶颈。
