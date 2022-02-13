In this lesson, you will learn about the pros and cons of monolithic architecture and when to choose it for your project.
在本课中，您将了解单体架构的优缺点以及何时为您的项目选择它。

## Pros of monolithic architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Pros-of-monolithic-architecture)
单体架构的优点
### Simplicity [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Simplicity)
简单性

Monolithic applications are simple to develop, test, deploy, monitor, and manage since everything resides in one repository.
单体应用程序易于开发、测试、部署、监控和管理，因为一切都驻留在一个存储库中。

There is no complexity of handling different components, making them work in conjunction with each other, monitoring several different components, and what not. Things are simple.
处理不同的组件、使它们相互协同工作、监控几个不同的组件等等并不复杂。事情很简单。

## Cons of monolithic architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Cons-of-monolithic-architecture)
单体架构的缺点
### Continuous deployment [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Continuous-deployment)
持续部署

_Continuous deployment_ is a pain in monolithic applications because even a minor code change in a layer necessitates a re-deployment of the entire application.
持续部署在单体应用中是一种痛苦，因为即使是某一层的微小代码变化，也需要重新部署整个应用。

### Regression testing [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Regression-testing)
回归测试

The downside of this is that we need a thorough _regression testing_ of the entire application after the deployment is done because the layers are tightly coupled with each other. A change in one layer impacts the other layers significantly.
这样做的坏处是，在部署完成后，我们需要对整个应用程序进行彻底的回归测试，因为各层之间是紧密耦合的。一个层的变化对其他层的影响很大。

### Single points of failure [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Single-points-of-failure)
单点故障

Monolithic applications have a _single point of failure_. If any of the layers has a bug, it can take down the entire application.
单片应用程序具有单点故障。如果任何层有错误，它可以关闭整个应用程序。

### Scalability issues [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Scalability-issues)
可扩展性问题

Flexibility and scalability are a challenge in monolith apps because a change in one layer often necessitates a change and testing in all the layers. As the code size increases, things might get a bit tricky to manage.
灵活性和可扩展性是单体应用程序中的一个挑战，因为一个层的更改通常需要对所有层进行更改和测试。随着代码大小的增加，管理起来可能会有些棘手。

### Cannot leverage heterogeneous technologies [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Cannot-leverage-heterogeneous-technologies)
不能利用异构技术

Building complex applications with a monolithic architecture are tricky because using heterogeneous technologies is difficult in a single codebase due to compatibility issues.
用单体架构构建复杂的应用程序是很棘手的，因为兼容性问题，在一个代码库中使用异构技术是很困难的。

It is tricky to use _Java_ and _NodeJS_ together in a single codebase, and when I say tricky, I am being generous. I am not sure if it is even possible.
在一个代码库中同时使用 Java 和 NodeJS 是很棘手的，当我说棘手的时候，我其实已经很委婉了。我不确定这是否可行。

### Not cloud-ready, hold state [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#Not-cloud-ready,-hold-state)
不适合云计算，保持状态

Generally, monolithic applications are not cloud-ready because they hold state in the static variables. An application to be cloud-native, to work smoothly, and to be consistent on the cloud has to be distributed and stateless.
一般来说，单体应用是不适合云计算的，因为它们在静态变量中持有状态。一个应用程序要想成为云原生的，顺利地工作，并在云上保持一致，就必须是分布式的和无状态的。

## When should you pick a monolithic architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/gx66LJKNjgG#When-should-you-pick-a-monolithic-architecture?)
什么时候应该选择单体架构？

Monolithic applications fit best for use cases where the requirements are pretty simple, and the app is expected to handle a limited amount of traffic. One example of this is an organization's internal tax calculation app or a similar open public tool.
单片机应用最适合需求相当简单的用例，而且应用预计会处理有限的流量。这方面的一个例子是一个组织的内部税收计算应用程序或类似的开放公共工具。

These are the use cases where the business is certain that there won't be exponential growth in the user base and traffic over time.
在这些用例中，企业确信用户群和流量不会随着时间的推移出现指数级的增长。

There are also instances where the dev teams decide to start with a monolithic architecture and later scale out to a distributed microservices architecture.
也有这样的情况，开发团队决定从单体架构开始，随后扩展到分布式微服务架构。

This helps them deal with the complexity of the application step by step when required. [This is exactly what LinkedIn did.](https://engineering.linkedin.com/architecture/brief-history-scaling-linkedin)
这有助于他们在需要时一步一步地处理应用程序的复杂性。这正是 LinkedIn 所做的。

In the next lesson, you will learn about microservice architecture.
在下一课中，你将了解到微服务架构。

---

笔记：

单体应用程序易于开发、测试、部署、监控和管理，因为一切都驻留在一个存储库中。方便处理不同的组件、使它们相互协同工作、监控几个不同的组件等等并不复杂。
持续部署在单体应用中是一种痛苦，因为即使是某一层的微小代码变化，也需要重新部署整个应用。在部署完成后，我们需要对整个应用程序进行彻底的回归测试，因为各层之间是紧密耦合的。一个层的变化对其他层的影响很大。

缺点：
1. 灵活性和可扩展性是单体应用程序中的一个挑战，因为一个层的更改通常需要对所有层进行更改和测试。随着代码大小的增加，管理起来可能会有些棘手。
2. 因为兼容性问题，在一个代码库中使用异构技术是很困难的。
3. 不适合云计算。
