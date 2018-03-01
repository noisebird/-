# ReactJS学习指南
## 一 初入React世界
### 1.1 什么是React?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React是FaceBook在2013年开源在Github上的Jacascript库。React把用户界面抽象成一个个的相互独立的组建。开发者可以通过重
用这些组建开构造功能丰富，可交互的页面。在页面中通过引入JSX语法，使得组件的复用变得十分容易，同时还能保证组件结构的清晰。
有了组件这一层的抽象，React把代码和真是渲染目标隔离开来，除了可以在浏览器端渲染到DOM来开发网页外，还能用于开发原生移动应
用。

####1.1.1 React是一个什么框架（MVVM?MVC?）?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;和目前市场上主流的MVVM/MVC框架有所不同，React并不是一个完整的MVC/MVVM框架。为什么说React并不是一个完整的MVVM/MVC框架呢？原因是，React主要专注于提供一个一个清晰，简洁的视图（view）解决方案。但是React又与模版引擎有所差别，React不仅专注于视图层的问题，又是一个包含view和controller的库。在复杂应用中使用React时，可以根据应用场景自行选择业务层框架，并根据需要搭配Flux、redux来使用。
