In this lesson, you will learn about the graph database and when to choose it for projects
在本课中，你将了解图数据库以及何时选择它

## What is a graph database? [#](https://www.educative.io/courses/web-application-software-architecture-101/39m5GPqBj5Q#What-is-a-graph-database?)
什么是图数据库？

_Graph_ databases are also a part of the _NoSQL_ database family. They store data in _nodes/vertices_ and _edges_ in the form of relationships.
图数据库也是 NoSQL 数据库家族的一部分。它们以关系的形式将数据存储在节点/顶点和边中。

![[Graph Database.png]]

Each _node_ in a graph database represents an entity. It can be a person, a place, a business, etc., and the _edge_ represents the relationship between the entities.
图数据库中的每个节点代表一个实体。它可以是一个人，一个地方，一个企业，等等，而边代表实体之间的关系。

**But, why use a graph database to store relationships when we already have SQL based relational databases available?**
**但是，既然我们已经有了基于 SQL 的关系数据库，为什么还要用图形数据库来存储关系呢？**

## Features of a graph database [#](https://www.educative.io/courses/web-application-software-architecture-101/39m5GPqBj5Q#Features-of-a-graph-database)
图形数据库的特点

There are two primary reasons. The first is visualization. Think of that pinned board in the thriller detective movies where the pins are pinned on a board over several images connected via threads. It helps visualize how the entities are related and how things fit together. Right?
有两个主要原因。第一是可视化。想想惊悚侦探电影中的那个钉子板，其中的钉子被钉在一个板子上，通过线程连接的几个图像。它有助于可视化实体之间的关系以及事物之间的配合。对吗？

The second reason is the low latency. In graph databases, the relationships are stored a bit differently than how relational databases store relationships.
第二个原因是低延迟。在图形数据库中，关系的存储方式与关系型数据库的存储方式有些不同。

Graph databases are faster because the relationships in them are not calculated at query time, as it happens with the help of _joins_ in the relational databases. Rather, the relationships here are persisted in the data store in the form of edges, and we just have to fetch them. No need to run any sort of computation at the query time.
图数据库更快，因为其中的关系不是在查询时计算的，就像在关系型数据库中借助于连接发生的那样。相反，这里的关系是以边的形式保存在数据存储中的，我们只需要获取它们。在查询时不需要运行任何形式的计算。

A good real-life example of an application that would fit a graph database is Google Maps. _Nodes_ represent the cities, and the _edges_ represent the connections between them.
一个适合图数据库的应用的现实例子是谷歌地图。节点代表城市，边代表它们之间的联系。

Now, if I have to look for roads between different cities, I don't need _joins_ to figure out the relationship between the cities when I run the query. I just need to fetch the edges, which are already stored in the database.
现在，如果我必须寻找不同城市之间的道路，当我运行查询时，我不需要连接来弄清城市之间的关系。我只需要获取边，这些边已经存储在数据库中了。

## When do I pick a graph database? [#](https://www.educative.io/courses/web-application-software-architecture-101/39m5GPqBj5Q#When-do-I-pick-a-graph-database?)
我什么时候该选择图数据库？

Ideal use cases of graph databases are building social, knowledge, and network graphs, writing AI-based apps, recommendation engines, and fraud analysis apps, storing genetic data, etc.
图数据库的理想用例是构建社交、知识和网络图，编写基于 AI 的应用程序、推荐引擎和欺诈分析应用程序，存储基因数据等。

Graph databases help us visualize our data with minimum latency. A popular graph database used in the industry is _Neo4J_.
图数据库帮助我们以最小的延迟实现数据的可视化。业界使用的一个流行的图数据库是 Neo4J。

## Real-life Implementations [#](https://www.educative.io/courses/web-application-software-architecture-101/39m5GPqBj5Q#Real-life-Implementations)
现实生活中的实施

Here are some of the real-life implementations of the tech: 
以下是该技术在现实生活中的一些实施情况：

- [Walmart shows product recommendations to its customers in real-time using Neo4J graph database](https://neo4j.com/blog/walmart-neo4j-competitive-advantage/)
沃尔玛使用 Neo4J 图形数据库向顾客实时显示产品推荐信息

- [NASA uses Neo4J to store “lessons learned” data from their previous missions to educate the scientists and engineers.](https://neo4j.com/blog/david-meza-chief-knowledge-architect-nasa/)
美国国家航空航天局（NASA）使用 Neo4J 来存储他们以前任务中的 "经验教训 "数据，以教育科学家和工程师。

---

笔记：

图数据库也是 NoSQL 数据库家族的一部分。它们以**关系**的形式将数据存储在节点和边中。
图数据库中的每个节点代表一个实体。它可以是一个人，一个地方，一个企业，等等，而边代表实体之间的关系。
图数据库更快，图数据库中的关系不是在查询时计算的，而是以边的形式保存在数据存储中的，只需要获取它们即可，在查询时不需要运行任何形式的计算。
图数据库的理想使用场合是构建社交、知识和网络图，编写基于 AI 的应用程序、推荐引擎和欺诈分析应用程序，存储基因数据等。
图数据库帮助我们以最小的延迟实现数据的可视化。
