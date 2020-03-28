
<template>
  <section class="login_container">
    <vue-canvas-nest :config="cavans_config"></vue-canvas-nest>
    <el-row>
      <el-col>
        <H1 id="welcome" key="welcome" v-show="loginSuccess">Welcome Back, {{dataForm.account}}</H1>
        <el-card id="credential" key="credential" v-show="!loginSuccess" class="box-card">
          <el-row>
            <el-col :span="12" class="image-container">
              <el-carousel height="500px">
                <el-carousel-item v-for="(img,key) in images" :key="key">
                  <el-image :src="img" fit="none"></el-image>
                </el-carousel-item>
              </el-carousel>
            </el-col>

            <el-col :span="12" class="form-container">
              <div class="block">
                <el-image :src="require('../../assets/img/ocdl.png')"></el-image>
              </div>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
                mode="out-in"
              >
                <div id="loginDev" v-if="!isRegisterShow" key="login">
                  <el-divider content-position="left">Sign In</el-divider>
                  <el-form ref="dataForm" :model="dataForm">
                    <el-form-item>
                      <el-input
                        placeholder="Enter your username"
                        prefix-icon="el-icon-user"
                        v-model="dataForm.account"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        placeholder="Enter your password"
                        prefix-icon="el-icon-key"
                        v-model="dataForm.password"
                        type="password"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <div>
                        <el-button
                          type="primary"
                          @click="login"
                          style="width:100%; height:40px"
                        >Sign In</el-button>
                      </div>
                      <div style="margin-top:10px">
                        <el-button
                          style="width:100%; height:40px"
                          type="primary"
                          plain
                          @click="isRegisterShow=true"
                        >Sign Up</el-button>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>

                <div id="registerDev" v-else key="register">
                  <el-divider content-position="left">Sign Up</el-divider>
                  <el-form ref="registerForm" :model="registerForm">
                    <el-form-item>
                      <el-input
                        placeholder="Enter your username"
                        prefix-icon="el-icon-user"
                        v-model="registerForm.username"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        placeholder="Enter your email"
                        prefix-icon="el-icon-key"
                        v-model="registerForm.email"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        placeholder="Enter your password"
                        prefix-icon="el-icon-key"
                        v-model="registerForm.password"
                        type="password"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        placeholder="Repeat your password"
                        prefix-icon="el-icon-key"
                        v-model="registerForm.repeatPassword"
                        type="password"
                      ></el-input>
                    </el-form-item>
                    <el-form-item style="text-align: center">
                      <el-checkbox v-model="agreeTerms">
                        I have read the
                        <a style="color:#409EFF">user policy</a>
                      </el-checkbox>
                    </el-form-item>
                    <el-form-item style="text-align: center">
                      <el-button type="primary" style="width:40%" @click="register">Submit</el-button>
                      <el-button
                        type="primary"
                        style="width:40%"
                        plain
                        @click="isRegisterShow=false"
                      >Back</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </transition>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import * as loginApi from '@/api/login'
import vueCanvasNest from 'vue-canvas-nest'

export default {
  name: 'login',
  data() {
    return {
      loginSuccess: false,
      isRegisterShow: false,
      agreeTerms: false,
      dataForm: {
        account: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
        is_inner_user: true
      },
      images: [require('../../assets/img/login2.png'), require('../../assets/img/login3.png')],
      cavans_config: {
        color: '0,0,255',
        opacity: 0.7,
        zIndex: -2,
        count: 120
      }
    }
  },
  components: { vueCanvasNest },
  watch: {},
  mounted() {},
  methods: {
    login() {
      loginApi.login(this.$requests.api, this.dataForm).then(response => {
        let data = response.data
        this.$store.commit('SET_USERID', data.userId)
        this.$store.commit('SET_ACCESSTOKEN', data.token)
        this.$store.commit('SET_PROJECT',data.role)
        // 更新 拦截器
        let headerConfig = config => {
          // 配置请求头相关
          config.headers.lang = 'cn'
          config.headers.userId = this.$store.getters.userId
          config.headers.accessToken = this.$store.getters.accessToken
          return config
        }
        this.$requests.api.interceptors.request.use(headerConfig)
        this.loginSuccess = true

        setTimeout(() => this.$router.push('home'), 2000)
      })
    },
    register() {
      loginApi.signUp(this.$requests.api, this.registerForm).then(response => {
        this.$message({
          message: 'Register successful!',
          type: 'success'
        })
        this.isRegisterShow = false
      })
    }
  }
}
</script>

<style scoped>
.login_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.form-container {
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  background-color: #fff;
}
.image-container {
  height: 500px;
}

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
