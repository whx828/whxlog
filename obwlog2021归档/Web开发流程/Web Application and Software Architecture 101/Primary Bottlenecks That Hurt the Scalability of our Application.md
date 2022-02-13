There are several points in a web application that can become a bottleneck and can hurt the scalability of our application. Let's take a look at them.
Web 应用程序中有几个点可能会成为瓶颈并损害我们应用程序的可扩展性。让我们来看看它们。

## Database [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Database)

Consider that, we have an application that appears to be well architected. Everything looks good. The workload runs on multiple nodes, and it has the ability to horizontally scale.
考虑这样一个场景，我们有一个看起来架构良好的应用程序。一切看起来都很好。工作负载在多个节点上运行，而且它有水平扩展的能力。

However, the database is a poor single monolith, where just one server has the onus of handling the data requests from all the server nodes of the workload.
然而，数据库是一个可怜的单体，只有一台服务器承担着处理来自工作负载的所有服务器节点的数据请求的责任。

This scenario is a bottleneck. The server nodes work well, handle millions of requests at a point in time efficiently, yet, the response time of these requests and the latency of the application is very high due to the presence of a single database. There is only so much it can handle.
这种情况是一个瓶颈。服务器节点工作良好，在一个时间点上有效地处理数百万个请求，然而，由于单一数据库的存在，这些请求的响应时间和应用程序的延迟非常高。它所能处理的东西是有限的。

Just like workload scalability, the database needs to be scaled well.
就像工作负载的可扩展性一样，数据库也需要良好的扩展。

Make wise use of database partitioning, sharding, and multiple database servers to make the module efficient.
明智地利用数据库分区、分片和多个数据库服务器，使模块高效。

## Application architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Application-architecture)

A poorly designed application's architecture can become a major bottleneck as a whole.
设计不佳的应用程序架构可能会成为整体的主要瓶颈。

_A common architectural mistake is not using asynchronous processes and modules whereever required rather all the processes are scheduled sequentially._
一个常见的架构错误是没有在任何需要的地方使用异步进程和模块，而是按顺序安排所有的进程。

For instance, if a user uploads a document on the portal, tasks such as sending a confirmation email to the user or sending a notification to all of the subscribers/listeners to the upload event should be done asynchronously.
例如，如果一个用户在门户网站上上传了一份文件，那么向用户发送确认邮件或向上传事件的所有订阅者/听众发送通知等任务应该以异步方式完成。

These tasks should be forwarded to a messaging server as opposed to doing it all sequentially and making the user wait for everything.
这些任务应该转发到消息传递服务器，而不是按顺序执行所有操作并让用户等待所有内容。

## Not using caching in the application wisely [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Not-using-caching-in-the-application-wisely)

Caching can be deployed at several layers of the application and it speeds up the response time by notches. It intercepts all the requests going to the database, reducing the overall load.
缓存可以部署在应用程序的若干层，它可以将响应时间提高一个档次。它可以拦截所有进入数据库的请求，减少整体负载。

Use caching exhaustively throughout the application to speed up things significantly.
在整个应用中详尽地使用缓存，可以大大加快速度。

## Inefficient configuration and setup of load balancers [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Inefficient-configuration-and-setup-of-load-balancers)

Load balancers are the gateway to our application. Using too many or too few of them impacts the latency of our application.
负载均衡器是我们应用程序的门户。使用太多或太少都会影响我们应用程序的延迟。

## Adding business logic to the database [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Adding-business-logic-to-the-database)

No matter what justification anyone provides, I've never been a fan of adding business logic to the database.
无论任何人提供什么样的理由，我都不喜欢在数据库中添加业务逻辑。

The database is just not the place to put business logic. Not only does the whole application tightly coupled it puts an unnecessary load on it.
数据库不是放置业务逻辑的地方。这不仅会使整个应用程序紧密耦合，而且会给它带来不必要的负担。

Imagine when migrating to a different database, how much code refactoring this would require.
想象一下，当迁移到一个不同的数据库时，这将需要多少代码重构。

## Not picking the right database [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#Not-picking-the-right-database)

Picking the right database technology is vital for businesses. Need transactions and strong consistency? Pick a _relational database_. If you can do without strong consistency rather than need horizontal scalability on the fly pick a _NoSQL_ database.
挑选正确的数据库技术对企业来说是至关重要的。需要交易和强大的一致性？选择一个关系型数据库。如果你可以不用强一致性，而不是需要横向的可扩展性，那就选择 NoSQL 数据库。

Trying to pull things off with a not so suitable tech always has a profound impact on the latency of the entire application in negative ways.
试图用一个不那么合适的技术来完成事情，总是会对整个应用的延迟产生负面的影响。

## At the code level [#](https://www.educative.io/courses/web-application-software-architecture-101/YVB7AZLKGDO#At-the-code-level)

This shouldn't come as a surprise but inefficient and badly written code has the potential to take down the entire service in production, which includes:
这不应该是一个惊喜，但低效和糟糕的代码有可能使生产中的整个服务瘫痪，这包括：

- Using unnecessary loops or nested loops
使用不必要的循环或嵌套的循环
- Writing tightly coupled code
编写紧密耦合的代码
- Not paying attention to the _Big-O complexity_ while writing the code. (be ready to do a lot of firefighting in production)
在写代码的时候没有注意到大 O 的复杂性。(要准备好在生产中做大量的消防工作)

In this lesson, if a few of the things are not clear to you such as strong consistency, how the message queue provides an asynchronous behavior, or how to pick the right database, don't worry. I'll discuss all that in the upcoming lessons, stay tuned.
在这一课中，如果有几件事你不清楚，比如强一致性，消息队列如何提供异步行为，或者如何挑选合适的数据库，不要担心。我将在接下来的课程中讨论所有这些问题，敬请关注。

---

笔记：

可能成为瓶颈并损害应用程序可扩展性的几个方面：
1. 数据库也需要良好的可扩展性，明智地利用数据库分区、分片和多个数据库服务器，使模块高效。
2. 设计不佳的应用程序架构可能会成为整体的主要瓶颈。一个常见的架构错误是没有在任何需要的地方使用异步进程和模块，而是顺序安排所有进程。
3. 缓存可以部署在应用程序的若干层，它可以将响应时间提高一个档次，也可以拦截所有进入数据库的请求，减少整体负载，在整个应用中多使用缓存，可以大大加快速度。
4. 负载均衡器是应用程序的门户，使用太多或太少都会影响我们应用程序的延迟。
5. 数据库不是放置业务逻辑的地方，这不仅会使整个应用程序紧密耦合，而且会给它带来不必要的负担。
6. 挑选正确的数据库技术对企业来说是至关重要的。
7. 低效和糟糕的代码有可能使生产中的整个服务瘫痪。
