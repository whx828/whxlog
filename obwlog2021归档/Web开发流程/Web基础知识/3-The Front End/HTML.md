In this lesson, we'll learn the basics of HTML! By the end of this lesson, you should be able to comprehend and write basic HTML.
在本课中，我们将学习 HTML 的基础知识！在本课结束时，您应该能够理解和编写基本的 HTML。

## Introduction [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#Introduction-)

HTML (**H**yper**T**ext **M**arkup **L**anguage) is not a programming language. It is a _markup_ language. True programming languages have the ability to describe _logic_. HTML, however, is used to display and format parts of a webpage. It is strictly presentational.
HTML（超文本标记语言）不是一种编程语言。它是一种 _标记_ 语言。真正的编程语言有描述 _逻辑_ 的能力。然而，HTML 是用来显示和格式化网页的一部分。它是严格意义上的展示性语言。

### Tag syntax [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#Tag-syntax-)

HTML _marks up_ content with HTML ‘tags’. HTML tags are the basic building blocks of all web pages. Essentially, they format the way that information and text is displayed. They put the content into categories (called elements!) such as ‘heading’, ‘paragraph’, and ‘table’. A basic HTML tag consists of a name enclosed within ‘angle brackets’ i.e., less than and greater than symbols. Also, these tags usually come in pairs of opening and closing tags. The closing tag is the same as the opening tag except that the closing tag has a forward slash after the less-than symbol. Have a look at the example below.
HTML 用 HTML "标签" 来标记内容。HTML 标签是所有网页的基本组成部分。从本质上讲，它们对信息和文本的显示方式进行了格式化。它们将内容归入不同的类别（称为元素），如 "标题"、"段落" 和 "表格"。一个基本的 HTML 标签由 "角括号" 内的名称组成，即小于和大于符号。另外，这些标签通常是成对出现的，有开始和结束标签。结束标签与开始标签相同，只是结束标签在小于符号后有一个正斜杠。请看下面的例子：

```html
<tagname> content </tagname>
```

Some tags are ‘self-closing’ which means that they don't require a closing tag. For example,
有些标签是“自闭合”的，这意味着它们不需要闭合标签。例如，

```html
<selfclosing/> content
```

The diagram below shows an example of a labeled HTML element.
下图显示了带标签的 HTML 元素的示例。

![[An HTML Element.png]]
An HTML Element

### HTML document structure [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#HTML-document-structure-)

HTML documents follow a specific structure and require some tags to run properly.
HTML 文档遵循一个特定的结构，需要一些标签才能正常运行。

## The `<HTML>` tag [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#The-%3CHTML%3E-tag-)

Everything in an HTML document is enclosed in `<HTML>` tags as highlighted on lines **1** and **8** in the code playground below.
HTML 文档中的所有内容都包含在 `<HTML>` 标记中，如下面代码操场的第 1 行和第 8 行突出显示。

```html
<html>
 <head>
   Content in the head tag.
 </head>

 <body>
   Content in the body tag.
 </body>
</html>
```

## The `<head>` and `<body>` tags [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#The-%3Chead%3E-and-%3Cbody%3E-tags-)

Furthermore, valid HTML documents require the `<head>` and `<body>` tags too as highlighted on lines **2**, **4**, **6**, and **8** below. Also, the head and body tags have nothing to do with where the content is _positioned_ on the output of the browser — they are used to compartmentalize the document itself.
此外，有效的 HTML 文档也需要 `<head>` 和 `<body>` 标记，如下面的第 2、4、6 和 8 行突出显示。此外，head 和 body 标签与内容在浏览器输出中的位置无关——它们用于分隔文档本身。

The `<head>` tag contains metadata such as the page title, links to CSS and JS files, and keywords that are used by search engines like Google. The metadata is not displayed in the browser.
`<head>` 标签包含元数据，例如页面标题、CSS 和 JS 文件的链接以及 Google 等搜索引擎使用的关键字。元数据不会显示在浏览器中。

The `<body>` tag, on the other hand, contains the actual markup like paragraphs, images, and tables that are displayed in the browser.
另一方面，`<body>` 标签包含实际的标记，如在浏览器中显示的段落、图像和表格。

## Doctype [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#Doctype-)

The _doctype_ is a declaration that tells the browser the HTML version that the document is written in. It should be the absolute first thing on the document. Some common doctypes are listed below.
doctype 是一个声明，它告诉浏览器该文档是用哪个 HTML 版本编写的。它应该是文档中绝对的第一要素。下面列出了一些常见的 doctypes。

| **Declaration** | **Type** |
|---|---|
|HTML5|`<!DOCTYPE html>`|
|HTML 4.01 Strict|`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`|
|XHTML 1.0. Strict|`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`|

## HTML comments [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#HTML-comments-)

HTML Comments look like `<!-- Comment -->` and the browser ignores them; you can just put them there for yourself or for others who might look at your HTML document!
HTML 注释看起来像 `<!-- Comment -->` 并且浏览器会忽略它们；您可以将它们放在那里供您自己或可能查看您的 HTML 文档的其他人使用！

### Tag attributes [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#Tag-attributes-)

All HTML tags can have ‘attributes’ which provide more information about a certain element. Attributes are always placed in the opening tag of an element and exist as key/value pairs. The values are always in quotes (they can be double or single, but they're usually double). To illustrate,
所有的 HTML 标签都可以有 "属性"，提供关于某个元素的更多信息。属性总是放在一个元素的开头标签中，以键/值对的形式存在。值总是在引号中（它们可以是双数或单数，但通常是双数）。举例说明：

```html
<tagname attribute = "value"> content </tagname>
```

### Common tags [#](https://www.educative.io/courses/web-development-a-primer/JYE8Dm9V4wv#Common-tags-)

The HTML below illustrates how some common tags are used. Notice the `<img>` tag and how it has an attribute called `src`.
下面的 HTML 说明了如何使用一些常用标签。请注意 `<img>` 标签以及它如何具有名为 `src` 的属性。

```html
<!DOCTYPE html>

<html>
 <head>

   <!-- An HTML Comment! -->

 </head>

 <body>

   <!-- Headings -->

   <h1>Heading 1</h1>

   <h2>Heading 2</h2>

   <h3>Heading 3</h3>

   <h4>Heading 4</h4>

   <!-- A paragraph -->

   <p> A paragraph </p>

   <!-- A link -->

   <a href="https://www.educative.io/explore"> Educative </a>

   <!-- An Unordered List -->

   <ul style="list-style-type:disc">

    <li>An</li>

    <li>Unordered</li>

    <li>List</li>

   </ul>

   <ol type="1">

    <li>An</li>

    <li>Ordered</li>

    <li>List</li>

   </ol>

   <!-- A table -->

<table>

 <tr>

   <th>Language</th>

   <th>Application</th>

 </tr>

 <tr>

   <td>JavaScript</td>

   <td>Front End and Back End</td>

 </tr>

 <tr>

   <td>Python</td>

   <td>Back End</td>

 </tr>

 <tr>

   <td>PHP</td>

   <td>Back End</td>

 </tr>

 <tr>

   <td>C#</td>

   <td>Back End</td>

 </tr>

</table>

   <!-- An image -->

   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png">

 </body>

</html>
```

---

Now that we have touched upon the very basics of HTML, let's get into styling HTML output with CSS in the next lesson!
现在我们已经接触了 HTML 的基础知识，让我们在下一课中使用 CSS 来设置 HTML 输出的样式！

