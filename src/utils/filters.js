//时间戳转换   (abandoned ， will be replace by <<formatDate>> function, delete after code refectory  -- baiyu )
export function dateFilter(value) {
  let time = Number(value)
  if (!time || time === -1) {
    // 当时间是null或者无效格式时我们返回空
    return '无限期'
  } else {
    const date = new Date(time) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const dateNumFun = num => (num < 10 ? `0${num}` : num) // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。        // 这是es6的解构赋值。
    const [Y, M, D, h, m, s] = [
      date.getFullYear(),
      dateNumFun(date.getMonth() + 1),
      dateNumFun(date.getDate()),
      dateNumFun(date.getHours()),
      dateNumFun(date.getMinutes()),
      dateNumFun(date.getSeconds())
    ]
    return `${Y}-${M}-${D} ${h}:${m}:${s}` // 一定要注意是反引号，否则无效。
  }
}

//时间戳转换
export function formatDate(date, fmt) {
  var myDate = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (myDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': myDate.getMonth() + 1,
    'd+': myDate.getDate(),
    'h+': myDate.getHours(),
    'm+': myDate.getMinutes(),
    's+': myDate.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

//导出方法
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/* 数字 格式化*/
export function nFormatter(num, digits) {
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function formatFloat(f, digit) {
  var m = Math.pow(10, digit)
  return Math.round(f * m, 10) / m
}

export function convertNum(num_str) {
  if (!num_str) {
    return 0
  }
  // 参数必须为 字符串
  var resValue = ''
  var power = ''
  var result = null
  var dotIndex = 0
  var resArr = []
  var sym = ''
  var numStr = num_str.toString()
  var minusSign = ''
  if (numStr[0] === '-') {
    numStr = numStr.substring(1)
    minusSign = '-'
  }
  if (numStr.indexOf('E') !== -1 || numStr.indexOf('e') !== -1) {
    var regExp = new RegExp('^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$', 'ig')
    result = regExp.exec(numStr)
    if (result != null) {
      resValue = result[2]
      power = result[5]
      result = null
    }
    if (!resValue && !power) {
      return false
    }
    dotIndex = resValue.indexOf('.')
    resValue = resValue.replace('.', '')
    resArr = resValue.split('')
    if (Number(power) >= 0) {
      var subres = resValue.substr(dotIndex)
      power = Number(power)
      // 幂数大于小数点后面的数字位数时，后面加0
      for (var i = 0; i < power - subres.length; i++) {
        resArr.push('0')
      }
      if (power - subres.length < 0) {
        resArr.splice(dotIndex + power, 0, '.')
      }
    } else {
      power = power.replace('-', '')
      power = Number(power)
      // 幂数大于等于 小数点的index位置, 前面加0
      for (let i = 0; i <= power + dotIndex; i++) {
        resArr.unshift('0')
      }
      var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex)
      resArr.splice(n, 0, '.')
    }
    resValue = resArr.join('')
    return minusSign + sym + resValue
  } else {
    return num_str
  }
}

// 去除最后一位
export function lastStr(str, n) {
  if (n) {
    return str.toFixed(Number(n) + 1).substring(0, str.toFixed(Number(n) + 1).length - 1)
  } else {
    return str.toFixed(Number(n) + 1).substring(0, str.toFixed(Number(n) + 1).length - 2)
  }
}
