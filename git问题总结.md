### 一 什么是git？
    
   git是一种版本控制工具。
   
### 二 git工作的三个重要概念
```
    工作区：工作区是项目文件夹
    暂存区：git add后的项目更改的文件都会先提交到暂存区中
    版本库：本地的代码库，git commit -m 'log' 会将暂存区的代码提交到版本库中
    git init命令会生成一个.git目录，就是git的版本库以及暂存区
```
### 三 git常用命令有哪些？
```
    git pull = git fetch + git merge
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
    git rm --cached 文件名        清除暂存区中的文件
    git rm src -r -f             删除版本库中的文件夹（非空）
    git push -u origin
    git branch                   查看分支，*标注的是当前分支
    git checkout dev             切换分支
    git checkout -b dev          创建并切换分支
    git merge dev                把dev分支的内容合并到当前分支上
    git branch -d dev            删除dev分支

    git remote add origin [url]   本地仓库和远程仓库同步起来
    git pull --rebase origin master --allow-unrelated-histories  origin是远程仓库的别名，第一次创建本地库时，同步代码到远程仓库需要， 把远程仓库的内容同步下来

    当我们正在dev分支上进行开发时，需要修改master分支上的bug要修改，此时由于功能还没有开发完
成，又不能进行代码提交。如果直接切换分支的话，在dev分支上修改的内容并不会保存。
    git stash      将修改的内容保存起来，即保存现在的工作现场。当前代码会被还原到提交前的代码
    git stash list 列出工作现场
    当bug修改完成后，切换到dev分支时，我们需要恢复我们的工作现场
    git stash pop            这个方式会还原工作现场并删除保存的文件
    git stash apply stash@{0} 这种方式会还原工作现场，但不删除保存的文件
    git stash drop            删除保存的文件
    git branch -D dev         强行删除分支，当创建了分支时，后来因为功能取消了，该分支也没有
    存在的意义了需要删除分支，如果直接删除分支，git会有友情提示，说该分支还没有被合并。

    当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，
远程仓库的默认名称是origin。
    要查看远程库的信息，用git remote
    用git remote -v显示更详细的信息：一般会有fetch和push两个权限
    推送分支，就是把该分支上的所有本地提交推送到远程库
    git push origin master


```
### 四 git常见问题总结
 
1. git pull代码时候出现，或者push代码无效
    
  fatal: No remote repository specified.  Please, specify either a URL or a remote name from which new revisions should be fetched.

2. git中版本回退有哪几种方式？都有什么区别？

+ 方式1:
        使用git reset 版本号命令来回退版本。是将HEAD指针指向对象的版本上

        git reset --hard 版本号。
        加上--hard后的区别是，会更新工作区的内容和版本库中的内容一致。
        如果不加上--hard回退版本，以后想要同步版本库和工作区的内容时，需要用命令：
        git stash
        
    
+ 方式2:

        使用git revert 版本号 来回退，这个与git reset的区别时，这个会创建一个新的提交，将指向的版本号
        的内容回退，这个版本号之前或之后的提交都将保留


+ 方式3:

       使用git checkout -- filename
       这里分两种情况：
       (1) file没有被添加到暂存区，撤销所有的操作，工作区的内容与HEAD的内容一致
       (2) file已经被添加到暂存区，又做了修改，撤销内容与提交到暂存区之后的内容一致。

3. git中如何清空暂存区的内容？
    
        git rm --cached 文件名
 
4. git提交之前一般会做什么操作？
```
    git diff   文件比对
    git diff filename  工作区与暂存区进行比较
    git diff HEAD filename  工作区与HEAD进行比较
    git diff --staged 或 --cached filename  暂存区与HEAD进行比较
    git diff branchName filename   当前分支的文件与branchName分支的文件比较
    git diff commitId filename     与某一次提交进行比较
```

5. `git add`操作一些参数的意思

    git add -A   保存所有修改
      
    git add .    保存新的现价和修改，但不包括删除
       
    git add -u   保存修改和删除，但是不包括新建文件
    
    6. clone下来别人的git仓库，如何上传到自己的git仓库中？

    解决:找到本地仓库项目里面的 .git文件夹，找到config打开，修改里面内容为
    [core]  
        repositoryformatversion = 0  
        filemode = true  
        bare = false  
        logallrefupdates = true  
        ignorecase = true  
        precomposeunicode = false  
    [remote "origin"]  
        url = https://github.com/CrossLee/xxx.git  
        fetch = +refs/heads/*:refs/remotes/origin/*  
        pushurl = https://github.com/CrossLee/xxx.git  
    [branch "master"]  
        remote = origin  
        merge = refs/heads/master  
    把url和pushurl换成自己的git地址即可


7. Updates were rejected because the tip of your current branch is behind？
    
    解决方法： 使用命令 git push -u origin master -f 强制推送代码 
    
8. `git pull rebase`发生冲突时，解决冲突的三种方案
    
+ git rebase --continue
        
        这种解决方式主要是手动合并的冲突之后，需要使用git add .,添加到缓存区之后，在使用git rebase --continue继续之前没有做完的合并操作，多个分支的提交会被合并成一条分支
        
+ git rebase --abort
    
        这种解决方式主要是将合并操作，回到rebase之前，即自己提交代码之后，远程的分支的提交并不在本地的提交列表中
        
+ git rebase --skip
        
        这种解决方式比较危险，直接跳过了本地分支的修改，而使用远程分支的代码。自己提交的信息，会被清楚，而被远程分支的提交所替代
9. 当想把别人的github仓库，pull到本地已有的git仓库中时，需要如何去做？

    git pull --rebase origin master --allow-unrelated-histories  
    
   origin是远程仓库的别名，第一次创建本地库时，同步代码到远程仓库需要， 把远程仓库的内容同步下来

10. `git pull` 和`git pull --rebase`的区别是什么？

+ `git pull` 从远程仓库pull下代码时，当本地也有提交时，会对两次提交做合并，并生成一个新的提交的信息，原来的commit都还存在。
    不过这会导致，git的提交日志中会出现分支的展示
    
+ `git pull --rebase` 从远程仓库pull下代码。会别人的提交和自己的提交，变成commit的树的主干部分。不会产生新的commit信息。
    
11. 将不需要的文件或者文件夹上传到了git远程仓库，如何删除远程仓库中的文件？
    
    (1) git rm -r 文件夹名(删除暂存区,分支,工作区的文件)
   
    (2) git rm -r --cached 文件夹名      (下次提交该文件会被删除，工作区的文件会保留只是不被跟踪)
    
    (3) git reset HEAD filename    (不写filename表示清空缓存区)
   
    (4) git checkout ./-- filename   (取消工作区的修改，前提是必须要已经有一次提交)
    
12. 将项目快速打包的命令
    
    打包的时候使用：
    

        git bundle create tdd.bundle HEAD master
        
    解压包的时候使用：
   
        git clone tdd.bundle
      
13. commit时填错了commit message需要更改怎么办？
    
    (1) 执行 git commit --amend 命令会进入vim编辑模式
       
    (2) 按c对文件进行编辑，修改提交的信息
    
    (3) 按两次大写的Z即可保存退出
    
    
14 git clone 时如何指定克隆的分支，以及存放在本地的目录名？
    
    git clone -b wjdev url newDirectoryName
    
15. 怎么样查看修改过后的文件的状态？
    
    git status -s
    
16. 如何根据某一次提交来查看更改的详细信息？

    git log    --得到commitId
    
    git show commitId     -- 查看到的信息中 "+"表示增加的内容，"-"表示删除的内容
 
17. git reset --hard ,git reset --soft ,git reset --mixed的区别？
    
    git reset --hard HEAD~2   --会把工作区和缓存区都变成当前版本
    
    git reset --soft HEAD~2   --工作区和缓存区都不会变
    
    git reset --mixed HEAD~2  --缓存区会变成切换的版本，工作区不变
    
    
18. git clone如何指定克隆的分支，并且修改clone下来的目录名字？
    
    git clone -b wjdev git@gitlab.freewheelers.bike:dojos/HTML-CSS.git workshop
    
19. 如何修改commit comment?
    
    git commit --amend
    
20. git revert的用法（撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销
                  作为一次最新的提交）
                  
      * git revert HEAD                  撤销前一次 commit
      
      * git revert HEAD^               撤销前前一次 commit
      
      * git revert commit （比如：fa042c）撤销指定的版本，撤销也会作为一次提交进行保存。
      
      git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，版本会递增，不影响之前提交的内容
      
21. git revert 和 git reset的区别?

      (1). git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。 
      
      (2). 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
       
      (3). git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。
  
22. git 配置别名
    
      (1). 直接修改配置文件，在mac的home目录中打开隐藏的.gitconfig文件，加上如下信息：
       ```
        [alias]
        	st = status
       ```  
       
      (2). 使用命令的方式执行（如果不加--global，则是在当前git仓库做的更改）
      
         git config --global alias.co checkout 
