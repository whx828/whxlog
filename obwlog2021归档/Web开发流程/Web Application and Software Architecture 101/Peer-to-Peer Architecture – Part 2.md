This lesson contains the second part of the peer-to-peer architecture discussion. We will continue where we left off in the previous lesson.
本课包含点对点架构讨论的第二部分。我们将继续我们在上一课中的讨论。

## What is a peer-to-peer architecture? How does it work? [#](https://www.educative.io/courses/web-application-software-architecture-101/RMDYmYo8LlE#What-is-a-peer-to-peer-architecture?-How-does-it-work?)
什么是点对点架构？它是如何工作的？

A _P2P_ architecture is designed around several _nodes_ in the network taking equal turns acting as both the _client_ and the _server_.
P2P 架构是围绕网络中的几个节点设计的，这些节点轮流充当客户端和服务器。

![[Peer to Peer Architecture-1.png]]

The data is exchanged over _TCP IP_ just like it happens over the _HTTP_ protocol in a _client-server_ model. The _P2P_ design has an overlay network over _TCP IP_, which enables the users to connect directly. It takes care of all the complexities and the heavy lifting. _Nodes/peers_ are indexed and discoverable in this overlay network.
数据通过 TCP/IP 进行交换，就像在客户端-服务器模式下通过 HTTP 协议进行交换一样。P2P 设计在 TCP/IP 上有一个覆盖网络，这使得用户可以直接连接。它处理了所有复杂的问题和繁重的工作。节点/点在这个覆盖网络中被索引并可被发现。

A large file is transferred between the nodes by being divided into chunks of equal size in a non-sequential order.
一个大文件在节点之间的传输是以非顺序的方式被分成大小相同的块。

Say a system hosts a large file of 75 _gigabytes_. Other _nodes_ in the network in need of the file locate the system containing the file. Then, they download the file in chunks, re-hosting the downloaded chunk simultaneously, making it more available to the other users. This approach is known as a _segmented P2P file transfer_.
假设一个系统承载了一个 75G 的大文件。网络中需要该文件的其他节点可以找到包含该文件的系统。然后，他们分块下载该文件，同时重新托管所下载的分块，使其他用户更容易获得该文件。这种方法被称为分段式 P2P 文件传输。

Based on how these peers are linked with each other in the network, the networks are classified into a _structured_, _unstructured_, or a _hybrid_ model.
根据这些对等人在网络中的相互联系方式，网络被分为结构化、非结构化或混合模式。

## Types of P2P networks [#](https://www.educative.io/courses/web-application-software-architecture-101/RMDYmYo8LlE#Types-of-P2P-networks)
P2P 网络的类型

### Unstructured network [#](https://www.educative.io/courses/web-application-software-architecture-101/RMDYmYo8LlE#Unstructured-network)
非结构化网络

In an _unstructured_ network _nodes/peers_ keep connecting with each other randomly. So, there is no structure, no rule. Just simply connect and grow the network.
在非结构化网络中，节点/对等人一直随机地相互连接。因此，没有结构，没有规则。只是简单地连接和增长网络。

In this architectural design, there is no indexing of the nodes. To search the data, we have to scan through each and every node in the network. This is $O(n)$ in complexity where _n_ is the number of nodes in the network. This is very _resource-intensive_.
在这种架构设计中，没有对节点进行索引。为了搜索数据，我们必须扫描网络中的每一个节点。这在复杂性上是 $O(n)$，其中 $n$ 是网络中的节点数。这是非常资源密集型的。

Think of it in this way. There are a billion systems connected in the network. Then, there is a file stored in just one system in the network. In an _unstructured network_, we have to run a search through each system in the network to find the file.
以这种方式来考虑。有十亿个系统连接在网络中。然后，有一个文件只存储在网络中的一个系统中。在一个非结构化的网络中，我们必须在网络中的每个系统中进行搜索以找到该文件。

So, let's say the search for a file in a system needs 1 second. The search through the entire network would require one billion seconds.
因此，假设在一个系统中搜索一个文件需要 1 秒钟。通过整个网络的搜索需要 10 亿秒。

Some of the unstructured network's protocols are _Gossip_, _Kazaa_, and _Gnutella_.
一些非结构化网络的协议是 Gossip、Kazaa 和 Gnutella。

### Structured network [#](https://www.educative.io/courses/web-application-software-architecture-101/RMDYmYo8LlE#Structured-network)
结构化网络

In contrast to an _unstructured network_, a _structured P2P network_ holds the proper node indexing, or the topology. This makes it easier to search for specific data.
与非结构化网络相比，结构化 P2P 网络持有适当的节点索引，或拓扑结构。这使得搜索特定数据更加容易。

This kind of network implements a _distributed hash table_ to index the nodes. This index is just like the index of a book where we check to find a piece of particular information in the book rather than searching through every page.
这种网络实现了一个分布式哈希表来为节点建立索引。这种索引就像一本书的索引一样，我们通过检查来找到书中的某一特定信息，而不是在每一页中搜索。

_BitTorrent_ is an example of this type of network.
BitTorrent 就是这种类型的网络的一个例子。

### Hybrid model [#](https://www.educative.io/courses/web-application-software-architecture-101/RMDYmYo8LlE#Hybrid-model)
混合模式

The majority of the blockchain startups have a _hybrid model_. A _hybrid model_ means cherry-picking the good stuff from all the models like _P2P_, _client-server_ etc. It is a network, involving both a _peer to peer_ and a _client-server_ model.
大多数区块链初创公司都有一个混合模式。混合模式意味着从 P2P、客户端-服务器等所有模式中挑出好东西。它是一个网络，同时涉及点对点和客户端-服务器模式。

As we know, in a _P2P_ network, one single entity doesn't have all the control. So, to establish control, we need to set up our own server. For that, we need a _client-server_ model.
正如我们所知，在一个 P2P 网络中，一个单一的实体并不拥有所有的控制权。因此，为了建立控制，我们需要建立自己的服务器。为此，我们需要一个客户端-服务器模式。

A _P2P network_ offers more availability. To take down a blockchain network you have to literally take down all the network's nodes across the globe. A _P2P_ application can scale to the moon without putting the load on a single entity or the node. In an ideal environment, all the _nodes_ in the network equally share the bandwidth and the storage space. The system scales automatically as new users use the app.
一个 P2P 网络提供了更多的可用性。要摧毁一个区块链网络，你必须从字面上摧毁全球所有网络的节点。一个 P2P 应用程序可以扩展到月球，而不会把负载放在单个实体或节点上。在一个理想的环境中，网络中的所有节点平等地分享带宽和存储空间。当新用户使用该应用时，系统会自动扩展。

_Nodes_ get added as more and more people interact with your data. There are zero-data storage and bandwidth costs, and you don't have to shell out money to buy third-party servers to store your data. There is no third-party intervention, so data is secure. Share stuff only with friends you intend to share with.
随着越来越多的人与你的数据互动，节点会被添加。数据存储和带宽成本为零，你不需要掏钱购买第三方服务器来存储你的数据。没有第三方的干预，所以数据是安全的。只与你打算分享的朋友分享东西。

The cult of the _decentralized web_ is gaining ground in the present times. I can't deny that this is a disruptive tech with immense potential. _Blockchain_, or _Cryptocurrency_, is one example of this. It has taken the financial sector, in particular by storm.
对去中心化网络的崇拜在当今时代越来越深入人心。我不能否认，这是一个具有巨大潜力的颠覆性技术。区块链，即加密货币，就是其中的一个例子。它已经在金融领域掀起了风暴，特别是在金融领域。

There are numerous _P2P_ applications available on the web for instance:
例如，网络上有许多 P2P 应用程序：

1.  _Tradepal_
Tradepal

2.  Peer-to-peer digital cryptocurrencies like _Bitcoin_ and _Peercoin_.
点对点的数字加密货币，如比特币和 Peercoin

3.  _GitTorrent_ (a decentralized _GitHub_ which uses _BitTorrent_ and _Bitcoin_).
GitTorrent（一个去中心化的 GitHub，使用 BitTorrent 和比特币）

4.  _Twister_ (a decentralized microblogging service, which uses _WebTorrent_ for media attachments).
Twister（一个去中心化的微博服务，使用 WebTorrent 进行媒体附加）

5.  _Diaspora_ (a decentralized social network implementing the _federated architecture_).
Diaspora（一个实施联合架构的去中心化的社交网络）


_Federated architecture_ is an extension of the decentralized architecture, used in _decentralized social networks_. We are going to discuss this next.
联合架构是去中心化架构的延伸，用于去中心化社交网络。我们接下来将讨论这个问题。

---

笔记：

P2P 架构是围绕网络中的几个节点设计的，这些节点轮流充当客户端和服务器。
数据通过 TCP/IP 进行交换，就像在 客户端-服务器 模式下通过 HTTP 协议进行交换一样。P2P 设计在 TCP/IP 上有一个覆盖网络，这使得用户可以直接连接。它处理了所有复杂的问题和繁重的工作。节点在这个覆盖网络中被索引并可被发现。

一个大文件在节点之间的传输是以非顺序的方式被分成大小相同的块。假设一个系统承载了一个 75G 的大文件。网络中需要该文件的其他节点可以找到包含该文件的系统。然后，他们分块下载该文件，同时重新托管所下载的分块，使其他用户更容易获得该文件。这种方法被称为分段式 P2P 文件传输。

P2P 网络的类型：
1. 非结构化网络
在非结构化网络中，节点/对等人一直随机地相互连接。没有结构，没有规则。
在这种架构设计中，没有对节点进行索引。为了搜索数据，我们必须扫描网络中的每一个节点。这在复杂性上是 $O(n)$，其中 $n$ 是网络中的节点数。这是非常资源密集型的。
2. 结构化网络
与非结构化网络相比，结构化 P2P 网络持有适当的节点索引，或拓扑结构。这使得搜索特定数据更加容易。
这种网络实现了一个分布式哈希表来为节点建立索引。这种索引就像一本书的索引一样，我们通过检查来找到书中的某一特定信息，而不是在每一页中搜索。
3. 混合模式网络
混合模式是一个网络，同时涉及 点对点 和 客户端-服务器 模式。
在一个 P2P 网络中，一个单一的实体并不拥有所有的控制权。因此，为了建立控制，我们需要建立自己的服务器。为此，我们需要一个 客户端-服务器 模式。
要摧毁一个区块链网络，你必须从字面上摧毁全球所有网络的节点。在一个理想的环境中，网络中的所有节点平等地分享带宽和存储空间。当新用户使用该应用时，系统会自动扩展。
随着越来越多的人与你的数据互动，节点会被添加。数据存储和带宽成本为零，你不需要掏钱购买第三方服务器来存储你的数据，数据也很安全。
