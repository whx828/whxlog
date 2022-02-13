An overview of the popular isomorphic frameworks.
流行的同构框架概述。

So far, we've covered both front-end and back-end frameworks, and we have learned how they significantly speed up and abate the development process. Now, we will look into a third type of framework that allows developers to avoid the cumbersome process of developing the front end and the back end separately and then integrating them; client-server frameworks. Client-server frameworks, or _isomorphic frameworks_, are frameworks that support both front end and back end development, thus allowing developers to write their entire application in a single framework without having to worry about integrating multiple components written in different frameworks.
到目前为止，我们已经涵盖了前端和后端框架，并且我们已经了解了它们如何显着加快和减少开发过程。现在，我们将研究第三种框架，它可以让开发人员避免分别开发前端和后端然后将它们集成的繁琐过程；客户端-服务器框架。客户端-服务器框架，或称同构框架，是同时支持前端和后端开发的框架，因此允许开发人员在单个框架中编写他们的整个应用程序，而不必担心集成在不同框架中编写的多个组件。

![[Typical client-server frameworks vs client-server frameworks.png]]

## Meteor JS [#](https://www.educative.io/courses/web-development-a-primer/qVZrJ1EVG7p#Meteor-JS-)

Meteor, or Meteor JS, is an open-source client-server JavaScript framework that has been written in Node.js. In addition to having the benefit of being a stand-alone framework that allows for development on both the front and back end of an application, Meteor also allows for prototyping, which means that it allows for versions of the same application to be stored and tested. In addition to this, Meteor also produces code that can span multiple platforms including Android, iOS, and the web itself.
Meteor 或 Meteor JS，是一个开源的客户端-服务器 JavaScript 框架，已经用 Node.js 编写。除了作为一个独立的框架允许在应用程序的前端和后端进行开发之外，Meteor 还允许进行原型设计，这意味着它允许存储和测试相同应用程序的版本.除此之外，Meteor 还生成可以跨越多个平台的代码，包括 Android、iOS 和 Web 本身。

On the server-side, Meteor integrates with MongoDB and follows protocols to create a database management mechanism that enables data changes to be propagated directly to the client-side without having to write any synchronization code on both ends explicitly.
在服务器端，Meteor 与 MongoDB 集成并遵循协议创建数据库管理机制，使数据更改可以直接传播到客户端，而无需在两端显式编写任何同步代码。

On the client-side, Meteor has its own templating engine called Blaze that allows users to choose from templates for the user interface to customize, thus making the front end development much easier. Alternatively, Meteor can also be used with some of the front-end frameworks we have already studied. It can be integrated with the Angular or React frameworks to seamlessly produce user interfaces that don't require too much work.
在客户端，Meteor 有自己的模板引擎，叫做 Blaze，允许用户从模板中选择用户界面进行定制，从而使前端开发更加容易。另外，Meteor 也可以和我们已经研究过的一些前端框架一起使用。它可以与 Angular 或 React 框架集成，无缝地产生用户界面，不需要太多工作。

## Lazo.js [#](https://www.educative.io/courses/web-development-a-primer/qVZrJ1EVG7p#Lazo.js-)

Lazo.js is a client-server web development framework built on Node.js that has the benefit of providing front-end developers with a simple, and relatively familiar syntactical structure that they can use to create MVC structured web applications that are separated as multiple sophisticated components that come together to form the complete front-end. LazoJS has the added benefit of providing an optimized first-page load, something that is often a key determinant of user experience. These benefits are achieved using a combination of tools comprised of Backbone.js, RequireJS, and jQuery.
Lazo.js 是一个基于 Node.js 构建的客户端-服务器 Web 开发框架，它的优点是为前端开发人员提供了一个简单且相对熟悉的语法结构，他们可以使用该结构创建 MVC 结构化的 Web 应用程序，这些应用程序被分离为多个复杂的组件组合在一起形成完整的前端。 LazoJS 具有提供优化的首页加载的额外好处，这通常是用户体验的关键决定因素。这些好处是使用由 Backbone.js、RequireJS 和 jQuery 组成的工具组合实现的。

Lazo was initially created to address the issues that spring from creating an entire website front ends as a single unit or single page applications instead of separating the user interface into mutually exclusive components. Lazo, in turn, not only provides front-end engineers with a familiar environment for creating complete web applications but also ensures that components are separated as such to avoid overly complicated application logic. Pages are constructed via reusable, testable components that have their own life cycles, thus allowing developers to easily create complex views for the interface while providing excellent encapsulation and separation of concerns.
Lazo 最初的创建是为了解决将整个网站前端创建为单个单元或单页应用程序而不是将用户界面分成相互排斥的组件时出现的问题。反过来，Lazo 不仅为前端工程师提供了一个熟悉的环境来创建完整的 Web 应用程序，而且还确保组件如此分离，以避免过于复杂的应用程序逻辑。页面是通过可重用、可测试的组件构建的，这些组件具有自己的生命周期，因此允许开发人员轻松地为界面创建复杂的视图，同时提供出色的封装和关注点分离。

## Rendr [#](https://www.educative.io/courses/web-development-a-primer/qVZrJ1EVG7p#Rendr-)

Rendr is a small library that allows you to run your Backbone.js applications on both the client and the server, depending on the specific needs of the web application you are developing. This means that Rendr provides users with mechanisms to build entire applications on either the client or server end in addition to the ability to distribute the code on both the client and server and using Rendr on both ends. Essentially, Rendr allows your web server to serve fully-formed HTML pages to any link within your application, while simultaneously preserving the feel of a traditional Backbone.js client-side MVC application.
Rendr 是一个小型库，它允许你根据你所开发的网络应用的具体需要，在客户端和服务器上运行你的 Backbone.js 应用程序。这意味着 Rendr 为用户提供了在客户端或服务器端构建整个应用程序的机制，此外还可以在客户端和服务器上分发代码，并在两端使用 Rendr。从本质上讲，Rendr 允许你的网络服务器向你的应用程序中的任何链接提供完全成型的 HTML 页面，同时保留了传统 Backbone.js 客户端 MVC 应用程序的感觉。

In recent times the bulk of applications have been moving increasingly to the client side. However, this is not always suitable and may cause some problems. As a solution to this, Rendr is intended to be a building block along the way to create web applications that can be run on either side of the wire according to the specific needs of your application.
最近，大量应用程序越来越多地转移到客户端。但是，这并不总是合适的，并且可能会导致一些问题。作为对此的解决方案，Rendr 旨在成为创建 Web 应用程序的基石，这些应用程序可以根据您的应用程序的特定需求在任一端运行。

---

That covers all the different types of frameworks that are available to choose from. Now, we will move on to look into how these frameworks can be used together to build a fully functional website!
这涵盖了可供选择的所有不同类型的框架。现在，我们将继续研究如何将这些框架一起使用来构建功能齐全的网站！

