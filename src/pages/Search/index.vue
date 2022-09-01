<template>
  <div>
    Search
    <TapNav></TapNav>
    <!-- 全写形式 -->
    <h1>{{ this.$route.params.keyword }}</h1>
    <!-- props形式 -->
    <h1>{{ keyword }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword"],
  //   mounted() {
  //     console.log(this.$router);
  //     console.log(this.$route);
  //   },
};
</script>

<style lang="less" scoped></style>
