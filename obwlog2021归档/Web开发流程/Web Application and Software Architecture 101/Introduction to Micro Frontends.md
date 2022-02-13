In this lesson, we will define micro frontends
在本课中，我们将定义微前端

## What are micro frontends? [#](https://www.educative.io/courses/web-application-software-architecture-101/7nZ2AK9oLl1#What-are-micro-frontends?)
什么是微前端？

_Micro frontends_ are separate loosely coupled components of an application's user interface developed applying the principles of microservices on the front end.
微前端是应用微服务的原则在前端开发的独立的松散耦合的用户界面组件。

Writing micro frontends is more of an architectural design decision and a development approach as opposed to it being a technology.
编写微前端更像是一种架构设计决策和开发方法，而不是一种技术。

_What does applying the principles of microservices to the front end mean?_
在前端应用微服务的原则意味着什么？

Microservices provide complete autonomy to the teams developing them. They are loosely coupled, provide fault isolation, and offer the freedom to pick the desired technology stack to the individual teams to develop a certain service.
微服务为开发它们的团队提供了完全的自主权。它们是松散耦合的，提供故障隔离，并提供自由选择所需的技术堆栈给各个团队来开发某种服务。

_Micro frontends offer the same upsides to front-end development._
微前端为前端开发提供了同样的优势。

Generally, in application development, despite having a microservices architecture on the backend, our front end is a monolith that is developed by a dedicated front-end development team.
一般来说，在应用开发中，尽管后端有一个微服务架构，但我们的前端是一个单体，由专门的前端开发团队开发。

![[Online Game Store.png]]

However, with the micro frontends approach, we split our application into vertical slices, where a single slice goes end to end right from the user interface to the database.
然而，通过微前端的方法，我们把我们的应用分成垂直的片断，每一个片断从用户界面到数据库都是端到端的。

Every slice is owned by a dedicated team. Besides the back-end devs, the team also includes the front-end developers who have the onus of developing the user interface component only of that particular service.
每个片断都由一个专门的团队负责。除了后端开发人员，该团队还包括前端开发人员，他们只负责开发该特定服务的用户界面组件。

Every team builds its own user interface component choosing their desired technology, and later all these components are integrated together, forming the complete user interface of the application. This micro frontend approach averts the need for a dedicated centralized user interface team.
每个团队选择他们所需要的技术来建立自己的用户界面组件，然后将所有这些组件整合在一起，形成应用程序的完整用户界面。这种微观的前端方法避免了对专门的集中式用户界面团队的需求。

![[Full Stack Teams With Micro Frontends.png]]

Let's break this down further with the help of an example.
让我们借助一个示例进一步分解它。

## Micro frontends e-commerce application example [#](https://www.educative.io/courses/web-application-software-architecture-101/7nZ2AK9oLl1#Micro-frontends-e-commerce-application-example)
微前端电子商务应用示例

I've taken the example of an e-commerce application because the micro frontends approach is pretty popular with e-commerce websites.
我以电子商务应用程序为例，因为微前端方法在电子商务网站中非常流行。

Let's imagine an online game store that delivers video games for desktops and consoles such as _Xbox, Nintendo Switch, PlayStation_, and their related hardware.
让我们想象一个在线游戏商店，它为 Xbox、Nintendo Switch、PlayStation 及其相关硬件等台式机和游戏机提供视频游戏。

Our online gaming store will have several different UI components. A few key components are:
我们的在线游戏商店将有几个不同的 UI 组件。几个关键组件是：

**The search component** – This is a search bar at the top center of the website that enables the users to search games based on the keywords they enter.
搜索组件 - 这是网站顶部中心的搜索栏，用户可以根据输入的关键字搜索游戏。

Once the user runs a search, the component enables the user to filter their search results based on several options, including the price range, type of console, game genre, and so on.
一旦用户运行搜索，该组件使用户能够根据几个选项过滤他们的搜索结果，包括价格范围、控制台类型、游戏类型等。

**The Game Category Component** – This component displays the popular and widely searched games for different categories on the homepage of the website.
游戏类别组件 - 该组件在网站主页上显示不同类别的热门和广泛搜索的游戏。

**Add to cart and checkout component** – This user interface component enables users to add games of their liking to their cart and proceed to the checkout filling in their address and other required information to make the final payment.
添加到购物车和结帐组件 - 此用户界面组件使用户能够将他们喜欢的游戏添加到他们的购物车并继续结帐，填写他们的地址和其他所需信息以进行最终付款。

During the checkout, the website may recommend related games to the user as upsells. Also, a user can apply for coupons and gift cards if they have any.
在结帐期间，网站可能会向用户推荐相关游戏作为追加销售。此外，用户可以申请优惠券和礼品卡（如果有的话）。

**The Payment Component** – The payment _UI_ component offers different payment options to the user and facilitates the order payment once the user enters their card details on the page.
支付组件 – 支付 UI 组件为用户提供不同的支付选项，并在用户在页面上输入他们的卡详细信息后促进订单支付。

Every _UI_ component has a dedicated microservice running on the backend powering that particular user interface component. All these different components are developed and managed by dedicated full-stack teams.
每个 UI 组件都有一个在后端运行的专用微服务，为特定的用户界面组件提供支持。所有这些不同的组件都是由专门的全栈团队开发和管理的。

The application's complete user interface is rendered combining all these different individual UI components, also called _micro frontends_.
应用程序的完整用户界面是结合所有这些不同的单独 UI 组件（也称为微前端）呈现的。

Let's continue this discussion in the next lesson.
让我们在下一课继续这个讨论。

---

笔记：

微前端：应用微服务的原则在前端开发的独立的松散耦合的用户界面组件。
微服务为开发它们的团队提供了完全的自主权。它们是松散耦合的，提供故障隔离，并提供自由选择所需的技术堆栈给各个团队来开发某种服务。微前端为前端开发提供了同样的优势。通过微前端的方法，把应用分成垂直的片断，每个片断从 UI 到数据库都是端到端的，而且每个片断都由一个专门的团队负责，除了后端开发人员，还包括前端开发人员，前端只负责开发该特定服务的 UI 组件，选择他们所需要的技术来建立自己的 UI 组件，然后再将所有这些组件整合在一起，形成应用程序的完整 UI。这种微前端的方法避免了对专门的集中式 UI 团队的需求。
