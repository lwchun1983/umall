<template>
<div class="main-left">
  <!--
    fid代表当前选中的一级分类的id
    item.id 代表分类循环的时每一个分类的id
    fid === item.id 如果位置代表当前循环的分类就是要选中的分类
  -->
  <a class="cell" @click="onChange($event, item.id)" :class="{active: fid === item.id}" href="#" v-for="item of list" :key="item.id">{{item.catename}}</a>
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    fid: Number
  },
  methods: {
    onChange (e, id) {
      e.preventDefault() // 阻止a标签的默认事件
      this.$emit('change', id)
    }
  }
}
</script>
<style>
.main-left{
  justify-content: flex-start !important;
}
.cell{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
}
.cell.active{
  background: #f26b11;
  color: #fff !important;
}
</style>
