An introduction to frameworks and their relationship to the front-end and back-end of a website.
介绍框架及其与网站前端和后端的关系。

In the previous chapters, we discussed both front-end and back-end, as well as the difference between the two. Now, we will look at how development on both ends and their integration can be made easier through web frameworks.
在前面的章节中，我们讨论了前端和后端，以及两者之间的区别。现在，我们将看看如何通过 Web 框架简化两端的开发及其集成。

## Introduction [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#Introduction-)

A **web framework** is defined as a package made up of a structure of files and folders of standardized code (HTML, CSS, JS documents, etc.), which can be used to support the development of websites as a basis to start building a site. Essentially, frameworks provide some basic, standard starter code that allows developers to build the meat of their website on.
**Web 框架**被定义为由标准化代码（HTML、CSS、JS 文档等）的文件和文件夹结构组成的包，可用于支持网站的开发，作为开始构建网站的基础。本质上，框架提供了一些基本的、标准的入门代码，允许开发人员在其上构建网站的内容。

Most websites share a very similar structure, and the aim of frameworks is to provide this common structure as a starting point so that developers don't have to redo it from scratch and can reuse the provided code. Frameworks, therefore, serve to simplify the web development process.
大多数网站共享一个非常相似的结构，框架的目的是提供这种通用结构作为起点，这样开发人员就不必从头开始重做，并且可以重用提供的代码。因此，框架有助于简化 Web 开发过程。

## MVC architecture [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#MVC-architecture-)

Before we introduce some of the common types, frameworks, can be categorized in, let's discuss the underlying architecture of frameworks. Most, if not all, web application frameworks rely on the **Model View Controller** architecture. The pattern serves to separate the application logic from the user interface, thus forming the three components that the name is comprised of.
在我们介绍一些常见类型的框架之前，我们先讨论一下框架的基本架构。大多数（如果不是全部）网络应用框架都依赖于**模型-视图-控制器（MVC）** 架构。该模式的作用是将应用逻辑与用户界面分开，从而形成了名称所包含的三个组成部分。

**Model**
模型

The Model stores all information about the content and structure of an application. Upon receiving user input data from the Controller, it communicates any required interface updates to the View component.
模型存储关于应用程序的内容和结构的所有信息。在收到来自控制器的用户输入数据后，它将任何需要的界面更新传达给视图组件。

**View**
视图

This refers to the application's front-end, or what is more commonly known as the _user interface_. It contains information about the layout and the way users can interact with any of its parts. The View receives user input, communicates it to the Controller for processing, and updates itself according to the instructions it, in turn, receives from the Model.
这指的是应用程序的前端，或更多地被称为用户界面。它包含了关于布局的信息和用户与任何部分的交互方式。视图接收用户的输入，将其传达给控制器进行处理，并根据它从模型中收到的指令更新自己。

**Controller**
控制器

The Controller is an intermediary between the Model and the View. It receives user input from the View, processes it, and mediates required changes between the two.
控制器是模型和视图之间的一个中介。它接收来自视图的用户输入，对其进行处理，并在两者之间调解所需的变化。

![[The MVC Architecture.png]]

## Types of frameworks [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#Types-of-frameworks-)

There are both front-end and back-end frameworks that are very popularly used, and you may already have heard of them. Additionally, there are multiple isomorphic frameworks available that work on both the front-end and the back-end and serve as a bridge between the two.
有很多非常流行的前端和后端框架，你可能已经听说过它们了。此外，还有多个同构框架，它们既可用于前端，也可用于后端，作为两者之间的桥梁。

### Front-end (client-side) frameworks [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#Front-end-(client-side)-frameworks-)
前端（客户端）框架

1.  Angular JS
2.  Bootstrap
3.  React.js
4.  Backbone
5.  Semantic-UI

### Back-end (server-side) frameworks [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#Back-end-(server-side)-frameworks-)
后端（服务器端）框架

1.  Express (JavaScript)
2.  Symfony (PHP)
3.  Django (Python)
4.  Ruby on Rails (Ruby)
5.  ASP .NET (C#)

### Isomorphic (client-server) frameworks [#](https://www.educative.io/courses/web-development-a-primer/m2NkmvBDGwA#Isomorphic-(client-server)-frameworks-)
同构（客户端-服务器）框架

1.  Meteor JS
2.  Lazo.js
3.  Rendr

---

Now that we know which web development frameworks are the most widely used, in the following lessons, we will be discussing the specific features of each of them so you can make an informed decision about which framework you might want to begin learning for your web application.
现在我们知道了哪些 Web 开发框架是最广泛使用的，在下面的课程中，我们将讨论每一个框架的具体特点，这样你就可以做出明智的决定，为你的 Web 应用开始学习哪个框架。
