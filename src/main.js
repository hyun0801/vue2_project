import Vue from "vue";
import App from "./App.vue";
//导入路由配置文件
import router from "@/router";
//将tapnav注册为全局组件
import TapNav from "@/components/TapNav";
Vue.config.productionTip = false;
//将tapnav注册为全局组件
Vue.component("TapNav", TapNav);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
