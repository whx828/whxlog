An overview of commonly used front-end frameworks.
常用前端框架概述。

In the previous lesson, we discussed the different types of frameworks that exist and enumerated a few of each type. Now, we will briefly outline the specifics of each front-end framework to see what options are available to ease the process of developing the user interface and client-side of your application.
在上一课中，我们讨论了现有的不同类型的框架，并列举了每种类型的一些。现在，我们将简要概述每个前端框架的细节，以了解哪些选项可用于简化开发用户界面和应用程序客户端的过程。

## Angular [#](https://www.educative.io/courses/web-development-a-primer/xlzYLxAWyVJ#Angular-)

[Angular](https://angular.io/) is a JavaScript framework created by Google that has been designed specifically for creating dynamic web applications. AngularJS addresses the limitations of HTML dynamic views in web applications and allows you to extend HTML vocabulary for your application. The resulting environment is highly expressive, readable, and quick to develop. Angular is used primarily to update the user interface in real time and provide a highly interactive website. Given below is an example of how that is done:
Angular 是由 Google 创建的 JavaScript 框架，专为创建动态 Web 应用程序而设计。 AngularJS 解决了 Web 应用程序中 HTML 动态视图的局限性，并允许您为应用程序扩展 HTML 词汇表。由此产生的环境具有高度的表现力、可读性和开发速度。 Angular 主要用于实时更新用户界面并提供高度交互的网站。下面给出了如何完成的示例：

```html
<html>
 <head>
 </head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
 <body>
   <div id="content"/>
   <div ng-app="">

<p>Enter your name:</p>
<p>Name : <input type="text" ng-model="name" placeholder="Enter name here"></p>
<h1>Hello {{name}}</h1>

</div>
 </body>
</html>
```

## Bootstrap [#](https://www.educative.io/courses/web-development-a-primer/xlzYLxAWyVJ#Bootstrap-)

[Bootstrap](https://getbootstrap.com/) , which can easily be categorized as the most used open-source framework in the world, was created by Twitter developers and primarily served to ease up the process of adding CSS to HTML. Bootstrap, like any other front-end framework, includes CSS, HTML, and JavaScript components. It adheres to responsive web design standards, and thus, allows users to develop responsive websites of all complexities and sizes.
Bootstrap 可以很容易地被归类为世界上使用最多的开源框架，它是由 Twitter 开发人员创建的，主要是为了简化将 CSS 添加到 HTML 的过程。Bootstrap，像其他前端框架一样，包括 CSS、HTML 和 JavaScript 组件。它坚持响应式网页设计标准，因此，允许用户开发各种复杂程度和规模的响应式网站。

## React.js [#](https://www.educative.io/courses/web-development-a-primer/xlzYLxAWyVJ#React.js-)

[React](https://reactjs.org/docs/getting-started.html) is a JavaScript library for building user interfaces. While there are doubts about whether it is an actual framework, it is a highly popular library that is used to build the View layer of an MVC application and warrants discussion in the context of front-end development. React is a component-based library that allows users to build encapsulated components, each of which manages its own state, and then compose them to make complex User Interfaces. The benefit of this is that when data changes, React makes sure that only the concerned components are updated. Given below is an example of what a simple React component looks like:
React 是一个用于构建用户界面的 JavaScript 库。虽然人们对它是否是一个真正的框架存在疑问，但它是一个非常流行的库，用于构建 MVC 应用程序的视图层，值得在前端开发的背景下讨论。React 是一个基于组件的库，允许用户建立封装的组件，每个组件都管理自己的状态，然后将它们组合起来，形成复杂的用户界面。这样做的好处是，当数据发生变化时，React 会确保只有相关的组件被更新。下面是一个简单的 React 组件的例子，看起来像什么：

![[React.png]]

## Backbone [#](https://www.educative.io/courses/web-development-a-primer/xlzYLxAWyVJ#Backbone-)

 [Backbone.js](http://backbonejs.org/) is an extremely light framework that allows you to structure your JavaScript code in an MVC (Model, View, Controller) form. Backbone makes use of **models**, **views**, and **collections** to ensure that your program does not become entangled in a myriad of callbacks and other extraneous pieces of code that make changes complicated. Instead, the models represent the data of the application and Backbone ensures that any changes to these models automatically trigger changes to any views that display these models.
Backbone.js 是一个非常轻量级的框架，它允许您以 MVC（模型、视图、控制器）形式构建 JavaScript 代码。 Backbone 利用模型、视图和集合来确保您的程序不会被无数回调和其他无关代码段纠缠在一起，从而使更改变得复杂。相反，模型代表应用程序的数据，而 Backbone 确保对这些模型的任何更改都会自动触发对显示这些模型的任何视图的更改。

## Semantic-UI [#](https://www.educative.io/courses/web-development-a-primer/xlzYLxAWyVJ#Semantic-UI-)

While [Semantic-UI](https://semantic-ui.com/) is a relatively new framework, it stands out in a number of ways. The primary distinction this particular framework enjoys is its simplicity. Semantic-UI uses natural language, and the code is, therefore, largely self-explanatory, thus making it highly desirable for beginners, particularly those with little or no coding experience. In addition to this, Semantic-UI is also integrated with a myriad of third-party libraries. This means that the development process becomes much easier because, for simpler applications, all the libraries you might require might already be integrated with the framework. Semantic-UI, therefore, is a great starting point for developing the front-end of beginner level websites. However, its package sizes are considerably larger than those of Foundation and Bootstrap, and it may not be a viable option when developing websites with more complex structures.
虽然 Semantic-UI 是一个相对较新的框架，但是它在许多方面都很突出。这个特定的框架所享有的主要区别在于其简单性。Semantic-UI 使用的是自然语言，因此，其代码在很大程度上是不言自明的，从而使得它对于初学者，尤其是那些几乎没有编码经验的人来说是非常可取的。除此以外，Semantic-UI 还与无数的第三方库集成。这意味着，开发过程变得更加容易，因为对于比较简单的应用来说，您可能需要的所有库都可能已经与该框架整合在一起了。因此，Semantic-UI 是开发初级网站前端的一个绝佳起点。然而，其软件包的大小要比 Foundation 和 Bootstrap 的大得多，因此在开发结构更为复杂的网站时，它可能不是一个可行的选择。

---

Now that we know the many front-end frameworks that are available to streamline the front-end development process of your web application and their benefits, let's move on to look into the frameworks that exist for the back-end.
既然我们知道了许多可用于简化 Web 应用程序的前端开发过程的前端框架及其好处，让我们继续研究存在于后端的框架。

