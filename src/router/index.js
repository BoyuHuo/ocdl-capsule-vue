import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 全局配置的页面默认title
import { baseTitle } from '@/config'
import login from '@views/login'

// 路由模块引入
import appModule from './modules/app'

export const constantRouterMap = [
  {
    path: '/',
    meta: {
      title: 'CoinSoon'
    },
    component: login
  },
  ...appModule,
  {
    path: '*',
    redirect: '/'
  }
]

// 根据 name 设置 path 参数
constantRouterMap.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

// 构建路由
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

// 设置页面title
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  title ? (document.title = title) : (document.title = baseTitle)
  next()
})

export const asyncRouterMap = []

export default router
