1. 什么是jenkins2的pipeline？

    Pipeline as Code是Jenkins 2.0版本的精华所在，是帮助Jenkins实现从CI到CD华丽转身的关键工具。

    所谓Pipeline，简单来说，就是一套运行于Jenkins上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂发布流程。
    jenkins的实现是标准的master/slave模式，用户与master交互，master将job分布到slave上运行。

2. jenkins的基本概念：
+ master, 也就是jenkins的server，是jenkins的核心，主要负责job的定时运行，将job分发到agent运行，和对job运行状态的监控。

+ agent/slave/node，agent是相对于master的概念，主要作用是监听master的指令，然后运行job。

+ executor，executor是虚拟的概念，每一个agent都可以设置executor的数量，表示可以同时运行的job的数量。

3. jenkins1的基本用法：

    一般使用free style的job类型，在job的里面调用一些脚本和插件来实现整个持续集成的过程，一般是将整个job发布到某台机器上运行。缺点是job的配置分布在脚本和插件中，配置不够集中，导致监控的时候log不容易查找。一般要实现整个持续集成发布流程需要多个jobs来实现。

4. jenkins2相比与jenkins1的改进

    相对于jenkins1，jenkins2的核心概念是pipeline。在jenkins2中引入grovvy脚本和虚拟的概念stage使得jenkins的配置和监控更集中，更清楚。

    jenkins2的一些新概念：
+ step，其实跟jenkins1中的概念一样， 是jenkins里job中的最小单位，可以认为是一个脚本的调用和一个插件的调用。

+ node， 是pipleline里groovy的一个概念，node可以给定参数用来选择agent，node里的steps将会运行在node选择的agent上。这里与jenkins1的区别是， job里可以有多个node，将job的steps按照需求运行在不同的机器上。例如一个job里有好几个测试集合需要同时运行在不同的机器上。

+ stage，是pipeline里groovy里引入的一个虚拟的概念，是一些step的集合，通过stage我们可以将job的所有steps划分为不同的stage，使得整个job像管道一样更容易维护。pipleline还有针对stage改进过的view，使得监控更清楚。

5. jenkins2的设计理念？

    pipeline的设计理念是实现基于groovy脚本，灵活，可扩展的持续发布（CD）工作流。
6. pipeline的功能和优点：

+ durable持久性：在jenkins的master按计划和非计划的重启后，pipeline的job仍然能够工作，不受影响。其实理解起来也很简单，jenkins的master和agent通过ssh连接，如果你知道nohup或disown的话，就可以理解为啥master的重启不会影响agent上的job继续运行。

+ 可暂停性：pipeline基于groovy可以实现job的暂停和等待用户的输入或批准然后继续执行。

+ 更灵活的并行执行，更强的依赖控制，通过groovy脚本可以实现step，stage间的并行执行，和更复杂的相互依赖关系。

+ 可扩展性：通过groovy的编程更容易的扩展插件。

    总之，jenkins2的核心是pipeline，pipeline的核心是groovy
