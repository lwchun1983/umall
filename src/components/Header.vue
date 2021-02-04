<template>
<header>
  <img src="@/assets/images/iconimg/arrleft_03.jpg" @click="goBack" alt="">
  <h3>{{title}}</h3>
  <span class=" iconfont">&#xe708;</span>
</header>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>

</style>
