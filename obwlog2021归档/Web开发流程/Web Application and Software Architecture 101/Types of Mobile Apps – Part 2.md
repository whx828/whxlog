Okay, up to this point,you have learned about the two different types of mobile apps and the popular technologies that are leveraged to build them. Now, when we talk about Hybrid apps, the first question that pops up in our mind is: _Why do we need this type of app when we already have native apps? They are performant and have a consistent UI, so why would any business want to compromise user experience by offering its service via a hybrid app?_
好了，到此为止，你已经了解了两种不同类型的移动应用程序以及用来构建它们的流行技术。现在，当我们谈论混合应用程序时，我们脑海中浮现的第一个问题是：既然我们已经有了原生应用程序，为什么还需要这种类型的应用程序？原生应用程序具有良好的性能和一致的用户界面，那么为什么任何企业要通过混合应用程序提供服务来损害用户体验？

In the mobile app development universe, there are a few pain points that come along with the native app development, and businesses have to turn towards Hybrid apps to overcome those pain points. Let's find out what they are.
在移动应用开发领域，有几个痛点是伴随着原生应用开发而来的，企业必须转向混合应用来克服这些痛点。让我们来看看它们是什么。

## Cross-platform app development pain points - The need for hybrid apps [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Cross-platform-app-development-pain-points---The-need-for-hybrid-apps)
跨平台应用开发的痛点--对混合应用的需求

Earlier we discussed that when writing Native apps, we have to develop dedicated apps for every platform be it Android, iOS, Windows, Blackberry, or any other OS. Developing and maintaining a dedicated mobile app for every OS is the biggest pain point of cross-platform app development. Every OS supports a specific set of technologies to build apps for them. There is no common ground and no common technology that is supported by all the platforms. Due to the need of having a presence on multiple platforms, developers have to first educate themselves on various technologies before they get down to the implementation of any sort.
先前我们讨论过，在编写原生应用程序时，我们必须为每个平台开发专用的应用程序，无论是 Android、iOS、Windows、黑莓还是其他操作系统。为每个操作系统开发和维护专用的移动应用程序是跨平台应用程序开发的最大痛点。每个操作系统都支持一套特定的技术来为它们构建应用程序。没有共同点，也没有所有平台都支持的共同技术。由于需要在多个平台上占有一席之地，开发人员必须首先了解各种技术，然后再进行任何形式的实施。

Businesses have to set up dedicated teams for every platform. A team building an Android app has to be proficient in _Java, Kotlin_ or _C++_, and a team building an app for iOS has to be proficient in _Swift_.
企业必须为每个平台建立专门的团队。构建安卓应用的团队必须精通 Java、Kotlin 或 C++，而构建 iOS 应用的团队则必须精通 Swift。

Even if the reluctant developers go through the steep learning curve and build and launch their apps on these platforms. What's the guarantee that, in future, a different OS won't pop-up that supports a different set of technologies to build apps for its platform?
即使那些不情愿的开发者经历了陡峭的学习曲线，并在这些平台上构建和推出他们的应用程序。有什么能保证，将来不会冒出一个不同的操作系统，支持一套不同的技术来为其平台构建应用程序呢？

Naturally, when starting up, we do not have enough resources (_developers + money_) to set up dedicated teams and codebases for every platform. We need a common codebase, something portable, something that we could build once and run everywhere.
自然，在起步阶段，我们没有足够的资源（开发人员+资金）为每个平台建立专门的团队和代码库。我们需要一个共同的代码库，一些可移植的东西，一些我们可以建立一次并在各地运行的东西。

This led to the emergence of Hybrid apps. Since, these apps are developed using open web-based technologies like _HTML5 and JavaScript_. Developers working in the modern web development space have this skill set already, and they do not have to go through a steep learning curve to start building these apps. Any developer with the modern web development skill set can start writing code without going through a daunting learning process. With Hybrid apps, businesses do not need dedicated teams for different platforms. The same codebase can be deployed on multiple platforms with minor modifications. These apps are easy to build due to the familiarity with the tech. This saves time and money.
这导致了混合应用程序的出现。因为，这些应用程序是使用基于网络的开放技术，如 HTML5 和 JavaScript 开发的。在现代网络开发领域工作的开发人员已经具备了这种技能，他们不必通过陡峭的学习曲线来开始构建这些应用程序。任何拥有现代网络开发技能的开发者都可以开始编写代码，而无需经历令人生畏的学习过程。有了混合应用程序，企业不需要专门的团队来处理不同的平台。同样的代码库可以在多个平台上部署，只需稍作修改。由于对技术的熟悉，这些应用程序很容易建立。这节省了时间和金钱。

_So, building Hybrid apps is the way to go right? I am just starting up, my team is small, and I have limited resources. Why would I want to write a dedicated app for every platform? I should pick the Hybrid app approach, right?_
所以，构建混合型应用程序是正确的方式？我刚刚起步，我的团队很小，而且我的资源有限。我为什么要为每个平台写一个专门的应用程序呢？我应该选择混合应用的方式，对吗？

Well, I wish the answer was that straightforward, and I could always say yes!! As I've said over and over throughout the course, there is no silver bullet or no one size fits all. Every tech has a use case, and it comes along with its pros and cons. Hybrid apps are no different.
好吧，我希望答案是那么简单明了，我总是可以说是的！正如我在整个课程中反复说的，没有银弹，也没有一个适合所有的尺寸。每一种技术都有一个使用案例，并且伴随着它的优点和缺点。混合应用程序也不例外。

## Issues with Hybrid apps [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Issues-with-Hybrid-apps)
混合型应用程序的问题

Hybrid apps are not as performant and smooth as Native apps as they run inside a Native container and talk to the underlying OS via a middle layer. This slows down their performance a bit and introduces lag.
混合型应用程序不像原生应用程序那样性能卓越和流畅，因为它们在本地容器中运行，并通过中间层与底层操作系统对话。这就使它们的性能降低了一些，并引入了滞后。

Although a few frameworks and ecosystems claim to be as performant as Native apps, sometimes even better, marketing is one thing and running an app in production achieving the same performance as Native apps is another.
尽管一些框架和生态系统声称其性能与 Native 应用程序一样，有时甚至更好，但营销是一回事，在生产中运行的应用程序达到与 Native 应用程序相同的性能是另一回事。

In the past, a few of the businesses have tried to adopt the Hybrid app single codebase strategy to deploy their apps across platforms but have eventually reverted to the Native app approach to achieve the desired user experience.
在过去，一些企业曾试图采用混合应用的单一代码库策略来跨平台部署他们的应用，但最终还是回到了 Native 应用的方法，以实现理想的用户体验。

Here are a few examples: 
这里有几个例子：

## Real-life examples [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Real-life-examples)
真实的例子

### Airbnb ditched react-native for native tech [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Airbnb-ditched-react-native-for-native-tech)
Airbnb 放弃了 react-native，改用 Native 技术

In a [series of blog posts](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c) , Airbnb engineering shared their experience of developing their mobile app with _React-Native_.
在一系列的博客文章中，Airbnb 工程部分享了他们用 React-Native 开发移动应用的经验。

They built their desktop website using _React JS_. Hence, they considered React-Native as an opportunity to speed up the app development process by having a single codebase as opposed to having multiple codebases for different platforms.
他们使用 React JS 建立了他们的桌面网站。因此，他们认为 React-Native 是一个机会，通过拥有一个单一的代码库，而不是为不同的平台拥有多个代码库，来加快应用的开发过程。

They spent a couple of years working on it and eventually abandoned React-Native for the native technology. They faced performance issues specifically during the app initialization and initial render time, with app launch screen, when navigating between different screens. They also experienced dropped frames.
他们花了几年的时间，最终放弃了 React-Native，转而使用本地技术。他们面临着性能问题，特别是在应用初始化和初始渲染时间，应用启动屏幕，在不同屏幕之间导航时。他们还遇到了丢帧。

They had to write several patches for React-Native to get the desired Native functionality. They found some of the trivial stuff, that could be easily done with the Native tech, quite difficult to pull off with React-Native.
他们不得不为 React-Native 写了几个补丁来获得所需的本地功能。他们发现一些琐碎的事情，用 Native 技术可以很容易做到，但用 React-Native 就很难做到。

The lack of type safety in JavaScript made it difficult to scale, and the development process turned out to be difficult for engineers who were used to writing code in languages with default type-safety checks. The lack of type safety made code refactoring extremely difficult.
在 JavaScript 中缺乏类型安全使得它难以扩展，而且开发过程对于那些习惯于用默认类型安全检查的语言编写代码的工程师来说也很困难。类型安全的缺乏使得代码重构变得非常困难。

For a full account of their experience read [React Native at Airbnb](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)
关于他们的经验，请阅读 React Native at Airbnb。

### Udacity abandoned React Native [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Udacity-abandoned-React-Native)
Udacity 放弃了 React Native

Here is another instance, where the Udacity mobile engineering team abandoned React-Native due to the increased number of Android-specific features requested by their users. Their Android team was reluctant to go ahead with the Hybrid app approach, and the long-term maintenance costs of the React-Native codebase were high. They also faced UX consistency issues across the platforms. For a full account of their experience, [here you go](https://engineering.udacity.com/react-native-a-retrospective-from-the-mobile-engineering-team-at-udacity-89975d6a8102) .
这是另一个例子，Udacity 的移动工程团队放弃了 React-Native，因为他们的用户要求的 Android 特定功能数量增加。他们的安卓团队不愿意继续使用混合应用的方法，而且 React-Native 代码库的长期维护成本很高。他们还面临着跨平台的用户体验一致性问题。关于他们的经验的完整描述，请看这里。

### Facebook admitted counting big on HTML5 for their mobile app was a mistake [#](https://www.educative.io/courses/web-application-software-architecture-101/B1RYpXX90QW#Facebook-admitted-counting-big-on-HTML5-for-their-mobile-app-was-a-mistake)
Facebook 承认在他们的移动应用中大量使用 HTML5 是一个错误#。

This is back in 2012. I know it's been a while, and technologies have matured a lot. Still, I felt I should add this instance.
这要追溯到 2012 年。我知道已经过了一段时间了，技术也成熟了很多。不过，我还是觉得应该加上这个例子。

Facebook admitted that they made a big mistake investing too much time and resources writing their mobile app with HTML5 instead of using the Native tech. Their mobile strategy relied too much on open web technologies. [Here is a full account on VentureBeat](https://venturebeat.com/2012/09/11/facebooks-zuckerberg-the-biggest-mistake-weve-made-as-a-company-is-betting-on-html5-over-native/) .
Facebook 承认，他们在用 HTML5 编写移动应用时投入了太多的时间和资源，而没有使用 Native 技术，这是一个大错误。他们的移动战略过于依赖开放网络技术。以下是 VentureBeat 的完整叙述。

With this, we have reached the end of the lesson. Here are a few interesting reads:
就这样，我们已经到了本课的结尾。这里有一些有趣的读物：

 [_Who Will Steal Android From Google?_](https://medium.com/@steve.yegge/who-will-steal-android-from-google-af3622b6252e)
谁会从谷歌手中抢走安卓？

 [_The Story Of Firefox OS_](https://medium.com/@bfrancis/the-story-of-firefox-os-cb5bf796e8fb)
火狐操作系统的故事

In the next lesson, I'll talk about how to choose the right mobile app type for our use case. Hybrid or Native?
在下一课，我将谈论如何为我们的用例选择正确的移动应用类型。混合型还是原生型？
