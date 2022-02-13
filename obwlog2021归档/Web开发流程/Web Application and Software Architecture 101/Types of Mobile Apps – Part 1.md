In this lesson, I'll talk about the two different types of mobile apps: native apps and hybrid apps.
在本课中，我将谈论两种不同类型的移动应用：原生应用和混合应用。

Just to clarify, when I say mobile apps, I mean the apps that we download from the app stores like the Google Play Store, and install on our mobile.
澄清一下，当我说移动应用程序时，我指的是我们从应用程序商店（如 Google Play 商店）下载并安装在我们手机上的应用程序。

There are two types of mobile apps: _Native_ and _Hybrid_. In this lesson, we'll find out what they are and what technologies, popular in the developer circles, are required to build these apps. In the subsequent lessons, we'll also discuss things like:
有两种类型的移动应用程序：本地和混合。在这一课中，我们将了解它们是什么，以及在开发者圈子里流行的技术是什么，以建立这些应用程序。在随后的课程中，我们还将讨论以下内容。

- Why is it so important for developers to pick the right type of app to implement their use case?
为什么对开发者来说，选择正确的应用程序类型来实现他们的用例是如此重要？

- Why do we need different types of mobile apps? What are the pain points these app types are trying to solve?
为什么我们需要不同类型的移动应用程序？这些应用类型要解决的痛点是什么？

- Which app type, _hybrid_ or _native_, will suit best for my use case? We'll discuss this with some real-life examples.
哪种应用类型，混合型或原生型，将最适合我的用例？我们将通过一些现实生活中的例子来讨论这个问题。

So, without further ado. Let's get on with it.
所以，不用再多说了。让我们继续讨论吧。

## Native app [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Native-app)
原生应用程序

Native apps are apps that are built exclusively for a particular operating system be it the _Android, iOS_ or a _Windows-based_ handheld device. These apps function only on the OS they are built for. For instance, an app that is built for Android OS will not work on Apple OS.
原生应用程序是专门为某一特定操作系统建立的应用程序，无论是 Android、iOS 还是基于 Windows 的手持设备。这些应用程序只在它们所处的操作系统上运行。例如，为安卓操作系统构建的应用程序将无法在苹果操作系统上运行。

Native apps interact directly with the operating system and the device hardware as opposed to communicating with it via a wrapper, an adapter or a middle layer. Therefore, they have full access to the device hardware like camera, sensors, and stuff.
原生应用程序直接与操作系统和设备硬件互动，而不是通过包装器、适配器或中间层与之沟通。因此，它们可以完全访问设备硬件，如摄像头、传感器和其他东西。

These apps provide high performance, have a consistent user interface, and provide the look and feel of the Native OS.
这些应用程序提供高性能，具有一致的用户界面，并提供本地操作系统的外观和感觉。

![[Native OS.png]]

Native apps don't face any lag issues when rendering UI animations like the slider movement, hiding and display of UI elements etc. With these apps, the UI is pretty responsive. This means that, when the user clicks on the UI, they can immediately see the change as opposed to seeing the change after a bit of a lag.
原生应用程序在渲染 UI 动画时不会面临任何滞后问题，如滑块的移动、UI 元素的隐藏和显示等。在这些应用程序中，用户界面是相当有反应的。这意味着，当用户点击用户界面时，他们可以立即看到变化，而不是经过一段时间的滞后后看到变化。

Native apps are developed using the APIs and the SDKs provided by the native OS. Some examples of Native apps are the Android apps of LinkedIn, Tinder, and Hike.
原生应用程序是使用本地操作系统提供的 API 和 SDK 开发的。一些原生应用的例子是 LinkedIn、Tinder 和 Hike 的 Android 应用。

## Technologies for writing Native Apps [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Technologies-for-writing-Native-Apps)
编写原生应用程序的技术

Every mobile OS supports a certain set of technologies for writing an app that would run on that particular OS. For instance, if you want to build an app that would run on Android OS, you can use _Java, Kotlin_ or _C++_. [This official Android developer documentation is a good place to start for the Android application development](https://developer.android.com/guide?hl=en) .
每个移动操作系统都支持一定的技术来编写在该特定操作系统上运行的应用程序。例如，如果你想建立一个可以在安卓系统上运行的应用程序，你可以使用 Java、Kotlin 或 C++。这个官方的安卓开发者文档是安卓应用开发的一个好起点。

Likewise, for writing Native apps for iOS you can use _Swift and Objective C_ along with the _Cocoa Touch_ framework. To write iOS apps, [this Apple developer documentation is a good place to start.](https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/)
同样，对于为 iOS 编写本地应用程序，你可以使用 Swift 和 Objective C 以及 Cocoa Touch 框架。要编写 iOS 应用程序，这个苹果开发者文档是一个很好的开始。

Just like this, every respective mobile OS supports a different set of technologies to enable developers to build apps for its platform.
就像这样，每个移动操作系统都支持一组不同的技术，使开发人员能够为其平台构建应用程序。

## Hybrid app [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Hybrid-app)
混合型应用程序

Hybrid apps, as the name implies are a hybrid between the Native and the web-based technologies. Just like Native apps, they can be installed from the app stores on the mobile, can access the hardware, and can communicate with the OS of the device.
混合应用程序，顾名思义，是 Native 和基于网络的技术之间的混合。就像本地应用程序一样，它们可以从应用程序商店安装到手机上，可以访问硬件，并可以与设备的操作系统进行通信。

Hybrid apps are primarily built using open web-based technologies such as _Html5, CSS, and JavaScript_. They run in a Native-container and communicate with the Native OS via a wrapper or a middle layer. This middle layer enables open web technologies to talk to the Native OS. Now, because of this additional middle layer, which Native apps don't have, Hybrid apps are a bit slower than Native apps when it comes to performance and rendering the UI.
混合应用程序主要是使用开放的基于网络的技术，如 Html5，CSS 和 JavaScript。它们在一个本地容器中运行，并通过一个封装器或中间层与本地操作系统通信。这个中间层使开放的网络技术能够与本地操作系统对话。现在，由于这个额外的中间层是 Native 应用程序所没有的，所以当涉及到性能和渲染用户界面时，混合应用程序比 Native 应用程序要慢一些。

![[Hybrid app.png]]

There are several popular frameworks available to write Hybrid apps such as _React-Native, Ionic, Cordova_ etc. Let's discuss this next.
有几个流行的框架可用于编写混合型应用程序，如 React-Native、Ionic、Cordova 等。让我们接下来讨论这个问题。

## Technologies for writing Hybrid Apps [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Technologies-for-writing-Hybrid-Apps)
编写混合型应用程序的技术

Below are a few popular technologies available to us for developing Hybrid mobile apps.
下面是一些流行的技术，我们可以用来开发混合型移动应用程序。

### React Native [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#React-Native)
React Native

 [React Native](https://facebook.github.io/react-native/) is an open-source mobile application development framework, written in _JavaScript_, developed by Facebook. With it, we can develop applications for multiple platforms like Android, iOS, Windows etc.
React Native 是一个开源的移动应用开发框架，用 JavaScript 编写，由 Facebook 开发。有了它，我们可以为 Android、iOS、Windows 等多个平台开发应用程序。

Before releasing the framework, Facebook was already using it for its ad manager, analytics, and the group app. React Native is a pretty popular framework for writing Hybrid apps. In 2018, it had the highest number of contributors for any repository on GitHub.
在发布该框架之前，Facebook 已经将其用于其广告管理器、分析和群组应用。React Native 是一个相当流行的框架，用于编写混合型应用程序。在 2018 年，它是 GitHub 上任何资料库中贡献者数量最多的。

Some of the companies using React-Native for their mobile apps are [Bloomberg](https://www.techatbloomberg.com/blog/bloomberg-used-react-native-develop-new-consumer-app/) , [Walmart](https://medium.com/walmartlabs/react-native-at-walmartlabs-cdd140589560#.ueonqqloc) , [Uber Eats](https://eng.uber.com/ubereats-react-native/) , and [Discord](https://blog.discordapp.com/why-discord-is-sticking-with-react-native-ccc34be0d427) .
一些使用 React-Native 编写移动应用程序的公司有彭博社、沃尔玛、Uber Eats 和 Discord。

### Apache Cordova - PhoneGap [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Apache-Cordova---PhoneGap)
Apache Cordova - PhoneGap

 [Apache Cordova](https://cordova.apache.org/) is an open-source Hybrid mobile application development framework released by Adobe. The framework enables the developers to build mobile apps for Android, Windows, and iOS, using _Html, JavaScript, and CSS_.
Apache Cordova 是一个开源的混合移动应用开发框架，由 Adobe 发布。该框架使开发者能够使用 Html、JavaScript 和 CSS 为 Android、Windows 和 iOS 建立移动应用。

There are several ecosystems and frameworks built on top of Cordova like _Ionic Framework, PhoneGap_ etc. PhoneGap is Adobe's commercial version of Cordova. Besides the open Cordova framework, Adobe provides several tools and an entire ecosystem, to facilitate mobile development via PhoneGap.
有几个生态系统和框架建立在 Cordova 之上，如 Ionic Framework, PhoneGap 等。PhoneGap 是 Adobe 的商业版本的 Cordova。除了开放的 Cordova 框架，Adobe 还提供了一些工具和整个生态系统，以促进通过 PhoneGap 的移动开发。

 [Here is a list of apps developed using PhoneGap](https://phonegap.com/app/) .
以下是使用 PhoneGap 开发的应用程序的列表。

### Ionic framework [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Ionic-framework)
Ionic 框架

 [Ionic](https://ionicframework.com/) is an open-source SDK for writing hybrid mobile apps built on top of _Apache Cordova_ and _AngularJS_. Here are some of the [companies developing their apps using the Ionic Framework](https://ionicframework.com/customers) .
Ionic 是一个开源的 SDK，用于编写建立在 Apache Cordova 和 AngularJS 之上的混合移动应用程序。这里有一些使用 Ionic 框架开发应用程序的公司。

### Flutter [#](https://www.educative.io/courses/web-application-software-architecture-101/mEv4k4xLD1A#Flutter)
Flutter

 [Flutter](https://flutter.dev/) is an open-source Hybrid mobile application SDK by Google. It can be leveraged to develop applications for platforms like Android, iOS, Windows, Mac, Linux, Google Fuchsia & the web. Some of the apps developed using Flutter are:
Flutter 是谷歌的一个开源的混合移动应用 SDK。它可以用来为 Android、iOS、Windows、Mac、Linux、Google Fuchsia 和网络等平台开发应用。使用 Flutter 开发的一些应用程序有。

 [Square](https://squareup.com/us/en/flutter) , [Google Assistant](https://developers.googleblog.com/2019/05/Flutter-io19.html) .
Square, Google Assistant.

For a full list of apps developed using Flutter, [here you go](https://flutter.dev/showcase) .
关于使用 Flutter 开发的应用程序的完整列表，请看这里。

 [This is a good Wikipedia resource](https://en.wikipedia.org/wiki/Mobile_app_development) that lists out the various mobile app development tools, SDKs, and platforms for writing mobile apps.
这是一个很好的维基百科资源，列出了各种移动应用开发工具、SDK 和编写移动应用的平台。

So, these are some of the popular technologies used by the industry to write Hybrid apps. Let's continue this discussion on Hybrid and Native apps in the next lesson.v
所以，这些是业界用来编写混合型应用程序的一些流行技术。让我们在下一课继续讨论混合和本地应用程序。

---

笔记：

原生应用程序是**专门**为某一特定操作系统建立的应用程序，无论是 Android、iOS 还是基于 Windows 的手持设备。这些应用程序只在它们所处的操作系统上运行。例如，为安卓操作系统构建的应用程序将无法在苹果操作系统上运行。
原生应用程序直接与操作系统和设备硬件互动，而不是通过包装器、适配器或中间层与之沟通。因此，它们可以完全访问设备硬件，如摄像头、传感器和其他东西。
这些应用程序提供高性能，具有一致的用户界面，并提供本地操作系统的外观和感觉。

原生应用程序在渲染 UI 动画时不会面临任何滞后问题，如滑块的移动、UI 元素的隐藏和显示等。在这些应用程序中，用户界面是相当有反应的。这意味着，当用户点击用户界面时，他们可以立即看到变化，而不是经过一段时间的滞后后看到变化。
原生应用程序是使用操作系统提供的 API 和 SDK 开发的。一些原生应用的例子是 LinkedIn、Tinder 和 Hike 的 Android 应用。

混合应用程序，顾名思义，是 Native 和基于网络的技术之间的混合。就像原生应用程序一样，它们可以从应用程序商店安装到手机上，可以访问硬件，并可以与设备的操作系统进行通信。
混合应用程序主要是使用开放的基于网络的技术，如 Html5，CSS 和 JavaScript。它们在一个本地容器中运行，并通过一个封装器或中间层与本地操作系统通信。这个中间层使开放的网络技术能够与本地操作系统对话。现在，由于这个额外的中间层是 Native 应用程序所没有的，所以当涉及到性能和渲染用户界面时，混合应用程序比 Native 应用程序要慢一些。
