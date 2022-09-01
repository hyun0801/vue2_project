<template>
  <div>
    <!-- 商品分类导航 -->
    <TapNav></TapNav>
    <!--列表-->
    <ListContainer></ListContainer>
    <!--今日推荐-->
    <Recommed></Recommed>
    <!-- 商品排行 -->
    <Rank></Rank>
    <!-- 猜你喜欢 -->
    <Like></Like>
    <!--楼层-->
    <Floors></Floors>
    <Floors></Floors>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import Recommed from "./Recommed/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floors from "./Floors/index.vue";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommed,
    Rank,
    Like,
    Floors,
  },
};
</script>

<style lang="less" scoped></style>
