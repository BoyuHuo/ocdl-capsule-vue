import axios from 'axios'
import store from '@store'
import { Message, MessageBox,Loading } from 'element-ui'


var loadingInstance;

const api = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 50000
})


const generalResponse = response => {
  Loading.service({ fullscreen: true }).close();
  if (response.status==200) {
    return response.data
  } else {
    // -1:用户未登录;
    switch (response.data.code) {
      case '-1':
        this.$confirm('You have been login out，click cancle to stay or click ok to login', 'Token Expired', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancle',
          type: 'warning'
        }).then(() => {
          // on confirm
          location.href = '/#/login'
        })
          .catch(() => {
            // on cancel
          })
        break
      default:
        Message({
          message: response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
    }
    return Promise.reject('error')
  }
}


// 拦截器
api.interceptors.request.use(
  config => {

    loadingInstance = Loading.service({ fullscreen: true });

    // 配置请求头相关
    config.headers.lang = 'cn'
    config.headers.userId = store.getters.userId
    config.headers.accessToken = store.getters.accessToken
    return config
  },
  error => {
    Loading.service({ fullscreen: true }).close();
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

const generalResponseError = error => {
  Loading.service({ fullscreen: true }).close();
  Message({
    message: error,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}

api.interceptors.response.use(generalResponse, generalResponseError)

export { api }
