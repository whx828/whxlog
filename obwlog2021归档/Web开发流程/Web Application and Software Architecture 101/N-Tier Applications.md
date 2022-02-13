In this lesson, we will go over the n-tier applications and their components.
在本课中，我们将介绍 N 层应用程序及其组件。

## N-tier applications [#](https://www.educative.io/courses/web-application-software-architecture-101/qVNmZ4Rk79y#N-tier-applications)

> An _n-tier_ application is an application that has more than three components involved.
> 一个 N 层的应用程序有三个以上的组件参与的应用程序。

What are those components?
这些组件是什么？

- _Cache_
缓存
- _Message queues for asynchronous behavior_
用于异步行为的消息队列
- _Load balancers_
负载平衡器
- _Search servers for searching through massive amounts of data_
搜索服务器，用于搜索海量的数据
- _Components involved in processing massive amounts of data_
参与处理大量数据的组件
- _Components running heterogeneous tech commonly known as web services_ etc.
运行异构技术的组件，通常被称为网络服务等

All the social applications like _Instagram_ and _Facebook_, large scale industry services like _Uber_ and _Airbnb_, online massive multiplayer games like _Pokémon Go_, applications with fancy features are _n-tier_ applications.
所有的社交应用，如 Instagram 和 Facebook，大规模的行业服务，如 Uber 和 Airbnb，在线大型多人游戏，如 Pokémon Go，等等具有花哨功能的应用都是 N 层应用。

> **Note:** There is another name for n-tier apps, “**distributed applications**.” But, I don't think it's safe to use the word “_distributed_” yet, as the term _distributed_ brings along a lot of complex stuff with it. At this point, it would confuse rather than help us. Although I will discuss _distributed architecture_ in this course, for now, we will just stick with the term **n-tier applications**.
> 注意：N 层应用程序还有另一个名字，"分布式应用程序"。但是，我认为现在使用 "分布式" 这个词还不安全，因为分布式这个词带来了很多复杂的东西。在这一点上，它将使我们感到困惑而不是帮助我们。尽管我将在本课程中讨论分布式架构，但现在，我们将只是坚持使用 N 层应用程序这个术语。

_So, why the need for so many tiers?_
那么，为什么需要这么多层？

## Why the need for so many tiers? [#](https://www.educative.io/courses/web-application-software-architecture-101/qVNmZ4Rk79y#Why-the-need-for-so-many-tiers?)

Two software design principles that are key to explaining this are the _single responsibility principle_ and the _separation of concerns_.
两个软件设计原则是解释这个问题的关键，它们是：单一责任原则和关注点分离。

## Single responsibility principle [#](https://www.educative.io/courses/web-application-software-architecture-101/qVNmZ4Rk79y#Single-responsibility-principle)

**Single responsibility principle** simply means giving only one responsibility to a component and letting it execute it perfectly, be it saving data, running the application logic or ensuring the delivery of the messages throughout the system.
单一责任原则简单地说就是只给一个组件一个责任或者说任务，让它完美地执行，无论是保存数据、运行应用逻辑还是确保整个系统的信息传递。

This approach gives us a lot of flexibility and makes management easier, like when upgrading a database server.
这种方法给了我们很大的灵活性，使管理更加容易，比如在升级数据库服务器时。

When installing a new _OS_ or a patch, this approach wouldn't impact the other components of the service running. Additionally, even if something amiss happens during the OS installation process, just the database component would go down. The application as a whole would still be up and only the features requiring the database would be impacted.
当安装一个新的操作系统或补丁时，这种方法不会影响服务的其他组件的运行。此外，即使在操作系统安装过程中发生了什么问题，也只有数据库组件会瘫痪。应用程序作为一个整体仍然可以运行，只有需要数据库的功能会受到影响。

We can also have dedicated teams and code repositories for every component, which keeps things cleaner.
我们还可以为每一个组件建立专门的团队和代码库，这样可以使事情更加简洁。

The _single responsibility principle_ is then reason why I was never a fan of _stored procedures_.
然而，单一责任原则是我不喜欢存储进程的原因。

Stored procedures enable us to add business logic to the database, which is a big no for me. What if, in the future, we want to plug in a different database? Where do we take the business logic? Do we take it to the new database? Or do we try to refactor the application code and squeeze in the stored procedure logic somewhere?
存储进程使我们能够将业务逻辑添加到数据库中，这对我来说是一个很大的拒绝项。如果将来我们想插入一个不同的数据库呢？我们把业务逻辑带到哪里？我们把它带到新的数据库吗？或者我们试着重构应用程序代码，把存储进程的逻辑挤到某个地方？

A database should not hold business logic. It should only take care of persisting the data. This is what the _single responsibility principle_ is, and this is why we have separate _tiers_ for separate components.
一个数据库不应该保存业务逻辑。它应该只负责持久化数据。这就是单一责任原则，这就是为什么我们要为不同的组件设置不同的层级。

## Separation Of concerns [#](https://www.educative.io/courses/web-application-software-architecture-101/qVNmZ4Rk79y#Separation-Of-concerns)

**Separation of concerns** kind of means the same thing, be concerned about your work only and stop worrying about the rest of the stuff.
分离关注点的意思是一样的，只关注你的工作，不要再担心其他的东西了。

These principles act at all the levels of the service, both at the tier level and the code level.
这些原则在服务的所有层面上发挥作用，包括在层级和代码层面。

Keeping the components separate makes them reusable. Different services can use the same database, messaging server or any component as long as they are not tightly coupled with each other.
保持组件的分离使它们可以重复使用。不同的服务可以使用相同的数据库、消息服务器或任何组件，只要它们之间不是紧密耦合的。

Having loosely coupled components is the way to go. The approach makes scaling the service easy in the future when things grow beyond a certain level.
拥有松散耦合的组件才是正确的做法。当事情发展到一定程度后，这种方法使服务的扩展变得容易。

## Difference between layers & tiers [#](https://www.educative.io/courses/web-application-software-architecture-101/qVNmZ4Rk79y#Difference-between-layers-&-tiers)

> **Note:** Don't confuse tiers with the layers of the application. Some prefer to use them interchangeably. However, in the industry, layers of an application typically means the _user interface layer_, _business layer_, _service layer_, or the _data access layer_.
> 注意：不要将层数与应用程序的层数混淆。有些人喜欢将它们互换使用。然而，在业界，应用程序的层通常指用户界面层、业务层、服务层或数据访问层。

![[Layers of a Web Application.png]]

The layers mentioned in the illustration are at the code level. The difference between _layers_ and _tiers_ is that layers represent the conceptual organization of the code and its components, whereas, tiers represent the physical separation of components.
插图中提到的层是在代码层面。层和层之间的区别是，layers 代表代码及其组件的概念组织，而 tiers 则代表组件的物理分离。

All these layers together can be used in any tiered application. Be it single, two, three or n-tier. I'll discuss these layers in detail in the course ahead.
所有这些层都可以用于任何层级的应用中。无论是单层、双层、三层还是 N 层。我将在接下来的课程中详细讨论这些层。

Alright, now we have an understanding of tiers. Let's zoom-in one notch and focus on web architecture.
好了，现在我们对分层有了了解。让我们放大一个缺口，专注于网络架构。

---

Explanation
解释

Tiers are the logical separation of components in an application or a service. The components are the database, backend application server, user interface, messaging, and caching.
tiers 是应用程序或服务中组件的逻辑分离。组件是数据库，后端应用服务器，用户界面，消息传递和缓存。

Layers in an application mean the logical separation at the code level. The layers are the user interface layer, business layer, service layer, and data access layer.
应用程序中的 layers 是指代码级别的逻辑分离。layers 是用户界面层，业务层，服务层和数据访问层。

---

笔记：
N 层应用程序：有**三个以上**的组件（UI、业务逻辑、数据库等）的应用程序。
单一责任原则（Single responsibility principle）：只给一个组件一个任务，让它完美地执行，这个任务可以是保存数据、运行应用逻辑、确保整个系统的信息传递等。
例如一个数据库不应该保存业务逻辑，只需负责保存数据。这就是单一责任原则的体现，也是我们要为不同的组件设置不同的层级的原因。
分离关注点原则（Separation of concerns）：只关注你的工作，不要再担心其他的东西了。

以上讨论的都是 tiers，即软件架构层的划分，而其中的应用程序 tier 也有 layers 的概念，应用程序 tier 的层 layers 通常指：用户界面层、业务层、服务层、数据访问层。
所有这些层 layers 都可以用于任何层级（tiers）的应用中。无论是单层、双层、三层还是 N 层。
