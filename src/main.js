// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex的store
import store from './store'

// 引入全局过滤器
import './filters/goods'
// 引入全局的mixin
import './mixins/cart'

// 引入reset.css
import './assets/css/reset.css'
// 引入公共样式
import './assets/css/common.css'
// 引入iconfont css
import './assets/css/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
