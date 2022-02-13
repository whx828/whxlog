In this lesson, we will cover DNS load balancing
在本课中，我们将介绍 DNS 负载均衡

## DNS load balancing [#](https://www.educative.io/courses/web-application-software-architecture-101/399030gEZpR#DNS-load-balancing)

In the previous lesson, we discussed how the _DNS query lookup process_ works and the role of different servers in the domain name system. The final end server, in the lookup chain, is the _authoritative server_, which returns the _IP address_ of the domain.
在上一课中，我们讨论了 DNS 查询过程是如何进行的，以及域名系统中不同服务器的作用。在查询链中，最后一个终端服务器是 authoritative 服务器，它返回域名的 IP 地址。

When a large-scale service such as _ [amazon.com](http://amazon.com/) _ runs, it needs way more than a single machine to run its services. A service as big as _ [amazon.com](http://amazon.com/) _ is deployed across multiple data centers in different geographical locations across the globe.
当像 amazon.com 这样的大规模服务运行时，它需要远远超过一台机器来运行其服务。像 amazon.com 这样大的服务被部署在全球不同地理位置的多个数据中心中。

To spread the user traffic across different clusters in different data centers. There are different ways to set up load balancing. In this lesson, we will discuss _DNS load balancing_, which is set up at the _DNS_ level on the _authoritative server_.
为了将用户流量分散到不同数据中心的不同集群中。有不同的方法来设置负载均衡。在本课中，我们将讨论 DNS 负载均衡，它是在权威服务器的 DNS 层面上设置的。

![[Domain Name System3.png]]

_DNS load balancing_ enables the _authoritative server_ to return different _IP addresses_ of a certain domain to the clients. Every time it receives a query for an _IP_, it returns a list of _IP addresses_ of a domain to the client.
DNS 负载均衡使 authoritative 服务器能够向客户返回某个域名的不同 IP 地址。每当它收到一个 IP 的查询时，它就向客户返回一个域名的 IP 地址列表。

With every request, the _authoritative server_ changes the order of the _IP addresses_ in the list in a _round-robin_ fashion.
每次请求，authoritative 服务器都会以轮流的方式改变列表中的 IP 地址的顺序。

As the client receives the list, it sends out a request to the first _IP address_ on the list to fetch the data from the website. The reason for returning a list of _IP addresses_ to the client is to enable it to use other _IP addresses_ in the list in case the first doesn't return a response within a stipulated time.
当客户端收到该列表时，它向列表中的第一个 IP 地址发出请求，以从网站获取数据。向客户端返回 IP 地址列表的原因是，如果第一个 IP 地址没有在规定时间内返回响应，它可以使用列表中的其他 IP 地址。

When another client sends out a request for an _IP address_ to the _authoritative server_, it re-orders the list and puts another _IP address_ at the top of the list following the _round-robin algorithm_.
当另一个客户向 authoritative 服务器发出一个 IP 地址的请求时，它就会重新排列列表，并按照轮流算法将另一个 IP 地址放在列表的顶部。

Also, when the client hits an _IP_, it may not necessarily hit an application server. Instead, it may hit another load balancer implemented at the data center level that manages the clusters of application servers.
此外，当客户端击中一个 IP 时，它不一定会击中一个应用服务器。相反，它可能会击中另一个在数据中心层面实施的管理应用服务器集群的负载均衡器。

## Limitations of DNS load balancing [#](https://www.educative.io/courses/web-application-software-architecture-101/399030gEZpR#Limitations-of-DNS-load-balancing)

_DNS load balancing_ is largely used by companies to distribute traffic across multiple data centers that the application runs in. However, this approach has several limitations. For instance, it does not take into account the existing load on the servers, the content they hold, their request processing time, their _in-service_ status, and so on.
DNS 负载均衡主要被公司用来在应用程序运行的多个数据中心之间分配流量。然而，这种方法有几个限制。例如，它没有考虑到服务器上的现有负载、它们所持有的内容、它们的请求处理时间、它们的在服务时间等等。

Also, since these _IP addresses_ are cached by the client's machine and the _DNS Resolver_, there is always a possibility of a request being routed to a machine that is out of service.
此外，由于这些 IP 地址是由客户的机器和 DNS 解析器缓存的，因此总是有可能将请求转到一台不在服务的机器上。

_DNS load balancing_ despite its limitations, is preferred by companies because it is an easy and less expensive way of setting up load balancing on their services.
尽管 DNS 负载均衡有其局限性，但仍受到公司的青睐，因为它是在其服务上设置负载均衡的一种简单和较低成本的方式。

**_Recommended Read_** – [Round Robin DNS](https://en.wikipedia.org/wiki/Round-robin_DNS)
推荐阅读：循环 DNS

---

笔记：

DNS 负载均衡是在权威名称服务器的 DNS 层面上设置的。
DNS 负载均衡使权威名称服务器能够向客户返回某个域名的不同 IP 地址。每当它收到一个 IP 的查询时，它就向客户返回一个域名的 IP 地址列表。每次请求，权威名称服务器都会以轮流的方式改变列表中的 IP 地址的顺序。当客户端收到该列表时，它向列表中的第一个 IP 地址发出请求，以从网站获取数据。向客户端返回 IP 地址列表的原因是，如果第一个 IP 地址没有在规定时间内返回响应，它可以使用列表中的其他 IP 地址。
当另一个客户向权威名称服务器发出一个 IP 地址的请求时，它就会重新排列列表，并按照轮流算法将另一个 IP 地址放在列表的顶部。此外，当客户端击中一个 IP 时，它不一定会击中一个应用服务器。相反，它可能会击中另一个在数据中心层面实施的管理应用服务器集群的负载均衡器。
