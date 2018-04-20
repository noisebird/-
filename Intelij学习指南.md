### 1. Intelij 问题记录
+ intellij 打开node项目 一直停留在scanning files to index....，或跳出内存不够的提示框
```
  解决办法：
    右键node_modules文件夹，选择mark directory as选项，选择exclude
```
+ 关于React Native 报Export declarations are not supported by current JavaScript version错误的解决问题
```
  解决办法：
    cmd+,快捷键进入系统设置面板，选择Languages&FrameWorks选项下的JavaScript选项。
在JavaScript language version下拉列表中选择jsx harmony
```

### 2. Intelij 快捷键
```
  cmd+E              打开上次打开的文件
  cmd+shift+E        打开上次编辑的文件
  cmd+alt+b          跳转到方法的实现处
  Shift+Enter        向下插入行
  cmd+alt+enter      向上插入行
  shift+alt+上/下     选中的区域在方法内移动
  cmd+alt+上/下       选中的区域在方法外的移动
  cmd+shift+O        查找文件并跳转
  cmd+O              查找类并跳转
  cmd+L              跳转到指定的行
  cmd+alt+[/]        在方法体内跳转到方法头和方法尾
  ctrl+shift+J       合并两行
  ctrl+O             重写方法
  ctrl+D             打开调试
  ctrl+R             运行代码
  shift+click        关闭文件


  alt+上/下            扩大/缩小选中的区域
  alt+enter           智能提示
  cmd+D               向下复制行
  cmd+X               剪切代码
  cmd+del             删除行
  cmd+alt+enter       向上插入一行
  shift+enter         向下插入一行
  cmd+shift+enter     智能补全
  cmd+上              光标移动到方法签名上
  cmd+shift+上/下     移动代码

  cmd+alt+N          内联
  cmd+alt+P          抽取参数
  cmd+alt+v          抽取变量
  cmd+alt+F          抽取字段
  cmd+alt+c          抽取常量
  cmd+alt+M          抽取方法
  cmd+shift+上/下    移动方法的位置
  cmd+F6            重命名方法
  ctrl+T            弹出其他操作框
  cmd+alt+ +/-      展开/折叠代码
  cmd+shif+ +/-     展开/折叠所有代码
  cmd+G             查找变量
  F5                复制文件
  F6                移动文件
  shift+F6          重命名文件
  cmd+F8            打断点
  cmd+R             查找并替换


  cmd+alt+L         格式化代码
  shift+shift       查找文件，方法
  cmd+o             快速打开一个类
  cmd+E             打开最近代开的文件列表
  cmd+shift+O       打开文件
  ctrl+Tab          打开最近访问的文件
  cmd+shift+T       测试与实现的代码来回切换
  alt+ctrl+r        运行测试

  cmd+ctrl+a        QQ的截屏和录屏功能
  cmd+shift+F12     无障碍模式
  cmd+F12           快速查看文件的结构（类，方法等）
  alt+F1            特定工具窗口（或Finder / Explorer）中打开文件
  cmd+T             同步更新代码（可以选择从远程仓库，本地库，缓存区，stash中）
  ctrl+v            vcs操作面板弹出
  cmd+K             提交更改
  cmd+shift+K       push到远程仓库
  alt+F12           调出控制台   
  cmd+alt+T         调出try catch面板
  ctrl+o            重写方法
  ctrl+l            实现接口的方法


```
