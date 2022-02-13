In this lesson, you will learn about the HTTP PUSH mechanism.
在本课中，您将了解 HTTP PUSH 机制。

## Time To Live (TTL) [#](https://www.educative.io/courses/web-application-software-architecture-101/YM9l8lxn530#Time-To-Live-(TTL) )

In the regular client-server communication, which is _HTTP PULL_, there is a _Time to Live (TTL)_ for every request. It could be 30 secs to 60 secs, varying from browser to browser.
在常规的客户端--服务器通信中，即 HTTP PULL，每个请求都有一个生存时间 (TTL)。可能是 30 秒到 60 秒，因浏览器而异。

If the client doesn't receive a response from the server within the TTL, the browser kills the connection and the client has to re-send the request hoping it receives the data from the server before the TTL ends again.
如果客户端在 TTL 内没有收到服务器的响应，浏览器会终止连接，客户端必须重新发送请求，希望它在 TTL 再次结束之前收到来自服务器的数据。

Open connections consume resources, and there is a limit to the number of open connections a server can handle at once. If the connections don't close and new ones are being introduced, over time, the server will run out of memory. Hence, the TTL is used in client-server communication.
打开连接很消耗资源，并且服务器一次可以处理的打开连接数是有限制的。如果连接没有关闭并且正在引入新的连接，随着时间的推移，服务器将耗尽内存。因此，TTL 用于客户端-服务器通信。

_But what if we are certain that the response will take more time than the TTL set by the browser?_
_但是如果我们确定响应将花费比浏览器设置的 TTL 更多的时间呢？_

## Persistent connection [#](https://www.educative.io/courses/web-application-software-architecture-101/YM9l8lxn530#Persistent-connection)

In this case, we need a _persistent connection_ between the client and the server.
在这种情况下，我们需要在客户端和服务器之间建立一个持久的连接。

> A persistent connection is a network connection between the client and the server that remains open for further requests and responses, as opposed to being closed after a single communication.
> 持久连接是客户端和服务器之间的网络连接，它为进一步的请求和响应保持开放，而不是在一次通信后关闭。

This facilitates HTTP PUSH-based communication between the client and the server.
这有利于客户端和服务器之间基于 HTTP PUSH 的通信。

![[HTTP PUSH-based communication between the client and the server.png]]

## Heartbeat interceptors [#](https://www.educative.io/courses/web-application-software-architecture-101/YM9l8lxn530#Heartbeat-interceptors)

_Now you might be wondering how is a persistent connection possible if the browser kills the open connections to the server every X seconds?_
_现在您可能想知道，如果浏览器每 X 秒终止与服务器的打开连接，那么持久连接怎么可能呢？_

The connection between the client and the server stays open with the help of _Heartbeat Interceptors_.
客户端和服务器之间的连接在 _心跳拦截器_  的帮助下保持打开状态。

> These are just blank request responses between the client and the server to prevent the browser from killing the connection.
> 这些只是客户端和服务器之间的空白请求响应，以防止浏览器终止连接。

_Isn't this resource-intensive?_
_这不是资源密集型吗？_

## Resource intensive [#](https://www.educative.io/courses/web-application-software-architecture-101/YM9l8lxn530#Resource-intensive)

Yes, it is. Persistent connections consume a lot of resources compared to the HTTP PULL behavior. However, there are use cases where establishing a persistent connection is vital to an application's feature.
是的。与 HTTP PULL 行为相比，持久连接消耗大量资源。但是，在某些用例中，建立持久连接对应用程序的功能至关重要。

For instance, a browser-based multiplayer game has a pretty large amount of request-response activity within a certain time compared to a regular web application.
例如，与常规 Web 应用程序相比，基于浏览器的多人游戏在特定时间内具有相当多的 请求--响应 活动。

It would be apt to establish a persistent connection between the client and the server from a user experience standpoint.
从用户体验的角度来看，在客户端和服务器之间建立持久连接是很容易的。

Long opened connections can be implemented by multiple techniques such as _AJAX Long Polling_, _Web Sockets_, _Server-Sent Events_, etc.
长时间打开的连接可以通过多种技术实现，例如 AJAX 长轮询、Web 套接字、服务器发送事件等。

Let's take a look into each of these methods.
让我们来看看这些方法中的每一种。

---

笔记：
在 **HTTP PULL** 中每个请求都有一个**生存时间 (TTL)**，可能是 30 秒到 60 秒，因浏览器而异。如果客户端在 TTL 内没有收到服务器的响应，浏览器会终止连接，客户端必须重新发送请求，希望它在 TTL 再次结束之前收到来自服务器的数据。
打开连接很消耗资源，并且服务器一次可以处理的打开连接数是有限制的。如果连接没有关闭并且正在引入新的连接，随着时间的推移，服务器将耗尽内存。

如果我们确定响应将花费比浏览器设置的 TTL 更多的时间，我们需要在客户端和服务器之间建立一个持久的连接。
持久连接是客户端和服务器之间的网络连接，它为进一步的请求和响应**保持开放**，而不是在一次通信后关闭，有利于客户端和服务器之间基于 **HTTP PUSH** 的通信。

客户端和服务器之间的连接在 _Heartbeat Interceptors_  的帮助下保持打开状态。
与 HTTP PULL 行为相比，持久连接消耗大量资源。
持久连接可以通过多种技术实现，例如：AJAX 长轮询、Web 套接字、服务器发送事件等。
