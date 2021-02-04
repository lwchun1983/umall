<template>
<div class="fication">
  <!-- 头部 -->
  <u-header title="商品分类" />
  <!-- 主体 -->
  <div class="main">
    <u-left :list="firstList" :fid="fid" @change="changeFid"/>        
    <u-right :list="secondCategory" :fid="fid" :fcatename="fcatename" />      
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import UHeader from '@/components/Header'
import ULeft from './components/Left'
import URight from './components/Right'
export default {
  components: {
    UHeader,
    ULeft,
    URight
  },
  computed: {
    ...mapState({
      category: state => state.category.list // 所有的分类数据
    }),
    ...mapGetters({
      firstList: 'category/firstCategoryList' // 一级分类
    })
  },
  watch: {
    category (newList) {
      this.fid = newList[0].id || 0 // 一级分类
      this.fcatename = newList[0].catename || '' // 一级分类
      // 找出第一个分类的二级分类
      this.secondCategory = newList[0].children || []
    }
  },
  data () {
    return {
      fid: 0, // 当前点击的一级分类的id
      fcatename: '', // 当前点击的一级分类的名称
      secondCategory: [] // 二级分类
    }
  },
  mounted () {
    if (this.category.length === 0) {
      this.$store.dispatch('category/getCategoryList')
    } else {
      // 给fid和secondCategory赋值
      this.fid = this.category[0].id || 0 // 一级分类
      this.fcatename = this.category[0].catename || '' // 一级分类
      // 找出第一个分类的二级分类
      this.secondCategory = this.category[0].children || []
    }
  },
  methods: {
    changeFid (id) {
      this.fid = id
      // 获取当前选择的一级分类对应的二级分类
      const category = this.category.find(item => item.id === id)
      this.fcatename = category.catename || '' // 当前点击的一级分类的名称
      this.secondCategory = category.children || []
    }
  }
}
</script>
<style>
@import url("../../assets/css/classification_2.css");
</style>
