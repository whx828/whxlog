In this lesson, we will discuss the features of NoSQL databases.
在本课中，我们将讨论 NoSQL 数据库的特点。

In the introduction, you learned that the _NoSQL_ databases are built to run on clusters in a distributed environment, powering Web 2.0 websites.
在介绍中，你了解到 NoSQL 数据库是为了在分布式环境的集群上运行，为 Web 2.0 网站提供动力。

Now, let's go over some features of _NoSQL_ databases.
现在，让我们来看看 NoSQL 数据库的一些特点。

## Pros of NoSQL databases [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Pros-of-NoSQL-databases)
NoSQL 数据库的优点

Besides design, _NoSQL_ databases are also developer friendly. What do I mean by that?
除了设计，NoSQL 数据库还对开发者友好。我这么说是什么意思呢？

## Gentle learning curve [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Gentle-learning-curve)
温和的学习曲线

First, the learning curve is less than that of relational databases. When working with relational databases, a big chunk of our time goes into learning how to design well-normalized tables, setting up relationships, trying to minimize joins, and so on.
首先，学习曲线比关系型数据库的要小。在使用关系型数据库时，我们有很大一部分时间是用来学习如何设计规范化的表，建立关系，尽量减少连接，等等。

## Schemaless [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Schemaless)
无模式

One needs to be pretty focused when designing the schema of a relational database to avoid running into any issues in the future.
在设计关系型数据库的模式时，人们需要相当专注，以避免在未来遇到任何问题。

Think of relational databases as a strict headmaster. Everything has to be in place, neat and tidy, and things need to be consistent. However, _NoSQL_ databases are a bit chilled out and relaxed.
把关系型数据库想象成一个严格的校长。一切都必须到位，整齐划一，而且事情必须一致。然而，NoSQL 数据库则有点冷漠和放松。

There are no strictly enforced schemas, so you can work with the data how you want. You can always change stuff and move things around. Entities have no relationships. Thus, things are flexible, and you can do stuff your way.
没有严格执行的模式，所以你可以按照自己的意愿来处理数据。你可以随时改变东西和移动东西。实体没有关系。因此，事情是灵活的，你可以按照自己的方式做事情。

_Wonderful, right?_
很好，对吗？

Not always!! This flexibility is good and bad at the same time. Being so flexible, developer-friendly, having no joins, relationships, and so on make it good. However, we will talk about some downsides next.
并不总是这样！这种灵活性同时也是好的和坏的。如此灵活，对开发者友好，没有连接，没有关系，等等，这些都使它很好。然而，我们接下来会讨论一些缺点。

## Cons Of NoSQL databases [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Cons-Of-NoSQL-databases)
NoSQL 数据库的缺点

## Inconsistency [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Inconsistency)
不连贯性

This introduces the risk of entities being inconsistent. Since an entity is spread throughout the database one has to update the new values of the entity at all places.
这引入了实体不一致的风险。由于一个实体分布在整个数据库中，人们必须在所有地方更新该实体的新值。

Failing to do so, makes the entity inconsistent. This is not a problem with relational databases since they keep the data normalized. An entity resides at one place only.
如果不这样做，就会使实体不一致。这不是关系型数据库的问题，因为它们保持数据的正常化。一个实体只驻留在一个地方。

## No support for ACID transactions [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#No-support-for-ACID-transactions)
不支持 ACID 交易

Also, _NoSQL_ distributed databases don't provide _ACID transactions_. A few that claim to do so, don't support them globally. They are limited to a certain entity hierarchy or a small region where they can lock down nodes to update them.
另外，NoSQL 分布式数据库并不提供 ACID 事务。少数声称这样做的数据库并不支持全局的交易。它们只限于某个实体层次结构或一个小区域，在那里它们可以锁定节点来更新它们。

> **Note:** _Transactions in distributed systems come with terms and conditions applied._
> 注意：分布式系统中的交易是有条款和条件适用的。

## Conclusion [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Conclusion)
总结

My first experience with a _NoSQL_ datastore was with the _Google Cloud Datastore_.
我对 NoSQL 数据存储的第一次体验是使用谷歌云数据存储。

An upside I felt was that we don't have to be a pro in database design to write an application. Things were comparatively simpler because there was no stress of managing joins, relationships, n+1 query issues etc.
我感觉到的一个好处是，我们不需要成为数据库设计方面的专家来编写应用程序。事情相对来说更简单，因为没有管理连接、关系、N+1 查询等问题的压力。

Just fetch the data using its key. You can also call it the ID of the entity. This is a _constant $O(1)$_ operation, which makes the _NoSQL_ database really fast.
只要使用它的键来获取数据。你也可以称它为实体的 ID。这是一个恒定的 $O(1)$ 操作，这使得 NoSQL 数据库真的很快。

I have designed a lot of _MySQL_ DB schemas in the past with complex relationships, and I would say working with a _NoSQL_ database is a lot easier than working with relationships.
我过去设计了很多 MySQL DB 模式，有复杂的关系，我想说的是，用 NoSQL 数据库工作要比用关系工作容易得多。

It's alright if we need to make a few extra calls to the backend to fetch data in separate calls. This doesn't make much of a difference. We can always cache the frequently accessed data to overcome that.
如果我们需要向后端进行一些额外的调用，以单独获取数据，这也没什么。这并没有太大的区别。我们总是可以缓存经常访问的数据来克服这个问题。

## Popular NoSQL databases [#](https://www.educative.io/courses/web-application-software-architecture-101/39YyxA8Vvo4#Popular-NoSQL-databases)
流行的 NoSQL 数据库

Some of the popular NoSQL databases used in the industry are _MongoDB_, _Redis_, _Neo4J_, and _Cassandra_.
业界使用的一些流行的 NoSQL 数据库是 MongoDB、Redis、Neo4J 和 Cassandra。

So, by now, you have a pretty good idea of what NoSQL databases are. Let's have a look at some of the use cases that best fit them.
所以，到现在为止，你对什么是 NoSQL 数据库已经有了很好的了解。让我们来看看最适合它们的一些使用案例。

---

笔记：

NoSQL 数据库优点：
1. NoSQL 数据库是为了在分布式环境的集群上运行，为 Web2.0 网站提供动力。
2. NoSQL 数据库还对开发者友好，学习曲线比关系型数据库的要小。
3. NoSQL 数据库没有严格执行的模式，所以你可以按照自己的意愿来处理数据。

NoSQL 数据库缺点：
1. NoSQL 数据库引入了实体不一致的风险。由于一个实体分布在整个数据库中，人们必须在所有地方更新该实体的新值。
2. NoSQL 分布式数据库并不提供 ACID 事务。少数声称提供 ACID 事务的数据库并不支持全局的交易，只限于某个实体层次结构或一个小区域，在那里可以锁定节点来更新它们。
