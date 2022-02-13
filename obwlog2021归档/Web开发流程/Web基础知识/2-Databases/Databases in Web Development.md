An overview of the use of databases in web applications.
在 Web 应用程序中使用数据库的概述。

We've already discussed the basic structure and underlying protocols of a web page. Now, we will begin looking into what goes into forming a web page. To start with, we will talk about databases and database management systems (DBMS) and the role they play in making the web applications you see all around you, including this one! We know databases are essentially tables used to store and access data, but we now need to look at how these tables fit into the context of web application development. Before we can start talking about what the purpose of a database in a web application is, we must first outline the two kinds of websites that exist.
我们已经讨论了网页的基本结构和基本协议。现在，我们将开始研究形成一个网页的因素。首先，我们将谈论数据库和数据库管理系统（DBMS），以及它们在制作你周围看到的网络应用中所扮演的角色。我们知道数据库本质上是用来存储和访问数据的表，但我们现在需要看看这些表是如何融入网络应用程序开发的背景中的。在我们开始讨论数据库在网络应用程序中的目的是什么之前，我们必须首先概述一下存在的两种网站。

## Static vs. dynamic web pages [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Static-vs.-dynamic-web-pages)
静态网页与动态网页

Websites may be classified into one of two types:
网站可以分为以下两种类型之一：
1.  Static 静态
2.  Dynamic 动态

**Static websites** are ones that only display information such as text or pictures on their web pages that users cannot interact with.
**静态网站**是指只在网页上显示文字或图片等信息，用户无法与之互动。

**Dynamic websites**, on the other hand, allow for user interaction, and that is where Databases come into the picture. Think of any website you’ve visited today. How many of them required for you to sign in or allowed you to click on a button that retrieved some information, perhaps even a new web page, for you? This information that web applications are able to display to you or process to allow you to access other information needs to be stored somewhere. That somewhere is a database associated with the web application.
另一方面，**动态网站**允许用户互动，这就是数据库的作用。想想你今天访问过的任何网站。其中有多少网站需要你登录或允许你点击一个按钮，为你检索一些信息，也许甚至是一个新的网页？网络应用程序能够向你显示的这些信息，或者处理这些信息以允许你访问其他信息，都需要储存在某个地方。这个地方就是与网络应用程序相关的数据库。

![[Basic Structure of a Dynamic Website.png]]

## DBMS in web applications [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#DBMS-in-web-applications-)
Web 应用程序中的 DBMS

DBMS, short for Database Management System, is essentially a sort of nuance added to web development that allows data to be separated from the logic of the application and stored separately to be retrieved and processed when required. What this means is that the data is stored in a database that has an entirely autonomous system governing it. The application then makes calls to this database for any required data without having to integrate large amounts of handling code within the application code itself. Database management systems are, therefore, important to developers because they provide a highly efficient method for handling multiple types of data, without interfering with the application's code.
DBMS 是数据库管理系统的简称，本质上是一种添加到网络开发中的细枝末节，它允许数据从应用程序的逻辑中分离出来并单独存储，以便在需要时进行检索和处理。这意味着数据被存储在一个数据库中，该数据库有一个完全自主的系统来管理它。然后，应用程序调用该数据库以获取任何所需的数据，而不必在应用程序代码本身中集成大量的处理代码。因此，数据库管理系统对开发者很重要，因为它们为处理多种类型的数据提供了一种高效的方法，而不会干扰到应用程序的代码。

## Types of DBMS [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#Types-of-DBMS-)
DBMS 的类型

Database Management Systems can be categorized into one of two types:
数据库管理系统可以分为以下两种类型：
1.  SQL
2.  NoSQL

### SQL [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#SQL-)

SQL databases, also known as _relational databases_, use structured query language (SQL) for defining and manipulating data. On the one hand, this is extremely useful since SQL is one of the most versatile and widely-used options available, thus making it a safe choice and especially great for complex queries. On the other hand, it can be restrictive, too, since SQL requires that you use predefined schemas to determine the structure of your data before you work with it. Moreover, data is always stored as a table in SQL databases, which leads to inefficient and complicated data retrievals. In addition, all of your data must follow the same structure. This can require significant effort and may lead to a highly complicated data processing code that can affect the quality of the overall application.
SQL 数据库，也被称为关系型数据库，使用结构化查询语言（SQL）来定义和操作数据。一方面，这是非常有用的，因为 SQL 是最通用和最广泛使用的选项之一，因此它是一个安全的选择，特别适合复杂查询。另一方面，它也可能是限制性的，因为 SQL 要求你在处理数据之前使用预定义的模式来确定数据的结构。此外，数据在 SQL 数据库中总是以表的形式存储，这导致了低效和复杂的数据检索。此外，你的所有数据必须遵循相同的结构。这可能需要大量的努力，并可能导致高度复杂的数据处理代码，从而影响整个应用程序的质量。

Some common SQL databases that we will be discussing in this chapter include:
我们将在本章中讨论的一些常见 SQL 数据库包括：
1.  MySQL
2.  PostgreSQL
3.  MariaDB

### NoSQL [#](https://www.educative.io/courses/web-development-a-primer/qV25j3l8JqD#NoSQL-)

NoSQL databases, also known as _non-relational databases_, have a dynamic schema for unstructured data, and data is stored in many ways, including key-value pairs, documents and, even graphs. This flexibility means that you don't have to define the structure of your data explicitly and each data set can have its own unique structure without having to worry about writing extraneous lines of code to process this data to match a specific predefined structure. These databases can grow dynamically, and the structure of data can vary from database to database.
NoSQL 数据库，也被称为 _非关系型数据库_，对非结构化数据有一个动态的模式，数据以多种方式存储，包括键值对、文档，甚至是图形。这种灵活性意味着你不必明确定义数据的结构，每个数据集都可以有自己独特的结构，而不必担心编写无关紧要的代码行来处理这些数据以匹配特定的预定义结构。这些数据库可以动态增长，数据的结构可以因数据库而异。

Popular NoSQL databases that we will be covering in this chapter include:
我们将在本章中介绍的流行 NoSQL 数据库包括：
1.  MongoDB
2.  Apache CouchDB
3.  Redis

---

That covers all we need to know about the role of databases and database management systems in web development. Now, we will move on to look at specific examples of both types of databases and list the pros and cons of both.
这涵盖了我们需要了解的有关数据库和数据库管理系统在 Web 开发中的作用的所有信息。现在，我们将继续查看这两种数据库的具体示例，并列出两者的优缺点。

