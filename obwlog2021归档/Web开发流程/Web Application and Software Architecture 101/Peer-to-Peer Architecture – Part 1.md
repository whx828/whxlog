In this lesson, which is part one of the discussion about peer-to-peer architecture, we will take a deep dive into the architecture and discuss it in detail.
本课是讨论点对点架构的第一部分，我们将深入了解该架构并进行详细讨论。

_Peer-to-peer (P2P)_ architecture is the base of _blockchain_ tech. We've all used it at some point in our lives to download files via _torrent_. So, I guess you have a little idea of what it is. You are also probably familiar with terms like _seeding_, _leeching_, etc. Even if you aren't, you'll learn everything in this lesson.
点对点（P2P）架构是区块链技术的基础。我们都在生活中的某个时刻使用过它，通过洪流下载文件。所以，我猜你对它有一点了解。你也可能熟悉诸如播种、沥水等术语。即使你不熟悉，你也会在这一课中了解到一切。

Let's begin the lesson with a discussion of what a _P2P_ network is.
让我们以讨论什么是 P2P 网络来开始本课。

## What is a peer-to-peer network? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLApNkXY84R#What-is-a-peer-to-peer-network?)
什么是点对点网络？

A _P2P_ network is a network in which computers, also known as _nodes_, can communicate with each other without a _central server_. The absence of a _central server_ rules out the possibility of a single point of failure. All the computers in the network have equal rights. A _node_ acts as a _seeder_ and a _leecher_ at the same time. So, even if some of the computers/nodes go down, the network and the communication is still up.
P2P 网络是一种网络，其中的计算机，也称为节点，可以在没有中央服务器的情况下相互通信。没有中央服务器，就排除了单点故障的可能性。网络中的所有计算机都有平等的权利。一个节点同时充当 seeder 和 leecher。因此，即使一些计算机/节点发生故障，网络和通信仍然是正常的。

A _seeder_ is a _node_ that hosts the data on its system and provides bandwidth to upload the data to the network, and a _leecher_ is a node that downloads the data from the network.
seeder 是一个在其系统上托管数据并提供带宽将数据上传到网络的节点，而 leecher是一个从网络上下载数据的节点。

![[Peer to Peer Architecture.png]]

## What does a central server mean? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLApNkXY84R#What-does-a-central-server-mean?)
中央服务器是什么意思？

I want you to think of a messaging app. When two users communicate, the first user sends a message from their device, and the message moves on the server of the organization hosting the messaging service. From there, the message is routed to the destination, that is, the device of the user receiving the message.
我想让你想一想一个消息传递应用程序。当两个用户沟通时，第一个用户从他们的设备上发送一条信息，信息在托管信息服务的组织的服务器上移动。从那里，信息被路由到目的地，即接收信息的用户的设备。

The server of the organization is the _central server_. These systems are also known as _centralized systems_.
该组织的服务器是中央服务器。这些系统也被称为集中式系统。

_Okay, so what's the issue when communicating with my friend via a central server? I have never faced any issues._
好吧，那么通过中央服务器与我的朋友通信时有什么问题？我从未遇到过任何问题。

## Downsides of centralized systems [#](https://www.educative.io/courses/web-application-software-architecture-101/RLApNkXY84R#Downsides-of-centralized-systems)
集中式系统的坏处

In this scenario, there are a few important things to consider:
在这种情况下，有几件重要的事情需要考虑：

- First, the _central server_ has access to all your messages. It can read them, share them with its associates, laugh about them, and so on. So, communication is not really secure. Even though the businesses say that the entire message pipeline is encrypted and stuff, data breaches still happen, governments get access to our data, and data is sold to third parties for fat profits. Do you think these messaging apps are really secure? Should the national security or enterprise officials sitting at the top of the food chain use these central server messaging apps for communication?
首先，中央服务器可以接触到你的所有信息。它可以阅读它们，与它的同伙分享它们，嘲笑它们，等等。所以，通信并不真正安全。即使企业说整个信息管道是加密的，但数据泄露仍然发生，政府可以访问我们的数据，数据被出售给第三方以获取丰厚的利润。你认为这些消息应用程序真的安全吗？坐在食物链顶端的国家安全或企业官员应该使用这些中央服务器消息应用程序进行通信吗？

- Second, in case of events like a natural disaster, earthquake, a zombie attack, massive infrastructural failure, or the organization going out of business, we are stranded. There is no way to communicate with our friends across the globe. Think about it.
第二，如果发生自然灾害、地震、僵尸袭击、大规模基础设施故障或组织倒闭等事件，我们就会被搁浅。我们没有办法与全球各地的朋友沟通。想一想吧。

- Third, let's say you start creating content on social media. You have a pretty solid following on it, you spend 100+ hours a week to put out the best content ever, and you have worked years to reach this point of success. Then one fine day, out of the blue, the organization pokes you and says, “Hey!! Good job, but, aaaaa… for some reason, which we can't talk about, we have to let your data go. We just don't like your content.” _Shift + Del_ and whoosh… all your data disappears like a genie. _What are you going to do next?_ If you are already a content creator or are active on social media, this happens all the time, and you know that.
第三，假设你开始在社交媒体上创造内容。你在上面有一个相当稳固的追随者，你每周花 100 多个小时来发布最好的内容，你已经工作了多年，达到了这个成功的点。然后，在某一天，组织突然捅了你一下，说："嘿！干得好，但是，啊......由于某些原因，我们不能谈论，我们必须让你的数据消失。我们只是不喜欢你的内容。" Shift + Del，嗖......你所有的数据像精灵一样消失了。你接下来要做什么？如果你已经是一个内容创作者或活跃在社交媒体上，这种情况一直在发生，你也知道。

Fortunately, P2P networks are resilient to all these scenarios, due to their design. They have a _decentralized architecture_.
幸运的是，由于 P2P 网络的设计，它对所有这些情况都有弹性。它们有一个去中心化的架构。

![[Decentralized Architecture.png]]

## What is a decentralized architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLApNkXY84R#What-is-a-decentralized-architecture?)
什么是去中心化的架构？

Nobody has control over your data, and nobody has the power to delete your data because all the participating nodes in a _P2P_ network have equal rights. During a zombie apocalypse, when the huge corporation servers are dead or on fire, we can still communicate with each other via a _peer-to-peer_ connection.
没有人可以控制你的数据，也没有人有权力删除你的数据，因为 P2P 网络中的所有参与节点都有平等的权利。当巨大的公司服务器毁坏或着火时，我们仍然可以通过点对点的连接相互沟通。

Though I've nothing against any of the corporations :) They've made our lives really easy. It's just I am making you aware of all the possible scenarios out there.
虽然我并不反对任何一家公司 :) 他们已经使我们的生活变得非常容易。我只是想让你知道所有可能出现的情况。

## Advantages of a peer-to-peer network [#](https://www.educative.io/courses/web-application-software-architecture-101/RLApNkXY84R#Advantages-of-a-peer-to-peer-network)
点对点网络的优点

_Here is another use case where a peer to peer network rocks!!_
这是另一个使用案例，点对点网络在其中发挥了巨大作用！

Imagine this, you have finally returned home from a trekking tour after visiting all seven continents around the world. Things couldn't seem more beautiful or be more emotionally satisfying.
想象一下，你在游览了世界七大洲之后，终于从徒步旅行中回到了家。事情看起来再美不过了，也没有比这更令人满意的情感了。

You have documented the entire expedition with state-of-the-art cameras and equipment in super ultra HD 4K quality, which has stacked up the hard drive of your computer. You are super excited to share all the videos and photos of the tour with your friends.
你用最先进的相机和设备以超高清 4K 质量记录了整个探险过程，这已经堆满了你电脑的硬盘。你超级兴奋地与你的朋友们分享这次旅行的所有视频和照片。

_But how do you really plan to share the data, which is several gigabytes, with your friends?_
但是，你到底打算如何与你的朋友们分享这些数千兆字节的数据？

Facebook Messenger, WhatsApp?
Facebook Messenger，WhatsApp？

Messengers have a memory limit, so they aren't even an option. Well, you could upload all the stuff on the cloud and share the link with your folks, but, hold on. Uploading that much data needs some serious storage space, and this would mean some serious money. Would you be in the mood of spending anymore after such a long trip?
信息有内存限制，所以它们甚至成不了一个选项。好吧，你可以把所有的东西上传到云端，然后与你的朋友们分享链接，但是，等一下。上传那么多数据需要一些严重的存储空间，这意味着要花很多钱。经过这么长时间的旅行，你会有心情再花钱吗？

No problem. We can write all the files on a physical memory like a DVD or a portable hard drive and share them with our friends, right?
没问题。我们可以把所有的文件写在一个物理存储器上，如 DVD 或移动硬盘，并与我们的朋友分享，对吗？

Well yes, we can. However, physical memory has its costs, and writing files for every friend is time-consuming, expensive, and resource intensive. I get it you are tired already. But, oh!! By the way, we have to courier the disks to friends located across the globe, adding additional courier expense and delaying the time it will take to reach them.
嗯，是的，我们当然可以那么做。然而物理内存有其成本，为每个朋友写文件是费时、昂贵和资源密集的。我明白你已经很累了。顺便说一下，我们必须把磁盘快递给位于全球各地的朋友，增加了额外的快递费用，并延迟了到达他们手中的时间。

We've got this, so don't worry!! We'll find out some way. So, now what options do we have remaining? Think about it.
我们有这个能力，所以不要担心! 我们会找到一些办法的。那么，现在我们还有什么选择呢？想一想吧。

Hey, why don't we use _peer-to-peer_ file sharing? That would be awesome.
嘿，我们为什么不使用点对点的文件共享？这将是非常棒的。

With _P2P peer-to-peer_ file sharing, we can easily share all the content with friends with minimal costs and fuss.
有了 P2P 点对点文件共享，我们可以轻松地与朋友分享所有的内容，而且成本和麻烦都最小。

Beautiful!!
漂亮！

We can use a _P2P_ protocol like _BitTorrent_ for it. BitTorrent is the most commonly used _P2P_ protocol for distributing data and large electronic files over the internet. It has approx. 25 million concurrent users at any point in time.
我们可以使用像 BitTorrent 这样的 P2P 协议来实现。BitTorrent 是最常用的 P2P 协议，用于在互联网上分发数据和大型电子文件。它在任何时间点都有大约 2500 万并发用户。

So, we will create a _torrent_ file of our data, and share it with all our folks. They just have to put the _torrent_ in their BitTorrent client and start downloading the files to their systems while hosting/seeding the files simultaneously for others to download.
因此，我们将创建一个数据的洪流文件，并与我们所有的人分享。他们只需将洪流文件放入他们的 BitTorrent 客户端，并开始将文件下载到他们的系统中，同时托管/播送文件供其他人下载。

These are a few of the use cases where the _P2P_ network rocks. In the next lesson, which is the second part of the _P2P_ architecture section, we will take a deep dive into the architecture.
这些是 P2P 网络的几个使用案例。在下一课，也就是 P2P 架构部分的第二部分，我们将深入了解该架构。

---

笔记：

P2P 网络是一种网络，其中的计算机，也称为节点，可以在没有中央服务器的情况下相互通信。没有中央服务器，就排除了单点故障的可能性。网络中的所有计算机都有平等的权利。一个节点同时充当 seeder 和 leecher。因此，即使一些计算机/节点发生故障，网络和通信仍然是正常的。
seeder 是在其系统上托管数据并提供带宽将数据上传到网络的节点，而 leecher是从网络上下载数据的节点。

去中心化的架构：P2P 网络中的所有参与节点都有平等的权利。当巨大的公司服务器毁坏或着火时，我们仍然可以通过点对点的连接相互沟通。

有了 P2P 点对点文件共享，我们可以轻松地与朋友分享所有的内容，而且成本和麻烦都最小。

BitTorrent 是最常用的 P2P 协议，用于在互联网上分发数据和大型电子文件。它在任何时间点都有大约 2500 万并发用户。我们可以创建一个数据的洪流文件，并与我们所有的朋友分享。他们只需将洪流文件放入他们的 BitTorrent 客户端，并开始将文件下载到他们的系统中，同时托管/播送文件供其他人下载。
