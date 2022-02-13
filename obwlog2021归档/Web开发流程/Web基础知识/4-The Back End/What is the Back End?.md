This lesson gives an overview of where your website will finally live: web servers.
本章概述了您的网站最终将位于何处：Web 服务器。

The back end of a website loosely consists of a server, databases, and APIs.
网站的后端大致包括服务器、数据库和 API。

## What are web servers? [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#What-are-web-servers?)

A web server is a system that delivers content and services to users over the Internet. Web servers are exactly like regular computers except that they are more powerful and robust. Also, most servers don't have a display like a monitor or a screen that most PCs do, but you can connect to them with SSH. To put it simply, SSH is a way to get another machine's terminal on your own. A web server can ‘host’ a website, i.e., the webserver will have all the code for the website on it: front and back and anyone with an Internet connection can access it with their machine to view the website.
Web 服务器是一个通过互联网向用户提供内容和服务的系统。Web 服务器与普通计算机完全一样，只是它们的功能更强大、更健全。另外，大多数服务器没有像大多数 PC 那样的显示器或屏幕，但你可以用 SSH 连接到它们。简单地说，SSH 是一种在你自己的机器上获得另一台机器的终端的方法。网络服务器可以 "托管" 一个网站，也就是说，网络服务器上会有网站的所有代码：前端和后端，任何有互联网连接的人都可以用他们的机器访问网站，查看网站。

Technically, you can open up port 80 on your PC and host your website there. However, this is usually never done because a regular PC would not be able to handle the load of potentially thousands of client connections, it would put your personal data at risk, and you would have to keep it on with the server running 24/7. So web hosting services solve this problem.
从技术上讲，您可以在 PC 上打开端口 80 并在那里托管您的网站。但是，这通常永远不会完成，因为普通 PC 无法处理潜在的数千个客户端连接的负载，这会使您的个人数据处于危险之中，并且您必须在服务器 24/7 全天候运行的情况下保持它.所以网络托管服务解决了这个问题。

## Web hosting services [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Web-hosting-services)

Web hosting companies provide space on a server that is owned or leased for use by clients, as well as providing Internet connectivity, usually in a data center. They typically charge a monthly fee for this service. A data center is a building that houses multiple servers. Data centers usually require extensive cooling and maintenance to keep the temperature of their machines down, which reduces crash rates and so increases profits. Facebook, for example, has some of the largest data centers in the world!
Web 托管公司在拥有或租赁的服务器上提供空间供客户使用，并提供互联网连接，通常在一个数据中心。他们通常对这项服务收取月费。数据中心是一个容纳多个服务器的建筑物。数据中心通常需要大量的冷却和维护，以保持其机器的温度，从而降低崩溃率，因此增加利润。例如，Facebook 拥有世界上最大的一些数据中心。

![[Rack servers in a data center.png]]
Rack servers in a data center
数据中心的机架式服务器

Selecting the appropriate web hosting service plays a crucial role in web deployment, however, and is a critical decision.
然而，选择合适的网络托管服务在网络部署中起着至关重要的作用，并且是一个关键的决定。

## Web server operating systems [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Web-server-operating-systems)

Just like your personal computer has an operating system, Windows, Mac OS, or Linux, servers require an operating system to function too. Although, most server operating systems are specialized for servers and so slightly different from desktop operating systems.
就像您的个人计算机具有操作系统 Windows、Mac OS 或 Linux 一样，服务器也需要操作系统才能运行。尽管如此，大多数服务器操作系统都是专门用于服务器的，因此与桌面操作系统略有不同。

### Linux [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Linux)

Linux is not one operating system. It is a group of free and open-source operating systems. Typically, Linux is packaged in a form known as a Linux distribution (or distro for short) for both desktop and server use. There are many flavors or distros of Linux for server use. For example,
Linux 不是一种操作系统。它是一组免费的开源操作系统。通常，Linux 以一种称为 Linux 发行版（或简称发行版）的形式打包，供桌面和服务器使用。有许多用于服务器的 Linux 版本或发行版。例如，

#### CentOS [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#CentOS)

The benefit of using CentOS is that it is stable and seldom crashes. It is also the most popular distro for servers as of now, so it also has the benefit of great support from the web, which means you won't be stuck on any issue for long.
使用 CentOS 的好处是，它很稳定，很少崩溃。它也是目前最流行的服务器发行版，所以它也有来自网络的巨大支持的好处，这意味着你不会在任何问题上停留很久。

Furthermore, most Linux distros update regularly, but CentOS does not. The benefit of this is that once you get your server up and running, it will be in good shape for a long time without having to upgrade to a newer version regularly.
此外，大多数 Linux 发行版会定期更新，但 CentOS 不会。这样做的好处是，一旦你的服务器开始运行，它将在很长一段时间内保持良好的状态，而不需要定期升级到新的版本。

As for the cons, you will have difficulties running newer packages and making use of the latest technologies. If you are looking to use the latest technology, CentOS might not be for you.
至于缺点，你将难以运行较新的软件包和利用最新的技术。如果你想使用最新的技术，CentOS 可能不适合你。

#### Debian [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Debian)

Like CentOS, Debian does not update as frequently as well. Debian is also a community distro, which means that new versions of Debian are released only when the community arrives at a consensus. So every Debian release is thoroughly tested and reliable. There is only one kind of Debian available for you to download and install, which works on both server and desktop.
和 CentOS 一样，Debian 的更新也不那么频繁。Debian 也是一个社区发行版，这意味着 Debian 的新版本只有在社区达成共识的情况下才会发布。因此，每一个 Debian 版本都是经过全面测试和可靠的。只有一种 Debian 可以供你下载和安装，它可以在服务器和桌面上使用。

#### Ubuntu [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Ubuntu)

Ubuntu is the most popular Linux distro for the desktop. You might want to go with Ubuntu on your server if you want the advantage of being familiar with it!
Ubuntu 是最流行的桌面 Linux 发行版。如果您想要熟悉它的优势，您可能希望在您的服务器上使用 Ubuntu！

Here are some others that you might want to consider,
以下是您可能需要考虑的其他一些内容，

#### [Windows Server 2019](https://www.microsoft.com/en-us/cloud-platform/windows-server)  [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Windows-Server-2019)

#### [Mac OS X Server](https://www.apple.com/lae/macos/server/)  [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Mac-OS-X-Server)

#### [Solaris](https://www.google.com/search?q=solaris+server)  [#](https://www.educative.io/courses/web-development-a-primer/3jYpw7OrPAA#Solaris)

---

In the next lesson, we'll look at what a backend engineer is expected to know and do!
在下一课中，我们将看看一个后端工程师应该知道什么，做些什么。
