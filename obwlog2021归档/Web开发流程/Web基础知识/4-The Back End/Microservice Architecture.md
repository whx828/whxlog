This lesson gives an overview of popular web server operating systems.
本课概述了流行的 Web 服务器操作系统。

So far, we know that the back end consists of a server that receives user queries and a database from which the appropriate results are retrieved.
到目前为止，我们知道后端包括一个接收用户查询的服务器和一个数据库，从该数据库中检索出适当的结果。

## Microservices [#](https://www.educative.io/courses/web-development-a-primer/JPWRjOy9449#Microservices-)

However, most modern websites don't rely on this style of web hosting, i.e., the code of all of the functionalities of the entire website does not exist on one server. Instead, websites are hosted on virtual machines (just think of them as computers within computers). Virtual machines can allow us to have several ‘machines’ on one server, each with different operating systems. So, the website is hosted on a server within a server, and that server delegates tasks to _other_ servers.
然而，大多数现代网站并不依赖于这种风格的网络托管，即整个网站的所有功能的代码并不存在于一台服务器上。相反，网站托管在虚拟机上（只需将它们视为计算机中的计算机）。虚拟机可以让我们在一台服务器上拥有多台“机器”，每台机器都有不同的操作系统。因此，网站托管在服务器内的服务器上，该服务器将任务委派给其他服务器。

![[Conventional.png]]

In the diagram above, a client connects to one server, and it handles everything and responds.
在上图中，客户端连接到一台服务器，它处理所有事情并做出响应。

![[Web开发流程/Web基础知识/图片/Microservice Architecture.png]]

In the Microservices architecture, however, many virtual machines exist on one physical server, and each has a separate job. For example, one of them may be the ‘interface’ that the user interacts with, and it might connect to another for the database.
然而，在微服务架构中，许多虚拟机存在于一台物理服务器上，并且每个虚拟机都有单独的工作。例如，其中一个可能是用户互动的 "界面"，而它可能连接到另一个数据库。

According to the [Microservices website](https://microservices.io/) ,
根据微服务网站，

"Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are
"微服务"，也被称为 "微服务架构"，是一种架构风格，它将一个应用程序构建为服务的集合，具有以下特点

- Highly maintainable and testable
高度可维护和可测试
- Loosely coupled
松散的耦合
- Independently deployable
可独立部署
- Organized around business capabilities.
围绕业务能力进行组织。

The microservice architecture enables the continuous delivery/deployment of large, complex applications. It also enables an organization to evolve its technology stack."
微服务架构使大型复杂应用的持续交付/部署成为可能。它也使一个组织能够发展其技术栈"。

---

In the next lesson, we will talk about back end programming.
在下一课中，我们将讨论后端编程。

