An approach to optimizing data storage in web applications.
一种优化 Web 应用程序中数据存储的方法。

In the previous lesson, we discussed the latency that frequent database calls introduce in web applications. Now, we will look into web caching as a means of eliminating this latency.
在上一课中，我们讨论了网络应用中频繁调用数据库所带来的延迟问题。现在，我们将研究网络缓存作为消除这种延迟的一种手段。

## Introduction to web caching [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#Introduction-to-web-caching-)

Web caching is a design feature of the HTTP protocol that is meant to minimize the amount of traffic an application is handling at any given point in order to improve the responsiveness of the web application, as perceived by users, as a whole. In order to do this, caches are used at each level starting from the server itself all the way to users' browsers, and each of them is meant to store data that users are very likely to request.
Web 缓存是 HTTP 协议的一项设计功能，旨在最大限度地减少应用程序在任何给定点处理的流量，以便从整体上提高用户感知的 Web 应用程序的响应能力。为了做到这一点，从服务器本身到用户浏览器的各个级别都使用缓存，每个级别都用于存储用户很可能请求的数据。

Essentially, web caching works by caching HTTP responses for certain requests according to a probabilistic analysis of requests that are frequently observed on the server. Subsequent requests for cached content can then be fulfilled from a cache closer to the user instead of having to send the request all the way back to the web server, which then makes a call to the database for the required data.
本质上，Web 缓存的工作原理是根据对服务器上经常观察到的请求的概率分析来缓存某些请求的 HTTP 响应。对缓存内容的后续请求可以从更靠近用户的缓存中完成，而不必将请求一直发送回 Web 服务器，然后 Web 服务器调用数据库以获取所需数据。

![[How Caching Works.png]]
## Benefits of caching [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#Benefits-of-caching-)
缓存的好处

There are multiple benefits of web caching, each of which has been enumerated below:
网络缓存有很多好处，下面列举：

1.  Data can be cached at several different points in the path between the client and the server. When the required data is cached closer to the client, requests do not increase network traffic too much since they are resolved much earlier along the path.
数据可以在客户端和服务器之间的路径上的几个不同点进行缓存。当所需的数据被缓存在离客户端较近的地方时，请求不会过多地增加网络流量，因为它们在路径上更早地被解决。
2.  Extending on the first point, since requests are resolved earlier along the path, responses are sent back quicker as well, thus improving the responsiveness of web applications.
在第一点的基础上延伸，由于请求在路径上更早得到解决，响应也会更快地被送回，从而提高网络应用的响应速度。
3.  Aggressive caching along the network can also allow the application to sustain higher loads of data since a significant chunk of the data can be stored within caches.
沿网络的主动缓存还可以让应用程序承受更高的数据负载，因为大量数据可以存储在缓存中。
4.  In case the server has trouble accessing the database for some reason, data that has been stored in caches can still be served to end-users.
如果服务器由于某种原因在访问数据库时出现问题，已经存储在缓存中的数据仍然可以提供给终端用户。

Now that we know how important caching is let's look into exactly how you can cache your web application data!
现在我们知道了缓存的重要性，让我们来看看到底如何缓存你的网络应用程序数据吧！

## MongoDB [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#MongoDB)

MongoDB has inbuilt mechanisms to handle caching and keeps the most recently used data in the RAM. If users have created indexes for their queries and the working data set fits in the RAM, MongoDB serves all queries from memory. However, MongoDB does not cache query results in order to return results from the cache for all future identical queries.
MongoDB 有内置的机制来处理缓存，并在 RAM 中保留最近使用的数据。如果用户已经为他们的查询创建了索引，并且工作数据集适合在 RAM 中，那么 MongoDB 会从内存中提供所有的查询。然而，MongoDB 并不对查询结果进行缓存，以便为未来所有相同的查询从缓存中返回结果。

## Redis [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#Redis)

Redis, as we have already learned, stores all data in memory by default, and it is often used as a cache itself. It is, therefore, optimal to use as a database system in modern web applications.
正如我们已经了解到的，Redis 默认将所有数据存储在内存中，而且它本身经常被用作缓存。因此，它是现代网络应用中作为数据库系统使用的最佳选择。

## CouchDB [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#CouchDB)

CouchDB, like the other two NoSQL databases we have discussed, aims to cache all the data it possibly can. The smaller the file size, the more of the file can be cached by CouchDB. It is, therefore, a good idea to think about the data you want to store when it comes to NoSQL databases so that your web application can run seamlessly and unburdened by unnecessary amounts of data.
CouchDB 和我们讨论过的其他两个 NoSQL 数据库一样，旨在缓存所有可能的数据。文件大小越小，CouchDB 可以缓存的文件就越多。因此，当涉及到 NoSQL 数据库时，考虑一下你要存储的数据是个好主意，这样你的网络应用就可以无缝运行，不受不必要的数据量所累。

## Memcached [#](https://www.educative.io/courses/web-development-a-primer/qVZjXgROYRp#Memcached)

[Memcached](https://memcached.org/downloads) is an open-source, high-performance, distributed memory object caching system that is intended to speed up dynamic web applications by alleviating database load. Memcached stores key-value pairs of data from database calls in memory in order to speed up the database lookup process. The underlying idea of Memcached is that it allows you to take memory from parts of your system where you have more than you need and make it accessible to areas where you have less than you need. Memcached is, therefore, a highly useful tool.
Memcached 是一个开源的、高性能的、分布式内存对象缓存系统，旨在通过减轻数据库负载来加速动态网络应用。Memcached 将来自数据库调用的键值对数据存储在内存中，以加快数据库的查找过程。Memcached 的基本理念是，它允许你从系统中拥有超过需要的部分提取内存，并使其可用于拥有少于需要的区域。因此，Memcached 是一个非常有用的工具。

---

That concludes the discussion on databases and how their use can be made more efficient through caching.
关于数据库以及如何通过缓存提高其使用效率的讨论到此结束。
