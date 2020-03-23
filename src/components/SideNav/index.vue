<template>
  <div>
    <div style="height:100%; background-color: #e6e6e6; position: fixed">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">Code Template</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-receiving"></i>
          <span slot="title">User Storage</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">Model Center</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideNav',
  data() {
    return {}
  },
  props: {},
  computed: {
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style scoped>
</style>
