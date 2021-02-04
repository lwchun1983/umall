<template>
<div class="classification">
  <u-header :title="title" />
  <!-- 搜索商品 -->
  <!-- <button class="search">
      <img src="@/assets/images/iconimg/search.jpg" alt="">
      <em>搜索商品</em>
  </button> -->
    <!-- 商品列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <u-list :list="list"/>
    </van-list>
</div>
</template>

<script>
import { List } from 'vant'
import { getGoodsList, getGoodsTotal } from '@/api/goods'
import UHeader from '@/components/Header'
import UList from './components/List'
export default {
  components: {
    UHeader,
    UList,
    VanList: List
  },
  data () {
    return {
      list: [], // 商品列表数据
      title: '',
      fid: 0, // 当前1级分类id
      sid: 0, // 当前2级分类id
      loading: false, // 是否在加载
      finished: false, // 数据是否完全加载完(没有更多数据了)
      page: 1, // 当前的页码
      size: 5 // 每次加载的数量
    }
  },
  mounted () {
    this.title = this.$route.params.name || '商品列表'
    this.fid = parseInt(this.$route.params.fid) // 接收路由上的参数
    this.sid = parseInt(this.$route.params.sid) // 接收路由上的参数
  },
  methods: {
    async onLoad () {
      // 获取商品总数
      const total = await getGoodsTotal(this.fid, this.sid)
      const page = this.page++
      // 每一次触底，主要finished不是true，VanList组件会自动把loading改为true
      getGoodsList(this.fid, this.sid, page, this.size).then(res => {
        this.list = [...this.list, ...res] // 需要把各个页面的数据整合到一起
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= total) {
          this.finished = true
        }
      })
    }
  }
}
</script>
<style>
@import url("../../assets/css/classification.css");
</style>
