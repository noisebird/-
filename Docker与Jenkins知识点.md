### 一. 什么是Docker？


### 二. 在Docker中搭建Jenkins集成环境。
（1）安装Docker：
 1. （[下载Docker链接](https://download.docker.com/mac/stable/Docker.dmg)）

 2. 运行Dcoker（双击Docker图标）

 3. 启动Docker后可以右键Docker软件图标查看运行状态

 4. 查看Docker的版本（docker --version，docker-compose --version，docker-machine --version）

 5. 出现版本号之后，可以启动一个ngnix服务试一下(通过访问localhost:80端口即可访问)

    ```docker run -d -p 80:80 --name webserver nginx```
 6. 停止服务（docker stop webserver）
 7. 删除服务（docker rm webserver）
 8. docker container ls  --查看docker中正在运行的容器
    docker container ls all  查看docker中所有的容器
    docker container kill [containID]   关闭正在运行的容器

（2）在 Docker 中安装 Jenkins 镜像

 1. 下载Jenkins镜像（docker pull jenkins:versionId）

 2. 在Docker中运行Jenkins镜像

    ```docker run -d --name myjenkins -p 9999:8080 -p 50000:50000 -v /var/jenkins_home jenkins```

    在容器中运行镜像后可以通过localhost:9999访问到Jenkins的管理界面
 3. 进入容器,查看admin密码,首次访问初始化时用到

    进入容器：docker exec -it myjenkins bash

    查看密码：
    cd /var/jenkins_home/secrets/ ；
    cat initialAdminPassword

    这个密码是在浏览器中登陆Jenkins管理系统界面的密码

（3）进入Docker管理界面后进行配置，web hook（用来监听github是否更新）
 1. 进入系统管理界面，点击进入系统设置

 2. GitHub   -   add  GitHub server

 3. GitHub Server.  API URL 默认为 https://api.github.com

 4. Credentials  点击蓝色的问号，通过提示进入personal access token  登录GitHub ，并创建一个token

 5. 创建personal access token时需要包含如下权限
 + admin:repo_hook - for managing hooks (read, write and delete old ones)
 + repo - to see private repos
 + repo:status - to manipulate commit statuses

 6. 复制并自行保存好生成的Secret text

 7. 返回Jenkins的 GitHub Server配置页面

 8. Credentials - add.  Kind 选择 Secret text 并在Secret 粘贴刚才生成的Secret text
     选择Credentials
 9. 点击Test Connection 返回Credentials verified for user ******, rate limit: ******表示配置成功
 10. 登录github.com 进入仓库的settings界面，Webhooks 可以看到自动生成的web-hooks

### 三. Docker常用命令
 1. docker ps   查看正在运行的容器

 2. docker stop containerId  停止指定容器

 3. docker ps -a | docker image list        查看所有容器

 4. docker ps -a -q            查看所有容器Id

 5. docker stop $(docker ps -a -q)   停止所有容器

 6. docker  rm $(docker ps -a -q)    删除所有容器

 7. docker start containerId        启动已创建的容器

 8. docker stop containerId         关闭已创建的容器

 9. 获取所有容器ip

```
  docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(docker ps -aq)
```
+
 10. docker pull mysql:8.0.10       下拉指定版本的镜像

 11. docker images         查看本地所有下载的镜像
```
      docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

+ some-mysql： 容器别名
+ my-secret-pw：初始化设置的root用户的密码
+ tag：mysql的版本，不写默认使用最新版
+ -p 3306:3306：表示在这个容器中使用3306端口(第二个)映射到本机的端口号也为3306(第一个)

14. mac中无法访问其他网段的网路时(作如下设置)
```
    sudo ifconfig lo0 alias 192.168.99.100 netmask 0xFFFFFFFF
```
15. 在使用客户端连接docker中的mysql数据库时，出现了如下错误：
```
Lost connection to MySQL server at ‘reading initial communication packet', system error: 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  第一步：在容器的命令行输入命令找到如下文件：

```
    find / -name my.cnf    会出现my.cnf的位置
    vi my.cnf

```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二步：在文件中添加如下配置：
```
[mysqld]
    skip-name-resolve
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即可解决问题。

16. docker安装的镜像文件中安装其他软件的方法（例如：安装vim）：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如果敲apt-get install vim命令时，提示：
```
       Reading package lists... Done
       Building dependency tree       
       Reading state information... Done
       E: Unable to locate package vim
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这时候需要敲：apt-get update，这个命令的作用是：同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;等更新完毕以后再敲命令：apt-get install vim命令即可。

17. 注意对docker中的镜像连接时，访问的时docker的ip（默认Ip：192.168.99.100），而不是容器的IP。

18. 查看日志
```
    docker logs mysql
```

19. 使用Docker部署Mysql时中文乱码问题

    解决办法：直接在创建mysql容器时指定编码
```
 docker run --name mysql_dev -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
 ```

 20. Jenkins密钥：e4691a34510281b8d28ad98c30022f51dfce4a09

 21. 使用Docker部署Mysql时中文乱码问题

理论上有两种解决方案，一个是在本地创建一个my.cnf文件挂载到容器的配置文件目录下，在配置文件中指定utf8编码，但通过自己实验，貌似这种方法不好使（可能自己有哪块没弄对），另一个方法就是在创建容器的时候就指定编码：

docker run --name mysql_dev -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

想查看在创建容器时有哪些可用的选项，可以执行：

docker run -it --rm mysql:tag --verbose --help

22. mac下查看jdk安装路径

/usr/libexec/java_home

23. mac上查看某个端口运行的程序

lsof -i:8080  

kill -9 pid   --强制关闭进程
