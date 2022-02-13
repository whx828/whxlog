In this lesson, you will learn about the Document Oriented database and when to choose it for our projects.
在本课中，你将了解面向文档的数据库以及何时为我们的项目选择它。

## What is a document-oriented database? [#](https://www.educative.io/courses/web-application-software-architecture-101/BnkAPNov2oo#What-is-a-document-oriented-database?)
什么是面向文档的数据库？
> _Document-oriented databases_ are the main types of _NoSQL_ databases. They store data in a document-oriented model in independent documents. The data is generally _semi-structured_ and stored in a _JSON_-like format.
> 面向文档的数据库是 NoSQL 数据库的主要类型。它们在独立的文档中以面向文档的模式存储数据。这些数据通常是半结构化的，并以类似 JSON 的格式存储。

The data model is similar to the data model of our application code, so it's easier to store and query data for developers.
该数据模型与我们的应用程序代码的数据模型相似，所以对开发者来说，存储和查询数据更容易。

Document-oriented stores are suitable for _Agile software development methodology_ because it's easier to change things with evolving demands when working with them.
面向文档的存储适合于敏捷软件开发方法，因为在使用它们时，随着需求的不断变化，更容易改变事情。

## Popular document-oriented databases [#](https://www.educative.io/courses/web-application-software-architecture-101/BnkAPNov2oo#Popular-document-oriented-databases)
流行的面向文档的数据库

Some of the popular document-oriented stores used in the industry are _MongoDB, CouchDB, OrientDB, Google Cloud Datastore, and Amazon DocumentDB_
业界使用的一些流行的面向文档的存储是 MongoDB、CouchDB、OrientDB、Google Cloud Datastore 和 Amazon DocumentDB。

## When do I pick a document-oriented data store for my project? [#](https://www.educative.io/courses/web-application-software-architecture-101/BnkAPNov2oo#When-do-I-pick-a-document-oriented-data-store-for-my-project?)
我什么时候为我的项目挑选一个面向文档的数据存储？

Pick a document-oriented data store if you are working with _semi-structured_ data, and need a flexible schema that will change often. Also, use one when you aren't sure about the database schema when you start writing the app when there is a possibility that things might change over time, and when you are in need of something flexible which you could change over time with minimum fuss.
如果你正在处理半结构化的数据，并且需要一个灵活的模式来经常改变，那么就选择面向文档的数据存储。此外，当你开始编写应用程序时，你不确定数据库模式，当事情有可能随着时间的推移而改变时，当你需要一些灵活的东西，你可以随着时间的推移而改变，而不需要大惊小怪时，就可以使用一个数据库。

Typical use cases of document-oriented databases include:
面向文档的数据库的典型用例包括：

- Real-time feeds
实时馈送
- Live sports apps
实时体育应用
- Writing product catalogues
编写产品目录
- Inventory management
库存管理
- Storing user comments
储存用户评论
- Web-based multiplayer games
基于网络的多人游戏

Being in the family of _NoSQL_ databases these provide horizontal scalability, performant read-writes because they cater to _Create Read Update Delete (CRUD)_ use cases. These include scenarios where there isn't much relational logic involved and all we need is just quick persistence and retrieval of data.
作为 NoSQL 数据库家族中的一员，这些数据库提供了水平可扩展性和高性能的读写，因为它们满足了创建读取更新删除（CRUD）的用例。这些包括没有涉及太多的关系逻辑，我们所需要的只是快速持久化和检索数据的场景。

## Real-life implementations [#](https://www.educative.io/courses/web-application-software-architecture-101/BnkAPNov2oo#Real-life-implementations)
现实生活中的实现

_Here are some of the good real-life implementations of the tech: _
以下是该技术在现实生活中的一些良好实现：

- [SEGA uses Mongo-DB to improve the experience for millions of mobile gamers](https://www.mongodb.com/blog/post/sega-hardlight-migrates-to-mongodb-atlas-simplify-ops-improve-experience-mobile-gamers)
SEGA 使用 Mongo-DB 来改善数百万移动游戏玩家的体验

- [Coinbase scaled from 15k requests per min to 1.2 million requests per minute with MongoDB](https://blog.coinbase.com/scaling-connections-with-ruby-and-mongodb-99204dbf8857)
Coinbase 利用 MongoDB 从每分钟 15k 个请求扩展到每分钟 120 万个请求

---

笔记：

面向文档的数据库是 NoSQL 数据库的主要类型。它们在独立的文档中以面向文档的模式存储数据。这些数据通常是半结构化的，并以类似 JSON 的格式存储。该数据模型与应用程序代码的数据模型相似，存储和查询数据更容易。适合于敏捷软件开发方法，随着需求的不断变化，更容易调整改变。

如果你正在处理半结构化的数据，并且需要一个灵活的模式来经常改变，那么就选择面向文档的数据存储。此外，当你开始编写应用程序时，你不确定数据库模式，当事情有可能随着时间的推移而改变时，你需要一些灵活的东西，你可以随着时间的推移而改变，就可以使用一个面向文档的数据库。
