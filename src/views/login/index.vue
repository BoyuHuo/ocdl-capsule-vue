<template>
  <section id="login">
    <van-row style="padding-top:100px; padding-bottom:50px">
      <van-col span="4"></van-col>
      <van-col span="16">
        <img src="" width="100%" />
      </van-col>
      <van-col span="4"></van-col>
    </van-row>

    <van-tabs v-model="active">
      <van-tab title="手机登录" name="phone">
        <van-field v-model="phone.phone" type="tel" left-icon="phone-o" placeholder="请输入手机号">
          <label slot="label">
            手机号
            <span style="color:#9B9B9B">+86</span>
          </label>
        </van-field>
        <van-field
          v-model="phone.password"
          type="password"
          label="密码"
          left-icon="closed-eye"
          placeholder="密码"
        />
      </van-tab>
      <van-tab title="邮箱登录" name="email">
        <van-field v-model="email.username" label="邮箱" left-icon="envelop-o" placeholder="请输入邮箱账号" />
        <van-field
          v-model="email.password"
          left-icon="closed-eye"
          type="password"
          label="密码1"
          placeholder="密码"
        />
      </van-tab>
    </van-tabs>
    <div style="margin-top:8rem">
      <van-row style="margin-bottom:2rem">
        <van-col span="12" offset="6">
          <van-button type="info" @click="login" color="#FFC02B" size="large">
            <h3 style="color:#525252; font-weight:bold">登录</h3>
          </van-button>
        </van-col>
      </van-row>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-button is-link to="register">免费注册</van-button>
        </van-grid-item>
        <van-grid-item></van-grid-item>
        <van-grid-item>
          <van-button is-link to="fpwd_email">忘记密码</van-button>
        </van-grid-item>
      </van-grid>
      <van-row :border="false">
        <van-col span="4" offset="20">
          <h5 style="color:gray">{{$store.getters.version}}</h5>
        </van-col>
      </van-row>
    </div>
  </section>
</template>

<script>
import * as loginApi from '@/api/login'
import { Toast } from 'vant'

export default {
  name: 'login',
  data() {
    return {
      active: 'email',
      email: {
        username: '',
        password: '',
        source: 2,
        type: 1
      },
      phone: {
        phoneAreaCode: '0086',
        phone: '',
        password: '',
        source: 2,
        type: 2
      }
    }
  },
  watch: {},
  mounted() {},
  methods: {
    login() {
      let data = (panel => {
        switch (panel) {
          case 'email':
            return this.email
          case 'phone':
            return {
              username: this.phone.phoneAreaCode + this.phone.phone,
              password: this.phone.password,
              source: this.phone.source,
              type: this.phone.type
            }
          default:
            return {}
        }
      })(this.active)
      loginApi.login(this.$requests.api, data).then(response => {
        let data = response.data
        this.$store.commit('SET_USERID', data.userId)
        this.$store.commit('SET_ACCESSTOKEN', data.accessToken)
        this.$store.commit('SET_EMAIL', data.email)
        this.$store.commit('SET_PHONE', data.phone)
        this.$store.commit('SET_NAME', data.name)
        this.$store.commit('SET_LEVEL', data.level)
        this.$store.commit('SET_CHECKSTATUS', data.checkStatus)
        // 更新 拦截器
        let headerConfig = config => {
          // 配置请求头相关
          config.headers.lang = 'cn'
          config.headers.userId = this.$store.getters.userId
          config.headers.accessToken = this.$store.getters.accessToken
          return config
        }
        this.$requests.api.interceptors.request.use(headerConfig)
        this.$requests.orion.interceptors.request.use(headerConfig)
        this.$router.push('landing')
      })
    }
  }
}
</script>

<style scoped>
#login {
  background-color: #ffffff;
  color: gold;
  height: 100%;
}
</style>
