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
  }
]
export default appModule
