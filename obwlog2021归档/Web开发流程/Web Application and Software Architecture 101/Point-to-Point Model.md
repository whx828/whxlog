In this lesson, you will learn about the point to point messaging model, its applications, popular message queue protocols & the technology used to implement them.
在本课中，你将了解点对点消息传递模型、它的应用、流行的消息队列协议和用于实现它们的技术。

## What is a point-to-point model? [#](https://www.educative.io/courses/web-application-software-architecture-101/gkOZ8RLzoLj#What-is-a-point-to-point-model?)
什么是点对点模式？
> The use case for *Point-to-point* communication is pretty simple. It's where the message from the producer is consumed by only one consumer.
> 点对点通信的用例非常简单。它是指来自生产者的消息只被一个消费者消费。

![[Point to Point Model.png]]

It's like a _one-to-one_ relationship, while a _publish-subscribe_ model is a _one to many_ relationships.
这就像一对一的关系，而 发布-订阅 模型是一对多的关系。

Though based on the business requirements, we can set up multiple combinations in this messaging model, including adding multiple producers and consumers to a queue. However, at the end of the day, a message sent by the producer will be consumed by only one consumer. This is why it's called a _point-to-point_ queuing model. It's not a broadcast of messages rather an entity to entity communication.
虽然根据业务需求，我们可以在这个消息传递模型中设置多种组合，包括在一个队列中添加多个生产者和消费者。然而，到最后，生产者发送的消息将只被一个消费者消费。这就是为什么它被称为点对点排队模型。它不是消息的广播，而是实体对实体的通信。

## Messaging protocols [#](https://www.educative.io/courses/web-application-software-architecture-101/gkOZ8RLzoLj#Messaging-protocols)
消息传递协议

Speaking of the messaging protocols, there are two popular protocols when working with message queues: [AMQP Advanced Message Queue Protocol](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol) and [STOMP Simple or Streaming Text Oriented Message Protocol](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol) .
说到消息传递协议，在使用消息队列时，有两个流行的协议。AMQP 高级消息队列协议和 STOMP 简单或面向文本流的消息协议。

## Technology used to implement the messaging protocols [#](https://www.educative.io/courses/web-application-software-architecture-101/gkOZ8RLzoLj#Technology-used-to-implement-the-messaging-protocols)
用来实现消息传递协议的技术

Queuing tech widely used in the industry, are _RabbitMQ_, _ActiveMQ_, _Apache Kafka_, etc.
业界广泛使用的队列技术，有 RabbitMQ、ActiveMQ、Apache Kafka 等。

So, this is pretty much it on the queuing models. Next, you will get an insight into how notification systems work with message queues.
所以，关于队列模型的内容就差不多了。接下来，你将深入了解通知系统如何与消息队列一起工作。

---

笔记：

点对点通信：来自生产者的消息只被一个消费者消费。这就像一对一的关系，而 发布-订阅 模型是一对多的关系。
虽然根据业务需求，我们可以在这个消息传递模型中设置多种组合，包括在一个队列中添加多个生产者和消费者。然而到最后，生产者发送的消息将只被一个消费者消费。这就是为什么它被称为点对点排队模型。它不是消息的广播，而是实体对实体的通信。
