<template>
<van-swipe class="banner" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item of list" :key="item.id">
    <img :src="item.img" class="banner-img" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
// 从vant中导入组件
import { Swipe, SwipeItem } from 'vant'
import { mapState } from 'vuex'
export default {
  // 注册组件
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  computed: {
    ...mapState({
      list: state => state.banner.list
    })
  }
}
</script>
<style scoped>
.banner{
  width: 100%;
  height: 2.9rem;
  overflow: hidden;
}
.banner-img{
  width: 100%;
  height: 100%;
}
</style>
