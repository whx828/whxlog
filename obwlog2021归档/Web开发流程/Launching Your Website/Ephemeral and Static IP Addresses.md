In this lesson, we will access our application using its IP address.
在本课中，我们将使用其 IP 地址访问我们的应用程序。

With our firewall rule in place and the application running on the VM, we have to check the external IP of our VM server:
设置好防火墙规则并且应用程序在 VM 上运行后，我们必须检查 VM 服务器的外部 IP：

![[Pasted image 20211229165706.png]]

We can now access our website from anywhere on the internet using `35.196.64.74`. Try it out yourself.
我们现在可以使用 `35.196.64.74` 从互联网上的任何地方访问我们的网站。自己试试吧。

And there we have it! We have successfully deployed an application on GCP. However, we're not done yet…
我们终于得到它了！我们已经成功地在 GCP 上部署了一个应用程序。然而，我们还没有完成……

If we go into the VM instance details, under the **Network interfaces** heading, we can see that our external IP is **ephemeral**:
如果我们进入 VM 实例详细信息，在 Network interfaces 标题下，我们可以看到我们的外部 IP 是短暂的：

![[Pasted image 20211229165757.png]]

## Switching Between IP Types [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/BnRXv00VKJX#Switching-Between-IP-Types)

An ephemeral IP is one that is dynamic, i.e., it will change every time we log in to the platform again. This will be a problem because users cannot access our application if the IP keeps changing.
临时 IP 是动态的，即每次我们再次登录平台时它都会改变。这将是一个问题，因为如果 IP 不断变化，用户将无法访问我们的应用程序。

To fix this, we need to make our external IP **static**.
为了解决这个问题，我们需要将外部 IP 设为静态。

In the navigation menu, go to **VPC network** > **External IP addresses**:
在导航菜单中，转到 VPC 网络 > 外部 IP 地址：

![[Pasted image 20211229165833.png]]

We will be directed to this page:
我们将被定向到此页面：

![[Pasted image 20211229165846.png]]

Change the type from **ephemeral** to **static**. We will be prompted to set a name for the IP, after which it will become static:
将类型从临时更改为静态。系统将提示我们为 IP 设置一个名称，之后它将变为静态：

This IP now belongs to _us_. We can link it to the domain name that we purchased earlier, and users would be able to access our site through that name.
这个 IP 现在属于我们。我们可以将其链接到我们之前购买的域名，用户将能够通过该名称访问我们的网站。

---

We've finally published our website to the vast world of the internet, and thanks to cloud hosting, we only had to pay as much as we need to! As this section comes to an end, we will learn how to make client-server communication more secure in the form of HTTPS rather than HTTP.
我们终于把我们的网站发布到了互联网这个广阔的世界上，而且多亏了云主机，我们只需要支付多少钱就可以了! 在本节即将结束时，我们将学习如何以 HTTPS 而不是 HTTP 的形式使客户-服务器通信更加安全。
