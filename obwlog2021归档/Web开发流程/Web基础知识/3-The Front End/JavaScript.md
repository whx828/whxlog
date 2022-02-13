Here is a brief introduction to JavaScript as used on the front end.
下面是对前端使用的 JavaScript 的简要介绍。

## Introduction [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#Introduction-)

JavaScript is the web scripting language developed by Netscape. It is the most popular programming language in the world today. The language was standardized to ECMAScript, as a cross-platform Internet standard for scripting, but it is still most commonly called JavaScript.
JavaScript 是由 Netscape 开发的网络脚本语言。它是当今世界上最流行的编程语言。该语言被标准化为 ECMAScript，作为一种跨平台的互联网脚本标准，但它仍然最常被称为 JavaScript。

### Java vs JavaScript [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#Java-vs-JavaScript-)

A lot of people confuse JavaScript with Java and are under the impression that JavaScript is a ‘script-ier’ version of Java and begin to learn it. That cannot be further from the truth; Java is to JavaScript what car is to carpet. They don't have anything to do with each other.
很多人把 JavaScript 和 Java 混为一谈，认为 JavaScript 是 Java 的 "脚本化" 版本，并开始学习它。这与事实相差甚远；Java 之于 JavaScript 就像汽车之于地毯。它们之间没有任何关系。

JavaScript is syntactically similar to C and C++, though. If you are familiar with these languages, you will be comfortable learning JavaScript. However, if you don't have any prior programming experience, you will find JavaScript a bit challenging.
不过，JavaScript 在语法上与 C 和 C++相似。如果你熟悉这些语言，你会很容易学习 JavaScript。但是，如果你以前没有任何编程经验，你会发现 JavaScript 有点挑战性。

### Why JavaScript? [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#Why-JavaScript?-)

JavaScript allows you to implement complex things on web pages; every time a web page does more than just display static information such as content updates, interactive maps, and animated 2D/3D graphics, JavaScript is probably involved. It is the third layer of standard web technologies, two of which (HTML and CSS) we have already covered.
JavaScript 允许你在网页上实现复杂的东西；每当一个网页不仅仅是显示静态信息，如内容更新、交互式地图和动画的 2D/3D 图形，可能都涉及到 JavaScript。它是标准网络技术的第三层，其中两层（HTML 和 CSS）我们已经介绍过了。

## The web browser console [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#The-web-browser-console-)

If you have taken a basic programming course, you would know that you can print things on to the terminal. For example, you can use `cout << string` in C++ to print `string`. But how do you do this in a JavaScript program since JavaScript runs on browsers? Well, it turns out all browsers have a console that is not _displayed_ by default but can be viewed. If you are on Chrome or Firefox, for example, just hit Cmd+Option+J on Mac or Ctrl+Shift+J on Windows to view the console! You can do something similar on [Safari](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/KeyboardShortcuts/KeyboardShortcuts.html) .
如果你学过基本的编程课程，你会知道你可以在终端上打印东西。例如，你可以在 C++中使用 `cout << string` 来打印字符串。但是，由于 JavaScript 是在浏览器上运行的，你如何在 JavaScript 程序中这样做呢？好吧，事实证明，所有的浏览器都有一个默认不显示的控制台，但可以查看。例如，如果你在 Chrome 或 Firefox 上，只要在 Mac 上按 `Cmd+Option+J`，或在 Windows 上按 `Ctrl+Shift+J`，就可以查看控制台了。你可以在 Safari 上做类似的事情。

## Hello World! \#
Let's look at a basic hello world program in JavaScript.
让我们看一个基本的 JavaScript hello world 程序。

`console.log("Hello World!");`

If this were part of the front-end code run on a browser, “Hello World!” would get printed onto the console.
如果这是在浏览器上运行的前端代码的一部分，"Hello World!" 会被打印到控制台。

## Linking JavaScript, HTML, and CSS [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#Linking-JavaScript,-HTML,-and-CSS-)

By this point, you must be thinking, “Okay this is great, but how do I _actually_ run JavaScript code on my browser together with HTML and CSS?” Well, there are two ways to do so,
说到这里，你一定在想："好吧，这很好，但我如何在浏览器上实际运行 JavaScript 代码和 HTML 及 CSS？" 那么，有两种方法可以做到这一点。

### JavaScript code in the HTML file [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#JavaScript-code-in-the-HTML-file-)

JavaScript can be written directly into an HTML file using the `<script>` tag. For example,
可以使用 `<script>` 标签将 JavaScript 程序直接写入 HTML 文件中。比如说：
```html
<html>
 <head>
 </head>

 <body>
   <script> console.log("This is JavaScript in an HTML file!") </script>
 </body>
</html>
```

### External JavaScript [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#External-JavaScript-)

JavaScript files (files with a ‘**.js**’ extension) can otherwise be imported into HTML files similar to how CSS files are imported,
JavaScript 文件（以'.js'为扩展名的文件）也可以被导入到 HTML 文件中，与 CSS 文件的导入方式类似。

```html
<script src="myJSscript.js"></script>
```

You can place an external script reference in the `<head>` or the `<body>`. The imported script will behave as if it was written exactly where the `<script>` tag is located.
你可以在 `<head>` 或 `<body>` 中放置一个外部脚本参考。导入的脚本会像写在 `<script>` 标签所在的位置一样。

## The DOM [#](https://www.educative.io/courses/web-development-a-primer/B8P081MzmZx#The-DOM-)

Notice how in HTML files, there is one main `<HTML>` tag, then there are tags within that tag and other tags within those and so on? Well, that HTML structure can be mapped onto a [tree](https://en.wikipedia.org/wiki/Tree_%28data_structure%29) . The DOM stores these HTML elements as objects that can then be manipulated in various ways through JavaScript. To learn more about DOM manipulation with JavaScript, check out our course: [Learn web development from scratch: Go Beyond the syntax](https://www.educative.io/collection/10370001/5686791109607424?authorName=Medhir%20Bhargava) .
注意到在 HTML 文件中，有一个主要的 `<HTML>` 标签，然后在这个标签中又有一些标签，在这些标签中又有其他的标签，等等。那么，这种 HTML 结构可以被映射到一棵树上。DOM 将这些 HTML 元素存储为对象，然后可以通过 JavaScript 以各种方式进行操作。

---

That's it for this chapter! We hope you now have a basic idea of how most websites work on the front-end. In the next chapter, we'll dive into the basics of website back-end programming!
这就是本章的内容！我们希望您现在对大多数网站在前端的工作方式有一个基本的了解。在下一章中，我们将深入了解网站后端编程的基础知识！
