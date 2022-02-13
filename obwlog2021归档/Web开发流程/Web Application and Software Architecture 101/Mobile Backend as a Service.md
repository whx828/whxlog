In this lesson, you will learn about mobile backend as a service and when to use it.
在本课中，您将了解移动后端即服务以及何时使用它。

## What is mobile backend as a service? [#](https://www.educative.io/courses/web-application-software-architecture-101/mE4K5v1vz6E#What-is-mobile-backend-as-a-service?)
什么是移动后端作为一种服务？

_Mobile Backend as a Service_ or _MBaaS_ is a cloud-based service model that takes care of the backend infrastructure of our mobile app and enables us to focus on the business logic and the user interface.
移动后端即服务或 MBaaS 是一种基于云的服务模式，它负责我们移动应用的后台基础设施，使我们能够专注于业务逻辑和用户界面。

_**So, what are the things a MBaaS takes care of? What features does it bring along?**_
那么，MBaaS 负责哪些事情呢？它能带来哪些功能？

Besides the _business logic_ and the _user interface_, an online service contains several other key features that collectively make the service functional and worthy of getting the user's attention. These features are user authentication, integration with social networks, push-notifications, real-time database, caching, data storage, messaging, chat integration, integration of third-party tools, analytics, crash reporting and so on.
除了业务逻辑和用户界面，一个在线服务还包含其他几个关键的功能，这些功能共同使服务发挥作用，并值得引起用户的注意。这些功能包括用户认证、与社交网络的整合、推送通知、实时数据库、缓存、数据存储、消息传递、聊天整合、第三方工具的整合、分析、崩溃报告等等。

![[Mobile Backend as a Service.png]]

A MBaaS takes care of all these features making a developer's life a hell lot easier during the bootstrapping phase. Imagine writing and maintaining all these features yourself from the bare bones. I mean it's not even possible unless you have a team.
MBaaS 负责所有这些功能，使开发者在启动阶段的生活变得容易得多。想象一下，自己从最基本的功能开始编写和维护所有这些功能。我的意思是，除非你有一个团队，否则这甚至是不可能的。

With these freemium cloud-based services, you don't have to worry much about the app hosting costs during the initial days because these services offer a generous free tier. So, if you are a solo developer, with these services, you can always bring your idea to reality and show it to the world.
有了这些免费的基于云的服务，在最初的日子里，你不必太担心应用程序的托管费用，因为这些服务提供了一个慷慨的免费层。因此，如果你是一个单独的开发者，通过这些服务，你总是可以把你的想法变成现实，并向世界展示。

Deploy your app to the cloud, show it to the community, have some initial customers, get feedback, and pitch it to the potential investors without paying a dime for hosting and infrastructure. _Well, what more can I say?_
将你的应用程序部署到云端，向社区展示，拥有一些最初的客户，获得反馈，并向潜在的投资者推销，而不需要支付一分钱的托管和基础设施。嗯，我还能说什么呢？

This is the whole reason the cloud service model blew up. It provided a way for solo, indie developers to bootstrap their business and get a foothold in the market by just focussing on the idea implementation part and letting the cloud service take care of the rest.
这就是云服务模式爆炸的全部原因。它为个人独立开发者提供了一种方式，使他们能够启动自己的业务，并在市场上站稳脚跟，只需专注于想法的实施部分，并让云服务来处理其余部分。

In case you are new to the cloud, I have written a blog post about: [Why use the cloud? How is a cloud different from traditional computing?](https://www.8bitmen.com/why-use-cloud-how-is-cloud-computing-different-from-traditional-computing/) . This will give you an insight into it.
如果你是云计算的新手，我曾写过一篇博文，关于：为什么使用云计算？云计算与传统计算有什么不同？这将使你对它有一个深入的了解。

A MBaaS typically offers an API for every feature. There will be an API for user authentication, an API for real-time databases, an API for messaging and so on. Our code can directly interact with the respective API and exchange information.
一个 MBaaS 通常为每个功能提供一个 API。会有一个用户认证的 API，一个实时数据库的 API，一个消息传递的 API 等等。我们的代码可以直接与相应的 API 交互，并交换信息。

Also, since we do not have to manage the infrastructure, a mobile backend as a service cuts down the time it takes to develop an app by notches. A few popular examples of MBaaS are [Google Firebase](https://firebase.google.com/) , [AWS Amplify](https://aws.amazon.com/amplify/) , and [Parse](https://parseplatform.org/) .
另外，由于我们不需要管理基础设施，移动后端作为一种服务，将开发一个应用程序的时间缩短了很多。几个流行的 MBaaS 的例子是谷歌 Firebase、AWS Amplify 和 Parse。

_ [Parse was the early leader](https://en.wikipedia.org/wiki/Parse_(platform) ) in this space but was shut down by Facebook_.
Parse 是这个领域的早期领导者，但被 Facebook 关闭了。

## When should you use a mobile backend as a service? [#](https://www.educative.io/courses/web-application-software-architecture-101/mE4K5v1vz6E#When-should-you-use-a-mobile-backend-as-a-service?)
你应该在什么时候使用移动后端作为一种服务？

MBaaS is great for _mobile-only_ services and great for use cases where you do not need or don't already have a custom backend up and running for your service. In the case of MBaaS, all the business logic resides on the client which is the mobile app. So, the app is a _Fat client_.
MBaaS 对于纯移动服务来说是很好的，对于那些你不需要或者还没有为你的服务建立和运行一个定制的后端的用例来说是很好的。在 MBaaS 的情况下，所有的业务逻辑都停留在客户端，也就是移动应用程序。所以，应用程序是一个胖客户端。

MBaaS is best for apps like mobile games, messaging apps, and to-do list kinds of apps. When using a MBaaS, there are a few things that I would want you to keep in mind. Since we don't have much control over the backend we always have to keep the business logic on the client. If we ever need to add a new feature that would require the business logic on the server, we will have to design a custom backend from the bare bones.
MBaaS 最适合于像手机游戏、短信应用和待办事项等类型的应用。当使用 MBaaS 时，有几件事我希望你能记住。由于我们对后端没有太多的控制权，我们总是要在客户端保持业务逻辑。如果我们需要增加一个新的功能，而这个功能需要在服务器上的业务逻辑，我们将不得不从原始的基础上设计一个自定义的后端。

On the flipside, we can start with a custom backend and then write a mobile client which is the conventional way. You can always customize the design of your service, introduce new clients, and whatnot with just an introduction of dedicated APIs for respective clients.
反过来说，我们可以从一个定制的后台开始，然后编写一个移动客户端，这是传统的方式。你可以随时定制你的服务的设计，引入新的客户，以及其他的东西，只需为各自的客户引入专用的 API。

![[Custom Backend For A Mobile App.png]]

We can also use MBaaS and a custom backend setup in the same app in scenarios where we are required to integrate a legacy enterprise system with our mobile app or if we need to leverage some additional features that the custom backend server hosts. Think of a banking app built using a MBaaS that needs to interact with the legacy enterprise backend to cross verify the data entered by the user every time.
我们也可以在同一个应用程序中使用 MBaaS 和自定义后台设置，在这种情况下，我们需要将传统的企业系统与我们的移动应用程序集成，或者我们需要利用自定义后台服务器所承载的一些额外功能。想想看，一个使用 MBaaS 构建的银行应用程序，需要与传统的企业后台互动，以交叉验证用户每次输入的数据。

![[Custom Backend.png]]

Also, not having much control over the backend, makes this kind of a _vendor lock-in_ situation. Just like [parse.com](http://parse.com/) what if the service provider decides to close their shop? Or, they stop upgrading their service, which may result in severe security flaws? Or they stop adding new features to their service, or you in the future disapprove of their updated billing rules? _What are you going to do next? Keep that in mind._
另外，对后端没有太多的控制，这就使得这种情况成为一种供应商锁定的情况。就像 parse.com 一样，如果服务提供商决定关闭他们的商店呢？或者，他们停止升级他们的服务，这可能导致严重的安全漏洞？或者他们停止为他们的服务添加新的功能，或者你在未来不同意他们更新的计费规则？你接下来要做什么？请牢记这一点。

---

笔记：

MBaaS(mobile backend as a service)是一种基于云的服务模式，它负责我们移动应用的后台基础设施，使我们能够专注于业务逻辑和用户界面。

除了业务逻辑和用户界面，一个在线服务还包含其他几个关键的功能，这些功能共同使服务发挥作用，并值得引起用户的注意。这些功能包括用户认证、与社交网络的整合、推送通知、实时数据库、缓存、数据存储、消息传递、聊天整合、第三方工具的整合、分析、崩溃报告等等。MBaaS 负责所有这些功能，使开发者在启动阶段的生活变得容易得多。

将你的应用程序部署到云端，向社区展示，拥有一些最初的客户，获得反馈，并向潜在的投资者推销，而不需要支付一分钱的托管和基础设施。这就是云服务模式爆炸的全部原因。它为个人独立开发者提供了一种方式，使他们能够启动自己的业务，并在市场上站稳脚跟，只需专注于想法的实施部分，并让云服务来处理其余部分。
