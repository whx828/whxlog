In this lesson, we will get an insight into NoSQL databases and how they are different from Relational databases.
在本课中，我们将深入了解 NoSQL 数据库以及它们与关系数据库的不同之处。

## What is a NoSQL database? [#](https://www.educative.io/courses/web-application-software-architecture-101/3w3o9PYAwy9#What-is-a-NoSQL-database?)
什么是 NoSQL 数据库？

In this lesson, you will get an insight into NoSQL databases and how they are different from relational databases. As the name implies, _NoSQL_ databases have no _SQL_, and they are more like _JSON-based_ databases built for Web 2.0.
在本课中，你将深入了解 NoSQL 数据库，以及它们与关系型数据库有什么不同。顾名思义，NoSQL 数据库没有 SQL，它们更像是为 Web 2.0 建立的基于 JSON 的数据库。

They are built for high-frequency read and writes, typically required in social applications like Twitter, LIVE real-time sports apps, online massive multiplayer games, etc.
它们是为高频率的读写而建立的，通常在 Twitter 等社交应用、LIVE 实时体育应用、在线大型多人游戏等方面需要。

## How is a NoSQL database different from a relational database? [#](https://www.educative.io/courses/web-application-software-architecture-101/3w3o9PYAwy9#How-is-a-NoSQL-database-different-from-a-relational-database?)
NoSQL 数据库与关系型数据库有何不同？

Now, one obvious question that would pop up in our minds is:
现在，我们头脑中会冒出一个明显的问题。

**Why the need for NoSQL databases when relational databases were doing fine, were battle-tested, were well adopted by the industry, and had no major persistence issues?**
既然关系型数据库做得很好，经受住了考验，被业界广泛采用，而且没有重大的持久性问题，为什么还需要 NoSQL 数据库？

## Scalability [#](https://www.educative.io/courses/web-application-software-architecture-101/3w3o9PYAwy9#Scalability)
可扩展性

Well, one big limitation with _SQL_ based relational databases is _scalability_. Scaling relational databases is not trivial. They have to be _Sharded_ or _Replicated_ to make them run smoothly on a cluster. In short, this requires careful thought and human intervention.
嗯，基于 SQL 的关系型数据库的一个很大的局限性是可扩展性。扩展关系型数据库并非易事。它们必须被分片或复制，以使它们在集群中顺利运行。简而言之，这需要仔细思考和人为干预。

On the contrary, _NoSQL_ databases have the ability to add new server nodes on the fly and continue the work without any human intervention, just with a snap of your fingers.
相反，NoSQL 数据库有能力在飞行中增加新的服务器节点并继续工作，不需要任何人工干预，只需弹指一挥间。

Today's websites need fast read-writes. There are millions, if not billions of users connected with each other on social networks.
今天的网站需要快速的读写。在社交网络上有数以百万计，甚至数十亿计的用户相互联系。

A massive amount of data is generated every microsecond, and we needed an infrastructure designed to manage this exponential growth.
每一微秒都会产生大量的数据，我们需要一个旨在管理这种指数级增长的基础设施。

## Clustering [#](https://www.educative.io/courses/web-application-software-architecture-101/3w3o9PYAwy9#Clustering)
集群

_NoSQL_ databases are designed to run intelligently on clusters. When I say intelligently, I mean with minimal human intervention.
NoSQL 数据库被设计为在集群上智能地运行。当我说智能的时候，我的意思是在最小的人为干预下。

Today, the server nodes even have _self-healing_ capabilities. This is pretty smooth. The infrastructure is intelligent enough to self-recover from faults.
今天，服务器节点甚至有自我修复能力。这是很顺利的。该基础设施足够智能，可以从故障中自我恢复。

However, all this innovation does not mean old-school relational databases aren't good enough, and we don't need them anymore.
然而，所有这些创新并不意味着老式的关系型数据库不够好，我们也不再需要它们了。

Relational databases still work like a charm and are still in demand. They have a specific use case. We have already gone through this in [_When to pick a relational database lesson_](https://www.educative.io/collection/page/6064040858091520/6411938009448448/6652931912761344) . Remember? 😊
关系型数据库仍然工作得很好，仍然有需求。它们有一个特定的用例。我们已经在《何时挑选关系型数据库》一课中讨论过这个问题了。还记得吗？

Also, _NoSQL_ databases had to sacrifice _Strong consistency_, _ACID Transactions_, and much more to scale horizontally over a cluster and across the data centers.
另外，NoSQL 数据库不得不牺牲强一致性、ACID 交易，以及更多的东西，以便在集群和跨数据中心中进行水平扩展。

The data with _NoSQL_ databases is more _eventually consistent_ as opposed to being _strongly consistent_.
相对于强一致性，NoSQL 数据库的数据更多的是最终一致性。

So, this obviously means _NoSQL_ databases aren't the silver bullet. This is completely fine, we don't need silver bullets. We aren't hunting werewolves. We are up to a much harder task connecting the world online.
所以，这显然意味着 NoSQL 数据库并不是银弹。这完全没问题，我们不需要银弹。我们不是在猎杀狼人。我们要做的是一项更难的任务，即在网上连接世界。

I'll talk about the underlying design of _NoSQL_ databases in much more detail and why they have to sacrifice _strong consistency_ and _transactions_ in the upcoming lessons.
我会在接下来的课程中更详细地讨论 NoSQL 数据库的底层设计，以及为什么他们必须牺牲强一致性和事务。

For now, let's focus on some of the features of _NoSQL_ databases.
现在，让我们关注一下 NoSQL 数据库的一些特点。

---

笔记：

NoSQL 数据库：没有 SQL，更像是为 Web2.0 建立的基于 JSON 的数据库，需要一个管理这种指数级增长的基础设施，是为高频率的读写而建立的，通常在 Twitter 等社交应用、LIVE 实时体育应用、在线大型多人游戏等方面应用广泛。
NoSQL 数据库有能力在运行中增加新的服务器节点并继续工作，不需要任何人工干预。
相对于强一致性，NoSQL 数据库的数据更多的是最终一致性。
