// 全局的mixins
import Vue from 'vue'
import { addCart } from '@/api/cart'
import { Toast } from 'vant'

Vue.mixin({
  methods: {
    // 添加购物车
    addCart (goodsId, buyNumber = 1) {
      // 获取用户信息
      let userInfo = sessionStorage.getItem('user') // undefined or string
      if (!userInfo) {
        // 没有登录，不允许添加购物车
        // Toast.fail('没有登录，不允许添加购物车')
        // 跳转至登录页面
        this.$router.push('/login')
        return
      }
      userInfo = JSON.parse(userInfo) // 转化为object
      // 添加购物车
      addCart(userInfo.uid, goodsId, buyNumber).then(() => {
        Toast.success('添加成功')
      }).catch(err => {
        Toast.fail(err.message)
      })
    }
  }
})
