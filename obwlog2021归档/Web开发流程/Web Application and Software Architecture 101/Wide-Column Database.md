In this lesson, we will get to know the wide-column database and when to choose it for our projects.
在本课中，我们将了解宽列数据库以及何时为我们的项目选择它。

## What is a wide-column database? [#](https://www.educative.io/courses/web-application-software-architecture-101/JQRRv6jNyvK#What-is-a-wide-column-database?)
什么是宽列数据库？

_Wide-column_ databases belong to the _NoSQL_ family of databases, primarily used to handle massive amounts of data, technically called the _Big Data_.
宽列数据库属于 NoSQL 数据库系列，主要用于处理海量数据，技术上称为大数据。

_Wide-column_ databases are perfect for analytical use cases. They have a high performance and a scalable architecture.
宽列数据库是分析用例的完美选择。它们有很高的性能和可扩展的架构。

Also known as _column-oriented_ databases _wide-column_ databases store data in a record with a dynamic number of columns. A record can hold billions of columns.
宽列数据库也被称为面向列的数据库，它将数据存储在一个具有动态列数的记录中。一个记录可以容纳数十亿列。

## Popular wide-column databases [#](https://www.educative.io/courses/web-application-software-architecture-101/JQRRv6jNyvK#Popular-wide-column-databases)
流行的宽列数据库

Some of the popular wide column databases are _Cassandra_, _HBase_, _Google BigTable_, _ScyllaDB_, etc.
一些流行的宽列数据库有 Cassandra、HBase、Google BigTable、ScyllaDB 等。

## When To Pick a wide-column database? [#](https://www.educative.io/courses/web-application-software-architecture-101/JQRRv6jNyvK#When-To-Pick-a-wide-column-database?)
何时选择宽列数据库？

If you have a use case where you need to grapple with Big Data, to ingest it, or to run analytics on it, then a _wide-column_ database is a good fit for this scenario.
如果你有一个需要处理大数据的用例，来摄取大数据，或者在大数据上运行分析，那么宽列数据库就很适合这种情况。

_Wide-column_ databases are built to manage Big Data ensuring _scalability_, _performance_ and _high availability_ at the same time.
宽列数据库是为管理大数据而建立的，可同时确保可扩展性、性能和高可用性。

## Real-life implementations [#](https://www.educative.io/courses/web-application-software-architecture-101/JQRRv6jNyvK#Real-life-implementations)
现实生活中的实施

Some of the real-life implementations of the tech are: 
该技术在现实生活中的一些实施情况是：

- [Netflix uses Cassandra as the backend database for the streaming service.](https://medium.com/netflix-techblog/tagged/cassandra)
Netflix 使用 Cassandra 作为流媒体服务的后端数据库。

- [Adobe uses HBase for processing large amounts of data.](https://hbase.apache.org/poweredbyhbase.html)
Adobe 使用 HBase 来处理大量数据。

---

笔记：

宽列数据库属于 NoSQL 数据库系列，主要用于处理海量数据，技术上称为大数据。也被称为面向列的数据库，将数据存储在一个具有动态列数的记录中。一个记录可以容纳**数十亿列**。
如果有一个需要处理大数据的场景，来摄取大数据，或者在大数据上运行分析，那么宽列数据库就很适合这种情况。宽列数据库是为管理大数据而建立的，可同时确保可扩展性、性能和高可用性。
