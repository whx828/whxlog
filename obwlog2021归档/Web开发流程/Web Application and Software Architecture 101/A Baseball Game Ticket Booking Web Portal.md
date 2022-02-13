In this lesson, we'll discuss the case study of a baseball game online ticket booking application.
在本课中，我们将讨论一个棒球比赛在线票务预订应用程序的案例研究。

In this lesson, you'll gain an understanding of the architecture and key points to consider when designing an application like a baseball game online ticket booking portal.
在这一课中，你将获得对架构的理解，以及在设计一个像棒球比赛在线票务预订门户这样的应用时需要考虑的关键点。

Let's get started.
让我们开始吧。

## Database [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Database)
数据库

Starting with the _database_, the sale of tickets online is key in this particular use case. We need to set up a foolproof payment system for the fans to buy tickets for their most awaited baseball game.
从数据库开始，在这个特殊的用例中，在线销售门票是关键。我们需要建立一个万无一失的支付系统，让球迷为他们最期待的棒球比赛买票。

_For setting up payments, what database should we pick and why?_
为了建立支付，我们应该选择什么数据库，为什么？

Implementing an online payment system makes _transactions_ and _strong consistency_ vital. The database needs to be _ACID_ compliant. This makes a _relational database_ like _MySQL_ an obvious pick for us.
实施一个在线支付系统使得交易和强大的一致性至关重要。数据库需要符合 ACID 标准。这使得像 MySQL 这样的关系型数据库成为我们的明显选择。

## Handling concurrency [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Handling-concurrency)
处理并发性

Another important thing to note is that the application should be designed to handle a high number of _concurrent_ connections. There will be a surge of fans on the portal, to buy tickets for the baseball game as soon as they are made available.
另一件需要注意的事情是，应用程序应该被设计成能够处理大量的并发连接。门户网站上会有大量的球迷，一旦有棒球比赛的门票，就会立即购买。

Also, the number of requests will be a lot more than the number of tickets available.
而且，请求的数量将比可用的门票数量多得多。

At some point in time, there will be n requests to buy one ticket. We need to make sure the system handles this concurrent scenario well.
在某个时间点上，会有 n 个购买一张门票的请求。我们需要确保系统能很好地处理这种并发的情况。

_How will you implement this scenario? Think about it_
你将如何实现这个场景？想一想

### Message queue [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Message-queue)
消息队列

One way is to _queue_ all the ticket buy requests using a _message queue_. Apply the _FIFO_ principle. We talked about handling concurrent requests with the help of a message queue in the message queue lesson.
一种方法是用一个消息队列来排查所有的购票请求。应用先进先出的原则。我们在消息队列一课中谈到了用消息队列处理并发请求的问题。

### Database locks [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Database-locks)
数据库锁

Another approach is to use _database locks_. Use the right _Transaction Isolation Level_.
另一种方法是使用数据库锁。使用正确的事务隔离级别。

A _transaction isolation level_ ensures _consistency_ in a database transaction. It ensures that at one point in time only one transaction has access to a resource in the database.
事务隔离级别确保数据库事务的一致性。它确保在一个时间点上，只有一个事务能够访问数据库中的资源。

This is a [good read on it](https://en.wikipedia.org/wiki/Isolation_(database_systems) ). Also, read [snapshot isolation](https://en.wikipedia.org/wiki/Snapshot_isolation)
这是对它的一个很好的解读。另外，请阅读快照隔离

_Transaction isolation levels_ can be implemented only with a _transactional ACID_ compliant database like _MySQL_.
只有像 MySQL 这样符合 ACID 标准的事务性数据库才能实现事务隔离级别。

Generally, on e-commerce sites or when booking travel tickets, the number of tickets shown on the website are not accurate, and they are the cached values. When a user moves on to buy a particular ticket and checks out the cart, then the system polls the database for the accurate value and locks the resource for the transaction.
一般来说，在电子商务网站或预订旅游票时，网站上显示的票数是不准确的，它们是缓存的值。当用户继续购买某张票并退出购物车时，系统就会在数据库中查询准确的数值，并为交易锁定资源。

## Caching [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Caching)
缓存

Speaking of _caching_, pick any of the popular caches, like _Redis_, _Memcached_, or _Hazelcast_, to implement caching. There are a lot of user events on the portal where the users just browse the website to look at the current price of the tickets and not buy them. Caching averts the load on the database in this scenario.
说到缓存，可以选择任何一种流行的缓存，如 Redis、Memcached 或 Hazelcast，来实现缓存。门户网站上有很多用户事件，用户只是浏览网站，看看当前的票价，而不是买票。缓存可以避免这种情况下数据库的负载。

## Backend tech [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#Backend-tech)
后端技术

Speaking of backend technology, we can pick from _Java_, _Scala_, _Python_, _Go_ etc.
说到后端技术，我们可以选择 Java、Scala、Python、Go 等。

To send notifications to the users we can pick a message queue like _RabbitMQ_ or _Kafka_.
为了向用户发送通知，我们可以选择 RabbitMQ 或 Kafka 这样的消息队列。

Let's move to the UI
让我们来看看 UI

## User interface [#](https://www.educative.io/courses/web-application-software-architecture-101/gkElD1ro2L6#User-interface)
UI

We don't really need to establish a _persistent connection_ with the server because the application is a _CRUD_ based app. Simple _Ajax_ queries will work well.
我们并不真的需要与服务器建立持久的连接，因为这个应用程序是一个基于 CRUD 的应用程序。简单的 Ajax 查询就能很好地工作。

It's a good idea to make the _UI responsive_, as fans will access it via devices with different screen sizes. The _UI_ should be smart enough to adjust itself based on the screen size.
让 UI 具有响应性是个好主意，因为粉丝们会通过不同屏幕尺寸的设备来访问它。UI 应该足够聪明，能够根据屏幕尺寸进行自我调整。

We can either design the responsive behavior from the ground up using _CSS3_ or leverage a popular _open-source_ responsive framework like _Bootstrap JS_.
我们可以使用 CSS3 从头开始设计响应式行为，或者利用流行的开源响应式框架，如 Bootstrap JS。

If you are fond of _JavaScript_ frameworks, you can use a framework like _React_, _Angular_, _Vue_ etc. These frameworks are pretty popular in the industry and businesses prefer to use them to standardize the behavior and the implementation of their applications.
如果你喜欢 JavaScript 框架，你可以使用像 React、Angular、Vue 等框架。这些框架在业界相当流行，企业更愿意使用它们来规范其应用程序的行为和实施。

Well, this pretty much sums up the case study on a baseball ticket booking web portal.
好了，这就是对棒球票预订门户网站案例研究的总结。
