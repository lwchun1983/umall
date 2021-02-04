<template>
<div class="main-right">
  <div class="haird">
    <div class="desc-top">
      <router-link :to="`/goods-list/${fid}/${item.id}/${fcatename}-${item.catename}`" v-for="item of list" :key="item.id">
        <img v-if="item.img !== ''" :src="item.img | formatImg" alt="">
        <p>{{item.catename}}</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    list: Array,
    fid: Number, // 一级分类ID
    fcatename: String // 一级分类的名称
  }
}
</script>
<style scoped>

</style>
