This lesson deals with uploading our website code to a VCS application like GitHub.
本课涉及将我们的网站代码上传到 GitHub 等 VCS 应用程序。

In the last lesson, we learned how to communicate with the server using SSH. We mentioned the `scp` command which transfers files from our local machine to the server. Although the command is available to us, it is generally not a smart way to transfer our code to the server. Instead, we bring a third player into the mix: a **version control application**.
在上一课中，我们学习了如何使用 SSH 与服务器通信。我们提到了 scp 命令，它将文件从我们的本地机器传输到服务器上。虽然这个命令对我们来说是可用的，但它通常不是一个将我们的代码传输到服务器的聪明方法。取而代之的是，我们把第三个参与者带入了这个组合：一个版本控制程序。

> Version control refers to the principle of keeping track of the code of an application. All the code is stored online and changes can be made by those who are given permission (development team).
> 版本控制是指对应用程序的代码进行跟踪的原则。所有的代码都存储在网上，那些被授权的人（开发团队）可以进行修改。

![[Version control.png]]

A VCS is an application which provides the version control functionality. GitHub is the most popular platform for storing code in repositories. Here is what a typical repository looks like:
VCS 是一个提供版本控制功能的应用程序。GitHub 是最流行的储存代码的平台。下面是一个典型的存储库的样子：

![[repository.png]]

So, rather than transferring files from our local machines, we copy the code from the repository to the server using:
因此，我们不是从本地机器传输文件，而是使用以下命令将代码从存储库复制到服务器：

```
git clone <URL>
```

Replace `<URL>` with the actual address of the repository.
将 `<URL>` 替换为存储库的实际地址。

Every time a change or update is made in our application's implementation, the new changes are pushed to the server. Different hosting services have different commands for pushing code to the server through SSH. Google Cloud uses its own CLI commands, whereas Heroku allows pushing to the master branch through `git push heroku master`.
每次在我们的应用程序实现中进行更改或更新时，新的更改都会推送到服务器。不同的托管服务有不同的命令，用于通过 SSH 将代码推送到服务器。 Google Cloud 使用自己的 CLI 命令，而 Heroku 允许通过 `git push heroku master` 推送到 master 分支。

Do keep in mind that both the server and our local machine should have Git installed.
请记住，服务器和我们的本地机器都应该安装 Git。

If GitHub does not suit someone, he or she has a plethora of other VCS applications such as Bitbucket and GitLab.
如果 GitHub 不适合某个人，还有大量其他 VCS 应用程序，例如 Bitbucket 和 GitLab。

---

The next step is to finally deploy our website to a hosting service. For the purpose of this course, we will be using the **Google Cloud Platform**. Let's get started in the next lesson!
下一步是最终将我们的网站部署到一个虚拟主机服务上。为了本课程的目的，我们将使用谷歌云平台。让我们在下一课中开始吧!

