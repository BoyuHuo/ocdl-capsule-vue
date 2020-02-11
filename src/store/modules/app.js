import Cookies from 'js-cookie'

const appModule = {
  state: {
    language: Cookies.get('language') || 'cn'
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}

export default appModule
