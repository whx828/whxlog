In this lesson, we will discuss some of the commonly used caching strategies.
在本课中，我们将讨论一些常用的缓存策略。

There are different kinds of caching strategies that serve specific use cases. Those are _cache aside_, _read-through cache_, _write-through cache_ & _write-back cache_
不同类型的缓存策略，为特定的使用情况服务。这些策略包括：预留缓存、通读式缓存、写入式缓存和回写式缓存。

Let's find out what they are and why we need different strategies when implementing caching.
让我们来看看它们是什么，以及为什么我们在实施缓存时需要不同的策略。

## Cache aside [#](https://www.educative.io/courses/web-application-software-architecture-101/gx3KN5jOjYY#Cache-aside)
撇开缓存

This is the most common caching strategy. In this approach, the cache works along with the database trying to reduce the hits on it as much as possible.
这是最常见的缓冲策略。在这种方法中，缓存与数据库一起工作，试图尽可能地减少对它的点击。

The data is _lazy-loaded_ in the cache. When the user sends a request for particular data, the system first looks for it in the cache. If present, it is simply returned. If not, the data is fetched from the database, and the cache is updated and returned to the user.
数据被懒洋洋地加载到缓存中。当用户对特定的数据发出请求时，系统首先在缓存中寻找它。如果存在，就会简单地返回。如果没有，就从数据库中获取数据，然后更新缓存并返回给用户。

This kind of strategy works best with _read-heavy_ workloads. This includes the kind of data that is not frequently updated, like user profile data in a portal. User's name, account number, etc.
这种策略在读取量大的工作负载中效果最好。这包括那种不经常更新的数据，如门户网站的用户资料数据。用户的姓名、账号等。

The data in this strategy is written directly to the database. This means that the data present in the cache and the database could become inconsistent. To avoid this, data on the cache has a TTL. After the stipulated period, the data is invalidated from the cache.
这种策略中的数据是直接写到数据库中的。这意味着存在于缓存和数据库中的数据可能变得不一致。为了避免这种情况，缓存中的数据有一个 TTL。在规定的时间后，数据将从缓存中失效。

## Read-through [#](https://www.educative.io/courses/web-application-software-architecture-101/gx3KN5jOjYY#Read-through)
通读

This strategy is pretty similar to the _cache aside_ strategy. A subtle difference from the _cache aside_ strategy is that the cache always stays consistent with the database in the read-through strategy.
这个策略与缓存的策略很相似。与预留缓存策略的一个细微差别是，在透读策略中，缓存始终与数据库保持一致。

The cache library, or the framework, takes the onus of maintaining consistency with the backend. The information in this strategy, is also _lazy-loaded_ in the cache, only when the user requests it.
缓存库，或者说框架，承担了与后台保持一致的责任。这个策略中的信息，也是在用户要求时才懒得加载到缓存中。

So, for the first time, when information is requested, it results in a cache miss. Then, the backend has to update the cache while returning the response to the user.
所以，在第一次请求信息的时候，会导致缓存缺失。然后，后端必须在向用户返回响应时更新缓存。

However, the developers can always preload the cache with the information that is expected to be requested most by the users.
然而，开发人员总是可以用预计被用户请求最多的信息来预装缓存。

## Write-through [#](https://www.educative.io/courses/web-application-software-architecture-101/gx3KN5jOjYY#Write-through)
写入

In this strategy, each and every information written to the database even goes through the cache. Before the data is written to the DB, the cache is updated with it.
在这个策略中，每一个写入数据库的信息都要经过缓冲区。在数据被写入数据库之前，缓存也会随之更新。

This maintains high consistency between the cache and the database even though it adds a little latency during the write operations because the data is updated in the cache separately. This works well for write-heavy workloads like online massive multiplayer games.
这样可以保持缓存和数据库之间的高度一致性，尽管在写操作过程中会增加一点延迟，因为数据会在缓存中单独更新。这对于像在线大型多人游戏这样的写入量大的工作负载来说非常有效。

This strategy is generally used with other caching strategies to achieve optimized performance.
这个策略一般和其他的缓存策略一起使用，以达到优化的性能。

## Write-back [#](https://www.educative.io/courses/web-application-software-architecture-101/gx3KN5jOjYY#Write-back)
回写

This strategy helps optimize costs significantly. In the _write-back_ caching strategy the data is directly written to the cache instead of the database, and the cache after some delay, as per the business logic, writes data to the database.
这种策略有助于大幅优化成本。在回写缓存策略中，数据被直接写入缓存，而不是数据库，缓存经过一定的延迟，按照业务逻辑，将数据写入数据库。

If there are quite a heavy number of writes in the application, developers can reduce the frequency of database writes to cut down the load and the associated costs.
如果应用程序中有大量的写入，开发人员可以减少数据库写入的频率，以减少负载和相关的成本。

This is the strategy I talked about in the previous lesson.
这就是我在上一课中谈到的策略。

A risk in this approach is if the cache fails before the DB is updated, the data might get lost. Again, this strategy is used with other caching strategies to make the most out of them.
这种方法的一个风险是，如果在数据库更新之前缓存失效，数据可能会丢失。同样的，这个策略也是和其他的缓存策略一起使用，以发挥它们的最大作用。

With this, we are done with the caching mechanism of web applications. Now let's move on to the world of message queues.
至此，我们已经完成了网络应用程序的缓存机制的研究。现在让我们进入到消息队列的世界。

---

笔记：

预留缓存：是最常见的缓冲策略。缓存与数据库一起工作，试图尽可能地减少对它的点击。
当用户对特定的数据发出请求时，系统首先在缓存中寻找它。如果存在就会返回。如果没有就从数据库中获取数据，然后更新缓存再返回给用户。
这种策略在读取量大的工作负载中效果最好，数据是直接写到数据库中的。这意味着存在于缓存和数据库中的数据可能变得不一致。为了避免这种情况，缓存中的数据有一个 TTL。在规定的时间后，数据将从缓存中失效。

通读式缓存：与缓存的策略很相似。与预留缓存策略的一个细微差别是，在透读策略中，缓存始终与数据库保持一致。缓存库或者说框架，承担了与后台保持一致的责任。在第一次请求信息的时候，会导致缓存缺失。然后，后端必须在向用户返回响应时更新缓存。

写入式缓存：每一个写入数据库的信息都要经过缓冲区。在数据被写入数据库之前，缓存也会随之更新。
这样可以保持缓存和数据库之间的高度一致性，尽管在写操作过程中会增加一点延迟，因为数据会在缓存中单独更新。这对于像在线大型多人游戏这样的写入量大的工作负载来说非常有效。
这个策略一般和其他的缓存策略一起使用，以达到优化的性能

回写式缓存：数据被直接写入缓存，而不是数据库，缓存经过一定的延迟，按照业务逻辑，将数据写入数据库。
如果应用程序中有大量的写入，开发人员可以减少数据库写入的频率，以减少负载和相关的成本。
这种方法的一个风险是，如果在数据库更新之前缓存失效，数据可能会丢失。同样的，这个策略也是和其他的缓存策略一起使用，以发挥它们的最大作用。
