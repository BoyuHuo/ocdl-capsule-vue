<template>
  <div style="position:fixed; height:100%; background-color:white; z-index:1000 ">
    <el-button :class="[rotate?'uncollapse-btn':'collapse-btn']" @click="handleToggle">
      <i
        :class="[rotate?'uncollapse-icon el-icon-arrow-right':'collapse-icon el-icon-arrow-right']"
      ></i>
    </el-button>

    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">Code Template</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">User Storage</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">Model Center</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">Project Management</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">Help</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import * as templateApi from "@/api/template"
export default {
  name: 'sideNav',
  data() {
    return {
      isCollapse: true,
      rotate: false
    }
  },
  props: {},
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleToggle() {
      this.isCollapse = !this.isCollapse
      this.rotate = !this.rotate
    },
    handleProjectManagement() {},
    handleTemplateCategory(){},
    handleTemplateCode(){}
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
.collapse-icon {
  transition: all 1s;
}
.uncollapse-icon {
  transform: rotate(-180deg);
  transition: all 1s;
}
.collapse-btn {
  margin: 0;
  vertical-align: middle;
  width: 64px;
  text-align: center;
}
.uncollapse-btn {
  margin: 0;
  vertical-align: middle;
  width: 250px;
  text-align: center;
}
</style>
