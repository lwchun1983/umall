<template>
<div class="ushop">
    <!-- 头部 -->
    <u-header />
    <!-- 导航 -->
    <u-nav />
    <!-- 轮播图 -->
    <u-banner />
    <!-- 限时抢购 -->
    <u-icon-nav />
    <!-- 限时秒杀 -->
    <u-seckill />
    <!-- bar -->
    <div class="bar">
        <a href="#">
            <img src="@/assets/images/index/bar.jpg" alt="">
        </a>
    </div>
    <!-- 热门推荐 -->
    <u-recommend />
    <!-- 下导航 -->
</div>
</template>

<script>
import UHeader from './components/Header'
import UNav from './components/Nav'
import UIconNav from './components/IconNav'
import UBanner from './components/Banner'
import USeckill from './components/Seckill'
import URecommend from './components/Recommend'
export default {
  components: {
    UHeader,
    UNav,
    UBanner,
    UIconNav,
    USeckill,
    URecommend
  }
}
</script>
<style>
/*引入首页的样式*/
@import url("../../assets/css/index.css");
</style>
