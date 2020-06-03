<template>
  <div class="category-container">
    <div class="header">
      <div class="searchInput">
        <i></i>
        <span>搜索商品, 共28334款好物</span>
      </div>
    </div>
    <section class="cateContainer">
      <!-- 左侧导航栏 -->
      <CateNav />
      <div class="subCateList">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
// ~ 引入左侧导航栏
import CateNav from './CateNav'
// ~ 引入vuex
// import { mapState } from 'vuex'
export default {
  name: 'Category',
  components: {
    CateNav
  }
  // mounted() {
  //   this.$store.dispatch('getCateList')
  // }
}
</script>

<style lang="stylus" scoped>
@import "../../static/stylus/mixins"
.category-container
  height 100%
  // header start
  .header
    border-1px-bottom(#d9d9d9)
    display flex
    height 1.17333rem
    z-index 1
    padding 0 .4rem
    align-items center
    background-color #fff
    .searchInput
      display flex
      width 100%
      height .74667rem
      font-size .37333rem
      align-items center
      justify-content center
      background-color #ededed
      border-radius .10667rem
      i
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
        background-repeat no-repeat
        background-size 100% 100%
        width .37333rem
        height .37333rem
        margin-right .13333rem
      span
        color #666
  // end header
  // cateContainer start
  .cateContainer
    position absolute
    top 1.17333rem
    left 0
    right 0
    bottom 1.30667rem

    // subCateList start
    .subCateList
      margin-left 2.16rem
      height 100%
      overflow hidden
      background-color #fff
    //  endsubCateList

  // end cateContainer
</style>
