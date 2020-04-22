
<template>
  <div class="homepage-hero-module">
    <H1 id="welcome" key="welcome" style="color:white" v-show="loginSuccess">Welcome Back,&nbsp;&nbsp;<span style="color:#409EFF">{{dataForm.account}}</span></H1>
    <el-card class="box-card login_container" v-show="!loginSuccess">
      <el-col :span="12" class="form-container">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutLeft"
          mode="out-in"
        >
          <div id="loginDev" v-if="!isRegisterShow" key="login">
            <div class="block">
              <el-image :src="require('../../assets/img/ocdl.png')"></el-image>
            </div>
            <el-divider content-position="left" style="background-color:transparent"></el-divider>
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
                  <el-button type="primary" @click="login" style="width:100%; height:40px">Sign In</el-button>
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
            <div class="block">
              <el-image :src="require('../../assets/img/ocdl.png')"></el-image>
            </div>
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
                <el-button type="primary" style="width:40%" plain @click="isRegisterShow=false">Back</el-button>
              </el-form-item>
            </el-form>
          </div>
        </transition>
      </el-col>
      <el-col :span="12" class="image-container">
        <div class="y-center">
          <h4 style="color:white">Sign in with social media:</h4>
          <div style="width:100%; text-align:center; margin-top:30px">
            <el-button-group style="margin:5px">
              <el-button type="primary" style="width:40px">
                <i class="fab fa-facebook-f"></i>
              </el-button>
              <el-button type="primary" plain style="width:200px">Sign in with Facebook</el-button>
            </el-button-group>

            <el-button-group style="margin:5px">
              <el-button type="warning" style="width:40px">
                <i class="fab fa-google"></i>
              </el-button>
              <el-button type="warning" plain style="width:200px">Sign in with Google</el-button>
            </el-button-group>
          </div>
        </div>
      </el-col>
    </el-card>

    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay loop class="fillWidth" muted v-on:canplay="canplay">
        <source src="../../assets/video/golden-gate-bridge.mp4" type="video/mp4" />Browser not support video tag, you can fix this problem by update your browser.
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="PATH_TO_JPEG" alt />
      </div>
    </div>
  </div>

  <!-- 
    <section class="login_container">
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
  </section>-->
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
      },

      vedioCanPlay: false,
      fixStyle: ''
    }
  },
  components: {},
  watch: {},
  mounted() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true
    },
    login() {
      loginApi.login(this.$requests.api, this.dataForm).then(response => {
        let data = response.data
        this.$store.commit('SET_USERID', data.userId)
        this.$store.commit('SET_NAME', this.dataForm.account)
        this.$store.commit('SET_ACCESSTOKEN', data.token)
        this.$store.commit('SET_PROJECTLIST', data.role)
        // 更新 拦截器
        let headerConfig = config => {
          // 配置请求头相关
          config.headers.userId = this.$store.getters.userId
          config.headers.AUTH_TOKEN = this.$store.getters.accessToken
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
#welcome {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
    display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  z-index: 99999;
}

.login_container {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 500px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 99999;
}
.form-container {
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
}
.image-container {
  height: 400px;
}

.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}

.y-center {
  position: relative;
  top: 60%;
  transform: translateY(-50%);
}
</style>
