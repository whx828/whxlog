In this lesson, we will discuss how to tell if we need caching in our application.
在本课中，我们将讨论如何判断我们的应用程序中是否需要缓存。

First up, it's always a good idea to use a cache as opposed to not using it. It doesn't do any harm. It can be used at any layer of the application, and there are no ground rules as to where it can and cannot be applied.
首先，相对于不使用缓存而言，使用缓存总是一个好主意。它不会造成任何伤害。它可以用在应用程序的任何一层，而且对于它可以和不可以应用的地方没有任何基本规则。

The most common usage of caching is database caching. Caching helps alleviate the stress on the database by intercepting the requests being routed to the database for data.
缓存的最常见用途是数据库缓存。缓存通过拦截发送到数据库的数据请求来帮助减轻数据库的压力。

Then, the cache then returns all the frequently accessed data. Thus, cutting down the load on the database by notches.
然后，缓存会返回所有经常访问的数据。因此，将数据库的负载降低了一个档次。

## Different components in the application architecture where the cache can be used [#](https://www.educative.io/courses/web-application-software-architecture-101/YMLK3P21lyM#Different-components-in-the-application-architecture-where-the-cache-can-be-used)
在应用程序架构中，可以使用缓存的不同组件

![[Caching In Web Applications-1.png]]

Across the architecture of our application, we can use caching at multiple places. Caching is used in the client browser to cache static data. It is used with the database to intercept all the data requests, in the REST API implementation, etc.
在我们应用程序的整个架构中，我们可以在多个地方使用缓存。缓存在客户端浏览器中被用来缓存静态数据。在数据库中，它被用来拦截所有的数据请求，在 REST API 实现中，等等。

Besides these places, I suggest you look for patterns. We can always cache the frequently accessed content on our website, be it from any component. There is no need to compute stuff over and over when it can be cached.
除了这些地方，我建议你找找模式。我们总是可以缓存网站上经常访问的内容，无论是从任何组件。在可以缓存的情况下，没有必要一次又一次的计算。

Think of _joins_ in relational databases. They are notorious for making the response slow. More _joins_ means more latency. A cache can avert the need for running _joins_ every time just by storing the data in demand. Now, imagine how much would this mechanism speed up our application.
想想关系型数据库中的连接。它们是臭名昭著的，会使响应变慢。更多的连接意味着更多的延时。缓存可以避免每次运行连接的需要，只需存储需求的数据。现在，想象一下这种机制会给我们的应用程序带来多大的速度。

Also, even if the database goes down for a while, the users won't notice it as the cache would continue to serve the data requests.
另外，即使数据库瘫痪了一段时间，用户也不会注意到，因为缓存会继续为数据请求提供服务。

Caching is also the core of the _HTTP_ protocol. [This is a good resource to read more about it.](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
缓存也是 HTTP 协议的核心。这是一个很好的资源来阅读更多关于它的信息。

We can store user sessions in a cache. It can be implemented at any layer of an application be it at the OS level, at the network level, CDN, or the database.
我们可以在缓存中存储用户会话。它可以在应用程序的任何一层实现，无论是在操作系统层面，在网络层面，CDN，还是在数据库。

You might remember, we talked about _Key-value_ data stores in the database lesson. They are primarily used to implement caching in web applications.
你可能还记得，我们在数据库课上谈到了键值数据存储。它们主要用于在网络应用中实现缓存。

They can be used for _cross-module communication_ in a _microservices_ architecture by saving the shared data which is commonly accessed by all the services. It acts as a backbone for the _microservice_ communication.
它们可以用于微服务架构中的跨模块通信，保存所有服务都要访问的共享数据。它充当了微服务通信的骨干。

_Key-value_ data stores via caching are also widely used in _in-memory data stream processing_ and running _analytics_.
通过缓存的键值数据存储也被广泛用于内存数据流处理和运行分析。

---

笔记：

使用缓存总是一个好主意，它不会造成任何伤害，可以用在应用程序的任何一层，而且对于它可以和不可以应用的地方没有任何基本规则。
缓存的最常见用途是数据库缓存。缓存通过拦截发送到数据库的数据请求来帮助减轻数据库的压力。然后缓存会返回所有经常访问的数据，因此将数据库的负载降低了一个档次。
