import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_CNLocale from './zh_CN'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  zh_CN: {
    ...zh_CNLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = new VueI18n({
  locale: 'zh_CN', // set locale
  messages, // set locale messages
  silentTranslationWarn: process.env.NODE_ENV === 'production'
})

export default i18n
