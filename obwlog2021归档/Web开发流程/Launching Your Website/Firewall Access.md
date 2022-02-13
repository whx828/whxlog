Let's define what sort of traffic can visit our website.
让我们定义什么样的流量可以访问我们的网站。

Right now, if our app is running on the VM, no one can access it. Why is this the case? Let's find out.
现在，如果我们的应用程序在 VM 上运行，则没有人可以访问它。为什么会这样？让我们来了解一下。

In the VM instance section, click on the instance name. This will show all the information about our server.
在 VM 实例部分，单击实例名称。这将显示有关我们服务器的所有信息。

Scroll down until you find the **Firewall** heading:
向下滚动，直到找到防火墙标题：

![[Pasted image 20211228215125.png]]

We are not allowing HTTP traffic while we are running the website on Port 80 (default port for websites).
当我们在端口 80（网站的默认端口）上运行网站时，我们不允许 HTTP 流量。

Go to edit mode and check the “Allow HTTP traffic” option. Leave HTTPS for now, as we'll come to it later in the chapter.
进入编辑模式并选中“允许 HTTP 流量”选项。暂时离开 HTTPS，我们将在本章后面讨论。

---

All that's left is to use the IP address provided to us to access our React application.
剩下的就是使用提供给我们的 IP 地址来访问我们的 React 应用程序。

