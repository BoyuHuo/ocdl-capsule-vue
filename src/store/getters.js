const getters = {
  sidebar: state => state.app.sidebar,
  userId: state => state.user.userId,
  accessToken: state => state.user.accessToken,
  name: state => state.user.name,
  email: state => state.user.email,
  phone: state => state.user.phone,
  checkStatus: state => state.user.checkStatus,
  level: state => state.user.level,
  language: state => state.app.language,
  version: state => process.env.VUE_APP_VERSION,
  projects: state => state.user.projects
}

export default getters
