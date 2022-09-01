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

//修改VueRouter上的原型方法,解决编程式导航多次点击报错的问题
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
//重写原型上的push方法
VueRouter.prototype.push = function (location, successCb, errorCb) {
  if (successCb === undefined && errorCb === undefined) {
    //如果不传成功或失败的回调函数,我们则自己传进去
    originPush.call(this, location).catch(() => {});
  } else {
    originPush.call(this, location, successCb, errorCb);
  }
};
//重写原型上的replace方法
VueRouter.prototype.replace = function (location, successCb, errorCb) {
  if (successCb === undefined && errorCb === undefined) {
    //如果不传成功或失败的回调函数,我们则自己传进去
    originReplace.call(this, location).catch(() => {});
  } else {
    originReplace.call(this, location, successCb, errorCb);
  }
};
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
      path: "/search/:keyword?",
      name: "search", //配置路径别名
      component: Search,
      props: (route) => ({ ...route.params, ...route.query }),
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
