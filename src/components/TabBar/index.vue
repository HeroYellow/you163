<template>
  <div class="tabBar-wrap">
    <nav class="tabBar">
      <router-link
        class="item"
        to="/home"
        tag="div"
        :class="{ active: $route.path.startsWith('/home') }"
      >
        <i class="icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link
        class="item"
        to="/category/catelist"
        tag="div"
        :class="{ active: $route.path.startsWith('/category') }"
      >
        <i class="icon-category"></i>
        <span>分类</span>
      </router-link>
      <router-link
        class="item"
        to="/buy"
        tag="div"
        :class="{ active: $route.path.startsWith('/buy') }"
      >
        <i class="icon-buy"></i>
        <span>值得买</span>
      </router-link>
      <router-link
        class="item"
        to="/cart"
        tag="div"
        :class="{ active: $route.path.startsWith('/cart') }"
      >
        <i class="icon-cart"></i>
        <span>购物车</span>
      </router-link>
      <router-link
        class="item"
        to="/person"
        tag="div"
        :class="{ active: $route.path.startsWith('/person') }"
      >
        <i class="icon-person"></i>
        <span>个人</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style lang="stylus" scoped>
@import "../../static/stylus/mixins"
.tabBar-wrap
  position fixed
  z-index 99
  left 0
  bottom 0
  width 100%
  background-color #fff

  .tabBar
    display flex
    height 1.30667rem
    align-items center
    justify-content space-around
    border-1px-top(#d9d9d9)

    .item
      text-align center

      &.active

        .icon-home
          background-position 0 -2.66667rem

        .icon-category
          background-position 0 -1.33333rem

        .icon-buy
          background-position 0 -4rem

        .icon-cart
          background-position 0 0

        .icon-person
          background-position 0 -5.33333rem


        span
          color #DD1A21

      i
        display inline-block
        width .53333rem
        height .53333rem
        background pink
        background url('./images/tabBar-icon.png')
        background-size .53333rem 6.53333rem

      .icon-home
        background-position 0 -3.33333rem

      .icon-category
        background-position 0 -2rem

      .icon-buy
        background-position 0 -4.66667rem

      .icon-cart
        background-position 0 -.66667rem

      .icon-person
        background-position 0 -6rem

      span
        display block
        margin-top .09333rem
        font-size .32rem
        color #666
        line-height 1
</style>
