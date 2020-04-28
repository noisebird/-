### npm 命令介绍
##### 1. npm cache
   + npm cache会把所有下载过的包放到本地的cache目录， mac环境是存放在~.npm 目录下
   
   + npm cache clean 会清除本地缓存的node包，从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数。
   
   + package.lock.json npm install 会计算每个包的sha值，然后将包的值与sha值存放到package.lock.json文件中，如果下载再进行npm install时会根据package.lock.json文件中的sha值去缓存的node包中下载，如果根据sha值没有找到，则会从网络上下载
   
   + npm cache add 这个命令主要是 npm 内部使用，但是也可以用来手动给一个指定的 package 添加缓存。
   
   + npm cache verify 验证缓存数据的有效性和完整性，清理垃圾数据。
   
   + 离线安装 npm 提供了离线安装模式，使用 --offline, --prefer-offline, --prefer-online 可以指定离线模式。npm install --offline 会从缓存中安装依赖包
   
##### 2. npm publish 发布自己的npm模块
    1、编写模块
    2、初始化包描述文件 npm init

##### 3. npm repo

##### 4. npm config

##### 5. npm info

##### 6. npm prefix

##### 7. npm view
