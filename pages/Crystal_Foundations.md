---
title: Crystal_Foundations
---

练习环境：https://play.crystal-lang.org/#/cr


Crystal 通过 `=` 来赋值，编译器会自动推断变量的类型，可以通过 `typeof()` 函数来查看具体的变量类型

单引号 `''` 围起来的是 `Char` 类型，`""` 则是 `String` 类型

----

可以在赋值之前声明一个变量和它的类型，例如：

`hardness : Int32`
`hardness = 10`

Crystal 编译器将使用该类型来决定以后的赋值是否合适，但是在给它赋值之前，你不能用*这个*变量做任何事情

----

像 `name, element, hardness = "Diamond", 'C', 10` 这样的赋值也是允许的

分号使你能够在一行中放置多个任何类型的语句，而不仅仅是变量赋值
`name = "Diamond"; element = 'C'; hardness = 10` 

----

Ruby 支持名称以`$`开头的全局变量；Crystal 的变量总是在本地范围内，它没有全局变量

----

Crystal 评估任何 `#{expression}` 的值，必要时将其转换为字符串，并将其与字符串的其余部分合并：

```crystal
name = "Diamond"  
hardness = 10 "The hardness of #{name} is #{hardness}." # => The hardness of Diamond is 10.
```

----

在 Crystal 中，所有值都是对象

----

```crystal
minerals = ["alunite", "chromium", "vlasovite"]
typeof(minerals) # => Array(String)

# or, to use a different notation 
minerals2 = %w(alunite chromium vlasovite) 
typeof(minerals2) # => Array(String)
```

Crystal 告诉你 minerals/minerals2 不仅是一个数组，它还是一个 String 的数组

----

你可以用 `<<` 运算符轻松地添加数组成员

----

```crystal
precious_minerals = [] # => Error: for empty arrays use '[] of ElementType'

# 这种就可以
precious_minerals = [] of String
```

不能使用空数组，这是因为编译器没有足够的信息来推断其类型，所以它不能为数组分配内存

数组可以添加和删除项目是因为它们存储在堆内存中，没有固定的大小
如果你需要更快的性能，请使用 `StaticArray`，它是一个固定大小的数组，在编译过程中被分配在栈中

----

```crystal
mohs = { 
  "talc" => 1,
  "calcite" => 3,
  "apatite" => 5,
  "corundum" => 9,
}

typeof(mohs) # => Hash(String, Int32)
```

Hash 的参考格式

----

和数组一样，如果你的逻辑需要处理 `key` 不存在的情况，使用 `[]?` 变体更为安全，它返回 nil：
`mohs["gold"]? # => nil`

----

建立空 Hash 的方式
```crystal
mohs = {} of String => Int32 # {} 
mohs = Hash(String, Int32).new
```

----

一个简单的 if 表达式测试一个条件，Crystal 把 "false" 和 "nil"（以及空指针）视为假，其他为真，并在条件为真的情况下做一些事情：
```crystal
hardness = 5.25 

if 0 < hardness < 5
  puts "softer than apatite"
elsif hardness < 8
  puts "harder than apatite, softer than topaz"
else
  puts "topaz or harder!"
end 
# => harder than apatite, softer than topaz
```

----

如果你想针对不同的条件测试同一个值，那么 `case-when` 表达式可以创建更容易阅读的代码：
```crystal
output = case hardness
         when 4 
           "hard as fluorite" 
         when 7
           "hard as quartz" 
         when 10
           "hard as diamond" 
         else
           "can't say how hard"
         end # => "can't say how hard"
```

----

有时你想让一个代码块运行固定的次数。你可以使用 `Int` 类型的 `times` 方法，或者你可以用 `do ... end` 来结构化代码块
```crystal
# Int#times
5.times do 
  p "Hi" 
  p "Low" 
end 

# same as:
5.times { p "Hi"; p "Low" }
```

----

有时你不只是想运行代码一定的次数，而是想覆盖一个数值范围，可以使用 Crystal 的 `Range` 类型
用 `start...end` 这样的语法声明范围，包含从开始到结束的所有项目
如果想检查一个范围的值，需要用 `to_a` 把它们转换成数组

```crystal
inc = 2..7
p inc.to_a #=> [2, 3, 4, 5, 6, 7]

exc = 2...7
p exc.to_a #=> [2, 3, 4, 5, 6]
```

----

如果你想创建你自己的循环逻辑，Crystal 提供了一个非常基本的循环： `loop do ... end`
这启动了一个无限的循环，所以你必须用一个明确的 `break` 来退出：

```crystal
n = 1
loop do 
  puts "a mighty crystal"
  n += 1
  break if n == 3 
end 
# => a mighty crystal 
# => a mighty crystal
```

----

Crystal 还实现了典型的 `while` 结构，该结构一直循环到其条件变为假：

```crystal
a = 1
while (a += 1) < 10
  if a == 3
    next 
  elsif a > 6 
    break 
  end
    puts a 
end # => 2, 4, 5 and 6 on successive lines
```

----

在方法的名称之后，参数被列在括号里
这个方法只接受一个参数，但如果有多个参数，它们将用逗号分开
在方法的范围内，参数被当作变量处理：

```crystal
def double(num) 
  num * 2
end

puts double(6) # => 12
puts double("6") # => "66"
```

----

现在，如果你尝试 double("6")，Crystal 说不行，返回一个 no overload matches 'double' with type 'String' 的错误
```crystal
def double(num : Int32) 
  num * 2 
end

puts double(6) # => 12
```

然而，Crystal 允许你**重载**方法，使用相同的方法名称和不同的参数数量或类型。如果你想为数字和字符串提供不同的 `double`，你可以：
```crystal
def double(num : Int32) 
  num * 2 
end

def double(str : String) 
  str + " " + str 
end

puts double("6") # => 6 6
puts double(6) # => 12
```

虽然你可以在大多数时候让 Crystal 推断出变量类型，但这样一来你就可以更精确地指定函数参数的类型了

----

```crystal
class Mineral 
  def initialize(common_name : String, hardness : Float64) 
    @common_name = common_name 
    @hardness = hardness 
  end 
end 

mine = Mineral.new("talc", 1.0) 
puts typeof(mine) # => Mineral
```
由于 `common_name` 和 `hardness` 参数除了简单的赋值外还没有被使用，编译器缺乏确定其类型所需的信息，如果你不指定它们，将会报错
`@common_name` 和 `@hardness` 是这里创建的对象的特定实例变量

----

```crystal
class Mineral
  getter common_name : String 
  setter common_name 
  getter hardness : Float64

  def initialize(common_name, hardness) 
    @common_name = common_name 
    @hardness = hardness 
  end 
end 

mine = Mineral.new("talc", 1.0) 
puts mine.common_name # => talc 
mine.common_name="gold" 
puts mine.common_name # => gold 
puts mine.hardness # => 1.0
```
编译器可以在其中的任何地方找到你指定的类型声明，但靠近类的顶部很容易被人找到，所以这就是 `getter` 等方法写在类顶部的原因
这个版本的 Crystal 代码可以让你读取和改变 `common_name` 并读取 `hardness`
如果你试图改变 `hardness`，你会得到一个 undefined method name error，因为没有 `hardness` 的 `setter`

----

与变量不同，Crystal 类中的方法默认是在对象之外可见的，它们看起来像你先前定义的方法，但需要**通过对象或从对象内部引用**
一个简单的对象方法看起来像：
```crystal
class Mineral

  getter common_name : String 
  setter common_name 
  getter hardness : Float64 
  getter crystal_struct : String

  def initialize(@common_name, @hardness, @crystal_struct) 
  end

  def describe 
    "This is #{common_name} with a Mohs hardness of #{hardness} and a structure of #{crystal_struct}."
  end

end 

mine = Mineral.new("talc", 1.0, "monoclinic")
puts mine.describe # => This is talc with a Mohs hardness of 1.0 and a structure of monoclinic.
```

----

模块实现相关功能的方法和类分组。例如，标准库中的模块 Random 包含了生成各种随机值的方法
一个类可以包括一个或多个模块 -> 所谓的混合模块。这样一来，**类的对象就可以使用模块的方法**
让我们做一个叫 `Hardness` 的模块，它包含一个 `hardness` 方法，用来返回给定 `mineral` 的值：
```crystal
module Hardness 
  def data
    {"talc" => 1, "calcite" => 3, "apatite" => 5, "corundum" => 9}
  end

  def hardness 
    data[self.name] # 注意这个 name，在 module Hardness 被导入进 class Mineral 后，由于 name 是 Mineral 类的属性，因此 module Hardness 中的 name 就是 Mineral 类实例的 name 属性 
  end 
end
```

在这个例子中，我们的类 `Mineral` 现在只有 `name` 属性，但它包括了 `Hardness` 这个模块：
```crystal
class Mineral
  include Hardness # 把模块包括进类里

  getter name : String
  
  def initialize(@name) 
  end 
end

min = Mineral.new("corundum")
min.hardness # => 9
```

通过把模块包括进类里(`include Hardness`)，你可以在任何 `Mineral` 类的对象上调用该模块中的方法

----

Crystal 的并发(concurrent)模型基于两个概念：

1）Fibers，它们是由 spawn 方法创建的轻量级线程，由 Crystal 本身控制

2）Channels，这些 Fibers 通过 Channels 相互通信

主程序线程也是一个 fiber，但它 spawn 出的其他 fibers 将在后台工作而不会阻塞主程序
Channels 则需要知道什么样的数据会通过它们通信，所以它们必须被输入

Crystal Fiber 的调度是由 Crystal 本身而不是由程序员完成的

----

这里有一个简单的例子
创建一个用于传输 String 的 channel，在一个重复1万次的循环中，我们每次都 spawn 出一个 fiber(lightweight thread)，并告诉它发送 "fiber #{i}: I like crystals!" 给 Channel，因此我们也知道对应的每条 String 是哪个 fiber 发送的
然后 main fiber(main program thread) 接收该字符串，并将其信息写入标准输出
```crystal
chan = Channel(String).new 
num = 10000
num.times do |i|
  spawn do 
    chan.send "fiber #{i}: I like crystals!"
  end 
  puts chan.receive 
end

# => 
# fiber 0: I like crystals!
# fiber 1: I like crystals!
# fiber 2: I like crystals!
# ...
# fiber 9999: I like crystals!
```

注意 Crystal 中 "并发(concurrent)"和 "并行(parallel)"之间的一个重要区别：
并发(concurrent)意味着一些 fibers 在一个 thread 中运行，因此也就是在一个 hore 上执行，这在许多其他语言中被称为 -> 协程(coroutines)
另一方面，并行(parallel)意味着两个或多个代码路径(code paths)同时执行，每个都在不同的 hores 或 CPU 上执行

直到0.26.1版本，Crystal 都是在一个单线程中运行，这意味着它是并发的(concurrent)，但它还不能在几个核心上并行(parallel)运行