In this lesson, we'll discuss the basics of version control with git!
在本课中，我们将讨论使用 git 进行版本控制的基础知识！

## What is version control? [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#What-is-version-control?-)
什么是版本控制

Managing your project's files. For example, when building a website, you will have a lot of files, like CSS, HTML, JS, images.
管理你项目的文件。例如，在建立一个网站时，你会有很多文件，如 CSS、HTML、JS、图片。

## What is Git? [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#What-is-Git?-)
什么是 Git？

Git is the world's most popular version control system.
Git 是世界上最流行的版本控制系统。

## Why Git? [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#Why-Git?-)
为什么是 Git？

Git maintains a complete history of the changes made to any project, it makes collaboration simpler and more productive, and it allows working on multiple features at once.
Git 可以维护任何项目的完整修改历史，它使协作更简单、更有成效，而且它允许同时处理多个功能。

### History [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#History-)
历史

Git keeps track of all the changes we make to our project. Suppose you change part of the CSS, and the layout looks great, but a few months later, that change causes the layout to break in a few pages. Instead of having to remember what you changed a few months ago, Git would have a record of exactly which lines were removed/added/modified, which makes fixing the issue a lot easier. Furthermore, you can revert changes with Git. Nothing is ever lost or is ever final.
Git 记录了我们对项目所做的所有修改。假设你改变了部分 CSS，版面看起来很好，但几个月后，这个改变导致版面在一些页面上出现了问题。与其要记住你几个月前的改动，Git 会准确地记录哪些行被删除/添加/修改了，这使问题的解决变得容易得多。此外，你可以用 Git 来恢复修改。任何东西都不会丢失，也不会是最终结果。

### Collaboration [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#Collaboration-)
协作

Git makes collaboration in a team very easy and increases productivity.
Git 让团队协作变得非常容易，并提高了生产力。

Suppose you and a team member are working together on some HTML code. In a Git-less scenario, you would write your part of the code, email the file to them; they would write their part and send it back to you. However, while they are doing their part, you won't be able to continue working on the code. If you do, you'd have to figure out what exactly your fellow team member changed when they send it back to you and somehow merge that onto your file with your new code. This combing for changes and merging is not only tedious work but is prone to human error. Furthermore, the time spent doing so can be spent more productively on actually writing code. The good news is that Git manages these changes and merges them for you so you and several team members can work on projects simultaneously without ever having to worry about accidentally deleting someone else's work or merging incorrectly.
假设你和一个团队成员在一起工作，编写一些 HTML 代码。在没有 Git 的情况下，你会写好你的那部分代码，把文件发给他们；他们会写好自己的那部分，然后把它发回给你。然而，当他们在写他们的部分时，你就不能继续写代码了。如果你这样做了，你就必须弄清楚你的团队成员在发回给你的时候到底改了什么，并以某种方式将其与你的新代码合并到你的文件中。这种梳理修改和合并的工作不仅繁琐，而且很容易出现人为错误。此外，这样做的时间可以更有效地用于实际编写代码。好消息是，Git 可以为你管理这些改动并进行合并，这样你和几个团队成员就可以同时进行项目工作，而不必担心不小心删除别人的工作或合并不正确了。

### Feature branches [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#Feature-branches-)
特性分支

Git allows you to work on and ship multiple features simultaneously. For example, suppose you want to update the way your website's navigation bar looks, and you want to add a feature that allows users to comment on your posts. These constitute as separate features: the new navigation bar and the comments. Now in a Git-less situation, if you start working on both features and you finish the navigation bar in a week but need 3 more weeks to enable comments, you won't be able to make your navigation bar live until the comments feature is done as well. So you would have to work on features sequentially if you want to make them live as they get completed, which means a loss in productivity.
Git 允许你同时进行多个功能的开发和发布。例如，假设你想更新网站导航栏的外观，又想增加一个允许用户对你的文章进行评论的功能。这些都是独立的功能：新的导航栏和评论。在没有 Git 的情况下，如果你开始做这两个功能，你在一周内完成了导航栏，但还需要三周时间来启用评论，那么在评论功能完成之前，你将无法让导航栏上线。因此，如果你想在功能完成时让它们上线，你就必须按顺序工作，这意味着生产力的损失。

Git, however, has the ability to make _separate branches_ for each feature. These branches can be worked on simultaneously, and when once done, it can be _merged_ back into the main branch.
然而，Git 有能力为每个功能建立单独的分支。这些分支可以同时进行工作，一旦完成，就可以合并到主分支。

### Git in the industry [#](https://www.educative.io/courses/web-development-a-primer/NEEglJ1l4ZN#Git-in-the-industry-)
Git 在行业中的地位

Git is the industry standard, and most employers assume that you are well versed in Git if you apply for a software job. Furthermore, it can make your time more productive and less prone to data loss even if you are working alone.
Git 是行业标准，如果你申请一份软件工作，大多数雇主都会认为你精通 Git。此外，即使你是独自工作，它也能使你的时间更有效率，更不容易发生数据丢失。

---

Let's look at how to actually use Git in the next lesson!
让我们在下一课中看看如何实际使用 Git!

