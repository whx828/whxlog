In this lesson, you will learn about data pipelines.
在本课程中，您将了解数据管道。

## What are data pipelines? [#](https://www.educative.io/courses/web-application-software-architecture-101/NEGQ8PPMDjN#What-are-data-pipelines?)
什么是数据管道？
> _Data pipelines_ are the core component of a data processing infrastructure. They facilitate the efficient flow of data from one point to another and also enable developers to apply filters on the data streaming-in in real-time.
> 数据管道是数据处理基础设施的核心组成部分。它们促进了数据从一个点到另一个点的有效流动，也使开发人员能够对实时流入的数据应用过滤器。

Today's enterprise is data driven. This makes data pipelines key in implementing scalable analytics systems.
今天的企业是数据驱动的。这使得数据管道成为实施可扩展分析系统的关键。

## Features of data pipelines [#](https://www.educative.io/courses/web-application-software-architecture-101/NEGQ8PPMDjN#Features-of-data-pipelines)
数据管道的特点

Speaking of some more features of the data pipelines
谈到数据管道的一些更多的特点

- They ensure a smooth flow of data.
它们确保了数据的顺利流动。
- They enable the business to apply filters and business logic on streaming data.
它们使企业能够在流数据上应用过滤器和业务逻辑。
- They avert any bottlenecks and redundancy in the data flow.
它们避免了数据流中的任何瓶颈和冗余。
- They facilitate the parallel processing of data.
它们促进了数据的并行处理。
- They avoid data being corrupted.
他们避免数据被破坏。

These pipelines work on a set of rules predefined by the engineering teams, and the data is routed accordingly without any manual intervention. The entire flow of data extraction, transformation, combination, and validation and the convergence of data from multiple streams into one are completely automated.
这些管道在工程团队预先定义的一套规则上工作，数据被相应地路由，而没有任何人工干预。数据提取、转换、组合和验证的整个流程，以及将多个数据流汇聚成一个数据流，都是完全自动化的。

Data pipelines also facilitate parallel processing of data via managing multiple streams. I'll talk more about distributed data processing in the upcoming lesson.
数据管道还通过管理多个数据流促进数据的并行处理。我将在接下来的课程中更多地谈论分布式数据处理。

Traditionally we used _ETL_ systems to manage all of the data's movement, but one major limitation is they don't really support handling real-time streaming data, which is possible with new era-evolved data processing infrastructure powered by the data pipelines.
传统上，我们使用 ETL 系统来管理所有数据的移动，但一个主要的限制是它们并不真正支持处理实时流数据，而在数据管道的支持下，新时代发展的数据处理基础设施是可以做到的。

## What is ETL? [#](https://www.educative.io/courses/web-application-software-architecture-101/NEGQ8PPMDjN#What-is-ETL?)
什么是 ETL？

If you haven't heard of ETL before, it means Extract Transform Load.
如果你以前没有听说过 ETL，它的意思是提取转化加载。

**Extract** means fetching data from single or multiple data sources.
提取意味着从单个或多个数据源获取数据。

**Transform** means transforming the _extracted_ heterogeneous data into a standardized format based on the rules set by the business.
转换是指根据企业设定的规则，将提取的异质数据转换为标准化的格式。

**Load** means moving the _transformed_ data to a data warehouse or another data storage location for further processing of data.
加载是指将转换后的数据转移到数据仓库或其他数据存储位置，以便进一步处理数据。

The _ETL_ flow is the same as the _data ingestion_ flow. The difference is just that the entire movement of data is done in batches as opposed to streaming it through the data pipelines in real-time.
ETL 的流程与数据摄取的流程是一样的。不同的是，整个数据的移动是分批进行的，而不是实时通过数据管道流。

Also, at the same time, it doesn't mean the _batch processing_ approach is obsolete. Both real-time and batch data processing techniques are leveraged based on the project requirements.
另外，与此同时，这并不意味着批处理方法已经过时。根据项目要求，实时和批量数据处理技术都被利用。

You'll gain more insight into it when we go through the _Lambda_ and _Kappa_ architectures of distributed data processing in the upcoming lessons.
在接下来的课程中，当我们通过分布式数据处理的 Lambda 和 Kappa 架构时，你将获得更多的了解。

In the previous lesson, I brought up a few of the popular data processing tools, such as _Apache Flink_, _Storm_, _Spark_, _Kafka_, etc. All these tools have one thing in common they facilitate processing data in a cluster in a distributed environment via data pipelines.
在上一课中，我提出了一些流行的数据处理工具，如 Apache Flink、Storm、Spark、Kafka 等。所有这些工具都有一个共同点，它们通过数据管道促进分布式环境中的集群数据处理。

 [This Netflix case study is a good read on how they migrated batch ETL to Stream processing using Kafka and Flink](https://www.infoq.com/articles/netflix-migrating-stream-processing/)
这个 Netflix 的案例研究是一个很好的阅读，他们是如何使用 Kafka 和 Flink 将批量 ETL 迁移到流处理的。

What is distributed data processing? How does it work? We are going to look into this in the next lesson. Stay tuned.
什么是分布式数据处理？它是如何工作的？我们将在下一课中研究这个问题。敬请关注。

---

笔记：

数据管道是数据处理基础设施的核心组成部分，它们促进了数据从一个点到另一个点的有效流动，也使开发人员能够对实时流入的数据应用过滤器。

数据管道的特点：
- 确保数据顺利流动
- 使企业能够在流数据上应用过滤器和业务逻辑
- 避免数据流中的任何瓶颈和冗余
- 促进数据并行处理
- 避免数据被破坏

数据管道在工程团队预先定义的一套规则上工作，数据被相应地路由，没有任何人工干预。数据提取、转换、组合和验证的整个流程，以及将多个数据流汇聚成一个数据流，都是完全自动化的。

ETL(Extract Transform Load)：提取、转化、加载。
提取意味着从单个或多个数据源获取数据。
转换是指根据企业设定的规则，将提取的异质数据转换为标准化的格式。
加载是指将转换后的数据转移到数据仓库或其他数据存储位置，以便进一步处理数据。
ETL 的流程与数据摄取的流程相同。不同的是整个数据的移动是分批进行的。
