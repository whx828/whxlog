In this lesson, we will discuss federated architecture.
在本课中，我们将讨论联合架构。

## What Is federated architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/7DyyqRvgBmr#What-Is-federated-architecture?)
什么是联合架构？

_Federated architecture_ is an extension of _decentralized architecture_. It powers social networks like _Mastodon_, _Minds_, _Diaspora_, etc.
联合架构是去中心化架构的一个延伸。它为 Mastodon、Minds、Diaspora 等社交网络提供动力。

The term _federated_ in a general sense means a group of semi-autonomous entities that exchange information with each other. A real-world example of this is looking at different states in a country that are managed by the state governments. They are partially self-governing and exercise power to keep things running smoothly. Then, those state governments share information with each other and with a central government making a complete autonomous government.
术语 Federated 在一般意义上是指一组半自治的实体，它们相互交换信息。一个现实世界的例子是看一个国家中由州政府管理的不同州。它们是部分自治的，行使权力以保持事情的顺利进行。然后，这些州政府相互之间以及与中央政府分享信息，使之成为一个完整的自治政府。

This is just an example. From a technical standpoint, the federated model is under continual research, development, and evolution. There are no standard rules. Developers and architects can have their own designs in place. After all, it's all _decentralized_, meaning not under the control of any single entity.
这只是一个例子。从技术角度来看，联合模式正处于不断的研究、开发和演变之中。没有标准的规则。开发人员和建筑师可以有自己的设计。毕竟，这一切都是去中心化的，意味着不受任何单一实体的控制。

## How is federated architecture implemented in decentralized social networks? [#](https://www.educative.io/courses/web-application-software-architecture-101/7DyyqRvgBmr#How-is-federated-architecture-implemented-in-decentralized-social-networks?)
联合架构是如何在去中心化的社交网络中实现的呢？

As shown in the diagram below, a federated network has entities called _servers_ or _pods_. A large number of _nodes_ subscribe to the _pods_. There are several _pods_ in the network that are linked to each other and share information with each other.
如下图所示，一个联合网络有被称为服务器或 pod 的实体。大量的节点订阅了 pods。网络中有几个 pod，它们相互联系，相互分享信息。

The _pods_ can be hosted by individuals, as is ideal in a decentralized network. As new _pods_ are hosted and introduced to the network, the network keeps growing.
pod 可以由个人托管，这在去中心化的网络中是很理想的。随着新的 pods 被托管并引入网络，网络不断增长。

In case the link between a few _pods_ breaks temporarily, the network is still up. _Nodes_ can still communicate with each other via the pods they are subscribed to.
万一几个 pod 之间的链接暂时中断，网络仍然是正常的。节点仍然可以通过他们订阅的 pod 进行相互通信。

![[Federated Architecture.png]]

## What is the need for pods? [#](https://www.educative.io/courses/web-application-software-architecture-101/7DyyqRvgBmr#What-is-the-need-for-pods?)
对 Pod 的需求是什么？

_What is the need for Pods? Can't the nodes just be linked to each other like in a regular peer-to-peer network?_
对 Pod 的需求是什么？难道就不能像普通的点对点网络那样，将节点相互连接起来吗？

_Pods_ facilitate node discovery. In a _peer-to-peer_ network, there is no way of discovering other nodes, and we would just sit in the dark if it weren't for a centralized node registry or something.
Pod 有利于节点的发现。在点对点网络中，没有办法发现其他节点，如果不是有一个集中的节点注册表或其他东西，我们就只能坐在黑暗中。

The other way is to run a scan through the network to try to discover other nodes. This is a really time-consuming and tedious task. Why not just have a _pod_ instead?
另一种方法是在网络中进行扫描，试图发现其他节点。这是一个非常耗时和乏味的任务。为什么不直接用一个 pod 来代替呢？

Okay!! So, everyone, I think I have given you a pretty good insight into the decentralized web.
好吧！所以，各位，我想我已经让你们对去中心化的网络有了相当好的了解。

Let's move on to the next lesson where we talk about picking the right server-side technology.
让我们进入下一课，我们将讨论如何挑选合适的服务器端技术。

---

笔记：

联合架构(Federated architecture)：是去中心化架构的一个延伸，为 Mastodon、Minds、Diaspora 等社交网络提供动力。
Federated 在一般意义上是指一组半自治的实体，它们相互交换信息。
一个现实世界的例子是看一个国家中由州政府管理的不同州。它们是部分自治的，行使权力以保持事情的顺利进行。然后，这些州政府相互之间以及与中央政府分享信息，使之成为一个完整的自治政府。
从技术角度来看，Federated architecture 正处于不断的研究、开发和演变之中。没有标准的规则。开发人员可以有自己的设计。毕竟，这一切都是去中心化的，意味着不受任何单一实体的控制。

在去中心化的社交网络中实现联合架构
一个联合网络有被称为服务器或 pod 的实体。大量的节点订阅了 pod。网络中有几个 pod，它们相互联系，相互分享信息。
pod 可以由个人托管，这在去中心化的网络中是很理想的。随着新的 pod 被托管并引入网络，网络不断增长。万一几个 pod 之间的链接暂时中断，网络仍然是正常的。节点仍然可以通过他们订阅的 pod 进行相互通信。

pod 有利于节点的发现。在点对点网络中，没有办法发现其他节点，如果没有一个集中的节点注册表或其他东西，将寸步难行；另一种方法是在网络中进行扫描，试图发现其他节点。这是一个非常耗时和乏味的任务。那为什么不直接用一个 pod 来代替呢？
