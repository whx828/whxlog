# [20 Things I’ve Learned in my 20 Years as a Software Engineer](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/)

![20 Things I’ve Learned in my 20 Years as a Software Engineer](https://3otebq2knmnf3smsj0374a9u-wpengine.netdna-ssl.com/wp-content/uploads/2021/10/pocket-watch-scaled.jpg)
## Important, Read This First
## 重要的是，先读这篇文章
- You’re about to read a blog post with a _lot_ of advice. Learning from those who came before us is instrumental to success, but we often forget an important caveat. Almost all advice is contextual, yet it is rarely delivered with any context.
  
  你将要读到一篇博客文章，里面有很多建议。向我们的前辈学习有助于成功，但是我们经常忘记一个重要的警告。几乎所有的建议都是上下文相关的，但很少在任何上下文中提供。
  
  “You just need to charge more!” says the company who has been in business for 20 years and spent years charging “too little” to gain customers and become successful.
  
  “你只是需要收取更高的费用!”这家公司已经经营了 20 年，多年来收取的费用“太少”，难以赢得顾客并取得成功。
  
  “You need to build everything as microservices!” says the company who built a quick monolith, gained thousands of customers, and then pivoted into microservices as they started running into scaling issues.
  
  “你需要把所有东西都打造成微型服务!”这家公司建立了一个快速整体结构，赢得了数以千计的客户，然后转向微型服务，因为他们开始遇到扩展问题。
  
  Without understanding the context, the advice is meaningless, or even worse, harmful. If those folks had followed their own advice early on, they themselves would likely have suffered from it. It is hard to escape this trap. We may be the culmination of our experiences, but we view them through the lens of the present.
  
  如果不了解背景，这些建议就毫无意义，甚至是有害的。如果这些人在早期就遵循了他们自己的建议，他们自己可能也会遭受这样的痛苦。这个陷阱很难逃脱。我们可能是我们经历的顶点，但我们通过当下的镜头来看待它们。
  
  So to give you a little context on where my advice comes from, I spent the first half of my career as a software engineer working for various small businesses and startups, then I went into consulting and worked in a number of really large businesses. Then I started Simple Thread and we grew from a team of 2 to a team of 25. 10 years ago we worked with mostly small/medium businesses, and now we work with a mix of big and small businesses.
  
  所以，为了给你们一点关于我的建议从何而来的背景知识，我在我职业生涯的前半段是一名软件工程师，为各种小企业和初创企业工作，然后我进入咨询业，并在一些非常大的企业工作。然后我开始了简单线程，我们从一个 2 人的团队成长为一个 25 人的团队。10 年前我们主要和中小企业合作，现在我们和大小企业合作。
  
  My advice is from someone who…
  
  我的建议来自一个..。
  
  1.  has almost always been on small, lean teams where we have to do a lot with very little. 几乎总是在小规模精干的团队中，我们必须用很少的资源做很多事情
  2.  values working software over specific tools. 重视工作软件胜过特定的工具
  3.  is starting new projects all the time, but also has to maintain a number of systems. 一直在开展新项目，但同时也必须维护一些系统
  4.  values engineer productivity over most other considerations 把工程师的生产力看得比大多数其他因素更重要
  
  My experiences over the last 20 years have shaped how I view software, and have led me to some beliefs which I’ve tried to whittle down to a manageable list that I hope you find valuable.
  
  我过去 20 年的经历塑造了我对软件的看法，并且让我产生了一些信念，我试图将这些信念精简成一个可管理的清单，希望你们能发现它们的价值。
## On with the list
## 继续列表
### 1\. I still don’t know very much
### 1\. 我知道的还不多
- “How can you not know what BGP is?” “You’ve never heard of Rust?” Most of us have heard these kinds of statements, probably too often. The reason many of us love software is because we are lifelong learners, and in software no matter which direction you look, there are wide vistas of knowledge going off in every direction and expanding by the day. This means that you can spend decades in your career, and still have a huge knowledge gap compared to someone who has also spent decades in a seemingly similar role. The sooner you realize this, the sooner you can start to shed your imposter syndrome and instead delight in learning from and teaching others.
  
  “你怎么会不知道什么是边界网关协议呢?”“你从来没有听说过拉斯特?”我们大多数人都听过这种说法，可能太频繁了。我们之所以热爱软件，是因为我们是终身学习者，在软件领域，无论你朝哪个方向看，都能看到知识的广阔前景。这意味着你可以在你的职业生涯中度过几十年，但与那些花了几十年时间从事类似工作的人相比，你仍然存在巨大的知识差距。你越早意识到这一点，你就能越早摆脱你的冒名顶替综合症，而是乐于学习和教导他人。
### 2\. The hardest part of software is building the right thing
### 2\. 软件最难的部分是构建正确的东西
- I know this is cliche at this point, but the reason most software engineers don’t believe it is because they think it devalues their work. Personally I think that is nonsense. Instead it highlights the complexity and irrationality of the environments in which we have to work, which compounds our challenges. You can design the most technically impressive thing in the world, and then have nobody want to use it. Happens all the time. Designing software is mostly a listening activity, and we often have to be part software engineer, part psychic, and part anthropologist. Investing in this design process, whether through dedicated UX team members or by simply educating yourself, will deliver enormous dividends. Because how do you really calculate the cost of building the wrong software? It amounts to a lot more than just lost engineering time.
  
  我知道这是陈词滥调，但大多数软件工程师不相信这是因为他们认为这会贬低他们的工作。我个人认为这是无稽之谈。相反，它强调了我们必须工作的环境的复杂性和非理性，这使我们面临的挑战更加复杂。你可以设计出世界上技术上最令人印象深刻的东西，然后没有人愿意使用它。这种事经常发生。设计软件主要是一种倾听活动，我们通常不得不兼做软件工程师、精神工程师和人类学家。投资这个设计过程，无论是通过专注的 UX 团队成员还是仅仅通过自我教育，都会带来巨大的回报。因为你如何计算构建错误软件的成本呢？这不仅仅意味着浪费了工程时间。
### 3\. The best software engineers think like designers
### 3\. 最好的软件工程师像设计师一样思考
- Great software engineers think deeply about the user experience of their code. They might not think about it in those terms, but whether it is an external API, programmatic API, user interface, protocol, or any other interface; great engineers consider who will be using it, why it will be used, how it will be used, and what is important to those users. Keeping the user’s needs in mind is really the heart of good user experience.
  
  优秀的软件工程师会深入思考他们的代码的用户体验。他们可能不会用那些术语来考虑它，而是考虑它是否是一个外部的 API，可编程的 API，用户界面，协议，或者其他任何界面; 伟大的工程师会考虑谁将使用它，为什么要使用它，如何使用它，以及对这些用户来说什么是重要的。记住用户的需求是良好用户体验的核心。
### 4\. The best code is no code, or code you don’t have to maintain
### 4\. 最好的代码是没有代码，或者你不需要维护的代码
- All I have to say is “coders gonna code.” You ask someone in any profession how to solve a problem, and they are going to err on the side of what they are good at. It is just human nature. Most software engineers are always going to err on the side of writing code, especially when a non-technical solution isn’t obvious. The same goes for code you don’t have to maintain. Engineering teams are apt to want to reinvent the wheel, when lots of wheels already exist. This is a balancing act, there are lots of reasons to grow your own, but beware of toxic “Not Invented Here” syndrome.
  
  我要说的就是“程序员会编码。”你问任何职业的人如何解决一个问题，他们都会在自己擅长的方面犯错。这是人类的天性。大多数软件工程师总是会在编写代码方面犯错误，尤其是在非技术性解决方案不明显的情况下。对于不需要维护的代码，情况也是如此。当很多轮子已经存在的时候，工程团队倾向于重新发明轮子。这是一个平衡的行为，有很多理由来种植你自己的，但是要小心有毒的“不是这里发明的”综合症。
### 5\. Software is a means to an end
### 5\. 软件是达到目的的手段
- The primary job of any software engineer is delivering value. Very few software developers understand this, even fewer internalize it. Truly internalizing this leads to a different way of solving problems, and a different way of viewing your tools. If you really believe that software is subservient to the outcome, you’ll be ready to really find “the right tool for the job” which might not be software at all.
  
  任何软件工程师的主要工作是提供价值。很少有软件开发人员能够理解这一点，甚至很少有软件开发人员能够内化它。真正内化这一点会带来解决问题的不同方式，以及看待工具的不同方式。如果你真的相信软件服从于结果，那么你就准备好真正找到“适合这项工作的工具”，而这个工具可能根本就不是软件。
### 6\. Sometimes you have to stop sharpening the saw, and just start cutting shit
### 6\. 有时候你不得不停止磨锯子，而是开始切东西
- Some people tend to jump into problems and just start writing code. Other people tend to want to research and research and get caught in analysis paralysis. In those cases, set a deadline for yourself and just start exploring solutions. You’ll quickly learn more as you start solving the problem, and that will lead you to iterate into a better solution.
  
  有些人倾向于直接进入问题并开始编写代码。其他人倾向于研究和调查，结果陷入分析瘫痪。在这种情况下，给自己设定一个最后期限，然后开始寻找解决方案。当你开始解决这个问题的时候，你会很快学到更多的东西，这将引导你迭代出一个更好的解决方案。
### 7\. If you don’t have a good grasp of the universe of what’s possible, you can’t design a good system
### 7\. 如果你不能很好地把握宇宙中的可能性，你就无法设计出一个好的系统
- This is something I struggle with a lot as my responsibilities take me further and further from the day to day of software engineering. Keeping up with the developer ecosystem is a huge amount of work, but it is critical to understand what is possible. If you don’t understand what is possible and what is available in a given ecosystem then you’ll find it impossible to design a reasonable solution to all but the most simple of problems. To summarize, be wary of people designing systems who haven’t written any code in a long time.
  
  随着我的职责从日常的软件工程到现在的工作，这是一件让我很纠结的事情。跟上开发人员生态系统的发展需要做大量的工作，但是理解什么是可能的是至关重要的。如果你不知道在一个给定的生态系统中什么是可能的，什么是可用的，那么你就会发现除了最简单的问题之外，不可能为所有问题设计一个合理的解决方案。总而言之，要小心那些长期没有编写任何代码的系统设计人员。
### 8\. Every system eventually sucks, get over it
### 8\. 每个系统最终都会失败，克服它
- Bjarne Stroustrup has a quote that goes “There are only two kinds of languages: the ones people complain about and the ones nobody uses”. This can be extended to large systems as well. There is no “right” architecture, you’ll never pay down all of your technical debt, you’ll never design the perfect interface, your tests will always be too slow. This isn’t an excuse to never make things better, but instead a way to give you perspective. Worry less about elegance and perfection; instead strive for continuous improvement and creating a livable system that your team enjoys working in and sustainably delivers value.
  
  比雅尼·斯特劳斯特鲁普有这样一句话: 世界上只有两种语言: 一种是人们抱怨的语言，另一种是没有人使用的语言。这也可以推广到大型系统。没有“正确”的架构，你永远不会偿还所有的技术债务，你永远不会设计出完美的界面，你的测试总是太慢。这不是一个永远不能让事情变得更好的借口，而是一种给你观点的方式。少担心优雅和完美，相反，努力持续改进，创造一个适宜居住的系统，让你的团队享受工作并可持续地提供价值。
### 9\. Nobody asks “why” enough
### 9\. 没有人足够多地问为什么
- Take any opportunity to question assumptions and approaches that are “the way things have always been done”. Have a new team member coming on board? Pay attention to where they get confused and what questions they ask. Have a new feature request that doesn’t make sense? Make sure you understand the goal and what is driving the desire for this functionality. If you don’t get a clear answer, keep asking why until you understand.
  
  抓住任何机会质疑那些“一直以来都是这样做的”的假设和方法。有新的团队成员加入吗？注意他们在哪里感到困惑，他们问了什么问题。有一个没有意义的新特性请求？确保你理解这个目标，以及是什么驱动了对这个功能的渴望。如果你没有得到一个明确的答案，不断地问为什么，直到你明白为止。
### 10. We should be far more focused on avoiding 0.1x programmers than finding 10x programmers
### 10\. 我们应该更专注于避免 0.1 x 的程序员，而不是寻找 10 倍的程序员
- [The 10x programmer is a silly myth.](https://www.simplethread.com/the-10x-programmer-myth/) The idea that someone can produce in 1 day what another competent, hard working, similarly experienced programmer can produce in 2 weeks is silly. I’ve seen programmers that sling 10x the amount of code, and then you have to fix it 10x the amount of times. The only way someone can be a 10x programmer is if you compare them to 0.1x programmers. Someone who wastes time, doesn’t ask for feedback, doesn’t test their code, doesn’t consider edge cases, etc… We should be far more concerned with keeping 0.1x programmers off our teams than finding the mythical 10x programmer.
  
  10 倍的程序员是一个愚蠢的神话。认为一个人可以在一天内完成另一个有能力、勤奋、同样有经验的程序员在两周内完成的工作，这种想法是愚蠢的。我曾经见过程序员把代码量增加 10 倍，然后你必须把它修复 10 倍。一个人能成为 10 倍程序员的唯一方法就是将他们与 0.1 倍程序员进行比较。浪费时间，不要求反馈，不测试代码，不考虑边缘案例等等。.我们更应该关心的是让 0.1 x 的程序员远离我们的团队，而不是寻找神话般的 10 倍程序员。
### 11. One of the biggest differences between a senior engineer and a junior engineer is that they’ve formed opinions about the way things should be
### 11. 高级工程师和初级工程师最大的区别之一是，他们已经形成了对事情应该是什么样子的看法
- Nothing worries me more than a senior engineer that has no opinion of their tools or how to approach building software. I’d rather someone give me opinions that I violently disagree with than for them to have no opinions at all. If you are using your tools, and you don’t love or hate them in a myriad of ways, you need to experience more. You need to explore other languages, libraries, and paradigms. There are few ways of leveling up your skills faster than actively seeking out how others accomplish tasks with different tools and techniques than you do.
  
  没有什么比一个高级工程师对他们的工具或者如何构建软件没有意见更让我担心的了。我宁愿有人给我一些我强烈反对的意见，也不愿他们没有任何意见。如果你正在使用你的工具，并且你不以无数种方式爱或恨它们，你需要体验更多。您需要探索其他语言、库和范例。几乎没有什么方法可以比你更快地升级你的技能，而是积极地寻找其他人是如何用不同的工具和技术完成任务的。
### 12. People don’t really want innovation
### 12\. 人们并不真的需要创新
- People talk about innovation a whole lot, but what they are usually looking for is cheap wins and novelty. If you truly innovate, and change the way that people have to do things, expect mostly negative feedback. If you believe in what you’re doing, and know it will really improve things, then brace yourself for a long battle.
  
  人们总是谈论创新，但是他们通常寻找的是廉价的胜利和新奇。如果你真的在创新，改变人们做事的方式，最好期待负面的反馈。如果你相信你正在做的事情，并且知道它真的会改善事情，那么就做好准备迎接一场长期的战斗。
### 13. Your data is the most important part of your system
### 13\. 你的数据是你系统中最重要的部分
- I’ve seen a lot of systems where hope was the primary mechanism of data integrity. In systems like this, anything that happens off the golden path creates partial or dirty data. Dealing with this data in the future can become a nightmare. Just remember, your data will likely long outlive your codebase. Spend energy keeping it orderly and clean, it’ll pay off well in the long run.
  
  我见过很多把希望作为数据完整性主要机制的系统。在这样的系统中，黄金路径之外发生的任何事情都会创建部分或脏数据。未来处理这些数据可能会成为一场噩梦。请记住，您的数据可能会比代码库更长寿。花费精力保持它的有序和清洁，从长远来看，它会得到很好的回报。
### 14. Look for technological sharks
### 14\. 寻找科技鲨鱼
- Old technologies that have stuck around are [sharks, not dinosaurs](https://www.simplethread.com/relational-databases-arent-dinosaurs-theyre-sharks/). They solve problems so well that they have survived the rapid changes that occur constantly in the technology world. Don’t bet against these technologies, and replace them only if you have a very good reason. These tools won’t be flashy, and they won’t be exciting, but they will get the job done without a lot of sleepless nights.
  
  一直存在的老技术是鲨鱼，而不是恐龙。他们解决问题的能力如此之强，以至于他们在技术世界不断发生的快速变化中幸存了下来。不要对这些技术打赌，只有在你有很好的理由的情况下才替换它们。这些工具不会华而不实，也不会令人兴奋，但它们可以在没有许多不眠之夜的情况下完成工作。
### 15. Don’t mistake humility for ignorance
### 15\. 不要把谦卑误认为无知
- There are a lot of software engineers out there who won’t express opinions unless asked. Never assume that just because someone isn’t throwing their opinions in your face that they don’t have anything to add. Sometimes the noisiest people are the ones we want to listen to the least. Talk to the people around you, seek their feedback and advice. You’ll be glad you did.
  
  有很多软件工程师除非被问到，否则不会表达意见。永远不要因为别人没有把他们的意见扔到你面前，就认为他们没有什么要补充的。有时候最吵的人恰恰是我们最不想听的人。与你周围的人交谈，寻求他们的反馈和建议。你会很高兴你这么做的。
### 16. Software engineers should write regularly
### 16\. 软件工程师应该定期写作
- Software engineers should regularly blog, journal, write documentation and in general do anything that requires them to keep their written communication skills sharp. Writing helps you think about your problems, and helps you communicate those more effectively with your team and your future self. Good written communication is one of the most important skills for any software engineer to master.
  
  软件工程师应该定期写博客、日志、写文档，并且一般地做任何需要他们保持书面沟通技巧敏锐的事情。写作可以帮助你思考你的问题，并帮助你更有效地与你的团队和你未来的自己沟通。对于任何软件工程师来说，良好的书面沟通能力是最重要的技能之一。
### 17. Keep your processes as lean as possible
### 17\. 保持你的过程尽可能的精简
- Everyone wants to be agile these days, but being “agile” is about building things in small chunks, learning, and then iterating. If someone is trying to shoehorn much more into it than that, then they’re [probably selling something](https://www.simplethread.com/agile-at-20-the-failed-rebellion/). It isn’t to say that people don’t need accountability or help to work this way, but how many times have you heard someone from your favorite tech company or large open source project brag about how great their Scrum process is? Stay lean on process until you know you need more. Trust your team and they will deliver.
  
  现在每个人都希望变得敏捷，但是“敏捷”是指在小的范围内构建事物，学习，然后迭代。如果有人试图把更多的东西塞进去，那么他们很可能是在卖东西。这并不是说人们不需要问责或帮助来这样工作，但是你有多少次听到你最喜欢的科技公司或大型开源项目的人吹嘘他们的 Scrum 流程有多棒？在你知道自己需要更多的东西之前，一直遵循流程。相信你的团队，他们会做到的。
### 18. Software engineers, like all humans, need to feel ownership
### 18\. 软件工程师，像所有人一样，需要感受到所有权
- If you divorce someone from the output of their work, they will care less about their work. I see this almost as a tautology. This is the primary reason why cross-functional teams work so well, and why DevOps has become so popular. It isn’t all about handoffs and inefficiencies, it is about owning the whole process from start to finish, and being directly responsible for delivering value. Give a group of passionate people complete [ownership over designing](https://www.simplethread.com/doerrs-law-on-product-teams/), building, and delivering a piece of software (or anything really) and amazing things will happen.
  
  如果你把某人的工作成果与他们的工作分离开来，他们就不会那么关心自己的工作。我认为这几乎是同义反复。这就是为什么跨职能团队工作得这么好的主要原因，也是为什么 DevOps 变得如此流行的主要原因。这并不全是关于换手和低效率，而是关于从开始到结束拥有整个过程，并直接负责交付价值。给予一群充满激情的人对设计、构建和交付一个软件(或任何真正的东西)的完全所有权，神奇的事情就会发生。
### 19. Interviews are almost worthless for telling how good of a team member someone will be
### 19\. 面试对于告诉别人一个团队成员有多优秀几乎毫无价值
- Interviews are far better spent trying to understand who someone is, and how interested they are in a given field of expertise. Trying to suss out how good of a team member they will be is a fruitless endeavor. And believe me, how smart or knowledgable someone is is also not a good indicator that they will be a great team member. No one is going to tell you in an interview that they are going to be unreliable, abusive, pompous, or never show up to meetings on time. People might claim they have “signals” for these things… “if they ask about time off in the first interview then they are never going to be there!” But these are all bullshit. If you’re using signals like these you’re just guessing and turning away good candidates.
  
  面试更适合用于试图了解某人是谁，以及他们对某个特定领域的专业知识有多感兴趣。试图弄清楚一个团队成员有多优秀是徒劳的。相信我，一个人有多聪明多博学也不能说明他会成为一个优秀的团队成员。没有人会在面试中告诉你，他们不可靠，辱骂，浮夸，或者从不准时出席会议。人们可能会声称他们有这些事情的“信号”... “如果他们在第一次面试时问休息时间，那么他们永远不会在那里!”但这些都是胡说八道。如果你使用这样的信号，你只是在猜测和拒绝好的候选人。
### 20. Always strive to build a smaller system
### 20\. 总是努力建立一个更小的系统
- There are a lot of forces that will push you to build the bigger system up-front. Budget allocation, the inability to decide which features should be cut, the desire to deliver the “best version” of a system. All of these things push us very forcefully towards building too much. You should [fight this](https://www.simplethread.com/where-does-complexity-go/). You learn so much as you’re building a system that you will end up iterating into a much better system than you ever could have designed in the first place. This is surprisingly a hard sell to most people.
  
  有很多的力量将推动你建立一个更大的系统。预算分配，无法决定应该削减哪些功能，渴望提供系统的“最佳版本”。所有这些东西都强有力地推动我们去建造太多的东西。你应该反抗。在构建一个系统的过程中，你学到了很多东西，最终你会迭代到一个比你最初设计的系统要好得多的系统。对于大多数人来说，这是一个令人惊讶的难以推销的东西。