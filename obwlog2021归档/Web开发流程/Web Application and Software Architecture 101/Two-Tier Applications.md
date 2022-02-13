In this lesson, you will learn about the two-tier applications.
在本课中，您将了解两层应用程序。

## Two-tier application [#](https://www.educative.io/courses/web-application-software-architecture-101/Bnrk3J8ZMjY#Two-tier-application)

> A **two-tier** application involves a _client_ and a _server_. The _client_ contains the _user interface_ and the _business logic_ in one machine. Meanwhile, the backend _server_ includes the _database_ running on a different machine. The database server is hosted by the business and has control over it.
> 两层应用程序涉及客户端和服务器。客户端在一台机器上包含用户界面和业务逻辑。同时，后端服务器包括运行在不同机器上的数据库。数据库服务器由企业托管并对其进行控制。

![[client server architecture.png]]

_Why do we need two-tier applications? Why not host the business logic on a different machine and have control over it?_
为什么我们需要两层应用程序？为什么不在不同的机器上托管业务逻辑并对其进行控制？

_Also, isn't the application code vulnerable to being accessed by a third person?_
此外，应用程序代码是否容易被第三方访问？

## The need for two-tier applications [#](https://www.educative.io/courses/web-application-software-architecture-101/Bnrk3J8ZMjY#The-need-for-two-tier-applications)

Well, yes!! However, there are use cases where _two-tier_ applications come in handy, for instance, a to-do list app or a similar planner or a productivity app.
确实如此。但是，在某些用例中，两层应用程序会派上用场，例如，待办事项列表应用程序或类似的计划程序或生产力应用程序。

In these scenarios, it won't cause the business significant harm, even if the code is accessed by a third person. On the contrary, since the code and the user interface reside in the same machine, there are fewer network calls to the backend server which keeps the latency of the application low. This is an upside!
在这些场景中，即使代码被第三方访问，也不会对业务造成重大损害。相反，由于代码和用户界面位于同一台机器上，因此对后端服务器的网络调用较少，从而使应用程序的延迟保持在较低水平。这是一个好处！

The application makes a call to the _database_ server, only when the user has finished creating their to-do list and wants to persist the changes.
仅当用户完成创建待办事项列表并希望保留更改时，应用程序才会调用数据库服务器。

Another good example of this is the online browser and app-based games. The game files are pretty heavy, and they only get downloaded on the client once when the user uses the application for the first time. Moreover, they make the network calls only to keep the game state persistent.
另一个很好的例子是在线浏览器和基于应用程序的游戏。游戏文件非常重，只有在用户第一次使用应用程序时才会在客户端下载一次。此外，他们进行网络调用只是为了保持游戏状态的持久性。

Also, fewer server calls mean less money needs to be spent on the servers which is economical.
此外，更少的服务器调用意味着需要在服务器上花费更少的钱，这是经济的。

Though, if we want to pick this type of tier when writing our service largely depends on our business requirements and the use case.
但是，如果我们想在编写我们的服务时选择这种类型的层，在很大程度上取决于我们的业务需求和用例。

We can either keep the _user interface_ and the _business logic_ on the _client_ or move the _business logic_ to a dedicated _backend server_, which would make it a _three-tier_ application. We will discuss it next.
我们可以将用户界面和业务逻辑保留在客户端，也可以将业务逻辑移至专用后端服务器，这将使其成为三层应用程序。我们将在接下来讨论它。

---

笔记：
两层应用程序涉及**客户端**和**服务器**。前端客户端在一台机器上包含 UI 和业务逻辑。同时，后端服务器包括运行在不同机器上的数据库。数据库服务器由企业托管并对其进行控制。
由于业务逻辑和 UI 位于同一台机器上，因此对后端服务器的网络调用较少，从而使应用程序的延迟保持在较低水平。仅当用户完成某些修改并希望保留更改时，应用程序才会调用数据库服务器，其他操作不涉及到网络延迟，因为也不涉及数据库。
