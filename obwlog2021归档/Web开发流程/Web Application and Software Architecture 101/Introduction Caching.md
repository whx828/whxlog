In this lesson, you will be introduced to the concept of caching and why it is important for performance.
在本课中，您将了解缓存的概念以及为什么它对性能很重要。

Before beginning this lesson, I want to ask you a question. When you visit a website and request certain data from the server, how long do you wait for the response?
在开始本课之前，我想问你一个问题。当你访问一个网站并向服务器请求某些数据时，你会等待多长时间的响应？

5 seconds, 10 seconds, 15 seconds, 30 seconds? I know, I know, I am pushing it… 45 seconds? What? Still no response…
5 秒、10 秒、15 秒、30 秒？我知道，我知道，我在催促你......45 秒？什么？还是没有反应...

Then, you finally bounce off and visit another website for your answer. We are impatient creatures, and we want our answers quick. Caching is vital to applications to prevent users from bouncing off to other websites all the time.
然后，你终于弹开了，去另一个网站寻找你的答案。我们是没有耐心的动物，我们希望我们的答案迅速。缓存对于应用程序来说是至关重要的，它可以防止用户一直跳转到其他网站。

## What is caching? [#](https://www.educative.io/courses/web-application-software-architecture-101/q2pkD39Rk3R#What-is-caching?)
什么是缓存？

> _Caching_ is key to the performance of any kind of application. It ensures _low latency_ and _high throughput_. An application with caching will certainly do better than an application without caching, simply because it returns the response in less time as opposed to the application without a cache implemented.
> 缓存是任何类型的应用程序性能的关键。它能确保低延迟和高吞吐量。一个有缓存的应用程序肯定会比没有缓存的应用程序做得更好，仅仅是因为相对于没有实施缓存的应用程序，它返回响应的时间更短。

Implementing caching in a web application simply means copying frequently accessed data from the database, which is _disk-based_ hardware, and storing it in _Random Access Memory (RAM)_ hardware.
在网络应用程序中实施缓存只是意味着从数据库（基于磁盘的硬件）复制经常访问的数据，并将其存储在随机存取存储器（RAM）硬件中。

![[Caching In A Web Application.png]]

_RAM-based_ hardware provides faster access than disk-based hardware. As I said earlier, it ensures low latency and high throughput. Throughput means the number of network calls or _request-responses_ between the client and the server within a stipulated time.
基于 RAM 的硬件比基于磁盘的硬件提供更快的访问。正如我前面所说，它确保了低延迟和高吞吐量。吞吐量是指在规定时间内客户端和服务器之间的网络调用或请求-响应的数量。

_RAM-based_ hardware is capable of handling more requests than the _disk-based_ hardware, on which the databases run.
基于 RAM 的硬件比基于磁盘的硬件能够处理更多的请求，而数据库就运行在这些硬件上。

## Caching dynamic data [#](https://www.educative.io/courses/web-application-software-architecture-101/q2pkD39Rk3R#Caching-dynamic-data)
缓存动态数据

With caching, we can cache both the _static_ data and the _dynamic_ data. Dynamic data is data that changes more often, and it has an expiry time, or a _TTL_. After the _TTL_ ends, the data is purged from the cache, and the newly updated data is stored in it. This process is known as _cache invalidation_.
通过缓存，我们可以同时缓存静态数据和动态数据。动态数据是变化比较频繁的数据，它有一个过期时间，即 TTL。在 TTL 结束后，数据会从缓存中清除，而新更新的数据会被存储在缓存中。这个过程被称为缓冲区失效。

## Caching static data [#](https://www.educative.io/courses/web-application-software-architecture-101/q2pkD39Rk3R#Caching-static-data)
缓存静态数据

_Static_ data consists of images, font files, CSS, and other similar files. This is the kind of data that doesn’t change often and can easily be cached on the client-side in their browser or local memory. It can also be stored, on the Content Delivery Networks(CDNs).
静态数据包括图像、字体文件、CSS 和其他类似文件。这是一种不经常变化的数据，很容易被缓存在客户端的浏览器或本地内存中。它也可以存储在内容交付网络（CDNs）上。

Caching also helps applications maintain their expected behavior during network interruptions.
缓存也有助于应用程序在网络中断时保持其预期行为。

In the next lesson, we will cover how to decide if we really need a cache in our applications.
在下一课，我们将介绍如何决定我们的应用程序是否真的需要缓存。

---

笔记：

缓存是任何类型的应用程序性能的关键。它能确保低延迟和高吞吐量。一个有缓存的应用程序肯定会比没有缓存的应用程序做得更好，仅仅是因为相对于没有实施缓存的应用程序，它返回响应的时间更短。

在网络应用程序中实施缓存只是意味着从数据库（基于磁盘的硬件）复制经常访问的数据，并将其存储在随机存取存储器（RAM）硬件中。而数据库就运行在这些硬件上。

通过缓存，可以同时缓存静态数据和动态数据。
动态数据是变化比较频繁的数据，它有一个过期时间，即 TTL。在 TTL 结束后，数据会从缓存中清除，而新更新的数据会被存储在缓存中。这个过程被称为缓冲区失效。
静态数据包括图像、字体文件、CSS 和其他类似文件。这是一种不经常变化的数据，很容易被缓存在客户端的浏览器或本地内存中。它也可以存储在内容交付网络（CDNs）上。

缓存也有助于应用程序在网络中断时保持其预期行为。
