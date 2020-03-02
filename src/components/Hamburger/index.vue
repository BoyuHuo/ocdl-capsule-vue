<template>
  <div @click="toggleClick">
    <i class="el-icon-s-unfold hamburger" :class="{'is-active':isActive}"></i>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  margin-right: 0 !important;
  transform: rotate(0deg);
  transition: 0.38s;
  transform-origin: 50% 50%;
  /* color:red; */
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
