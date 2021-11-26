---
title: How Wavelets Allow Researchers to Transform, and Understand, Data
---

###### [applied math 应用数学](https://www.quantamagazine.org/tag/applied-math/)

Built upon the ubiquitous Fourier transform, the mathematical tools known as wavelets allow unprecedented analysis and understanding of continuous signals.
建立在无处不在的傅里叶变换基础之上的数学工具 wavelets 允许对连续信号进行前所未有的分析和理解

In an increasingly data-driven world, mathematical tools known as wavelets have become an indispensable way to analyze and understand information. Many researchers receive their data in the form of continuous signals, meaning an unbroken stream of information evolving over time, such as a geophysicist listening to sound waves bouncing off of rock layers underground, or a data scientist studying the electrical data streams obtained by scanning images. These data can take on many different shapes and patterns, making it hard to analyze them as a whole or to take them apart and study their pieces — but wavelets can help.

在一个日益数据驱动的世界里，数学工具 wavelets 已经成为分析和理解信息不可或缺的工具。许多研究人员以连续信号的形式接收他们的数据，这意味着一条不间断的信息流随着时间的推移而演变，例如一个地球物理学家聆听从地下岩层反弹回来的声波，或者一个数据科学家研究通过扫描图像获得的电子数据流。这些数据可以呈现出许多不同的形状和图案，因此很难将它们作为一个整体进行分析，也很难将它们分解并研究它们的各个部分，但小波可以提供帮助。

Wavelets are representations of short wavelike oscillations with different frequency ranges and shapes. Because they can take on many forms — nearly any frequency, wavelength and specific shape is possible — researchers can use them to identify and match specific wave patterns in almost any continuous signal. Because of their wide versatility, wavelets have revolutionized the study of complex wave phenomena in image processing, communication and scientific data streams.

小波是具有不同频率范围和形状的短小波振荡的表示。由于它们可以呈现多种形式ーー几乎可以呈现任何频率、波长和特定形状ーー研究人员可以利用它们来识别和匹配几乎任何连续信号中的特定波形。小波变换因其广泛的通用性，在图像处理、通信和科学数据流方面彻底改变了对复杂波现象的研究。

“In fact, few mathematical discoveries have influenced our technological society as much as wavelets have,” said [Amir-Homayoon Najmi](https://ep.jhu.edu/faculty/amir-homayoon-najmi/), a theoretical physicist at Johns Hopkins University. “Wavelet theory has opened doors to many applications in a unified framework with an emphasis on speed, sparsity and accuracy that were simply unavailable before.”

约翰·霍普金斯大学的理论物理学家 Amir-Homayoon Najmi 说: “事实上，几乎没有什么数学发现像小波对我们的技术社会产生的影响那么大。”。“小波理论在一个统一的框架内为许多应用打开了大门，它强调速度、稀疏性和准确性，这些在以前是根本无法实现的。”

Wavelets came about as a kind of update to an enormously useful mathematical technique known as the Fourier transform. In 1807, Joseph Fourier discovered that any periodic function — an equation whose values repeat cyclically — could be expressed as the sum of trigonometric functions like sine and cosine. This proved useful because it allows researchers to split a signal stream into its constituent parts, enabling, for instance, a seismologist to identify the nature of underground structures based on the intensity of the different frequencies in reflected sound waves.

Wavelets 是作为一种非常有用的数学技术的更新而诞生的，这种技术被称为傅里叶变换。1807 年，Joseph Fourier 发现，任何周期函数---- 一个其值循环重复的方程---- 都可以表示为正弦和余弦之类的三角函数之和。这被证明是有用的，因为它允许研究人员将信号流分解成它的组成部分，例如，使地震学家能够根据反射声波中不同频率的强度来确定地下结构的性质。

As a result, the Fourier transform has led directly to a number of applications in scientific research and technology. But wavelets allow for much more precision. “Wavelets have opened the door to many improvements in de-noising, image restoration and image analysis,” said [Véronique Delouille](http://homepage.oma.be/verodelo/), an applied mathematician and astrophysicist at the Royal Observatory of Belgium who uses wavelets for analyzing images of the sun.

因此，傅里叶变换已经直接导致了一些科学研究和技术的应用。但是小波允许更高的精度。比利时皇家天文台的应用数学家和天体物理学家 Véronique Delouille 使用小波分析太阳图像，他说: “小波开启了去噪、影像复原和图像分析等许多改进的大门。”。

That’s because Fourier transforms have a major limitation: They only supply information about the frequencies present in a signal, saying nothing about their timing or quantity. It’s as if you had a process for determining what kinds of bills are in a pile of cash, but not how many of each there actually were. “Wavelets definitely solved this problem, and this is why they are so interesting,” said [Martin Vetterli](https://www.ae-info.org/ae/Member/Vetterli_Martin), the president of the Swiss Federal Institute of Technology Lausanne.

这是因为傅立叶变换有一个主要的局限性: 它们只提供信号中出现的频率的信息，而没有提到它们的时间和数量。这就好像你有一个确定一堆现金中有哪些种类的钞票的过程，而不是每张钞票实际上有多少。瑞士联邦理工学院洛桑分校(Swiss Federal Institute of Technology Lausanne)校长马丁 · 韦特利(Martin Vetterli)说，“小波无疑解决了这个问题，这就是它们如此有趣的原因。”。

The first attempt to fix this problem came from Dennis Gabor, a Hungarian physicist who in 1946 suggested cutting the signal into short, time-localized segments before applying Fourier transforms. However, these were difficult to analyze in more complicated signals with strongly changing frequency components. This led the geophysical engineer Jean Morlet to develop the use of time windows to investigate waves, with the windows’ lengths depending on the frequency: wide windows for low-frequency segments of the signal and narrow windows for high-frequency segments.

解决这个问题的第一次尝试来自于匈牙利物理学家丹尼斯 · 嘉宝，他在 1946 年建议在应用傅里叶变换之前将信号切割成短的、时间本地化的部分。然而，在频率分量变化较大的复杂信号中，这些信号很难分析。这促使地球物理工程师 Jean Morlet 开发了利用时间窗调查波的方法，时间窗的长度取决于频率: 信号的低频段为宽窗，高频段为窄窗。

But these windows still contained messy real-life frequencies, which were hard to analyze. So Morlet had the idea of matching each segment with a similar wave that was mathematically well understood. This allowed him to grasp the overall structure and timing of these segments and explore them with much greater accuracy. In the early 1980s Morlet named these idealized wave patterns “ondelettes,” French for “wavelets” — literally, “little waves” — because of their appearance. A signal could thus be cut up into smaller areas, each centered around a specific wavelength and analyzed by being paired with the matching wavelet. Now faced with a pile of cash, to return to the earlier example, we’d know how many of each kind of bill it contained.

但是这些窗口仍然包含混乱的现实频率，这很难分析。所以 Morlet 有了一个想法，就是把每一个波段与一个类似的波段进行匹配，这个想法在数学上是可以理解的。这使他能够掌握这些片段的整体结构和时间，并以更高的准确性探索它们。20 世纪 80 年代早期，Morlet 将这些理想化的波浪图案命名为“ ondelettes”，在法语中意为“ wavelets”，字面意思是“小波”，因为它们的出现。因此，信号可以被切割成更小的区域，每个区域都围绕着一个特定的波长，并通过匹配小波进行分析。现在面对一堆现金，回到之前的例子，我们知道每种钞票有多少。

Roughly, imagine that you slide a particular wavelet, of a specific frequency and shape, over the raw signal. Whenever you have a particularly good match, a mathematical operation between them known as the dot product becomes zero, or very close to it. By scanning the entire signal with wavelets of different frequencies you can piece together a solid picture of the entire signal train, allowing for a thorough analysis.

大致来说，想象一下，你将一个特定的，具有特定频率和形状的小波，移动到原始信号上。无论何时你有一个特别好的匹配，它们之间的一个数学运算就是点积变成了零，或者非常接近它。通过用不同频率的小波扫描整个信号，你可以拼凑出整个信号列车的实体图像，从而进行彻底的分析。

Research on wavelets evolved quickly. The French mathematician [Yves Meyer](http://www.nasonline.org/member-directory/members/20033195.html), a professor at the École Normale Supérieure in Paris, was waiting for his turn at a photocopier when a colleague showed him [a paper](https://epubs.siam.org/doi/10.1137/0515056) on wavelets by Morlet and the theoretical physicist Alex Grossmann. Meyer was immediately fascinated and took the first available train to Marseille, where he began working with Grossman and Morlet, as well as the mathematician and physicist Ingrid Daubechies (now at Duke University). Meyer would go on to [win the Abel prize](https://www.quantamagazine.org/yves-meyer-wavelet-expert-wins-abel-prize-20170321/) for his work on wavelet theory.

小波的研究进展很快。法国数学家 Yves Meyer 是巴黎高等师范学校的一名教授，当时他正在复印机前排队等候，一名同事给他看了 Morlet 和理论物理学家 Alex Grossmann 写的一篇关于微波的论文。马赛，在那里他开始与 Grossman 和 Morlet，以及数学家和物理学家英格丽·多贝西合作。梅耶因为在小波理论方面的工作而获得了阿贝尔奖。

A few years later, a graduate student at Pennsylvania State University studying computer vision and image analysis named Stéphane Mallat bumped into an old friend at the beach. The friend, a graduate student with Meyer in Paris, told Mallat about their research in wavelets. Mallat understood the importance of Meyer’s work for his own research right away, and quickly teamed up with Meyer. In 1986 they produced a paper on the application of wavelets in image analysis. Ultimately, this work led to the development of the JPEG2000, a form of image compression in use around the world. The technique analyzes the signal of a scanned image with wavelets to produce a collection of pixels that is overall much smaller than the original image while still allowing the reconstruction of the image with the original resolution. This technique proved valuable when technical constraints limited the transmission of very large data sets.

几年后，一个名叫 Stéphane Mallat 的宾夕法尼亚州立大学研究计算机视觉和图像分析的研究生在海滩上遇到了一个老朋友。这位朋友是迈耶在巴黎的研究生，他告诉马拉特他们在 wavelets 上的研究。马拉特马上明白了迈耶的工作对他自己研究的重要性，并迅速与迈耶合作。1986 年，他们发表了一篇关于小波在图像分析中的应用的论文。最终，这项工作导致了 jpeg2000 的开发，这是一种在世界各地使用的图像压缩。该技术使用小波分析扫描图像的信号，产生的像素总体上比原始图像小得多，同时仍然允许图像按原始分辨率重建。当技术约束限制了超大数据集的传输时，这种技术被证明是有价值的。

![an illustration of nine popular families of wavelets](https://d2r55xnwy6nx47.cloudfront.net/uploads/2021/10/Wavelet-Zoo_MOBILE_1.svg)

Samuel Velasco/Quanta Magazine

Part of what makes wavelets so useful is their versatility, which allow them to decode almost any kind of data. “There are many kinds of wavelets, and you can squish them, stretch them, you can adapt them to the actual image you are looking at,” said [Daan Huybrechs](https://people.cs.kuleuven.be/~daan.huybrechs/), a mathematical engineer at the Catholic University of Leuven in Belgium. The wave patterns in digitized images can differ in many aspects, but wavelets can always be stretched or compressed to match sections of the signal with lower or higher frequencies. The shapes of wave patterns can also change drastically, but mathematicians have developed different types, or “families,” of wavelets with different wavelength scales and shapes to match this variability.

小波之所以如此有用，部分原因在于它们的多功能性，它们几乎可以对任何类型的数据进行解码。比利时荷语天主教鲁汶大学的数学工程师 Daan Huybrechs 说: “有许多种类的微波，你可以压扁它们，拉伸它们，你可以使它们适应你正在看到的实际图像。数字化图像中的波形可以在许多方面有所不同，但是小波总是可以被拉伸或压缩以匹配低频或高频信号的部分。波形的形状也可以发生巨大的变化，但是数学家们已经开发了不同类型或“家族”的具有不同波长尺度和形状的小波来匹配这种变化。

One of the best-known wavelet families is the Daubechies mother wavelet, whose members have a self-similar fractal structure, with large asymmetrical peaks mimicking smaller replications of the peaks. These wavelets have proved so sensitive to image analysis that experts have used them [to distinguish](https://services.math.duke.edu/~ingrid/publications/dating.pdf) original Vincent van Gogh paintings from forgeries. Other wavelet families known for their shapes include the Mexican hat, with one central maximum and two adjacent minima, and the Coiflet wavelet (named after the mathematician Ronald Coifman at Yale University), similar to the Mexican hat but with sharp peaks instead of flat zones. These are useful for capturing and eliminating unwanted noise spikes in images, sound signals and data streams generated by scientific instruments.

其中最著名的小波家族之一是 Daubechies 母小波，它的成员具有自相似的分形结构，大的不对称峰模仿峰的小重复。事实证明，这些小波对图像分析非常敏感，以至于专家们用它们来区分梵高的原作和赝品。其他以其形状著称的小波家族包括墨西哥帽(有一个中心极大值和两个相邻极小值)和 Coiflet wavelet (以耶鲁大学数学家罗纳德 · 科伊夫曼命名) ，它与墨西哥帽类似，但有尖锐的峰顶而不是平坦的区域。这些是有用的捕获和消除不必要的噪声尖峰图像，声音信号和数据流产生的科学仪器。

Besides their use in analyzing sound signals and in image processing, wavelets are also a tool in basic research. They can help researchers discover patterns in scientific data by allowing them to analyze entire data sets at once. “It always strikes me how diverse the applications are,” said Huybrechs. “There is something about wavelets that makes them the ‘right’ way to look at data,” and that’s true no matter what kind of data it is.

除了用于声音信号分析和图像处理，小波也是基础研究的工具。通过允许研究人员一次性分析整个数据集，他们可以帮助研究人员发现科学数据中的模式。“应用程序的多样性总是让我震惊,”Huybrechs 说。“小波的某些特性使它们成为看待数据的‘正确’方式,”无论是哪种数据，这都是正确的。

**_Correction: October 14, 2021  
_**_An earlier version of the infographic in this article misspelled the Battle-Lemarie wavelet family, and used a less common spelling of Beylkin._

更正: 2021 年 10 月 14 日本文中信息图表的早期版本拼错了 Battle-Lemarie wavelet 一家，并使用了较不常见的 Beylkin 拼写。

-- [How Wavelets Allow Researchers to Transform, and Understand, Data](https://www.quantamagazine.org/how-wavelets-allow-researchers-to-transform-and-understand-data-20211013?ref=refind) #小波分析 #方法
