---
title: Spring基础-2
---

# Spring基础-2

Spring基础-2，《Spring Boot实战》第二章学习
Spring MVC 的核心是控制器，这是一个处理请求并使用某种信息进行响应的类。

## 笔记栏
### 建立域
```Java
package com.example.tacocloud;

import lombok.Data; // Lombok 会在运行时自动生成常用方法。
import lombok.RequiredArgsConstructor;

@Data // 类级别的 @Data 注释是由 Lombok 提供的，它告诉 Lombok 生成所有缺少的方法，以及接受所有 final 属性作为参数的构造函数。通过使用 Lombok，可以让 Ingredient 的代码保持整洁。
@RequiredArgsConstructor
public class Ingredient {
    private final String id;
    private final String name;
    private final Type type;

    public static enum Type { // 声明枚举类，表示一组常量，因此这里的 Type 表示一组 Ingredient 的类型，比如奶酪和蛋黄酱等等
        WRAP, PROTEIN, VEGGIES, CHEESE, SAUCE // 而且要注意这是在 Ingredient 类里面声明的一个静态类，只能访问静态的成员变量和方法，参考：https://www.cnblogs.com/Alex--Yang/p/3386863.html
    }
}

```

要使用 Lombok，需要将其作为依赖项添加到项目中。可以使用 pom.xml 中的以下条目手动添加它：

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

此依赖项将在开发时提供 Lombok 注释（如 @Data），并在运行时提供自动方法生成。但是还需要在 IDE 中添加 Lombok 作为扩展，否则 IDE 将会报错缺少方法和没有设置的最终属性。

### 创建控制器类
控制器是 Spring MVC 框架的主要参与者。它们的主要工作是处理 HTTP 请求，或者将请求传递给视图以呈现 HTML(浏览器显示)，或者直接将数据写入响应体(RESTful)
对于 Taco Cloud 应用程序，需要一个简单的控制器来执行以下操作：
1. 处理请求路径为 `/design` 的 HTTP GET 请求
2. 构建成分列表
3. 将请求和成分数据提交给视图模板，以 HTML 的形式呈现并发送给请求的 web 浏览器

```Java
package com.example.tacocloud.web;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; // Model 是一个对象，它在控制器和负责呈现数据的视图之间传输数据
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import lombok.extern.slf4j.Slf4j;

import com.example.tacocloud.Taco;
import com.example.tacocloud.Ingredient;
import com.example.tacocloud.Ingredient.Type;

@Slf4j // 它是 Lombok 提供的注释，在运行时将自动生成类中的 SLF4J (Java 的简单日志门面，https://www.slf4j.org/）记录器)
@Controller // 此注释用于将该类标识为控制器，并将其标记为组件扫描的候选对象，以便 Spring 将发现该类，并在 Spring 应用程序上下文中自动创建 DesignTacoController 实例作为 bean
@RequestMapping("/design") // @RequestMapping 注释在类级应用时，指定该控制器处理的请求的类型。在本例中，它指定 DesignTacoController 将处理路径以 /design 开头的请求
public class DesignTacoController {
    @GetMapping // 类级别的 @RequestMapping 注释用于 showDesignForm() 方法时，可以用 @GetMapping 注释进行改进
                   // @GetMapping 与类级别的 @RequestMapping 配对使用，指定何时接收 /design 的 HTTP GET 请求，showDesignForm() 将用来处理请求
    public String showDesignForm(Model model) {
        List<Ingredient> ingredients = Arrays.asList( // 构造了一个成份对象列表
                new Ingredient("FLTO", "Flour Tortilla", Type.WRAP),
                new Ingredient("COTO", "Corn Tortilla", Type.WRAP),
                new Ingredient("GRBF", "Ground Beef", Type.PROTEIN),
                new Ingredient("CARN", "Carnitas", Type.PROTEIN),
                new Ingredient("TMTO", "Diced Tomatoes", Type.VEGGIES),
                new Ingredient("LETC", "Lettuce", Type.VEGGIES),
                new Ingredient("CHED", "Cheddar", Type.CHEESE),
                new Ingredient("JACK", "Monterrey Jack", Type.CHEESE),
                new Ingredient("SLSA", "Salsa", Type.SAUCE),
                new Ingredient("SRCR", "Sour Cream", Type.SAUCE)
        );

        Type[] types = Ingredient.Type.values();
        for (Type type : types) {
            model.addAttribute(type.toString().toLowerCase(),
                    filterByType(ingredients, type)); // 将成分类型列表作为属性添加到传递到 showDesignForm() 里的 Model 对象，而放置在 Model 类属性中的数据被复制到 servlet 响应属性中，视图可以在其中找到它们
        }

        model.addAttribute("design", new Taco()); // 将一个 Taco 对象命名为 design 作为属性添加到 Model 对象，design 也是将用于向浏览器呈现 Model 的视图的逻辑名称
        return "design"; // 最后返回 'design'
    }

    // provided by 'aexiaosong'
    private List<Ingredient> filterByType(List<Ingredient> ingredients, Type type) {
        return ingredients.stream()
                .filter(x -> x.getType().equals(type))
                .collect(Collectors.toList());
    }
}

```

`@Slf4j`具有与显式地在`DesignTacoController`类中添加以下行相同的效果：
```Java
private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DesignTacoController.class);
```

需要在`pom.xml`中添加以下代码，保证`import javax.validation.Valid;`顺利运行：
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```



## 问题栏

## 提示栏

## 总结栏