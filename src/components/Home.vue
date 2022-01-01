<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header
      >Header<el-button type="info" @click="logOut">退出</el-button></el-header
    >
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    //   退出
    logOut () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lange="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d3f;
}
.el-aside {
  background-color: #323743;
}
.el-main {
  background-color: #e9edf0;
}
</style>
