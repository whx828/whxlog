The next step in securing our website is maintaining a safe and efficient database. Let's find out how.
保护我们网站的下一步是维护一个安全有效的数据库。让我们来了解一下。

Apart from testing our user interface and API functionality, we need to make sure our databases are working properly.
除了测试我们的用户界面和 API 功能，我们需要确保我们的数据库正常工作。

Databases are fundamental to our website as the communication between us and the user depends on data manipulation on the databases. Users retrieve and store data through the user interface. Hence, frontend testing for the UI is pointless if the backend database doesn't work properly.
数据库是我们网站的基础，因为我们和用户之间的沟通取决于对数据库的数据操作。用户通过用户界面检索和存储数据。因此，如果后端数据库不能正常工作，前端的 UI 测试就毫无意义。

As we've learned, there are two types of databases, relational (Oracle, SQL) and non-relational (MongoDB, CouchDB) databases, both of which require different approaches for testing. Visit the [Web Development](https://www.educative.io/collection/page/10370001/5668847440887808/5709414212304896) course for a quick refresher on the definitions of the two database systems.
正如我们所了解的，有两种类型的数据库，关系型（Oracle，SQL）和非关系型（MongoDB，CouchDB）数据库，这两种数据库都需要不同的测试方法。请访问网站开发课程，快速复习一下这两种数据库系统的定义。

With that in my mind, let's talk about testing the conventional relational databases.
考虑到这一点，让我们来谈谈对传统关系型数据库的测试。

## Relational Databases [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/xV7wJPrKO0r#Relational-Databases)

A relational or SQL database should be tested for the following properties:
一个关系型或 SQL 型数据库应该针对以下属性进行测试：

- The database must follow the ACID and CRUD principles.
数据库必须遵循 ACID 和 CRUD 原则。

- Our database must appropriately store and retrieve data. Queries must consistently return the correct results across all users. **TOAD** and **phpMyAdmin** are very convenient automated query tools.
我们的数据库必须适当地存储和检索数据。查询必须在所有用户中一致地返回正确的结果。TOAD 和 phpMyAdmin 是非常方便的自动查询工具。

- The fields in our database must correctly match the fields in the frontend interface. This is called _mapping_. **DBUnit** with **Ant** tests database-frontend mapping. Field constraints must be consistent at both ends.
我们数据库中的字段必须与前端界面中的字段正确匹配。这就是所谓的映射。带有 Ant 的 DBUnit 测试数据库和前端的映射。字段约束必须在两端一致。

- The database must not collapse under load or stress (several multiple read/write operations). **HammerDB** is a good option to carry out load tests.
数据库在负载或压力下不能崩溃（几个多次读/写操作）。HammerDB 是进行负载测试的一个好选择。

- If information in one table is modified, all linked tables must update themselves accordingly. If there is a fault in interconnectivity, the whole site's functionality is at stake.
如果一个表中的信息被修改，所有链接的表必须相应地更新自己。如果互连性出现故障，整个网站的功能就会受到威胁。

### Security Testing [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/xV7wJPrKO0r#Security-Testing)
安全测试

- The DB must be resistant against SQL injections. **Vega** and **Wapiti** are open source tools suitable for SQL injection testing.
DB 必须能够抵御 SQL 注入。Vega 和 Wapiti 是适用于 SQL 注入测试的开源工具。

- Unauthorized access is a common attack on SQL databases. This can be avoided by fortifying user authentication checks.
未经授权的访问是对 SQL 数据库的一种常见攻击。这可以通过加强用户认证检查来避免。

- We must perform penetration testing to check for vulnerabilities in the logic of our DB system. One of the most popular penetration testing tools is **Zed Attack Proxy**.
我们必须进行渗透测试，以检查我们的 DB 系统的逻辑中的漏洞。最流行的渗透测试工具之一是 Zed Attack Proxy。

- Denial of Service attacks can make databases unusable, which is really bad for our website! However, these attacks have to be prevented on the network layer.
拒绝服务攻击可以使数据库无法使用，这对我们的网站来说真的很糟糕! 然而，这些攻击必须在网络层加以预防。

## Non-Relational Databases [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/xV7wJPrKO0r#Non-Relational-Databases)

Non-relational (NoSQL) databases are simpler in terms of structure, and hence, require a lower degree of testing. However, there are still some crucial factors that need to be tested in order to make our website's backend free of flaws.
非关系型（NoSQL）数据库在结构上比较简单，因此，需要的测试程度较低。然而，仍有一些关键因素需要测试，以使我们网站的后台没有缺陷。

- The format of the data objects should be consistent. We can check this by performing a few queries. This sort of unit testing can be done using **NoSQLUnit**, which supports several languages including MongoDB.
数据对象的格式应该是一致的。我们可以通过执行一些查询来检查这一点。这种单元测试可以使用 NoSQLUnit 完成，它支持包括 MongoDB 在内的几种语言。

- We must test data conversions between the backend and the frontend.
我们必须测试后端和前端之间的数据转换。

- For continuous integration in databases, **Travis CI** is a wonderful option as it supports several NoSQL languages. Testing is also isolated and does not affect the original state of the application.
对于数据库的持续集成，Travis CI 是一个很好的选择，因为它支持几种 NoSQL 语言。测试也是隔离的，不会影响应用程序的原始状态。

### Security Testing [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/xV7wJPrKO0r#Security-Testing)

- We must make sure that our data objects are encrypted.
我们必须确保我们的数据对象是加密的。

- User authentication should be thorough and secure.
用户认证应该是彻底和安全的。

- NoSQL databases can also be subject to injection attacks by providing a JSON file in a field (assuming our backend stores JSON files). For more details on JSON injections, check out the examples mentioned [here](https://owasp.org/www-community/attacks/SQL_Injection) .
NoSQL 数据库也可以通过在字段中提供 JSON 文件而受到注入攻击（假设我们的后端存储 JSON 文件）。

