In this lesson, you will learn about the message queues and their functionalities.
在本课中，您将了解消息队列及其功能。

## What is a message queue? [#](https://www.educative.io/courses/web-application-software-architecture-101/m7AOo5JkW90#What-is-a-message-queue?)
什么是消息队列？
> Message queue, as the name says, is a _queue_ that routes messages from the source to the destination, or from the sender to the receiver.
> 消息队列，顾名思义，是一个将消息从源头到目的地，或从发送方到接收方的队列。

Since it is a _queue_, it follows the _FIFO (First in First Out)_ policy. The message that is sent first is delivered first. Although, messages do have a priority attached to them that makes the queue, a _priority queue_ but for now, let's keep things simple.
由于它是一个队列，它遵循先进先出（FIFO）政策。先发送的消息会先被送达。虽然，消息确实有一个优先级，使队列成为一个优先级队列，但现在，让我们把事情简单化。

![[Message Queue.png]]

## Features of a message queue [#](https://www.educative.io/courses/web-application-software-architecture-101/m7AOo5JkW90#Features-of-a-message-queue)
消息队列的特点

Message queues facilitate asynchronous behavior. You have already learned what asynchronous behavior is in the _AJAX_ lesson. Asynchronous behavior allows the modules to communicate with each other in the background without hindering their primary tasks.
消息队列促进了异步行为。你已经在 AJAX 课程中学习了什么是异步行为。异步行为允许各模块在后台相互通信，而不妨碍它们的主要任务。

You will understand the behavior of message queues with the help of an example in a short while. For now, let's take a quick look at the features of the message queues.
你将在不久之后借助于一个例子来理解消息队列的行为。现在，让我们快速浏览一下消息队列的特点。

Message queues facilitate _cross-module communication_, which is key in _service-oriented_ and _microservices_ architecture. It allows communication in a heterogeneous environment. They also provide temporary storage for storing messages until they are processed and consumed by the consumer.
消息队列有利于跨模块通信，这在面向服务和微服务架构中是关键。它允许在异构环境中进行通信。它们还提供了临时存储，用于存储消息，直到它们被消费者处理和消费。

## Real-world example of a message queue [#](https://www.educative.io/courses/web-application-software-architecture-101/m7AOo5JkW90#Real-world-example-of-a-message-queue)
消息队列的现实世界的例子

Take email for example. Both the sender and receiver of the email don't have to be online at the same time to communicate with each other. The sender sends an email, and the message is temporarily stored on the message server until the recipient comes online and reads the message.
以电子邮件为例。电子邮件的发送者和接收者都不需要同时在线就可以相互沟通。发件人发送电子邮件，消息被暂时存储在消息服务器上，直到收件人上线并阅读该消息。

Message queues enable us to run background processes, tasks, and batch jobs. Speaking of background processes, you'll understand this better with the help of a use case.
消息队列使我们能够运行后台进程、任务和批量作业。说到后台进程，在一个用例的帮助下，你会更好地理解这一点。

Think of a user signing up on a portal. After they sign up, they are immediately allowed to navigate to the application's homepage, but the sign-up process isn't complete yet. The system has to send a confirmation email to the user's registered email ID. Then, the user has to click on the confirmation email for the confirmation of the sign-up event.
想想看，一个用户在一个门户网站上注册。在他们注册后，他们被立即允许导航到应用程序的主页，但注册过程还没有完成。系统必须向用户的注册电子邮件 ID 发送一封确认邮件。然后，用户必须点击确认邮件以确认注册事件。

However, the website cannot keep the user waiting until it sends the email to the user. Either they are allowed to navigate to the home page, or they bounce off. So, this task is assigned as an asynchronous background process to a message queue. It sends an email to the user for confirmation while the user continues to browse the website.
然而，网站不能让用户一直等待，直到它向用户发送电子邮件。要么让他们浏览到主页，要么让他们跳出。所以，这个任务被指定为一个异步后台进程，交给一个消息队列。在用户继续浏览网站的时候，它向用户发送一封电子邮件进行确认。

This is how a message queue can be used to add asynchronous behavior to a web application. Message queues are also used to implement notification systems just like Facebook notifications. I'll discuss this in the upcoming lessons.
这就是消息队列如何被用来给网络应用添加异步行为。消息队列也被用来实现通知系统，就像 Facebook 的通知。我将在接下来的课程中讨论这个问题。

## Message queue in running batch jobs [#](https://www.educative.io/courses/web-application-software-architecture-101/m7AOo5JkW90#Message-queue-in-running-batch-jobs)
运行批处理作业中的消息队列

Now on to the batch jobs. Do you remember the scenario from the previous caching lesson where I discussed how I used the cache to cut down the application deployment costs?
现在来谈谈批处理作业。你还记得上一节缓存课上的情景吗，我讨论了如何使用缓存来减少应用程序的部署成本？

The batch job, which updated the stock prices at regular intervals in the database, was run by a message queue.
这个批处理作业在数据库中定期更新股票价格，它是由一个消息队列运行的。

By now, I am sure you have an idea of what a message queue is and why we use it in applications.
现在，我相信你已经知道了什么是消息队列，以及为什么我们在应用程序中使用它。

Now, you also understand that there is a _queue_, there is a message sender called the _producer_, and there is a message receiver called the _consumer_.
现在，你也明白了，在一个队列中，有一个叫做生产者的消息发送者，有一个叫做消费者的消息接收器。

Both the _producer_ and _consumer_ don't have to reside on the same machine to communicate. This is pretty obvious.
生产者和消费者不一定要住在同一台机器上才能进行通信。这是很明显的。

While routing messages through the _queue_, we can define several rules based on our business requirements. Adding priority to the messages is one I pointed out. Other important features of queuing include message acknowledgments, retrying failed messages, etc.
在通过队列路由消息时，我们可以根据我们的业务需求定义一些规则。给消息添加优先级是我指出的一个。队列的其他重要功能包括消息确认、重试失败的消息等。

Speaking of the size of the queue, there is no definite size, and it can be an infinite buffer, depending on the business's infrastructure.
谈到队列的大小，没有确定的大小，它可以是一个无限的缓冲区，这取决于企业的基础设施。

Now, we'll look into the messaging models widely used in the industry, beginning with the _publish-subscribe_ message routing model, which is pretty popular in today's online universe and is how we consume information at large.
现在，我们来研究一下业界广泛使用的消息传递模型，首先是 发布-订阅 消息路由模型，这在今天的网络世界中相当流行，也是我们广大用户消费信息的方式。

---

笔记：

消息队列：顾名思义，是一个将消息从源头到目的地，或从发送方到接收方排步的队列。由于它是一个队列，遵循先进先出（FIFO）规则，先发送的消息会先被送达。
消息队列促进了异步行为。
消息队列有利于跨模块通信，这在面向服务和微服务架构中是关键。允许在异构环境中进行通信。还提供了临时存储，用于存储消息，直到它们被消费者处理和消费。

在一个队列中，有一个叫做生产者的消息发送者，一个叫做消费者的消息接收器。
生产者和消费者不一定要住在同一台机器上才能进行通信。
在通过队列路由消息时，可以根据业务需求定义规则，包括消息确认、重试失败的消息等。
队列没有确定的大小，可以是一个无限的缓冲区，取决于企业的基础设施。
