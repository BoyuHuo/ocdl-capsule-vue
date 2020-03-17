const appModule = [
  {
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/login/index')
  },
  {
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/register/index')
  },
  {
    name: 'home',
    meta: {
      title: '主页'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/home/index')
  }
]
export default appModule
