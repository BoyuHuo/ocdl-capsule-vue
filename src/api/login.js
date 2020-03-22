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
export function logout(request) {
    return request({
        url: '/rest/auth/logout',
        method: 'post'
    })
}

<<<<<<< HEAD
export function register(request, data,id) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: {
      id: id,
    },
    data
  })
=======
// data is an User object
export function signUp(request, data) {
    return request({
        url: '/rest/auth/signup',
        method: 'post',
        data
    })
}

// need to enclose user token
export function me(request) {
    return request({
        url: '/rest/auth/me',
        method: 'get'
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
>>>>>>> fda6fa5545e35b7de12e94f2d7c3c4b5b44143ed
}
