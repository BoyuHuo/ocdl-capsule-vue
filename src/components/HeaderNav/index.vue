<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" class="right-menu">
    
    </el-menu-item>
    <el-submenu index="3" class="right-menu">
      <template slot="title">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          fit="scale-down"
        ></el-avatar>&nbsp;Hi,
        <label style="color:#409EFF">Blue</label>
      </template>
      <el-menu-item index="3-1">  <i class="el-icon-right"></i>Logout</el-menu-item>
    </el-submenu>
    <el-submenu index="2" class="right-menu">
      <template slot="title">Project: None</template>
      <el-menu-item index="2-1">NLP</el-menu-item>
      <el-menu-item index="2-2">Code Fragile Detection</el-menu-item>
      <el-menu-item index="2-3">Test Project</el-menu-item>
      <el-menu-item index="2-20" style="color:#409EFF">New</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'headerNav'
}
</script>
<style scoped>
.right-menu {
  float: right;
  height: 100%;
  font-size: 14px;
}
</style>