In this lesson, we will discuss when to choose a relational database for a project.
在本课中，我们将讨论何时为一个项目选择关系型数据库。

You should pick a relational database if you are writing a stock trading, banking, or a Finance-based app, or you need to store a lot of relationships, when writing a social network like _Facebook_ for instance. Here is why:
如果你正在编写一个股票交易、银行或基于金融的应用程序，或者你需要存储大量的关系，例如在编写 Facebook 这样的社交网络时，你应该选择关系型数据库。以下是原因。

## Transactions and data consistency [#](https://www.educative.io/courses/web-application-software-architecture-101/g7gWVML3DE6#Transactions-and-data-consistency)
交易和数据一致性

If you are writing a software that has anything to do with money or numbers, that making _transactions_, _ACID_, and _data consistency_ are super important to you.
如果你正在编写一个与金钱或数字有关的软件，那么交易、ACID 和数据一致性对你来说超级重要。

Relational DBs shine when it comes to transactions and data consistency. They comply with the ACID rule, have been around for ages, and are battle-tested.
关系型数据库在交易和数据一致性方面大放异彩。它们符合 ACID 规则，已经存在了很长时间，并经过了实战检验。

## Large community [#](https://www.educative.io/courses/web-application-software-architecture-101/g7gWVML3DE6#Large-community)
大社区

Additionally, they have a larger community. Seasoned engineers on the tech are easily available, so you don't have to go too far looking for them.
此外，它们有一个更大的社区。技术上经验丰富的工程师很容易找到，所以你不用走太远去找他们。

## Storing relationships [#](https://www.educative.io/courses/web-application-software-architecture-101/g7gWVML3DE6#Storing-relationships)
储存关系

If your data has a lot of relationships like which friends of yours live in a particular city, which of your friends already ate at the restaurant you plan to visit today, etc, there is nothing better than a relational database for storing this kind of data.
如果你的数据有很多关系，比如你的哪些朋友住在某个城市，你的哪些朋友已经在你今天打算去的餐厅吃过饭等等，没有什么比关系型数据库更适合存储这类数据了。

Relational databases are built to store relationships. They have been tried and tested and are used by big guns in the industry, like [Facebook, as the main user-facing database.](https://www.8bitmen.com/what-database-does-facebook-use-a-1000-feet-deep-dive/)
关系型数据库是为存储关系而建立的。关系型数据库是为存储关系而建立的，它们经过了考验，并被业界的大佬们所使用，如 Facebook，作为面向用户的主要数据库。

## Popular relational databases [#](https://www.educative.io/courses/web-application-software-architecture-101/g7gWVML3DE6#Popular-relational-databases)
流行的关系型数据库

Some of the popular relational databases used in the industry are _MySQL_, which is an open-source relationship database written in _C_ and _C++_, which has been around since 1995.
业界使用的一些流行的关系型数据库是 MySQL，这是一个用 C 和 C++编写的开源关系型数据库，自 1995 年以来一直存在。

Others are _Microsoft SQL Server_, a proprietary RDBMS written by Microsoft in C and C++. _PostgreSQL_ is an open-source RDBMS written in C. Additionally, there are _MariaDB_, _Amazon Aurora_, _Google Cloud SQL_ etc.
其他还有 Microsoft SQL Server，这是一个由微软用 C 和 C++编写的专有 RDBMS。PostgreSQL 是一个用 C 语言编写的开源 RDBMS。此外，还有 MariaDB、Amazon Aurora、Google Cloud SQL 等。

Well, that's all on the relational databases. Moving on to non-relational databases.
好了，这就是关系型数据库的全部内容。接着说说非关系型数据库。

---

笔记：

如果你正在编写一个股票交易、银行或基于金融的应用程序，或者你需要存储大量的关系，例如在编写 Facebook 这样的社交网络应用时，你应该选择关系型数据库：
1. 关系型数据库在交易和数据一致性方面大放异彩。它们符合 ACID 规则，已经存在了很长时间，并经过了实战检验。
2. 关系型数据库有一个庞大的社区，技术上经验丰富的工程师很容易找到。
3. 关系型数据库是为存储关系而建立的，它们经过了考验，并被业界的大拿们所使用，如 Facebook。
