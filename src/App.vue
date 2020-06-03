<template>
  <div id="app">
    <router-view></router-view>
    <!-- tabBar -->
    <tabBar />
  </div>
</template>

<script>
// ~ 引入tabBar组件
import tabBar from './components/TabBar'

export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

<style lang="stylus">
html, body
  width 100%
  height 100%
  touch-action auto
  background #eee
  #app
    position relative
    height 100%
    max-width 750px
    margin 0 auto
    // overflow hidden
</style>
