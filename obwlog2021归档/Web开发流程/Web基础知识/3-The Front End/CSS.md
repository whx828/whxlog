This lesson gives a brief introduction to cascading style sheets and how they are used with HTML.
本课简要介绍了层叠样式表，以及它们是如何与 HTML 一起使用的。

## Introduction [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Introduction)

CSS, like HTML, is not a programming language, it's a styling language for HTML. To understand CSS, it's worth recalling the main purpose of HTML. HTML was originally designed as a structural language, but with time and updates, it has been turned into a tool for presentation which uses fonts, colors, and other visual elements. The purpose of CSS is to restore HTML to its original status as a _structural_ language. In other words, cascading style sheets are a way to format your page layout, text, fonts, images, and almost anything that controls the look and feel of your web page. This leaves HTML with the structural work only.
与 HTML 一样，CSS 也不是一种编程语言，它是 HTML 的一种样式设计语言。为了理解 CSS，值得回顾一下 HTML 的主要目的。HTML 最初是作为一种结构性语言设计的，但随着时间的推移和更新，它已经变成了一种使用字体、颜色和其他视觉元素的表现工具。CSS 的目的是将 HTML 恢复到其作为结构性语言的最初状态。换句话说，层叠样式表是一种格式化你的页面布局、文本、字体、图像和几乎所有控制你的网页的外观和感觉的方法。这样，HTML 就只剩下结构性工作了。

## Linking CSS with HTML [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Linking-CSS-with-HTML)

There are three ways to add CSS to the HTML code.
可以通过三种方式将 CSS 添加到 HTML 代码中。

### Inline CSS [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Inline-CSS)

CSS is said to be added ‘inline’ when it is used in the `style` attribute of HTML tags. This is inefficient and not scalable because each individual tag would have to have the CSS inserted. This method is generally never used as it is extremely impractical.
当 CSS 被用在 HTML 标签的样式属性中时，它被称为 "内联" 添加。这种方法效率低下，而且不具有可扩展性，因为每个标签都必须插入 CSS。这种方法通常不被使用，因为它是非常不切实际的。

**HTML Input**

```html
<h3 style ="color:blue">Blue Heading!</h3>
```

### Internal CSS [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Internal-CSS)

You can use `<style>` tags within the `<head>` of the HTML to define the style of a certain tag. For instance, in the example below, all h3 headings are defined to be blue. This approach is clearly better from using CSS inline because this makes the code less repetitive, easier to read and write, and overall economical.
你可以在 HTML 的 `<head>` 标签中使用 `<style>` 标签来定义某个标签的样式。例如，在下面的例子中，所有 `h3` 标题都被定义为蓝色。这种方法显然比使用 CSS 内联更好，因为这使代码不那么重复，更容易阅读和书写，而且总体上更经济。

```html
<html>
 <head>
  <style>
   h3 {color: blue;}
  </style>
 </head>

 <body>
   <h3>Internal CSS</h3>
 </body>
</html>
```

### External CSS [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#External-CSS)

CSS is most commonly written in a separate file and linked up with the HTML. The advantage of doing so is that it can be reused by other HTML files, updating it becomes simpler, and web pages can be tailored for different users, browsers, and platforms.
CSS 最常被写在一个单独的文件中，并与 HTML 连接起来。这样做的好处是，它可以被其他 HTML 文件重复使用，更新变得更简单，而且可以为不同的用户、浏览器和平台定制网页。

You can do so by writing a self-closing link tag in your HTML head like the following,
您可以通过在 HTML 头中编写一个自关闭链接标签来实现，如下所示，

```html
<link rel="stylesheet" href="cssfilename.css">
```

the `rel` attribute of the link element above tells the HTML to import a CSS file.
上面链接元素的 rel 属性告诉 HTML 导入一个 CSS 文件。

CSS usage goes far beyond changing the colors of headings. It gives you complete control over the look of your page down to the very last pixel.
CSS 的使用远远超过了改变标题的颜色。它使你能够完全控制你的页面的外观，甚至是一个像素。

### Page layout techniques [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Page-layout-techniques)

CSS page layout techniques provide us with an efficient way to layout, align, and distribute space among elements within your document, even when the viewport and the size of your elements are dynamic or unknown. Some essential page layout techniques involve Flexbox and Grid.
CSS 页面布局技术为我们提供了一种有效的方式来布局、对齐和分配文档中各元素的空间，即使视口和元素的大小是动态的或未知的。一些基本的页面布局技术涉及 Flexbox 和 Grid。

### Animations [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Animations)

CSS even provides us with a way to animate HTML elements without having to use JavaScript or Flash! So you can move things around with pure CSS.
CSS 甚至为我们提供了一种无需使用 JavaScript 或 Flash 即可为 HTML 元素设置动画的方法！所以你可以只用 CSS 让东西动起来。

### Preprocessors [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#Preprocessors)

A CSS preprocessor is a scripting language that extends CSS and then compiles it into regular CSS.
CSS 预处理器是一种脚本语言，它扩展了 CSS，然后将其编译成普通的 CSS。

#### SASS & LESS [#](https://www.educative.io/courses/web-development-a-primer/3j6GR8PROo9#SASS-&-LESS)

**S**yntactically **A**wesome **S**tyle **S**heets and **L**eaner **S**tyle **S**heets are language extensions for CSS that allow you to use more conventional programming constructs such as variables, conditionals, and loops to generate CSS. The CSS preprocessor converts the SASS code into regular CSS.
Syntactically Awesome Style Sheets 和 Leaner Style Sheets 是 CSS 的语言扩展，允许你使用更传统的编程结构，如变量、条件和循环来生成 CSS。CSS 预处理器将 SASS 代码转换为常规 CSS。

---

In the next lesson, we'll get an introduction to the world's most popular programming language, JavaScript!
在下一课中，我们将介绍世界上最流行的编程语言 JavaScript！
