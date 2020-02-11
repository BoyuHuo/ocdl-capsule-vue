const appModule = [
  {
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/login/index')
  }
]
export default appModule
