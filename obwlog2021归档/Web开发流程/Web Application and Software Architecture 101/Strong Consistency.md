In this lesson, we will discuss strong consistency.
在本课中，我们将讨论强一致性。

## What is strong consistency? [#](https://www.educative.io/courses/web-application-software-architecture-101/gxknZGrD626#What-is-strong-consistency?)
什么是强一致性？

_Strong consistency_ simply means the data has to be strongly consistent at all times. All the server nodes across the world should contain the same value of an entity at any point in time. The only way to implement this behavior is by locking down the nodes as they are being updated.
强一致性仅仅意味着数据在任何时候都必须是强一致性的。世界上所有的服务器节点在任何时候都应该包含一个实体的相同值。实现这种行为的唯一方法是在节点被更新时锁定它们。

## Real-world use case [#](https://www.educative.io/courses/web-application-software-architecture-101/gxknZGrD626#Real-world-use-case)
真实世界的用例

Let's continue the same eventual consistency example from the previous lesson. To ensure _strong consistency_ in the system, when the user in Japan likes the post, all the nodes across different geographical zones have to be locked down to prevent any concurrent updates.
让我们继续上一节课的那个最终一致性的例子。为了确保系统的强一致性，当日本的用户喜欢这个帖子时，所有跨越不同地理区域的节点都必须被锁定，以防止任何并发的更新。

This means that, at one point in time, only one user can update the post “_Like_” counter value.
这意味着，在一个时间点上，**只有一个用户**可以更新帖子的 "喜欢" 计数器的值。

![[Strong Consistency.png]]

So, once the user in Japan updates the “_Like_” counter from 100 to 101. The value gets replicated globally across all nodes. Once all the nodes reach a consensus, the locks get lifted.
因此，一旦日本的用户将 "喜欢 "计数器从 100 更新到 101。该值就会在所有节点上进行全球复制。一旦所有节点达成共识，锁就被解除了。

Now, other users can _Like_ the post. If the nodes take a while to reach a consensus, they have to wait until then.
现在，其他用户可以喜欢这个帖子。如果节点需要一段时间来达成共识，他们必须等到那时。

Well, this is surely not desirable for social applications, but think of a stock market application where the users are seeing different prices of the same stock at one point in time and updating it concurrently. This would create chaos.
好吧，这对社交应用来说肯定是不可取的，但想想股票市场的应用，用户在一个时间点上看到同一只股票的不同价格并同时更新。这将造成混乱。

Therefore, to avoid this confusion, we need our systems to be _strongly consistent_. The nodes have to be locked down for updates.
因此，为了避免这种混乱，我们需要我们的系统具有强一致性。节点必须被锁定以进行更新。

Queuing all the requests is one good way of making a system _Strongly Consistent_. Well, the implementation is beyond the scope of this course. However, we will discuss a theorem called the _CAP theorem_ which is key to implementing these consistency models.
对所有的请求进行排队是使系统强一致性的一个好方法。好吧，这个实现已经超出了本课程的范围。然而，我们将讨论一个叫做 CAP 定理的定理，它是实现这些一致性模型的关键。

So, by now, I am sure you have realized that picking the _strong consistency_ model hits the capability of the system to be _highly available_.
所以，到现在，我相信你已经意识到，选择强一致性模型会打击系统的高可用性能力。

While being updated by one user, the system does not allow other users to perform concurrent updates. This is how strongly consistent ACID transactions are implemented.
当被一个用户更新时，系统不允许其他用户进行并发更新。这就是强一致性 ACID 事务的实现方式。

## ACID transaction support [#](https://www.educative.io/courses/web-application-software-architecture-101/gxknZGrD626#ACID-transaction-support)
ACID 事务支持

Distributed systems like _NoSQL_ databases which scale horizontally on the fly, don't support _ACID transactions_ globally, and this is due to their design. The whole reason for the development of _NoSQL_ tech is the ability to be _highly available_ and _scalable_. If we have to lock down the nodes every time, it becomes just like _SQL_.
像 NoSQL 数据库这样的分布式系统，在运行中横向扩展，不支持全局的 ACID 事务，这是由其设计造成的。NoSQL 技术发展的全部原因是具有高可用和可扩展的能力。如果我们每次都要锁定节点，那么它就会变得和 SQL 一样。

So, NoSQL databases don't support _ACID transactions_ and those that claim to have terms and conditions applied to them.
所以，NoSQL 数据库不支持 ACID 交易，而那些声称有条款的数据库也不支持。

Generally, the transaction support is limited to a geographic zone or an entity hierarchy. Developers of the tech make sure that all the strongly consistent entity nodes reside in the same geographic zone to make the _ACID transactions_ possible.
一般来说，交易支持仅限于一个地理区域或一个实体层次结构。该技术的开发者确保所有强一致性的实体节点都居住在同一个地理区域，以使 ACID 交易成为可能。

Well, this is pretty much it for _strong consistency_. Now, let's take a look into the _CAP theorem_
好了，这就是强一致性的基本情况。现在，让我们来看看 CAP 定理的内容

---

笔记：

强一致性：数据在任何时候都必须是强一致性的。世界上所有的服务器节点在任何时候都应该包含一个实体的相同值。实现这种行为的唯一方法是在节点被更新时锁定它们。
当一个用户更新时，系统不允许其他用户进行并发更新。这就是强一致性 ACID 事务的实现方式。
对所有的请求进行排队是使系统强一致性的一个好方法。
