# NodeProject

这是 "VueProject" 的后端项目。

## 搭建入口文件和基本路由

## 创建 swipeItemsApi.json 模拟接口

swipeItemsApi.json 内容是 VueProject “首页” 的轮播图模拟数据接口。

## mongodb 数据库加载

1. 安装 mongoose

2. 创建 `dbUtils.js` 数据库管理工具，负责数据库的连接

3. 创建 `models` 文件夹，放置所有数据库 `Schema` 文件

4. 创建 `newsListSchema.js` 和 `swipeItemSchema.js` 文件，配置表结构，需要导入 `dbUtils.js` 文件。

5. 创建 `db.js` 封装异步数据库操作 `api`，需要导入 `newsListSchema.js` 和 `swipeItemSchema.js` 文件。

6. 修改 `router.js`，将原先的本地文件模拟数据修改成数据库获取数据，需要导入 `db.js` 文件

7. 在 `data` 文件夹下创建 `newsListDbData.json` 和 `swipeItemsDbData.json` 文件，保存数据库拓本。

## 完成发表评论的路由和数据库操作

## 添加基础数据库掉线重连机制

失败之后重新连接一下即可，随便设置一下，不进一步来详细设置写代码。