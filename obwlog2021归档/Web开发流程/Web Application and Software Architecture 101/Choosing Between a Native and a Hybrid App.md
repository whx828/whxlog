In this lesson, we will cover how to choose the right type of mobile app for our use case?
在本课中，我们将介绍如何为我们的用例选择正确的移动应用程序类型

## When should we pick a Native app for our use case? [#](https://www.educative.io/courses/web-application-software-architecture-101/JP9rxVgzj4P#When-should-we-pick-a-Native-app-for-our-use-case?)
我们应该在什么时候为我们的用例选择一个 Native 应用？

_Here are the scenarios, listed below in bullet points, when we should go ahead with a Native app_:
以下是我们应该使用 Native 应用的情况，以要点的形式列出。

- Use a Native app when you have heavy graphic and hardware requirements like for a mobile game or a game streaming app. In the scenario, you need top-notch performance from the app. Even a tad bit of lag is unacceptable.
当你对图形和硬件有很高的要求时，如手机游戏或游戏流应用，请使用 Native 应用。在这种情况下，你需要应用程序有一流的性能。即使是一点点的滞后也是不可接受的。

- Let's say you intend to write an app that has heavy UI animations, like, a fancy social app containing a lot of animations or a finance app containing a lot of real-time charts and graphs. In this scenario, it's just not okay to have any sort of lag in the application. The application needs to be as responsive and reliable as possible.
比方说，你打算写一个有大量 UI 动画的应用程序，比如，一个包含大量动画的花哨的社交应用程序或一个包含大量实时图表的金融应用程序。在这种情况下，应用程序中出现任何形式的滞后都是不行的。应用程序需要尽可能的反应灵敏和可靠。

- Use a Native app when the app is pretty complex and is reliant on hardware access, like camera, sensors, GPS, etc. to function. In the scenario, we generally have to write a lot of platform-specific code. A GPS, sensor-based health and a step-tracking app is a good example of this.
当应用程序相当复杂，并且依赖硬件访问，如摄像头、传感器、GPS 等来运作时，使用本地应用程序。在这种情况下，我们一般要写大量的平台特定代码。一个基于 GPS、传感器的健康和步数追踪的应用程序就是一个很好的例子。

- Use a Native app when the look and feel of the app and the user experience should be just like the Native OS and when the UI needs to be, not just functional, but flawless.
当应用程序的外观和用户体验应该和 Native 操作系统一样时，当 UI 需要，不仅仅是功能，而是完美无缺时，请使用 Native 应用程序。

- Use a Native app when you have other businesses in the same niche competing with you with native apps. It would be a blunder to offer our service via a Hybrid app. User's today aren't installing as many apps as they used to. Don't expect them to show mercy on you when you don't have a product that is better than your competition.
当你在同一利基市场上有其他企业用原生应用程序与你竞争时，使用原生应用程序。通过混合应用程序提供我们的服务将是一个错误。今天的用户不再像以前那样安装很多应用程序。当你没有一个比你的竞争对手更好的产品时，不要指望他们会对你手下留情。

- Use a Native app when the app always needs to support new mobile OS features as soon as they are released.
当应用程序总是需要支持新的移动操作系统功能时，请使用原生应用程序。

- If you are a business that can afford dedicated teams for Android and iOS, you should go ahead with native apps. Don't even think about the Hybrid app approach.
如果你是一个能够负担得起 Android 和 iOS 的专门团队的企业，你应该继续使用原生应用程序。甚至不要考虑混合应用程序的方法。

## When should we pick a Hybrid app for our use case? [#](https://www.educative.io/courses/web-application-software-architecture-101/JP9rxVgzj4P#When-should-we-pick-a-Hybrid-app-for-our-use-case?)
什么时候我们应该为我们的用例选择混合型应用程序？

- Use a Hybrid app when the app requirements are simple, and there is nothing complex. Also, use it when you don't anticipate adding any new complex features. A news app is a good example of this. Developing a news app as a Hybrid app will also provide the same look and feel across all the platforms.
当应用程序的要求很简单，而且没有什么复杂的东西时，就使用混合应用程序。另外，当你预计不会添加任何新的复杂功能时，也可以使用它。一个新闻应用就是一个很好的例子。将新闻应用开发成混合型应用，也可以在所有平台上提供相同的外观和感觉。

- Use a Hybrid app when you just cannot afford dedicated codebases for platforms but still have to hit the market. There are two approaches to this: either launch with a Native app on one platform or write a Hybrid app. This entirely depends on how you want to go ahead.
当你无法负担各平台的专用代码库，但又必须进入市场时，可以使用混合型应用程序。这有两种方法：要么在一个平台上推出本地应用，要么编写一个混合应用。这完全取决于你想如何去做。
Yes, the Native apps provide top-notch performance, but you cannot entirely discard Hybrid tech on the grounds of performance and the availability of other Native features. There can be instances where you won't even need dedicated apps, and a Hybrid app could fulfil all your requirements pretty well. It all depends on your requirements.
是的，Native 应用程序提供一流的性能，但你不能以性能和其他 Native 功能的可用性为由完全抛弃混合技术。在有些情况下，你甚至不需要专门的应用程序，而混合应用程序可以很好地满足你的所有要求。这一切都取决于你的要求。

- When you just need to test the waters with a _pre-alpha_ release or a _Minimum Viable Product (MVP)_. In this scenario, it won't make sense to learn the Native tech and then write the app. You can quickly launch the MVP via a Hybrid app written with the open web technologies.
当你只需要用 alpha 前版本或最小可行产品（MVP）来试水。在这种情况下，学习 Native 技术，然后编写应用程序是没有意义的。你可以通过一个用开放网络技术编写的混合型应用快速推出 MVP。

- Use a Hybrid app when you have a team that is not fluent with the Native technologies, and it would take a lot of time to learn that tech. This scenario is a trade-off between costs and performance. Also, the developer sentiment is another aspect to this.
当你有一个不精通 Native 技术的团队，并且需要花费大量的时间来学习这种技术时，就可以使用混合应用程序。这种情况是成本和性能之间的权衡。另外，开发人员的情绪也是另一个方面。

So, these are some of the general rules that you can follow when taking our pick of the two types of apps. Another good approach is to find the businesses in the same niche, research on what technologies they have used to write their apps.
所以，这些都是我们在挑选这两种类型的应用程序时可以遵循的一些一般规则。另一个好办法是找到相同利基市场的企业，研究他们用什么技术来编写他们的应用程序。

With this being said, let's move on to the next lesson where I'll discuss progressive web apps.
说到这里，让我们进入下一课，我将讨论渐进式 Web 应用程序。
