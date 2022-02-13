In this lesson, we will discuss monolithic architecture.
在本课中，我们将讨论单体架构。

## What is monolithic architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/7DX0poDNLl1#What-is-monolithic-architecture?)

> An application has a monolithic architecture if it contains the entire application code in a single codebase.
> 如果一个应用程序在一个单一的代码库中包含整个应用程序代码，那么它就是一个单体架构。

A monolithic application is a self-contained, single-tiered software application. This is unlike the microservices architecture, where different modules are responsible for running respective tasks and features of an app.
单体应用是一个独立的、单层的软件应用。这与微服务架构不同，在微服务架构中，不同的模块负责运行应用程序的各自任务和功能。

The diagram below represents a monolithic architecture:
下图代表了一个单体架构。

![[Monolithic Architecture Database.png]]

In a monolithic web app, all the different layers of the app, UI, business, data access, etc., are in the same codebase.
在一个单体式的 Web 应用程序中，应用程序的所有不同层，UI，业务，数据访问等，都在同一个代码库中。

After the _controller_, we have the _Service Layer interface_ and _Class_ implementations of the interface. The _business logic_ goes in the _Object Domain model_, and a bit also goes into the Service, Business, and _Repository/DAO \[Data Access Object\]_ classes.
在控制器之后，我们有服务层接口和该接口的类实现。业务逻辑在对象域模型中，也有一些在服务、业务和存储库/DAO\[数据访问对象\]类中。

![[Layers of a Web Appliction.png]]

Monolithic apps are simple to build, test, and deploy compared to a microservices architecture.
与微服务架构相比，单体应用的构建、测试和部署都很简单。

There are times during the initial stages of a business when teams chose to move forward with a monolithic architecture, intending to branch out into a distributed, microservices architecture later.
在企业的初始阶段，有时团队会选择以单体架构的方式前进，打算以后再分支到分布式的微服务架构。

Well, this decision has several trade-offs, and there is no standard solution to this.
那么，这个决定有几个权衡因素，而且没有标准的解决方案。

In the present computing landscape, applications are being built and deployed on the cloud. A wise decision would be to pick the loosely coupled stateless microservices architecture from the start if you expect things to grow at a significant pace in the future.
在目前的计算环境中，应用程序正在云上构建和部署。一个明智的决定是，如果你期望事情在未来以显著的速度增长，那么从一开始就选择松散耦合的无状态微服务架构。

Because re-writing stuff has its costs, stripping down things in a tightly coupled architecture and re-writing stuff demands a lot of resources and time.
因为重写东西是有成本的，剥离紧耦合架构中的东西并重写东西需要大量的资源和时间。

On the flip side, if your requirements are simple, why bother writing a microservices architecture? Running different modules in conjunction with each other isn't a walk in the park.
反过来说，如果你的要求很简单，为什么还要写一个微服务架构？运行不同的模块并不是件容易的事。

Let's go through some of the pros and cons of monolithic architecture.
让我们来看看单体架构的一些优点和缺点。

---

笔记：

单体应用是一个独立的、单层的软件应用。
在一个单体式的 Web 应用程序中，应用程序的所有不同层，UI，业务，数据访问等都在同一个代码库中。单体应用的构建、测试和部署都很简单。
如果你期望事情在未来以显著的速度增长，那么从一开始就选择松散耦合的无状态微服务架构。重写东西是有成本的，剥离紧耦合架构并重写代码需要大量的资源和时间。
