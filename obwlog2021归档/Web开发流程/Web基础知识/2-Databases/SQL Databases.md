An overview of the most common relational database management system.
最常见的关系数据库管理系统概述。


In the previous lesson, we discussed the role of database management systems in web development and learned that one type of DBMS is SQL. Now, we will discuss popular SQL Database Management Systems that are available to use in web development.
在上一课中，我们讨论了数据库管理系统在 Web 开发中的作用，并了解到一种类型的 DBMS 是 SQL。现在，我们将讨论可用于 Web 开发的流行 SQL 数据库管理系统。


## MySQL [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#MySQL-)

[MySQL](https://www.mysql.com/) is amongst the most commonly used database management systems, and it has formed an integral part of most web applications in the past. MySQL is backed by Oracle and uses Standard Query Language (SQL) to store data in the form of a table, and to retrieve data requires making queries in SQL. MySQL, unlike SQL itself, works across all platforms, including Linux, iOS, and Windows and it has all the simplicity of SQL as it does not require any new syntax to be learned once you know SQL. Let’s look at an example of a MySQL query that creates a new table:
MySQL 是最常用的数据库管理系统之一，它在过去已经成为大多数网络应用的一个组成部分。MySQL 由甲骨文公司支持，使用标准查询语言（SQL）以表的形式存储数据，而检索数据需要用 SQL 进行查询。与 SQL 本身不同，MySQL 适用于所有平台，包括 Linux、iOS 和 Windows，而且它具有 SQL 的所有简单性，因为一旦你知道 SQL，就不需要学习任何新的语法。让我们来看看一个创建新表的 MySQL 查询的例子：

```MySQL
CREATE TABLE [IF NOT EXISTS] table_name( 
    column1 DATATYPE, 
    column2 DATATYPE, 
    column3 DATATYPE, 
    column4 DATATYPE, 
    PRIMARY KEY (column1) 
) ENGINE=storage_engine
```

As is clear from the example above, MySQL uses basic SQL queries to create tables and handle data. This is one of its primary advantages as SQL is not difficult to learn and highly ubiquitous, which means that MySQL is relatively easy to use for most beginners who already know SQL.
从上面的例子可以看出，MySQL 使用基本的 SQL 查询来创建表和处理数据。这是它的主要优势之一，因为 SQL 并不难学，而且高度普遍，这意味着对于大多数已经知道 SQL 的初学者来说，MySQL 相对容易使用。


## PostgreSQL [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#PostgreSQL-)

[PostgreSQL](https://www.postgresql.org/) , also known as Postgres, is an open-source object-relational database management system that can handle large amounts of data and can provide seamless support for web applications that handle multiple concurrent users. It is the default database for macOS and provides efficient data management across platforms. Moreover, it also supports concurrent database accesses and allows users to add custom functions developed using several programming languages, including C, C++, and Java.
PostgreSQL，也被称为 Postgres，是一个开源的对象关系型数据库管理系统，可以处理大量的数据，并可以为处理多个并发用户的网络应用提供无缝支持。它是 MacOS 的默认数据库，提供跨平台的高效数据管理。此外，它还支持并发数据库访问，并允许用户添加使用几种编程语言开发的自定义功能，包括 C、C++和 Java。

In addition to this, another primary benefit of PostgreSQL is that it is designed to be extensible. This means that users can define their own data types and even custom plugins to alter parts of the system according to their requirements.
除此之外，PostgreSQL 的另一个主要好处是，它被设计成可扩展的。这意味着用户可以定义自己的数据类型，甚至自定义插件，以根据他们的要求改变系统的一部分。


## MariaDB [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#MariaDB-)

[MariaDB](https://mariadb.org/) is a fork of MySQL, which was created by the original developers of MySQL after MySQL's acquisition. It is meant to be a replacement of MySQL and includes a wide selection of storage engines so it can easily work with data from other relational data management systems. MariaDB, like MySQL, uses a standard querying language, which makes it just as simple to use as MySQL. Moreover, MariaDB runs on a number of operating systems and supports a wide variety of programming languages. In particular, it offers support for PHP, which, as we will later learn, is one of the most popular web development languages.
MariaDB 是 MySQL 的一个分支，是 MySQL 的原始开发者在 MySQL 被收购后创建的。它旨在替代 MySQL，并包含多种存储引擎，因此它可以轻松处理来自其他关系数据管理系统的数据。 MariaDB 与 MySQL 一样，使用标准查询语言，这使得它与 MySQL 一样简单易用。此外，MariaDB 可在多种操作系统上运行并支持多种编程语言。特别是，它提供了对 PHP 的支持，正如我们稍后将了解到的，它是最流行的 Web 开发语言之一。

In addition to having all the benefits that MySQL poses, MariaDB also offers many operations and commands that are not available in MySQL and replaces features that tend to impact performance negatively.
除了拥有 MySQL 的所有优点之外，MariaDB 还提供了许多 MySQL 中不可用的操作和命令，并替换了往往会对性能产生负面影响的功能。


## The transition to NoSQL [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#The-transition-to-NoSQL-)
向 NoSQL 的过渡

Speed is amongst the most important factors that affect user experience on a web application. Relying on an unnecessary number of calls to a database usually tends to slow things down for users, and it is, therefore, important for web developers to keep some commonly requested chunks of data in immediate storage so that they can be retrieved quickly, without creating large latencies in displaying data. To do so, web developers need to think about how to get as much data in memory as reasonably possible, and then how to get things cached at the file system level to avoid making calls to a database altogether. The reason for this is that retrieving data from a database is the bottleneck of most web applications, and decreasing these operations can significantly improve responsiveness. The process of selecting commonly requested data components and storing them in immediate memory to avoid extraneous database calls is referred to as **caching**, and NoSQL databases have gained popularity in recent times because of their ability to automatically cache data to enhance performance.
速度是影响网络应用的用户体验的最重要因素之一。对数据库的不必要的调用，通常会拖慢用户的速度，因此，对于网络开发者来说，重要的是将一些常用的数据块保存在即时存储中，这样就可以快速检索，而不会在显示数据时产生大的延迟。要做到这一点，网络开发者需要考虑如何在内存中获得尽可能多的数据，然后如何在文件系统层面上获得东西的缓存，以避免完全调用一个数据库。这样做的原因是，从数据库中检索数据是大多数网络应用的瓶颈，减少这些操作可以显著提高响应速度。选择常用的数据组件并将其存储在即时内存中以避免不相干的数据库调用的过程被称为缓存，而 NoSQL 数据库由于能够自动缓存数据以提高性能而在最近一段时间内获得了广泛的支持。

In addition to this, the database calls themselves are more inefficient in SQL databases than in NoSQL databases. This is because SQL databases store data in tabular form, and queries require comprehensive iterations of the table. NoSQL databases, on the other hand, use data structures to store entries, which means that lookups are always optimized and database calls are much more efficient. Consequently, with modern web applications increasingly requiring fast response times to achieve intended functionality, the shift towards using NoSQL databases has been apparent in recent times.
除此之外，数据库调用本身在 SQL 数据库中比在 NoSQL 数据库中效率更低。这是因为 SQL 数据库以表格形式存储数据，而查询需要对表格进行全面的迭代。另一方面，NoSQL 数据库使用数据结构来存储条目，这意味着查询总是被优化，数据库调用的效率更高。因此，随着现代网络应用越来越需要快速的响应时间来实现预期的功能，最近一段时间，向使用 NoSQL 数据库的转变已经很明显。


---

That's all on the various SQL database management systems available to use with your web application and how web developers have transitioned to using NoSQL database management systems. In the next lesson, we will be discussing examples of the second type of DBMS, NoSQL.
以上就是关于可用于网络应用的各种 SQL 数据库管理系统以及网络开发者如何过渡到使用 NoSQL 数据库管理系统的全部内容。在下一课，我们将讨论第二种类型的 DBMS--NoSQL 的例子。

