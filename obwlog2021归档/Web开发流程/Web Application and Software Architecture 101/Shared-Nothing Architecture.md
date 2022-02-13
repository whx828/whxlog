In this lesson, we will briefly discuss the shared-nothing architecture.
在本课中，我们将简要地讨论无共享架构。

When working with distributed systems, you'll hear this term _shared-nothing architecture_ often. So, I thought I'd just quickly discuss it with you. Though, there is nothing really unique about this. I've already talked about it in the course.
在与分布式系统打交道时，你会经常听到这个无共享架构的术语。所以，我想我只是快速地和你讨论一下。虽然，这并没有什么真正独特的地方。我已经在课程中讲过它了。

When several modules work in conjunction with each other, they often share _RAM_, which is also known as the shared memory. They share the disk, that is sharing the database, and then they share nothing. The system's architecture where the modules or services share nothing are called the _shared-nothing architecture_.
当几个模块相互配合工作时，它们经常共享 RAM，也就是共享内存。他们共享磁盘，也就是共享数据库，然后他们什么都不共享。模块或服务不共享任何东西的系统架构被称为 "无共享" 架构。

> _Shared-nothing architecture_ means eliminating all single points of failure. Every module has its own memory, or its own disk. So, even if several modules in the system go down, the other modules online stay unaffected. It also helps with _scalability_ and _performance_.
> 无共享架构意味着消除了所有单点故障。每个模块都有自己的内存，或自己的磁盘。因此，即使系统中的几个模块发生故障，在线的其他模块也不会受到影响。这也有助于提高扩展性和性能。

Moving on!! Let's discuss hexagonal architecture in the next lesson.
继续前进！! 让我们在下一课中讨论 Hexagonal 架构。

---

笔记：

当几个模块相互配合工作时，它们经常共享 RAM，也就是共享内存。他们共享磁盘，也就是共享数据库。
而模块或服务不共享任何东西的系统架构就被称为 "无共享" 架构。
