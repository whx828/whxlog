---
title: The 80-24 rule
---

- Write small blocks of code. How small? Here's how small.
  写一小段代码。有多小? 这里是有多小。
  One of the most common questions I get is this:
  最常见的问题之一是:
  If you could give just one advice to programmers, what would it be?
  如果你只能给程序员一个建议，那会是什么？
  That's easy:
  这很简单:
  Write small blocks of code.
  编写小块代码。
  Small methods. Small functions. Small procedures.
  小方法，小函数，小程序。
  How small?
  有多小？
- 要写小块代码，越小越好。 #总结 #编程
- Few lines of code 几行代码
  - You can't give a universally good answer to that question. Among other things, it depends on the programming language in question. Some languages are much denser than others. The densest language I've ever encountered is APL.
    对于这个问题，你不能给出一个普遍适用的答案。在其他方面，它取决于所讨论的编程语言。有些语言比其他语言密集得多。我遇到过的最密集的语言是 APL。
  - Most mainstream languages, however, seem to be verbose to approximately the same order of magnitude. My experience is mostly with C#, so I'll use that (and similar languages like Java) as a starting point.
    然而，大多数主流语言对于大致相同的数量级来说似乎是冗长的。我的经验主要是与 c# ，所以我将使用它(和类似的语言，如 Java)作为一个起点。
  - When I write C# code, I become uncomfortable when my method size approaches fifteen or twenty lines of code. C# is, however, a fairly wordy language, so it sometimes happens that I have to allow a method to grow larger. My limit is probably somewhere around 25 lines of code.
    当我编写 c# 代码时，当我的方法大小接近十五二十行代码时，我会感到不舒服。然而，c# 是一种相当冗长的语言，所以有时候我不得不允许一个方法变得更大。我的极限大概是 25 行左右的代码。
  - That's an arbitrary number, but if I have to quote a number, it would be around that size. Since it's arbitrary anyway, let's make it 24, for reasons that I'll explain later.
    这是一个任意的数字，但是如果我要引用一个数字，它大概就是这个大小。因为它是任意的，我们把它设为 24，原因我将在后面解释。
  - The maximum line count of a C# (or Java, or JavaScript, etc.) method, then, should be 24.
    那么，c# (或 Java，或 JavaScript 等)方法的最大行数应该是 24。
  - To repeat the point from before, this depends on the language. I'd consider a 24-line Haskell or F# function to be so huge that if I received it as a pull request, I'd reject it on the grounds of size alone.
    要重复之前的观点，这取决于语言。我认为一个 24 行的 Haskell 或 f# 函数太大了，以至于如果我接收到一个 pull something 请求，我会仅仅根据大小就拒绝它。
- Narrow line width 窄线宽#
  - Most languages allow for flexibility in layout. For example, C-based languages use the ; character as a delimiter. This enables you to write more than one statement per line:
    大多数语言都允许灵活的布局。例如，基于 c 语言使用`;`字符作为分隔符。这使得你可以在每行中写入多个语句:
    ` var foo = 32; var bar = foo + 10; Console.WriteLine(bar); `
  - You could attempt to avoid the 24-line-height rule by writing wide lines. That would, however, be to defeat the purpose.
    你可以尝试通过写宽行来避免 24 行高度的规则，但是，这样做就违背了这个目的。
  - The purpose of writing small methods is to nudge yourself towards writing readable code; code that fits in your brain. The smaller, the better.
    编写小方法的目的是推动自己写出可读的代码; 适合你大脑的代码。越小越好。
  - For completeness sake, let's institute a maximum line width as well. If there's any accepted industry standard for maximum line width, it's 80 characters. I've used that maximum for years, and it's a good maximum.
    为了完整起见，让我们也设置一个最大线宽。如果有任何公认的行宽最大化的行业标准，那就是 80 个字符。我已经使用这个最大值很多年了，这是一个很好的最大值。
  - Like all other programmers, other people's code annoys me. The most common annoyance is that people write too wide code.
    和所有其他程序员一样，其他人的代码让我烦恼，最常见的烦恼就是人们编写的代码太宽。
  - This is probably because most programmers have drunk the Cool Aid that bigger screens make you more productive. When you code on a big screen, you don't notice how wide your lines become.
    这可能是因为大多数程序员已经习惯了大屏幕让你工作效率更高的 Cool Aid。当你在大屏幕上写代码时，你不会注意到你的代码行变得有多宽。
  - There's many scenarios where wide code is problematic:
    在很多情况下，宽代码都是有问题的:
    - When you're comparing changes to a file side-by-side. This often happens when you review
      当您并排比较文件中的更改时，这种情况经常发生在您检查文件时 pull 拉 requests.
    - Now you have only half of your normal screen width.
      现在你只有正常屏幕宽度的一半
    - When you're looking at code on a smaller device.
      当你在一个更小的设备上查看代码时
    - When you're getting old, or are otherwise visually impaired. After I turned 40, I discovered that I found it increasingly difficult to see small things. I still use a 10-point font for programming, but I foresee that this will not last much longer.
      当你老了，或者视力受损的时候。在我 40 岁之后，我发现我越来越难以看到小事情。我仍然使用 10 点字体编程，但我预见这不会持续很长时间
  - What most programmers need, I think, is just a nudge. In Visual Studio, for example, you can install the Editor Guidelines extension, which will display one or more vertical guidelines. You can configure it as you'd like, but I've mine set to 80 characters, and bright red: Screen shot of editor with code, showing red vertical line at 80 characters.
    我认为，大多数程序员需要的只是一个轻推. 例如，在 visualstudio 中，您可以安装编辑指南扩展，它将显示一个或多个垂直指南。你可以根据自己的喜好来设置，但是我的设置是 80 个字符:
  - ![2021_05_18_image.png](https://cdn.logseq.com/%2F1181091c-2f90-43f3-96f8-aa9b7d105a916373f7e4-5e72-4377-ba04-0fecf8ac7a2b2021_05_18_image.png?Expires=4774904934&Signature=DfWYJEKPcnKBVcRBbl0t~LiyMed~X1sO7lQXurJ16CcFZfHvOzyMql7cLkP-UgiY9xykQ7vA8nCdAQw68JrRlO3RwdAGl7ruJJnTpA-oaIVm1Hde9tJHcdxcv9NidQcBMmruLqu6WYL0Co8vjaWDlJLh9llrIEYJGvheU6O4efLGMYJZibtUBEM~kSRfCiYt5FtjlCtT7qmY9T40zuY2F3GXUHMEC0Eu-vqTQTtCogHRZLSB~loKpA7yQ226pCMPovFilp6WVxBTNCzx7Cnaf8ruiVkrHlo0B8MWtCOcFvb9AEtsGyBTYTZHVt~JXj4uH340D8dyUxTNRkgacPMrRg__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
  - Notice the red dotted vertical line that cuts through universe. It tells me where the 80 character limit is.
    注意那条红色虚线，它穿过了整个 universe，它告诉我 80 个字符的限制在哪里。
- Terminal box 接线盒
  - The 80-character limit has a long and venerable history, but what about the 24-line limit? While both are, ultimately, arbitrary, both fit the size of the popular VT100 terminal, which had a display resolution of 80x24 characters.
    80 个字符的限制有着悠久而珍贵的历史，但是 24 个字符的限制呢？虽然两者最终都是任意的，但都符合流行的 VT100 终端的大小，该终端的显示分辨率为 80x24 个字符。
  - A box of 80x24 characters thus reproduces the size of an old terminal. Does this mean that I suggest that you should write programs on terminals? No, people always misunderstand this. That should be the maximum size of a method. On larger screens, you'd be able to see multiple small methods at once. For example, you could view a unit test and its target in a split screen configuration.
    由 80x24 个字符组成的盒子可以复制出旧终端的大小。这是否意味着我建议你应该在终端上编写程序？不，人们总是误解这一点。这应该是方法的最大大小。在大屏幕上，你可以同时看到多个小方法。例如，可以在分割屏幕配置中查看单元测试及其目标。
  - The exact sizes are arbitrary, but I think that there's something fundamentally right about such continuity with the past.
    确切的尺寸是任意的，但是我认为这种与过去的连续性从根本上来说是正确的。
  - I've been using the 80-character mark as a soft limit for years. I tend to stay within it, but I occasionally decide to make my code a little wider. I haven't paid quite as much attention to the number of lines of my methods, but only for the reason that I know that I tend to write methods shorter than that. Both limits have served me well for years.
    多年来，我一直将 80 个字符的符号作为一个软限制。我倾向于保持在这个范围内，但是我偶尔会决定将我的代码扩展一下。我并没有太多地关注我的方法的行数，但仅仅是因为我知道我倾向于写比这更短的方法。多年来，这两种限制都让我受益匪浅。
- Example 例子
  - Consider this example:
    考虑一下这个例子:
    ` public ActionResult Post(ReservationDto dto) { var validationMsg = Validator.Validate(dto); if (validationMsg != "") return BadRequest(validationMsg); var reservation = Mapper.Map(dto); var reservations = Repository.ReadReservations(reservation.Date); var accepted = maîtreD.CanAccept(reservations, reservation); if (!accepted) return StatusCode( StatusCodes.Status500InternalServerError, "Couldn't accept."); var id = Repository.Create(reservation); return Ok(id); } `
  - This method is 18 lines long, which includes the method declaration, curly brackets and blank lines. It easily stays within the 80-character limit. Note that I've deliberately formatted the code so that it behaves. You can see it in this fragment:
    这个方法有 18 行，包括方法声明、花括号和空行。它很容易保持在 80 个字符的限制之内。请注意，我特意设置了代码的格式，以使其行为。你可以在这个片段中看到:
    ` return StatusCode( StatusCodes.Status500InternalServerError, "Couldn't accept."); Most people write it like this: `
  - 大多数人是这样写的:
    ` return StatusCode(StatusCodes.Status500InternalServerError, "Couldn't accept."); That doesn't look bad, but I've seen much worse examples. `
  - 这看起来并不糟糕，但我见过更糟糕的例子。
  - Another key to writing small methods is to call other methods. The above Post method doesn't look like much, but significant functionality could be hiding behind Validator.Validate, Repository.ReadReservations, or maîtreD.CanAccept. I hope that you agree that each of these objects and methods are named well enough to give you an idea about their purpose.
    编写小方法的另一个关键是调用其他方法。上面的 Post 方法看起来不怎么样，但是重要的功能可能隐藏在 Validator 之后。验证，存储库。阅读预订，或者 maîtreD.CanAccept。我希望您同意这些对象和方法的命名足够好，可以让您了解它们的用途。
-
- Code that fits in your brain 适合你大脑的代码
- As I describe in my Humane Code video, the human brain can only keep track of about seven things. I think that this rule of thumb applies to the way we read and interpret code. If you need to understand and keep track of more than seven separate things at the same time, the code becomes harder to understand.
  正如我在我的人道代码视频中描述的那样，人类的大脑只能记住大约七件事情。我认为这个经验法则适用于我们阅读和解释代码的方式。如果您需要同时理解并跟踪七个以上不同的事情，那么代码就会变得更难理解。
- This could explain why small methods are good. They're only good, however, if they're self-contained. When you look at a method like the above Post method, you'll be most effective if you don't need to have a deep understanding of how each of the dependencies work. If this is true, the method only juggles about five dependencies: Validator, Mapper, Repository, maîtreD, and its own base class (which provides the methods BadRequest, StatusCode, and Ok). Five dependencies is fewer than seven.
  这可以解释为什么小的方法是好的。然而，它们只有在自给自足的情况下才是好的。当你查看一个类似于上面的 Post 方法时，如果你不需要深入理解每个依赖项是如何工作的，那么你将是最有效的。如果这是真的，那么该方法只能切换五种依赖关系: Validator、 Mapper、 Repository、 maîtreD 和它自己的基类(它提供了 BadRequest、 StatusCode 和 Ok 方法)。五个依赖项少于七个。
- Another way to evaluate the cognitive load of a method is to measure its cyclomatic complexity. The Post method's cyclomatic complexity is 3, so that should be easily within the brain's capacity.
  另一种评估方法的认知负荷的方法是测量它的循环复杂度。波斯特方法的循环复杂度是 3，所以这应该很容易在大脑的能力范围内。
- These are all heuristics, so read this for inspiration, not as law. They've served me well for years, though.
  这些都是启发法，所以读这篇文章是为了激发灵感，而不是作为法律。
-
- Conclusion 总结#
  - You've probably heard about the 80/20 rule, also known as the Pareto principle. Perhaps the title lead you to believe that this article was a misunderstanding. I admit that I went for an arresting title; perhaps a more proper name is the 80x24 rule.
    你可能已经听说过 80/20 法则，也被称为帕雷托法则。也许这个标题让你认为这篇文章是一个误解。我承认我想要一个引人注目的头衔; 也许更合适的名字是 80x24 规则。
  - The exact numbers can vary, but I've found a maximum method size of 80x24 characters to work well for C#.
    确切的数字可能会有所不同，但是我发现一个最大的方法大小为 80x24 个字符，可以很好地适用于 c# 。
