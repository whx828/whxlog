Let's move our Git repository to our VM instance.
让我们将 Git 存储库移动到我们的 VM 实例。

For the purpose of this lesson, we will move a simple React app to our VM and access it through the internet. Here is the repository on GitHub:
出于本课的目的，我们将一个简单的 React 应用程序移动到我们的 VM 并通过互联网访问它。这是 GitHub 上的存储库：

![[Pasted image 20211228214322.png]]

In the `package.json` file, we edit this part,
在 `package.json` 文件中，我们编辑这部分，

```
"scripts:"{
  "start": "react-scripts start",
```

and add,
并添加，

```
"scripts:"{
  "start": "PORT=80 react-scripts start", 
```

We are specifying the port to 80 because React usually runs on 3000, whereas normal websites run on 80. Therefore, for simplicity's sake, we'll keep port uniform.
我们将端口指定为 80，因为 React 通常在 3000 上运行，而普通网站在 80 上运行。因此，为了简单起见，我们将保持端口统一。

The cloning URL for this app is `https://github.com/rauhaanrizvi/simpleReactApp.git`
这个应用的克隆 URL 是 `https://github.com/rauhaanrizvi/simpleReactApp.git`

Go into the VM instance SSH console:
进入虚拟机实例 SSH 控制台：

![[Pasted image 20211228214717.png]]

Gain root access using `sudo su` and install **NodeJS** and **npm** in the environment. For our Debian VM, we must run the following commands:
使用 `sudo su` 获得 root 访问权限并在环境中安装 NodeJS 和 npm。对于我们的 Debian VM，我们必须运行以下命令：

```xml
sudo apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install nodejs
```

Let's clone the repository into the root directory using
让我们使用以下命令将存储库克隆到根目录中

```
git clone https://github.com/rauhaanrizvi/simpleReactApp.git
```

Use `ls` to check if the repository has been copied. The console should display this:
使用 `ls` 检查存储库是否已复制。控制台应显示：

![[Pasted image 20211228214456.png]]

Move into the `simpleReactApp` folder and run `npm install`.
进入 `simpleReactApp` 文件夹并运行 `npm install`。

---

We can run the application using `npm start`, but how would users access it through the internet? We'll solve this problem in the following lessons.
我们可以使用 `npm start` 运行该应用程序，但是用户如何通过 Internet 访问它呢？我们将在接下来的课程中解决这个问题。
