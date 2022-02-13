In this lesson, we will explore the server component of the client-server architecture.
在本课程中，我们将探索客户端--服务器体系结构的服务器组件。

## What is a web server? [#](https://www.educative.io/courses/web-application-software-architecture-101/YMGQlNl40oA#What-is-a-web-server?)

> The primary task of a web server is to receive the requests from the client and provide the response after executing the business logic based on the request parameters received from the client.
> Web 服务器的主要任务是接收来自客户端的请求，并在基于从客户端接收的请求参数执行业务逻辑之后提供响应。

Every service, running online, needs a server to run. Servers running web applications are commonly known as the _application servers_.
在线运行的每个服务都需要运行服务器。运行 Web 应用程序的服务器通常称为应用程序服务器。

![[application server.png]]

Besides the _application servers_, there are also other kinds of servers with specific tasks assigned to them. These include the:
除应用程序服务器外，还有其他类型的服务器，其中分配了特定的任务。这些包括：

- _Proxy server_
代理服务器
- _Mail server_
邮件服务器
- _File server_
文件服务器
- _Virtual server_
虚拟服务器

_The server configuration and the type can differ depending on the use case_.
服务器配置和类型可能因使用情况而异。

- For instance, if we run a backend application code written in _Java_, we would pick _Apache Tomcat_ or _Jetty_.
例如，如果我们运行在 Java 中编写的后端应用程序代码，我们将选择 Apache Tomcat 或 Jetty。

- For simple use cases such as hosting websites, we would pick the _Apache HTTP Server_.
对于托管网站等简单用例，我们将选择 Apache HTTP 服务器。

In this lesson, we will stick to the _application server_.
在本课程中，我们将坚持应用程序服务器。

All the components of a web application need a server to run, be it a database, a message queue, a cache, or any other component. In modern application development, even the user interface is hosted separately on a dedicated server.
Web 应用程序的所有组件都需要服务器运行，无论是数据库，消息队列，缓存还是任何其他组件。在现代应用程序开发中，即使是用户界面也在专用服务器上单独托管。

## Server-side rendering [#](https://www.educative.io/courses/web-application-software-architecture-101/YMGQlNl40oA#Server-side-rendering)

Often the developers use a server to render the user interface on the backend and then send the rendered data to the client. This technique is known as _server-side rendering_. I will discuss the pros and cons of _client-side_ vs _server-side_ rendering further down the course.
通常情况下，开发人员使用服务器在后端渲染用户界面，然后将渲染好的数据发送到客户端。这种技术被称为服务器端渲染。我将在课程中进一步讨论客户端与服务器端渲染的利弊。

Now we have a fundamental understanding of both the client and the server. Let's delve into some of the concepts involved in the communication between them.
现在我们对客户端和服务器都有了基本的了解。让我们深入研究它们之间的通信所涉及的一些概念。

---

笔记：
Web 服务器：主要任务是接收来自客户端的请求，并在基于从客户端接收的请求参数执行业务逻辑之后提供响应。
运行 Web 应用程序的服务器通常称为应用程序服务器。除应用程序服务器外，还有其他类型的服务器，其中分配了特定的任务，包括：
- 代理服务器
- 邮件服务器
- 文件服务器
- 虚拟服务器

Web 应用程序的所有组件都需要服务器运行，无论是数据库，消息队列，缓存还是任何其他组件。在现代应用程序开发中，即使是 UI 也在专用服务器上单独托管：开发人员使用服务器在后端渲染用户界面，然后将渲染好的数据发送到客户端，这种技术被称为服务器端渲染。
