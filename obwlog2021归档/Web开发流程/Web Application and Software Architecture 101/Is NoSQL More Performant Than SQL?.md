In this lesson, you will learn if the NoSQL database is more performant than SQL databases.
在本课中，你将了解 NoSQL 数据库是否比 SQL 数据库更具有性能。

_Is NoSQL more performant than SQL?_ This question is asked all the time, and I have a one-word answer for this.
NoSQL 比 SQL 更有性能吗？这个问题一直被问及，我对此有个一个字的答案。

No!!
不！

From a technology benchmarking standpoint, both _relational_ and _non-relational_ databases are equally performant.
从技术基准的角度来看，关系型数据库和非关系型数据库的性能是一样的。

More than the technology, it's how we design our systems using the technology that affects the performance.
比起技术，更重要的是我们如何使用技术来设计我们的系统，从而影响到性能。

Both _SQL_ and _NoSQL_ tech have their use cases. We have already gone through them in the lessons [_When to pick a relational database?_](https://www.educative.io/collection/page/6064040858091520/6411938009448448/6652931912761344) and [_When to pick a NoSQL database?_](https://www.educative.io/collection/page/6064040858091520/6411938009448448/4828109427703808)
SQL 和 NoSQL 技术都有其使用案例。我们已经在 "什么时候选择关系型数据库？" 和 "什么时候选择 NoSQL 数据库？" 这两节课中介绍了它们。

So, don't get confused in all the hype. Understand your use case and then pick the technology accordingly.
所以，不要被所有的炒作所迷惑。了解你的用例，然后选择相应的技术。

## Why do popular tech stacks always pick NoSQL databases? [#](https://www.educative.io/courses/web-application-software-architecture-101/q24wYNLGxWy#Why-do-popular-tech-stacks-always-pick-NoSQL-databases?)
为什么流行的技术栈总是选择 NoSQL 数据库？

_But why do the popular tech stacks always pick NoSQL databases?_ For instance, consider the _MEAN_ (_MongoDB_, _ExpressJS_, _AngularJS/ReactJS_, _NodeJS_) stack.
但为什么流行的技术栈总是选择 NoSQL 数据库呢？例如，考虑 MEAN（MongoDB、ExpressJS、AngularJS/ReactJS、NodeJS）栈。

Well, most of the applications online have common use cases, and these tech stacks have them covered. There are also commercial reasons behind this.
好吧，大多数在线应用都有共同的使用案例，而这些技术栈已经涵盖了这些案例。这背后也有商业原因。

Now, there are a plethora of tutorials available online and a mass promotion of popular tech stacks. With these resources, it's easy for beginners to pick them up and write their applications as opposed to running solo research on other technologies.
现在，网上有大量的教程和流行技术栈的大规模推广。有了这些资源，初学者很容易拿起它们并编写他们的应用程序，而不是单独对其他技术进行研究。

Though, we don't always need to stick with the popular stacks. We should pick what fits best with our use case. There are no ground rules, so pick what works for you.
虽然，我们并不总是需要坚持使用流行的堆栈。我们应该选择最适合我们使用情况的东西。没有基本规则，所以要选择适合你的。

We have a separate lesson on how to pick the right tech stack for our app further down the course. We will continue this discussion there.
我们有一个单独的课程，介绍如何为我们的应用程序挑选合适的技术栈，在课程的后面。我们将在那里继续这个讨论。

Coming back to the performance, it entirely depends on the application and the database design. If we are using more _joins_, the response will inevitably take more time with SQL.
回到性能问题上，这完全取决于应用程序和数据库设计。如果我们使用更多的连接，响应将不可避免地需要更多的 SQL 时间。

If we remove all the relationships and joins, _SQL_ becomes just like _NoSQL_.
如果我们删除所有的关系和连接，SQL 就会变得和 NoSQL 一样。

## Real world case studies [#](https://www.educative.io/courses/web-application-software-architecture-101/q24wYNLGxWy#Real-world-case-studies)
现实世界的案例研究

 [Facebook uses MySQL for storing its social graph of millions of users.](https://www.8bitmen.com/what-database-does-facebook-use-a-1000-feet-deep-dive/) Although it did have to change the DB engine and make some tweaks, MySQL fits best for its use case.
Facebook 使用 MySQL 来存储其数百万用户的社交图。尽管它确实不得不改变数据库引擎并做了一些调整，但 MySQL 最适合其使用情况。

Quora uses MySQL pretty efficiently by partitioning the data at the application level. [Here is an interesting read on it.](https://www.quora.com/Why-does-Quora-use-MySQL-as-the-data-store-instead-of-NoSQLs-such-as-Cassandra-MongoDB-or-CouchDB-Are-they-doing-any-JOINs-over-MySQL-Are-there-plans-to-switch-to-another-DB)
Quora 通过在应用层面划分数据，相当有效地使用 MySQL。这里有一个关于它的有趣的阅读。

> **Note:** A well-designed SQL data store will always be more performant than a not so well-designed NoSQL store.
> 注意：一个设计良好的 SQL 数据存储将永远比一个设计不那么好的 NoSQL 存储更有性能。

## Using both SQL and NoSQL database in an application [#](https://www.educative.io/courses/web-application-software-architecture-101/q24wYNLGxWy#Using-both-SQL-and-NoSQL-database-in-an-application)
在一个应用程序中同时使用 SQL 和 NoSQL 数据库

You may be wondering, "_Can't I use both SQL and a NoSQL datastore in my application? What if I have a requirement fitting both?_
你可能想知道，"我不能在我的应用程序中同时使用 SQL 和 NoSQL 数据存储吗？如果我有一个需求，可以同时使用这两种数据库呢？

You can!! As a matter of fact, all the large-scale online services use a mix of both to implement their systems and achieve the desired behavior.
你可以！" 事实上，所有大规模的在线服务都是混合使用这两种方法来实现他们的系统，并达到预期的行为。

The term for leveraging the power of multiple databases is called _polyglot persistence_. We will talk more about this in the next lesson.
利用多个数据库的力量的术语被称为 polyglot 持久化。我们将在下一课中进一步讨论这个问题。

---

笔记：

关系型数据库和非关系型数据库的性能是一样的。比起技术，更重要的是如何使用技术来设计系统，从而改善性能。
如果使用更多的连接，响应将不可避免地需要更多的 SQL 时间。
如果删除所有的关系和连接，SQL 就会变得和 NoSQL 一样。
利用多种数据库的力量的术语被称为 polyglot 持久化。
