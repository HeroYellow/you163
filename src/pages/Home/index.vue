<template>
  <div class="home-container">
    <header class="header">
      <div class="header-hd">
        <!-- logo -->
        <router-link to="/" class="logo"></router-link>
        <!-- search -->
        <div class="search">
          <i></i>
          <span>搜索商品, 共28149款好物</span>
        </div>
        <router-link to="/login" class="login">登陆</router-link>
      </div>
      <div class="header-bd">
        <nav class="nav-category" v-show="!isShowCate">
          <div class="nav-wrapper" ref="navCategory">
            <ul class="nav-content">
              <router-link to="/home/recommend" tag="li">
                <span>推荐</span>
              </router-link>
              <router-link to="/home/lifestyle" tag="li">
                <span>居家生活</span>
              </router-link>
              <li>
                <span>服饰鞋包</span>
              </li>
              <li>
                <span>美食酒水</span>
              </li>
              <li>
                <span>个护清洁</span>
              </li>
              <li>
                <span>母婴亲子</span>
              </li>
              <li>
                <span>运动旅游</span>
              </li>
              <li>
                <span>数码家电</span>
              </li>
              <li>
                <span>严选全球</span>
              </li>
            </ul>
          </div>
        </nav>
        <div class="tabAlter" v-show="isShowCate">全部频道</div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div
            class="toggle"
            @touchend="showCate"
            :class="{ active: isShowCate ? true : false }"
          >
            <i></i>
          </div>
        </div>
        <div class="moreCate" v-show="isShowCate" @touchstart="cancelBubble">
          <!-- <div class="cateTag">推荐</div> -->
          <router-link to="/home/recommend" class="cateTag" tag="span"
            >推荐</router-link
          >
          <router-link to="/home/lifestyle" class="cateTag" tag="span"
            >居家生活</router-link
          >
          <!-- <div class="cateTag">居家生活</div> -->
          <span class="cateTag">服饰鞋包</span>
          <span class="cateTag">美食酒水</span>
          <span class="cateTag">个护清洁</span>
          <span class="cateTag">母婴亲子</span>
          <span class="cateTag">运动旅行</span>
          <span class="cateTag">数码家电</span>
          <span class="cateTag">严选全球</span>
        </div>
      </div>
    </header>
    <div class="home-wrapper" ref="homeWrapper">
      <ul class="home-content">
        <router-view></router-view>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import BScroll from 'better-scroll'

export default {
  name: 'Home',
  data() {
    return {
      isShowCate: false
    }
  },
  mounted() {
    // TODO 导航栏
    new BScroll(this.$refs.navCategory, {
      scrollX: true,
      scrollY: false,
      click: true,
      swipeBounceTime: 200
    })
    // TODO 内容区域滚动
    new BScroll(this.$refs.homeWrapper, {
      scrollY: true
    })
  },
  methods: {
    showCate() {
      this.isShowCate = !this.isShowCate
    },
    cancelBubble(e) {
      if (e.target.tagName === 'SPAN') {
        setTimeout(() => {
          this.isShowCate = false
        }, 500)
      }
      e.stopPropagation()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../static/stylus/mixins";
.home-container
  // header
  .header
    border-1px-bottom(#d9d9d9)
    position fixed
    z-index 2
    top 0
    left 0
    width 100%
    background-color #fff
    // header-hd
    .header-hd
      display flex
      align-items center
      padding .21333rem .4rem
      .logo
        display inline-block
        width 1.84rem
        height .53333rem
        margin-right .26667rem
        background url(./images/logo.png) center no-repeat
        background-size cover
      .search
        display flex
        flex 1
        align-items center
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        i
          width .37333rem
          height .37333rem
          margin-right .13333rem
          background url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png) no-repeat
          background-size 100% 100%
        span
          color #666
      .login
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #DD1A21
        border 1px solid #DD1A21
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem

    // header-bd
    .header-bd
      position relative
      .nav-category
        padding-right 1.33333rem
        .nav-wrapper
          clearFix()
          .nav-content
            float left
            padding 0 .4rem
            white-space nowrap
            li
              display inline-block
              color #333
              &.router-link-exact-active
                color #DD1A21
                span
                  position relative
                  &::after
                    content ""
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    height .05333rem
                    background-color #DD1A21
              span
                display inline-block
                padding 0 .21333rem
                line-height .8rem
                font-size .37333rem
                white-space nowrap

      // tabAlter
      .tabAlter
        height: .8rem;
        line-height: .8rem;
        padding-left: .4rem;
        font-size: .37333rem;
      // toggleWrap
      .toggleWrap
        position absolute
        top 0
        right 0
        display flex
        .linear
          width .8rem
          height .8rem
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .toggle
          width 1.33333rem
          height .8rem
          text-align center
          background #fff
          &.active
            i
              transform rotate(180deg)
          i
            display inline-block
            width .4rem
            height .4rem
            margin-top .2rem
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png)
            background-repeat no-repeat
            background-size 100% 100%
            transition transform .5s

      // moreCate
      .moreCate
        padding-top .32rem
        overflow hidden
        font-size .32rem
        .cateTag
          width 2rem
          height .74667rem
          line-height .74667rem
          text-align center
          float left
          margin-bottom .53333rem
          margin-left .4rem
          background #FAFAFA
          border 1px solid #CCC
          border-radius .05333rem
          &.router-link-exact-active
            color #DD1A21
            border 1px solid #DD1A21
  // .home-wrapper
  .home-wrapper
    position relative
    top 148px
</style>
