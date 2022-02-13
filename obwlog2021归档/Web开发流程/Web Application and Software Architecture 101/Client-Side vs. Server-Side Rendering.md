In this lesson, you will learn about the client side and the server-side rendering and the use cases for both the approaches.
在本课中，您将了解客户端和服务器端渲染以及这两种方法的用例。

## Client-side rendering - How does a browser render a web page? [#](https://www.educative.io/courses/web-application-software-architecture-101/g7q0RJyj78l#Client-side-rendering---How-does-a-browser-render-a-web-page?)

When a user requests a web page from the server and the browser receives the response, it has to render the response on the window in the form of an HTML page.
当用户从服务器上请求一个网页，而浏览器收到响应时，它必须在窗口上以 HTML 页面的形式呈现该响应。

For this, the browser has several components, such as the:
为此，浏览器有几个组件，如：

- _Browser engine_
浏览器引擎
- _Rendering engine_
渲染引擎
- _JavaScript interpreter_
JavaScript 解释器
- _Networking and the UI backend_
网络和 UI 后端
- _Data storage_ etc.
数据存储，等。

I won't go into much detail but the browser has to do a lot of work to convert the response from the server into an HTML page.
我就不多说了，但浏览器必须做大量的工作，将服务器的响应转换为 HTML 页面。

The rendering engine constructs the _DOM_ tree and renders and paints the construction. Naturally, all this activity needs a bit of time.
渲染引擎构建 DOM 树，并对构建的内容进行渲染和画图。自然，所有这些活动都需要一点时间。

## Server-side rendering [#](https://www.educative.io/courses/web-application-software-architecture-101/g7q0RJyj78l#Server-side-rendering)

To avoid all this rendering time on the client, developers often render the UI on the server, generate HTML there and directly send the HTML page to the UI.
为了避免所有这些在客户端的渲染时间，开发人员经常在服务器上渲染用户界面，在那里生成 HTML 并直接将 HTML 页面发送到用户界面。

This technique is known as the _server-side rendering_. It ensures faster rendering of the UI, averting the UI loading time in the browser window because the page is already created and the browser doesn't have to do much assembling or rendering work.
这种技术被称为服务器端渲染。它确保了用户界面的快速渲染，避免了用户界面在浏览器窗口中的加载时间，因为页面已经被创建，浏览器不必做太多的组装或渲染工作。

## Use cases for server-side & client-side rendering [#](https://www.educative.io/courses/web-application-software-architecture-101/g7q0RJyj78l#Use-cases-for-server-side-&-client-side-rendering)

The server-side rendering approach is perfect for delivering static content, such as WordPress blogs. It's also good for SEO because the crawlers can easily read the generated content.
服务器端渲染的方法非常适合于交付静态内容，如 WordPress 博客。这对搜索引擎优化(SEO)也有好处，因为爬虫可以很容易地阅读生成的内容。

However, modern websites are highly dependent on AJAX. On such websites, content for a particular module or a section of a page has to be fetched and rendered on the fly.
然而，现代网站高度依赖 AJAX。在这样的网站上，一个特定模块或一个页面的一部分的内容必须被获取并在运行中呈现。

Therefore, server-side rendering doesn't help much. For every AJAX-request, instead of sending just the required content to the client, the approach generates the entire page on the server. This process consumes unnecessary bandwidth and also fails to provide a smooth user experience.
因此，服务器端的渲染并没有什么帮助。对于每一个 AJAX 请求，该方法不是只向客户端发送所需内容，而是在服务器上生成整个页面。这个过程会消耗不必要的带宽，也不能提供流畅的用户体验。

A big downside to this is that, once the number of concurrent users on the website rises, it puts an unnecessary load on the server.
这样做的一个很大的缺点是，一旦网站上的并发用户数量增加，就会给服务器带来不必要的负荷。

_Client-side rendering_ works best for modern dynamic AJAX-based websites.
客户端渲染对于现代基于 AJAX 的动态网站来说效果最好。

However, we can leverage a hybrid approach, to get the most out of both techniques. We can use server-side rendering for the home page and for the other static content on our website and use client-side rendering for the dynamic pages.
然而，我们可以利用一种混合方法，以获得两种技术的最大优势。我们可以对网站的主页和其他静态内容使用服务器端渲染，对动态页面使用客户端渲染。

Alright, before moving down to the database, message queue and the caching components, it's important for us to understand a few concepts such as:
好的，在深入研究数据库、消息队列和缓存组件之前，了解一些概念对我们来说很重要，例如：

- _Monolithic architecture_
单体架构
- _Micro-services_
微服务
- _Scalability_
可扩展性
- _High availability_
高可用性
- _Distributed systems_
分布式系统
- _What are nodes in distributed systems? Why are they important to software design?_
分布式系统中的节点是什么？为什么它们对软件设计很重要？

Understanding these concepts will help you understand the rest of the web components better. Let's have a look one by one.
理解这些概念将帮助您更好地理解其余的 Web 组件。一起来看看吧。

---

概念：
DOM：文档对象模型(Document Object Model)，是 W3C 制定的标准接口规范，是一种处理 HTML 和 XML 文件的标准 API。
DOM 提供了对整个文档的访问模型，将文档作为一个树形结构，树的每个结点表示了一个 HTML 标签或标签内的文本项，DOM 树结构精确地描述了 HTML 文档中标签间的相互关联性。
将 HTML 或 XML 文档转化为 DOM 树的过程称为解析(parse)。HTML 文档被解析后，转化为 DOM 树，因此对 HTML 文档的处理可以通过对 DOM 树的操作实现。
DOM 模型不仅描述了文档的结构，还定义了结点对象的行为，利用对象的方法和属性，可以方便地访问、修改、添加和删除 DOM 树的结点和内容。

---

笔记：
当用户向服务器请求一个网页，而浏览器收到服务器响应时，它必须在窗口上以 HTML 页面的形式呈现该响应。渲染引擎构建 DOM 树，并对构建的内容进行渲染和画图。

为了避免在客户端的渲染时间，开发人员经常在服务器上渲染用户界面，在那里生成 HTML 并直接将 HTML 页面发送到用户界面，这种技术被称为服务器端渲染，它确保了用户界面的快速渲染，避免了用户界面在浏览器窗口中的加载时间，因为页面已经被创建，浏览器不必做太多的组装或渲染工作。服务器端渲染的方法非常适合于交付静态内容，对搜索引擎优化(SEO)也有好处，因为爬虫可以很容易地阅读生成的内容。

然而，现代网站高度依赖 AJAX。在这样的网站上，一个特定模块或一个页面的一部分的内容必须被获取并在运行中呈现，服务器端的渲染并没有什么帮助。对于每一个 AJAX 请求，该方法不是只向客户端发送所需内容，而是在服务器上**生成整个页面**。这个过程会消耗不必要的带宽，也不能提供流畅的用户体验，一旦网站上的并发用户数量增加，就会给服务器带来不必要的负荷，而客户端渲染对于现代基于 AJAX 的动态网站来说效果最好。

我们可以利用一种混合方法，对网站的主页和其他静态内容使用服务器端渲染，对动态页面使用客户端渲染。
