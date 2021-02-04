import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/Index')
    },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: () => import('@/pages/login/Index')
    },
    {
      path: '/register',
      meta: {
        title: '注册'
      },
      component: () => import('@/pages/register/Index')
    },
    {
      path: '/category',
      meta: {
        title: '商品分类'
      },
      component: () => import('@/pages/category/Index')
    },
    {
      path: '/cart',
      meta: {
        title: '购物车',
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import('@/pages/cart/Index')
    },
    {
      path: '/me',
      meta: {
        title: '我的',
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import('@/pages/me/Index')
    },
    {
      path: '/goods-list/:fid/:sid/:name',
      meta: {
        title: '商品列表'
      },
      component: () => import('@/pages/goods-list/Index')
    }
  ]
})

// 创建导航守卫 (有一些路由是需要登录之后才能跳转)
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '小u商城'
  const checkLogin = to.meta.checkLogin || false
  if (checkLogin) {
    // 是需要验证登录
    const userInfo = sessionStorage.getItem('user')
    if (!userInfo) {
      // 没有登录
      next('/login')
    } else {
      // 已经登录
      next()
    }
  } else {
    // 不需要验证登录
    next()
  }
})

export default router
