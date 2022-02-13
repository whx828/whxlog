In this lesson, we will discuss how micro frontends are integrated with each other to make the complete UI of a website
在本课中，我们将讨论如何将微前端相互集成以制作网站的完整 UI

So, once we have different micro frontends ready for our online game store, we need to integrate them together to have a functional website. There are two ways we can do this:
因此，一旦我们为在线游戏商店准备好不同的微前端，我们就需要将它们整合在一起以拥有一个功能强大的网站。我们有两种方法可以做到这一点：

1.  By integrating micro frontends on the client
通过在客户端集成微前端
2.  By integrating micro frontends on the server
通过在服务器上集成微前端

This concept is similar to the _client-side and server-side rendering_, which we discussed earlier in the course.
这个概念类似于我们在课程前面讨论的 _客户端和服务器端渲染_。

In this micro frontend use case, we need to write additional logic to enable the integration of the _UI_ components.
在这个微前端用例中，我们需要编写额外的逻辑来实现 UI 组件的集成。

Let's first discuss the client-side integration process.
让我们首先讨论客户端集成过程。

## Client-side integration of micro frontends [#](https://www.educative.io/courses/web-application-software-architecture-101/gxNK6A4kQgl#Client-side-integration-of-micro-frontends)
微前端的客户端集成

A very basic naive way of integrating components on the client is having micro frontends with unique links. We just place the links on the website to enable the user to navigate to a certain micro frontend, like so:
在客户端集成组件的一种非常基本的方法是拥有带有独特链接的微前端。我们只是将链接放在网站上，以使用户能够导航到某个微前端，如下所示：

![[Link To The Payment Page Micro Frontend.png]]

Imagine the _checkout_ microservice is hosted on _AWS_ with the _URL_ - `https://www.aws.amazon.com/onlinegamestore/checkout` and the _payment service_ hosted on _Google Cloud_ with the _URL_ `https://www.cloud.google.com/onlinegamestore/payment`
想象一下，结账的微服务托管在 AWS 上，URL 为 `https://www.aws.amazon.com/onlinegamestore/checkout`，支付服务托管在谷歌云，URL 为 `https://www.cloud.google.com/onlinegamestore/payment`

When the micro frontends are integrated via basic links and the user navigates from the _checkout page_ to the _payment page_, the address in the browser changes from the _AWS URL_ to the _Google Cloud URL_. This is visible to the end-user.
当微前端通过基本链接被整合，用户从结账页面导航到支付页面时，浏览器中的地址从 AWS 的 URL 变成了 Google Cloud 的 URL。这对终端用户来说是可见的。

Following this basic approach, the micro frontends that need to be integrated within a specific page can be done using [_Iframes_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) .
按照这种基本方法，需要在特定页面内集成的微前端可以使用 Iframes 来完成。

Well, you probably already realized that this approach is not ideal. This is more like the _90s_ way of building websites, connecting web pages via direct links and _Iframes_.
好吧，你可能已经意识到，这种方法并不理想。这更像是 90 年代建设网站的方式，通过直接链接和 Iframes 连接网页。

**_Recommended Read_** - [Good reasons why not to use Iframes in page content](https://stackoverflow.com/questions/23178505/good-reasons-why-not-to-use-iframes-in-page-content)
推荐阅读 - 不在页面内容中使用 Iframes 的好理由

![[Game Category Fragment Integrated Into The Home Page Of The Website Using An Iframe.png]]

A recommended way to integrate components on the client-side is by leveraging a technology called the _Web Components_, and frameworks, such as [_Single SPA_](https://single-spa.js.org/)
在客户端集成组件的推荐方法是利用称为 Web 组件的技术和框架，例如 Single SPA

From the [_Mozilla_ documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
来自 Mozilla 文档

> “_Web Components_ is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.”
> “Web Components 是一套不同的技术，允许您创建可重用的自定义元素——它们的功能被封装在你的代码的其余部分之外——并在你的 Web 应用程序中使用它们。”

For more information on _Web Components_, watch this YouTube video: [Web Components: The Secret Ingredient Helping Power The Web](https://www.youtube.com/watch?v=YBwgkr_Sbx0)
有关 Web 组件的更多信息，请观看此 YouTube 视频：Web 组件：帮助为 Web 提供动力的秘密成分

Speaking of the _Single SPA_ framework, it's a JavaScript framework for frontend microservices that enables developers to build their frontend while leveraging different JavaScript frameworks.
说到 Single SPA 框架，它是一个用于前端微服务的 JavaScript 框架，使开发人员能够在利用不同 JavaScript 框架的同时构建他们的前端。

**_Recommended Watch_** – [An Introduction To Single Spa](https://www.youtube.com/watch?v=L4jqow7NTVg)
推荐视频——单人水疗简介

[_Canopy Tax_](https://www.getcanopy.com/) is cloud-based accounting software for working professionals. It leverages the _Single SPA_ framework to build micro frontends for its website.
Canopy Tax 是面向工作专业人士的基于云的会计软件。它利用 Single SPA 框架为其网站构建微前端。

**_Recommended Read_** - [A Step By Step Guide To Single Spa By Canopy](https://medium.com/canopy-tax/a-step-by-step-guide-to-single-spa-abbbcb1bedc6)
推荐阅读 - Canopy 单人水疗分步指南

Alright, let's move on to understand the server-side integration process of micro frontends.
好吧，让我们继续了解微前端的服务器端集成过程。

## Server side integration [#](https://www.educative.io/courses/web-application-software-architecture-101/gxNK6A4kQgl#Server-side-integration)
服务器端集成

When the _UI_ components are integrated on the server and on the user request, the complete pre-built page of the website is delivered to the client from the server as opposed to sending individual micro frontends to the client and having them clubbed there.
当用户界面组件在服务器上和用户请求时被集成时，网站的完整预建页面就会从服务器上传递到客户端，而不是将单个的微前端发送到客户端，并让它们在那里合在一起。

_This cuts down the website's loading time on the client significantly since the browser does not have to do any sort of heavy lifting._
这大大减少了网站在客户端的加载时间，因为浏览器不需要做任何形式的繁重工作。

Just like the client-side integration process, we have to write separate logic on the server to integrate the micro frontends that are requested by the user.
就像客户端的整合过程一样，我们必须在服务器上编写单独的逻辑来整合用户要求的微前端。

There are several technologies and frameworks available that help us to achieve this.
有几种技术和框架可以帮助我们实现这一点。

## Technology and frameworks facilitating server-side integration [#](https://www.educative.io/courses/web-application-software-architecture-101/gxNK6A4kQgl#Technology-and-frameworks-facilitating-server-side-integration)
促进服务器端集成的技术和框架

 [_Zalando_](https://www.zalando.com/) is a popular fashion e-commerce company in Europe that uses [_Project Mosaic_](https://www.mosaic9.org/) to manage its micro frontends.
Zalando 是欧洲一家流行的时尚电子商务公司，它使用 Project Mosaic 来管理其微前端。

**_Recommended Watch_** - [The Zalando Recipe For Scalable Frontends](https://www.youtube.com/watch?v=m32EdvitXy4&feature=youtu.be)
推荐视频 - 可扩展前端的 Zalando 配方

 [_Open Components_](https://opencomponents.github.io/) is an open-source micro frontends framework used for integrating micro frontends on the server.
Open Components 是一个开源的微前端框架，用于在服务器上集成微前端。

 [_Open Table_](https://www.opentable.com/) is a _San Francisco_ based online restaurant reservation company. It uses _Open Components Framework_ to manage their micro frontends. [Here is a talk about their approach on YouTube](https://www.youtube.com/watch?v=M4OXXRdCpyQ) that they delivered on their approach.
Open Table 是一家位于旧金山的在线餐厅预订公司。它使用开放组件框架来管理他们的微前端。以下是他们在 YouTube 上发表的关于他们方法的讨论。

 [_Server Side Includes SSI_](https://en.wikipedia.org/wiki/Server_Side_Includes) is a server-side scripting language used for clubbing the content of multiple web pages on the web server.
服务器端包含 SSI 是一种服务器端脚本语言，用于在 Web 服务器上合并多个网页的内容。

 [_AutoScout24_](https://www.autoscout24.com/) is one of the leading internet car portals in _Europe_. Their engineering team leverages the _SSI_ technology to build their micro frontends. [They gave a talk about their micro frontends approach here](https://www.thoughtworks.com/talks/a-high-performmance-solution-to-microservice-ui-composition)
AutoScout24 是欧洲领先的互联网汽车门户网站之一。他们的工程团队利用 SSI 技术来构建他们的微前端。他们在这里讨论了他们的微前端方法

**_Recommended Read_** - [Page Building using Micro-Frontends and Server-Side Includes](https://itnext.io/page-building-using-micro-frontends-c13c157958c8)
推荐阅读 - 使用微前端和服务器端包含的页面构建

 [_Podium_](https://podium-lib.io/) is another framework that facilitates easy server-side composition of micro frontends.
Podium 是另一个有助于在服务器端轻松组合微前端的框架。

 [Finn.no](https://www.finn.no/) is the largest _Norwegian_ classified advertisement website in the number of page views with around _14 million_ users a month. The website uses the podium framework to build its micro frontends.
Finn.no 是挪威最大的分类广告网站，每月浏览量约为 1400 万。该网站使用 podium 框架来构建其微前端。

Well, this pretty much sums up our micro frontends chapter, let's move on to the next one.
好吧，这几乎总结了我们的微前端章节，让我们继续下一章。

---

笔记：

整合微前端有两种方法：
1. 通过客户端集成微前端
需要编写额外的逻辑来实现 UI 组件的集成。
在客户端集成组件的推荐方法是利用称为 Web 组件的技术和框架。
2. 通过服务器集成微前端
必须在服务器上编写单独的逻辑来整合用户要求的微前端。
当用户界面组件在服务器上和用户请求时被集成时，网站的完整预建页面就会从服务器上传递到客户端，而不是将单个的微前端发送到客户端并让它们在那里合在一起。
