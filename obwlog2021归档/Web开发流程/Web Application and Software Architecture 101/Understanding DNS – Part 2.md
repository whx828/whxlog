This lesson continues our discussion of the domain name system.
本课继续我们对域名系统的讨论。

In this lesson, you will get an insight into the complete _DNS query lookup process_, and you will also understand the role of different servers in the _DNS_ infrastructure.
在本课中，你将深入了解完整的 DNS 查询过程，你还将了解 DNS 基础设施中不同服务器的作用。

Let's begin…
让我们开始吧...

So, when the user hits enter after typing in the _domain name_ into their browser, the browser sends a request to the _DNS Recursive nameserver_, also known as the _DNS Resolver_.
当用户在浏览器中输入域名后点击回车键，浏览器就会向 DNS 递归命名服务器发送请求，DNS 递归命名服务器也被称为 DNS 解析器。

The role of _DNS Resolver_ is to receive the client request and forward it to the _Root nameserver_ to get the address of the _Top-Level domain nameserver_.
DNS 解析器的作用是接收客户端请求，并将其转发给根名称服务器，以获得顶级域名服务器的地址。

The _DNS Recursive nameserver_ is generally managed by our _ISP Internet service provider_. The whole _DNS_ system is a distributed system setup in large data centers managed by internet service providers.
DNS 递归名称服务器一般由我们的 ISP/互联网服务提供商 管理。整个 DNS 系统是一个分布式系统，设置在由互联网服务提供商管理的大型数据中心。

These data centers contain clusters of servers that are optimized to process _DNS queries_ in minimal time that is in milliseconds.
这些数据中心包含服务器集群，这些服务器被优化为在最短的时间内处理 DNS 查询，即以毫秒为单位。

So, once the _DNS Resolver_ forwards the request to the _Root nameserver_, the _Root nameserver_ returns the address of the _Top-Level domain nameserver_ in response. As an example, the top-level domain for [amazon.com](http://amazon.com/) is _.com_.
因此，一旦 DNS 解析器将请求转发给根名称服务器，根名称服务器就会返回顶级域名服务器的地址作为回应。作为一个例子，amazon.com 的顶级域名是 .com。

Once the _DNS Resolver_ receives the address of the _top-level domain nameserver_, it sends a request to it to fetch the details of the domain name. _Top Level domain nameservers_ hold the data for domains using their top-level domains.
一旦 DNS 解析器收到顶级域名服务器的地址，它就向其发送请求，以获取域名的详细信息。顶级域名服务器持有使用其顶级域的域名的数据。

For instance, _.com_ top-level domain nameserver will contain information on domains using _.com_. Similarly, a _.edu_ Top-Level domain nameserver will hold information on domains using _.edu_.
例如，.com 顶级域名服务器将包含使用.com 的域名的信息。同样地，.edu 顶级域名服务器将包含使用.edu 的域名信息。

Since our domain is [amazon.com](http://amazon.com/) , the _DNS Resolver_ will route the request to the _.com_ top-level domain name server.
由于我们的域名是 amazon.com，DNS 解析器将把请求路由到 .com 顶级域名服务器。

Once the _top-level domain name server_ receives the request from the _Resolver_, it returns the _IP address_ of  [amazon.com](http://amazon.com/) domain name server.
一旦顶级域名服务器收到来自解析器的请求，它将返回 amazon.com 域名服务器的 IP 地址。

[amazon.com](http://amazon.com/)  domain nameserver is the last server in the _DNS query lookup process_. The nameserver is responsible for  [amazon.com](http://amazon.com/)  domain and is also known as the _Authoritative nameserver_. This nameserver is owned by the owner of the domain name.
amazon.com 域名服务器是 DNS 查询过程中的最后一个服务器。该名称服务器负责 amazon.com 域名，也被称为权威名称服务器。该名称服务器由域名的所有者拥有。

Then, DNS Resolver fires a query to the _Authoritative nameserver_, and it returns the _IP address_ of _ [amazon.com](http://amazon.com/) _ website to the _DNS Resolver_. _DNS Resolver_ caches the data and forwards it to the client.
然后，DNS 解析器向权威名称服务器发出查询，并向 DNS 解析器返回 amazon.com 网站的 IP 地址。DNS 解析器缓存数据并将其转发给客户端。

On receiving the response, the browser sends a request to [amazon.com](http://amazon.com/) website's IP address to fetch data from their servers.
在收到响应后，浏览器向 amazon.com 网站的 IP 地址发送请求，以从其服务器上获取数据。

Often all this _DNS_ information is cached, and the DNS servers don't have to do so much rerouting every time a client requests an _IP_ of a certain website.
通常情况下，所有这些 DNS 信息都被缓存起来，DNS 服务器不必在每次客户端请求某个网站的 IP 时做那么多的重新路由。

The _DNS_ information of websites that we visit also gets cached in our local machines, that is our browsing devices with a _TTL Time To Live_.
我们访问的网站的 DNS 信息也会被缓存在我们的本地机器上，也就是我们的浏览设备，有一个 TTL 生存时间。

All modern browsers do this automatically to cut down the _DNS query lookup time_ when revisiting a website.
所有现代浏览器都会自动这样做，以减少重访网站时的 DNS 查询时间。

This is how the entire DNS query lookup process works.
这就是整个 DNS 查询过程的运作方式。

![[Domain Name System2.png]]

In the next lesson, let's have an insight into _DNS load balancing_.
在下一课，让我们深入了解一下 DNS 负载均衡。

---

笔记：

当用户在浏览器中输入域名后点击回车键，浏览器就会向 DNS 解析器发送请求。DNS 解析器的作用是接收客户端请求，并将其转发给根名称服务器，以获得顶级域名服务器的地址。
DNS 递归名称服务器/DNS 解析器一般由我们的 ISP（互联网服务提供商）管理。一旦 DNS 解析器将请求转发给根名称服务器，根名称服务器就会返回顶级域名服务器的地址作为回应。DNS 解析器收到顶级域名服务器的地址后，它就向其发送请求，以获取域名的详细信息，顶级域名服务器持有使用其顶级域的域名的数据。一旦顶级域名服务器收到来自解析器的请求，它将返回 amazon.com 域名服务器的 IP 地址。DNS 解析器收到**权威名称服务器**的 IP 地址后，它就向其发送请求，以获取**网站**的 IP 地址。DNS 解析器缓存数据并将其转发给客户端。在收到响应后，浏览器向网站的 IP 地址发送请求，以从其服务器上获取数据。

看一个例子，amazon.com 的顶级域名是 .com。.com 顶级域名服务器将包含使用.com 的域名的信息。同样地，.edu 顶级域名服务器将包含使用.edu 的域名信息。由于我们的域名是 amazon.com，DNS 解析器将把请求路由到 .com 顶级域名服务器。
amazon.com 域名服务器是 DNS 查询过程中的最后一个服务器。该名称服务器负责 amazon.com 域名，也被称为权威名称服务器，该名称服务器由域名的所有者拥有。然后，DNS 解析器向权威名称服务器发出查询，并向 DNS 解析器返回 amazon.com 网站的 IP 地址。DNS 解析器缓存数据并将其转发给客户端。在收到响应后，浏览器向 amazon.com 网站的 IP 地址发送请求，以从其服务器上获取数据。

通常情况下，所有这些 DNS 信息都被缓存起来，DNS 服务器不必在每次客户端请求某个网站的 IP 时做那么多的重新路由。我们访问的网站的 DNS 信息也会被缓存在我们的本地机器上，也就是我们的浏览设备，有一个 TTL 生存时间。所有现代浏览器都会自动这样做，以减少重访网站时的 DNS 查询时间。这就是整个 DNS 查询过程的运作方式。
