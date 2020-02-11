<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="landing" to="landing">
      <span>主页</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.landing.active : icon.landing.inactive" />
    </van-tabbar-item>
    <van-tabbar-item name="product" to="product">
      <span>商品</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.product.active : icon.product.inactive" />
    </van-tabbar-item>
    <van-tabbar-item name="referral" to="referral">
      <span>邀请</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.referrence.active : icon.referrence.inactive" />
    </van-tabbar-item>
    <van-tabbar-item name="user" to="user">
      <span>用户</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.user.active : icon.user.inactive" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'navFooter',
  props: ['activeTab'],
  data() {
    return {
      active: this.activeTab,
      icon: {
        landing: {
          active: require('../../assets/img/footer/home_active.svg'),
          inactive: require('../../assets/img/footer/home_grey.png')
        },
        product: {
          active: require('../../assets/img/footer/mining_active.svg'),
          inactive: require('../../assets/img/footer/mining_grey.png')
        },
        referrence: {
          active: require('../../assets/img/footer/referral_active.svg'),
          inactive: require('../../assets/img/footer/referral_grey.png')
        },
        user: {
          active: require('../../assets/img/footer/profile_active.svg'),
          inactive: require('../../assets/img/footer/profile_grey.png')
        }
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style></style>
