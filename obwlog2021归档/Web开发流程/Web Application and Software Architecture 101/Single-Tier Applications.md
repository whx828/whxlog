In this lesson, you will learn about single-tier applications.
在本课中，您将了解单层应用程序。

## Single-tier applications [#](https://www.educative.io/courses/web-application-software-architecture-101/g7P25oLnG26#Single-tier-applications)

> A _single-tier_ application is an application where the _user interface_, _backend business logic_, and the _database_ all reside in the same machine.
> 单层应用程序是用户界面、后端业务逻辑和数据库都位于同一台机器上的应用程序。

![[single tier application.png]]

Typical examples of _single-tier_ applications are desktop applications like _MS Office_, PC Games or an image editing software like _Gimp_.
单层应用程序的典型示例是桌面应用程序（如 _MS Office、PC Games_）或图像编辑软件（如 _Gimp_）。

## Advantages of single-tier applications [#](https://www.educative.io/courses/web-application-software-architecture-101/g7P25oLnG26#Advantages-of-single-tier-applications)

The main upside of _single-tier_ applications is that they have no network latency because every component is located on the same machine. This adds up to the performance of the software.
单层应用程序的主要优点是它们没有网络延迟，因为每个组件都位于同一台机器上。这增加了软件的性能。

Every now and then, data requests to the backend server stop, making the user experience slow. In _single-tier_ apps, the data is easily and quickly available since it is located in the same machine.
对后端服务器的数据请求时不时停止，导致用户体验变慢。在单层应用程序中，由于数据位于同一台机器中，因此可以轻松快速地获取数据。

However, the real performance of a single-tier app largely depends on how powerful the machine is and the software's hardware requirements.
但是，单层应用程序的实际性能很大程度上取决于机器的功能和软件的硬件要求。

Also, the user's data stays in their machine and doesn't need to be transmitted over a network. This ensures data safety at the highest level.
此外，用户的数据保留在他们的机器中，不需要通过网络传输。这确保了最高级别的数据安全。

## Disadvantages of single-tier applications [#](https://www.educative.io/courses/web-application-software-architecture-101/g7P25oLnG26#Disadvantages-of-single-tier-applications)

One big downside of _single-tier_ apps is that the business has no control over the application. Once the software is shipped, no code or feature changes can be done until the customer manually updates it by connecting to the remote server or by downloading and installing a patch.
单层应用程序的一大缺点是企业无法控制应用程序。软件交付后，在客户通过连接到远程服务器或下载并安装补丁手动更新软件之前，不能更改任何代码或功能。

Due to this, in the 90s there was nothing the studios could do if a game was shipped with buggy code. They would eventually have to face some heat due to the buggy nature of the software. The product testing had to be thorough because there was no room for any mistakes.
因此，在 90 年代，如果游戏带有错误代码，工作室将无能为力。由于软件的缺陷，他们最终将不得不面对一些问题。产品测试必须彻底，因为不允许出现任何错误。

The code in _single-tier_ applications is also vulnerable to being tweaked and reversed engineered. The security, for the business, is minimal.
单层应用程序中的代码也容易被调整和逆向工程。对于企业来说，安全性是最低的。

Finally, the application's performance and the look and feel can become inconsistent as the app largely depends on the configuration of the user's machine.
最后，应用程序的性能和外观可能会变得不一致，因为应用程序在很大程度上取决于用户机器的配置。

---

笔记：
单层应用程序是 UI、后端业务逻辑和数据库都位于**同一台机器**上的应用程序。
由于各个组件都安排在一起，因此没有网络延迟。
获取数据也是如此，因为数据库也在一起，不走网络，因此数据传输过程相比而言非常安全。
成也萧何，败也萧何，机器性能也限制了 APP 的性能。
软件交付后，客户连接到远程服务器或下载安装补丁之前，不能修改代码或功能。
代码角度而言容易被逆向工程，对于企业来说安全性低。
