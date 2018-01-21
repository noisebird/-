## HTML和CSS部分
### 1、什么是盒子模型？
        在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框
    （border）,元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的
    区域或区域4个部分一起构成了css中元素的盒模型。W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部
    分不包含其他部分。IE盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型
    content  部分包含了border和 pading。

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

+ 什么是git？
+ git工作的三个重要概念
```
    工作区：工作区是项目文件夹
    暂存区：git add后的项目更改的文件都会先提交到暂存区中
    版本库：本地的代码库，git commit -m 'log' 会将暂存区的代码提交到版本库中 
    git init命令会生成一个.git目录，就是git的版本库以及暂存区
```
+ git常用命令有哪些？
```
    git init   创建git的版本库
    git add .  把文件添加到暂存区
    git status
    git log
    git reset --hard 版本号    可以回退代码到指定的版本
    git reflog  查看历史执行的命令，包含了提交代码的版本号
    git reset --hard HEAD^   将代码回退到上一个版本HEAD~100
    git commit -m 'log'
    git diff HEAD -- readme.txt  查看工作区和版本库有哪些文件不一样
    git rm 文件名                 删除版本库中的文件
    git rm src -r -f             删除版本库中的文件夹（非空）
    git push -u origin
    git branch                   查看分支，*标注的是当前分支
    git checkout dev             切换分支
    git checkout -b dev          创建并切换分支
    git merge dev                把dev分支的内容合并到当前分支上
    git branch -d dev            删除dev分支
    当我们正在dev分支上进行开发时，需要修改master分支上的bug要修改，此时由于功能还没有开发完成，又不能进行代码提交。如果直接切换分支的话，在dev分支上修改的内容并不会保存。
    git stash      将修改的内容保存起来，即保存现在的工作现场。当前代码会被还原到提交前的代码
    git stash list 列出工作现场
    当bug修改完成后，切换到dev分支时，我们需要恢复我们的工作现场
    git stash pop            这个方式会还原工作现场并删除保存的文件
    git stash apply stash@{0} 这种方式会还原工作现场，但不删除保存的文件
    git stash drop            删除保存的文件

    git branch -D dev         强行删除分支，当创建了分支时，后来因为功能取消了，该分支也没有存在的意义了需要删除分支，如果直接删除分支，git会有友情提示，说该分支还没有被合并。
    当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。
    要查看远程库的信息，用git remote
    用git remote -v显示更详细的信息：一般会有fetch和push两个权限
    推送分支，就是把该分支上的所有本地提交推送到远程库
    git push origin master
```
###     13. js中异步的解决方案有哪些？
    generator、async await promise
###     14.  如何解决跨域的问题？

###     16. scss的常用的语法都有哪些？
###     17. react工作的原理，以及react的思想？
###     18. ajax是一个单独的模块，知识jquery封装了这个模块而已
###     19. 移动端开发、和目前主流的框架的掌握情况是本人的弱势项。
###     20. 你所理解的全栈的概念有哪些？
###     21. 对于code review了解有多少？