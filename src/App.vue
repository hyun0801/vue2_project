<template>
  <div class="outer">
    <Header></Header>
    <!-- 路由组件部分开始 -->
    <router-view></router-view>
    <!-- <Home></Home> -->
    <Footer></Footer>
  </div>
</template>

<script>
//导入组件
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import Home from "./pages/Home";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
  },
  //   mounted() {
  //     console.log(this.$router);
  //     console.log(this.$route);
  //   },
};
</script>

<style lang="less" scoped></style>
