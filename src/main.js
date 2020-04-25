import Vue from 'vue'
import App from '@/App.vue'
//import Vant from 'vant'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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
import '@/styles/animate.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// 全局注册 dateFilter filtter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(Element, { size: 'small', zIndex: 2000 });

Vue.prototype.$requests = requests

//关闭生产模式下给出的提示
Vue.config.productionTip = false
    //Vue.use(Vant)
Vue.use(VCharts)
Vue.use(VueClipboard)

export default new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')