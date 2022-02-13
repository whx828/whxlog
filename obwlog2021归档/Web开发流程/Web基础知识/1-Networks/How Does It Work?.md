An overview of how the web allows communication between devices. 
Web 如何允许设备之间的通信的概述。


In the previous lesson, we talked about clients and servers and that the Internet allows them to communicate with one another. Now, we will look into exactly how this communication happens.
在上一课中，我们讨论了客户端和服务器以及 Internet 允许它们相互通信。现在，我们将研究这种通信究竟是如何发生的。


## Switches to connect devices [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Switches-to-connect-devices-)
用于连接设备的交换机

In essence, the communication is pretty intuitive. Clients send messages to servers requesting data, and servers respond with the required data, but how is this data transferred? The answer requires defining the structure of the Internet first.
从本质上讲，通信是非常直观的。客户端向服务器发送请求数据的信息，服务器以所需的数据进行回应，但这些数据是如何传输的？答案是需要首先定义互联网的结构。

The Internet comprises of devices known as **switches** that facilitate the connection of each device to every other device on the network. The devices themselves are referred to as **end-systems**, and which is essentially just a fancy term for the computer you're using to access this webpage right now!
互联网由被称为交换机的设备组成，这些设备促进了每个设备与网络上其他设备的连接。这些设备本身被称为终端系统，本质上只是一个花哨的术语，即你现在用来访问这个网页的电脑。

End-systems are connected to switches through **links** and all of the switches are, in turn, connected to each other, thus ensuring that every end-system on the Internet is implicitly connected to every other end-system.
终端系统通过链接与交换机相连，而所有的交换机又相互连接，从而确保互联网上的每个终端系统都隐含地与其他每个终端系统相连。

![[The Structure of the Web.png]]
The Structure of the Web

In addition to connecting end-systems to one another, switches facilitate the communication between any two end-systems by forwarding packets along the path that they know exists between the packet source and destination. So basically, switches store pre-determined paths between end-systems and forwards packets among them.
除了将终端系统相互连接外，交换机还通过沿着它们知道的数据包源和目的地之间存在的路径转发数据包来促进任何两个终端系统之间的通信。因此，基本上，交换机在终端系统之间存储预先确定的路径并在它们之间转发数据包。


## Routers
路由器

A commonly heard term when it comes to networks is routers. _Routers_ have the same function as switches per se in that they also connect end systems to the rest of the web. However, routers are actually very different from switches since they have the additional capability of allowing lookups for destination addresses and determining the shortest or the least busy path from the source of a packet to its destination. Routers are, therefore, a more powerful version of switches and the Internet comprises of a mix of both routers and switches that facilitate the transfer of data between end-systems.
说到网络，一个经常听到的术语是路由器。_路由器_ 的功能与交换机本身相同，因为它们也将终端系统与网络的其他部分连接起来。然而，路由器实际上与交换机有很大不同，因为它们有额外的能力，允许查询目标地址，并确定从数据包源头到目的地的最短或最不繁忙的路径。因此，路由器是交换机的一个更强大的版本，互联网由路由器和交换机的混合体组成，促进终端系统之间的数据传输。

![[Anatomy of a Router.png]]
Anatomy of a Router


## Data packets [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Data-packets-)
数据包

Now that we have established how the Internet is structured to ensure connectivity let's talk about how data is actually transported across the network. This is done by dividing the data, which is just a set of bits, that needs to be transferred into several smaller chunks of bits known as **packets** and then sending each packet to its destination independently. The reason for this is that you cannot always send large amounts of data in a single packet because it is highly likely that data in large packets get corrupted on the path from its source to its destination due to a bit flip during transmissions. It is, therefore, more efficient and reliable to send multiple smaller packets.
现在我们已经确定了互联网的结构是如何确保连接性的，让我们来谈谈数据是如何在网络上实际传输的。这是通过将需要传输的数据（只是一组比特）分成几个较小的比特块，称为 __数据包__，然后将每个数据包独立发送到目的地。这样做的原因是，你不能总是在一个数据包中发送大量的数据，因为大数据包中的数据极有可能在从源头到目的地的过程中由于传输过程中的比特翻转而被损坏。因此，发送多个较小的数据包更为有效和可靠。


## TCP [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#TCP-)

Since it is important for clients and servers across the network to be able to understand the same language, there are certain protocols that dictate the communication between devices on the Internet. The primarily used protocol for communication between a web application and a browser is referred to as the Transmission Control Protocol (TCP). TCP is a _transport layer_ protocol that takes the responsibility of transmitting data and ensures reliable data transfer between clients and servers across the web. The way TCP does this is by adding additional information to data packets that allow for packet authentication and by allowing the exchange of acknowledgment messages between the client and server to confirm data transmissions.
由于网络上的客户和服务器必须能够理解相同的语言，因此有一些协议规定了互联网上设备之间的通信。网络应用程序和浏览器之间的通信主要使用的协议被称为传输控制协议（TCP）。TCP 是一个 _传输层_ 协议，负责传输数据，并确保客户和服务器之间在网络上的可靠数据传输。TCP 实现这一目标的方式是在数据包中添加额外的信息，以便进行数据包认证，并允许客户端和服务器之间交换确认信息，以确认数据传输。

The TCP protocol starts with a 3-way handshake. The handshake allows both ends (server and client) to initiate and maintain several TCP connections at once.
TCP 协议以一个 3 次握手开始。握手允许两端（服务器和客户端）同时启动和维持几个 TCP 连接。


## HTTP & HTTPS [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#HTTP-&-HTTPS-)

We have just learned that clients and servers communicate with each other by initiating TCP connections and then sending messages to one another. Now, we will look into exactly how these messages are structured.
我们刚刚了解到，客户和服务器之间的通信是通过启动 TCP 连接，然后相互发送消息。现在，我们将研究一下这些消息的结构。

HyperText Transfer Protocol, commonly referred to as HTTP, is an application layer protocol that dictates how the messages a client and server exchange on the web are structured as well as how they are exchanged. The client program and server program talk to each other by exchanging HTTP messages, and the benefit of HTTP is that it ensures messages are being delivered intact and in time.
超文本传输协议，通常被称为 HTTP，是一个应用层协议，它规定了客户端和服务器在网络上交换信息的结构以及交换的方式。客户端程序和服务器程序通过交换 HTTP 消息进行交谈，HTTP 的好处是它确保消息被完整和及时地传递。

This may seem ambiguous, but the high-level idea is that HTTP is built on top of TCP and creating an HTTP server for your web application basically just means that you are creating a server that clients create TCP connections with for reliable data transfer. In simple terms, HTTP is the means through which you can make sure your application is using TCP to transmit messages from clients to the server and vice versa. So basically, when you enter a URL in your browser, what actually happens is that an HTTP command gets sent to the server hosting the application to fetch and transmit the requested web page through TCP.
这可能看起来很模糊，但高层次的想法是，HTTP 是建立在 TCP 之上的，为你的网络应用程序创建一个 HTTP 服务器，基本上只是意味着你正在创建一个服务器，客户端与之建立 TCP 连接，以实现可靠的数据传输。简单地说，HTTP 是一种手段，通过这种手段，你可以确保你的应用程序使用 TCP 来传输从客户端到服务器的信息，反之亦然。因此，基本上，当你在浏览器中输入一个 URL 时，实际发生的情况是，一个 HTTP 命令被发送到托管应用程序的服务器，通过 TCP 获取和传输所请求的网页。

The more common structure of URLs is **https**://www.educative.io/. So, what does HTTPS stand for? HTTPS is an acronym for HyperText Transfer Protocol Secure, and it is basically just the secure version of HTTP. What this means is that communications between the browser and the hosting server are encrypted so that no third parties on the network can access information that is not intended to be shared.
更常见的 URL 结构是 **https**://www.educative.io/ 。那么，HTTPS 代表什么？HTTPS 是超文本传输协议安全的首字母缩写，它基本上只是 HTTP 的安全版本。这意味着浏览器和主机服务器之间的通信是加密的，这样网络上的第三方就不能访问不打算共享的信息。

![[Communication Between a Browser and Web Application.png]]
Communication Between a Browser and Web Application

## Ports [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Ports-)
端口

So far, we have discussed both the transport layer protocol as well as the application layer protocol that ensures efficient communication between end-systems on the web. But, where exactly do the messages these protocols allow end-systems to go? **Ports** are the endpoints of the communication between clients and servers. That is to say; ports are where messages from the network arrive on an end-system. We briefly discussed sockets earlier and talked about how they are the gateways to processes; sockets are opened on ports in order to allow processes to send and receive messages. Ports are designated by numbers, and all ports below 1024 are associated with a specific protocol each by default. The port number for HTTP, for instance, is 80, and what this means is that any messages you send or receive on the web come in to and leave your machine on a socket at port 80. Ports above 1024 are **open ports** available to programmers to use for any process they want to communicate with a network. They can build sockets on these ports and define the structure and type of messages this socket can cater to through _socket programming_. Socket programming is an aspect of Computer Networks that is beyond the scope of this discussion, but it is a highly useful skill to get under your belt and should definitely be looked into if you are interested in the field.
到目前为止，我们已经讨论了传输层协议以及应用层协议，它们确保了网络上终端系统之间的有效通信。但是，这些协议允许终端系统的信息到底去哪里呢？端口。端口是客户端和服务器之间通信的端点，也就是说，端口是网络上的消息到达终端系统的地方。我们在前面简要地讨论了套接字，并谈到它们是进程的网关；套接字在端口上打开，以便允许进程发送和接收消息。端口是由数字指定的，所有低于 1024 的端口默认都与一个特定的协议相关联。例如，HTTP 的端口号是 80，这意味着你在网上发送或接收的任何信息都是通过 80 端口的套接字进入和离开你的机器。1024 以上的端口是开放的端口，可供程序员用于他们想与网络通信的任何进程。他们可以在这些端口上建立套接字，并通过套接字编程定义这个套接字的结构和信息类型。套接字编程是计算机网络的一个方面，超出了本次讨论的范围，但它是一项非常有用的技能，如果你对这个领域感兴趣，绝对应该研究一下。

---

Now that we've given a high-level overview of the communication that occurs on the web starting from the protocols and devices that allow systems on the Internet to communicate all the way to the exact point at which the messages arrive, it is safe to assume that we understand how systems on the web are placed. In the next lesson, we will move on to look into how these systems actually find one another to communicate with to bring all the pieces together.
现在我们已经对网络上发生的通信做了一个高层次的概述，从允许互联网上的系统进行通信的协议和设备开始，一直到信息到达的确切位置，可以认为我们了解了网络上的系统是如何放置的。在下一课中，我们将继续研究这些系统实际上是如何找到彼此进行通信的，从而将所有的部分结合起来。

