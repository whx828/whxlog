In this lesson, we will discuss how notification systems and real-time feeds are implemented using message queues.
在本课中，我们将讨论如何使用消息队列实现通知系统和实时反馈。

This is the part where you will get an insight into how notification systems and real-time feeds are designed with the help of message queues. However, these modules are really complex in today's modern Web 2.0 applications. They involve machine learning, understanding user behavior, recommending new and relevant information, integrating other modules with them, and so on. We won't get into this level of complexity, simply because it's not required.
这一部分，你将深入了解通知系统和实时馈送是如何在消息队列的帮助下设计的。然而，在今天的现代 Web2.0 应用中，这些模块确实很复杂。它们涉及到机器学习、理解用户行为、推荐新的相关信息、将其他模块与之整合等等。我们不会去讨论到这种复杂程度，只因为不需要。

I present a very simple use case so we can wrap our heads around it.
我提出了一个非常简单的用例，这样我们就可以理清头绪了。

Also, as we discuss this use case, think from your own perspective. Imagine how you would implement such a notification system from the bare bones. This will help you understand the concept better.
另外，当我们讨论这个用例时，请从你自己的角度思考。想象一下你将如何从最基本的地方实现这样一个通知系统。这将有助于你更好地理解这个概念。

## Real-world use case [#](https://www.educative.io/courses/web-application-software-architecture-101/myj404MRxvp#Real-world-use-case)
真实世界的用例

Alright!! So, imagine we are writing a social network like Facebook using a relational database, and we are using a message queue to add the asynchronous behavior to our application.
好吧！所以想象一下，我们正在使用关系型数据库编写一个类似于 Facebook 的社交网络，我们正在使用一个消息队列来为我们的应用程序添加异步行为。

In the application, a user will have many friends and followers. This is a _many-to-many_ relationship, like a social graph. One user has many friends, and they would be friends of many users. This is like we discussed in the graph database lesson. Remember?
在应用程序中，一个用户将有许多朋友和追随者。这是一个多对多的关系，就像一个社交图谱。一个用户有很多朋友，他们也会是很多用户的朋友。这就像我们在图数据库课上讨论的那样，还记得吗？

![[Graph Database 1.png]]

So, when a user creates a post on the website, we would persist it in the database. There will be one _User_ table and another _Post_ table. Since one user will create many posts, it will be a _one-to-many_ relationship between the user and their posts.
因此，当一个用户在网站上创建一个帖子时，我们会将其持久化在数据库中。将有一个用户表和另一个帖子表。由于一个用户将创建许多帖子，所以用户和他们的帖子之间将是一对多的关系。

At the same time, as we persist the post in the database, we have to show the post created by the user on the home page of their friends and followers, even sending notifications if needed.
同时，当我们将帖子持久化在数据库中时，我们必须在用户的朋友和追随者的主页上显示该用户创建的帖子，甚至在需要时发送通知。

How would you implement this? Pause and think, before you read further.
你将如何实现这一点？在你进一步阅读之前，请暂停并思考。

## Pull-based approach [#](https://www.educative.io/courses/web-application-software-architecture-101/myj404MRxvp#Pull-based-approach)
基于 Pull 的方法

_Alright!!_
好吧！

One simple way to implement this without the message queue would be for every user on the website to poll the database if any of their connections have a new update at regular short intervals.
一个没有消息队列的简单实现方法是让网站上的每个用户在定期的短间隔内轮询数据库是否有他们的连接有新的更新。

For this, we will find all the user's connections and run a check on every connection one by one for a new post created by them.
为此，我们将找到所有用户的连接，并对每个连接逐一进行检查，看看是否有他们创建的新帖子。

If there are new posts created by the user's connections, the query will pull them all and display the posts on their home page. We can also send the notifications to the user about new posts tracking the notification count using a notification counter column in the _User_ table and adding an extra _AJAX_ poll query from the client for new notifications.
如果用户的连接有新的帖子，查询将把它们全部 PULL 出来并在他们的主页上显示这些帖子。我们还可以向用户发送关于新帖子的通知，使用用户表中的通知计数器列跟踪通知计数，并从客户端添加一个额外的 AJAX 轮询来获取新的通知。

![[Notification System & Real-time Feed Via Polling.png]]

_What do you think of this approach? It's pretty simple and straightforward right?_
你认为这种方法如何？它非常简单明了，对吗？

There are two major downsides to this approach.
这种方法有两个主要的缺点。

First, we are polling the database very often, and this is expensive. It will consume a lot of bandwidth and will also put a lot of unnecessary load on the database.
首先，我们要非常频繁地轮询数据库，这很昂贵。它会消耗大量的带宽，也会给数据库带来很多不必要的负荷。

The second downside is that the user's post displayed on the home page of their connection's homepage will not be in real-time. The posts won't display until the database is polled. We may consider this real-time, but it is not really real-time.
第二个缺点是，用户在其连接的主页上显示的帖子将不是实时的。在数据库被轮询之前，这些帖子不会显示。我们可以认为这是实时的，但它并不是真正的实时。

## Push-based approach [#](https://www.educative.io/courses/web-application-software-architecture-101/myj404MRxvp#Push-based-approach)
基于 Push 的方法

Let's make our system more performant. Instead of polling the database every now and then, we will take the help of a message queue.
让我们使我们的系统更有效率。我们将利用消息队列的帮助，而不是每隔一段时间就轮询数据库。

This time, when a user creates a new post, it will have a _distributed transaction_. One transaction will update the database, and the other transaction will send the post payload to the message queue. _Payload_ means the content of the message posted by the user.
这一次，当一个用户创建一个新的帖子时，它将有一个分布式事务。一个事务将更新数据库，另一个事务将把帖子的有效载荷发送到消息队列中。有效载荷指的是用户发布的消息内容。

Notification systems and real-time feeds establish a _persistent connection_ with the database to facilitate streaming data in real-time. We have already been through this.
通知系统和实时馈送与数据库建立一个持久的连接，以方便实时流式数据。我们已经经历了这个过程。

![[Communication is like a conversation between the client & the server.png]]

On receiving the message, the message queue will asynchronously and immediately push the post to the user's connections that are online. There is no need for them to poll the database at regular intervals to check if the user has created a post.
收到消息后，消息队列会异步地立即将帖子推送到用户的在线连接上。他们不需要定期轮询数据库以检查用户是否创建了帖子。

We can also use the message queue temporary storage with a _TTL_ for the user's connections of the user to come online and then push the updates to them. We can also have a separate _Key-value_ database to store the details of the user required to push the notifications to their connections, like their connection ID's and stuff. This would avert the need to even poll the database to get the user's connection.
我们也可以使用消息队列的临时存储，用一个 TTL 让用户的连接上线，然后把更新推送给他们。我们还可以有一个单独的键值数据库来存储推送通知给用户的连接所需的细节，比如他们的连接 ID 之类的。这将避免需要轮询数据库来获取用户的连接。

So, did you see how we transitioned from a _pull-based_ mechanism to a _push-based_ mechanism with the help of message queues? This would certainly spike the performance of the application and cut down a lot of resource consumption, thus saving truckloads of our hard-earned money.
那么，你看到我们是如何在消息队列的帮助下从一个基于拉的机制过渡到基于 PUSH 的机制的吗？这肯定会提高应用程序的性能，并减少大量的资源消耗，从而节省我们辛苦赚来的钱。

![[Notification System & Real-time Feed Via Message Queue-1.png]]

There are several ways we can handle the distributed transactions. Although the transactions are distributed, they can still work as a single unit.
我们有几种方法可以处理分布式事务。虽然事务是分布式的，但它们仍然可以作为一个单元工作。

If the database persistence fails, naturally, we will roll back the entire transaction. There won't be any message push to the message queue either.
如果数据库持久化失败，自然，我们将回滚整个事务。也不会有任何消息推送到消息队列中。

What if the message queue push fails? Do you want to roll-back the transaction, or do you want to proceed? The decision depends entirely on you and how you want your system to behave.
如果消息队列推送失败怎么办？你是想回滚事务，还是继续进行？这个决定完全取决于你和你希望你的系统如何表现。

Even if the message queue push fails, the message isn't lost. It can still be persisted in the database.
即使消息队列推送失败，消息也不会丢失。它仍然可以被持久化在数据库中。

When the user refreshes their homepage, you can write a query where they can poll the database for new updates. Take the polling approach we discussed initially as a backup.
当用户刷新他们的主页时，你可以写一个查询，他们可以轮询数据库的新更新。采取我们最初讨论的轮询方法作为备份。

Otherwise, you can totally rollback the transaction, even if the database persistence transaction is a success but the message queue push transaction fails. The post still hasn't gone into the database yet as it is generally a two-phase commit. We can always write custom distributed transaction code or leverage the distributed transaction managers that the frameworks offer.
否则，你完全可以回滚事务，即使数据库持久化事务是成功的，但消息队列推送事务失败了。帖子仍然没有进入数据库，因为它一般是一个两阶段的提交。我们总是可以编写自定义的分布式事务代码或利用框架提供的分布式事务管理器。

I can go on and on about this, into the minutest of the details, but that would just make the lesson unnecessarily lengthy. For now, I have just touched the surface, to help you understand how notification systems and real-time feeds work.
我可以继续讲下去，讲到最细微的细节，但这只会让课程变得不必要的冗长。现在，我只是触及了表面，以帮助你理解通知系统和实时反馈的工作方式。

Just like the post creation process, or the flow repeats itself when the users trigger events like visiting a public place, eating at a restaurant, etc. The message queues push the events to the connections of the user.
就像帖子的创建过程一样，或者说当用户触发事件时，如访问公共场所、在餐馆吃饭等，流程会重复进行。消息队列将事件推送给用户的连接。

When designing scalable systems, I want to emphasize that there is no perfect or best solution. The solution should serve us well and fulfill our business requirements. Optimization is an evolutionary process, so don't sweat about it in the initial development cycles.
在设计可扩展的系统时，我想强调的是，没有完美或最好的解决方案。该解决方案应该很好地服务于我们，并满足我们的业务需求。优化是一个渐进的过程，所以在最初的开发周期中不要想着尽善尽美。

First, get the skeleton in place and then start optimizing notch by notch.
首先，让骨架到位，然后开始逐一优化细节。

Recommended read - [How Does LinkedIn Identify Its Users Online?](https://www.8bitmen.com/linkedin-real-time-architecture-how-does-linkedin-identify-its-users-online/)
推荐阅读 -- LinkedIn 是如何在网上识别其用户的？

---

笔记：

在设计可扩展的系统时，没有完美或最好的解决方案。该解决方案应该很好地满足业务需求。优化是一个渐进的过程，所以在最初的开发周期中不要想着尽善尽美。
