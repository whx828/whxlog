In this lesson, we will talk about responsive user interfaces.
在本课中，我们将谈论响应式用户界面。

In the previous lesson, I talked a bit about _mobile-friendly responsive_ websites. These websites run in the mobile browser and is one way of having a mobile client for our service. In this lesson, you will have a quick insight into how to develop responsive websites for your service.
在上一课中，我谈到了一些关于移动端友好的响应式网站。这些网站在移动浏览器中运行，是为我们的服务提供移动客户端的一种方式。在这一课中，你将快速了解到如何为你的服务开发响应式网站。

There are two approaches to designing responsive websites: _mobile-first_ and _web-first_. We have already discussed these approaches. In the mobile-first approach, we can design the website for the small screen and then let it adapt for the bigger desktop screen. If we follow the second approach, we can design the website for the bigger screen and then let it adapt for the smaller screens.
有两种设计响应式网站的方法：移动优先和网络优先。我们已经讨论过这些方法了。在移动优先的方法中，我们可以为小屏幕设计网站，然后让它适应更大的桌面屏幕。如果我们遵循第二种方法，我们可以为大屏幕设计网站，然后让它适应小屏幕。

In this day and age, when most of the world is online there are a plethora of smart devices available in the market with different, and unique screen sizes, including Smart TVs, Kindle, Android-powered devices, IoT devices, Blackberry, Windows handheld phones, Apple products like iPhone, and iPad and the list doesn't end here.
在这个时代，当世界上大多数人都在上网时，市场上有大量的智能设备，有不同的、独特的屏幕尺寸，包括智能电视、Kindle、安卓驱动的设备、物联网设备、黑莓、Windows 手持电话、苹果产品如 iPhone 和 iPad，这个名单还没有结束。

We can now even check our Facebook notifications and emails on our super tiny smartwatch screens. Well, if you ask me, I will always prefer to check my messages on my phone, unless I am James Bond. Anyway, it's not possible for developers to create and maintain dedicated user interfaces for every screen size. This makes writing a responsive user interface an obvious go-to approach for us.
我们现在甚至可以在我们超级小的智能手表屏幕上检查我们的 Facebook 通知和电子邮件。好吧，如果你问我，我总是喜欢在手机上查看我的信息，除非我是詹姆斯-邦德。无论如何，开发人员不可能为每一个屏幕尺寸创建和维护专用的用户界面。这使得编写响应式用户界面对我们来说显然是一种可供选择的方法。

_A popular saying with responsive web design is that the content should be like water and take the shape of the vessel it is poured in._
响应式网页设计的一个流行说法是，内容应该像水一样，采取它被倒入的容器的形状。

Okay!! Now, let's talk about the popular technologies used by the developers for writing responsive user interfaces.
好了！现在，让我们来谈谈开发人员在编写响应式用户界面时使用的流行技术。

## Designing responsive websites [#](https://www.educative.io/courses/web-application-software-architecture-101/7njvYn7LrjG#Designing-responsive-websites)
设计响应式网站

_**I am not a designer, so how do I develop a responsive website?**_
我不是一个设计师，那么我如何开发一个响应式网站？

If you are not a designer and cannot hire a designer or you are more of a backend developer and want to design a professional-looking responsive website all by yourself, pick [BootstrapJS](https://getbootstrap.com/) . Period.
如果你不是设计师，又不能请设计师，或者你更像一个后台开发者，想自己设计一个专业的响应式网站，那就选 BootstrapJS。期间。

_BootstrapJS_ is a production-grade open-source _CSS_ framework for designing responsive user interfaces. It contains CSS, common JavaScript features, animations, typography, form elements, buttons, and many more commonly used website elements. So, we don't have to write anything from the ground up, and everything is pre-loaded. Just plug the elements together and build your website.
BootstrapJS 是一个生产级的开源 CSS 框架，用于设计响应式用户界面。它包含了 CSS、常见的 JavaScript 功能、动画、排版、表单元素、按钮以及更多常用的网站元素。因此，我们不需要从头开始写任何东西，所有东西都是预装的。只要把这些元素插在一起就可以建立你的网站。

Also, since the framework is open source there are a lot of ready-made templates and plugins both free and premium if you need much more than what the core framework offers. Still, if you cannot find the additional features online, you can always write it for yourself as the code is open to all.
此外，由于该框架是开源的，如果你需要比核心框架更多的东西，有很多现成的模板和插件，包括免费的和优质的。不过，如果你在网上找不到额外的功能，你也可以自己写，因为代码是对所有人开放的。

I have personally used the Bootstrap framework for most of my websites. It has never let me down. I am not a designer and I am more of a backend developer. The learning curve is not that steep. If you have some idea of front-end development, it should hardly take less than a week to get the hang of the framework. It's intuitive and easy to understand. Just wisely use the grid-based approach using rows and columns to build the web page.
我个人将 Bootstrap 框架用于我的大多数网站。它从来没有让我失望过。我不是一个设计师，我更像是一个后端开发者。学习曲线并不那么陡峭。如果你对前端开发有一定的了解，几乎不需要花一周时间就能掌握这个框架。它很直观，很容易理解。只要明智地使用基于网格的方法，使用行和列来构建网页。

![[As the screen size gets smaller those grids rearrange themselves based on the screen size..png]]

The framework was originally written at _Twitter_ to have consistency across all the user interfaces of the internal tools. Before Bootstrap, the front-end developers at Twitter struggled with the maintenance and consistency across multiple user interfaces. At a later point in time, Twitter released the project as open source. You can check out some of the projects built using the [Bootstrap framework here](https://expo.getbootstrap.com/) .
这个框架最初是在 Twitter 编写的，目的是让内部工具的所有用户界面保持一致。在 Bootstrap 之前，Twitter 的前端开发者在多个用户界面的维护和一致性上费尽心思。在后来的时间点上，Twitter 将该项目作为开放源码发布。你可以在这里查看一些使用 Bootstrap 框架构建的项目。

Another popular framework for writing responsive websites is [jQuery Mobile](https://jquerymobile.com/) . The project is developed and maintained by the jQuery project team. I am a bit biased towards using Bootstrap because I really like the default CSS provided by the framework.
另一个用于编写响应式网站的流行框架是 jQuery Mobile。该项目是由 jQuery 项目团队开发和维护的。我有点偏向于使用 Bootstrap，因为我非常喜欢该框架提供的默认 CSS。

Besides these two popular frameworks, if you wish to browse through some other solutions for designing responsive websites there are many including _Skeleton, HTML5 Boilerplate, Less Framework_, etc. You can do more research.
除了这两个流行的框架，如果你想浏览一些其他设计响应式网站的解决方案，有很多，包括 Skeleton、HTML5 Boilerplate、Less Framework 等。你可以做更多的研究。

I think that's about it regarding designing responsive websites. In the next lesson, let's talk about the types of mobile apps.
我想关于设计响应式网站的问题就到此为止了。在下一课，让我们来谈谈移动应用程序的类型。

---

笔记：

响应式网页设计的一个流行说法是，内容排布应该像水一样，就像它被倒入的容器的形状。

BootstrapJS 是一个生产级的开源 CSS 框架，用于设计响应式用户界面。它包含了 CSS、常见的 JavaScript 功能、动画、排版、表单元素、按钮以及更多常用的网站元素。因此，我们不需要从头开始写任何东西，所有东西都是预装的。只要把这些元素插在一起就可以建立你的网站。此外，由于该框架是开源的，如果你需要比核心框架更多的东西，有很多现成的模板和插件，包括免费的和优质的。不过，如果你在网上找不到额外的功能，你也可以自己写，因为代码是对所有人开放的。
