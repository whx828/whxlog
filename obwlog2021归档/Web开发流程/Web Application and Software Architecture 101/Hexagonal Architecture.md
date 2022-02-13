In this lesson, we will introduce hexagonal architecture.
在本课中，我们将介绍六边形架构。

## What is a hexagonal architecture? [#](https://www.educative.io/courses/web-application-software-architecture-101/7DYnQwGRERO#What-is-a-hexagonal-architecture?)
什么是六边形架构？

The architecture consists of three components:
该架构由三个部分组成：

- Ports
端口
- Adapters
适配器
- Domain
域

![[Hexagonal Architecture.png]]

The focus of this architecture is to make different components of the application: independent, loosely coupled, and easy to test.
这种架构的重点是使应用程序的不同组件：独立、松散耦合，并且易于测试。

The application should be designed in a way such that it can be tested by humans and automated tests, with mock databases and mock middleware, with and without a UI, and without making any changes or adjustments to the code.
应用程序应该被设计成这样一种方式：它可以被人类和自动测试，使用模拟数据库和模拟中间件，有或没有用户界面，并且不需要对代码做任何改变或调整。

The architectural pattern holds the _domain_ at its core, meaning the _business logic_. On the outside, the outer layer has _ports_ and _adapters_. _Ports_ act like an _API_ as an interface. All the input to the app goes through the interface.
这种架构模式的核心是域，即业务逻辑。在外面，外层有端口和适配器。端口的作用就像一个 API 的接口。所有对应用程序的输入都要通过接口。

So, the external entities don't have any direct interaction with the _domain_, the business logic. The _adapter_ is the implementation of the interface. Adapters convert the data obtained from the _ports_, to be processed by the _business logic_. The _business logic_ lies isolated at the center, and all the input and output is at the edges of the structure.
所以，外部实体与域、业务逻辑没有任何直接互动。适配器是接口的实现。适配器转换从端口获得的数据，以便由业务逻辑处理。业务逻辑被隔离在中心位置，而所有的输入和输出都在结构的边缘。

The hexagonal shape of the structure doesn't have anything to do with the pattern, it's just a visual representation of the architecture. Initially, the architecture was called the _ports and the adapter pattern_. Later, the name _hexagonal_ stuck.
结构的六边形与模式没有任何关系，它只是架构的一个视觉表现。最初，该架构被称为端口和适配器模式。后来，六边形这个名字就成了。

The _ports & the adapter_ analogy comes from computer ports because they act as the input interface to the external devices, and the _adapter_ converts the signals obtained from the ports to be processed by the chips inside.
端口和适配器的比喻来自计算机端口，因为它们作为外部设备的输入接口，而适配器将从端口获得的信号转换为内部芯片的处理。

## Real-world code implementation [#](https://www.educative.io/courses/web-application-software-architecture-101/7DYnQwGRERO#Real-world-code-implementation)
现实世界的代码实现

Coming down to the real-world code implementation, isn't this what we already do with the _layered architecture_ approach? We have different layers in our applications. We have the _controller_, then the _service layer_ interface, the _class_ implementations of the interface, the _business logic_ that goes in the _domain model_, and a bit in the _service_, _business_, and the _repository_ classes.
归结到现实世界的代码实现，这不就是我们已经用分层架构方法做的吗？我们的应用程序中有不同的层。我们有控制器，然后是服务层接口，接口的类实现，领域模型中的业务逻辑，以及服务、业务和资源库类中的一些内容。

![[Layers of a Web Application 1.png]]

Well, yeah. That's right. First up, I would say that the hexagonal approach is an evolution of the layered architecture. It's not entirely different. As long as the business logic stays in one place, things should be fine. The issue with the layered approach is, often large repos end up with too many layers beside the regular service, repo, and business ones.
嗯，是的。这就对了。首先，我想说的是，六边形方法是分层架构的演变。它并不完全不同。只要业务逻辑保持在一个地方，事情就应该是好的。分层方法的问题是，通常大型资源库在常规服务、资源库和业务之外还有太多层次。

The business logic gets scattered across the layers making testing, refactoring, and pluggability of new entities difficult. Remember the _stored procedures_ in the databases and the business logic coupled with the UI in _Java Server Pages (JSP)_?
业务逻辑被分散在各个层，使得测试、重构和新实体的可插拔性变得困难。还记得数据库中的存储过程和业务逻辑与 Java 服务器页面（JSP）中的用户界面耦合吗？

When working with _JSPs_ and _stored procedures_, we still have the layered architecture. The _UI layer_ is separate the _persistence layer_ is separate but the _business logic_ is tightly coupled with these layers.
当使用 JSP 和存储过程时，我们仍然有分层架构。UI 层是独立的，持久化层是独立的，但业务逻辑与这些层是紧密耦合的。

On the contrary, the _hexagonal pattern_ makes its stance pretty clear: there is an inside component, which holds the _business logic_, then the outside layer, and the _ports_ and the _adapters_, which involve the _databases_, _message queues_, _APIs_, and whatnot.
相反，六边形模式很清楚地表明了自己的立场：有一个内部组件，它持有业务逻辑，然后是外部层，还有端口和适配器，它涉及数据库、消息队列、API 等等。

---

笔记：

hexagonal 架构：
- Ports
端口
- Adapters
适配器
- Domain
域

hexagonal 架构的重点是使应用程序的不同组件独立、松散耦合，并且易于测试。
hexagonal 架构模式的核心是域，即业务逻辑。在外面，外层有端口和适配器。端口的作用就像一个 API 的接口。所有对应用程序的输入都要通过接口。外部实体与域、业务逻辑没有任何直接互动。适配器是接口的实现。适配器转换从端口获得的数据，以便由业务逻辑处理。业务逻辑被隔离在中心位置，而所有的输入和输出都在结构的边缘。
最初，该架构被称为端口和适配器模式。后来被称为 hexagonal 架构。
端口和适配器的比喻来自计算机端口，因为它们作为外部设备的输入接口，而适配器将从端口获得的信号转换为内部芯片的处理。
