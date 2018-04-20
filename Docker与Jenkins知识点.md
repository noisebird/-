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

（2）在 Docker 中安装 Jenkins 镜像

 1. 下载Jenkins镜像（docker pull jenkins）

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
