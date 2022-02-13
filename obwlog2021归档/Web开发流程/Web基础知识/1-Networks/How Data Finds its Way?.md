A high-level overview of how packets determine and then traverse the path from their source to destination.
数据包如何确定然后遍历从其源到目的地的路径的高级概述。

So far, we've discussed how the Internet is structured, and how it's abstractions implement the protocols that ensure that the client and server understand one another. Now, we will look into how clients and servers know where they want to send their data and what protocols exist to ensure each end-system on a network has a unique identity that allows it to be reached by other end-systems.
到目前为止，我们已经讨论了互联网是如何结构化的，以及它的抽象如何实现确保客户和服务器相互理解的协议。现在，我们将研究客户和服务器如何知道他们想把数据发送到哪里，以及存在哪些协议来确保网络上的每个终端系统有一个独特的身份，使其能够被其他终端系统所接触。

## Internet protocol & IP addresses [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Internet-protocol-&-IP-addresses-)
互联网协议和 IP 地址

Internet Protocol, more commonly known as IP, is a network layer protocol that is responsible for assigning addresses to devices in order to give them unique identities that make them reachable and discoverable. Each device on the Internet has a unique IP address that other devices use to connect with it. You can find your own IP address by using the following command line instruction:
互联网协议，更常见的说法是 IP，是一个网络层协议，负责为设备分配地址，以赋予它们独特的身份，使它们可以被到达和发现。互联网上的每个设备都有一个独特的 IP 地址，其他设备用它来连接。你可以通过使用以下命令行指令找到自己的 IP 地址：

```
ifconfig
```

`ifconfig` is the command that works on Linux, which is what we're using on our platform. The command `ipconfig` does the same thing on Windows so try that if you are running the command on a local Windows system.
`ifconfig` 是在 Linux 上工作的命令，Linux 也是我们在使用的平台。命令 `ipconfig` 在 Windows 上做同样的事情，所以你可以试试在本地 Windows 系统上运行该命令。

What this means is that once you have your website live on a server, users will be able to connect with it through the IP address of the server and receive data. You may be wondering now where the IP address comes in if you reach websites through URLs. Well, that's where DNS comes in. Routers across the web do not store URLs for every single website hosted on the Internet; they only know IP addresses and forward packets towards their destinations based on them. Users, however, only know URLs, or _domain names_, for the websites they are visiting. To bridge this clear gap of information, the Internet makes use of **DNS servers**, which serve as translational intermediaries between end-systems and the routers that serve to forward data packets coming from them to their destinations. The process of making a lookup for a domain name on a DNS server and obtaining its corresponding IP address is referred to as a **DNS resolution**.
这意味着，一旦你的网站在服务器上上线，用户将能够通过服务器的 IP 地址与之连接并接收数据。你现在可能想知道，如果你通过 URL 到达网站，IP 地址在哪里。嗯，这就是 DNS 的作用。整个网络的路由器并不存储互联网上每一个网站的 URL；它们只知道 IP 地址，并根据这些地址将数据包转发到目的地。然而，用户只知道他们正在访问的网站的 URL 或域名。为了弥补这一明显的信息差距，互联网利用 DNS 服务器，作为终端系统和路由器之间的翻译中介，将来自终端系统的数据包转发到目的地。在 DNS 服务器上对域名进行查询并获得其相应的 IP 地址的过程被称为 DNS 解析。

## DNS lookups [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#DNS-lookups-)
DNS 查询

So far, we know everything about the communication between a client and server on the Internet from how the connection forms to how they find one another to exchange messages through DNS servers. To end the discussion on networks, the last thing to be articulated is exactly how lookups in DNS servers work. Let’s take a look at the steps involved in the interaction between any end-system on the web, referred to as the client in this context, and a DNS server!
到目前为止，我们知道了互联网上客户端和服务器之间通信的一切，从连接如何形成到他们如何通过 DNS 服务器找到彼此交换信息。为了结束关于网络的讨论，最后要阐述的是 DNS 服务器中的查找到底是如何工作的。让我们看看网络上的任何终端系统（在这里被称为客户端）与 DNS 服务器之间的互动所涉及的步骤吧。

---

That covers everything you need to know about the communication between clients and servers on the Internet and exactly how your application would reach users.
这涵盖了你需要知道的关于互联网上客户和服务器之间的通信的一切，以及你的应用程序将如何到达用户。