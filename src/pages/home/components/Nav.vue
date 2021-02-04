<template>
<article>
  <ul>
    <li v-for="item of list" :key="item.id"><a href="#">{{item.catename}}</a></li>
  </ul>
  <button class="iconfont icon-icon1"></button>
</article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      list: 'category/firstCategoryList'
    })
  },
  mounted () {
    // 判断是否有菜单数据，如果没有，重新通过vuex获取菜单数据
    if (this.list.length === 0) {
      this.$store.dispatch('category/getCategoryList')
    }
  }
}
</script>
<style scoped>

</style>
