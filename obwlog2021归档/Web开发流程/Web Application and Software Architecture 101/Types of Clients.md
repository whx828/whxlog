In this lesson, you will learn about the two types of clients: the thin client and the thick client (sometimes also called the fat client).
在本课程中，您将了解两种类型的客户端：瘦客户端和厚客户端（有时也称为 FAT 客户端）。

There are primarily two types of clients:
主要有两种类型的客户端：

1.  _Thin client_
瘦客户端
2.  _Thick client_ (sometimes also called the _Fat client_)
厚客户端（有时也称为胖客户端）

## Thin client [#](https://www.educative.io/courses/web-application-software-architecture-101/qVXwMj6YMV7#Thin-client)

_Thin client_ is the client that holds just the user interface of the application. It has no business logic of any sort. For every action, the client sends a request to the backend server. Just like in a _three-tier_ application.
瘦客户端是仅包含应用程序的用户界面的客户端。它没有任何类型的业务逻辑。对于每个动作，客户端向后端服务器发送请求。就像在三层应用程序中一样。

![[thin client & thick client.png]]

## Thick client [#](https://www.educative.io/courses/web-application-software-architecture-101/qVXwMj6YMV7#Thick-client)

On the contrary, the thick client holds all or some part of the business logic. These are the two-tier applications. If you remember, we've already discussed.
相反，厚客户端持有业务逻辑的全部或部分部分。这些是双层应用程序。如果你记得，我们已经讨论过了。

The typical examples of fat clients are utility apps, online games, etc.
厚客户端的典型示例是实用程序，在线游戏等。

---

笔记：
客户端的分类：
1. Thin 客户端：仅包含 UI，没有任何类型的业务逻辑。对于用户的每个动作，直接向后端服务器发送请求而不是自行处理，只负责展示。一般应用在三层应用程序中。
2. Thick/Fat 客户端：不仅有 UI，还持有业务逻辑的全部或部分部分。一般应用在双层应用程序中。
