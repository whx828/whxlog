In this lesson, we will explore the two types of scaling: Vertical and Horizontal Scaling.
在本课中，我们将探讨两种类型的扩展：垂直和横向扩展。

To scale well, an application needs solid computing power. The servers should be powerful enough to handle increased traffic loads.
为了良好的扩展，一个应用程序需要坚实的计算能力。服务器应该足够强大，以处理增加的流量负荷。

There are two ways to scale an application:
有两种方法来扩展一个应用程序：

undefined Vertical scaling
垂直扩展
2.  Horizontal scaling
横向扩展

## What is vertical scaling? [#](https://www.educative.io/courses/web-application-software-architecture-101/my5oG6ZgOZn#What-is-vertical-scaling?)

Vertical scaling means adding more power to your server. Let's say your app is hosted by a server with 16 gigs of RAM. To handle the increased load you increase the RAM to 32 gigs. Here, you have vertically scaled the server.
垂直扩展意味着为您的服务器增加更多功能。假设您的应用由具有 16G 内存的服务器托管。为了处理增加的负载，您将 RAM 增加到 32G。在这里，您已经垂直扩展了服务器。

![[Vertical Scalability.png]]

Ideally, when the traffic starts to build on your app the first step should be to scale vertically. Vertical scaling is also called _scaling up_.
理想情况下，当你的应用程序的流量开始增加时，第一步应该是垂直扩展。垂直扩展也被称为向上扩展。

In this type of scaling we increase the power of the hardware running the app. This is the simplest way to scale because it doesn't require any code refactoring or making any complex configurations and stuff. I'll discuss further down the lesson, why code refactoring is required when we horizontally scale the app.
在这种类型的扩展中，我们增加了运行应用程序的硬件的能力。这是最简单的扩展方式，因为它不需要任何代码重构或进行任何复杂的配置和东西。我将在课程中进一步讨论，为什么当我们横向扩展应用程序时需要代码重构。

However, there is only so much we can do when scaling vertically. There is a limit to the capacity we can augment for a single server.
然而，在垂直扩展时，我们能做的只有这么多。我们可以为单个服务器增加的容量是有限的。

A good analogy would be to think of a multi-story building. We can keep adding floors to it but only up to a certain point. What if the number of people in need of a flat keeps rising? We can't scale the building up to the moon for obvious reasons.
一个很好的类比是考虑多层建筑。我们可以继续添加楼层，但只能达到一定的程度。如果需要公寓的人数不断增加怎么办？出于显而易见的原因，我们无法将建筑物扩大到月球。

Now is the time to build more buildings. This is where _horizontal scalability_ comes in.
现在是建造更多建筑物的时候了。这就是水平可扩展性的用武之地。

When the traffic is too great to be handled by single hardware, we bring in more servers to work together.
当流量太大而无法由单个硬件处理时，我们会引入更多服务器来协同工作。

## What is horizontal scaling? [#](https://www.educative.io/courses/web-application-software-architecture-101/my5oG6ZgOZn#What-is-horizontal-scaling?)

Horizontal scaling, also known as _scaling out_, means adding more hardware to the existing hardware resource pool. This increases the computational power of the system as a whole.
水平扩展，也称为横向扩展，是指在现有硬件资源池中添加更多硬件。这增加了整个系统的计算能力。

![[Horizontal Scalability.png]]

Now the increased traffic influx can be easily dealt with the increased computational capacity and there is literally no limit to how much we can scale horizontally assuming we have infinite resources. We can keep adding servers after servers, setting up data centers after data centers.
现在，随着计算能力的增加，可以轻松应对增加的流量流入，并且假设我们拥有无限资源，我们可以横向扩展的规模实际上没有限制。我们可以不断地添加一个接一个的服务器，一个接一个地建立数据中心。

Horizontal scaling also provides us with the ability to dynamically scale in real-time as the traffic on our website increases and decreases over a period of time as opposed to vertical scaling which requires pre-planning and a stipulated time to be pulled off.
水平扩展还使我们能够随着我们网站上的流量在一段时间内增加和减少而实时动态扩展，而不是像垂直扩展那样还需要预先计划并得在规定的时间内来完成。

## Cloud elasticity [#](https://www.educative.io/courses/web-application-software-architecture-101/my5oG6ZgOZn#Cloud-elasticity)

The biggest reason why _cloud computing_ become so popular in the industry is the ability to scale up and down dynamically. The ability to use and pay only for the resources required by the website became a trend for obvious reasons.
云计算在业界如此流行的最大原因是能够动态地向上和向下扩展。出于显而易见的原因，仅使用和支付网站所需资源的能力成为一种趋势。

If the site has a heavy traffic influx more server nodes get added and when it doesn't, the dynamically added nodes are removed.
如果站点有大量流量涌入，则会添加更多服务器节点，如果没有，则删除动态添加的节点。

This approach is known as cloud elasticity and saves businesses lots of money every single day. It indicates the stretching and returning to the original infrastructural computational capacity.
这种方法被称为云弹性，每天为企业节省大量资金。表示基础设施计算能力的拉伸和回归。

Having multiple server nodes on the backend also helps the website staying alive online all the time even if a few server nodes crash. This is known as _high availability_. We'll get to that in the upcoming lessons.
在后端拥有多个服务器节点也有助于网站始终保持在线状态，即使有几个服务器节点崩溃也无伤大雅。这称为高可用性。我们将在接下来的课程中讨论这个问题。

---

笔记：
有几种方法来扩展一个应用程序：
1. 垂直扩展
垂直扩展意味着为您的服务器增加更多功能。理想情况下，当你的应用程序的流量开始增加时，第一步应该是垂直扩展。垂直扩展也被称为向上扩展：增加运行应用程序的**单个硬件**的能力。它不需要任何代码重构或进行任何复杂的配置。然而，在垂直扩展时，可以为单个服务器增加的容量是有限的。
2. 横向扩展
横向扩展，也称为水平扩展，是指在现有硬件资源池中**添加更多硬件**协同工作。这增加了整个系统的计算能力，使得我们能够随网站上的流量在一段时间内增加和减少而实时动态扩展，而不是像垂直扩展那样还需要预先计划并得在规定的时间内来完成。
3. 云计算
云计算：能够动态地向上和向下扩展。如果站点有大量流量涌入，则添加更多服务器节点，如果没有，则删除动态添加的节点。这种方法被称为云弹性，为企业节省大量资金。在后端拥有多个服务器节点也有助于网站始终保持在线状态，即使有几个服务器节点崩溃也无伤大雅。
