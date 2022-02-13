In this lesson, we will discuss the time series database and when to choose it for our projects.
在本课中，我们将讨论时间序列数据库以及何时为我们的项目选择它。

## What is a time-series database? [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#What-is-a-time-series-database?)
什么是时间序列数据库？

_Time-series_ databases are optimized for tracking and persisting time series data.
时间序列数据库是为跟踪和持久保存时间序列数据而优化的。

## What is time-series data? [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#What-is-time-series-data?)
什么是时间序列数据？

It is the data containing data points associated with the occurrence of an event with respect to time. These data points are tracked, monitored, and then aggregated based on certain business logic.
它是包含与一个事件的发生有关的时间的数据点的数据。这些数据点被跟踪、监测，然后根据某些业务逻辑进行汇总。

_Time-series_ data is generally ingested from IoT devices, self-driving vehicles, industry sensors, social networks, stock market financial data etc.
时间序列数据一般从物联网设备、自动驾驶汽车、行业传感器、社交网络、股票市场金融数据等处摄取。

So, what is the need for storing such a massive amount of _time-series_ data?
那么，存储如此大量的时间序列数据的需求是什么？

## Why store time-series data? [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#Why-store-time-series-data?)
为什么要存储时间序列数据？

Studying data, streaming-in from applications helps us track the behavior of the system. It helps us study user patterns, anomalies, and how things change over time.
研究数据，从应用中流进来的数据有助于我们跟踪系统的行为。它帮助我们研究用户模式、异常情况，以及事情如何随时间变化。

_Time-series_ data is primarily used for running analytics, deducing conclusions and making future business decisions by looking at the results of the analytics. Running analytics also helps the product evolve continually.
时间序列数据主要用于运行分析，推断结论，并通过观察分析结果做出未来的商业决策。运行分析也有助于产品的不断发展。

General databases are not built to handle _time-series_ data. With the advent of IoT, these databases are getting pretty popular and are being adopted by the big guns in the industry.
一般的数据库不是为处理时间序列数据而建立的。随着物联网的出现，这些数据库正变得相当流行，并被行业中的大佬们采用。

## Popular time-series databases [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#Popular-time-series-databases)
流行的时间序列数据库

Some of the popular _time-series_ databases used in the industry are _Influx DB_, _Timescale DB_, _Prometheus_, etc.
行业内使用的一些流行的时间序列数据库有 Influx DB、Timescale DB、Prometheus 等。

## When to pick a time-series database? [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#When-to-pick-a-time-series-database?)
什么时候选择时间序列数据库？

If you have a use case where you need to manage data in real-time and continually over a long period of time, a _time-series_ database is what you need.
如果你有一个用例，需要实时和持续地在很长一段时间内管理数据，那么时间序列数据库就是你需要的。

As you know, _time-series_ databases are built to deal with data streaming in real-time. Its typical use cases are fetching data from IoT devices, managing data for running analytics and monitoring, writing an autonomous trading platform that deals with changing stock prices in real-time, etc.
如你所知，时间序列数据库是为了处理实时的数据流而建立的。它的典型用例是从物联网设备中获取数据，为运行分析和监测管理数据，编写一个自主交易平台，实时处理不断变化的股票价格，等等。

## Real-life implementations [#](https://www.educative.io/courses/web-application-software-architecture-101/7nVw0ZWxM9w#Real-life-implementations)
现实生活中的实施

_Here are some of the real-life implementations of the tech: _
以下是该技术在现实生活中的一些实施情况：

- [IBM uses Influx DB to run analytics for real-time cognitive fraud detection](https://www.influxdata.com/customer/ibm/)
IBM 使用 Influx DB 来运行分析，进行实时认知欺诈检测

- [Spiio uses Influx DB to remotely monitor vertical lining green walls and plant installations.](https://www.influxdata.com/customer/customer_case_study_spiio/)
Spiio 使用 Influx DB 来远程监控垂直衬砌绿墙和植物安装。

---

笔记：

时间序列数据：包含与一个事件的发生有关的时间的数据点的数据，这些数据点被跟踪、监测，然后根据某些业务逻辑进行汇总。时间序列数据主要用于运行分析，推断结论，并通过观察分析结果做出未来的商业决策。
时间序列数据库：为跟踪和持久保存时间序列数据而专门优化的数据库。随着物联网的出现，时间序列数据库正变得相当流行，并被行业中的大佬们采用。
