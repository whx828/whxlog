In this lesson, we'll discuss the basics of perhaps the most important tool in your belt as a programmer: the command line
在本课中，我们将讨论作为程序员可能最重要的工具的基础知识：命令行

## What is the terminal? [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#What-is-the-terminal?-)

The **command-line interface** is a tool into which you can type text commands to make the computer perform specific tasks in contrast to using a graphical user interface through pointing and clicking on menus and buttons with a mouse.
命令行界面是一种工具，你可以在其中键入文本命令，使计算机执行特定的任务，这与通过用鼠标指向和点击菜单和按钮来使用图形用户界面形成对比。

Since the command line interface allows you to control the computer directly by typing commands, many tasks can be performed more efficiently. For example, if you want to make one change in the names of around 2000 files, you can use a for loop on the command line and change the names of all of them in a few seconds. Therefore basic knowledge of the command line is an absolute essential.
由于命令行界面允许你通过输入命令直接控制计算机，许多任务可以更有效地执行。例如，如果你想对大约 2000 个文件的名称进行一次修改，你可以在命令行上使用 for 循环，在几秒钟内改变所有文件的名称。因此，命令行的基本知识是绝对必要的。

The user interface that accepts typed commands and displays data on the screen is called a **shell**. There is a wide variety of shells that you can choose from, but the most common is the [Bash shell](https://www.gnu.org/software/bash/) , which is the default on Linux and Mac systems in the Terminal application. Windows systems only include the anemic Command Prompt application by default, which is nowhere near as powerful as Bash. If you're going to follow along on your windows machine, however, consider installing [cygwin](https://www.cygwin.com/) .
接受输入的命令并在屏幕上显示数据的用户界面被称为 shell。有各种各样的 shell 供你选择，但最常见的是 Bash shell，它是 Linux 和 Mac 系统中终端应用程序的默认版本。Windows 系统默认情况下只包括贫乏的命令提示程序，其功能远不如 Bash 强大。不过，如果你要在你的 windows 机器上跟着做，可以考虑安装 cygwin。

Open up a shell; you will see a blank (usually black) screen with a cursor to the right of something like:
打开一个 shell；你会看到一个空白（通常是黑色）的屏幕，光标的右边有一个类似的东西。

```shell
accountname@machinname:~$
```

Let's finally look at a few commands now!
现在让我们看看几个命令！

### Listing files and directories [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Listing-files-and-directories-)

Type `ls` into a shell and hit enter (or try it below!) and watch the magic happen.
在 shell 中键入 ls 并按回车键（或在下面尝试！）并观察魔法发生。

`ls`

Voila! All the files and directories in your current directory get printed.
瞧！打印出了当前目录中的所有文件和目录。

### Checking what directory you are in [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Checking-what-directory-you-are-in-)

Also, to check what directory you are currently in, type `pwd`, and hit enter. Here is an example:
此外，要检查您当前所在的目录，请键入 pwd，然后按 Enter。下面是一个例子：

`pwd`

### Changing directories [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Changing-directories-)

You can change to a directory that exists within your current directory with the command,
您可以使用以下命令更改到当前目录中存在的目录，

`cd nameOfDirectory`

you can move back to a parent directory with the command,
您可以使用以下命令移回父目录，

```shell
cd ..
```

### Reading files [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Reading-files-)

You can print files to the terminal with the command,
您可以使用以下命令将文件打印到终端，

```shell
cat nameOfFile
```

### Creating files [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Creating-files-)

You can create empty files with the command,
您可以使用命令创建空文件，

```shell
touch nameOfFile
```

### Creating a new directory [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Creating-a-new-directory-)

You can create a new directory with the command,
您可以使用以下命令创建一个新目录，

```shell
mkdir newFolder
```

### Moving files [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Moving-files-)

You can move files from one directory to another like so,
您可以像这样将文件从一个目录移动到另一个目录，

```shell
mv path/to/file/filename new/path
mv path/to/file/new/path/filename .
mv filename ..
```

Note that `.` indicates the current directory, so the second command above moves the file from `path/to/file/new/path/filename` to the current directory. As mentioned previously, `..` indicates the parent directory, so the last command moves the file `filename` to the parent directory.
注意，`.` 表示当前目录，所以上面的第二条命令将文件从 `path/to/file/new/path/filename` 移动到当前目录。如前所述，`..` 表示父目录，所以最后一条命令将文件 `filename` 移动到父目录中。

### Removing files [#](https://www.educative.io/courses/web-development-a-primer/B8RZq6xLpWW#Removing-files-)

You can remove files with the command
您可以使用命令删除文件

```shell
rm fileName
```

---

Now that we know some command line basics, let's move on to learning version control with Git in the next lesson!
现在我们已经了解了一些命令行基础知识，让我们在下一课中继续学习使用 Git 进行版本控制！
