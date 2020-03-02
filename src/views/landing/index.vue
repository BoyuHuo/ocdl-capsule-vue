<template>
  <section>
    <header-nav></header-nav>

    <side-nav></side-nav>



  </section>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
import SideNav from '@/components/SideNav'
export default {
  data() {
    return {
      isCollapse: true
    }
  },
  components: { HeaderNav, SideNav },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>