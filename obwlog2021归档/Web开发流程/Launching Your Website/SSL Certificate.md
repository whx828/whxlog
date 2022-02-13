This lesson deals with making the connection between us and our users more secure.
本课涉及到使我们与用户之间的连接更加安全。

## A Safer Approach [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#A-Safer-Approach)

We've finally implemented client-server communication by deploying our website on the web. Till now, our domain name has been preceded by `http://`. However, you might have noticed that many sites follow the `https://` protocol instead. This is because HTTPS, or Hyper Text Transfer Protocol Secure, is the safer form of the HTTP protocol.
通过在网络上部署我们的网站，我们终于实现了客户端-服务器通信。到现在为止，我们的域名前面都是 `http://` 。但是，您可能已经注意到许多站点都遵循 `https://` 协议。这是因为 HTTPS 或安全超文本传输协议是 HTTP 协议的更安全形式。

## How does HTTPS work? [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#How-does-HTTPS-work?)

HTTPS uses the private and public keys encryption method to encrypt the communication between the website and the server. As website creators, we acquire two keys, **public** and **private**. These are long strings used to encrypt messages.
HTTPS 使用私钥和公钥加密方法对网站和服务器之间的通信进行加密。作为网站创建者，我们获得两个密钥，公钥和私钥。这些是用于加密消息的长字符串。

Our public key is available to everyone. If a user interacts with our application, his/her data is encrypted by the public key and is transmitted to the server.
我们的公钥可供所有人使用。如果用户与我们的应用程序交互，他/她的数据将通过公钥加密并传输到服务器。

The interesting part is that the encrypted data can only be decrypted using the private key, which no one other than us knows. Hence, hackers can get their hands on the encrypted message, but they won't be able to make sense out of it.
有趣的是，加密的数据只能使用私钥解密，除我们之外没有人知道。因此，黑客可以拿到加密的消息，但他们无法理解它。

## Advantages of Using HTTPS [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Advantages-of-Using-HTTPS)

HTTPS ensures that personal information such as passwords and credit card details is transmitted over a secure connection which won't allow anyone else to access it. HTTP was vulnerable to such attacks.
HTTPS 可确保密码和信用卡详细信息等个人信息通过安全连接传输，其他任何人都无法访问该连接。 HTTP 容易受到此类攻击。

Because of this reason, customers are usually more inclined towards HTTPS websites as they are more secure. This increases traffic as well.
由于这个原因，客户通常更倾向于使用 HTTPS 网站，因为它们更安全。这也增加了流量。

Google, the primary search engine of our generation, ranks a site higher in searches if it follows the HTTPS protocol.
谷歌是我们这一代的主要搜索引擎，如果它遵循 HTTPS 协议，那么它在搜索中的排名会更高。

## Shifting Over to HTTPS [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Shifting-Over-to-HTTPS)

So how does one shift to HTTPS? This is where the **SSL certificate** comes into play. By acquiring this certificate and installing it on our web server, we can achieve HTTPS status.
那么如何转向 HTTPS 呢？这就是 SSL 证书发挥作用的地方。通过获取此证书并将其安装在我们的 Web 服务器上，我们可以获得 HTTPS 状态。

The certificate is also signed by our public key, which everyone else will use to encrypt communication.
该证书也由我们的公钥签名，其他人将使用它来加密通信。

SSL certificates can be purchased (permanently) or acquired for free (usually for a fixed time interval).
SSL 证书可以购买（永久）或免费获取（通常在固定的时间间隔内）。

We can earn an SSL certificate if we are using a dedicated or cloud host. For VPS and shared servers, we need to ask our server administrator to acquire the certificate.
如果我们使用专用或云主机，我们可以获得 SSL 证书。对于 VPS 和共享服务器，我们需要让我们的服务器管理员获取证书。

The process involves submitting a request to a Certified Authority. We must generate a **certificate signing request** (CSR) from our server. This request will contain the information which the Authority will use to grant us an SSL certificate. But before we do that, we need to get familiarized with the different types of SSL certificates.
该过程涉及向认证机构提交请求。我们必须从我们的服务器生成证书签名请求 (CSR)。此请求将包含当局将用于授予我们 SSL 证书的信息。但在此之前，我们需要熟悉不同类型的 SSL 证书。

### Types of SSL Certificates [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Types-of-SSL-Certificates)

There are three main types of certifications provided by Certified Authors. Let's discuss them one by one.
认证作者提供的认证主要有三种类型。让我们来逐一讨论它们。

#### Domain Validation [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Domain-Validation)

This is the simplest and least expensive form of certification. The Certified Author (CA) confirms that we have control over our domain. This can be done by altering our site's domain name in front of the CA, so that it can verify that the domain name is indeed ours. The process isn't very long and we end up with an HTTPS connection.
这是最简单、最省钱的认证形式。认证作者（CA）确认我们对我们的域名有控制权。这可以通过在 CA 面前改变我们网站的域名来实现，这样它就可以验证该域名确实是我们的。这个过程并不长，我们最终会有一个 HTTPS 连接。

#### Organization Validation [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Organization-Validation)

This is a step higher since the CA validates our basic information as well including the person or company's name and location. These details are displayed on the certificate.
这是一个更高的步骤，因为 CA 也验证了我们的基本信息，包括个人或公司的名称和地点。这些细节会显示在证书上。

#### Extended Validation [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Extended-Validation)

An extended validation certificate is the highest form of validation our website can receive. Along with all the details verified in the previous methods, the CA will also confirm our legal status. This process can take up to a few weeks. If we opt for this validation, then our website's name will appear before the URL:
扩展验证证书是我们的网站可以获得的最高形式的验证。除了在前面的方法中验证的所有细节外，CA 还将确认我们的法律地位。这个过程可能需要几周的时间。如果我们选择这种验证方式，那么我们的网站名称将出现在 URL 之前：

![[Pasted image 20211229182536.png]]

We can opt for any of these forms of validation if we are dealing with a single domain. However, there is another category of SSL certificates we need to understand when working with multiple domains.
如果我们处理的是一个单一的域名，我们可以选择这些验证形式中的任何一种。然而，在处理多个域名时，我们需要了解另一类 SSL 证书。

#### Wildcard Certificates [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Wildcard-Certificates)

These certificates provide the HTTPS functionality for all subdomains of our domain.
这些证书为我们域名的所有子域提供 HTTPS 功能。

#### Unified Communications/Subject Alternative Names [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Unified-Communications/Subject-Alternative-Names)

These two types of certifications lets us extend the HTTPS tag over multiple domains which we own.
这两种类型的认证让我们可以将 HTTPS 标签扩展到我们拥有的多个域上。

### Best Certified Authors [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/m2yopAZNERR#Best-Certified-Authors)

Below, we've listed some of the most popular and reliable CAs.
下面，我们列出了一些最流行和最可靠的 CA。

- GlobalSign
- Cloud Flare (Free)
- Comodo (Paid/Free)
- GeoTrust (Free Trial)
- DigiCert

All of these platforms explain how to install their respective certificates.
所有这些平台都解释了如何安装各自的证书。

---

Next, we'll compare some of the most popular cloud services.
接下来，我们将比较一些最流行的云服务。
