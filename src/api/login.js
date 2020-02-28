// import request from '@/utils/request'

export function login(request, data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout(request) {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

export function register(request, data) {
  return request({
    url: '/user/logout',
    method: 'post',
    data
  })
}
