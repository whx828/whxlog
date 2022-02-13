In this lesson, we'll show Git in action!
在本课中，我们将展示 Git 的实际操作！

## Git jargon [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Git-jargon-)

Git uses very particular vocabulary, and familiarity with it will make it easier for you to communicate with your team members and the online community. Here are some common terms,
Git 使用非常特别的词汇，熟悉它将使你更容易与你的团队成员和在线社区沟通。下面是一些常用的术语：

### Repository [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Repository-)

To put it simply, a project is a repository. Git repositories or ‘repos’ contain all of the code and version history of a certain project.
简单地说，一个项目就是一个仓库。Git 仓库或 "repos" 包含某个项目的所有代码和版本历史。

### Working directory [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Working-directory-)

The working directory is the folder on your local computer where your project exists. Git would track any changes made within that folder.
工作目录是您的项目所在的本地计算机上的文件夹。 Git 会跟踪在该文件夹中所做的任何更改。

### Commit [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Commit-)

Git does not save or store any changes made to the files within your working directory until you ‘commit’ it. Commits save the changes you made to Git itself.
在你 "提交" 之前，Git 并不保存或储存对你工作目录中的文件所做的任何修改。提交会将你所做的修改保存到 Git 本身。

### Staging [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Staging-)

However, suppose you made changes to 8 files within your working directory, but you only want to commit 4 of them because the other 4 are buggy or not complete yet. How do you commit only 4? Well, you put them in the ‘staging area’ after which you commit. Staging a file means that you have marked it for a commit.
然而，假设你对工作目录中的 8 个文件进行了修改，但你只想提交其中的 4 个，因为其他 4 个有问题或者还没有完成。你怎么只提交 4 个呢？好吧，你把它们放在 "暂存区"，然后再提交。暂存一个文件意味着你已经将其标记为提交。

## Checking if Git is installed [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Checking-if-Git-is-installed-)

If you're following along on a local set up (you don't have to, but just in case you are), start by checking if Git exists on your system with the following command.
如果您正在遵循本地设置（您不必这样做，但以防万一），请首先使用以下命令检查系统上是否存在 Git。

```shell
git --version
```

If it is installed; great, if not, install it for [Mac](https://www.atlassian.com/git/tutorials/install-git) and [Windows](https://git-scm.com/download/win) if you'd like. Otherwise, follow along here!
如果已安装；太好了，如果没有，如果您愿意，可以为 Mac 和 Windows 安装它。否则，请跟随这里！

## Setting up and starting a new Git repo [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Setting-up-and-starting-a-new-Git-repo-)

To mark a directory as a Git working directory, call the following command in that directory
要把一个目录标记为 Git 工作目录，请在该目录下调用以下命令

```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git init
```

Git should be tracking any changes we make within this folder now. So let's add a file and see if Git notices anything with
Git 现在应该跟踪我们在这个文件夹中所做的任何更改。所以让我们添加一个文件，看看 Git 是否注意到了什么

```shell
git status
```

```shell
git init
touch index.html
git status
```

```
Initialized empty Git repository in /usercode/.git/ 
On branch master 

Initial commit 

Untracked files: 
   (use "git add <file>..." to include in what will be committed) 
   
        __ed_script.sh 
        __ed_stderr.txt 
        __ed_stdout.txt 
        index.html 
        main.sh 
        
nothing added to commit but untracked files present (use "git add" to track)
```

So Git noticed all of the files in our directory!
因此，Git 注意到了我们目录中的所有文件!

Also, note that each of our coding playgrounds is like an individual virtual machine, that gets created and destroyed upon execution, which is why we have to initialize a repo each time! This is also why so many ‘random’ files already exist. Also, to make the console output less cluttered, pass the quiet flag like `-q`.
另外，请注意，我们的每个编码游乐场就像一个独立的虚拟机，在执行时被创建和销毁，这就是为什么我们每次都要初始化一个 repo! 这也是为什么这么多 "随机" 文件已经存在的原因。另外，为了使控制台的输出不那么杂乱，可以像 `-q` 一样传递安静标志。

### Adding new files to the staging area [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Adding-new-files-to-the-staging-area-)

Add new files to the staging area with:
使用以下命令将新文件添加到暂存区：

```shell
git add folder/that/contains/files
```

A Git status call on line **4** would show us all the changes to be committed.
第 4 行的 `git status` 调用将向我们显示所有要提交的更改。

```shell
git init -q
touch index.html
git add .
git status
```

### Committing the files [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Committing-the-files-)

Commit the files with,
提交文件，

```shell
git commit -m "a message to commit with"
```

```shell
git init -q
touch index.html
git add .
git commit -m "Our first commit!"
```

### Checking commit history [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Checking-commit-history-)

to print out Git's commit history, type
要打印 Git 的提交历史，请键入

```shell
git log
```

The output is something like
输出是这样的

```
__ed_create_user.sql
__ed_destroy_user.sql
__ed_javaRunner.sh
__ed_script.sh
__ed_sql_runner.sh
index.html main.sh output

commit 3094b0bcf3483de4955be7c4c15a0b65c3e765b3 
Author: Your Name <you@example.com> 
Date: Wed Jan 2 07:38:11 2019 +0000 Our first commit!
```

Where the first few lines represent files that were modified or added, the numbers after the `commit` field represent the hash value of the commit (a unique string that identifies the commit). The `Author` and `Date` fields contain information about the author, time of commit, and the message the author sent with the commit.
其中前几行代表被修改或添加的文件，提交字段后的数字代表提交的哈希值（一个识别提交的唯一字符串）。作者和日期字段包含了作者的信息、提交时间以及作者随同提交发出的信息。

```shell
git init -q
touch index.html
git add .
git commit -m "Our first commit!" -q
git log
```

### Reverting to a previous commit [#](https://www.educative.io/courses/web-development-a-primer/NEWoQAlwjZN#Reverting-to-a-previous-commit-)

To revert your working directory to any previous commit, type the command
要将您的工作目录恢复到任何以前的提交，请键入命令

```shell
git checkout hashvalue
```

We can't try reverting with hash values on our platform because a different one is generated for each time the code is run. So we'll demonstrate reverting to the previous state in the following. Notice how even though `index.html` is removed on line **5**, it is restored with Git checkout.
我们无法尝试在我们的平台上使用哈希值进行恢复，因为每次运行代码时都会生成不同的哈希值。因此，我们将在下面演示恢复到之前的状态。请注意，尽管 `index.html` 在第 5 行被删除，但它是如何通过 `Git checkout` 恢复的。

```shell
git init -q
touch index.html
git add .
git commit -m "Our first commit!" -q
rm index.html
git checkout -- .
ls
```

---

So with Git, you can restore files back to any previously committed state even if they are deleted or modified. However, if your machine gets stolen, crashed, or lost, you still lose your project even with Git. Also, you still can't truly collaborate. For that, we'll look at how you can host your repo on another server in the next chapter!
因此，使用 Git，您可以将文件恢复到任何先前提交的状态，即使它们被删除或修改。但是，如果您的机器被盗、崩溃或丢失，即使使用 Git，您仍然会丢失您的项目。此外，您仍然无法真正进行协作。为此，我们将在下一章中介绍如何在另一台服务器上托管您的存储库！

