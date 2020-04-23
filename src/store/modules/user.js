const userModule = {
    state: {
        name: sessionStorage.getItem('name') || '',
        email: sessionStorage.getItem('email') || '',
        phone: sessionStorage.getItem('phone') || '',
        userId: sessionStorage.getItem('userId') || '',
        accessToken: sessionStorage.getItem('accessToken') || '',
        checkStatus: sessionStorage.getItem('checkStatus') || '',
        level: sessionStorage.getItem('nalevelme') || '',
        projectList: sessionStorage.getItem('projectList') || '',
        project: sessionStorage.getItem('project') || '{"project":{"name":"None"}}',
        terminalStatus: sessionStorage.getItem('terminalStatus') || 'Disconnected',
        terminalResource: sessionStorage.getItem('terminalResource') || 'N/A'
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
        SET_PROJECTLIST: (state, role) => {
            sessionStorage.setItem('projectList', JSON.stringify(role))
            state.projectList = JSON.stringify(role)
        },
        SET_PROJECT: (state, project) => {
            sessionStorage.setItem('project', JSON.stringify(project))
            state.project = JSON.stringify(project)
        },
        LOG_OUT: state => {
            sessionStorage.clear()
            state.name = '';
            state.email = '';
            state.phone = '';
            state.userId = '';
            state.accessToken = '';
            state.checkStatus = '';
            state.leve = '';
            state.projectList = '';
            state.project = '';
            state.terminalStatus = 'Disconnected';
            state.terminalResource = 'N/A';

        },
        SET_TERMINAL_STATUS: (state, terminalStatus) => {
            sessionStorage.setItem('terminalStatus', terminalStatus)
            state.terminalStatus = terminalStatus
        },
        SET_TERMINAL_RESOURCE: (state, terminalResource) => {
            sessionStorage.setItem('terminalResource', terminalResource)
            state.terminalResource = terminalResource
        }
    },

    actions: {}
}

export default userModule