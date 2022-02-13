Let's learn about the different utilities that let us test the functionality of our website's APIs.
让我们了解一下让我们测试网站 API 功能的不同工具。

An Application Programming Interface (API) is a set of protocols, utilities and rules used in the creation of a functional application. Components in the application interact using APIs.
应用程序编程接口（API）是一套协议、实用程序和规则，用于创建一个功能性应用程序。应用程序中的组件使用 API 进行交互。

The concept of APIs applies to websites as well (e.g. client-server communication). Therefore, it only makes sense that we should test our APIs to make sure the backend of the web application works correctly. We don't want users sending requests and not receiving a response from our application.
API 的概念也适用于网站（例如，客户端-服务器通信）。因此，我们应该测试我们的 API，以确保网络应用的后端工作正常，这才是合理的。我们不希望用户发送请求，却没有收到来自我们应用程序的响应。

This testing, known as **API testing** is part of backend testing since we are not concerned with the user interface, just the backend jobs. API testing should be done during app creation as well as app maintenance.
这种测试被称为 API 测试，是后台测试的一部分，因为我们不关心用户界面，只关心后台工作。API 测试应该在应用创建以及应用维护期间进行。

As we've discussed before, it is always better to automate tests rather than performing them manually. So without further ado, let's dive into some of the most popular API testing tools.
正如我们之前所讨论的，自动测试总是比手动执行要好。因此，不再多说，让我们深入了解一些最受欢迎的 API 测试工具。

## Postman [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/NEpZB7w39A2#Postman)

Postman is a great app for testing APIs using HTTP requests and getting responses. Designed by Google, Postman provides a simple and easy interface, along with tons of features to help us perform integration testing for applications backend APIs.
Postman 是一款出色的应用程序，用于使用 HTTP 请求测试 API 并获取响应。 Postman 由 Google 设计，提供简单易用的界面以及大量功能，可帮助我们对应用程序后端 API 进行集成测试。

We can create complex suites and run them across different environments (local or server etc.). The reason it is helpful is that we can test the server-client functionality on our APIs. Server load testing is essential so that we know how our website behaves under different conditions and Postman allows us to do just that.
我们可以创建复杂的套件并在不同的环境（本地或服务器等）中运行它们。它有用的原因是我们可以在我们的 API 上测试服务器-客户端功能。服务器负载测试是必不可少的，以便我们了解网站在不同条件下的行为，而 Postman 允许我们这样做。

For further reading, [check out this page](https://www.agiletrailblazers.com/blog/6-reasons-to-use-postman/newman-for-api-integration-testing)

## SoapUI [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/NEpZB7w39A2#SoapUI)

SoapUI is perhaps the most popular backing testing automation tool. It supports load testing by running simulated traffic on our website. Functionality testing is also possible in various environments such as Development, Production, etc.
SoapUI 可能是最流行的支持测试自动化工具。它通过在我们的网站上运行模拟流量来支持负载测试。在开发、生产等各种环境中也可以进行功能测试。

Another advantage of SoapUI is that is completely open source, so anyone, including us can make new custom features. It is also a useful tool for security assurance, but more on that later.
SoapUI 的另一个优点是完全开源，所以任何人，包括我们，都可以制作新的自定义功能。它也是用于安全保证的有用工具，但稍后会详细介绍。

Learn more about SoapUI [here](https://www.soapui.org/open-source.html)

---

Next, we'll be introduced to database testing and security.
接下来，我们将介绍数据库测试和安全性。

