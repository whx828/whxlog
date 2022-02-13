An overview of commonly used NoSQL databases.
常用的 NoSQL 数据库概述。

In the previous lesson, we discussed SQL databases that can be used to develop an efficient database-backed web application. Now, we will look into the NoSQL options that exist and discuss how NoSQL database management systems compare to SQL database management systems.
在上一课中，我们讨论了可用于开发高效数据库支持的网络应用的 SQL 数据库。现在，我们将研究现有的 NoSQL 选项，并讨论 NoSQL 数据库管理系统与 SQL 数据库管理系统的比较。

## MongoDB [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#MongoDB-)

[MongoDB](https://www.mongodb.com/) , which is perhaps the most popular NoSQL DBMS, is an open-source non-relational database management system that has come to be known as the leading option when it comes to developing modern web applications. The reason for this is that MongoDB uses a document-based storage system that stores key-value pairs and allows for highly efficient lookups, making data retrieval much faster and easier than any typical SQL DBMS. To add to this, the document model ensures that data can be mapped directly to objects within the application code, and is, therefore, makes data handling significantly easy by eliminating the need for adding code to process queried data. In addition to this, MongoDB stores data in a highly flexible manner, thus allowing for fields to vary from document to document and the structure of data to be open to change over time. Data can also be indexed and queried according to specific user requirements and then updated in real-time. This makes MongoDB an exceptionally powerful system for data analysis, and that shows in its popularity. However, the most important aspect of quality that MongoDB covers is reliability; MongoDB is a distributed database at its core which means that it is available, scalable, and easily distributable across locations, thus making it well equipped for modern applications that require quick access to data at all times.
MongoDB 可能是最流行的 NoSQL DBMS，它是一种开源非关系型数据库管理系统，在开发现代 Web 应用程序时，它已成为众所周知的领先选择。这样做的原因是 MongoDB 使用基于文档的存储系统，该系统存储键值对并允许高效查找，使数据检索比任何典型的 SQL DBMS 更快、更容易。除此之外，文档模型确保数据可以直接映射到应用程序代码中的对象，因此通过消除添加代码来处理查询数据的需要，使数据处理变得非常容易。除此之外，MongoDB 以高度灵活的方式存储数据，从而允许字段因文档而异，并且数据的结构可以随着时间的推移而变化。还可以根据用户的具体要求对数据进行索引查询，然后实时更新。这使得 MongoDB 成为一个异常强大的数据分析系统，这体现在它的受欢迎程度。然而，MongoDB 涵盖的最重要的质量方面是可靠性； MongoDB 的核心是分布式数据库，这意味着它可用、可扩展且易于跨位置分发，从而使其非常适合需要始终快速访问数据的现代应用程序。

MongoDB commands are fairly simple and easy to learn. Given below is an example that creates a new database called newDB:
MongoDB 命令相当简单易学。下面给出了一个创建名为 newDB 的新数据库的示例：

```
use newDB
```

The simplicity and ease of use of MongoDB show for why it has become so popular in recent times and it is, therefore, an essential tool to learn before you delve into web development.
MongoDB 的简单性和易用性说明了为什么它在最近变得如此流行，因此，它是您在深入研究 Web 开发之前学习的必备工具。

## Apache CouchDB [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Apache-CouchDB-)

[CouchDB](http://couchdb.apache.org/) is an open-source NoSQL database management system that aims primarily to provide ease of use. CouchDB combines an intuitive document storage model with a powerful query engine to allow users to store their data safely on personal servers or with any leading cloud provider. In addition to this, CouchDB not only has the ability to store all types of data, but it also allows web applications to conveniently extract this data without having to add translational commands since CouchDB supports the formatting web applications typically use.
CouchDB 是一个开源的 NoSQL 数据库管理系统，主要目的是提供易用性。CouchDB 结合了直观的文档存储模型和强大的查询引擎，允许用户在个人服务器或任何领先的云提供商那里安全地存储他们的数据。除此之外，CouchDB 不仅有能力存储所有类型的数据，而且它还允许网络应用程序方便地提取这些数据，而不必添加翻译命令，因为 CouchDB 支持网络应用程序通常使用的格式。

## Redis [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Redis-)

[Redis](https://redis.io/) is an open-source in-memory data structure store that is often used as a database. It supports all kinds of data structures ranging from strings, hashes, lists, and sets to sorted sets with range queries, bitmaps, hyperloglogs, and geospatial indexes with radius queries and streams. This means that Redis provides a wide variety of data structures that can be used to store your application data in the most optimal way according to how the data is structured. In addition to this, because Redis stores data in-memory, it allows for fast data retrievals and, therefore, significantly speeds up the process of responding to user requests.
Redis 是一种开源的内存数据结构存储，通常用作数据库。它支持各种数据结构，从字符串、散列、列表和集合到具有范围查询、位图、超级日志和具有半径查询和流的地理空间索引的排序集合。这意味着 Redis 提供了多种数据结构，可用于根据数据的结构以最佳方式存储您的应用程序数据。除此之外，由于 Redis 将数据存储在内存中，因此它允许快速检索数据，因此显着加快了响应用户请求的过程。

---

That concludes the discussion on popular NoSQL database management systems. As we have already seen, there are certain limitations to relying completely on databases in your web applications that NoSQL counter by caching and in the next lesson, we will be discussing caching as an approach to optimize data storage on web applications in further detail.
关于流行的 NoSQL 数据库管理系统的讨论到此结束。正如我们已经看到的，在您的 Web 应用程序中完全依赖数据库存在某些限制，NoSQL 通过缓存来对抗，在下一课中，我们将更详细地讨论缓存作为优化 Web 应用程序数据存储的一种方法。

