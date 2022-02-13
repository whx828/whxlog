In this lesson, you will learn about the publish-subscribe model, including when it is used and what exchanges are in messaging?
在本课中，你将了解 发布-订阅 模式，包括何时使用以及信息传递中的哪些交换？

## What is a publish-subscribe Model? [#](https://www.educative.io/courses/web-application-software-architecture-101/q2nll5wZGBk#What-is-a-publish-subscribe-Model?)
什么是 发布-订阅 模式？
> A _publish-subscribe(pub-sub)_ model is the model where multiple consumers receive the same message sent from a single or multiple producers.
> 发布-订阅(pub-sub)模式是指多个消费者接收来自单个或多个生产者的同一消息的模式。

![[Publish Subscribe Pattern-0.png]]

A real-world newspaper service is a good analogy for the _publish-subscribe_ pattern. Consumers subscribe to a newspaper service, and the service delivers the news to multiple consumers of its service every single day.
现实世界中的报纸服务是 发布-订阅 模式的一个很好的比喻。消费者订阅了报纸服务，而该服务每天都向其服务的多个消费者提供新闻。

In the online world, we often subscribe to various topics in applications to be continually notified of the new updates on any particular segment, be it sports, politics, economics, etc.
在网络世界中，我们经常在应用程序中订阅各种主题，以便不断得到关于任何特定部分的最新信息，无论是体育、政治、经济等等。

## Exchanges [#](https://www.educative.io/courses/web-application-software-architecture-101/q2nll5wZGBk#Exchanges)
交换机

To implement the _pub-sub_ pattern, message queues have _exchanges_ that further push messages to the queues based on the exchange type and the set rules. _Exchanges_ are just like telephone exchanges, which route messages from sender to the receiver through the infrastructure based on a certain logic.
为了实现 pub-sub 模式，消息队列有交换，根据交换类型和设定的规则，将消息进一步推送到队列中。交换机就像电话交换机一样，根据一定的逻辑，通过基础设施将消息从发送方传送到接收方。

![[Publish Subscribe Pattern.png]]

There are different types of exchanges available in message queues, some of which are, _direct_, _topic_, _headers_, and _fanout_. To get more insight into how these different exchange types work, [this RabbitMQ article is a good read](https://www.rabbitmq.com/tutorials/amqp-concepts.html) .
在消息队列中有不同类型的交换，其中一些是 _direct_, _topic_, _headers_, 和 _fanout_。为了更深入地了解这些不同的交换类型是如何工作的，这篇 RabbitMQ 文章是一篇不错的阅读。

There is no certainty that every message queue tech will have the same exchange type. I am just discussing general scenarios here. Things can change with technology. Besides, technology is not important. Right now, all you need is an idea of how things work.
并不确定每个消息队列技术都会有相同的交换类型。我只是在这里讨论一般情况。事情会随着技术的发展而改变。此外，技术并不重要。现在，你所需要的只是一个关于事情如何运作的想法。

So, we would pick a _fanout_ exchange type to broadcast the messages from the queue. The exchange will push the message to the queue and the consumers will receive the message. The relationship between exchange and the queue is known as _binding_.
所以，我们会选择一个 fanout 交换类型来广播队列中的消息。交换机将把消息推送到队列中，消费者将收到消息。交换机和队列之间的关系被称为绑定。

This is how we get updates of new content generated in real-time on social apps by businesses or individuals followed by a lot of people.
这就是我们如何获得企业或个人在社交应用上实时产生的新内容的更新，这些内容被很多人关注。

In the upcoming lessons, I will discuss how real-time feeds and notification systems work in social networks powered by the message queues in detail.
在接下来的课程中，我将详细讨论由消息队列驱动的社交网络中的实时馈送和通知系统如何工作。

Let's move on to the point-to-point messaging model.
让我们继续讨论点对点的消息传递模式。

---

笔记：

发布-订阅(pub-sub)模式：多个消费者接收来自单个或多个生产者的同一消息的模式。
为了实现发布-订阅(pub-sub)模式，消息队列有交换、根据交换类型和设定的规则，将消息进一步推送到队列中。交换机就像电话交换机一样，根据一定的逻辑，通过基础设施将消息从发送方传送到接收方。
