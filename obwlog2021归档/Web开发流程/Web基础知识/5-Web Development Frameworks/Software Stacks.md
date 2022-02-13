An introduction to software stacks and their purpose in web development.
介绍软件堆栈及其在 Web 开发中的用途。

## Definition [#](https://www.educative.io/courses/web-development-a-primer/m27XA89Z4gA#Definition-)

A **software stack** refers to a combination of tools that are used together to create software. We have already seen examples of this in the previous lesson, where many of the isomorphic frameworks we discussed used a combination of other frameworks or tools to provide the specific features it offers. These tools are inbuilt in these frameworks and are part of a nuance that users do not need to worry about when using the framework to develop their applications.
软件堆栈是指一起使用以创建软件的工具组合。我们在上一课中已经看到了这样的例子，我们讨论的许多同构框架都使用了其他框架或工具的组合来提供它所提供的特定功能。这些工具内置在这些框架中，是用户在使用框架开发应用程序时无需担心的细微差别的一部分。

However, it is often the case that multiple frameworks need to be used together along with other tools as a stack to create a web application, and in this case, each one of them needs to be explicitly included and linked by users themselves. We have already studied both front end and back end frameworks in the previous lessons; now we will look into using them together as a software stack to develop whole web applications.
但是，通常情况下，多个框架需要与其他工具一起使用作为堆栈来创建 Web 应用程序，在这种情况下，每个框架都需要由用户自己明确包含和链接。我们在前面的课程中已经学习了前端和后端框架；现在我们将研究将它们一起用作软件堆栈来开发整个 Web 应用程序。

## History and LAMP stack [#](https://www.educative.io/courses/web-development-a-primer/m27XA89Z4gA#History-and-LAMP-stack-)

LAMP Stack entails using Linux, Apache, MySQL, and PHP together to build an application. Linux is the operating system, Apache acts as the HTTP server, MySQL provides the relational database to persist the application's information, and PHP is the programming language in which the application is built. LAMP was amongst the earliest software stacks that web applications were typically built using.
LAMP Stack 需要结合使用 Linux、Apache、MySQL 和 PHP 来构建应用程序。 Linux 是操作系统，Apache 作为 HTTP 服务器，MySQL 提供关系数据库来持久化应用程序的信息，PHP 是构建应用程序的编程语言。 LAMP 是 Web 应用程序通常使用的最早的软件堆栈之一。

In recent times, however, Single Page Applications have grown in popularity in that they provide a more seamless user experience where lightweight server calls change what is rendered on the screen without having to refresh the entire page. Consequently, front-end frameworks are increasingly being used to achieve the benefits that SPAs pose. Similarly, NoSQL databases have also gained popularity due to the simplicity and efficiency they provide. As a result, modern software stacks have evolved to include front-end frameworks such as Angular and NoSQL databases such as MongoDB. The most common types include MEANStack and MERNStack, both of which we will be discussing in the following sections.
然而，最近，单页应用程序变得越来越流行，因为它们提供了更加无缝的用户体验，其中轻量级服务器调用更改了屏幕上呈现的内容，而无需刷新整个页面。因此，越来越多地使用前端框架来实现 SPA 带来的好处。同样，NoSQL 数据库也因其提供的简单性和效率而广受欢迎。因此，现代软件堆栈已经发展到包括前端框架（如 Angular）和 NoSQL 数据库（如 MongoDB）。最常见的类型包括 MEANStack 和 MERNStack，我们将在以下部分中讨论这两种类型。

## MEANStack [#](https://www.educative.io/courses/web-development-a-primer/m27XA89Z4gA#MEANStack-)

MEANStack refers to integrating the following frameworks and tools to create a web application:
MEANStack 指的是整合以下框架和工具来创建一个网络应用。

1.  MongoDB
2.  Express JS
3.  Angular JS
4.  Node JS

We have discussed each of these at length in our earlier lessons, so we won't be going into too much detail here, but will briefly outline how they work together to form a web application and what role each component plays. MongoDB, as you might already have guessed, serves as the database and, thus, forms the storage component of the website. To put it in MVC terms, it acts as the Model component of the application. Express JS is used to develop the back-end of the web application and it is used to do everything from creating the server at the back-end to handling all kinds of requests coming in from the client end and processing data from the database accordingly. The express component, therefore, forms the controller of the MVC application. Angular JS, in this case, is used to develop the front-end of the web application, and it is basically used to program everything that happens within the browser on the client-side. The AngularJS component is, thus, synonymous to the View component of your MVC application. Node js, in this case, refers to the back end runtime environment of the web application. Essentially, express is built on Node js, and its purpose is to simplify operations that may be complicated in the basic Node js code. The underlying runtime environment for the event-driven code that you will be writing for your application is, therefore, Node JS.
我们已经在之前的课程中详细讨论了这些框架和工具，所以我们不会在这里讨论太多细节，但会简要介绍一下它们是如何共同组成一个网络应用程序的，以及每个组件扮演的角色。MongoDB，正如你可能已经猜到的，作为数据库，从而形成了网站的 storage 组件。用 MVC 术语来说，它充当了应用程序的 Model 组件。Express JS 被用来开发网络应用的后端，它被用来做一切事情，从在后端创建服务器到处理来自客户端的各种请求以及相应地处理来自数据库的数据。因此，express 组件构成了 MVC 应用程序的控制器。在这种情况下，Angular JS 被用来开发 Web 应用程序的前端，它基本上被用来对客户端浏览器内发生的一切进行编程。因此，AngularJS 组件与你的 MVC 应用程序的 view 组件同义。在这种情况下，Node js 指的是 Web 应用程序的后端运行环境。从本质上讲，express 是建立在 Node js 之上的，其目的是为了简化在基本的 Node js 代码中可能很复杂的操作。因此，你将为你的应用程序编写的事件驱动代码的底层运行时环境就是 Node JS。

![[Structure of a MEANStack application.png]]

## MERNStack [#](https://www.educative.io/courses/web-development-a-primer/m27XA89Z4gA#MERNStack)

MERNStack applications have the same structure as MEANStack; a database, a server-side framework, and a client-side framework. The only difference, in this case, is that the front-end framework being used is different. The front-end of MERNStack applications is developed using React JS instead of Angular JS. There are no striking benefits of React compared to Angular or vice versa, so the software stack you select depends largely on the specific requirements of your application. Both React and Angular have been discussed in the lesson on [front-end frameworks](https://www.educative.io/collection/page/10370001/5668847440887808/5182303613485056) , and it is primarily a matter of preference when choosing between the two.
MERNStack 应用程序的结构与 MEANStack 相同；一个数据库、一个服务器端框架和一个客户端框架。在这种情况下，唯一的区别是，所使用的前端框架不同。MERNStack 应用程序的前端是使用 React JS 而不是 Angular JS 开发的。与 Angular 相比，React 没有明显的优势，反之亦然，所以你选择的软件栈主要取决于你的应用程序的具体要求。React 和 Angular 在关于前端框架的课程中已经讨论过了，在两者之间选择时主要是一个偏好的问题。

![[Structure of a MERNStack application.png]]

## Isomorphic frameworks vs. software stacks [#](https://www.educative.io/courses/web-development-a-primer/m27XA89Z4gA#Isomorphic-frameworks-vs.-software-stacks-)

So far, we have discussed both software stacks that entail using multiple frameworks together to create a web application and isomorphic frameworks that already have multiple frameworks integrated within them for users to leverage the benefits of each without having to worry about putting the pieces together. The question that then follows is obvious; _Which of the two is a better approach to web development?_  The answer requires an analysis of the differences between the two. Let's enumerate the key differences between two of the most popular frameworks of both types, Meteor JS and MEANStack, one by one:
到目前为止，我们已经讨论了软件堆栈和同构框架，前者需要使用多个框架来创建一个网络应用，后者已经有多个框架集成在其中，用户可以利用每个框架的优势，而不必担心把这些碎片放在一起。随之而来的问题是显而易见的；这两种方法中哪一种是更好的网络开发方法？答案需要对两者之间的差异进行分析。让我们逐一列举这两种最流行的框架--Meteor JS 和 MEANStack 之间的关键区别：

- One key difference is simplicity. Meteor has a strong focus on ease of use and is relatively easy to become equipped with since it masks implementation level details of integrating the multiple frameworks it uses and allows users to focus on development. MEAN, on the other hand, requires multiple components to be integrated manually, each of which needs to be learned in detail before the development can begin.
一个关键的区别是简单性。Meteor 非常注重易用性，而且相对容易掌握，因为它掩盖了整合它所使用的多个框架的实施层面的细节，允许用户专注于开发。另一方面，MEAN 需要手动集成多个组件，每一个组件都需要在开发开始前详细了解。
- Extending on the first point, Meteor is a _full stack framework_, which means that it has an inbuilt database, as well as the capabilities of both a server-side and a client-side framework. MEANStack, on the other hand, requires each component of the stack to be installed, learned, and integrated manually. This makes it clear that Meteor is a much more convenient option.
在第一点上延伸，Meteor 是一个全栈框架，这意味着它有一个内置的数据库，以及服务器端和客户端框架的能力。而 MEANStack 则需要手动安装、学习和整合堆栈的每个组件。这使得 Meteor 显然是一个更方便的选择。
- MEANStack is more flexible since the developer has to put all the components together, and it is, therefore, possible to swap out some of the components with alternate ones. On the other hand, Meteor has a stringent limitation on what technologies are being used since the underlying technologies are not of concern to the user. This means that for applications that have highly customized specifications, MEANStack is the more appropriate development model.
MEANStack 更加灵活，因为开发者必须把所有的组件放在一起，因此，有可能把一些组件换成备用的。另一方面，Meteor 对使用什么技术有严格的限制，因为底层技术并不为用户所关心。这意味着，对于那些有高度定制规格的应用程序，MEANStack 是更合适的开发模式。
- There is a concept of reactivity in Meteor, which ensures that whenever there is a change in data, clients connected to the Meteor server get updated automatically without having to refresh. This is not the case in MEANStack, which requires additional technologies to be integrated to achieve this.
在 Meteor 中有一个反应性的概念，它确保每当数据发生变化时，连接到 Meteor 服务器的客户端会自动更新，而不需要刷新。而在 MEANStack 中却不是这样，它需要集成额外的技术来实现这一点。

---

That concludes the discussion on frameworks, how they can be combined to form software stacks, and how these stacks compare to isomorphic frameworks. As is apparent from our discussions so far, the choice of framework depends largely on the requirements of the application being developed. We have articulated the pros and cons of each one so you can make the most informed decision. Now that we have covered all of our frameworks, in the next lesson, we will build a MERNStack application to depict how frameworks are used together to develop websites.
关于框架的讨论到此结束，它们如何组合以形成软件堆栈，以及这些堆栈与同构框架的比较。从我们目前的讨论中可以明显看出，框架的选择在很大程度上取决于正在开发的应用程序的要求。我们已经阐明了每种方法的优缺点，以便您做出最明智的决定。现在我们已经涵盖了我们所有的框架，在下一课中，我们将构建一个 MERNStack 应用程序来描述如何一起使用框架来开发网站。

