// 所有和商品相关的全局过滤器
import Vue from 'vue'

// 处理图片
Vue.filter('formatImg', (value) => {
  // 如果value不是远程连接，就添加 http://localhost:3000
  if (/^(https?:\/\/).*/.test(value)) {
    return value
  }
  return 'http://localhost:3000' + value
})

// 字符串截取，添加...
Vue.filter('substr', (value, length, suffix = '...') => {
  value = value.toString() // 转化为字符串
  if (isNaN(length) || length <= 0) {
    length = value.length
  }
  if (value.length <= length) {
    // 字符串的长度比要截取的长度小
    return value
  }
  return value.substr(0, length) + suffix
})
