// import request from '@/utils/request'

// data is UserCredentials
export function login(request, data) {
    return request({
        url: '/rest/auth/login?pwd',
        method: 'post',
        data
    })
}

// need to enclose user token
export function logout(request, token) {
    return request({
        url: '/rest/auth/logout',
        method: 'post'
        headers: {'AUTH_TOKEN': token}
    })
}

// data is an User object
export function signUp(request, data) {
    return request({
        url: '/rest/auth/signup',
        method: 'post',
        data
    })
}

// need to enclose user token
export function me(request, token) {
    return request({
        url: '/rest/auth/me',
        method: 'get',
        headers: {'AUTH_TOKEN': token}
      })
}

// check user exist
// localhost:8090/rest/auth?source_id=12345678
export function checkExist(request, sourceId) {
    return request({
        url: '/rest/auth',
        method: 'get',
        params: {
            source_id: sourceId
        }
      })
}
