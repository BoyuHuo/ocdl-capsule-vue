// 表格数据
export function userinfo(request) {
  return request({
    url: '/user/userCenter',
    method: 'post'
  })
}

// 获取失败原因
export function failure(request) {
  return request({
    url: '/user/identityResult',
    method: 'post'
  })
}

// 获取手机验证码
export function getphonecode(request, data, type) {
  return request({
    url: '/sms/sendSms',
    method: 'post',
    data: { type: type, phone: data }
  })
}

// 获取邮箱验证码
export function sendemailcode(request, data) {
  return request({
    url: '/email/sendEmailCode',
    method: 'post',
    data: { email: data }
  })
}
// 绑定邮箱
export function bindemail(request, data) {
  return request({
    url: '/user/bindEmail',
    method: 'post',
    data: data
  })
}

// 获取谷歌认证二维码
export function getewm(request) {
  return request({
    url: '/user/getGoogleQRBarcodeUrl',
    method: 'post'
  })
}

// 文件上传
export function upload(request, file) {
  return request({
    url: '/fileUpload/uploadPic',
    method: 'post',
    data: file
  })
}

// 绑定手机
export function setphone(request, data) {
  return request({
    url: '/user/bindPhone',
    method: 'post',
    data
  })
}

// 修改绑定手机
export function resetphone(request, data) {
  return request({
    url: '/user/updatePhone',
    method: 'post',
    data
  })
}

// 修改登录密码
export function repassword(request, data) {
  return request({
    url: '/user/updateLoginPassword',
    method: 'post',
    data
  })
}

// 获取验证类型
export function need(request, data) {
  return request({
    url: '/user/queryCheckType',
    method: 'post',
    data: { username: data }
  })
}

// 改变验证状态
export function changestatue(request, data) {
  return request({
    url: '/user/switchCheck',
    method: 'post',
    data: data
  })
}

// 个人认证提交
export function personApproval(request, data) {
  return request({
    url: '/user/identityAuthen',
    method: 'post',
    data: data
  })
}

// 检查手机是否已经被注册
export function checkphonestatus(request, phone) {
  return request({
    url: `/user/checkPhone/${phone}`,
    method: 'post'
  })
}

// 检查邮箱是否被注册
export function checkemailstatus(request, data) {
  return request({
    url: '/user/checkEmail',
    method: 'post',
    data: { email: data }
  })
}

// 检查手机验证码
export function checkphone(request, data) {
  return request({
    url: `/sms/checkSms`,
    method: 'post',
    data
  })
}

// 检查邮箱验证码
export function checkemail(request, data) {
  return request({
    url: '/email/checkEmailCode',
    method: 'post',
    data
  })
}
export function identifyOk(request, data) {
  return request({
    url: '/indexPage',
    method: 'post',
    data
  })
}

// 校验旧的登录密码
export function checkloginpassword(request, data) {
  return request({
    url: '/user/checkPassword',
    method: 'post',
    data
  })
}
