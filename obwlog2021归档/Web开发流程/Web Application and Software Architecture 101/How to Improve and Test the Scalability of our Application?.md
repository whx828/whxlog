In this lesson, we will cover how to improve and test the scalability of our application.
在本课中，我们将介绍如何提高和测试我们应用程序的可扩展性。

Here are some of the common and best strategies to fine-tune the performance of our web application. If the application is performance-optimized it can withstand more traffic load with less resource consumption as opposed to an application that is not optimized for performance.
以下是一些常用和最佳的策略来微调我们的 Web 应用程序的性能。如果应用程序进行了性能优化，则与未针对性能进行优化的应用程序相比，它可以以更少的资源消耗承受更多的流量负载。

Now you might be thinking, “why are you talking about _performance_ when we should be talking about _scalability_?”
现在您可能会想，“当我们应该谈论可扩展性时，为什么要谈论性能？”

Well, the application's performance is directly proportional to scalability. If an application is not performant it will certainly not scale well. These best practices can be implemented even before the real pre-production testing is done on the application.
嗯，应用程序的性能与可扩展性成正比。如果应用程序性能不佳，它肯定不会很好地扩展。这些最佳实践甚至可以在对应用程序进行真正的预生产测试之前实施。

So, here we go.
所以，我们开始吧。

## Tuning the performance of the application – Enabling it to scale better [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Tuning-the-performance-of-the-application-%E2%80%93-Enabling-it-to-scale-better)

### Profiling [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Profiling)

_Profile_ the hell out of your app. Run _application profiler_ and _code profiler_. See which processes are taking too long and which are eating up too many resources. Find out the bottlenecks. Get rid of them.
对你的应用程序进行剖析。运行应用程序分析器和代码分析器。看看哪些进程耗时太长，哪些进程占用了太多的资源。找出瓶颈。摆脱它们。

_Profiling_ is the dynamic analysis of our code. It helps us measure the space and the time complexity of our code and enables us to figure out issues like concurrency errors, memory errors and robustness and safety of the program. [This Wikipedia resource contains a good list of performance analysis tools used in the industry](https://en.wikipedia.org/wiki/List_of_performance_analysis_tools)
剖析是对我们代码的动态分析。它帮助我们测量代码的空间和时间的复杂性，并使我们能够找出诸如并发错误、内存错误以及程序的健壮性和安全性等问题。这个维基百科资源包含了一个很好的行业内使用的性能分析工具的列表

### Caching [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Caching)

_Cache_ wisely, and cache everywhere. Cache all the static content. Hit the database only when it is really required. Try to serve all the read requests from the cache. Use a write-through cache.
明智地缓存，并且到处都要缓存。缓存所有的静态内容。只有在真正需要的时候才调用数据库。尽量从缓存中提供所有的读取请求。使用直写缓存。

### CDN [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#CDN)

Use a _Content Delivery Network (CDN)_. Using a CDN further reduces the latency of the application due to the proximity of the data from the requesting user.
使用内容交付网络 (CDN)。由于来自请求用户的数据接近，使用 CDN 进一步减少了应用程序的延迟。

### Data compression [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Data-compression)

_Compress data_. Use apt compression algorithms to compress data, and store data in the compressed form. As compressed data consumes less bandwidth, consequently, the download speed of the data on the client will be faster.
压缩数据。使用适当的压缩算法来压缩数据，并以压缩的形式存储数据。由于压缩后的数据消耗的带宽较少，因此，客户端的数据下载速度也会加快。

### Avoid unnecessary client server requests [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Avoid-unnecessary-client-server-requests)

_Avoid unnecessary round trips_ between the client and server. Try to club multiple requests into one.
避免在客户端和服务器之间进行不必要的往返。尽量将多个请求合并为一个。

These are a few of the things we should keep in mind in the context of application performance.
这些是我们在应用性能方面应该记住的几件事。

## Testing the scalability of our application [#](https://www.educative.io/courses/web-application-software-architecture-101/N7x6Jj56yrN#Testing-the-scalability-of-our-application)

Once we are done with the basic performance testing of the application, it is time for capacity planning, provisioning the right amount of hardware and computing power.
一旦我们完成了应用程序的基本性能测试，就该进行容量规划，提供适量的硬件和计算能力。

The right approach for testing the application for scalability largely depends on the design of our system. There is no definite formula for this. Testing can be performed at both the hardware and the software level. Different services and components need to be tested both individually and collectively.
测试应用程序可扩展性的正确方法在很大程度上取决于我们系统的设计。这方面没有明确的公式。测试可以在硬件和软件两个层面上进行。不同的服务和组件都需要单独和集体进行测试。

During the scalability testing, different system parameters are taken into account such as the _CPU usage, network bandwidth consumption, throughput, number of requests processed within a stipulated time, latency, memory usage of the program, end-user experience when the system is under heavy load_ etc.
在可扩展性测试中，不同的系统参数被考虑在内，如 CPU 的使用，网络带宽的消耗，吞吐量，在规定时间内处理的请求数，延迟，程序的内存使用，系统处于重载时的终端用户体验等。

In this testing phase, simulated traffic is routed to the system, to study how the system behaves under the heavy load, and how the application scales under the heavy load. Contingencies are planned for unforeseen situations.
在这个测试阶段，模拟流量被路由到系统，以研究系统在重载下的表现，以及应用程序在重载下的扩展情况。为不可预见的情况计划应急措施。

As per the anticipated traffic, the appropriate hardware and computational power are provisioned to handle the traffic smoothly with some buffer.
根据预期的流量，提供适当的硬件和计算能力，以顺利地处理流量，并提供一些缓冲区。

Several _load_ and _stress_ tests are run on the application. Tools like _JMeter_ are pretty popular for running concurrent user tests on the application if you are working on a _Java_ ecosystem. There are a lot of cloud-based testing tools available that help us simulate test scenarios just with a few mouse clicks.
在应用程序上运行一些负载和压力测试。如果你是在 Java 生态系统上工作，像 JMeter 这样的工具对于在应用程序上运行并发用户测试是非常流行的。有很多基于云的测试工具，可以帮助我们模拟测试场景，只需点击几下鼠标。

Businesses test for scalability all the time to get their systems ready to handle a traffic surge. If it's a sportings website it would prepare itself for the sports event day. If it's an e-commerce website it would make itself ready for festival season.
企业一直在测试可扩展性，使他们的系统准备好处理流量激增的问题。如果是一个体育网站，它将为体育赛事日做好准备。如果它是一个电子商务网站，它将使自己为节日的到来做好准备。

Read [how production engineers support global events on Facebook.](https://engineering.fb.com/production-engineering/how-production-engineers-support-global-events-on-facebook/)
阅读生产工程师如何支持 Facebook 上的全球活动。

Also, [how Hotstar a video streaming service scaled with over 10 million concurrent users](https://www.8bitmen.com/how-hotstar-scaled-with-10-3-million-concurrent-users-an-architectural-insight/)
另外，Hotstar 是如何将视频流媒体服务扩展到 1000 万以上的并发用户的。

In the industry tech like _Cadvisor_, _Prometheus_ and _Grafana_ are pretty popular for tracking the system via web-based dashboards.
在业界，像 Cadvisor、Prometheus 和 Grafana 这样的技术在通过基于网络的仪表盘跟踪系统方面相当流行。

![[Dashboard Monitoring Architectural Flow.png]]

I've written an article on it in case you want to [read more about the pre-production monitoring.](https://www.8bitmen.com/what-is-grafana-why-use-it-everything-you-should-know-about-it/)
我写了一篇关于它的文章，提供给你想阅读更多关于预生产监控的信息。

---

笔记：
应用程序的性能与可扩展性成正比。如果应用程序性能不佳，它肯定不具有良好的可扩展性。

应用性能：
1. 对你的应用程序进行剖析。运行应用程序分析器和代码分析器，看看哪些进程耗时太长，哪些进程占用了太多的资源，找出瓶颈。
2. 明智缓存，并且到处都要缓存。缓存所有的静态内容。只有在真正需要的时候才调用数据库，尽量从缓存中提供所有的读取请求。
3. 使用内容交付网络 (CDN)。由于来自请求用户的数据接近，使用 CDN 进一步减少了应用程序的延迟。
4. 压缩数据。使用适当的压缩算法来压缩数据，并以压缩的形式存储数据，由于压缩后的数据消耗的带宽较少，因此客户端的数据下载速度也会加快。
5. 避免在客户端和服务器之间进行不必要的往返，尽量将多个请求合并为一个。
6. 一旦完成基本性能测试，就该进行容量规划，提供适量的硬件和计算能力。

测试应用程序可扩展性可以在硬件和软件两个层面上进行。不同的服务和组件都需要单独和集体进行测试。
在应用程序上运行一些负载和压力测试。如果你是在 Java 生态系统上工作，像 JMeter 这样的工具对于在应用程序上运行并发用户测试是非常流行的。有很多基于云的测试工具，可以帮助我们模拟测试场景。
