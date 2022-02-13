In this lesson, we will discuss relational databases.
在本课中，我们将讨论关系型数据库。

## What is a relational database? [#](https://www.educative.io/courses/web-application-software-architecture-101/N8p9977X4P2#What-is-a-relational-database?)
什么是关系型数据库？

A relational database is the most widely used type of database in the industry. A relational database saves data containing relationships, like _One to One_, _One to Many_, _Many to Many_, _Many to One_, etc. It has a relational data model. _SQL_ is the primary data query language used to interact with relational databases.
关系型数据库是行业中使用最广泛的数据库类型。关系型数据库保存包含关系的数据，如一对一、一对多、多对多、多对一等。它有一个关系型的数据模型。SQL 是用于与关系型数据库互动的主要数据查询语言。

_MySQL_ is the most popular example of a relational database. Alright!! I get it but what are relationships?
MySQL 是关系型数据库的最流行的例子。好了! 我明白了，但什么是关系？

## What are relationships? [#](https://www.educative.io/courses/web-application-software-architecture-101/N8p9977X4P2#What-are-relationships?)
什么是关系?

Let's say you as a customer buy five different books from an online bookstore. When you created an account at the bookstore, you would have been assigned a customer ID say C1. Now, C1\[You\] is linked to five different books B1, B2, B3, B4, and B5.
假设你作为一个顾客从一个网上书店买了五本不同的书。当你在书店创建一个账户时，你会被分配一个客户 ID，比如说 C1。现在，C1\[你\]被链接到五本不同的书 B1、B2、B3、B4 和 B5。

This is a _one to many_ relationship. In the simplest of forms, one table will contain the details of all the customers and another table will contain all the products in the inventory.
这是一种一对多的关系。在最简单的形式中，一个表将包含所有客户的详细信息，另一个表将包含库存中的所有产品。

One row in the customer table will correspond to multiple rows in the product inventory table.
客户表中的一行将对应于产品库存表中的多行。

Upon pulling the user object with the ID C1 from the database we can easily find what books C1 purchased via the relationship model.
从数据库中提取 ID 为 C1 的用户对象后，我们可以很容易地通过关系模型找到 C1 购买了什么书。

## Data consistency [#](https://www.educative.io/courses/web-application-software-architecture-101/N8p9977X4P2#Data-consistency)
数据一致性

Besides the relationships, relational databases also ensure saving data in a normalized fashion. In very simple terms, normalized data means a unique entity occurs in only one place/table in its simplest and atomic form and is not spread throughout the database.
除了关系，关系型数据库还确保以规范化的方式保存数据。在非常简单的情况下，规范化的数据意味着一个独特的实体只出现在一个地方/表的最简单和原子的形式，而不是分布在整个数据库里。

This helps maintain consistency in the data. In the future, if we want to update the data, we update the one place and every fetch operation gets the updated data.
这有助于保持数据的一致性。在未来，如果我们想更新数据，我们就更新这一个地方，而每一个获取操作都会得到更新的数据。

Had the data been spread throughout the database in different tables, we would had to update the new value of an entity everywhere. This is troublesome, and things can get inconsistent.
如果数据分散在整个数据库的不同表中，我们将不得不在各个地方更新一个实体的新值。这很麻烦，而且事情会变得不一致。

## ACID transactions [#](https://www.educative.io/courses/web-application-software-architecture-101/N8p9977X4P2#ACID-transactions)
ACID 事务

Besides normalization and consistency, relational databases also ensure _ACID_ transactions.
除了规范化和一致性，关系型数据库还确保 ACID 事务。

_ACID stands for Atomicity, Consistency, Isolation, Durability_.
ACID 代表原子性、一致性、隔离性、持久性。

An acid transaction means if a transaction, say a financial transaction, occurs in a system, it will either be executed with perfection without affecting any other processes or transactions, and the system will have a new state after the transaction that is durable and consistent. Or if anything amiss happens during the transaction, say a minor system failure, the entire operation is rolled back.
ACID 事务意味着如果一个交易，比如说一个金融交易，在一个系统中发生，它要么被完美地执行而不影响任何其他进程或交易，并且系统在交易后会有一个持久和一致的新状态。或者，如果在交易过程中发生任何问题，例如一个小的系统故障，整个操作将被回滚。

When a transaction happens, there is an initial state of the system _State A_, and there is a final state of the system _State B_ after the transaction. Both the states are consistent and durable.
当一个交易发生时，有一个系统的初始状态 A，交易后有一个系统的最终状态 B。这两种状态都是一致和持久的。

A relational database ensures that the system is either in _State A_ or _State B_ at all times. There is no middle state. If anything fails, the system goes back to _State A_.
一个关系型数据库确保系统在任何时候都处于状态 A 或状态 B。不存在中间状态。如果有什么故障，系统会回到状态 A。

If the transaction is executed smoothly the system transitions from _State A_ to _State B_.
如果交易被顺利执行，系统就会从 A 状态过渡到 B 状态。

---

笔记：

关系型数据库是行业中使用最广泛的数据库类型，它保存包含关系的数据，如一对一、一对多、多对多、多对一等。有一个关系型的数据模型。SQL 是用于与关系型数据库互动的主要数据查询语言。MySQL 是关系型数据库中最流行的。
除了具有关系，关系型数据库还确保以规范化的方式保存数据。通常来讲，规范化的数据意味着一个独特的实体只出现在一个地方而不是分布在整个数据库里。有助于保持数据的一致性。
除了规范化和一致性，关系型数据库还确保 ACID 事务。ACID 代表原子性、一致性、隔离性、持久性。ACID 事务意味着如果一个交易在系统中发生，它要么被完美地执行而不影响任何其他进程或交易，并且系统在交易后会有一个持久和一致的新状态。要么若在交易过程中发生任何问题，例如一个小的系统故障，整个操作将被回滚。
