<template>
  <div>
    <el-menu mode="vertical" :show-timeout="200" :collapse="isCollapse" :unique-opened="true">
      <el-menu-item index="2">
        <hamburger
          class="hamburger-container toggle-btn"
          :toggleClick="toggleSideBar"
          :isActive="sidebar.opened"
        ></hamburger>
      </el-menu-item>
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
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  data() {
    return {}
  },
  components: { Hamburger },
  props: {},
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    }
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
