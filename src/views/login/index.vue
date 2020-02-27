<template>
  <section style="text-align:center">
    <el-row style="margin-top:90px;">
      <el-col :span="16" :offset="4">
        <el-card class="box-card" style="height:600px">
          <el-row>
            <el-col :span="12">
              <el-carousel height="550px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </el-col>

            <el-col :span="12">
              <div
                style="  display: flex;
            justify-content: center;
            align-items: Center;"
              >
                <el-form ref="form" :model="form" style="width:80%;" label-width="80px">
                  <el-form-item label="Username">
                    <el-input placeholder="Enter your username" v-model="input"></el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input placeholder="Enter your password" v-model="input"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Sign In</el-button>
                    <el-button>Sign Up</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import * as loginApi from '@/api/login'

export default {
  name: 'login',
  data() {
    return {
      active: 'email',
      images: [require('../../assets/img/logo.png'), require('../../assets/img/logo.png')],
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
