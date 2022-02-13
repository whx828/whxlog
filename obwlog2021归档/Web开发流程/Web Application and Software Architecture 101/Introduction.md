This lesson gives an overview of the different topics we will cover in this chapter. You will learn what a tier is and its components?
本课概述了本章将涉及的不同主题。你将学习什么是层级及其组成部分。

I'll begin the course by discussing the different tiers involved in the software architectural landscape. This is like a bird's eye view of the software architecture realm and it is important to be understood well.
在课程开始时，我将讨论软件架构领域所涉及的不同层级。这就像是软件架构领域的一个鸟瞰图，好好理解很重要。

This chapter will help us understand:
本章将帮助我们理解：

- What is a _tier_?
什么是层级？
- Why do software applications have different _tiers_? What is the need for them?
为什么软件应用有不同的层级？对它们的需求是什么？
- How do I decide how many _tiers_ my application should have?
如何决定我的应用程序应该有多少个层级？

## What is a tier? [#](https://www.educative.io/courses/web-application-software-architecture-101/q2W5AnAzWgG#What-is-a-tier?)

Think of a _tier_ as a logical separation of components in an application or a service. **When I say separation, I mean physical separation at the component level, not the code level.**
把层看作是一个应用程序或服务中组件的逻辑分离。**当我说分离时，我指的是在组件层面的物理分离，而不是代码层面。**

**What do I mean by components?**
我所说的组件是什么意思？

- _Database_
数据库
- _Backend application server_
后端应用服务器
- _User interface_
用户界面
- _Messaging_
消息传递
- _Caching_
缓存

These are the different components that make up a _web service_.
这些是构成网络服务的不同组件。

![](https://www.educative.io/api/collection/6064040858091520/6411938009448448/page/5302003704004608/image/5670296554045440)
![[Web Application Architecture.png]]

Now let's take a look at the different types of tiers and their real-life examples.
现在让我们来看看不同类型的层及其现实生活中的例子。

---

笔记：
软件架构的分层不是指代码里面的“分层”，而是指物理层面的分离：UI、后端服务、缓存服务、数据库、消息传递都分别分布在不同的物理机器上。
