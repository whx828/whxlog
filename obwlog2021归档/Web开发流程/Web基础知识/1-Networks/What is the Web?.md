The web, simply put, is a network spread across the globe that connects a multitude of devices and allows them to communicate with one another. Websites on the Internet are hosted on devices referred to as **servers**, and when you're interacting with a webpage on the Internet, what you're essentially doing is exchanging data with the server that the website is hosted on. The device that you're accessing the webpage using is referred to as the **client** in the context of the web. In short, the web enables the exchange of data between clients and servers through several elaborate mechanisms that we will be discussing in this chapter.
简单地说，Web 是一个遍布全球的网络，它连接着众多的设备，并允许它们相互通信。互联网上的网站托管在被称为服务器的设备上，当你在互联网上与一个网页互动时，你所做的基本上是与网站托管的服务器交换数据。你使用的访问网页的设备在网络的背景下被称为客户端。简而言之，Web 通过我们将在本章讨论的几个精心设计的机制，使客户和服务器之间的数据交换成为可能。

## Network layers [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Network-layers-)

Since the web is an immensely intricate and widespread network, machines within the network are typically divided into abstract layers, each of which performs a specific task that aids in the overall communication process. The layers are enumerated below:
由于 Web 是一种非常复杂和广泛的网络，因此网络内的机器通常被分成抽象层，每个层都执行特定的任务，帮助整个通信过程。下面列举了这些层：

1.  Application Layer 应用层
2.  Transport Layer 传输层
3.  Network Layer 网络层
4.  Data Link Layer 数据链路层
5.  Physical Layer 物理层

Each layer is built on top of the previous layer and has protocols that implement specific functionalities that are involved in the data exchange process.
每个层都构建在上一层的顶部，并具有实现数据交换过程中涉及的特定功能的协议。
In the remaining lesson, we will briefly outline the purpose of each layer, starting from the bottom layer and building up to the topmost layer.
在剩下的课程中，我们将简要概述每一层的目的，从底层开始，一直到最顶层。

![[Layers Within End-systems.png]]

## Physical layer [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Physical-layer-)
物理层

The physical layer of a machine refers to the physical wiring and circuits that go into making the machine available on the network.
物理层指的是使机器在网络上可用的物理布线和电路。

## Data link layer [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Data-link-layer-)
数据链路层

The data link layer is responsible for transmitting data from any given machine to a device or machine that is exactly one link away.
数据链路层负责将数据从任何给定的机器传输到正好在一个链路之外的设备或机器。

## Network layer [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Network-layer-)
网络层

The network layer is responsible for connecting any two machines on the Internet. It provides global connectivity and allows for end-systems to communicate with one another on a large scale, beyond what the data link layer has to offer.
网络层负责连接互联网上的任何两台机器。它提供全球连接，并允许终端系统大规模地相互通信，超过数据链路层所能提供的内容。

## Transport layer [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Transport-layer-)
传输层

The transport layer is responsible for connecting applications on the Internet. It demultiplexes data coming in from a single source and transmits it to the application it is intended for. The basic purpose of the transport layer in the context of the web is that it provides process-to-process communication; it allows two individual processes on either the same machine or separate machines to send messages to each other. To do so, it uses **sockets**, which are essentially just the gateway to a process. In other words, sockets are the means through which messages are received and sent out by a process.
传输层负责连接互联网上的应用。它对来自单一来源的数据进行解复用，并将其传送到预定的应用程序。在网络背景下，传输层的基本目的是提供进程与进程之间的通信；它允许同一台机器或不同机器上的两个单独进程相互发送消息。为了做到这一点，它使用了套接字，套接字本质上只是一个进程的网关。换句话说，套接字是一个进程接收和发送消息的途径。

## Application layer [#](https://www.educative.io/courses/web-development-a-primer/gx7DDMp1Bn9#Application-layer-)
应用层

The application layer is responsible for process-to-process communication across the Internet. It is the topmost layer in the hierarchy, and the application itself is built on top of this. The application layer provides a communication interface and end-user services to the application for its communication with single processes.
应用层负责互联网上进程与进程之间的通信。它是层次结构中最顶层的一层，应用程序本身就建立在此之上。应用层为应用程序提供通信接口和终端用户服务，以便其与单个进程进行通信。

---

## 关键字

网关：在[计算机网络](https://www.wikiwand.com/zh-hans/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C)中，**网关**（Gateway）是转发其他服务器通信数据的服务器，接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。有时客户端可能都不会察觉，自己的通信目标是一个网关。

区别于[路由器](https://www.wikiwand.com/zh-hans/%E8%B7%AF%E7%94%B1%E5%99%A8 "路由器")（由于历史的原因，许多有关 TCP/IP 的文献曾经把网络层使用的路由器（英语：Router）称为网关，在今天很多局域网采用都是路由来接入网络，因此现在通常指的网关就是路由器的 IP），经常在家庭中或者小型企业网络中使用，用于连接[局域网](https://www.wikiwand.com/zh-hans/%E5%B1%80%E5%9F%9F%E7%BD%91 "局域网")和[互联网](https://www.wikiwand.com/zh-hans/%E4%BA%92%E8%81%94%E7%BD%91 "互联网")。

网关也经常指把一种[协议](https://www.wikiwand.com/zh-hans/%E5%8D%8F%E8%AE%AE "协议")转成另一种协议的设备，比如语音网关。