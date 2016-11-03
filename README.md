# node-mongodb-blog
原生node+mongodb搭建简易blog

这个项目的所有功能都是使用原生的nodejs和mongodb来实现的，ajax采用的是[axios](https://github.com/mzabriskie/axios)。
前端主要采用的gulp+webpack+es6编写。

### 基本使用

> 保本地安装了nodejs和mongodb

* clone 仓库到本地

```bash
$ git clone https://github.com/seeyou404/node-mongodb-blog.git
```

* 安装dependencies

```bash
$ npm install
```

* 运行
```bash 
 $ nodemon server/server.js
```

* 用gulp代理
```bash
$ gulp
```
> 监听node程序的端口号和mongodb使用的数据库和collection都可以在config.json中更改
