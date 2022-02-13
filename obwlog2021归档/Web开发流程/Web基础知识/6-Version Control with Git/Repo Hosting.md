In this lesson, we'll discuss how you can host your repo on a server which makes your project indestructible!
在本课中，我们将讨论如何在服务器上托管您的存储库，从而使您的项目坚不可摧！

## What is repo hosting? [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#What-is-repo-hosting?-)

As discussed in the previous lesson, Git can be used to version control your project on your local machine; however, it cannot be used to collaborate with others and does not safeguard your project if you lose your machine.
正如上一课所讨论的，Git 可以用来在你的本地机器上对你的项目进行版本控制；但是，它不能用来与他人协作，而且在你失去机器的情况下也不能保护你的项目。

So, to ensure that your project remains accessible even if you lose your machine, you can upload your code to a server. This is called ‘repo hosting’ and many services are available for free that provide this. For example, GitHub.
因此，为了确保即使你失去了机器，你的项目仍然可以被访问，你可以把你的代码上传到一个服务器。这被称为 "Repo 托管"，许多服务都可以免费提供。例如，GitHub。

## GitHub [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#GitHub-)

Before we get into GitHub, we're going to stress upon the fact that Git and GitHub are NOT the same! Git is a version control system, whereas GitHub is a repository hosting service! Okay, so let's get started.
在我们进入 GitHub 之前，我们要强调一个事实，即 Git 和 GitHub 不一样！ Git 是一个版本控制系统，而 GitHub 是一个存储库托管服务！好的，让我们开始吧。

### Creating a GitHub repo from an existing Git repo [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#Creating-a-GitHub-repo-from-an-existing-Git-repo-)

First, sign up to [GitHub](https://github.com/) . Create a free account and sign in. Then, create a new repo by clicking the `+` symbol and ‘new repository’ on the top right as shown below.
首先，注册 GitHub。创建一个免费帐户并登录。然后，通过单击右上角的 + 符号和“新存储库”创建一个新存储库，如下所示。

![[new repository.png]]

Then give a name to your repo and create it! Now, open up a command-line terminal and change directories to an existing Git repo. Then at the top of your GitHub repository's Quick Setup page, click to copy the remote repository URL. It'll look something like [https://github.com/username/repo-name](https://github.com/username/repo-name) . Then, add the URL for the remote repository like so,
然后给你的 repo 起个名字，并创建它! 现在，打开一个命令行终端，将目录切换到现有的 Git 仓库。然后在 GitHub 仓库的快速设置页面顶部，点击复制远程仓库的 URL。它看起来会像 https://github.com/username/repo-name 。然后，添加远程仓库的 URL，像这样。

```shell
git remote add origin https://github.com/username/repo-name
# Sets the new remote
```

And finally, push the changes in your local repository to GitHub like so:
最后，将本地存储库中的更改推送到 GitHub，如下所示：

`git push -u origin master`

### Creating a branch [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#Creating-a-branch-)

According to the [GitHub Glossary](https://help.github.com/articles/github-glossary/#branch) is a “branch is a parallel version of a repository. It is contained within the repository but does not affect the primary or master branch allowing you to work freely without disrupting the “live” version. When you've made the changes you want to make, you can merge your branch back into the master branch to publish your changes. For more information, see ‘About branches.’” Branches are primarily used to create new features, and they can be merged back into the master branch (the main branch) after making a pull request.
根据 GitHub 术语表，“分支是存储库的并行版本。它包含在存储库中，但不会影响主分支，允许您自由工作而不会中断“实时”版本。当您进行了想要的更改后，您可以将您的分支合并回主分支以发布您的更改。有关更多信息，请参阅“关于分支”。分支主要用于创建新功能，在发出拉取请求后，它们可以合并回主分支（主分支）。

### Opening a pull request [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#Opening-a-pull-request-)

A pull request is a proposed change to the repo submitted by a user and to be reviewed and accepted or rejected by the repo's collaborators. Pull requests have their own discussion forum.
拉取请求是由用户提交的对 repo 的修改建议，并由 repo 的合作者审查和接受或拒绝。拉动请求有自己的讨论区。

### Merging changes [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#Merging-changes-)

Once a pull request is approved, it can be merged with the master or branch or other branches.
一旦一个 pull request 被批准，它就可以与 master 或 branch 或其他分支合并。

Have a look at the diagram below for a clearer picture!
看看下面的图表以获得更清晰的图片！

![[GitHub flow.png]]

## Deploying GitHub code to a hosting platform [#](https://www.educative.io/courses/web-development-a-primer/RL599WnrNAR#Deploying-GitHub-code-to-a-hosting-platform-)

Now that we've covered some GitHub basics, you're probably wondering about the next step: how to get the code from GitHub to the actual server(s) that host(s) your website. For that, check out our course: [Post Web: From Local to Live](https://www.educative.io/collection/10370001/5654729883385856/) .
现在我们已经介绍了一些 GitHub 基础知识，您可能想知道下一步：如何将代码从 GitHub 获取到托管您网站的实际服务器。为此，请查看我们的课程：发布网络：从本地到现场。

---

Now that we have the most skills we need to start learning web development, let's learn some basic principles of software engineering starting from the next chapter.
现在我们已经掌握了开始学习 Web 开发所需的大部分技能，让我们从下一章开始学习软件工程的一些基本原理。

