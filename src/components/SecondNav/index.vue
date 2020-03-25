<template>
  <section>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffffff"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
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
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        mode="out-in"
      >
        <div
          class="launch-controler"
          v-if="showLaunchController"
          key="controler"
        >
          <el-switch
            style="display: block"
            v-model="useGPU"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="GPU"
            inactive-text="CPU"
          ></el-switch>
          <el-button
            type="primary"
            plain
            style="margin-left:20px"
            @click="showLaunchController=!showLaunchController"
          >Launch</el-button>
        </div>

        <el-menu-item
          v-else
          key="button"
          index="3"
          class="right-menu"
          style="float:right"
          @click="showLaunchController=!showLaunchController"
        ><i style="color:white" class="el-icon-s-promotion"></i>Launch Notebook</el-menu-item>
      </transition>
    </el-menu>
  </section>
</template>
<script>
export default {
  name: 'secondName',
  data() {
    return {
      useGPU: true,
      showLaunchController: false
    }
  }
}
</script>
<style scoped>
.launch-controler {
  width: 300px;
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 0;
  color: #ffffff;
  background-color: #ffffff;
  vertical-align: middle;
  padding: 0 20px;

  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;

  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;

  display: -o-box;
  -o-box-orient: horizontal;
  -o-box-pack: center;
  -o-box-align: center;

  display: -ms-box;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;
  -ms-box-align: center;

  display: box;
  box-orient: horizontal;
  box-pack: center;
  box-align: center;
}
</style>