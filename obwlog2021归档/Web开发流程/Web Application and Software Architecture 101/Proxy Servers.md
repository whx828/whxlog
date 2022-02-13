# Proxy Servers
代理服务器

How do proxy servers work and what are forward and reverse proxies?
代理服务器如何工作以及什么是正向和反向代理？

Internet has connected people across the world using social media and audio/video calling features along with providing an overabundance of knowledge and tools. All this comes with an inherent danger of security and privacy breaches. In this guide we will talk about **proxies** which play a vital role in mitigating these risks. We will cover the following topics in this guide:
互联网使用社交媒体和音频/视频通话功能将世界各地的人们联系起来，同时提供了丰富的知识和工具。所有这些都伴随着安全和隐私泄露的内在危险。在本指南中，我们将讨论在减轻这些风险方面发挥重要作用的代理。我们将在本指南中介绍以下主题：

- [Proxy Server](https://roadmap.sh/guides/proxy-servers#proxy-server)
- [Forward Proxy Server](https://roadmap.sh/guides/proxy-servers#forward-proxy-server)
- [Reverse Proxy Server](https://roadmap.sh/guides/proxy-servers#reverse-proxy-server)
- [Summary](https://roadmap.sh/guides/proxy-servers#summary)

## Proxy Server
代理服务器

**_Every web request which is sent from the client to a web server goes through some type of proxy server._** A proxy server acts as a gateway between client _(you)_ and the internet and separates end-users from the websites you browse. It replaces the source IP address of the web request with the proxy server's IP address and then forwards it to the web server. The web server is unaware of the client, it only sees the proxy server.
从客户端发送到 Web 服务器的每个 Web 请求都经过某种类型的代理服务器。代理服务器充当客户端（您）和互联网之间的网关，并将最终用户与您浏览的网站分开。它将 Web 请求的源 IP 地址替换为代理服务器的 IP 地址，然后将其转发给 Web 服务器。 Web 服务器不知道客户端，它只看到代理服务器。

![Proxy Server Description](https://roadmap.sh/guides/proxy/proxy-example.png)

> NOTE: This is not an accurate description rather just an illustration.
> 注意：这不是一个准确的描述，而只是一个说明。

Proxy servers serve as a single point of control making it easier to enforce security policies. It also provides caching mechanism which stores the requested web pages on the proxy server to improve performance. If the requested web-page is available in cache memory then instead of forwarding the request to the web-server it will send the cached webpage back to the client. This **saves big companies thousands of dollars** by reducing load on their servers as their website is visited by millions of users every day.
代理服务器用作单点控制，从而更容易实施安全策略。它还提供缓存机制，将请求的网页存储在代理服务器上以提高性能。如果请求的网页在缓存内存中可用，那么它不会将请求转发到 Web 服务器，而是将缓存的网页发送回客户端。当每天有数百万用户访问他们的网站时，这通过减少服务器上的负载为大公司节省了数千美元。

## Forward Proxy Server
正向代理服务器

A forward proxy is generally implemented on the client side and **sits in front of multiple clients** or client sources. Forward proxy servers are mainly used by companies to **manage internet usage** of their employees and **restrict content**. It is also used as a **firewall** to secure company's network by blocking any request which would pose threat to the companies's network. Proxy servers are also used to **bypass geo-restriction** and browse content which might be blocked in user's country. It enables users to **browse anonymously**, as the proxy server masks their details from the website's servers.
转发代理通常在客户端实现，位于多个客户端或客户端源之前。转发代理服务器主要被公司用来管理员工的互联网使用和限制内容。它还用作防火墙，通过阻止可能对公司网络构成威胁的任何请求来保护公司网络。代理服务器还用于绕过地理限制和浏览可能在用户所在国家/地区被阻止的内容。它使用户能够匿名浏览，因为代理服务器从网站服务器中屏蔽了他们的详细信息。

![Forward Proxy Description](https://roadmap.sh/guides/proxy/forward-proxy.png)

> NOTE: This is not an accurate description rather just an illustration
> 注意：这不是一个准确的描述，而只是一个插图

## Reverse Proxy Server
反向代理服务器

Reverse proxy servers are implemented on the **server side** instead of the client side. It **sits in front of multiple webservers** and manages the incoming requests by forwarding them to the web servers. It provides anonymity for the **back-end web servers and not the client**. Reverse proxy servers are generally used to perform tasks such as **authentication, content caching, and encryption/decryption** on behalf of the web server. These tasks would **hog CPU cycles** on the web server and degrade performance of the website by introducing high amount of delay in loading the webpage. Reverse proxies are also used as **load balancers** to distribute the incoming traffic efficiently among the web servers but it is **not optimized** for this task. In essence, reverse proxy server is a gateway to a web-server or group of web-servers.
反向代理服务器是在服务器端而不是客户端实现的。它位于多个 Web 服务器前面，并通过将传入请求转发到 Web 服务器来管理它们。它为后端 Web 服务器而不是客户端提供匿名性。反向代理服务器通常用于代表 Web 服务器执行身份验证、内容缓存和加密/解密等任务。这些任务会占用 Web 服务器上的 CPU 周期，并通过在加载网页时引入大量延迟来降低网站的性能。反向代理也用作负载平衡器，以在 Web 服务器之间有效地分配传入流量，但它并未针对此任务进行优化。从本质上讲，反向代理服务器是一个 Web 服务器或一组 Web 服务器的网关。

![Reverse Proxy Description](https://roadmap.sh/guides/proxy/reverse-proxy.png)

> NOTE: This is not an accurate description rather just an illustration. Red lines represent server's response and black lines represent initial request from client(s).
> 注意：这不是一个准确的描述，而只是一个说明。红线代表服务器的响应，黑线代表来自客户端的初始请求。

## Summary
概括

A proxy server acts as a gateway between client _(you)_ and the internet and separates end-users from the websites you browse. **_The position of the proxy server on the network determines whether it is a forward or a reverse proxy server_**. Forward proxy is implemented on the client side and **sits in front of multiple clients** or client sources and forwards requests to the web server. Reverse proxy servers are implemented on the **server side** it **sits in front of multiple webservers** and manages the incoming requests by forwarding them to the web servers.
代理服务器充当客户端（您）和互联网之间的网关，并将最终用户与您浏览的网站分开。代理服务器在网络上的位置决定了它是正向代理服务器还是反向代理服务器。转发代理在客户端实现，位于多个客户端或客户端源之前，并将请求转发到 Web 服务器。反向代理服务器在服务器端实现，它位于多个 Web 服务器的前面，并通过将传入请求转发到 Web 服务器来管理传入请求。

If all this was too much to take in, I have a simple analogy for you.
如果这一切都太多了，我有一个简单的类比给你。

At a restaurant the waiter/waitress takes your order and gives it to the kitchen head chef. The head chef then calls out the order and assigns tasks to everyone in the kitchen.
在餐厅，服务员接受您的订单并将其交给厨房主厨。然后，主厨发出命令并将任务分配给厨房中的每个人。

In this analogy:
在这个类比中：

- You are the client
你是客户
- Your order is the web request
您的订单是网络请求
- Waiter/Waitress is your forward proxy server
Waiter/Waitress 是您的转发代理服务器
- Kitchen head chef is the reverse proxy server
厨房主厨是反向代理服务器
- Other chefs working in the kitchen are the web servers
在厨房工作的其他厨师是网络服务器

