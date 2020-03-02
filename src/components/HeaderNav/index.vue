<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="1" class="right-menu">处理中心</el-menu-item>
    <el-submenu index="2" class="right-menu">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" class="right-menu" disabled>消息中心</el-menu-item>
    <el-menu-item index="4" class="right-menu">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
    name:'headerNav'
}
</script>
<style scoped>
.right-menu {
  float: right;
  height: 100%;
  font-size: 14px;
}
</style>