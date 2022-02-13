In the last lesson, we set up the basic environment for deploying our web application. Now, we'll learn how to allocate a virtual server to the project.
在上一课中，我们设置了部署 Web 应用程序的基本环境。现在，我们将学习如何为项目分配虚拟服务器。

Picking up where we left off in the last lesson, we can observe that there are no resources allocated to our project:
继续上一课的内容，我们可以观察到，没有为我们的项目分配任何资源：

![[Pasted image 20211228213616.png]]

![[Pasted image 20211228213623.png]]

## VM Instance [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/gkkzBlMA74l#VM-Instance)

To assign a server to our website, we need to create a **VM instance**. Go the navigation bar at the top left corner and scroll down to the **COMPUTE** section. Here, move on to **Compute Engine** and select **VM instances**:
要将服务器分配给我们的网站，我们需要创建一个 VM 实例。转到左上角的导航栏并向下滚动到“计算”部分。在这里，转到 Compute Engine 并选择 VM 实例：

![[Pasted image 20211228213808.png]]

After initialization, refreshing the page will direct us to this window:
初始化后，刷新页面会将我们引导至此窗口：

![[Pasted image 20211228213642.png]]

The **Create** button will open up the **Create an instance** page where we can specify the properties of our virtual server:
Create 按钮将打开 Create an instance 页面，我们可以在其中指定虚拟服务器的属性：

![[Pasted image 20211228213844.png]]

The **Region** and **Zone** refer to the location of our VM. It is a wise practice to select a region which is close to our primary customer base so that they can access our website in the fastest way possible.
Region 和 Zone 是指我们的 VM 的位置。选择靠近我们主要客户群的地区是明智的做法，以便他们能够以最快的方式访问我们的网站。

To avoid server failure, we should acquire machines in multiple zones. This will allow us to shift our application to another server in case the original one fails.
为了避免服务器故障，我们应该在多个区域中获取机器。这将允许我们将我们的应用程序转移到另一台服务器，以防原始服务器出现故障。

**Machine Type** and **Boot disk** can be used to specify the power of our server. Higher specs would lead to higher costs.
Machine Type 和 Boot disk 可以用来指定我们服务器的功率。更高的规格会导致更高的成本。

**Container** lets us set up an OS container on our VM.
Container 允许我们在 VM 上设置操作系统容器。

**Identify and API access** allows us to specify the degree of freedom we want while working with other Google Cloud APIs. We will need a Service Account for this task. Visit [this documentation](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances?hl=en_US&_ga=2.169396193.-1585814160.1545215475) for more details.
识别和 API 访问允许我们在使用其他 Google Cloud API 时指定我们想要的自由度。我们将需要一个服务帐户来执行此任务。有关更多详细信息，请访问此文档。

For now, we won't concern ourselves with the rest of the features. We can explore them later.
现在，我们不会关心其余的功能。我们可以稍后探索它们。

Let's hit the **Create**! Congratulations, a VM has been allocated to our project:
让我们点击创建！恭喜，已经为我们的项目分配了一个 VM：

![[Pasted image 20211228213705.png]]

## VM Communication [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/gkkzBlMA74l#VM-Communication)

The server is now running and we can transfer our website files to it. Click the **SSH** button under the **Connect** section in the image above. This will open a new tab where an SSH connection is set up on our virtual machine.
服务器现在正在运行，我们可以将我们的网站文件传输到它。单击上图中连接部分下的 SSH 按钮。这将打开一个新选项卡，其中在我们的虚拟机上设置了 SSH 连接。

Install Git on your VM using:
使用以下命令在 VM 上安装 Git：

```
 sudo apt install git
```

Now, we can clone our Git repository to the current directory. Sometimes, we won't have default permission to run certain apps such as a React app (Node installation requires root access). For this, we can gain root access through,
现在，我们可以将我们的 Git 存储库克隆到当前目录。有时，我们没有运行某些应用程序的默认权限，例如 React 应用程序（节点安装需要 root 访问权限）。为此，我们可以通过以下方式获得 root 访问权限，

```
sudo su
```

and simply copy our files there.
并简单地将我们的文件复制到那里。

---

We'll cover repository cloning in the next lesson so don't worry about it for now. After that, all we have to do is deploy our website to the internet so that everyone can access it. Go to the next lesson for more details.
我们将在下一课中介绍版本库的克隆，所以暂时不用担心。之后，我们要做的就是把我们的网站部署到互联网上，让所有人都能访问它。更多细节请看下一课。

