<template>
<div>
  <u-header title="会员注册"/>
  <van-form @submit="onSubmit">
    <van-field
      v-model="phone"
      name="手机号"
      label="手机号"
      placeholder="请输入手机号"
      :rules="phoneRules"
    />
    <van-field
      v-model="nickname"
      name="昵称"
      label="昵称"
      placeholder="请输入昵称"
      :rules="[{ required: true, message: '请输入昵称' }]"
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
      <van-button :loading="loading" loading-text="注册中..." :disabled="disabled" round block color="#f26b11" type="info" native-type="submit">注册</van-button>
    </div>
  </van-form>
  <div class="notice">
    <router-link class="link" to="/login">有账号,去登录</router-link>
  </div>
</div>
</template>

<script>
import { Form, Field, Button, Toast } from 'vant'
// 引入注册的接口
import { register } from '@/api/member'
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
      loading: false, // 注册按钮是否显示加载中的动画
      disabled: false, // 注册按钮是否禁用
      phone: '',
      password: '',
      nickname: '',
      phoneRules: [
        { required: true, message: '请输入手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
      ]
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
      // 数据的提交， 会员注册
      register(this.phone, this.nickname, this.password).then(() => {
        // 注册成功
        Toast.success('注册成功')
        // 跳转到登录
        this.$router.push('/login')
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
