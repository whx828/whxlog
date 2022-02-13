In this lesson, we provide an introduction to databases and the different types of data.
在本课中，我们对数据库和不同类型的数据进行了介绍。

## What is a database? [#](https://www.educative.io/courses/web-application-software-architecture-101/N0N7xon2YrN#What-is-a-database?)
什么是数据库？

A database is a component required to persist data. Data can be of many forms: structured, unstructured, semi-structured, and user state data.
数据库是一个需要持久保存数据的组件。数据可以有多种形式：结构化、非结构化、半结构化和用户状态数据。

![[Web Application Architecture-database.png]]

Let's have a quick insight into the classification of data before delving into the databases.
在深入研究数据库之前，让我们对数据的分类有一个快速的了解。
## Structured data [#](https://www.educative.io/courses/web-application-software-architecture-101/N0N7xon2YrN#Structured-data)
结构化数据

Structured data is the type of data that conforms to a certain structure, typically stored in a database in a _normalized_ fashion.
结构化数据是符合某种结构的数据类型，通常以规范化的方式存储在数据库中。

There is no need to run any sort of data preparation logic on structured data before processing it. Direct interaction can be done with this kind of data.
在处理结构化数据之前，不需要对其运行任何形式的数据准备逻辑。可以与这种数据进行直接交互。

An example of structured data is the personal details of a customer stored in a database row. The customer ID would be of _integer_ type, the name would be of _string_ type with a certain character limit etc.
结构化数据的一个例子是存储在数据库行中的客户的个人资料。客户的 ID 是整数型的，名字是有一定字符限制的字符串型的，等等。

So, with structured data, we know what we are dealing with. Since the customer name is of string type, without worrying much about errors or exceptions, we can run string operations on it.
因此，对于结构化数据，我们知道我们正在处理的是什么。由于客户名称是字符串类型的，所以不用担心错误或异常，我们可以对它进行字符串操作。

Structured data is generally managed by a query language such as _SQL (Structured query language)_.
结构化数据一般由查询语言管理，如 SQL（结构化查询语言）。

## Unstructured data [#](https://www.educative.io/courses/web-application-software-architecture-101/N0N7xon2YrN#Unstructured-data)
非结构化数据

Unstructured data has no definite structure. It is generally the heterogeneous type of data consisting of text, image files, videos, multimedia files, pdfs, Blob objects, Word documents, machine-generated data, etc.
非结构化数据没有明确的结构。它一般是由文本、图像文件、视频、多媒体文件、pdf、Blob 对象、Word 文档、机器生成的数据等组成的异质型数据。

This kind of data is often encountered in data analytics. Here the data streams in from multiple sources such as IoT devices, social networks, web portals, industry sensors etc., into the analytics systems.
这类数据在数据分析中经常遇到。在这里，数据从物联网设备、社交网络、门户网站、行业传感器等多个来源流进了分析系统。

We cannot directly process unstructured data. The initial data is pretty raw, and we have to make it flow through a data preparation stage that segregates it based on some business logic and then runs the analytics algorithms on it.
我们不能直接处理非结构化的数据。最初的数据是相当原始的，我们必须使其流经数据准备阶段，根据一些业务逻辑对其进行隔离，然后对其运行分析算法。

## Semi-structured data [#](https://www.educative.io/courses/web-application-software-architecture-101/N0N7xon2YrN#Semi-structured-data)
半结构化的数据

Semi-structured data is a mix of structured and unstructured data. Semi-structured data is often stored in data transport formats such as XML or JSON and is handled as per the business requirements.
半结构化数据是结构化和非结构化数据的混合。半结构化数据通常被存储在数据传输格式中，如 XML 或 JSON，并根据业务需求进行处理。

## User state [#](https://www.educative.io/courses/web-application-software-architecture-101/N0N7xon2YrN#User-state)
用户状态

The data containing the user state is the information of activity which the user performs on the website.
包含用户状态的数据是用户在网站上进行的活动信息。

For instance, when browsing through an e-commerce website, the user would browse through several product categories, change the preferences, and add a few products to the reminder list for the price drops.
例如，在浏览一个电子商务网站时，用户会浏览几个产品类别，改变偏好，并将一些产品添加到降价提醒列表中。

All this activity is the user state. So, next time, the user logs in, they can continue from where they left off. It would not feel like they are starting fresh and all their previous activity is lost.
所有这些活动都是用户状态。所以，下一次，用户登录时，他们可以从他们离开的地方继续。这不会让人觉得他们是在重新开始，而他们之前的所有活动都会丢失。

Storing user state improves the browsing experience and the conversion rate for the business.
存储用户状态可以提高浏览体验和企业的转换率。

So, now that we are clear on the different types of data, let's have a look into different types of databases.
所以，现在我们已经清楚了不同类型的数据，让我们来看看不同类型的数据库。

There are multiple different types of databases with specific use cases. We'll quickly go through each of them to get a bird's eye view of the database realm.
有多种不同类型的数据库有特定的使用情况。我们将快速浏览每一种类型的数据库，以获得对数据库领域的鸟瞰图。

---

笔记：

数据库是一个需要持久保存数据的组件。
数据可以有多种类型：结构化、非结构化、半结构化和用户状态数据。

### 数据类型

结构化数据
结构化数据是符合某种结构的数据类型，通常以规范化的方式存储在数据库中。
在处理结构化数据之前，不需要对其运行任何形式的数据准备逻辑，可以与这种数据进行直接交互。
结构化数据一般由查询语言管理，如 SQL（结构化查询语言）。

非结构化数据
非结构化数据没有明确的结构，一般是由文本、图像文件、视频、多媒体文件、PDF、Blob 对象、Word 文档、机器生成的数据等组成的异质型数据。
我们不能直接处理非结构化的数据，最初的数据是相当原始的，我们必须使其经过数据准备阶段，根据一些业务逻辑对其进行隔离，然后对其运行分析算法。

半结构化数据
半结构化数据是结构化数据和非结构化数据的混合。半结构化数据通常被存储在数据传输格式中，如 XML 或 JSON，并根据业务需求进行处理。

用户状态数据
包含用户状态的数据是用户在网站上进行的活动信息。
例如在浏览一个电子商务网站时，用户会浏览几个产品类别，改变偏好，并将一些产品添加到降价提醒列表中，所有这些活动都是用户状态。下一次用户登录时，他们可以从他们离开的地方继续，不会让人觉得他们是在重新开始。
存储用户状态可以提高浏览体验和企业的转换率。
