// import Vue from 'vue'
// import App from '@/App.vue'
// import router from '@/router'
// import store from '@/store'

// // 全局样式
// import '@/styles/main.css'

// //关闭生产模式下给出的提示
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from '@/App.vue'
import Vant from 'vant'
import router from '@/router'
import store from '@/store'
import * as requests from '@/utils/requests'
import * as filters from '@/utils/filters'
import i18n from './lang' // 语言包
import VueClipboard from 'vue-clipboard2'
import VCharts from 'v-charts'

// 全局样式
import 'vant/lib/index.css'
import '@/styles/main.css'
import '@/styles/common.less'

// 全局注册 dateFilter filtter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$requests = requests

//关闭生产模式下给出的提示
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VCharts)
Vue.use(VueClipboard)

export default new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
