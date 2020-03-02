<template>
  <section style="text-align:center">
    <el-row style="margin-top:3rem;">
      <el-col :span="16" :offset="4">
        <el-card class="box-card" style="height:30rem">
          <el-row>
            <el-col :span="12">
              <el-carousel height="27rem">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </el-col>

            <el-col :span="12" style="padding-left:10px">
              <div
                class="block"
                style="height:8rem; display: flex;
            justify-content: center;
            align-items: Center;"
              >
                <el-image
                  style="width:60%;margin-top:3rem"
                  :src="require('../../assets/img/ocdl.png')"
                ></el-image>
              </div>
              <el-divider content-position="left">Sign Up</el-divider>
              <div
                style="  display: flex;
            justify-content: center;
            align-items: Center;"
              >
                <el-form ref="dataForm" :model="dataForm" style="width:70%;">
                  <el-form-item>
                    <el-input
                      placeholder="Enter your username"
                      prefix-icon="el-icon-user"
                      v-model="dataForm.username"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      placeholder="Enter your email"
                      prefix-icon="el-icon-key"
                      v-model="dataForm.email"
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
                    <el-input
                      placeholder="Repeat your password"
                      prefix-icon="el-icon-key"
                      v-model="dataForm.password"
                      type="password"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="login">Submit</el-button>
                    <el-button type="primary" plain @click="$router.push({path:'/login'})">Back</el-button>
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
  name: 'register',
  data() {
    return {
      dataForm: {
        username: '',
        password: '',
        repeatPassword: '',
        email: ''
      }
    }
  },
  watch: {},
  mounted() {},
  methods: {
    login() {
      loginApi.register(this.$requests.api, this.dataForm).then(response => {})
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
