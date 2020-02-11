import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './modules/app'
import userModule from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: appModule,
    user: userModule
  },
  getters
})

export default store
