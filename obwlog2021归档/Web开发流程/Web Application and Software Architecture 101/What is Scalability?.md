This lesson introduces scalability.
本课程引入可扩展性。

I am pretty sure, being in the software development universe, you've come across the word _scalability_ many times. What is it? Why is it so important? Why is everyone talking about it? What are your plans or contingencies to scale when your app or the platform experiences significant traffic growth?
我非常肯定，作为软件开发领域的一员，你已经多次接触到可扩展性这个词了。它是什么？为什么它如此重要？为什么每个人都在谈论它？当你的应用程序或平台出现显著的流量增长时，你有什么计划或应急措施来扩展？

This chapter is a deep dive into scalability. It covers all the frequently asked questions about it including: What does scalability mean in the context of web applications, distributed systems or cloud computing, etc.?
本章是对可扩展性的深入探讨。它涵盖了所有关于它的常见问题，包括在网络应用程序、分布式系统或云计算等方面，可扩展性意味着什么？

So, without further ado. Let's get started.
所以，不再赘述。让我们开始吧。

## What is scalability? [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#What-is-scalability?)

Scalability means the ability of the application to handle and withstand increased workload without sacrificing the latency.
可扩展性是指应用程序在不牺牲延迟的情况下处理和承受增加的工作负荷的能力。

For instance, if your app takes x seconds to respond to a user request. It should take the same x seconds to respond to each of the million concurrent user requests on your app.
例如，如果你的应用程序需要 X 秒来响应一个用户请求。它应该花同样的 X 秒来响应你的应用程序上的每一个百万并发的用户请求。

The backend infrastructure of the app should not crumble under a load of a million concurrent requests. It should scale well when subjected to a heavy traffic load and should maintain the latency of the system.
应用程序的后端基础架构不应在一百万个并发请求的负载下崩溃。在承受繁重的流量负载时，它应该有良好的扩展性，并且应该保持系统的延迟性。

![[Scalable Application.png]]

## What is latency? [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#What-is-latency?)

_Latency_ is the amount of time a system takes to respond to a user request. Let's say you send a request to an app to fetch an image and the system takes 2 seconds to respond to your request. The latency of the system is 2 seconds.
延迟是系统响应用户请求所需的时间。假设您向应用发送请求以获取图像，系统需要 2 秒钟来响应您的请求。系统的延迟为 2 秒。

Minimum latency is what efficient software systems strive for. No matter how much the traffic load on a system builds up, the latency should not go up. This is what scalability is.
最小延迟是高效软件系统所追求的。无论系统上的流量负载增加多少，延迟都不应该增加。这就是可扩展性。

If the latency remains the same, we can say that the application scaled well with the increased load and is highly scalable.
如果延迟保持不变，我们可以说应用程序随着负载的增加扩展得很好，并且具有高度的可扩展性。

Let's think of scalability in terms of _Big-O notation_. Ideally, the complexity of a system or an algorithm should be $O(1)$ which is _constant time_ like in a Key-value database.
让我们从 Big-O 符号的角度考虑可扩展性。理想情况下，系统或算法的复杂度应该是 $O(1)$，这是一个常数时间，就像在键值数据库中一样。

A program with the complexity of $O(n^2)$ where n is the size of the data set is not scalable. As the size of the data set increases the system will need more computational power to process the tasks.
复杂度为 $O(n^2)$ 的程序，其中 $n$ 是数据集的大小，是不可扩展的。随着数据集大小的增加，系统将需要更多的计算能力来处理任务。

_So, how do we measure latency?_
那么，我们如何衡量延迟呢？

## Measuring latency [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#Measuring-latency)

Latency is measured as the time difference between the action that the user takes on the website. It can be an event like the click of a button, and the system response in reaction to that event.
延迟被衡量为用户在网站上采取的操作之间的时间差。它可以是一个事件，例如单击按钮，以及系统对该事件的响应。

This latency is generally divided into two parts:
延迟一般分为两部分：

1.  Network latency
网络延迟
2.  Application latency
应用延迟

### Network latency [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#Network-latency)

Network latency is the amount of time that the network takes to send a data packet from point A to point B. The network should be efficient enough to handle the increased traffic load on the website. To cut down the network latency, businesses use CDN and try to deploy their servers across the globe as close to the end-user as possible.
网络延迟是网络将数据包从 A 点发送到 B 点所花费的时间。网络应该足够高效以处理网站上增加的流量负载。为了减少网络延迟，企业使用 CDN 并尝试在全球尽可能靠近最终用户的地方部署他们的服务器。

### Application latency [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#Application-latency)

Application latency is the amount of time the application takes to process a user request. There are more than a few ways to cut down the application latency. The first step is to run stress and load tests on the application and scan for the bottlenecks that slow down the system as a whole. We'll talk more about it in the upcoming lesson.
应用程序延迟是指应用程序处理一个用户请求所需的时间。削减应用程序延迟的方法不止几种。第一步是对应用程序进行压力和负载测试，扫描出使整个系统变慢的瓶颈。我们将在接下来的课程中更多地讨论这个问题。

## Why is low latency so important for online services? [#](https://www.educative.io/courses/web-application-software-architecture-101/YQmwW9gGKkM#Why-is-low-latency-so-important-for-online-services?)

Latency plays a major role in determining if an online business wins or loses a customer. Nobody likes to wait for a response on a website. There is a well-known saying, “if you want to test a person's patience, give them a slow internet connection.”
延迟在决定一个在线业务是赢得还是失去客户方面起着重要作用。没有人喜欢在一个网站上等待回应。有一句名言："如果你想测试一个人的耐心，给他们一个缓慢的网络连接"。

If the visitor gets the response within a stipulated time, great otherwise they'll bounce off to another website.
如果访问者在规定的时间内得到回应，那太好了，否则他们会跳到另一个网站。

There is ample market research that concludes high latency in applications is a big factor in customers bouncing off a website. If there is money involved, zero latency is what businesses want. If only if this was possible.
有大量的市场研究表明，应用中的高延迟是导致客户跳出网站的一个重要因素。如果涉及金钱，零延迟是企业所希望的。如果这能实现就好了。

Think of massive multiplayer online (MMO) games. A slight lag in an in-game event ruins the whole experience. A gamer with a high latency internet connection will have a slow response time despite having the best reaction time of all the players in an arena.
想想大型多人在线（MMO）游戏。游戏中的一个轻微的延迟就会破坏整个体验。尽管具有竞技场中所有玩家的最佳反应时间，但具有高延迟互联网连接的游戏玩家的响应时间会很慢。

Algorithmic trading services need to process events within milliseconds. Fintech companies have dedicated networks to run low latency trading. The regular network just won't cut it.
算法交易服务需要在几毫秒内处理事件。金融科技公司有专门的网络来运行低延迟的交易。普通网络根本无法满足要求。

We can realize the importance of low latency by the fact that in 2011 [Huawei and Hibernia Atlantic started laying a fiber-optic link cable across the Atlantic Ocean between London and New York](https://www.telegraph.co.uk/technology/news/8753784/The-300m-cable-that-will-save-traders-milliseconds.html) . This property was estimated to cost approximately $300M just to save traders 6 milliseconds of latency.
我们可以通过以下事实认识到低延迟的重要性：2011 年，华为和 Hibernia Atlantic 开始在伦敦和纽约之间铺设一条横跨大西洋的光纤连接电缆。这一财产估计要花费约 3 亿美元，只是为了给交易者节省 6 毫秒的延迟。

---

笔记：
延迟：系统响应用户请求所需的时间。
假设您向应用发送请求以获取图像，系统需要 2 秒钟来响应您的请求。系统的延迟就为 2 秒。延迟被衡量为用户在网站上采取的操作之间的时间差。例如单击按钮和系统对单击按钮事件响应的时间差。

延迟一般分为两部分：
1. 网络延迟
网络延迟是网络将数据包从 A 点发送到 B 点所花费的时间。网络应该足够高效以处理网站上增加的流量负载。为了减少网络延迟，企业使用 CDN 并尝试在全球尽可能靠近最终用户的地方部署他们的服务器。
2. 应用延迟
应用延迟是指应用程序处理一个用户请求所需的时间。削减应用程序延迟的方法有很多，比较常用的额是对应用程序进行压力和负载测试，扫描出使整个系统变慢的瓶颈。

可扩展性：应用程序在不牺牲延迟的情况下处理和承受增加的工作负荷的能力。
例如，如果你的应用程序需要 X 秒来响应一个用户请求。它应该花同样的 X 秒来响应你的应用程序上的每一个百万并发的用户请求。应用程序的后端基础架构不应在一百万个并发请求的负载下崩溃。在承受繁重的流量负载时，它应该有良好的扩展性，并且应该保持系统的延迟。
无论系统上的流量负载增加多少，延迟都不应该增加。这就是可扩展性。如果延迟保持不变，我们可以说应用程序随着负载的增加扩展得很好，并且具有高度的可扩展性。
