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
### vue脚手架-路由的使用
```js
npm install vue-router@4
```
### 路由规则的配置
```js
/**
 * vue脚手架-路由的使用
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//导入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Resgiter from "@/pages/Resgiter";
//创建实例化对象并默认导出
export default new VueRouter({
  //配置路由规则
  routes: [
    {
      path: "/home", //路径
      name: "home", //配置路径别名
      component: Home, //渲染的组件
    },
    {
      path: "/login",
      name: "login", //配置路径别名
      component: Login,
    },
    {
      path: "/search",
      name: "search", //配置路径别名
      component: Search,
    },
    {
      path: "/register",
      name: "register", //配置路径别名
      component: Resgiter,
    },
    //设置路由的重定向,在/ 目录下重定向到home组件下
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

```
#### main.js中设置
```js
import Vue from "vue";
import App from "./App.vue";
//导入路由配置文件
import router from "@/router";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

```
### 登录,注册,搜索页,首页路由跳转的设置
Header组件中
```js
  <router-link to="/login">登录</router-link>
  <!-- <a href="###">登录</a> -->
  <router-link to="/register" class="register">免费注册</router-link>
  <!-- <a href="###" class="register">免费注册</a> -->
   <router-link to="/home" class="logo">
      <img src="./images/logo.png" alt="" />
   </router-link>

```
### 搜索页的路由传参与跳转
Header组件中
```js
   //搜索
  <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>

  methods: {
    goSearch() {
      this.$router.push({
        name: "search",
        params: {
          keyword: this.keyword,
        },
      });
    },
  },
```
路由规则的配置
```js
    {
      path: "/search/:keyword?",
      name: "search", //配置路径别名
      component: Search,
      // props:true,只传递pramas参数
      //对象的形式
      props: (route) => ({ ...route.params, ...route.query }),
    },
```
Search组件中接收
```js
    props: ["keyword"],
    <!-- 全写形式 -->
    <h1>{{ this.$route.params.keyword }}</h1>
    <!-- props形式 -->
    <h1>{{ keyword }}</h1>
```

### 将三级分类注册为全局组件 并在Home组件与Search组件中使用
```js
//将tapnav注册为全局组件
import TapNav from "@/components/TapNav";

//将tapnav注册为全局组件
Vue.component("TapNav", TapNav);
```