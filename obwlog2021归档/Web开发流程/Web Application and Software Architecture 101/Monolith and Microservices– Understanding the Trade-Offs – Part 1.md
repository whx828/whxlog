This lesson discusses the trade-offs involved when choosing between a monolith and microservices architecture
本课讨论在单体架构和微服务架构之间进行选择时所涉及的权衡取舍

So far, in this chapter, we have discussed what _monolith_ is, what a _microservice_ is, their pros and cons, and when to pick which. This lesson will continue our discussion on the trade-offs involved when choosing between a monolith and microservices architecture to design our application.
到目前为止，在本章中，我们已经讨论了什么是单体，什么是微服务，它们的优缺点，以及何时选择哪个。本课将继续讨论在选择单体架构和微服务架构来设计我们的应用程序时所涉及的权衡。

## Fault isolation [#](https://www.educative.io/courses/web-application-software-architecture-101/YQW2ZrPzgMp#Fault-isolation)
故障隔离

When we have a microservices architecture in place it's easy for us to isolate faults and debug them. When a glitch occurs in a particular service, we just have to fix the issue in that service without the need to scan the entire codebase to locate and fix the issue. This is also known as _fault isolation_.
当我们有了一个微服务架构，我们就很容易隔离故障并进行调试。当某个服务出现故障时，我们只需修复该服务中的问题，而不需要扫描整个代码库来定位和修复该问题。这也被称为故障隔离。

Even if the service goes down due to the fault, the other services are up and running. This has a minimal impact on the system.
即使该服务因故障而停机，其他服务也能正常运行。这对系统的影响是最小的。

## Development team autonomy [#](https://www.educative.io/courses/web-application-software-architecture-101/YQW2ZrPzgMp#Development-team-autonomy)
开发团队自治

In the case of a monolith architecture, if the number of developers and the teams working on a single codebase grows beyond a certain number, it may impede the productivity and the velocity of the teams.
在单体架构的情况下，如果开发人员和开发单个代码库的团队数量超过一定数量，则可能会阻碍团队的生产力和速度。

In this scenario, things become a little tricky to manage. First off, as the size of the codebase increases, the compile-time and test runtime increases too. This is because, in a monolith architecture, the entire codebase has to be compiled as opposed to just compiling the module we work on.
在这种情况下，事情变得有点难以管理。首先，随着代码库大小的增加，编译时间和测试运行时间也会增加。这是因为，在单体架构中，必须编译整个代码库，而不是只编译我们工作的模块。

A code change made, in the codebase, by any other team has a direct impact on the features we develop. It may even break the functionality of our feature. Due to this a thorough regression testing is required every time anyone pushes new code or an update to production.
任何其他团队在代码库中所做的代码更改都会直接影响我们开发的功能。它甚至可能会破坏我们功能的功能。因此，每次有人推送新代码或更新到生产环境时，都需要进行彻底的回归测试。

Also, as the code is pushed to production, we need all the teams to stop working on the codebase until the change is pushed to production.
此外，随着代码被推送到生产环境，我们需要所有团队停止在代码库上工作，直到将更改推送到生产环境。

The code pushed by a certain team may also require approval from other teams in the organization working on the same codebase. This process is a bottleneck in the system.
某个团队推送的代码也可能需要组织中使用同一代码库的其他团队的批准。这个过程是系统中的一个瓶颈。

On the contrary, in the case of microservices separate teams have complete ownership of their codebases. They have the complete development and deployment autonomy over their modules with separate deployment pipelines. Code management becomes easier. It becomes easier to scale individual services based on their traffic load patterns.
相反，在微服务的情况下，单独的团队对其代码库拥有完全的所有权。他们通过单独的部署管道对其模块拥有完全的开发和部署自主权。代码管理变得更容易。根据流量负载模式扩展单个服务变得更容易。

So, if you need to move fast, quickly launch a lot of features to the market and scale. Moving forward with microservices architecture is a good bet.
因此，如果您需要快速行动，请快速向市场推出大量功能并进行扩展。推进微服务架构是一个不错的选择。

Having a microservices architecture sounds delightful but we cannot ignore the increase in the complexity in the architecture due to this. Adopting microservices has its costs.
拥有微服务架构听起来令人愉快，但我们不能忽视因此而增加的架构复杂性。采用微服务是有代价的。

With the microservices architecture comes the need to set up _distributed logging, monitoring, inter-service communication, service discovery, alerts, tracing, build_ and _release pipelines, health checks_, and so on. You may even have to write a lot of custom tooling from scratch for yourself.
微服务架构需要设置分布式日志记录、监控、服务间通信、服务发现、警报、跟踪、构建和发布管道、健康检查等。您甚至可能不得不为自己从头开始编写大量自定义工具。

So, I think you get the idea. There are always trade-offs involved, and there is no perfect solution. We need to be crystal clear on our use case and see what architecture suits our needs best.
所以，我想你明白了。总是需要权衡取舍，没有完美的解决方案。我们需要对我们的用例非常清楚，看看哪种架构最适合我们的需求。

Let's understand this further with the help of the real-world example of a company called _Segment_ that started with a monolith architecture, moved to microservices and then moved back again to the monolith architecture.
让我们借助一家名为 Segment 的公司的真实示例来进一步理解这一点，该公司从单体架构开始，转移到微服务，然后又回到单体架构。

## Segment – From monolith to microservices and back again to the monolith [#](https://www.educative.io/courses/web-application-software-architecture-101/YQW2ZrPzgMp#Segment-%E2%80%93-From-monolith-to-microservices-and-back-again-to-the-monolith)
Segment -- 从单体到微服务再回到单体

[Segment](https://segment.com/) is a customer data platform that originally started with a monolith and then later split it into microservices. As their business gained traction, they again decided to revert to the monolith architecture.
Segment 是一个客户数据平台，最初是从单体应用开始，然后将其拆分为微服务。随着他们的业务获得牵引力，他们再次决定恢复到单体架构。

_Why did they do that?_
他们为什么这样做？

Let's take a look.
让我们来看看。

The segment engineering team split their monolith into microservices for fault isolation and easy debugging of issues in the system.
分段工程团队将他们的单体应用拆分为微服务，以隔离故障并轻松调试系统中的问题。

Fault isolation with microservices helped them minimize the damage a fault caused in the system. It was confined to a certain service as opposed to impacting, even bringing down the entire system as a whole.
微服务的故障隔离帮助他们将故障对系统造成的损害降到最低。它仅限于某种服务，而不是影响，甚至使整个系统瘫痪。

The original monolith architecture had low management overhead but had a single point of failure. A glitch in a certain functionality had the potential to impact the entire system.
最初的单体架构管理开销较低，但存在单点故障。某些功能的故障可能会影响整个系统。

Segment integrates data from many different data providers into their systems. As the business gained traction, they integrated more data providers into their system creating a separate microservice for every data provider. The increase in the number of microservices led to a significant increase in the complexity of their architecture, subsequently taking a toll on their productivity.
Segment 将来自许多不同数据提供商的数据集成到他们的系统中。随着业务的发展，他们将更多的数据提供者集成到他们的系统中，为每个数据提供者创建了一个单独的微服务。微服务数量的增加导致其架构的复杂性显着增加，随后对其生产力产生了影响。

The defects with regards to microservices started increasing significantly. They had three engineers solely dedicated to getting rid of these defects to keep the system online. This operational overhead became resource-intensive and slowed down the organization immensely.
微服务方面的缺陷开始显着增加。他们有三名工程师专门致力于消除这些缺陷以保持系统在线。这种运营开销变得资源密集型并极大地减慢了组织的速度。

To tackle the issue, they made the decision to move back to monolith giving up on fault isolation and other nice things that the microservices architecture brought along.
为了解决这个问题，他们决定回到单体架构，放弃故障隔离和微服务架构带来的其他好处。

They ended up with an architecture with a single code repository that they called _Centrifuge_ that handled billions of messages per day delivered to multiple APIs.
他们最终建立了一个架构，其中包含一个他们称为 Centrifuge 的单一代码存储库，每天处理数十亿条传递到多个 API 的消息。

Let's dive deeper into their architecture in the next lesson.
让我们在下一课中更深入地了解他们的架构。

---

笔记：

使用微服务架构很容易隔离故障并进行调试。当某个服务出现故障时，只需修复该服务中的问题，而不需要扫描整个代码库来定位和修复该问题。这也被称为故障隔离。即使该服务因故障而停机，其他服务也能正常运行。这对系统的影响是最小的。

单体架构下，如果开发人员和开发单个代码库的团队数量超过一定数量，则可能会阻碍团队的生产力和速度；随着代码库大小的增加，编译时间和测试运行时间也会增加。因为在单体架构中必须编译整个代码库，而不是只编译我们工作的模块。任何其他团队在代码库中所做的代码更改都会直接影响我们开发的功能。甚至可能会破坏我们功能的实现。因此每次有人推送新代码或更新到生产环境时，都需要进行彻底的回归测试。此外，随着代码被推送到生产环境，需要所有团队停止工作，直到将更改推送到生产环境。
而微服务的情况下，单独的团队对其代码库拥有完全的所有权。他们通过单独的部署管道对其模块拥有完全的开发和部署自主权，代码管理变得更容易，根据流量负载模式扩展单个服务也变得更容易。因此，如果需要快速向市场推出大量功能并进行扩展，推进微服务架构是一个不错的选择。

采用微服务是有代价的：不能忽视因此而增加的架构复杂性。
微服务架构需要设置分布式日志记录、监控、服务间通信、服务发现、警报、跟踪、构建和发布管道、健康检查等，甚至可能不得不为自己从头开始编写大量自定义工具。
