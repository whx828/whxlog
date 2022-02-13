In this lesson, we will discuss a real-world example of how to reduce the deployment cost of an application by using a cache.
在本课中，我们将讨论一个现实世界的例子，即如何通过使用缓存来减少应用程序的部署成本。

## Real-life use case [#](https://www.educative.io/courses/web-application-software-architecture-101/39nKWkX4qEM#Real-life-use-case)
现实生活中的使用案例

In this lesson, I am going to share an insight from a stock market-based gaming app that I developed and deployed on the cloud.
在本课中，我将分享我开发并部署在云端的一个基于股票市场的游戏应用中的一个见解。

The game had several stocks of companies listed on the stock market and the algorithm would trigger the stocks' price movement every second, if not before.
游戏中有几只在股票市场上市的公司股票，算法会在每一秒钟（如果不是之前）触发股票的价格变动。

Initially, I persisted in the updated stock price in the database as soon as the prices changed to create a stock price movement timeline at the end of the day. However, so many databases writes would cost a fortune. The number of writes every hour was just crazy.
最初，一旦价格发生变化，我就把更新的股票价格持久地保存在数据库中，以便在一天结束时创建一个股票价格变动时间表。然而，这么多的数据库写入会花费大量的资金。每小时写入的数量实在是太多了。

Eventually, I decided to not persist the updated price every second in the database and use _Memcache_ to persist the stock prices. Then, I ran a batch operation at regular intervals to update the database.
最终，我决定不在数据库中坚持每秒更新的价格，而是使用 Memcache 来存储股票价格数据。然后，我每隔一段时间就运行一个批处理操作来更新数据库。

_Memcache_ was comparatively a lot cheaper than the disk-based database access. The cache served all the stock price requests, and the database did not have the updated values until the batch operation ran.
相对来说，Memcache 比基于磁盘的数据库访问便宜得多。缓存为所有的股票价格请求提供服务，而数据库在批处理操作运行之前没有更新的数值。

## Conclusion [#](https://www.educative.io/courses/web-application-software-architecture-101/39nKWkX4qEM#Conclusion)
结论

This tweak may not be ideal for a real-life Fintech app. However, it helped me save a truckload of money, and I was able to run the game for a longer period of time.
这个调整对于现实生活中的金融科技应用来说可能并不理想。然而，它帮助我节省了一卡车的钱，而且我能够在更长的时间内运行游戏。

So, this is one instance where you can leverage the caching mechanism to cut down costs. You might not want to persist each and every information in the database and instead, use the cache to store not so mission-critical information.
所以，这是一个你可以利用缓存机制来削减成本的例子。你可能不想在数据库中持久化每一个信息，而是使用缓存来存储不那么关键的信息。

Now, let's look into some of the caching strategies we can leverage to further enhance the app's performance.
现在，让我们来看看我们可以利用的一些缓存策略，以进一步提高应用程序的性能。

---

笔记：

不是什么时候都能无脑用缓存，满足需求的情况下省钱才是第一要务。
