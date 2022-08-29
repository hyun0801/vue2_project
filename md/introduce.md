### vue2脚手架项目流程
#### 使用npm命令安装项目
```js
    vue create shop_project
```
#### 关闭eslint语法检查
```js
lintOnSave: true,
```
#### 配置自动打开-设置vue.config.js中的文件
```js
  devServer: {
    port: 3000,
    host: "127.0.0.1",
    open: true,
  },
```
### 安装less插件
```js
npm i less less-loader
```