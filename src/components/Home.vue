<template>
  <div>
    <el-button type="info" @click="logOut">退出</el-button>
  </div>
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
</style>
