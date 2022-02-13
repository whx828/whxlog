In this lesson, we will discuss a case study for a web-based mapping service like Google Maps.
在本课中，我们将讨论基于 Web 的地图服务（如 Google 地图）的案例研究。

Before I begin talking about the service's architecture, I would like to state that this is not a system design lesson because it doesn't contain any of the database design, traffic estimations, or code of any sort.
在我开始谈论服务的架构之前，我想说明这不是一个系统设计课，因为它不包含任何数据库设计、流量估计或任何形式的代码。

I will just discuss the basic architectural aspects of the service and how the concepts we've learned in the course apply here.
我将只讨论服务的基本架构方面，以及我们在课程中学到的概念如何在这里应用。

Let's get on with it.
让我们继续吧。

## A little background on Google Maps [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#A-little-background-on-Google-Maps)
关于谷歌地图的一点背景

_ [Google Maps](https://cloud.google.com/maps-platform/) _ is a web-based mapping service by _Google_. It offers satellite imagery, route planning features, real-time traffic conditions, an API for writing map-based games like _Pokémon Go_, and several other features.
谷歌地图是谷歌推出的基于网络的地图服务。它提供卫星图像、路线规划功能、实时交通状况、用于编写 Pokémon Go 等基于地图的游戏的 API，以及其他一些功能。

First up, these massive and successful services are a result of years of evolution and iterative development. Online services are built feature by feature and take years to perfect. _Google Maps_ started as a desktop-based software written in _C++_ and evolved over the years to become what it is today, a beautiful mapping service used by over a billion users.
首先，这些庞大而成功的服务是多年来演变和迭代发展的结果。在线服务的功能是逐一建立的，需要多年时间才能完善。谷歌地图最初是一个用 C++ 编写的基于桌面的软件，经过多年的发展，直到今天成为一个被超过 10 亿用户使用的漂亮的地图服务。

## Read-heavy application [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Read-heavy-application)
阅读量大的应用

Let's get down to the technicalities of it. An application like this is _read-heavy_ and not _write-heavy_. Since the end-users aren't generating new content in the application over time, users do perform some write operations though it is negligible in comparison to a write-heavy application like _Twitter_ or _Instagram_. This means the data can be largely cached and there will be significantly less load on the database.
让我们来谈谈它的技术问题。像这样的应用程序是着重读的，而不是着重写。由于终端用户并没有在应用程序中长期产生新的内容，用户确实进行了一些写操作，尽管与 Twitter 或 Instagram 这样的写重度应用程序相比，它可以忽略不计。这意味着数据可以在很大程度上被**缓存**，对数据库的负载也会大大降低。

## Data Type: Spatial [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Data-Type:-Spatial)
数据类型：空间型

Speaking of data, a mapping application like this has _spatial data_. _Spatial data_ is the data with objects representing geometric information like points, lines, polygons. The data also contains alphanumeric information, like _ [Geohash](https://en.wikipedia.org/wiki/Geohash) _, latitudes, longitudes, _GIS Geographical Information System_ data, etc.
说到数据，像这样的地图应用有空间数据。空间数据是具有代表几何信息的对象的数据，如点、线、多边形。这些数据还包含字母数字信息，如 Geohash、纬度、经度、GIS 地理信息系统数据等。

There are dedicated _spatial databases_ available for persisting this kind of data. Popular databases like _MySQL_, _ [MongoDB](https://docs.mongodb.com/manual/core/geospatial-indexes/) _, _ [CouchDB](https://github.com/couchbase/geocouch/) _, _Neo4J_, _ [Redis](https://github.com/EverythingMe/geodis) _, and _ [Google Big Query GIS](https://cloud.google.com/bigquery/docs/gis-intro) _ also support persistence of _spatial data_. They have additional plugins built for it.
有专门的空间数据库可用于持久保存这类数据。流行的数据库如 MySQL、MongoDB、CouchDB、Neo4J、Redis 和 Google Big Query GIS 也支持空间数据的持久性。他们有额外的插件为其构建。

If you want to read more about spatial databases, [this is a good read](https://en.wikipedia.org/wiki/Spatial_database) .
如果你想了解更多关于空间数据库的信息，这是一本好书。

## Database [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Database)
数据库

The coordinates of the places are persisted in the database. When the user runs a search for a specific location, the coordinates are fetched from the database, and the numbers are converted into a map image.
地方的坐标被持久化在数据库中。当用户运行一个特定地点的搜索时，坐标被从数据库中获取，数字被转换为地图图像。

We can expect a surge in traffic on the service during peak office hours or festivals or major events in the city. We need dynamic _horizontal scalability_, to manage these traffic spikes. The app needs to be _elastic_ to scale up and down on the fly.
我们可以预计，在办公高峰期或城市的节日或重大活动期间，该服务的流量会激增。我们需要动态的横向扩展能力，以管理这些流量高峰。该应用程序需要具有弹性，以便在运行中扩大和缩小。

As I mentioned earlier, we have the option of picking from multiple databases as both _relational_ and _non-relational_ support persistence of _spatial data_. I am more inclined to pick a _non-relational NoSQL_ one because the map data doesn't contain many relationships. It directly fetches the coordinates and processes them based on the user request. Also, a _NoSQL_ database is inherently _horizontally scalable_.
正如我前面提到的，我们可以从多个数据库中选择，因为关系型和非关系型数据库都支持空间数据的持久性。我更倾向于挑选一个非关系型的 NoSQL，因为地图数据不包含很多关系。它直接获取坐标并根据用户的要求进行处理。另外，NoSQL 数据库本身是可以横向扩展的。

Though, we can also scale well with a _relational database_ with _caching_ because the application is read-heavy. However, in _real-time_ use cases with a lot of updates, it will be a bit of a challenge.
虽然，我们也可以用带有缓存的关系型数据库进行良好的扩展，因为应用程序是着重读的。然而，在有大量更新的实时用例中，这将是一个有点挑战的问题。

_Real-time_ features like _LIVE_ traffic patterns, information on congested routes, and the alternative routes suggestions as we drive in real-time, etc. are pretty popular with the _Google Maps_ users.
实时功能，如实时交通模式、拥堵路线的信息，以及在我们开车时的替代路线建议等，在谷歌地图用户中相当受欢迎。

## Architecture [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Architecture)
架构

Naturally, to set up a service like this we will pick a _client-server_ architecture as we need control over the service. Otherwise, we could have thought about the _P2P_ architecture, but _P2P_ won't do us any good here.
当然，为了建立这样的服务，我们会选择一个 客户端-服务器 架构，因为我们需要对服务进行控制。否则，我们可以考虑 P2P 架构，但 P2P 在这里对我们没有任何好处。

## Backend technology [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Backend-technology)
后端技术

Speaking of the server-side language we can pick _Java_, _Scala_, _Python_, and _Go_. Any of the mature backend technology stacks will do. My personal pick will be _Java_, because it is performant and heavily used for writing scalable distributed systems, and for the enterprise development.
说到服务器端语言，我们可以选择 Java、Scala、Python 和 Go。任何一个成熟的后端技术栈都可以。我个人的选择是 Java，因为它性能很好，而且大量用于编写可扩展的分布式系统，也用于企业开发。

## Monolith vs microservice [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Monolith-vs-microservice)
单体与微服务

Speaking of _monolithic architecture_ vs _microservice_, which one do you think we should pick to write the app?
说到单体架构与微服务，你认为我们应该选择哪一种来编写应用程序？

Let's figure this out by going through the features of the service. The core feature is the map search. The service also enables us to plan our routes based on different modes of travel, including cars, walking, cycling, etc.
让我们通过服务的功能来弄清楚这个问题。核心功能是地图搜索。该服务还使我们能够根据不同的旅行方式来计划我们的路线，包括汽车、步行、自行车等。

Once our trip starts, the map offers alternative route locations in real-time. The service adjusts the map based on the user's real-time location and the destinations.
一旦我们的旅行开始，地图就会实时提供替代路线的位置。该服务会根据用户的实时位置和目的地来调整地图。

### APIs [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#APIs)
APIs

For the third-party developers, _Google_ offers different _APIs_ such as the _Direction API_, _Distance Matrix_, _Geocoding_, _Places_, _Roads_, _Elevation_, _Time zone_, and _Custom search API_.
对于第三方开发者，谷歌提供不同的 API，如方向 API、距离矩阵、地理编码、地点、道路、海拔、时区和自定义搜索 API。

The _Distance Matrix API_ tells us how much time it will take to reach a destination depending on the mode of travel: walking, flying, or driving. _Real-time_ alternative routes are displayed with the help of predictive modelling based on machine learning algorithms. The _Geocoding API_ is about converting numbers into actual places and vice versa.
距离矩阵 API 告诉我们到达一个目的地需要多少时间，这取决于旅行方式：步行、飞行或驾驶。在基于机器学习算法的预测模型的帮助下，会显示实时的替代路线。地理编码 API 是关于将数字转换为实际地点，反之亦然。

_Google Maps_ also has a _Gaming API_ for building map-based games.
谷歌地图也有一个游戏 API，用于构建基于地图的游戏。

![[Mapping Service.png]]

We may not have to implement everything in the first release, but this gives us a clue that _monolithic architecture_ is totally out of the picture.
我们可能不需要在第一个版本中实现所有的功能，但这给我们提供了一个线索，即单体架构完全不适用。

We need _microservices_ to implement so many different functionalities. Let's write a separate service for every feature. This is a cleaner approach, and it helps the service scale and stay highly available. If a few services like real-time traffic, elevation API, etc. go down, the core search remains unaffected.
我们需要微服务来实现这么多不同的功能。让我们为每个功能写一个单独的服务。这是一种更简洁的方法，它有助于服务的扩展和保持高度的可用性。如果有几个服务，如实时交通、海拔 API 等发生故障，核心搜索仍然不受影响。

## Server-side rendering of map tiles [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Server-side-rendering-of-map-tiles)
地图瓦片的服务器端渲染

Speaking of the core location search service, when the user searches for a specific location, the service has to match the search text with the name of the location in the database and pull up the place's coordinates.
说到核心位置搜索服务，当用户搜索一个特定的位置时，该服务必须将搜索文本与数据库中的位置名称相匹配，并调出该地的坐标。

Once the service has the coordinates how do we convert those into an image? Also, should we render the image on the client or the server?
一旦服务有了坐标，我们如何将这些坐标转换成图像？另外，我们应该在客户端还是在服务器上渲染图像？

_Server-side rendering_ is a preferable option in this scenario because we can cache the rendered image for future requests. The image is a kind of static content and will be the same for all the users.
在这种情况下，服务器端渲染是一个更好的选择，因为我们可以为未来的请求缓存已渲染的图像。图像是一种静态内容，对所有用户来说都是一样的。

Also, as opposed to generating a single map image for the full web page, the entire map is broken down into tiles that enable the system to generate only the part of the map that the user engages with.
另外，相对于为整个网页生成单一的地图图像，整个地图被分解成瓦片，使系统只生成用户参与的那部分地图。

Smaller tiles help with the zoom in and out operations. You might have noticed this when using _Google Maps_. Instead of the entire web page being refreshed, the map is refreshed in sections or tiles. Rendering the entire map instead of tiles every time would be very resource intensive.
较小的瓦片有助于放大和缩小操作。你在使用谷歌地图时可能已经注意到这一点。地图不是整个网页被刷新，而是分部分或分块被刷新。每次都渲染整个地图而不是磁贴，会非常消耗资源。

We can create the map in advance by rendering it on the server and caching the tiles. Also, we need a dedicated map server to render the tiles on the backend.
我们可以通过在服务器上渲染地图并缓存地砖来提前创建地图。另外，我们需要一个专门的地图服务器来在后端渲染地砖。

![[Location Search Service Module.png]]

## User Interface [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#User-Interface)
用户界面

Speaking of the _UI_, we can write this using _JavaScript_, _Html5_. Simple _JavaScript_, _Jquery_ serves me well for simple requirements. However, if you want to leverage a framework, you can look into _React_, _Angular_, etc.
说到用户界面，我们可以用 JavaScript、Html5 来写。简单的 JavaScript，Jquery 可以很好地满足我的简单要求。然而，如果你想利用一个框架，你可以研究一下 React、Angular 等。

The _UI_ having _JavaScript_ events enables the user to interact with the map, pin locations, search for places, draw markers and other vectors on the map, etc.
拥有 JavaScript 事件的 UI 使用户能够与地图互动，钉住位置，搜索地方，在地图上绘制标记和其他矢量，等等。

_ [OpenLayers](https://openlayers.org/) _ is a popular open-source _UI_ library for making maps work with web browsers. You can leverage it if you do not want to write everything from the ground up.
OpenLayers 是一个流行的开源 UI 库，用于使地图在网络浏览器上运行。如果你不想从头开始写所有东西，你可以利用它。

Okay!! So, the user runs a search for a location, on the backend, and the request is routed to the tile cache, which has all the pre-generated tiles. It sits between the UI and the map server. If the requested tile is present in the cache it is sent to the UI. If not, the map server hits the database, fetches the coordinates and related data, and generates the tile.
好了！所以，用户在后端对一个地点进行搜索，然后请求被路由到瓦片缓存，其中有所有预先生成的瓦片。它位于用户界面和地图服务器之间。如果请求的瓦片存在于缓存中，它就被发送到用户界面。如果没有，地图服务器就会点击数据库，获取坐标和相关数据，并生成瓦片。

## Real-time features [#](https://www.educative.io/courses/web-application-software-architecture-101/gkkXoVkJzmj#Real-time-features)
实时功能

Let's move onto to the _real-time_ features. To implement real-time features, we have to establish a _persistent connection_ with the server. We've gone through the _persistent connections_ in detail in the course.
让我们继续讨论实时功能。为了实现实时功能，我们必须与服务器建立一个持久的连接。我们已经在课程中详细介绍了持久性连接。

Although _real-time_ features are cool, they are very resource intensive. There is a limit to the number of _concurrent connections_ servers can handle. So, I'll advise implementing real-time features only when it's really required.
虽然实时功能很酷，但它们非常耗费资源。服务器能够处理的并发连接数是有限制的。因此，我建议只有在真正需要时才实施实时功能。

This is a good read on the topic. [How Hotstar a video streaming service scaled with over 10 million concurrent users](https://www.8bitmen.com/how-hotstar-scaled-with-10-3-million-concurrent-users-an-architectural-insight/)
这是关于这个主题的一篇好文章。Hotstar 是如何将视频流媒体服务扩展到超过 1000 万并发用户的？

Well, this is pretty much it for web-based mapping services. We've covered the backend, database, caching, and the UI, and you should have a fundamental understanding of how a service like _Google Maps_ works.
好了，基于网络的地图服务就到此为止了。我们已经涵盖了后台、数据库、缓存和用户界面，你应该对像谷歌地图这样的服务的工作方式有了基本的了解。

I'll see you in the next lesson, where we will discuss a baseball game online ticket booking service.
下一课再见，我们将讨论一个棒球比赛的在线票务预订服务。
