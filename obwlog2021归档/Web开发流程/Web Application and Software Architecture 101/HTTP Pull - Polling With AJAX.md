In this lesson, we will cover HTTP PULL, AJAX and how polling is done using AJAX.
在本课中，我们将介绍 HTTP PULL、AJAX 以及如何使用 AJAX 完成轮询。

There are two ways of pulling/fetching data from the server.
有两种方式从服务器拉取/获取数据。

The first is sending an _HTTP GET_ request to the server manually by triggering an event by clicking a button or any other element on the web page.
第一种是通过点击一个按钮或网页上的任何其他元素来触发一个事件，向服务器手动发送 HTTP GET 请求。

The other is fetching data dynamically at regular intervals by using _AJAX_ without any human intervention.
另一种是通过使用 AJAX 动态地获取数据，不需要任何人工干预。

## AJAX – Asynchronous JavaScript and XML [#](https://www.educative.io/courses/web-application-software-architecture-101/N01XnA6Ak1m#AJAX-%E2%80%93-Asynchronous-JavaScript-and-XML)

> _AJAX_ stands for asynchronous _JavaScript_ and _XML_. The name says it all. AJAX is used for adding asynchronous behavior to the web page.
> AJAX 是异步 JavaScript 和 XML 的缩写。这个名字说明了一切。AJAX 用于在网页上添加异步行为。

![[AJAX - Asynchronous JavaScript & XML.png]]

As you can see in the illustration above, instead of requesting the data manually every time with the click of a button. AJAX enables us to fetch the updated data from the server by automatically sending the requests over and over at stipulated intervals.
正如你在上面的插图中看到的，无需每次通过点击按钮手动请求数据。AJAX 使我们能够通过在规定的时间间隔内自动发送请求，从服务器上获取更新的数据。

Upon receiving the updates, a particular section of the web page is updated dynamically by the _callback_ method. We see this behavior all the time on news and sports websites, where the updated event information is dynamically displayed on the page without needing to reload it.
在收到更新后，网页的某个部分会通过回调方法进行动态更新。我们在新闻和体育网站上经常看到这种行为，更新的事件信息会动态地显示在页面上，而不需要重新加载。

AJAX uses an _XMLHttpRequest_ object for sending the requests to the server which is built-in the browser and uses JavaScript to update the _HTML DOM_.
AJAX 使用 XMLHttpRequest 对象向服务器发送请求，该服务器内置浏览器，并使用 JavaScript 来更新 HTML DOM。

AJAX is commonly used with the _jQuery_ framework to implement the asynchronous behavior on the UI.
AJAX 通常与 jQuery 框架一起使用，以实现用户界面上的异步行为。

This dynamic technique of requesting information from the server after regular intervals is known as _polling_.
这种每隔一段时间就向服务器请求信息的动态技术被称为轮询。

---

笔记：
AJAX 是 asynchronous _JavaScript_ and _XML_ 的缩写，用于在网页上添加异步行为，这样就无需每次通过点击按钮手动请求数据。AJAX 使我们能够通过在规定的时间间隔内自动发送请求，从服务器上获取更新的数据。在收到更新后，网页的某个部分会通过回调方法进行动态更新。
AJAX 通常与 jQuery 框架一起使用，以实现用户界面上的异步行为。
每隔一段时间就向服务器请求信息的动态技术被称为轮询。
