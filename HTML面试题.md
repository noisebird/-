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


### <p style="">3、CSS实现垂直水平居中?</p>
    position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;
    position:absolute；top:50%;left:50%;margin-left:-100px;margin-top:-100px;

###    4、简述一下src与href的区别?
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

##二、JavaScript部分
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
###     12. git版本控制工具的工作原理是什么？git常用的一些命令有哪些？git如何用命令解决代码冲突？
###     13. js中异步的解决方案有哪些？
###         generator、async await promise
###     14.  如何解决跨域的问题？
###     15. html5新增的内容有哪些？css3新增的内容有哪些？
###     16. scss的常用的语法都有哪些？
###     17. react工作的原理，以及react的思想？
###     18. ajax是一个单独的模块，知识jquery封装了这个模块而已
###     19. 移动端开发、和目前主流的框架的掌握情况是本人的弱势项。
###     20. 你所理解的全栈的概念有哪些？
###     21. 对于code review了解有多少？