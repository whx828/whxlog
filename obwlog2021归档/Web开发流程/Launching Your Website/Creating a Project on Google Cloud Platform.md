This is the most important part of this course. We'll learn how to make our website live on GCP.
这是本课程最重要的部分。我们将学习如何让我们的网站在 GCP 上上线。

At this point, we have all our tools in place. We have acquired a domain name and discussed various web hosting plans. The course has also introduced us to SSH and code deployment via Git.
此时，我们已准备好所有工具。我们已经获得了一个域名并讨论了各种网络托管计划。本课程还向我们介绍了通过 Git 进行 SSH 和代码部署。

All we have to do now is make our website live! For this purpose, we will be using the Google Cloud Platform (GCP) since it is very relevant in modern times and is fairly easy to use. Let's look at the steps we need to follow to deploy a simple website.
我们现在要做的就是让我们的网站上线！为此，我们将使用 Google Cloud Platform (GCP)，因为它在现代非常重要并且非常易于使用。让我们看看部署一个简单的网站需要遵循的步骤。

## Signing Up [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/7AnPjKGQgpj#Signing-Up)

Go to the [Google Cloud homepage](https://cloud.google.com/) and sign up for a free trial. It will ask us for our basic information along with a payment method. Don't worry. Google will not charge us after the free trial ends unless we specify that we'll be using the service in the future:
转到 Google Cloud 主页并注册免费试用。它会询问我们的基本信息以及付款方式。别担心。免费试用期结束后，Google 不会向我们收费，除非我们明确说明将来会使用该服务：

![[Signing Up.png]]

## Getting Started [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/7AnPjKGQgpj#Getting-Started)

After signing up, we will be taken to the **Getting Started** page:
注册后，我们将被带到 "开始" 页面：

![[Google Cloud Platform.png]]

Here, we can take a tutorial about how things work and we can check out some of the tools available to us. To create a new project (on which we will deploy our website), click on **Create an empty project** from the **Explore** section in the screen above or click on **Select a project** in the top bar.
在这里，我们可以学习有关这一切如何工作的教程，并且可以查看一些可用的工具。要创建一个新项目（我们将在其上部署我们的网站），请从上方屏幕的“探索”部分单击“创建一个空项目”或单击顶部栏中的“选择项目”。

By pressing the **NEW PROJECT** button, we will be directed to this screen:
通过按下 NEW PROJECT 按钮，我们将被引导到这个屏幕：

![[NEW PROJECT.png]]

All we have to do is name our project and choose the location/folder where we want to put it.
我们所要做的就是命名我们的项目并选择我们想要放置它的位置/文件夹。

It will take a few moments for the project to be created, after which the dashboard for this project will be displayed:
创建项目需要一些时间，之后将显示该项目的仪表板：

![[dashboard.png]]

The dashboard (control panel) contains several widgets which help us maintain our website and a lot resources to it appropriately. The hamburger icon at the top left corner allows us to explore even more widgets.
仪表板（控制面板）包含几个小部件，可帮助我们适当地维护我们的网站和大量资源。左上角的汉堡包图标允许我们探索更多小部件。

The icon labelled as “Activate Cloud Shell” in the image above will open up the **Google Cloud Shell**. This is Google's own form SSH and can be used to communicate with our server. We'll come back to this later.
上图中标记为“激活 Cloud Shell”的图标将打开 Google Cloud Shell。这是 Google 自己的形式 SSH，可用于与我们的服务器进行通信。我们稍后会回到这个话题。

---

Now that our project has been created, we must allocate resources to it so that we can deploy our website. This can be done by creating a **VM instance**. Let's figure out how to do this in the next lesson.
现在我们的项目已经创建，我们必须为其分配资源，以便我们可以部署我们的网站。这可以通过创建 VM 实例来完成。让我们在下一课中弄清楚如何做到这一点。

