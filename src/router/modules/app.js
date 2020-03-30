const appModule = [
  {
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/login/index')
  },
  {
    name: 'home',
    meta: {
      title: '主页'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/home/index'),
  }
]
export default appModule
