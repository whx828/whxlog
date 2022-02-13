In this lesson, you will learn what the domain name system (DNS) is and how it works.
在本课中，你将学习什么是域名系统（DNS）以及它是如何工作的。

Every machine that is online and is a part of the World Wide Web (WWW) has a unique _IP address_ that enables it to be contacted by other machines on the Web using that particular _IP address_.
每台在线并属于万维网（WWW）的机器都有一个独特的 IP 地址，使其能够被网络上使用该特定 IP 地址的其他机器联系到。

_IP_ stands for _Internet Protocol_. It's a protocol that facilitates the delivery of data packets from one machine to another using their _IP addresses_.
IP 是互联网协议的缩写。它是一种协议，促进了数据包从一台机器到另一台机器的传输，使用它们的 IP 地址。

`2001: db8:0:1234:0:567:8:1` This is an example of a machine's _IP address_. The server that hosts our website will have a similar _IP address_. To fetch content from that server, a user has to type in the unique _IP address_ of the server in their browser's URL tab and hit enter to interact with the website’s content.
`2001: db8:0:1234:0:567:8:1` 这是一个机器的 IP 地址的例子。托管我们网站的服务器将有一个类似的 IP 地址。为了从该服务器获取内容，用户必须在浏览器的 URL 标签中输入该服务器的唯一 IP 地址，然后点击回车键，与网站内容进行互动。

Naturally, it is not viable to type in the website's IP address from memory every time we visit a certain website. Even if we try to, how many _IP addresses_ do you think you can remember?
自然，在我们每次访问某个网站时从记忆中输入网站的 IP 地址是不可行的。即使我们试图这样做，你认为你能记住多少个 IP 地址？

Typing in domain names, for instance, _ [amazon.com](http://amazon.com/) _ is a lot easier than working directly with _IP addresses_. I think we can all agree on this;
输入域名，例如 `amazon.com`，要比直接使用 IP 地址容易得多。我想我们都可以同意这一点。

## Domain name system [#](https://www.educative.io/courses/web-application-software-architecture-101/39wqgLRQK5M#Domain-name-system)

_Domain name system_ commonly known as _DNS_ is a system that averts the need to remember long _IP addresses_ to visit a website by mapping easy to remember domain names to _IP addresses_.
域名系统通常被称为 DNS，它通过将容易记忆的域名映射到 IP 地址，避免了访问网站时需要记住长的 IP 地址。

[amazon.com](http://amazon.com/)  is a domain name that is mapped to its unique _IP address_ by the _DNS_ so that we are not expected to type in the _IP address_ of  [amazon.com](http://amazon.com/)  into our browsers every time we visit that website.
`amazon.com` 是一个域名，通过 DNS 映射到其独特的 IP 地址，这样我们就不需要在每次访问该网站时在浏览器中输入 `amazon.com` 的 IP 地址。

If you are intrigued and want to read more about _IP addresses_, you can visit [this Wikipedia resource on it](https://en.wikipedia.org/wiki/IP_address) .
如果你很感兴趣，想阅读更多关于 IP 地址的信息，你可以访问维基百科上的这个资源。

Okay!! Now let's explore how _DNS_ works?
好了！现在让我们探讨一下 DNS 是如何工作的？

## How does a domain name system work? [#](https://www.educative.io/courses/web-application-software-architecture-101/39wqgLRQK5M#How-does-a-domain-name-system-work?)

When a user types in the URL of the website in their browser and hits enter, this event is known as _DNS querying_.
当用户在浏览器中输入网站的 URL 并点击回车，这一事件被称为 DNS 查询。

There are four key components, or a group of servers, that make up the DNS infrastructure. These are:
有四个关键组成部分或一组服务器，构成了 DNS 基础设施。这些是：

- _DNS Recursive nameserver aka DNS Resolver_
DNS 递归名称服务器，又称 DNS 解析器
- _Root nameserver_
根名称服务器
- _Top-Level Domain nameserver_
顶级域名服务器
- _Authoritative nameserver_
权威名称服务器

![[Domain Name System.png]]

In the next lesson, you will learn how the _DNS query lookup process_ works and the role of these servers in the lookup process.
在下一课，你将学习 DNS 查询查找过程是如何工作的，以及这些服务器在查找过程中的作用。

---

笔记：

每台在线并属于万维网的机器都有一个独特的 IP 地址，使其能够被网络上使用该特定 IP 地址的其他机器联系到。

IP 是互联网协议的缩写。它是一种协议，使用机器的 IP 地址促进了数据包从一台机器到另一台机器的传输。

域名系统通常被称为 DNS，它通过将容易记忆的域名映射到 IP 地址，避免了访问网站时需要记住长的 IP 地址。

