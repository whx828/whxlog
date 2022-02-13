In this lesson, you will get to know about the Key-Value database and when to choose it for your projects.
在本课中，你将了解键值数据库以及何时为你的项目选择它。

## What is a Key-Value database? [#](https://www.educative.io/courses/web-application-software-architecture-101/m2gRgwr8omG#What-is-a-Key-Value-database?)
什么是键值数据库？

_Key-value_ databases also are a part of the _NoSQL family_. These databases use a simple _Key-value_ method to store and quickly fetch the data with minimum latency.
键值数据库也是 NoSQL 家族中的一员。这些数据库使用简单的键值方法来存储并以最小的延迟快速获取数据。

## Features of a Key-Value database [#](https://www.educative.io/courses/web-application-software-architecture-101/m2gRgwr8omG#Features-of-a-Key-Value-database)
键值数据库的特点

Due to the minimum latency they ensure, a primary use case for the _Key-value_ databases is to implement caching in applications.
由于它们能确保最小的延迟，键值数据库的一个主要用例是在应用程序中实现缓存。

The _Key_ serves as a unique identifier and has a _value_ associated with it. The value can be as simple as a block of text and can be as complex as an object graph.
键作为一个唯一的标识符，并有一个与之相关的值。这个值可以简单到一个文本块，也可以复杂到一个对象图。

The data in _Key-value_ databases can be fetched in _constant time $O(1)$_, and there is no query language required to fetch the data. It's just a simple no-brainer fetch operation. This ensures minimum latency.
键值数据库中的数据可以在 $O(1)$ 的恒定时间内被获取，而且不需要查询语言来获取数据。这只是一个简单的不费吹灰之力的获取操作。这确保了最小的延迟。

## Popular Key-Value databases [#](https://www.educative.io/courses/web-application-software-architecture-101/m2gRgwr8omG#Popular-Key-Value-databases)
流行的键值数据库

Some of the popular _key-value_ data stores used in the industry are _Redis_, _Hazelcast_, _Riak_, _Voldemort_, and _Memcached_.
业界使用的一些流行的键值数据存储是 Redis、Hazelcast、Riak、Voldemort 和 Memcached。

## When do I pick a Key-Value database? [#](https://www.educative.io/courses/web-application-software-architecture-101/m2gRgwr8omG#When-do-I-pick-a-Key-Value-database?)
我什么时候该选择键值数据库？

If you have a use case where you need to fetch data real fast with minimum fuss and backend processing, you should pick a _Key-value_ data store.
如果你有一个用例，你需要以最少的麻烦和后端处理来快速获取数据，你应该选择一个键值数据存储。

_Key-value_ stores are pretty efficient in pulling off scenarios that require super-fast data fetches.
键值存储在完成需要超快数据获取的场景方面相当有效。

Typical use cases of a _key-value_ database are the following:
键值数据库的典型使用情况如下：

- Caching
缓存
- Persisting user state
保存用户状态
- Persisting user sessions
保存用户会话
- Managing real-time data
管理实时数据
- Implementing queues
实现队列
- Creating leaderboards in online games and web apps
在网络游戏和网络应用中创建排行榜
- Implementing a pub-sub system
实现 Pub-sub 系统

## Real-life implementations [#](https://www.educative.io/courses/web-application-software-architecture-101/m2gRgwr8omG#Real-life-implementations)
现实生活中的实施

Some of the real-life implementations of the tech are: 
该技术在现实生活中的一些实现是：

- [Inovonics uses Redis to drive real-time analytics on millions of sensor data](https://redislabs.com/customers/inovonics/)
Inovonics 使用 Redis 来驱动对数百万传感器数据的实时分析

- [Microsoft uses Redis to handle the traffic spike on its platforms](https://redislabs.com/docs/microsoft-relies-redis-labs/)
微软使用 Redis 来处理其平台上的流量激增问题

- [Google Cloud uses Memcached to implement caching on their cloud platform](https://cloud.google.com/appengine/docs/standard/python/memcache/)
谷歌云使用 Memcached 在其云平台上实现缓存

---

笔记：

键值数据库也是 NoSQL 家族中的一员，使用简单的键值对方法来存储，并以最小的延迟快速获取数据。
由于键值数据库能确保最小的延迟，因此键值数据库的一个主要用例是在应用程序中**实现缓存**。
键作为唯一标识符，有一个与之相关的值。这个值可以简单到一个文本块，也可以复杂到一个对象图。
键值数据库中的数据可以在 $O(1)$ 的恒定时间内被获取，不需要查询语言来获取数据，因此确保最小延迟。
键值数据库在完成需要超快数据获取的场景方面相当有效。
