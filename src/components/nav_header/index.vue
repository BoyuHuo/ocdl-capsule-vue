<template>
  <van-nav-bar style="background-color:#4D4DD7">
    <div slot="title" style="color:#ffffff"> 
      {{hasIcon?'':title}}
      <img src="../../assets/CoinSoon_logo.svg" v-if="hasIcon" width="60%" style="margin-top:5px">  
    </div>
    <div v-if="hasBackBtn == 'true'" @click="onClickLeft" slot="left" style="color:#ffffff">
      <i style="color:#ffffff" class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i> 返回
    </div>
  </van-nav-bar>
</template>
<script>
export default {
  name: 'navHeader',
  props: ['title', 'hasBackBtn', 'hasIcon'],
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped></style>
