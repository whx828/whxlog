This lesson continues the discussion of micro frontends from the previous lesson
本课继续上一课对微前端的讨论

Individual teams may own a dedicated page of the application like the _checkout page_, they may own a component that fits in a certain page like the _game category_ component on the _home page_, or they may own both a dedicated page and a smaller UI component that fits into another page of the website.
各个团队可能拥有应用程序的专用页面，例如结帐页面，他们可能拥有适合特定页面的组件，例如主页上的游戏类别组件，或者他们可能同时拥有专用页面和较小的 UI 组件适合网站的另一个页面。

These smaller components that integrate into pages are known as _fragments_.
这些集成到页面中的较小组件称为片断。

![[fragments.png]]

_Now, you might be wondering, splitting up the monolith UI is fine, but why do it? What's the point?_
现在，你可能想知道，拆分单体用户界面当然是可行的，但为什么要这样做？这有什么意义呢？

## Easier coordination with the front end devs [#](https://www.educative.io/courses/web-application-software-architecture-101/m2PjKpR7oA0#Easier-coordination-with-the-front-end-devs)
更容易与前端开发人员协调

When we have full-stack teams owning an entire service end to end, this averts the need for a dedicated front-end team. In addition, since the front-end devs now work alongside the backend devs on the same team, this saves a lot of time initially spent in the cross-team coordination between the backend microservices and the dedicated front-end teams.
当我们有全栈团队拥有整个服务的端到端时，这就避免了对专门的前端团队的需求。此外，由于现在前端开发人员与后端开发人员在同一个团队中工作，这就节省了很多最初花在后端微服务和专门的前端团队之间跨团队协调的时间。

With this new approach, communication is quick and not so formal. This improves the team's productivity and enables them to deliver a better user experience by having more effective coordination between the backend and the frontend devs.
有了这种新的方法，沟通是快速的，不那么正式。这提高了团队的生产力，使他们能够通过后端和前端开发人员之间更有效的协调，提供更好的用户体验。

## Leveraging the right technology [#](https://www.educative.io/courses/web-application-software-architecture-101/m2PjKpR7oA0#Leveraging-the-right-technology)
充分利用正确的技术

Since, the micro frontends are loosely coupled, just like microservices, we can develop them leveraging different technologies. This lets us off the hook for sticking to just one UI technology to build the entire front end of the website.
因为微前端是松散耦合的，就像微服务一样，我们可以利用不同的技术来开发它们。这让我们摆脱了坚持只用一种 UI 技术来构建整个网站前端的困境。

There are a plethora of existing front-end technologies in the industry that cater to different use cases, besides the new wave of _JavaScript_ frameworks that hits us every year.
除了每年冲击我们的新一波 JavaScript 框架外，行业内还有大量现有的前端技术，可以满足不同的使用案例。

With the micro frontends approach, we can pick the right technology to build our front-end component. We often have use cases where just plain _JavaScript, HTML, and CSS_ suffices to build a feature, and then there are other cases where we need advanced frameworks like _React, Angular, and Vue_ to build our features.
通过微前端的方法，我们可以挑选合适的技术来构建我们的前端组件。我们经常有这样的用例：只用普通的 JavaScript、HTML 和 CSS 就足以构建一个功能，而在其他情况下，我们需要 React、Angular 和 Vue 等高级框架来构建我们的功能。

With micro frontends, we don't necessarily have to use _React_ to build our component if we don't need to, even if the other components of the website are built using it.
对于微前端，如果我们不需要，我们不一定要用 React 来构建我们的组件，即使网站的其他组件是用它来构建的。

On the contrary, if our website is built on plain _JavaScript_ and we want to use _React_, we don't have to re-write the entire website to use _React_. We can just write our component using _React_ and can integrate it into the website.
相反，如果我们的网站是建立在普通的 JavaScript 上，而我们想使用 React，我们不需要重新编写整个网站来使用 React。我们只需使用 React 编写我们的组件，并可以将其集成到网站中。

Even if multiple teams use the same technology to build their _UI_ components they can work on different versions of the technology. They can easily upgrade their libraries without impacting the website's other _UI_ components.
即使多个团队使用相同的技术来构建他们的 UI 组件，他们也可以在不同版本的技术上工作。他们可以很容易地升级他们的库，而不会影响到网站的其他 UI 组件。

![[Website UI Built Using Micro Frontends.png]]

Going forward with the micro frontends approach may sound delightful, but it's only fit for medium to large websites. This approach won't be that advantageous for simple use cases. Rather, it will make things more complex.
继续使用微前端方法可能听起来令人愉快，但它只适用于大中型网站。对于简单的用例，这种方法不会那么有利。相反，它会使事情变得更加复杂。

Using multiple technologies in a project brings along a lot of architectural and maintenance complexities with it.
在一个项目中使用多种技术会带来很多架构和维护的复杂性。

With micro frontends, we also need to write additional logic to club all the components together.
对于微前端，我们还需要编写额外的逻辑来将所有组件组合在一起。

We also cannot ignore the compatibility and performance issues when using multiple technologies together. So, there are always trade-offs involved. There is no silver bullet.
我们也不能忽视同时使用多种技术时的兼容性和性能问题。因此，总是需要权衡取舍。没有银弹。

**_Here is an interesting watch_** – [Engineering Culture at Spotify](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/)
这是一个有趣的视频——Spotify 的工程文化

In the next lesson, let's have a quick insight into how these micro frontends are integrated with each other.
在下一课中，让我们快速了解这些微前端是如何相互集成的。

---

笔记：

使用微前端的特点：
1. 有利于开发人员之间互相协调。
2. 因为微前端是松散耦合的，因此可以利用不同的技术来开发，摆脱了只用一种 UI 技术来构建整个网站前端的困境。
3. 微前端只适用于大中型网站。对于简单的应用不会那么有利。相反会使事情变得更加复杂。
4. 不能忽视同时使用多种技术时的兼容性和性能问题。
