//Message 
export const alertMessage = {
    phone: "手机号码有误，请检查后填写",
    passoword: "密码至少为8-16个字符, 至少包含1个大写字母，1个小写字母和1个数字",
    email: "邮箱格式有误,请检查后重写",
    repeat: "两次密码输入不一致，请检查后重写"
}


//Check Phone number format, currently it only support chinese phone number 
export function checkPhoneNum(value) {
    return (/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))
}

//Check password complexity 
export function checkPwdComplexity(value) {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(value))
}

//Check password repeat 
export function checkPwdRepeat(value1, value2) {
    return value1 == value2
}

export function checkEmail(value) {
    return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value))
}

