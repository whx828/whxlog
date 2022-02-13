In this lesson, we will discuss how communication between the client and the server takes place.
在本课程中，我们将讨论客户端和服务器之间的通信。

## Request-response model [#](https://www.educative.io/courses/web-application-software-architecture-101/xVBE96VAoQB#Request-response-model)

The client and the server have a _request-response_ model. The client sends the request and the server responds with the data.
客户端和服务器具有请求响应模型。客户端发送请求，服务器响应数据。

If there is no request, there is no response. Pretty simple right?
如果没有请求，则没有响应。是不是相当简单？

## HTTP protocol [#](https://www.educative.io/courses/web-application-software-architecture-101/xVBE96VAoQB#HTTP-protocol)

The entire communication happens over the _HTTP_ protocol. It is the protocol for data exchange over the World Wide Web. _HTTP_ protocol is a _request-response_ protocol that defines how information is transmitted across the web.
整个通信是通过 HTTP 协议进行的。它是在万维网上进行数据交换的协议。HTTP 协议是一个请求-响应协议，定义了信息如何在网络上传输。

It's a _stateless_ protocol, and every process over HTTP is executed independently and has no knowledge of previous processes.
它是一个无状态协议，通过 HTTP 的每个进程都是独立执行的，对以前的进程一无所知。

If you want to read more about the protocol, [this is a good resource on it](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
如果你想阅读更多关于该协议的信息，这是一个很好的资源。

Alright, moving on…
好了，继续前进...

## REST API and API Endpoints [#](https://www.educative.io/courses/web-application-software-architecture-101/xVBE96VAoQB#REST-API-and-API-Endpoints)

Speaking from the context of modern N-tier web applications, every client has to hit a _REST endpoint_ to fetch the data from the backend.
从现代 N 层 Web 应用的角度来看，每个客户端都必须点击一个 REST 端点来从后端获取数据。

> **Note:** If you aren't aware of the REST API and the API Endpoints, we will discuss it in the next lesson in detail. I've brought up the terms in this lesson just to give you a heads up on how modern distributed web applications communicate.
> 注意：如果你不知道 REST API 和 API 端点，我们将在下一课中详细讨论它。我在本课中提出这些术语只是为了让你了解现代分布式网络应用程序的通信方式。

The backend application code has a _REST-API_ implemented. This acts as an interface to the outside world requests. Every request, be it from the client written by the business or the third-party developers that consume our data has to hit the REST-endpoints to fetch the data.
后端的应用程序代码有一个 REST-API 实现。它作为一个接口，与外界的请求相连。每一个请求，无论是来自业务部门编写的客户端，还是来自消费我们数据的第三方开发者，都必须击中 REST 端点以获取数据。

![[REST API Architecture.png]]

## Real world example of using a REST API [#](https://www.educative.io/courses/web-application-software-architecture-101/xVBE96VAoQB#Real-world-example-of-using-a-REST-API)

For instance, let's say we want to write an application to keep track of the birthdays of all our Facebook friends and send us a reminder a couple of days before the event date.
例如，假设我们想写一个应用程序来跟踪我们所有 Facebook 朋友的生日，并在活动日期前几天给我们发送提醒。

To implement this, the first step would be to get the data of the birthdays of all our Facebook friends.
要实现这一点，第一步是获取我们所有 Facebook 朋友的生日数据。

We would write a client to hit the Facebook Social Graph API which is a REST-API to get the data and then run our business logic on the data.
我们将编写一个客户端来访问 Facebook Social Graph API，这是一个 REST-API 用来获取数据，然后在数据上运行我们的业务逻辑。

Implementing a REST-based API has several advantages. Let's delve into it in detail to have a deeper understanding.
实现一个基于 REST 的 API 有几个优点。让我们详细了解一下，以便有一个更深入的认识。

---

笔记：
客户端和服务器具有请求响应模型：客户端发送请求，服务器响应数据；如果没有请求，则没有响应。
整个通信过程是通过 HTTP 协议进行的。HTTP 协议是在万维网上进行数据交换的协议。也是一个请求--响应协议，定义了信息如何在网络上传输。
它是一个无状态协议，通过 HTTP 的每个进程都是独立执行的，对以前的进程一无所知。

每个客户端都必须 hit 一个 REST-endpoint 来从后端获取数据。
每一个请求，无论是来自业务部门编写的客户端，还是来自消费我们数据的第三方开发者，都必须 hit REST 端点以获取数据。
