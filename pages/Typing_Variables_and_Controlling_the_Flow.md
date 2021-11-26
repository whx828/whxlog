---
title: Typing_Variables_and_Controlling_the_Flow
---

程序操纵数据。
数据以类型形式出现，如整数、字符串或数组等。
像 Ruby 或 Python 这样的动态类型语言，类型一般不在代码中指定，而是在程序执行时，程序上下文环境决定了其数据的类型。 
Crystal 拒绝这种模式，主要是因为它让程序的一些错误(如果有的话)到了程序运行阶段才会出现。
Crystal 选择在程序运行前对程序进行编译，而编译器需要知道所有的类型。这让编译器发出许多可能的错误信号，并生成更多的优化代码。在编译器完成其工作后，程序以一种更安全和更有效的方式执行。
然而，你不会看到 Crystal 中明确地写了那么多类型，因为 Crystal 的编译器可以推断出许多类型。偶尔，你必须指定类型来帮助编译器，例如对于一个数组，其内容的类型就需要程序员来指明。
Crystal 还支持更复杂的情况。在某些情况下，编译器会得出结论，一个变量应该包含不止一种类型的数据：例如，有时是布尔型，有时是整数型。那么它的类型就是一个联合类型，这种情况下就是 ->  `Bool | Int32`。

## Converting Data Between Types

大多数时候，你不必在 Crystal 中声明类型。但有时，你需要确定你所处理的是某种类型的值。
你不应该过多地指望 Ruby 式的自动转换。Crystal 不仅仅是强类型的 -- 它还希望你对**类型转换**非常小心。
类型转换是你需要明确做的事情，以满足 Crystal 编译器的要求(虽然 Crystal 会处理最简单的转换，如int8到int32的自动转换)。

Crystal 对它所做的转换有很多要求，不同的类型有不同的to_方法可用。
例如，你可以将一个字符串转换为一个浮点数：
```crystal
"64.34603985".to_f # => 64.34603985
```

你也可以用to_i将浮点数转换为整数，但它会被截断而没有警告:
```crystal
rate = 64.34603985
rate.to_i # => 64
```

Crystal 还提供了更多的方法来告诉编译器你希望它如何处理类型。
当编译器认为一个数据有一个联合类型(A|B)，但你确定它是一个特定的B类型，你可以使用as(B)来强迫编译器把它当作B类型。

## Getting Input

创建有弹性的代码意味着对用户的输入要特别小心。

```crystal
arr = [] of Int8

puts "Enter a number:"
num = gets 
p "You entered #{num}" # => "You entered 42"

arr << num

```
Error: no overload matches 'Array(Int8)#<<' with type (String | Nil).


Crystal 区分了以下两点：
- 编译时类型：这是编译器看到的类型，由 typeof 给出。
- 运行时类型：这是该对象在程序运行时的类型，由它的类 class 给出。
```crystal
p typeof(num) # => (String | Nil) 
p num.class # => String
```

nil不能被追加到一个整数阵列中。
但为什么编译器认为输入的可能是nil呢？
与其输入一个数字，不如输入CTRL+D，看看会发生什么。
**num 的类是 Nil**，方法 `<<` 不能应用于 Nil，你必须防止这种输入。

```crystal
if num 
  arr << num 
end
```
Error: no overload matches 'Array(Int8)#<<' with type String.

现在编译器知道num是一个字符串，但是数组只能包含Int8。因此用to_i8转换输入：
```crystal
if num 
  arr << num.to_i8 
  p arr # => for example: [42] 
end
```
Crystal 终于把字符串转换为一个8位有符号的整数。

另外，if 只对一个输入有效。我们不知道将提供多少个数字，所以我们需要一个循环。
while 非常合适：get 本身返回一个值，可以作为while条件进行测试。如果这个值不是 nil 或 false，那么 while 就可以接受它，并将其添加到数组中。
```crystal
while num = gets 
  arr << num.to_i8
  p arr # => for example: [2, 3, 3, 5]
end
```

请记住:在任何逻辑值或 if、unless、while 和 until 表达式中，只有 nil、false 或 null 指针被 Crystal 认为是假的。
任何其他的值，包括字符串"false"和数字0，在测试表达式时都可以作为真值使用。

回到我们的输入，让我们用strip删除任何空白字符，以防万一。
为了结束这个循环，测试用户是否输入了 "stop" 或仅仅是 Enter，然后从循环中断开：
```crystal
while num = gets 
  num = num.strip # removes whitespace 
  if num == "" || num == "stop" 
    break 
  end 
  arr << num.to_i8 
end 
p arr # => for example: [78_i8, 56_i8, 12_i8]
```


## Putting It Together—Converting Currencies 1

让我们把这一切应用于一个正在运行的项目。
我们的目标是选择一种基础货币，然后将其他货币的金额大致转换为该基础货币。
例如：42美元(USD) = 277.86846192人民币(CNY)
这里的类型是什么？
- 货币代码，如 "CNY "或 "USD "显然是字符串。它们的全称也是如此，如 "人民币"。

为了使代码和名称保持一致，我们可以使用 Hash(String, String)，像这样：
```crystal
CURRENCIES = {
  "EUR" => "Euro",
  "CAD" => "Canadian Dollar",
  "CNY" => "Chinese Yuan"
}
```

将你的基础货币储存在一个可变的基数中,转换率是十进制的数字。
对于这个例子，让我们使用Float64类型。
数据结构 rate（包含其他货币和它们的汇率，与基础货币相比）将是一个 Hash(String, Float64)。
我们读入我们的基本货币（让我们默认为 "USD"），然后每一行都读入另一种货币和其汇率。
这里是第一个方法：
```crystal
puts "Enter the base currency, default is: USD" 
base = gets 
exit unless base 
if base.strip == "" 
  base = "USD" # take "USD" as default value 
end 

puts "Enter the other currencies and their exchange rate," 
puts "like this: EUR - 0.84320536" 
puts "Stop input by entering 'stop'" 
rates = Hash(String, Float64).new

while input = gets 
  break unless input 
  input = input.strip 

  if input == "" || input == "stop" 
    puts "No more input: ok, we stop" 
    break 
  end 

  if !input.includes?(" - ") 
    puts("Wrong input format, use: CUR - 1.23456") 
    break 
  end 

  arr = input.split(" - ") 
  curr = arr[0].upcase 

  if curr.size != 3 
    puts "Currency code must be 3 characters" 
    break
  end

  rate = arr[1]
  rates[curr] = rate.to_f

end 

puts "base: #{base}" 
puts "rates: #{rates}"
```

## Exception Handling for Faulty Input

