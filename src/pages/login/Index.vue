<template>
<div>
  <u-header title="会员登录"/>
  <van-form @submit="onSubmit">
    <van-field
      v-model="phone"
      name="手机号"
      label="手机号"
      placeholder="请输入手机号"
      :rules="[{ required: true, message: '请输入手机号' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请填写密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block :loading="loading" loading-text="登录中..." :disabled="disabled" color="#f26b11" type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>
  <div class="notice">
    <router-link class="link" to="/register">没有账号,去注册</router-link>
  </div>
</div>
</template>

<script>
import { Form, Field, Button, Toast } from 'vant'
import { login } from '@/api/member'
import UHeader from '@/components/Header'
export default {
  components: {
    UHeader,
    VanForm: Form,
    VanField: Field,
    VanButton: Button
  },
  data () {
    return {
      loading: false, // 登录按钮是否显示加载中的动画
      disabled: false, // 登录按钮是否禁用
      phone: '',
      password: ''
    }
  },
  mounted () {
    // 隐藏底部导航
    document.querySelector('#tabbar').style.display = 'none'
  },
  methods: {
    onSubmit () {
      // 显示加载中的动画
      this.loading = true
      // 禁用按钮，防止重复点击
      this.disabled = true
      // 数据的提交， 会员登录
      login(this.phone, this.password).then(res => {
        // 登录成功
        Toast.success('登录成功')
        // 把接口返回的登录的会员数据存储到本地存储中
        sessionStorage.setItem('user', JSON.stringify(res))
        // 跳转到会员中心
        this.$router.push('/me')
      }).catch(err => {
        Toast.fail(err.message)
      }).finally(() => {
        // 取消加载中的动画
        this.loading = false
        // 启用按钮
        this.disabled = false
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    // 离开页面是显示底部导航
    document.querySelector('#tabbar').style.display = 'flex'
    next()
  }
}
</script>
<style scoped>
.notice{
  padding: 0 .2rem;
  text-align: right;
  font-size: .3rem;
  color: #666;
}
.notice .link{
  color: #666;
}
</style>
