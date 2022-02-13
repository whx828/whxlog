In this lesson, you will cover high availability clustering.
在这一课中，你将了解到高可用性集群。

Now that you have a clear understanding of high availability, let's talk a bit about the high-availability cluster.
现在你对高可用性有了清楚的了解，让我们来谈谈高可用性集群。

A _high availability cluster_ also known as the _fail-over cluster_, contains a set of nodes running in conjunction with each other that ensures high availability of the service.
高可用性集群也被称为故障转移集群，它包含一组相互配合运行的节点，确保服务的高可用性。

The nodes in the cluster are connected by a private network called the _heartbeat network_ that continuously monitors the health and the status of each node in the cluster.
集群中的节点由一个称为心跳网络的私有网络连接，该网络持续监控集群中每个节点的健康和状态。

A single state across all the nodes in a cluster is achieved with the help of a shared distributed memory and a distributed coordination service like the _Zookeeper_.
在共享分布式内存和分布式协调服务（如 Zookeeper）的帮助下，集群中所有节点的单一状态得以实现。

![[Highly Available Cluster.png]]

To ensure the availability, HA clusters use several techniques such as _disk mirroring/Redundant Array of Independent Disks (RAID)_, redundant network connections, redundant electrical power etc. The network connections are made redundant. So, if the primary network goes down the backup network takes over.
为了确保可用性，HA 集群使用了几种技术，如磁盘镜像/独立磁盘冗余阵列（RAID）、冗余网络连接、冗余电力等。网络连接是冗余的。因此，如果主网络发生故障，备份网络将接管。

Multiple HA clusters run together in one geographical zone ensuring minimum downtime and continual service.
多个 HA 集群在一个地理区域内共同运行，确保最小的停机时间和持续的服务。

Alright, so now we have a pretty good understanding of scalability and high availability. These two concepts are crucial to software system design.
好了，现在我们对可扩展性和高可用性有了相当好的理解。这两个概念对软件系统设计至关重要。

Let's move on to the next chapter where we discuss load balancing in web applications.
让我们进入下一章，讨论网络应用中的负载平衡。

---

笔记：

高可用性集群也被称为故障转移集群，它包含一组相互配合运行的节点，确保服务的高可用性。集群中的节点由一个称为心跳网络的私有网络连接，该网络持续监控集群中每个节点的健康和状态。在共享分布式内存和分布式协调服务（如 Zookeeper）的帮助下，集群中所有节点的单一状态得以实现。
为了确保可用性，HA 集群使用了几种技术，如磁盘镜像/独立磁盘冗余阵列（RAID）、冗余网络连接、冗余电力等。网络连接是冗余的。因此，如果主网络发生故障，备份网络将接管。
多个 HA 集群在一个地理区域内共同运行，确保最小的停机时间和持续服务。
