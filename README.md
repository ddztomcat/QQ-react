# react-starter-template
> react PC 项目启动脚手架  ✅webpack@4  ✅react@16 ✅mobx@5 ✅antd@3

### src目录结构
```javascript
│  browser.js // SSR时client端的入口文件
│  html.js
│  index.html // 模板html
│  index.js // 普通SPA页面的入口文件
│  server.js // SSR时server端入口文件
│
├─assets
│      Group.png
│
├─sprites // 雪碧图配置
│
├─components
│      loading.jsx
│
├─routes
│      index.jsx
│
├─styles
│      reset.global.css // 全局样式 不启用css module
│
├─tools
│      request.js
│
└─view
    │  app.js
    │
    ├─home
    │      index.jsx
    │
    └─layout
            index.jsx
            layout.global.scss // 全局样式 不启用css module

```
### 基本命令
```bash
   # 启动spa项目
   $ npm run start

   # 构建spa项目
   $ npm run build

   # 启动ssr项目 首先打包client 然后启动server
   $ npm run dev:browser
   $ npm run start:server

   # 构建ssr项目
   $ npm run build:server

   # 本地mock
   $ npm run mock
```
### 使用说明

    个人项目的所有配置都在project-config文件
+ 雪碧图

    >样式采用的全局模式
    ```diff
    module.exports = {
    -   sprite: false
    +   sprite: true
    };
    ```
    ```jsx
    import 'sprites/sprite.global'
    ```
+ 代理设置
    ```diff
    module.exports = {
    -    proxy: false
    +    proxy: {
    +        '/api': {
    +       target: 'http://localhost:3000',
    +       pathRewrite: {'^/api' : ''}
    +       }
    +   },
    };
    ```