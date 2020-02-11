import axios from 'axios'
import store from '@store'
import { Dialog } from 'vant'
import { Toast } from 'vant'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 50000
})

const orion = axios.create({
  baseURL: process.env.VUE_APP_ORION_HOST,
  timeout: 50000
})

const generalResponse = response => {
  if (response.data.success) {
    Toast.clear()

    return response.data
  } else {
    Toast.clear()
    // -1:用户未登录;
    switch (response.data.code) {
      case '-1':
        Dialog.confirm({
          title: '用户已过期',
          message: '你已被登出，可以取消继续留在该页面，或者重新登录'
        })
          .then(() => {
            // on confirm
            location.href = '/#/login'
          })
          .catch(() => {
            // on cancel
          })
        break
      default:
        Toast({
          message: response.data.msg
        })
    }
    return Promise.reject('error')
  }
}

const orionResponse = response => {
  if (response.data.success) {
    Toast.clear()

    return response.data
  } else {
    Toast.clear()

    // -1:用户未登录;
    switch (response.data.code) {
      case '-1':
        Dialog.confirm({
          title: '用户已过期',
          message: '你已被登出，可以取消继续留在该页面，或者重新登录'
        })
          .then(() => {
            // on confirm
            location.href = '/#/login'
          })
          .catch(() => {
            // on cancel
          })
        break
      default:
        Toast({
          message: response.data.message
        })
    }
    return Promise.reject('error')
  }
}

// 拦截器
api.interceptors.request.use(
  config => {
    Toast.loading({
      duration: 0,
      message: '请求中...',
      forbidClick: true
    })

    // 配置请求头相关
    config.headers.lang = 'cn'
    config.headers.userId = store.getters.userId
    config.headers.accessToken = store.getters.accessToken
    return config
  },
  error => {
    Toast.clear()
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 拦截器
orion.interceptors.request.use(
  config => {
    Toast.loading({
      duration: 0,
      message: '请求中...',
      forbidClick: true
    })

    // 配置请求头相关
    config.headers.lang = 'cn'
    config.headers.userId = store.getters.userId
    config.headers.accessToken = store.getters.accessToken
    return config
  },
  error => {
    Toast.clear()
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

const generalResponseError = error => {
  Toast({
    message: error
  })
  return Promise.reject(error)
}

api.interceptors.response.use(generalResponse, generalResponseError)
orion.interceptors.response.use(orionResponse, generalResponseError)

export { api, orion }
