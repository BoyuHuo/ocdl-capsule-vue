const userModule = {
  state: {
    name: sessionStorage.getItem('name') || '',
    email: sessionStorage.getItem('email') || '',
    phone: sessionStorage.getItem('phone') || '',
    userId: sessionStorage.getItem('userId') || '',
    accessToken: sessionStorage.getItem('accessToken') || '',
    checkStatus: sessionStorage.getItem('checkStatus') || '',
    level: sessionStorage.getItem('nalevelme') || ''
  },

  mutations: {
    SET_NAME: (state, name) => {
      sessionStorage.setItem('name', name)
      state.name = name
    },
    SET_EMAIL: (state, email) => {
      sessionStorage.setItem('email', email)
      state.email = email
    },
    SET_PHONE: (state, phone) => {
      sessionStorage.setItem('phone', phone)
      state.phone = phone
    },
    SET_USERID: (state, userId) => {
      sessionStorage.setItem('userId', userId)
      state.userId = userId
    },
    SET_ACCESSTOKEN: (state, accessToken) => {
      sessionStorage.setItem('accessToken', accessToken)
      state.accessToken = accessToken
    },

    SET_CHECKSTATUS: (state, checkStatus) => {
      sessionStorage.setItem('checkStatus', checkStatus)
      state.checkStatus = checkStatus
    },
    SET_LEVEL: (state, level) => {
      sessionStorage.setItem('level', level)
      state.level = level
    },
    LOG_OUT: state => {
      sessionStorage.clear()
      state = { name: '', email: '', phone: '', userId: '', accessToken: '', checkStatus: '', level: '' }
    }
  },

  actions: {}
}

export default userModule
