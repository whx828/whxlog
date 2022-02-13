In this lesson, you will gain insight into the process of data ingestion.
在本课程中，您将深入了解数据摄取过程。

## What is data ingestion? [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#What-is-data-ingestion?)
什么是数据摄取？

> _Data ingestion_ is a collective term for the process of collecting data streaming in from several different sources and making it ready to be processed by the system.
> 数据摄取是收集从几个不同来源流进来的数据并使其准备好被系统处理的过程的统称。

In a data processing system, the data is ingested from the IoT devices and other sources into the system to be analyzed. It is routed to different components/layers through the _data pipelines_, algorithms are run on it, and it is eventually archived.
在数据处理系统中，数据从物联网设备和其他来源摄取到系统中进行分析。它通过数据管道被路由到不同的组件/层，在上面运行算法，并最终被归档。

## Layers of data processing setup [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Layers-of-data-processing-setup)
数据处理设置的层数

There are several stages/layers to this whole data processing setup such as the:
整个数据处理设置有几个阶段/层，如：

- Data collection layer
数据收集层
- Data query layer
数据查询层
- Data processing layer
数据处理层
- Data visualization layer
数据可视化层
- Data storage layer
数据存储层
- Data security layer
数据安全层

![[Data Ingestion.png]]

As you can see in the diagram all the data processing layers are pretty self-explanatory.
正如你在图中看到的，所有的数据处理层都是不言而喻的。
## Data standardization [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Data-standardization)
数据标准化

The data, which streams in from several different sources, is not in a homogeneous structured format. We have already gone through different types of data, including structured, unstructured, and semi-structured, in the database lesson. So, you have an idea of what unstructured heterogeneous data is.
从几个不同的来源流入的数据，并不是以同质的结构化格式出现的。我们已经在数据库课程中了解了不同类型的数据，包括结构化、非结构化和半结构化。因此，你对什么是非结构化的异质数据有了一个概念。

Data streams-in into the system at different speeds and sizes from web-based services, social networks, IoT devices, industrial machines, and whatnot. Every stream of data has different semantics.
数据以不同的速度和大小从基于网络的服务、社交网络、物联网设备、工业机器等处流进系统。每个数据流都有不同的语义。

So, in order to make the data uniform and fit for processing, it has to be first collected and converted into a standardized format to avoid any future processing issues. This data standardization process occurs in the _data collection and preparation layer_.
因此，为了使数据统一并适合处理，必须首先收集并转换为标准化的格式，以避免将来出现任何处理问题。这个数据标准化过程发生在数据收集和准备层。

## Data processing [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Data-processing)
数据处理

Once the data is transformed into a standard format, it is routed to the _data processing layer_ where it is further processed based on the business requirements. It is generally classified into different flows and routed to different destinations.
一旦数据被转换为标准格式，它就会被送到数据处理层，在那里根据业务要求进一步处理。它通常被分类为不同的流，并被路由到不同的目的地。

## Data analysis [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Data-analysis)
数据分析

After being routed, analytics are run on the data. This includes the execution of different analytics models such as predictive modeling, statistical analytics, text analytics, etc. All the analytical events occur in the _data Analytics layer_.
在被路由后，分析被运行在数据上。这包括执行不同的分析模型，如预测建模、统计分析、文本分析等。所有的分析事件都发生在数据分析层。

## Data visualization [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Data-visualization)
数据可视化

Once the analytics are run and we have valuable intel from it, all the information is routed to the _data visualization layer_ to be presented before the stakeholders, generally in a web-based dashboard.
一旦分析运行完毕，我们从中获得了有价值的情报，所有的信息都会被传送到数据可视化层，呈现在利益相关者面前，一般是基于网络的仪表盘上。

_Kibana_ is one good example of a data visualization tool.
Kibana 是数据可视化工具的一个好例子。

## Data storage and security [#](https://www.educative.io/courses/web-application-software-architecture-101/R1X5ERQk7Q0#Data-storage-and-security)
数据存储和安全

Moving data is highly vulnerable to security breaches. _The data security layer_ ensures the secure movement of data all along. Speaking of the _data Storage layer_, as the name implies, is instrumental in persisting the data.
移动数据极易受到安全漏洞的影响。数据安全层确保了数据的安全移动，一直以来。说到数据存储层，顾名思义，就是在持久化数据方面起作用。

So, this is the gist of how massive amounts of data are processed and analyzed for business use cases. This is just a bird's eye view of things. The field of data analytics is pretty deep, and an in-depth detailed microscopic view of each layer demands a dedicated data analytics course for itself.
所以，这就是海量数据如何被处理和分析用于商业用途的要点。这只是事情的一个鸟瞰图。数据分析领域是相当深入的，对每一层的深入详细的微观观察需要一个专门的数据分析课程。

Alright, let's take a look at the different ways in which data can be ingested.
好吧，让我们来看看数据被摄入的不同方式。

---

笔记：

数据摄取：收集从几个不同来源流进来的数据并使其准备好被系统处理的过程的统称。
在数据处理系统中，数据从物联网设备和其他来源摄取到系统中进行分析。它通过数据管道被路由到不同的组件/层，在上面运行算法，并最终被归档。

数据处理分为以下几层：
- 数据收集层
- 数据查询层
- 数据处理层
- 数据可视化层
- 数据存储层
- 数据安全层
