In this lesson, we will explore how concurrent requests are handled with a message queue.
在本课中，我们将探讨如何用消息队列来处理并发请求。

## Using a message queue to handle the traffic surge [#](https://www.educative.io/courses/web-application-software-architecture-101/B19owJLE1QX#Using-a-message-queue-to-handle-the-traffic-surge)
使用消息队列来处理流量激增的问题

In the distributed _NoSQL_ databases lesson, you learned about [eventual consistency](https://www.educative.io/collection/page/6064040858091520/6411938009448448/6373547041619968) and [strong consistency](https://www.educative.io/collection/page/6064040858091520/6411938009448448/5677430486335488) . We discussed how both the consistency models come into effect when incrementing the value of a “_Like_” counter.
在分布式 NoSQL 数据库的课程中，你了解了最终一致性和强一致性。我们讨论了在增加 "Like" 计数器的值时这两种一致性模型是如何生效的。

Here is a quick insight into how we can use a message queue to manage a high number of concurrent requests to update an entity.
下面是对我们如何使用消息队列来管理大量的并发请求来更新一个实体的快速洞察。

When millions of users around the world update an entity concurrently, we can queue all the update requests in a high throughput message queue. Then, we can process them one by one in a _First in First Out (FIFO)_ approach sequentially.
当世界各地数以百万计的用户同时更新一个实体时，我们可以将所有的更新请求排在一个高吞吐量的消息队列中。然后，我们可以用先进先出（FIFO）的方法一个一个地依次处理它们。

This would enable the system to be highly available and open to updates while remaining consistent at the same time.
这将使系统能够高度可用，并对更新开放，同时保持一致。

Though implementing this approach is not as simple as it sounds, implementing anything in a distributed, real-time environment is not so trivial. I thought I should just bring this approach up so you people could reflect upon this.
虽然实现这种方法并不像听起来那么简单，但在一个分布式的实时环境中实现任何东西都不是那么微不足道的。我想我应该把这种方法提出来，以便你们这些人可以反思一下。

## How Facebook handles concurrent requests on its live video streaming service with a message queue? [#](https://www.educative.io/courses/web-application-software-architecture-101/B19owJLE1QX#How-Facebook-handles-concurrent-requests-on-its-live-video-streaming-service-with-a-message-queue?)
Facebook 如何用消息队列处理其视频直播服务上的并发请求？

Facebook's approach of handling concurrent user requests on its LIVE video streaming service is another good example of how queues can be used to efficiently handle the traffic surge.
Facebook 在其 LIVE 视频流服务上处理并发用户请求的方法是另一个很好的例子，说明如何使用队列来有效处理流量激增。

On the platform, when a popular person goes LIVE, there is a surge of user requests on the LIVE streaming server. To avert the incoming load on the server, Facebook uses cache to intercept the traffic.
在该平台上，当一个受欢迎的人开始直播时，LIVE 流媒体服务器上会出现大量的用户请求。为了避免服务器上传来的负载，Facebook 使用缓存来拦截流量。

However, since the data is streamed LIVE, the cache often is not populated with real-time data before the requests arrive. Now, this would naturally result in a _cache-miss_, and the requests would move on to hit the streaming server.
然而，由于数据是现场直播的，在请求到来之前，缓存往往没有填充实时数据。现在，这自然会导致缓存丢失，而请求会继续冲击流媒体服务器。

To avert this, Facebook queues all the user requests, requesting the same data. It fetches the data from the streaming server, populates the cache, and then serves the queued requests from the cache.
为了避免这种情况，Facebook 将所有的用户请求排成队列，要求提供相同的数据。它从流媒体服务器获取数据，填充缓存，然后从缓存中提供排队的请求。

 [This is a recommended read on Facebook's Live Streaming architecture](https://engineering.fb.com/ios/under-the-hood-broadcasting-live-video-to-millions/) .
这是一篇关于 Facebook 实时流媒体架构的推荐阅读。

Alright, moving on!! In the next chapter we will take a deep dive into stream processing.
好了，继续前进！在下一章中，我们将深入研究流处理。

---

笔记：

当世界各地数以百万计的用户同时更新一个实体时，我们可以将所有的更新请求排在一个高吞吐量的消息队列中。然后，我们可以用先进先出（FIFO）的方法一个一个地依次处理它们，这将使系统能够高度可用，并对更新开放，同时保持一致。
