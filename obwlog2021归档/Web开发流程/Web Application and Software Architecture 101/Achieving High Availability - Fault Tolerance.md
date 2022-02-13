In this lesson, you will learn about fault tolerance and designing a HA fault tolerant service.
在本课中，你将了解到容错和设计一个 HA 容错服务。

There are several approaches to achieve HA. The most important of them is to make the system fault tolerant.
有几种方法来实现 HA。其中最重要的是使系统具有容错性。

## What is fault tolerance? [#](https://www.educative.io/courses/web-application-software-architecture-101/N0PgXy1kq1m#What-is-fault-tolerance?)

> _Fault tolerance_ is a system's ability to stay up despite taking hits.
> 容错性是指一个系统在遭受打击后仍能保持运行的能力。

A fault-tolerant system is equipped to handle faults. Being fault-tolerant is an essential element in designing life-critical systems.
一个容错的系统具备处理故障的能力。容错是设计生命关键型系统的一个基本要素。

Out of several _instances/node_, running the service, a few go offline and bounce back all the time. In case of these internal failures, the system can work at a reduced level without, going down entirely.
在运行服务的几个实例/节点中，有几个会脱机，但会一直反弹。在这些内部故障的情况下，系统可以在一个较低的水平上工作而不会完全瘫痪。

A very basic example of a system that is fault-tolerant is a social networking application. In the case of backend node failures, a few services of the app such as image upload, post likes etc. may stop working. However, the application as a whole will still be up. This approach is also technically known as _fail soft_.
一个非常基本的容错系统的例子是一个社交网络应用。在后端节点发生故障的情况下，应用程序的一些服务，如图片上传、帖子喜欢等可能会停止工作。然而，应用程序作为一个整体仍将是正常的。这种方法在技术上也被称为故障软。

## Designing a highly available fault-tolerant service – Architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/N0PgXy1kq1m#Designing-a-highly-available-fault-tolerant-service-%E2%80%93-Architecture)

To achieve high availability at the application level, the entire massive service is architecturally broken down into smaller loosely coupled services called **micro services**.
为了实现应用层面的高可用性，整个庞大的服务在架构上被分解成更小的松散耦合的服务，称为微服务。

![[Web开发流程/Web Application and Software Architecture 101/Microservice Architecture.png]]

There are many upsides of splitting a big monolith into several micro services, as it provides:
将一个大的单体分割成几个微服务有很多好处，因为它提供了：

- Easier management
更加容易管理
- Easier development
更容易开发
- Ease of adding new features
易于增加新的功能
- Ease of maintenance
易于维护
- High availability
高可用性

Every micro service takes the onus of running different features of an application such as image upload, comment, instant messaging etc.
每个微服务都承担着运行应用程序不同功能的责任，如图片上传、评论、即时通讯等。

So, even if a few services go down the application as a whole is still up.
因此，即使有几个服务出现故障，整个应用程序仍然是正常的。

---

笔记：

实现 HA 最重要的是使系统具有容错性。

容错性：一个系统在遭受打击后仍能保持运行的能力。
一个容错的系统具备处理故障的能力，容错是设计生命关键型系统的一个基本要素。
一个非常基本的容错系统的例子是一个社交网络应用：在后端节点发生故障的情况下，应用程序的一些服务，如图片上传、评论、即时通讯等可能会停止工作。然而，应用程序作为一个整体仍将是正常的。

为了实现应用层面的高可用性，整个庞大的服务在架构上被**分解**成更小的松散耦合的服务，称为微服务。每个微服务都承担着运行应用程序不同功能的责任，如图片上传、评论、即时通讯等。因此，即使有几个服务出现故障，整个应用程序仍然是正常的。
