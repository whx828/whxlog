In this lesson, we will discuss eventual consistency.
在本课中，我们将讨论最终一致性。

## What is eventual consistency? [#](https://www.educative.io/courses/web-application-software-architecture-101/N7XwGDpv3np#What-is-eventual-consistency?)
什么是最终一致性？

_Eventual consistency_ is a consistency model that enables the data store to be _highly available_. It is also known as _optimistic replication_ and is key to distributed systems.
最终一致性是一种使数据存储高度可用的一致性模型。它也被称为乐观的复制，是分布式系统的关键。

_So, how exactly does it work?_
那么，它究竟是如何工作的呢？

We will break this down with the help of a use case.
我们将在一个用例的帮助下对此进行分解。

## Real-world use case [#](https://www.educative.io/courses/web-application-software-architecture-101/N7XwGDpv3np#Real-world-use-case)
真实世界的使用案例

Think of a popular microblogging site deployed across the world in different geographical regions like Asia, America, Europe, and so on. Moreover, each geographical region has multiple data center zones: North, East, West, and South. Furthermore, each of the zones has multiple clusters which have multiple server nodes running.
想想看，一个流行的微博网站部署在世界各地的不同地理区域，如亚洲、美洲、欧洲等。此外，每个地理区域都有多个数据中心区。北部、东部、西部和南部。此外，每个区域都有多个集群，其中有多个服务器节点在运行。

So, we have many datastore nodes spread across the world which the micro-blogging site uses for persisting data.
因此，我们有许多分布在世界各地的数据存储节点，微博网站使用这些节点来持久保存数据。

Since there are so many nodes running, there is no _single point of failure_. The data store service is _highly available_. Even if a few nodes go down the persistence service as a whole is still up.
由于有这么多的节点在运行，所以没有单点故障。数据存储服务是高度可用的。即使有几个节点发生故障，持久性服务作为一个整体仍然是正常的。

Alright, now let's say a celebrity makes a post on the website, and everybody around the world starts liking it.
好吧，现在让我们假设一个名人在网站上发了一个帖子，全世界的人都开始喜欢它。

At a point in time, a user in Japan likes the post which increases the “Like” count of the post from say 100 to 101. At the same time, a user in America, a different geographical zone clicks on the post and sees the “Like” count as 100, not 101.
在一个时间点上，日本的一个用户喜欢这个帖子，这使得这个帖子的 "喜欢" 数从 100 增加到 101。与此同时，一个在美国的用户，在不同的地理区域点击该帖子，看到的 "喜欢" 数是 100，而不是 101。

_Why did this happen?_
为什么会发生这种情况？

Simply, because the new updated value of the post's “Like” counter needs some time to move from Japan to America and update the server nodes running there.
很简单，因为帖子的 "赞" 计数器的新更新值需要一些时间从日本转移到美国，并更新运行在那里的服务器节点。

Although the value of the counter at that point in time was 101, the user in America sees the old inconsistent value.
虽然在那个时间点计数器的值是 101，但美国的用户看到的是不一致的旧值。

However, when they refresh their web page after a few seconds, the “Like” counter value shows as 101. So, the data was initially inconsistent but eventually became consistent across the server nodes deployed around the world. This is what _eventual consistency_ is.
然而，当他们在几秒钟后刷新他们的网页时，"喜欢 "计数器的值显示为 101。所以，数据最初是不一致的，但最终在部署在世界各地的服务器节点上变得一致。这就是所谓的最终一致性。

![[Eventual Consistency.png]]

Let's take it one step further. What if, at the same point in time, both the users in Japan and America _Like_ the post, and a user in another geographic zone, say Europe, accesses the post.
让我们再往前走一步。如果在同一时间点，日本和美国的用户都喜欢这个帖子，而另一个地理区域的用户，比如说欧洲的用户，也访问了这个帖子，怎么办？

All the nodes in different geographic zones have different post values, and they will take some time to reach a consensus.
所有在不同地理区域的节点都有不同的帖子值，他们将需要一些时间来达成共识。

The upside of eventual consistency is that the system can add new nodes on the fly without the need to block any of them, the nodes are available to the end-users to make an update at all times.
最终一致性的好处是，系统可以即时添加新的节点，而不需要封锁任何一个节点，这些节点可以供最终用户随时进行更新。

Millions of users across the world can update the values at the same time without having to wait for the system to reach a common final value across all nodes before they make an update. This feature enables the system to be _highly available_.
世界各地数以百万计的用户可以同时更新数值，而不必等待系统在所有节点上达到一个共同的最终数值再进行更新。这一特点使系统具有高可用性。

_Eventual consistency_ is suitable for use cases where the accuracy of values doesn't matter much, like in the use case above.
最终一致性适用于数值的准确性并不重要的用例，比如上面的用例。

Other eventual consistency use cases can be when keeping the count of users watching a Live video stream online. When dealing with massive amounts of analytics data, a couple of counts up and down won't matter much.
其他最终一致性的用例可以是在保持在线观看实时视频流的用户数。当处理海量的分析数据时，上下的几个计数不会有太大影响。

However, there are use cases where the data has to be laser accurate, like in banking and stock markets. We just cannot have our systems to be _eventually consistent_, and we need _strong consistency_.
然而，在一些用例中，数据必须是精确的，比如在银行和股票市场。我们就是不能让我们的系统最终一致，我们需要强大的一致性。

Let's discuss this in the next lesson.
让我们在下一课中讨论这个问题。

---

笔记：

最终一致性：一种使数据存储高度可用的一致性模型，也被称为“乐观”的复制，是分布式系统的关键，适用于数值的准确性并不重要的应用。
数据最初是不一致的，但最终在部署在世界各地的服务器节点上变得一致，这就是所谓的最终一致性。
最终一致性的好处是，系统可以即时添加新的节点，而不需要封锁任何一个节点，这些节点可以供最终用户随时进行更新。
