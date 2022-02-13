In this lesson, you'll learn about the need for webhooks and how they work.
在本课中，您将了解对 Webhook 的需求以及它们的工作原理。

## What are Webhooks? [#](https://www.educative.io/courses/web-application-software-architecture-101/N84yJv5RO2D#What-are-Webhooks?)
什么是 Webhooks？

Imagine you've written an _API_ that provides information on the latest, most exclusive _Baseball_ events. Now your _API_ is consumed by a lot of third-party services that fetch the information from the API, add their own flavor to it, and present it to their users.
想象一下，你写了一个 API，提供最新、最独特的棒球事件的信息。现在你的 API 被很多第三方服务所使用，这些服务从 API 中获取信息，加入他们自己的东西，并将其呈现给他们的用户。

However, so many API requests every now and then, just to check if a particular event has occurred is crushing your server. The server can hardly keep up with the requests. There is no way for consumers to know that the new information isn't available on the server yet or that an event hasn't occurred yet. They just keep polling the API. This would eventually pile up the unwanted load onto the server and could bring it down.
然而，每隔一段时间就有这么多的 API 请求，只是为了检查一个特定的事件是否已经发生，这让你的服务器不堪重负。服务器很难跟上这些请求。消费者没有办法知道服务器上还没有新的信息，或者一个事件还没有发生。他们只是不断地轮询 API。这最终会把不必要的负载堆积到服务器上，并可能使其瘫痪。

_What do we do? Is there a way we can cut down the load on our servers?_
我们该怎么做？有什么办法可以减少我们服务器上的负载吗？

Yes!! _Webhooks_.
当然有！那就是 Webhooks。

_Webhooks_ are more like _call-backs_. It's like, “I will call you when new information is available. You carry on with your work.”
Webhooks 更像是回调。这就像，"当有新信息时，我会给你打电话。你继续你的工作"。

_Webhooks_ enable communication between two services without the middleware. They have an _event-based_ mechanism.
Webhooks 使两个服务之间的通信没有中间件。它们有一个基于事件的机制。

_So, how do they work?_
那么，它们是如何工作的？

## How do webhooks work? [#](https://www.educative.io/courses/web-application-software-architecture-101/N84yJv5RO2D#How-do-webhooks-work?)
Webhooks 是如何工作的？

To use the _Webhooks_, consumers register an _HTTP_ endpoint with the service with a unique _API_ Key. It's like a phone number. Call me on this number, when an event occurs. I won't call you anymore.
为了使用 Webhooks，消费者用一个独特的 API Key 向服务注册一个 HTTP 端点。这就像一个电话号码。当一个事件发生时，用这个号码给我打电话。我就不会再给你打电话了。

Whenever new information is available on the backend, the server fires an _HTTP_ event to all the registered endpoints of the consumers, notifying them of the new update.
每当后端有新的信息，服务器就会向所有注册的消费者端点发射一个 HTTP 事件，通知他们新的更新。

![[Web Hook.png]]

Browser notifications are a good example of _Webhooks_. Instead of visiting the websites every now and then for new info, the websites notify us when they publish new content.
浏览器通知是 Webhooks 的一个好例子。与其每隔一段时间访问网站以获取新信息，不如网站在发布新内容时通知我们。

---

笔记：

Webhooks 更像是回调，它使两个服务之间的通信没有中间件，有一个基于事件的机制。
为了使用 Webhooks，消费者用一个独特的 API Key 向服务注册一个 HTTP 端点。每当后端有新的信息，服务器就会向所有注册的消费者端点发射一个 HTTP 事件，通知他们新的更新。
浏览器通知是 Webhooks 的一个好例子。与其每隔一段时间访问网站以获取新信息，不如网站在发布新内容时通知我们。
