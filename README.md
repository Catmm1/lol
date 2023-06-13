# Conduit (Medium Clone based on [realworld.io](https://github.com/gothinkster/realworld))

### Link to API - https://conduit-api-realworld.herokuapp.com/

**Note**: _The website may take a minute to load sometimes, as the server may be in hibernate state_

**_An Express and NodeJS based backend implementation of the [RealWorldAPI](https://github.com/gothinkster/realworld/tree/master/api) Spec._**

_Also **approved** by realworld.io and listed on their [project's home page](https://codebase.show/projects/realworld?category=backend&language=javascript)_.

## Technologies Used

1. **_NodeJS_** - Platform
2. **_Express_** - Framework
3. **_JavaScript_** - Programming Language
4. **_~~MySQL~~_Sqlite3** - Database
5. **_Sequelize_** - ORM

## 说明

[demo](https://demo.realworld.io/#/) 网站

这里是nodejs express 后端，其他前端后端参考  [frontends](https://codebase.show/projects/realworld?category=frontend) and [backends](https://codebase.show/projects/realworld?category=backend).

https://github.com/gothinkster/realworld

## install note

```sh
#安装依赖库
npm install

#安装依赖工具
npm install -g sequelize-cli nodemon

#迁移数据库
sequelize db:migrate

#运行服务
nodemon index.js
```

## node模块 sqlite3  bcrypt 手动安装

上面安装过程中，如报 sqlite3  bcrypt错误，可手动安装

```sh
# 安装 工具
npm install @mapbox/node-pre-gyp -g

# 分别进入 node_modules/sqlite3，bcrypt目录，运行

node-pre-gyp install

# node_module.zip 是 sqilite3  bcrypt  的 win10 /node14 的模块，包含二进制文件
```

## node本地模块

也可直接下载依赖，注意版本号要匹配

https://github.com/TryGhost/node-sqlite3/releases

https://github.com/TryGhost/node-sqlite3/releases/download/v5.1.6/napi-v3-win32-unknown-x64.tar.gz

拷贝到 node_modules\sqlite3\lib\binding\napi-v3-win32-x64 目录



https://github.com/kelektiv/node.bcrypt.js/releases

[bcrypt_lib-v5.1.0-napi-v3-win32-x64-unknown.tar.gz](https://github.com/kelektiv/node.bcrypt.js/releases/download/v5.1.0/bcrypt_lib-v5.1.0-napi-v3-win32-x64-unknown.tar.gz)

node_modules\bcrypt\lib\binding\napi-v3



### Open API

#### vscode 安装 rest-client 扩展

- 查看api.http 文件

#### https://hoppscotch.io/cn/

- hoppscotch

### mock server

- https://github.com/stoplightio/prism#-installation-and-usage

### task

- ORM 用 prisma https://www.freecodecamp.org/news/build-nodejs-database-using-prisma-orm/
