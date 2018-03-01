# ReactJS学习指南
## 一 初入React世界
### 1.1 什么是React?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React是FaceBook在2013年开源在Github上的Jacascript库。React把用户界面抽象成一个个的相互独立的组建。开发者可以通过重
用这些组建开构造功能丰富，可交互的页面。在页面中通过引入JSX语法，使得组件的复用变得十分容易，同时还能保证组件结构的清晰。
有了组件这一层的抽象，React把代码和真是渲染目标隔离开来，除了可以在浏览器端渲染到DOM来开发网页外，还能用于开发原生移动应
用。

#### 1.1.1 React是一个什么框架（MVVM?MVC?）?

+ MVC框架
```
    MVC是比较直观的架构模式，用户操作->View（负责接收用户的输入操作）->Controller（业务逻辑处理）->Model（数据持久化）->View（
将结果反馈给View）。在MVC架构模式中，对于view层和model层的代码复用都可以很容易的做到，但是对于controller层的代码复用问题上确是会
出现一些问题，在开发过程中，并不清楚controller层中的哪些代码会被复用到。所以并不是很好的抽取出可复用的代码。其实MVC框架并不只是单纯
的分为三层，也可以分为多层，将controller中可复用的代码在抽取为一层也是可以的。
```
+ MVVM框架
```
    MVVM是 Model-View-ViewModel 的简写。相对于 MVC 的历史来说，MVVM 是一个相当新的架构，MVVM 最早于 2005 年被微软的 WPF 和
Silverlight 的架构师 John Gossman 提出，并且应用在微软的软件开发中。当时 MVC 已经被提出了 20 多年了，可见两者出现的年代差别有多大。
MVVM 在使用当中，通常还会利用双向绑定技术，使得 Model 变化时，ViewModel 会自动更新，而 ViewModel 变化时，View 也会自动变化。所以，
MVVM 模式有些时候又被称作：model-view-binder 模式。

    MVVM 在实际使用中，确实能够使得 Model 层和 View 层解耦，但是如果你需要实现 MVVM 中的双向绑定的话，那么通常就需要引入更多复杂的框
架来实现了。对此，MVVM 的作者 John Gossman 的 批评 应该是最为中肯的。John Gossman 对 MVVM 的批评主要有两点：

    第一点：数据绑定使得 Bug 很难被调试。你看到界面异常了，有可能是你 View 的代码有 Bug，也可能是 Model 的代码有问题。数据绑定使得一
个位置的 Bug 被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。

    第二点：对于过大的项目，数据绑定需要花费更多的内存。

某种意义上来说，我认为就是数据绑定使得 MVVM 变得复杂和难用了。但是，这个缺点同时也被很多人认为是优点。
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;和目前市场上主流的MVVM/MVC框架有所不同，React并不是一个完整的MVC/MVVM框架。为什么说React并不是一个完整的MVVM/MVC框架呢？原因是，React主要专注于提供一个一个清晰，简洁的视图（view）解决方案。但是React又与模版引擎有所差别，React不仅专注于视图层的问题，又是一个包含view和controller的库。在复杂应用中使用React时，可以根据应用场景自行选择业务层框架，并根据需要搭配Flux、redux来使用。
