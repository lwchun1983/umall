<template>
<div class="fire-box">
  <van-tabs type="card" color="#f26b11">
    <van-tab title="热门推荐">
      <!-- 商品列表 -->
      <u-goods-list :list="list.hot"/>
    </van-tab>
    <van-tab title="发现好货">
      <u-goods-list :list="list.new"/>
    </van-tab>
    <van-tab title="只看商品">
      <u-goods-list :list="list.all"/>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import { mapState } from 'vuex'
import UGoodsList from './GoodsList'
export default {
  components: {
    VanTab: Tab,
    VanTabs: Tabs,
    UGoodsList
  },
  computed: {
    ...mapState({
      list: state => state.goods.indexList
    })
  },
  mounted () {
    if (this.list.hot.length === 0) {
      // 如果没有热卖商品，获取首页商品数据
      this.$store.dispatch('goods/getIndexGoodsList')
    }
  }
}
</script>
<style>

</style>
