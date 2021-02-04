<template>
<div class="list">
  <ul>
      <li v-for="item of list" :key="item.id">
          <a href="#">
              <img :src="item.img | formatImg" alt="">
              <div class="desc">
                <h3 style="line-height: 1.5em">{{item.goodsname | substr(16)}}</h3>
                <div class="money">&yen;{{item.price}}</div>
                <del>&yen;{{item.market_price}}</del>
                <div class="must" @click="addCart(item.id, 1)">立即抢购</div>
              </div>
          </a>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>
<style scoped>

</style>
