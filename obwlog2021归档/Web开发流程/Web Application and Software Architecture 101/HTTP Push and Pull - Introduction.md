In this lesson, we provide an introduction to the HTTP Push and Pull mechanism.
在本课中，我们将介绍 HTTP Push/Pull 机制。

In this lesson, you will get an insight into the HTTP Push and Pull mechanism. We know that the majority of the communication on the web happens over _HTTP_, especially whenever the client-server architecture is involved.
在本课中，您将深入了解 HTTP Push/Pull 机制。我们知道 Web 上的大部分通信都是通过 HTTP 进行的，尤其是在涉及客户端--服务器架构时。

There are two modes of data transfer between the client and the server. _HTTP PUSH_ and _HTTP PULL_.
客户端和服务器之间有两种数据传输模式。 HTTP Push和 HTTP Pull。

Let's find out what they are and what they do.
让我们搞清楚它们是什么以及它们都会做什么。

## HTTP PULL [#](https://www.educative.io/courses/web-application-software-architecture-101/JE1yEz4XyZJ#HTTP-PULL)

As I stated earlier, for every response, there has to be a request first. The client sends the request and the server responds with the data. This is the default mode of HTTP communication, called the HTTP PULL mechanism.
正如前面所说，对于每一个响应，首先必须先有一个请求。客户端发送请求，而服务器则以数据进行响应。这是 HTTP 通信的默认模式，称为 HTTP PULL 机制。

The client pulls the data from the server whenever required. It keeps doing this over and over to fetch the updated data.
客户端在需要时从服务器上获取数据。它不断地重复这样做以获取最新的数据。

An important thing to note here is that every request to the server and the response to it consumes bandwidth. Every hit on the server costs the business money and adds more load on the server.
这里需要注意的一件事是，对服务器的每一个请求和响应都会消耗带宽。服务器上的每一次点击都会花费企业的钱，并增加服务器上的负载。

What if there is no updated data available on the server, every time the client sends a request?
如果每次客户发送请求时，服务器上没有可用的更新数据怎么办？

The client doesn't know that, so naturally it would keep sending the requests to the server over and over. This is not ideal and a waste of resources. Excessive pulls by the clients have the potential to bring down the server.
客户端并不知道这一点，所以它自然会不断向服务器发送请求，一遍又一遍。这并不理想，是对资源的浪费。客户端过多的 PULL 有可能导致服务器瘫痪。

## HTTP PUSH [#](https://www.educative.io/courses/web-application-software-architecture-101/JE1yEz4XyZJ#HTTP-PUSH)

To tackle this, we have the HTTP PUSH based mechanism. In this mechanism, the client sends the request for particular information to the server just once. After the first request, the server keeps pushing the new updates to the client whenever they are available.
为了解决这个问题，我们有基于 HTTP PUSH 的机制。在这个机制中，客户只需向服务器发送一次特定信息的请求。在第一次请求之后，只要有新的更新，服务器就会不断地推送给客户端。

The client doesn't have to worry about sending additional requests to the server for data. This saves a lot of network bandwidth and cuts down the load on the server by notches.
客户端不需要担心向服务器发送额外的数据请求。这节省了大量的网络带宽，并将服务器的负载降低了一个档次。

This is also known as a _callback_. The client phones the server for information. The server responds, “Hey!! I don't have the information right now but I'll call you back whenever it is available”.
这也被称为回调。客户端给服务器打电话询问信息。服务器回应说："嘿！！我现在没有信息，但只要有信息我就会给你回电"。

A very common example of this is user notifications. We have them in almost every web application today. We get notified whenever an event happens on the backend.
一个非常常见的例子是用户通知。今天，我们几乎在每一个网络应用中都有它们。每当后端有事件发生时，我们就会得到通知。

Clients use _Asynchronous JavaScript & XML (AJAX)_ to send requests to the server in the HTTP PULL based mechanism.
客户端使用异步 JavaScript 和 XML（AJAX），在基于 HTTP PULL 的机制中向服务器发送请求。

There are multiple technologies involved in the _HTTP PUSH_ based mechanism such as:
在基于 HTTP PUSH 的机制中涉及多种技术，例如：

- _Ajax Long polling_
Ajax 长轮询
- _Web Sockets_
网络套接字
- _HTML5 Event Source_
HTML5 事件源
- _Message Queues_
消息队列
- _Streaming over HTTP_
HTTP 上的流媒体

We'll go over all of them in detail up next.
我们接下来会详细介绍所有这些东西。

---

笔记：
客户端发送请求，而服务器则以数据进行响应。这是 HTTP 通信的默认模式，称为 HTTP PULL 机制。
客户端在需要时从服务器 PULL 数据，它不断地重复这样做以获取最新的数据，而对服务器的每一个请求和响应都会消耗带宽，服务器上的每一次点击都会花费企业的钱，并增加服务器上的负载。客户端过多的 PULL 有可能导致服务器瘫痪。
为了解决这个问题，出现了基于 HTTP PUSH 的机制：客户端只需向服务器发送一次特定信息的请求，**在第一次请求之后，只要有新的更新，服务器就会不断地推送给客户端**。客户端不需要向服务器发送额外的数据请求。这节省了大量的网络带宽，并将服务器的负载降低了一个档次。以上操作也被称为**回调**。
