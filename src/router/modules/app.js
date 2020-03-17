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
<<<<<<< HEAD
    name: 'home',
    meta: {
      title: '主页'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/home/index')
=======
    name: 'landing',
    meta: {
      title: '主页'
    },
    component: () => import(/* webpackChunkName: "app-index" */ '@/views/landing/index')
>>>>>>> c3384618fd8aef3c35de6c1ff7d76d12cc59494f
  }
]
export default appModule
