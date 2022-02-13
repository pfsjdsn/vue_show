<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>2333 </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 权限列表
      rightsList: []

    }
  },
  created () {
    //   获取所有的权限
    this.getRightsList()
  },
  methods: {
    //获取权限列表
    async getRightsList () {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败！')
      }
      this.rightsList = res.data
      console.log(this.rightsList, ' this.rightsList');
    }
  }

}
</script>
<style lang="less" scoped>
</style>