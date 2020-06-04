<template>
  <div class="home-container" @touchstart="showMask">
    <!-- Header -->
    <Header ref="header" />
    <router-view></router-view>
  </div>
</template>

<script>
// ~ 引入Header组件
import Header from './Header'
export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('getIndexDatas')
  },
  methods: {
    showMask(e) {
      e.stopPropagation()
      this.$refs.header.isShowCate = false
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.home-container
  height 100%
  // position absolute
  // top 0
  // left 0
  // right 0
  // bottom 1.30667rem
</style>
