### AngularJs


1. AngularJs程序架构（组件，指令，服务可以构成一个模块）

<div align='center'>
   <img src='./src/images/AngularJs程序架构.png'>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AngualrJs运行至少需要一个模块，一个组件。

2. 安装angular-cli工具


3. AngularJs常用概念
+ 组件的必备元素
    
   （1）装饰器(@Component)-组件元数据装饰器，用来告知Angular框架如何处理TypeScript类
   
   （2）模版(Template) -定义组件的外观，以HTML的形式存在，告知Angular如何渲染
   
   （3）控制器(Controller) ---控制器处理模版上发生的事件
   
+ 可选属性
   （1）输入属性(@Inputs())---传递数据给子组件
   （2）提供器（providers）---用来做依赖注入
   （3）生命周期钩子 ---根据组件的状态执行逻辑
   （4）样式表(styles)
   （5）动画
   （6）输出属性(@Outputs)

4. @Component 组件元数据装饰器
    Angular通过这个属性，就知道定义个的一个TypeScript类是组件了。@Component中的属性就告诉angular如何定义的组件。
    - select："app-root"。告诉angular可以通过这个名字来引用组件
    
    - templateUrl:'./app.component.html'  告诉Angular如何渲染这个组件
    
    - styleUrls: ['./app.component.css']  组件加载的css文件
    
5. 控制器(controller)

    文件中定义的TypeScirpt类就是控制器，里面包含了数据，逻辑等。
    
6.指令生命周期概述
+ 指令与组件共有的钩子
  
  ngOnChanges
  
  ngOnInit
  
  ngDoCheck
  
  ngOnDestroy
  
+ 组件特有的钩子
  ngAfterContentInit
  
  ngAfterContentChecked
  
  ngAfterViewInit
  
  ngAfterViewChecked
  
  
### 第四章：依赖注入

1. 什么是依赖注入，使用依赖注入的好处？

    依赖注入：Dependency Injection简称DI
    
    
+ 依赖注入的好处？

    帮助我们以一种松耦合的方式来编写代码。

2. Angular的依赖注入的实现：注入器和提供器

+ 注入器
```
    constructor(private productService:ProductService){...}
``` 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;构造函数中声明我需要一个ProductService这样一个token，new出来的实体类，会根据提供器中定义的token对应的类型来实例化这个依赖
+ 提供器

    provider:[ProviderService]
    
    等价于
    
    providers:[{provider:ProductService,useClass:ProductService}]
    
    provider相当于是一个token，useClass表示这个token对应的实体类，需要new一个这个类型的实体类
    
    
3. 注入器的层级关系

@Injectable() 装饰器是指当前的服务可以注入其他的服务，并不是理解为当前服务可以被注入。Component中的Controller并没有使用@Injection()装饰器来修饰，但是也可以使用构造函数来注入需要的服务，这是因为Angular给组件使用了@Component装饰器，而这个装饰器和管道装饰器是@Injection装饰器的子类。

Angular中注册一个服务时，一定要在模块的配置中的providers属性中添加相应的服务名

建议所有的服务在创建时都加上，@Injectable装饰器

Angular框架只有一个依赖注入点，就是通过构造函数注入。


### 第五章：数据绑定，响应式编程和管道

1. 数据绑定（angular中数据默认的是单项绑定的）

+ 事件绑定
    
    （eventName）元素中使用（）表示绑定事件，eventName表示事件名。

+ 属性绑定
    
    angular中的插值表达式和属性绑定其实是一回事。
    
    angular中HTML属性和DOM属性的区别？
    HTML属性是指元素的初始值，不会被改变的
    DOM属性的值是可以被改变的，例如input框在输入时，DOM属性就会被改变，HTML属性不会改变
    
    模版绑定是i 通过DOM属性和事件来工作的，而不是HTML属性。
