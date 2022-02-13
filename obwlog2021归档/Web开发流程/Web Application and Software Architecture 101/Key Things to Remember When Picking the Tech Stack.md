In this lesson, I'll share a few key things to keep in mind when researching a technology stack for our application.
在本课中，我将分享在为我们的应用程序研究技术栈时需要记住的几个关键事项。

I've written numerous projects from the ground up and spent countless hours scavenging the web and browsing through technologies and frameworks to pick the right tech that would align with my requirements.
我从头到尾写了很多项目，花了无数的时间在网上搜索，浏览各种技术和框架，以挑选符合我要求的正确技术。

I have wasted days, if not months, trying to implement stuff with a not so fitting technology. I have implemented tech stuff having no support and community and have later cried for days into a pillow.
我浪费了好几天，甚至好几个月的时间，试图用一个不那么合适的技术来实现一些东西。我曾经在没有支持和社区的情况下实施技术，后来还对着枕头哭了好几天。

Picking the right tech stack is crucial for our business's success. There is no way around it, and I think we all understand this fact pretty well. Once we pick the tech and get down to coding, there should be no looking back. We naturally can't afford it.
挑选正确的技术栈对我们的业务成功至关重要。这是没办法的事，我想我们都很明白这个事实。一旦我们选择了技术并开始着手编码，就不应该再回头了。我们自然无法承受。

The guidelines listed below are the gist of my experience, and they are the most important factors in the process of picking the right technology stack.
下面列出的准则是我的经验要点，它们是挑选正确技术栈过程中最重要的因素。

So, without any further ado, let's get started.
所以，不用多说了，让我们开始吧。

## Be thorough with the requirements [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#Be-thorough-with-the-requirements)
对要求要彻底

We should be crystal clear on what we are going to build. Things should not be hazy. We cannot pick the right tech if we are unclear about the requirements. When we go hunting, we should be clear about what we are hunting for.
我们应该对我们要建立的东西非常清楚。事情不应该是模糊的。如果我们对需求不清楚，我们就不能选择正确的技术。当我们去寻找时，我们应该清楚我们在寻找什么。

For instance, when looking for a database, we should be clear about if we are going to store relational data or if it will be document-oriented, semi-structured, or with no structure at all.
例如，在寻找数据库时，我们应该清楚我们是否要存储关系型数据，或者它是否将是面向文档的，半结构的，或者根本没有结构。

Also considering, are we handling quite a large amount of data that is expected to grow exponentially? Or, the data is expected to grow at a manageable pace up to a certain limit?
还要考虑，我们是否要处理相当大的数据量，而且预计会呈指数级增长？或者，数据预计将以可控的速度增长到一定的限度？

Will a _monolithic architecture_ serve our requirements well or do we need to split our app into several different modules?
单一的架构是否能很好地满足我们的要求，或者我们是否需要将我们的应用分成几个不同的模块？

Splitting the app into several modules, using heterogeneous tech in services, helps us bail out on a particular technology in case things don't work out.
将应用程序分成几个模块，在服务中使用异质技术，可以帮助我们在事情不顺利的情况下放弃某项技术。

## See if what we already know fits the requirements [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#See-if-what-we-already-know-fits-the-requirements)
看看我们已经知道的东西是否符合要求

It's easier to build new applications with tech we already know. We don't have to go through the steep learning curve that comes along with the new tech.
用我们已经知道的技术来建立新的应用是比较容易的。我们不需要经历新技术带来的陡峭的学习曲线。

Things are also comparatively clearer when using tech we are well familiar with. Being aware of the nitty-gritty, having familiarity with the errors, exceptions, and the knowledge to fix them helps us release the features at a quick pace.
当使用我们熟悉的技术时，事情也会相对更清晰。对细枝末节的了解，对错误、异常的熟悉，以及修复它们的知识，有助于我们快速发布功能。

Avoid running for shiny new toys until you really need them. Do not fall for the hype.
在你真正需要它们之前，避免为闪亮的新玩具奔走。不要被炒作所迷惑。

Imagine an exception thrown by a new tech that you haven't seen before ever in your life and also cannot find the solution online. You are stranded. There is no one to help you, and all you hear is crickets.
想象一下，一个新技术抛出的异常，你在生活中从未见过，而且在网上也找不到解决方案。你被搁浅了。没有人帮助你，你所听到的只是蟋蟀的声音。

I've been there, done that. It's frustrating, clicking through all the search result pages of Google and finding nothing.
我去过那里，做过那样的事。点击谷歌的所有搜索结果页，却一无所获，这很让人沮丧。

## Does the tech we have picked has an active community? How is the documentation and the support? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#Does-the-tech-we-have-picked-has-an-active-community?-How-is-the-documentation-and-the-support?)
我们所选择的技术有一个活跃的社区吗？文档和支持情况如何？

The technology we pick ought to have an active community. Check the involvement of the community on _GitHub_, _StackOverflow_, etc. The documentation should be smooth and easy to comprehend.
我们选择的技术应该有一个活跃的社区。检查 GitHub、StackOverflow 等社区的参与情况。文档应该是流畅的，容易理解的。

The larger the community, the better. Having an active community means updated tools, libraries, frameworks, and whatnot.
社区越大越好。拥有一个活跃的社区意味着更新的工具、库、框架和其他东西。

If there is official support available for the tech, there should be some rescue available if we get stranded down the road, right?
如果有官方支持的技术，如果我们在路上受困，应该会有一些救援，对吗？

## Is the tech being used by big guns in production? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#Is-the-tech-being-used-by-big-guns-in-production?)
该技术是否被生产中的大人物所使用？

If the tech we are picking is being used by big guns in the industry, this confirms it is battle-tested and it can be used in production without any worries.
如果我们选择的技术正在被行业中的大佬们使用，这就证实了它是经过战斗考验的，可以毫无顾虑地用于生产。

We can be certain that down the line we won't face any inherent scalability, security, or other design-related issues with the technology. Since, the codebase is continually patched with new updates, bugs, and design fixes.
我们可以确定，在未来我们不会面临任何固有的可扩展性、安全性或其他与技术有关的设计问题。因为，代码库不断地有新的更新、错误和设计修复的补丁。

We can go through the engineering blogs of the companies to get more information about how they have implemented the tech.
我们可以通过公司的工程博客来获得更多关于他们如何实现该技术的信息。

## Check the license. Is it open source? [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#Check-the-license.-Is-it-open-source?)
检查许可证。它是开源的吗？

Picking an _open-source_ technology helps us write our own custom features in case the original solution does not have it. We do not have to rely on the tech’s creator for new features and stuff.
选择一个开源的技术可以帮助我们在原始解决方案没有的情况下编写自己的自定义功能。我们不必依赖该技术的创造者来获得新的功能和东西。

Also, in terms of money, we don't have to pay anyone any sort of fee to use the product. _Open-source_ tech also has a larger community since the code is open to all. This way anyone can fork it, start writing new features or fix the existing known bugs.
另外，在金钱方面，我们不需要向任何人支付任何形式的费用来使用该产品。开源技术也有一个更大的社区，因为代码对所有人开放。这样一来，任何人都可以分叉它，开始编写新的功能或修复现有的已知错误。

## Availability Of skilled resources on the tech [#](https://www.educative.io/courses/web-application-software-architecture-101/RLyKXNWMmJq#Availability-Of-skilled-resources-on-the-tech)
技术上有熟练的资源

Once our business starts gaining traction, we would need a hand to move at a quick pace and roll out new features within a stipulated time. It's important that there are enough skilled resources available in the industry on the technology we pick.
一旦我们的业务开始获得牵引力，我们将需要一只手来快速移动，并在规定时间内推出新功能。重要的是，在我们选择的技术上，行业内有足够的技术资源可用。

For instance, it's always easy to find a MySQL administrator or a Java developer as opposed to looking for a resource skilled on comparatively newer technology.
例如，找到一个 MySQL 管理员或一个 Java 开发人员总是很容易，而不是寻找一个熟练掌握相对较新技术的资源。

Well, this concludes the lesson. Let/s move onto the next.
好了，这节课结束了。让我们进入下一课。

---

笔记：

挑选正确的技术栈对我们的业务成功至关重要：

1. 我们应该对我们要建立的东西非常清楚。事情不应该是模糊的。如果我们对需求不清楚，我们就不能选择正确的技术。当我们去寻找时，我们应该清楚我们在寻找什么。
2. 用已经知道的技术来建立新的应用是比较容易的，不需要经历新技术带来的陡峭的学习曲线。
在你真正需要它们之前，避免为闪亮的新玩具奔走，不要被炒作所迷惑。
3. 所选择的技术应该有一个活跃的社区，检查 GitHub、StackOverflow 等社区的参与情况，文档应该是流畅的，容易理解的。
社区越大越好。拥有一个活跃的社区意味着更新的工具、库、框架和其他东西。
4. 如果选择的技术正在被行业中的大拿们使用，这就证实了它是经过战斗考验的，可以毫无顾虑地用于生产，我们可以通过公司的工程博客来获得更多关于他们如何实现该技术的信息。
5. 选择一个开源的技术可以帮助我们在原始解决方案没有的情况下编写自己的自定义功能。我们不必依赖该技术的创造者来获得新的功能和东西，也不需要向任何人支付任何形式的费用来使用该产品，因为代码对所有人开放。
