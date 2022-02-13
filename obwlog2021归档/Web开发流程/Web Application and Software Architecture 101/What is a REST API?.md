In this lesson, you will get an insight into the REST API.
在本课程中，您将深入了解 REST API。

## What is REST? [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#What-is-REST?)

> REST stands for Representational State Transfer. It's a software architectural style for implementing web services. Web services implemented using the REST architectural style are known as the RESTful Web services.
> REST 是 Representational State Transfer 的缩写。它是一种实现网络服务的软件架构风格。使用 REST 架构风格实现的网络服务被称为 RESTful 网络服务。

## REST API [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#REST-API)

A _REST API_ is an _API_ implementation that adheres to the REST architectural constraints. It acts as an interface. The communication between the client and the server happens over _HTTP_. A _REST API_ takes advantage of the _HTTP_ methodologies to establish communication between the client and the server. _REST_ also enables servers to cache the response that improves the application's performance.
REST API 是一个遵守 REST 架构约束的 API 实现。它作为一个接口。客户端和服务器之间的通信是通过 HTTP 进行的。REST API 利用 HTTP 方法来建立客户端和服务器之间的通信。REST 还使服务器能够缓存响应，提高应用程序的性能。

![[REST API Architecture.png]]

The communication between the client and the server is a stateless process. By that, I mean every communication between the client and the server is like a new one.
客户端和服务器之间的通信是一个无状态过程。我的意思是，客户端和服务器之间的每一次通信都像是一次新的通信。

There is no information or memory carried over from the previous communications. So, every time a client interacts with the backend, the client has to send the authentication information to it as well. This enables the backend to figure out whether the client is authorized to access the data or not.
没有任何信息或内存从以前的通信中携带过来。因此，每次客户端与后端互动时，客户端也必须向其发送认证信息。这使后端能够弄清客户端是否被授权访问数据。

When implementing a _REST API_ the client communicates with the backend endpoints. This entirely decouples the backend and the client code.
当实现 REST API 时，客户端与后端的端点进行通信。这完全解耦了后端和客户端的代码。

**Let's break down what this means.**
让我们来分析一下这意味着什么。

## REST endpoint [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#REST-endpoint)

An _API/REST/Backend_ endpoint means the _URL_ of a service. For example, `https://myservice.com/users/{username}` is a backend endpoint for fetching the user details of a particular user from the service.
API/REST/Backend 端点指的是一个服务的 URL。例如，`https://myservice.com/users/{username}` 是一个后端端点，用于从服务中获取一个特定用户的用户详情。

The _REST-based_ service will expose this _URL_ to all its clients to fetch the user details using the above stated _URL_.
基于 REST 的服务将把这个 URL 暴露给它的所有客户端，以使用上述的 URL 获取用户的详细信息。

## Decoupling clients and the backend service [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#Decoupling-clients-and-the-backend-service)

With the availability of the endpoints, the backend service does not have to worry about the client implementation. It just calls out to its multiple clients and says “_Hey everyone! Here is the URL address of the resource/information you need. Hit it when you need it. Any client with the required authorization to access a resource can access it_”.
由于端点的可用性，后端服务端不必担心客户端的实现。它只是 call 它的多个客户端，并说 "嘿，大家好！这是你需要的资源/信息的 URL 地址。当你需要时，请点击它。任何具有访问资源所需授权的客户端都可以访问它"。

Developers can have different implementations with separate codebases, for different clients, on a mobile browser, a desktop browser, a tablet or an API testing tool. Introducing new types of clients or modifying the client code has no effect on the functionality of the backend service.
开发者可以在手机浏览器、桌面浏览器、平板电脑或 API 测试工具上，针对不同的客户端，客户端有不同的代码库实现。引入新类型的客户端或修改客户端代码对后端服务的功能没有影响。

_This means the clients and the backend service are decoupled_.
这意味着客户端和后端服务端是解耦的。

## Application development before the REST API [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#Application-development-before-the-REST-API)

Before the _REST-based API_ interfaces became mainstream in the industry, we often tightly coupled the backend code with the client. _Java Server Pages (JSP)_ is one example of this.
在基于 REST 的 API 接口成为行业主流之前，我们经常将后端代码与客户端紧密耦合。Java 服务器页面（JSP）就是这样的一个例子。

We would always put business logic in the _JSP_ tags. This made code refactoring and adding new features difficult because the logic got spread across different layers.
我们总是把业务逻辑放在 JSP 标签中。这使得代码重构和添加新功能变得很困难，因为逻辑被分散在不同的层中。

Also, in the same codebase, we had to write separate code/classes for handling requests from different types of clients. We needed a different servlet for a mobile client and a different one for a web-based client.
另外，在同一个代码库中，我们不得不为处理来自不同类型客户的请求编写单独的代码/类。我们需要一个不同的 servlet 来处理移动客户端，一个不同的 servlet 来处理基于网络的客户端。

After _REST APIs_ became widely used, there was no need to worry about the type of the client. Just provide the endpoints and the response will generally contain data in the _JSON_ or any other standard data transport format. Additionally, the client will handle the data in whatever way they want.
在 REST APIs 被广泛使用之后，就不需要担心客户端的类型了。只要提供端点，响应一般会包含 JSON 或其他标准数据传输格式的数据。此外，客户端将以他们想要的任何方式处理数据。

This cut down a lot of unnecessary work for us. Also, adding new clients became a lot easier. Now, we can introduce multiple types of new clients without considering the backend implementation.
这为我们减少了很多不必要的工作。另外，添加新的客户端也变得容易多了。现在，我们可以引入多种类型的新客户，而无需考虑后台的实施。

In today's industry landscape, there are hardly any online service without a _REST API_. Want to access the public data of any social network? Use their _REST API_.
在今天的行业环境中，几乎没有任何在线服务没有 REST API。想要访问任何社交网络的公共数据？使用他们的 REST API。

## API gateway [#](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR#API-gateway)

![[REST API A Gateway Interface to the Application.png]]

The _REST-API_ acts as a gateway, or a single-entry point into the system. It encapsulates the business logic and handles all the client requests, taking care of the authorization, authentication, sanitizing the input data, and other necessary tasks before providing access to the application resources.
REST-API 作为一个网关，或一个进入系统的单一入口点。它封装了业务逻辑并处理所有的客户端请求，在提供对应用程序资源的访问之前，负责授权、认证、净化输入数据和其他必要的任务。

So, now you are aware of the client-server architecture and we know what a _REST API_ is. It acts as the interface, and the communication between the client and the server happens over HTTP.
所以，现在你已经知道了客户端--服务器架构，我们也知道了什么是 REST API。它作为接口，客户端和服务器之间的通信是通过 HTTP 进行的。

Let's look into the HTTP Pull and Push-based communication mechanism.
让我们来看看基于 HTTP 的 Pull 和 Push 通信机制。

---

笔记：
1. REST 是 Representational State Transfer（代表性状态转移）的缩写。它是一种实现网络服务的软件架构风格。使用 REST 架构风格实现的网络服务被称为 RESTful 网络服务。
2. REST API 是一个遵守 REST 架构约束的 API 实现。它作为一个接口。客户端和服务器之间的通信是通过 HTTP 进行的。REST API 利用 HTTP 方法来建立客户端和服务器之间的通信。REST 还使服务器能够缓存响应，提高应用程序的性能。
3. 客户端和服务器之间的每一次通信都像是一次新的通信。没有任何信息或内存从以前的通信中携带过来。因此，每次客户端与后端互动时，客户端也必须向其发送认证信息。这使后端能够弄清客户端是否被授权访问数据。
5. 当实现 REST API 时，客户端实际上是与后端的**端点**进行通信。由于端点的可用性，后端服务端不必担心客户端的实现。
6. REST-API 作为一个网关，或一个进入系统的单一入口点。它封装了业务逻辑并处理所有的客户端请求，在提供对应用程序资源的访问之前，负责授权、认证、净化输入数据和其他必要的任务。
