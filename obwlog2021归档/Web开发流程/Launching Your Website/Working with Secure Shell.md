In this lesson, we will learn how to communicate with our server remotely.
在本课中，我们将学习如何远程与我们的服务器通信。

Secure Shell, popularly known as **SSH**, is a platform which allows us to remotely control our server over an internet connection. It is a terminal based protocol system which is available on macOS, Linux and Windows.
Secure Shell，俗称 SSH，是一个允许我们通过互联网连接远程控制我们的服务器的平台。它是一个基于终端的协议系统，可在 macOS、Linux 和 Windows 上使用。

SSH was originally developed because of the security concerns regarding its predecessor, **Telnet**. Server communication is now much more secure because of the data encryption methods used by the SSH protocol. In terms of functional power, SSH allows us to basically control every aspect of the server running our website.
SSH 最初是出于对其前身 Telnet 的安全考虑而开发的。由于 SSH 协议使用的数据加密方法，服务器通信现在更加安全。在功能方面，SSH 允许我们基本上控制运行我们网站的服务器的各个方面。

![[Secure Shell.png]]

Now, let's take a look at how we can set up the SSH terminal on our machine.
现在，让我们看看如何在我们的机器上设置 SSH 终端。

## The SSH Environment [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B81gxkqXkAJ#The-SSH-Environment)

SSH comes in-built with Linux and macOS. We can access it using the terminal. For Windows, there are several SSH clients like **PuTTY** which allow us to work with SSH.
SSH 内置于 Linux 和 macOS 中。我们可以使用终端访问它。对于 Windows，有几个像 PuTTY 这样的 SSH 客户端允许我们使用 SSH。

### Basic Commands [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B81gxkqXkAJ#Basic-Commands)

The most important SSH command is to open a connection to our remote server. Here is the command we need to run on the terminal:
最重要的 SSH 命令是打开到我们远程服务器的连接。这是我们需要在终端上运行的命令：

```
<user>@<domain name or IP address>
```

First, we need to define the `user`, which is the account we want to use. The next step is to mention the domain name or the IP address of our website. For example, the root user would open up a connection on our platform this way:
首先，我们需要定义用户，也就是我们要使用的账户。下一步是提到我们网站的域名或 IP 地址。例如，根用户会这样在我们的平台上开辟一个连接：

```
root@educative.io
```

Or we could use the IP address like this:
或者我们可以像这样使用 IP 地址：

```
root@192.1.1.1
```

We must then put in our password to access the server. This connection is secured by SSH using **hashing**, **symmetric encryption** and **asymmetric encryption**. Without getting into details, all we need to know is that this is a big improvement over Telnet's security measures.
然后我们必须输入密码才能访问服务器。此连接由 SSH 使用散列、对称加密和非对称加密来保护。在不深入细节的情况下，我们只需要知道这是对 Telnet 安全措施的重大改进。

Below, we've listed a few more basic operations that can be performed on the SSH terminal.
下面，我们列出了一些可以在 SSH 终端上执行的基本操作：

|Command|Purpose|Syntax|
| --- |---| --- |
|ls|Display all the files and directories on the server machine.|`ls`(basic) or `ls -a` (shows hidden files as well)|
|mkdir|Create a new directory.|`mkdir newDirectory`|
|cd|Move into the specified directory.|`cd anyFolder`|
|touch|Create a new file with a specified format|`touch newDoc.txt`|
|rm|Delete a file or directory. Use `rm -r` to remove all files in the directory being deleted|`rm newDoc.txt`|
|pwd|Print the current directory we are working in|`pwd`|
|cp|Copy files and directories.|`cp source destination`(we can use several flags before `source`)|
|scp|Copy files/folders to and from the server.|`scp filename host: path`(`host` can be the host domain name or the IP address)|
|mv|Move files and directories.|`mv source dest`|
|find|Search for a file in a given directory. It can also return multiple files.|`find . -name file.txt`|

This list is not exhaustive by any means. For more details, visit Secure Shell's [official website](https://www.ssh.com/ssh/command/) .
无论如何，此列表并非详尽无遗。更多详情，请访问 Secure Shell 官网。

### Port Number [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B81gxkqXkAJ#Port-Number)

By default, SSH connects to **port 22**, but we can always choose a different port if we want. Opting for another port is also useful because hackers will only try to attack port 22.
默认情况下，SSH 连接到端口 22，但我们可以随时选择不同的端口。选择另一个端口也很有用，因为黑客只会尝试攻击端口 22。

To change the port number for SSH, we run the following command:
要更改 SSH 的端口号，我们运行以下命令：

```
ssh -p port user@server
```

### Git Repositories [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B81gxkqXkAJ#Git-Repositories)

If Git is installed on our machine as well as the server machine, we can create private Git repositories using SSH. We simply have to move to the desired directory on the server and run this command:
如果我们的机器和服务器上都安装了 Git，我们可以用 SSH 创建私人 Git 仓库。我们只需移动到服务器上所需的目录并运行此命令：

```
git init
```

---

Now that we've understood SSH, we'll move on to the File Transfer Protocol and learn how it is incorporated with SSH.
现在我们已经了解了 SSH，我们将继续学习文件传输协议并了解它是如何与 SSH 结合的。

