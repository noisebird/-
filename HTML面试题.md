## HTML和CSS部分
### 1、什么是盒子模型？
        在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框
    （border）,元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的
    区域或区域4个部分一起构成了css中元素的盒模型。W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部
    分不包含其他部分。IE盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型
    content  部分包含了border和 pading。123

### 2、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
    行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
    块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
    空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img


### 3、CSS实现垂直水平居中?
    position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;
    position:absolute；top:50%;left:50%;margin-left:-100px;margin-top:-100px;
    使用弹性盒子:父容器设置display:flex;display:-webkit-flex; align-items: center;

### 4、简述一下src与href的区别?
        href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。src是指向外部资源的位置，
    指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame
    等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似
    于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

###    5、什么是CSS Hack?
    一般来说是针对不同的浏览器写不同的CSS,就是 CSS Hack。

###    6、简述同步和异步的区别?
    同步是阻塞模式，异步是非阻塞模式。
        同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才
    继续执行下去；
        异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提
    高执行的效率。

###    7、px、em以及rem的区别?
        px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字
    体大小。浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em 。em以及rem都是相
    对单位，em是相对于父元素的像素来计算的，rem是相对于html元素来计算的

###    8、什么叫优雅降级和渐进增强？
    渐进增强 progressive enhancement：
        针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

    优雅降级 graceful degradation：
        一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

    区别：
        a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给
        b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要
        c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

###    9、浏览器的内核分别是什么?
    IE: trident内核
    Firefox：gecko内核
    Safari：webkit内核
    Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核
    Chrome：Blink(基于webkit，Google与Opera Software共同开发)

### 10、html5新增的内容有哪些？css3新增的内容有哪些？
<p style="font-size">(1) CSS3选择器有哪些？</p>

    属性选择器、伪类选择器、伪元素选择器。

<p style="font-size">(2) CSS3新特性有哪些？</p>

+ CSS3边框：创建圆角边框，添加阴影框，使用图片作为边框线条
```   
border-radius：0 0 0 5px;
box-shadow:水平偏移 垂直偏移 模糊值 外延值 阴影的颜色
border-image:url();
```

+ CSS3背景：包含几个新的背景属性，提供更大背景元素控制
```
background-image:url(img_flwr.gif), url(paper.gif); 不同的背景图可以用逗号隔开
background-size: 50px 100px; 也可以设置百分比
background-origin:border-box;padding-box;content-box;设置背景图出现的位置
background-clip:border-box;padding-box;content-box;设置背景剪裁
```
+ CSS3渐变：可以让你在两个或多个指定的颜色之间显示平稳的过渡
```
线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
第一种语法：
background: linear-gradient(direction, color-stop1, color-stop2, ...);direction如果是左上 可以写多个值以空格隔开，left  top
第二种语法：background: linear-gradient(angle, color-stop1, color-stop2);
    angle:0;表示从下到上
    angle:90;表示从左到右
    angle:180;表示从上到下
    angle:-90;表示从右到左
以上的颜色值都可以使用rgba色加上透明度来表示

径向渐变（Radial Gradients）- 由它们的中心定义
语法：
    background: radial-gradient(center, shape size, start-color, ..., last-color);
    center:50% 50%;设置百分比,也可以使用像素
    shape:circle,ellipse;默认是椭圆
    size:closest-side,farthest-side,closest-corner,farthest-corner

```
+ CSS3文本效果
```
主要有一下几个属性：
    text-shadow:水平阴影 垂直阴影 模糊的距离 阴影的颜色
    box-shadow
    text-overflow:clip,ellipse;主要和overflow:hidden;white-space:norwap;一起使用设置溢出使用省略号代替
    word-wrap:break-word;break-word强制把单词换到下一行
    word-break:keep-all;keep-all单词会被分行显示
```
+ CSS3 2D转换：可以对元素进行移动、缩放、转动、拉长或拉伸。
```
2D变换方法：
    transform:translate(30px,20px); 像左移动30px,向右移动20px;
    rotate(30deg);顺时针旋转30度
    scale(2,3);沿着X轴拉伸2倍，沿着Y轴拉伸3倍
    skew(30deg,20deg);沿着x轴倾斜30度，沿着y轴倾斜20度
    matrix();有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。

transform-origin:50% 50%;更改元素的位置
```
+ CSS3 3D 转换
    transform:translate3d(xdeg,ydeg,zdeg),translateX(10deg),translateY,translateZ,scale3d(x,y,z),rotate3d()
+ CSS3 过渡 添加某种效果可以从一种样式转变到另一个的时候，无需使用Flash动画或JavaScrip
```
    transition:transition-property transition-duration transition-timing-function transition-delay;
                 应用过度的属性名     多长时间内完成效果         用什么曲线执行        延时几秒执行效果
```
+ CSS3 动画
```
@keyframes规则是创建动画。 @keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。
第一种写法：
    @-webkit-keyframes myfirst
    {
        0%   {background: red;}
        25%  {background: yellow;}
        50%  {background: blue;}
        100% {background: green;}
    }
第二种写法
    @-webkit-keyframes myfirst
    {
        from {background: red;}
        to {background: yellow;}
    }
调用动画的语法：
    animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-play-state
                    名称             周期             动画的速度曲线          延迟多少秒开始           播放的次数         下一周期是否逆序执行     动画是否正在执行  

```
+ CSS3 弹性盒子
```
    弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），
是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。
    flex生效需定义其父元素display为flex或inline-flex
flex-direction (适用于父类容器的元素上):设置或检索伸缩盒对象的子元素在父容器中的位置
    flex-direction: row | row-reverse | column | column-reverse
    row：横向从左到右排列（左对齐），默认的排列方式。
    row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
    column：纵向排列。
    row-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

flex-wrap (适用于父类容器上):设置或检索伸缩盒对象的子元素超出父容器时是否换行。
flex-wrap: nowrap | wrap | wrap-reverse
            nowrap：当子元素溢出父容器时不换行。
            wrap：当子元素溢出父容器时自动换行。
            wrap-reverse：反转 wrap 排列。

flex-flow (适用于父类容器上):复合属性。设置或检索伸缩盒对象的子元素排列方式。
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
            [ flex-direction ]：定义弹性盒子元素的排列方向。
            [ flex-wrap ]：定义弹性盒子元素溢出父容器时是否换行。

justify-content (适用于父类容器上):设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
    justify-content: flex-start | flex-end | center | space-between | space-around
    flex-start：弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的
    伸缩盒项目与其前一个项目对齐。
    flex-end：弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸
    缩盒项目与其前一个项目对齐。
    center：弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后
    一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）。
    space-between：弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于'flex-start'。在
    其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平
    均分布，并确保两两之间的空白空间相等。
    space-around：弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有
    一个伸缩盒项目，则该值等效于'center'。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间
    以及最后一个元素后的空间为其他空白空间的一半。

align-items (适用于父类容器上):设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
    align-items: flex-start | flex-end | center | baseline | stretch
    flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
    flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
    center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
    baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
    stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照
    'min/max-width/height'属性的限制。

align-content (适用于父类容器上):设置或检索弹性盒堆叠伸缩行的对齐方式。
    align-content: flex-start | flex-end | center | space-between | space-around | stretch
    flex-start：各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧
    靠住前面一行。
    flex-end：各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧
    靠住前面一行。
    center：各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间
    的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）
    space-between：各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'flex-start'。在其它情况下，
    第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一
    定方式在弹性盒窗口中排列，以保持两两之间的空间相等。
    space-around：各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一
    行，该值等效于'center'。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后
    面的空间是其他空间的一半。
    stretch：各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩
    大它们的侧轴尺寸。
```


<p style="font-size:16px;">(3) HTML5新增的内容有哪些？</p>

+ 新的文档类型(New Doctype)  
```
HTML5中文档类型直接声明为<!DOCTYPE html>即可，不用像XHTML文档一样需要声明dtd文档类型。  
```

+ 脚本和链接无需type(No More Types for Scripts and Links)
```
 <script></script>标签，<link></link>标签可以不用书写type值和rel值
```
+ 新增了语义化标签
```
    <address>: 定义文档作者或拥有者的联系信息
    <caption>: 定义表格标题。
    <header>: 定义 section 或 page 的页眉。
    <footer>: 定义 section 或 page 的页脚。
    <article>: 定义文章
    <aside>: 定义页面内容之外的内容。
    <nav>: 定义导航链接。
    <section>: 文档中的区段
    <menu>: 并不是h5定义的标签
    <datalist>: 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可
                能的值。datalist 及其选项不会被显示出来，它仅仅是合法的输入值
                列表。请使用 input 元素的 list 属性指定为datalist元素的id
                值，即可完成绑定
```

+ 删除了原有的一些标签
```
删除<b>,<font>,<frame>,<center>,<big> 等标签
```   
+ 新增了多媒体标签
```
不用插件支持也可以播放一些多媒体文件。<audio>,<video>,<canvas>标签。
音视频标签的几个属性主要有，src,autoplay,loop,controls,preload
```
+ 新增了调用本地摄像头的功能，即getUserMedia API。详细代码见src目录下的index.html
```
特别有趣的一个 API，能够调用电脑的摄像头，结合 <video> 标签和 Canvas 就能在浏览器中拍摄照片了。 未来这个 API将被广泛用来让浏览器和用户之间互动.
```
+ Battery API (在网站https://davidwalsh.name/搜索JavaScript Battery API)
```
顾名思义，这是一个电池 API ，明显是为移动设备准备的，用于监控电池的状态。能够通过事件监听电池电量的变化，电池的等级、可用时间等状态
```
+ Link Prefetching API(在网站https://davidwalsh.name/搜索HTML5 Link Prefetching)。详细代码见src目录下的index.html

```
    这个链接预取 API 非常有用，让开发者可以控制网页资源在后台安静的预先加载，这样用户在浏览网站或者使用
Web 应用程序的时候能够有流畅的使用体验。可以预加载整个页面，也可以是单个资源
<!-- 预加载整个页面 -->
<link rel="prefetch" href="http://davidwalsh.name/css-enhancements-user-experience" />
<!-- 预加载一张图片 -->
<link rel="prefetch" href="http://davidwalsh.name/wp-content/themes/walshbook3/images/sprite.png" />

```
+ Fullscreen API(在网站https://davidwalsh.name/搜索 Fullscreen API)。详细代码见src目录下的index.html
```
这个 HTML5 全屏 API 让 Web 开发者可以通过编程控制页面的全屏显示。这个 API 对于 JavaScript 游戏开发特别有用，例如这款单人射击游戏 BananaBread，在全屏状态下玩那是相当酷。
```

+ 支持拖拽释放(drag and drop) API
+ 支持地理位置API
+ 支持离线存储localStorage长期存储数据，浏览器关闭后数据不丢失,sessionStorage的数据在浏览器关闭后自动删除
+ 新的技术webworker、websocket、Geolocation


## 二、JavaScript部分
###    1.怎样添加、移除、移动、复制、创建和查找节点？
        1）创建新节点
            createDocumentFragment() //创建一个DOM片段
            createElement() //创建一个具体的元素
            createTextNode() //创建一个文本节点
            2）添加、移除、替换、插入
            appendChild() //添加
            removeChild() //移除
            replaceChild() //替换
            insertBefore() //插入
            3）查找
            getElementsByTagName() //通过标签名称
            getElementsByName() //通过元素的Name属性的值
            getElementById() //通过元素Id，唯一性

###     2. 字符串都有哪些操作方法？
###     3. 数组都有哪些操作方法？
###     4. typeof能够检测出的类型值？
###     5. 闭包与匿名函数的区别？
###     6. canvas和svg有什么区别？
###     7. 前端缓存
###     8. json
###     9. 什么是事件冒泡和事件捕获？
###     10. 什么是事件委托？
###     11. gulp的工作原理是什么？gulp常用的命令有哪些？
```
    Gulp 是基于 NodeJS 的项目，一个用作自动化构建的工具，业界一般用来建造前端的工作流。它的核心原理其实很简单，
最主要是通过各种Transform Stream来实现文件的处理，然后再进行输出。Transform Streams 是 NodeJS Stream 的一种，
是可读又可写的，它会对传给它的对象做一些转换的操作。
```
###     12. git版本控制工具的工作原理是什么？git常用的一些命令有哪些？git如何用命令解决代码冲突？


###     13. js中异步的解决方案有哪些？
    generator、async await promise
###     14.  如何解决跨域的问题？

###     16. scss的常用的语法都有哪些？
###     17. react工作的原理，以及react的思想？
###     18. ajax是一个单独的模块，知识jquery封装了这个模块而已
###     19. 移动端开发、和目前主流的框架的掌握情况是本人的弱势项。

### HTML篇

### CSS篇
   + 浏览器加载css有几种方式
    
        (1) 通过link标签引入，外部样式
        
        (2) 通过style标签引入，内部样式
        
        (3) 通过style标签使用@import url() 引入，外部样式
        
        (4) 行内样式
        
        这四种方式的生效顺序，取决于 style标签放在link标签之前还是之后， 行内样式的优先级最高
        
        <link> 标签中的rel属性的作用，link标签在html中时不闭合的，在XHTML中是闭合的
        
            rel="stylesheet" type="text/css" 调用外部样式表，这里的src可以是本地的css也可以是远端的css文件
            
            rel="shortcut icon" type="images/x-icon" 指定网页的标题栏,地址栏,收藏栏小图标，IE中只兼容为.ico的图片
            rel="icon" type="images/png"
            rel="nofollow" 禁止外部链接爬取网站
   + 盒模型有哪两种
   
     `IE盒模型（border-box, width包含border + padding + content）和 w3c盒模型（content-box,不包含border+padding）`
   + flex布局、table布局
   + css哪些属性可以继承
   + css属性的优先级的关系
   + px、em、rem的区别以及应用场景
        px: 是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，在扫描打印时一般都有DPI可选。
        em: 默认情况下 1em = 16px，但是如果在html元素上设置font-size: 62.5%; 那么1em = 10 px; em是相对于父元素， 典型的应用场景：段落缩进 父元素设置font-size: 12; text-indent: 2em;
        rem: 是相对于html元素的大小来设置的 响应式布局中的缩放
   + sass和less语法
   + 如何优化css
   + bootstrap样式
   + 如何使用媒体查询？
        
        准备工作1：设置Meta标签
        
        ``` 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        ```
        + width = device-width：宽度等于当前设备的宽度
        
        + initial-scale：初始的缩放比例（默认设置为1.0）  
        
        + minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）    
        
        + maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）   
        
        + user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面） 
        
        准备工作2：加载兼容文件JS
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为IE8既不支持HTML5也不支持CSS3 Media，所以我们需要加载两个JS文件，来保证我们的代码实现兼容效果：
        ```
         <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
         <![endif]-->
        ```
        
        准备工作3：设置IE渲染方式默认为最高(这部分可以选择添加也可以不添加)
            
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在有很多人的IE浏览器都升级到IE9以上了，所以这个时候就有又很多诡异的事情发生了，例如现在是IE9的浏览器，但是浏览器的文档模式却是IE8。
        为了防止这种情况，我们需要下面这段代码来让IE的文档模式永远都是最新的：
        ```
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        ```
        也可以写成如下形式：
        ```
        <meta http-equiv="X-UA-Compatible" content="IE=Edge，chrome=1">
        ```
        如果有的用户电脑里面装了这个Google Chrome Frame的插件，就可以让电脑里面的IE9之下的浏览器中的都可以使用Webkit引擎及V8引擎进行排版及运算，无比给力，不过如果用户没装这个插件，那这段代码就会让IE以最高的文档模式展现效果。这段代码我还是建议你们用上，不过不用也是可以的。
        
        CSS3的media语法
        ```
        @media screen and (min-width: 640px) and (max-width: 960px){
            body{
                background: #000;
            }
        }
        ```
        当屏幕宽度大于640px小于960px时会使用上面这段样式
        常用到的属性：
            width: 屏幕宽度 可以和min-,max-前缀一起使用
            height: 屏幕高度 可以和min-,max-前缀一起使用
            device-width: 设备宽度 可以和min-,max-前缀一起使用
            device-height: 设备高度 可以和min-,max-前缀一起使用
            orientation: 屏幕方向是横屏还是竖屏，portrait（纵向）、landscape（横向）
            resolution: 媒体设备的分辨率 可以和min-,max-前缀一起使用
        常用到的操作符
            not and
   + css hack是什么？
   + css 2D转换 3D转换
   + 如何实现三角形
        ```
        .trigle {
        		box-sizing: content-box;
        		width: 0px;
        		height: 0px;
        		background: blue;
        		border-right: 50px solid transparent;
        		border-left: 50px solid transparent;
        		border-top: 50px solid transparent;
        		border-bottom: 50px solid orange;
        	}
        
        ```
   + 阴影 渐变 动画
   + 条形阴影
   + css覆盖规则
   + 浏览器是如何根据选择器查找到对应元素的
   + css垂直居中的几种实现方式
   + 经典三栏布局
   
   + white-space、word-break和word-wrap（overflow-wrap）的区别
     + white-space 控制元素中文本的 空格的保留与合并、换行符的生效与失效、自动换行的生效与失效、<Br> &nbsp的失效与生效:
        ```
                    换行符        空格       自动换行     br和&nbsp
         normal:    不生效        合并        不生效        生效
         nowrap:    不生效        合并        不生效        生效
            pre:    生效         保留         不生效        生效
       pre-wrap:   生效         保留         生效         生效
       pre-line:   生效         合并         生效         生效
        ```
     + word-break 控制单词的换行 normal | break-all, break-all 第一行显示不下单词的字符 会折到下一行显示
     + word-wrap  控制单词的折行 当单词在当前行显示不下时， 会折行显示，如果折行之后还是显示不下，normal: 会超出当前文本框显示，break-word: 会将单词折行
   
### js基础篇
   + File API
   + 如何实现防抖函数
   ```
   const debounce = (func, wait) => {
       let timeId;
       return (...args) => {
           clearTimeout(timeId);
           timeId = setTimeout(() => {
               func.apply(this, args);
           }, wait);
       }
   }
   const searchDebounce = debounce((query) => {
       console.log(`Results for "${query}"`);
   }, 500);
   document.getElementById("searchInput").addEventListener("input", function(event) {
       searchDebounce(event.target.value);
   ```
   + data URL
   
   我们习惯的 URL 的全称是统一资源定位符（uniform resource locator），它是由一个“协议”和一个“地址”组成。协议告诉浏览器或者程序用何种方式去获取这个资源，地址告诉程序在哪里找到这个资源，每个地址都能唯一定位一个公开资源（比如图片、HTML、JavaScript 等）或非公开资源
   
   Data URI 从本质上来说并不是 URL。在1998年的RFC 2397中第一次定义了 Data URI：
   
   > 本文档定义了一个新的URL 协议（我觉得这里有点误用，应该是 URI 协议，因为跟蒂姆·伯纳斯·李的RC 2396有冲突）。它允许（文档）直接使用一小段数据作为“即时数据”，而不是之前那样必须引用外部资源。
   
   文档中是这么定义 data URL的格式的：
   ```
   data:[<mediatype>][;base64],<data>
   ```
   在这种格式中，data:就是 URI 的协议，表明这是一个 data URI。MediaType 可能是image/png之类的，如果不填，默认是text/plain。
   
   ```
   <IMG SRC="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7" ALT="Larry">
   ```
   
   性能神器还是弃之可惜的鸡肋？
   
   data URL能减少前端资源的请求数量，但这个就一定能达到性能优化的效果吗？ 其实并不是的，这里有几个误区，需要声明一下：
   <bold> 误区一：减少请求等于优化性能？</bold>
   
   &nbsp;&nbsp;&nbsp;&nbsp;让我们来回顾一下，页面的组成由若干个HTML，CSS，JavaScript以及图片资源组成，对于前端开发来说，减少一个资源请求，就能够优化页面，这句话其实本事是没有任何毛病的，但是有一个前提是，减少请求不能增加任何有负作用的相关代码。显然data URL就是这么一个有副作用的代码，具体表现形式在 由于url中的base64编码会很长，无形之中增大了html和css文件的体积。我们都知道，html，css文件的大小是能够影响 HTML DOM树和CSS DOM树的生成的，从而影响到页面的渲染。 
   
   误区二： Base64 能获益于 Gzip 压缩？
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; html，css文件变大了？ 有的同学 就会说了，现在不都是可以用gzip压缩了吗，文件越大，压缩效果越明显？ 其实并不是这样的，Gzip是在Web端最常用的一种压缩文本的方法。
   > Gzip压缩算法分两步。第一步，采用LZ77算法的一个变种替换字符串，第二步，使用Huffman树来储存出现的位置和长度。
   
   简单的说，Gzip把原文本中多次出现的相同字符串记为一个“标记”，所以文本中重复出现的字符串越多，压缩率越高。
   
   HTML 中重复出现大量的 HTML 标签以及类名等，CSS中重复出现大量的属性，JavaScript 中重复的函数调用等（即使经过混淆）。因此 HTML、CSS、JavaScript 的 Gzip 压缩率都是很高的，最高可达到90%。
   
   而图片经过Base64转化后变成的文本是无规律的，所以在Gzip中不能达到较高的压缩率。
   
   + 前端性能优化 - Gzip
   
   静态压缩
   
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;静态压缩，顾名思义使我们在打包前端项目时，直接将文件打包成gzip文件，然后在服务器上添加相关gzip的配置后。前端请求资源时，就能直接请求gzip文件。
   ```
   // webpack中打包成gzip文件的配置
   const CompressionPlugin = require('compression-webpack-plugin');
   
   {
    plugins: [
        new CompressionPlugin({
              algorithm: "gzip",
              test: /\.(js|html|css)$/,
              // 文件大小大于多少时，才进行压缩
              // threshold: 0,
              // 最小压缩比
              minRatio: 0.8,
              deleteOriginalAssets: true,
            }),
    ]
   }
   ```
   
   服务器上的相关配置（nginx）：
   在http、server、location下加以下代码，详情点击nginx文档。
   ```
   gzip_static on;
   gzip_http_version   1.1;
   gzip_proxied        expired no-cache no-store private auth;
   gzip_disable        "MSIE [1-6]\.";
   gzip_vary           on;
   ```
   最后 nginx -s reload 重启。
   
   动态压缩
   
   &nbsp;&nbsp;&nbsp;&nbsp; 动态压缩，就是在请求资源的时候，服务器先进行gzip压缩文件，然后再返回给前端，这样做的不好之处是，会占用服务器的系统资源来进行压缩操作。压缩过程占用cpu的资源，压缩比越高cpu占用越高，所以请配置合适的压缩比。
   ```
   gzip             on;
   gzip_min_length  1000;
   gzip_proxied     expired no-cache no-store private auth;
   gzip_types       text/plain application/xml;
   ```
   
   + js 下载文件
    下载文件 我们用的最多的可能是用 a 标签来下载，直接将获取文件流的路径写在 a 标签的href属性中。但是我们经常会有这样的需求，需要更改下载的文件名，文件可能可能需要js动态计算得出。所以，这个时候通过js 的http请求来下载文件就很有必要。
    
     以下使用blob的方式来保存文件, 使用URL.createObjectURL()来创建文件链接
    
     语法：objectURL = URL.createObjectURL(blob || file);
        
      参数:
      
      File对象或者Blob对象
      
      这里大概说下File对象和Blob对象:
      
      File对象,就是一个文件,比如我用input type="file"标签来上传文件,那么里面的每个文件都是一个File对象.
      
      Blob对象,就是二进制数据,比如通过new Blob()创建的对象就是Blob对象.又比如,在XMLHttpRequest里,如果指定responseType为blob,那么得到的返回值也是一个blob对象.
    
    ```
    
    function download(href, fileName, extension = '') {
      const a = document.createElement('a');
      a.href = href;
      a.download = fileName + extension ;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    
    const exportOnDifferentBrowsers = (arrayBuffer: ArrayBuffer, contentType: string, fileName: string, extension: string = '') => {
      const blob = new Blob([arrayBuffer], { type: contentType });
      // IE 
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, fileName + extension);
      } else {
        download(URL.createObjectURL(blob), fileName, extension);
      }
    };
    
    ```
    
   （1）什么是 URL.createObjectURL()
   
   > URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
          
   简单的理解一下就是将一个file或Blob类型的对象转为UTF-16的字符串，并保存在当前操作的document下。
   
   （2）URL.createObjectURL()与FileReader.readAsDataURL()的区别
       
   + 返回值 
    
     + FileReader.readAsDataURL(file)可以得到一段base64的字符串。URL.createObjectURL(file)可以得到当前文件的一个内存URL。
   + 内存使用 
     + FileReader.readAsDataURL(file)的返回值是转化后的超长base64字符串(长度与要解析的文件大小正相关)。
       URL.createObjectURL(file)的返回值虽然是字符串，但是是一个url地址。
   + 内存清理 
     + FileReader.readAsDataURL(file)依照JS垃圾回收机制自动从内存中清理。
       URL.createObjectURL(file)存在于当前doucment内，清除方式只有unload()事件或revokeObjectURL()手动清除 。
   + 执行机制
     + FileReader.readAsDataURL(file)通过回调的形式返回，异步执行。
       URL.createObjectURL(file)直接返回，同步执行。
   + 兼容性
     + 兼容性兼容IE10以上，其他浏览器均支持。
     
   （3）URL.revokeObjectURL
     
   window.URL.revokeObjectURL(objectURL)
    
   URL.revokeObjectURL()方法会释放一个通过URL.createObjectURL()创建的对象URL. 当你要已经用过了这个对象URL,然后要让浏览器知道这个URL已经不再需要指向对应的文件的时候,就需要调用这个方法.
  具体的意思就是说,一个对象URL,使用这个url是可以访问到指定的文件的,但是我可能只需要访问一次,一旦已经访问到了,这个对象URL就不再需要了,就被释放掉,被释放掉以后,这个对象URL就不再指向指定的文件了.
   比如一张图片,我创建了一个对象URL,然后通过这个对象URL,我页面里加载了这张图.既然已经被加载,并且不需要再次加载这张图,那我就把这个对象URL释放,然后这个URL就不再指向这张图了.
### ES篇


### angular篇
   + 什么是Angular框架？
     
     Angular是一个基于HTML和TypeScript构建客户端应用的MVVM框架。
     
   + MVVM框架的理解
     使用过Jquery开发过的，都知道，当数据变化时，我们想要改变用户界面，必须要手动的去操作dom元素，将对应的视图部分的值重新渲染。与Jquery操作数据的方式不同的是，MVVM提供的新的设计思想，即数据的变化会自动的去触发视图的更新，不需要我们
     过多的去操作DOM，框架自动帮我们完成。M - Model ， V - View， VM: ViewModel。 我们只需要按照框架的语法建立好视图与模型的绑定关系，当数据变化时框架会自动帮我们去更新视图
   
   + angular中重要概念
    
      > 模块（NgModule）
      
      模块是angular的基本构造块， 它为组件提供了编译的上下文环境。它专注于某个应用领域、某个工作流或一组紧密相关的能力。
      NgModule 可以将其组件和一组相关代码（如服务）关联起来，形成功能单元。Angular应用就是有若干模块定义出来的。对于Angular应用来说，
      至少会有一个用来引导应用的根模块（AppModule），应用的根模块之所以叫根模块，是因为它可以包含任意深度的层次化子模块。与Es模块一样Angular的模块中也可以导入其他模块的功能
      
     （1）如何在Angular中定义一个模块
     
        模块声明成一个带有 @NgModule() 装饰器的类。@NgModule() 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。其中最重要的属性如下：
        
        + declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。
        + exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。
        + imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
        + providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供者，这通常是首选方式。）
        + bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
        + entryComponents - 入口组件。路由中引入的组件都会默认添加到entryComponents中去，动态引入的组件必须放到这个里面去 
     
     （2）Angular模块中的一些常见的问题
        1. BrowserModule和CommonModule的区别？
        
            所有要在浏览器中使用的应用的根模块（AppModule）都应该从 @angular/platform-browser 中导入 BrowserModule。
            BrowserModule 提供了启动和运行浏览器应用的那些基本的服务提供者。BrowserModule 还从 @angular/common 中重新导出了 CommonModule，这意味着 AppModule 中的组件也同样可以访问那些每个应用都需要的 Angular 指令，如 NgIf 和 NgFor。
            在其它任何模块中都不要导入BrowserModule。 特性模块和惰性加载模块应该改成导入 CommonModule。
            特性模块中导入 CommonModule 可以让它能用在任何目标平台上，不仅是浏览器。
         
        2. 在Angular中两次导入同一个模块会发生什么？
            
            不会发生任何问题。当三个模块全都导入模块'A'时，Angular 只会在首次遇到时加载一次模块'A'。无论 A 出现在所导入模块的
            哪个层级，都会如此。 如果模块'B'导入模块'A'、模块'C'导入模块'B'，模块'D'导入 [C, B, A]，那么'D'会触发
            模块'C'的加载，'C'会触发'B'的加载，而'B'会加载'A'。 当 Angular 在'D'中想要获取'B'和'A'时，这两个模块
            已经被缓存过了，可以立即使用。Angular中不允许出现循环依赖， 所以不要让模块'A'导入模块'B'，而模块'B'又导入模块'A'
      > 组件    
   + angular的加载
   + angular拦截器
   + angular实现装饰器
   + angular动态创建组件
   + angular模块懒加载
   + angular resolve
   + websocket
   + rxjs
   + angular表单
   + 文件上传和文件下载
   + 路由缓存
   + 循环依赖
   + angular编译

### react篇
   > 什么是react框架？<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React 是一个起源于 Facebook 的内部项目，因为当时 Facebook 对于市场上所有的 JavaScript MVC 框架都不太满意，所以索性就自己写了一套，用来架设 Instagram。做出来之后，发现这套东西还蛮好用的，于是就在 2013 年 5 月开源了。

   在这里我们需要稍微注意一下 库(Library) 和 框架(Framework) 的区别，React 本身是一个用于构建用户界面的 JavaScript 库，而我们平时所说的 React 框架其实是指的是 React/ React-router 和 React-redux 的结合体，库和框架的本质区别体现在于控制权：
   
   ![图片alt]('', 图片title'')
   <img src='./src/html面试题/library.jpg' >
   
   + 「库」是一个封装好的特定的集合，提供给开发者使用，而且是特定于某一方面的集合（方法和函数），库没有控制权，控制权完全在于使用者本身；
   
   + 「框架」顾名思义是一套架构，会基于自身的特点向用户提供一套比较完整的解决方案，如果使用者选定了一套框架，那么就需要根据框架本身做出一定的适应。
   
   
   DOM 的概念
   
   dom（Document Object Model），即文档对象模型。它是一种跨平台、独立于编程语言的API。它把HTML、XHTML、XML文档都当做成一种树结构，而每个节点视为对象，这些对象可以被编程语言操作，进而改变文档的结构，映射到文档的显示。DOM 最开始的时候是和 JavaScript 交织在一起的，只是后来它们最终演变成了两个独立的实体。DOM 被设计成与特定编程语言相独立，尽管绝大部分时候我们都是使用 JavaScript 来操作，但其实其他的语言一样可以（如 Python）。

   <bold>虚拟dom</bold>
   
   虚拟DOM的本质就是用 JS 对象来模拟出我们真实的 DOM 树，它的算法大致如下：
   
   1. 用 JavaScript 对象映射形成 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中；
   
   2. 当状态变更的时候，重新构造一棵新的对象树，然后用新的树和旧的树进行比较（Diff 算法），记录两棵树差异；
   3. 把第二步中所记录的差异应用到步骤一所构建的真正的 DOM 树上，视图就更新。
   
   
   虚拟 DOM 和真实 DOM 的区别
   
   1 改变多个状态，影响多个节点布局时，只是频繁的修改了内存中的 JS 对象，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多 DOM 节点排版与重绘损耗；
   
   2 真实 DOM 频繁排版与重绘的效率是相当低的；
   
   3 虚拟 DOM 有效降低大面积（真实 DOM 节点）的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部（同2）；
   
   使用虚拟DOM的损耗计算：
   
   总损耗 = 虚拟DOM增删改 + （与Diff算法效率有关）真实DOM差异增删改 + （较少的节点）排版与重绘
   
   直接使用真实DOM的损耗计算：
   
   总损耗 = 真实DOM完全增删改 + （可能较多的节点）排版与重绘
   
   diff算法
   
   虚拟 DOM 的核心在于 Diff，它自动帮你计算那些应该调整的，然后只修改应该被调整的区域，省下的不是运行速度这种 "小速度"，而是开发速度/ 维护速度/ 逻辑简练程度等 "总体速度"。
   
   但虚拟 DOM 快也是在相对条件下的，这里引用 @尤雨溪大大在知乎问题《网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？》上回答的一句话吧：
    
   >不要天真地以为 Virtual DOM 就是快，diff 不是免费的，batching 么 MVVM 也能做，而且最终 patch 的时候还不是要用原生 API。在我看来 Virtual DOM 真正的价值从来都不是性能，而是它 1) 为函数式的 UI 编程方式打开了大门；2) 可以渲染到 DOM 以外的 backend，比如 ReactNative。
   
   Diff 大致可以分为三种类型：
   
   Tree Diff： 新旧两棵 DOM 树，逐层对比的过程，就是 Tree Diff，当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；
   
   Component Diff： 在进行 Tree Diff 的时候，每一层中，组件级别的对比，叫做 Component Diff：
   如果对比前后，组件的类型相同，则暂时认为此组件不需要被更新；
   如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上；
   
   Element Diff： 在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做 Element Diff；
### react-native篇




### 项目构建篇
    1. requireJs + artTemplate + gulp构建项目
