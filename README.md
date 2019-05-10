# 项目搭建说明

本项目是对koa的初尝试，安装之前，利用了koa-genarator快速生成，之后发现，因其包含了模板部分，若项目想要前后端彻底分离，大可按照以下教程自己搭建“https://juejin.im/post/5bad9b1af265da0ae80120fe”，整个项目会轻便很多

## 项目搭建

本项目参照教程：https://m.imooc.com/article/80671

## 踩坑说明

本项目之所以放弃mongodb选择sequelize + mysql，是想尝试下sequelize的优劣，期间踩坑不少，直接拷贝教程列子，运行会报'connect ECONNREFUSED 127.0.0.1:3306'的错，原因是npm安装的mysql依赖是mysql数据库的一个模块，需要单独安装mysql数据库

本项目采用mac开发，自行下载mysql.dmg镜像文件解压安装，发现连不上，报错'Unhandled rejection SequelizeConnectionError: Client does not support authentication protocol requested by server'，猜测应该是mysql安装配置的问题，查询解决方案无果后，决定重新安装，此次下载tgz压缩包类型，发现不会安装.... 参考教程‘https://blog.csdn.net/cin_ie/article/details/70257099’，在启动mysql.server时报错‘support-files/mysql.server: line 239: my_print_defaults: command not found
Starting MySQL
 ERROR! Couldn't find MySQL server (/usr/local/mysql/bin/mysqld_safe)’，估计是安装路径啥的需要另行更改，但确实不知道怎么改……
 最后，采用brew安装mysql完美解决，安装教程：‘https://blog.csdn.net/w605283073/article/details/80417866’

 ## 常用mysql命令

 每行命令都是以‘;’结尾，否则不会执行

 $ show databases;  列举所有数据库
 $ use mysql; show tables; 列举名为mysql的数据库里所有的表
 $ create tabel tabelName; 创建表
 $ describe tableName; 查询tableName的所有字段信息
 $ select * from tableName 查询tableName里所有消息记录
 $ insert into tableName values('字段1的值','字段2的值','字段3的值')

 ## 解惑

 ### 为什么用sequelize创建model时，官方建议采用sequelize.import()的方式来引入？

 是为了解决nodejs require module时循环引用会导致undefined的问题

 ### sequelize创建表的时候，实际表名多了一个s,怎么办?

 sequelize.define('shop_info', {...表结构...}, {freezeTableName: true}) 将第三个参数里的freezeTableName设置为true即可。

 ### 如何访问静态资源，比如图片等

首先安装koa-static依赖，再在app.js里做如下处理：
 app.use(require('koa-static')(path.join(__dirname, '/public')))
 即可通过：http://localhost:3000/images/apple.png方式访问
 访问路径省去了跟目录，直接由path模块去解析