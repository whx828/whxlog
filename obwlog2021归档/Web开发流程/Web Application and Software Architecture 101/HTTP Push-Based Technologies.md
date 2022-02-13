In this lesson, we will discuss some HTTP PUSH-based technologies.
在本课中，我们将讨论一些基于 HTTP PUSH 的技术。

## Web Sockets [#](https://www.educative.io/courses/web-application-software-architecture-101/xlx9BQWpVLl#Web-Sockets)

A _Web Socket_ connection is preferred when we need a persistent _bi-directional low latency_ data flow from the client to server and back.
当我们需要一个持久的双向低延迟的数据流从客户端到服务器再返回时，Web Socket 连接是首选。

Typical use-cases of these are messaging, chat applications, real-time social streams, and browser-based massive multiplayer games which have quite a number of read writes in comparison to a regular web app.
这些的典型用例是消息传递、聊天应用程序、实时社交流和基于浏览器的大型多人游戏，与常规 Web 应用程序相比，这些游戏具有相当多的读写。

With Web Sockets, we can keep the client-server connection open as long as we want.
使用 Web Sockets，我们可以根据需要保持 客户端--服务器 连接打开。

**Have bi-directional data?** Go ahead with Web Sockets. One more thing, Web Sockets tech doesn't work over _HTTP_. It runs over _TCP_. The server and the client should both support Web Sockets, or else the system won't work.
有双向数据？继续用 Web Sockets。还有一件事，Web Sockets 技术不能通过 HTTP 工作。它通过 **TCP** 运行。服务器和客户端都应该支持 Web Sockets，否则系统将无法工作。

[The WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) and [Introducing WebSockets – Bringing Sockets to the Web](https://www.html5rocks.com/en/tutorials/websockets/basics/) are good resources for further reading on Web Sockets
The WebSocket API 和 Introducing WebSockets – Making Sockets to the Web 是进一步阅读 Web Sockets 的好资源

## AJAX – Long polling [#](https://www.educative.io/courses/web-application-software-architecture-101/xlx9BQWpVLl#AJAX-%E2%80%93-Long-polling)

_Long polling_ lies somewhere between _AJAX_ and _Web Sockets_. In this technique instead of immediately returning the response, the server holds the response until it finds an update to be sent to the client.
长轮询介于 AJAX 和 Web Sockets 之间。在这种技术中，服务器不会立即返回响应，而是保留响应，直到找到要发送给客户端的更新。

The connection in long polling stays open a bit longer compared to polling. The server doesn't return an empty response. If the connection breaks, the client has to re-establish the connection to the server.
与轮询相比，长轮询中的连接保持打开的时间更长一些。服务器不会返回空响应。如果连接中断，客户端必须重新建立与服务器的连接。

The upside of using this technique is that there are a smaller number of requests sent from the client to the server compared to the regular polling mechanism. This reduces a lot of network bandwidth consumption.
使用这种技术的好处是，与常规轮询机制相比，从客户端发送到服务器的请求数量较少。这减少了大量的网络带宽消耗。

Long polling can be used in simple asynchronous data fetch use cases when you do not want to poll the server every now and then.
当您不想时不时地轮询服务器时，可以在简单的异步数据获取用例中使用长轮询。

## HTML5 Event-Source API and Server-Sent Events [#](https://www.educative.io/courses/web-application-software-architecture-101/xlx9BQWpVLl#HTML5-Event-Source-API-and-Server-Sent-Events)

The _Server-Sent Events_ (SSE) implementation takes a bit of a different approach. Instead of the client polling for data, the server automatically pushes the data to the client whenever the updates are available. The incoming messages from the server are treated as _events_.
服务器发送事件 (SSE) 实现采用了一些不同的方法。当更新可用时，服务器自动将数据推送到客户端，而不是客户端轮询数据。来自服务器的传入消息被视为事件。

Via this approach, the servers can initiate data transmission towards the client once the client has established the connection with an initial request.
通过这种方法，一旦客户端通过初始请求建立连接，服务器就可以向客户端发起数据传输。

This helps get rid of a huge number of blank request-response cycles cutting down the bandwidth consumption by notches.
这有助于摆脱大量**空白**的 请求--响应 周期，从而减少带宽消耗。

To implement server-sent events, the backend language should support the technology, and on the UI _HTML5 Event-Source API_ is used to receive the data in-coming from the backend.
要实现服务器发送的事件，后端语言应该支持该技术，并且在 UI 上使用 HTML5 Event-Source API 来接收来自后端的数据。

An important thing to note here is that once the client establishes a connection with the server, the data flow is in one direction only, that is from the server to the client.
这里需要注意的重要一点是，一旦客户端与服务器建立连接，数据流就只有一个方向，即从服务器到客户端。

SSE is ideal for scenarios like a real-time Twitter feed, displaying stock quotes on the UI, real-time notifications etc.
SSE 非常适用于实时 Twitter 提要、在 UI 上显示股票报价、实时通知等场景。

[This is a good resource for further reading on SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
这是进一步阅读 SSE 的好资源

## Streaming over HTTP [#](https://www.educative.io/courses/web-application-software-architecture-101/xlx9BQWpVLl#Streaming-over-HTTP)

_Streaming over HTTP_ is ideal for cases where we need to stream large data over HTTP by breaking it into smaller chunks. This is possible with _HTML5_ and a _JavaScript Stream API_.
对于我们需要通过 HTTP 将大数据分解成小块进行流式传输的情况，HTTP 流是理想的选择。这可以通过 HTML5 和 JavaScript 流 API 实现。

![[Streaming over HTTP.png]]

The technique is primarily used for streaming multimedia content, like large images, videos etc, over HTTP.
该技术主要用于通过 HTTP 传输多媒体内容，如大型图像、视频等。

Due to this, we can watch a partially downloaded video as it continues to download, by playing the downloaded chunks on the client.
由于这个原因，我们可以通过在客户端播放下载的块状内容，在继续下载的过程中观看部分下载的视频。

To stream data, both the client and the server agree to conform to some streaming settings. This helps them determine when the stream begins and ends over an HTTP request-response model.
为了传输数据，客户端和服务器都同意遵守一些流媒体设置。这有助于他们在 HTTP 请求--响应模式下确定流的开始和结束时间。

[You can go through this resource for further reading on Stream API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts)
你可以通过这个资源来进一步阅读流 API 的内容

## Summary [#](https://www.educative.io/courses/web-application-software-architecture-101/xlx9BQWpVLl#Summary)

So, now you have an understanding of what _HTTP Pull_ and _Push_ are. We went through different technologies that help us establish a persistent connection between the client and the server.
所以，现在您已经了解了什么是 HTTP Pull 和 Push。我们使用了不同的技术来帮助我们在客户端和服务器之间建立持久连接。

Every tech has a specific use case, and AJAX is used to dynamically update the web page by polling the server at regular intervals.
每个技术都有特定的用例，AJAX 用于通过定期轮询服务器来动态更新网页。

Long polling has a connection open time slightly longer than the polling mechanism.
长轮询的连接打开时间比轮询机制稍长。

Web Sockets have bi-directional data flow, whereas server-sent events facilitate data flow from the server to the client.
Web Sockets 具有双向数据流，而服务器发送的事件促进了从服务器到客户端的数据流。

Streaming over HTTP facilitates the streaming of large objects like multi-media files.
通过 HTTP 流式传输有助于大对象（如多媒体文件）的流式传输。

What tech would fit best for our use cases depends on the kind of application we intend to build.
哪种技术最适合我们的用例取决于我们打算构建的应用程序类型。

Alright, let's quickly gain an insight into the pros and cons of the client and the server-side rendering.
好的，让我们快速了解一下客户端和服务器端渲染的优缺点。

---

笔记：
当我们需要一个持久的双向低延迟的数据流从客户端到服务器再返回时，Web Sockets 连接是首选。典型用例是消息传递、聊天应用程序、实时社交和基于浏览器的大型多人游戏，这些用例具有相当多的读写。
Web Sockets 不能通过 HTTP 工作。它通过 **TCP** 运行。服务器和客户端都应该支持 Web Sockets，否则系统将无法工作。

长轮询介于 AJAX 和 Web Sockets 之间。在这种技术中，服务器不会立即返回响应，而是保留响应，直到找到要发送给客户端的更新。
与轮询相比，长轮询中的连接保持打开的时间更长一些。**服务器不会返回空响应**。如果连接中断，客户端必须重新建立与服务器的连接。与常规轮询机制相比，从客户端发送到服务器的请求数量较少，减少了大量的网络带宽消耗。

服务器发送事件 (SSE) 采用了一些不同的方法：当更新可用时，服务器自动将数据推送到客户端，而不是客户端轮询数据，来自服务器的传入消息被视为事件，一旦客户端通过初始请求建立连接，服务器就可以向客户端发起数据传输。
要实现 SSE，后端语言应该支持 SSE，并且在 UI 上使用 HTML5 Event-Source API 来接收来自后端的数据。一旦客户端与服务器建立连接，数据流就只有一个方向，即从服务器到客户端。

对于需要通过 HTTP 将大数据分解成小块进行流式传输的情况，HTTP 流是理想的选择。这可以通过 HTML5 和 JavaScript Stream API 实现，主要用于通过 HTTP 传输多媒体内容，如大型图像、视频等，由于这个原因，我们可以通过在客户端播放下载的块状内容，在继续下载的过程中观看部分下载的视频。
为了传输数据，客户端和服务器都同意遵守一些流媒体设置。这有助于他们在 HTTP 请求--响应 模式下确定流的开始和结束时间。
