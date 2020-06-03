<template>
  <div class="categoryHotSellModule">
    <div class="moduleTitle">
      <div class="left">{{categoryHotSellModule.title}}</div>
    </div>
    <div class="content">
      <div class="line1">
        <div
          class="item-big"
          v-for="(item, index) in categoryHotSellModule.categoryList"
          :key="index"
          v-show="index < 1"
        >
          <div class="name">
            <span class="txt">{{item.categoryName}}</span>
          </div>
          <div class="imgWrap">
            <img :src="item.picUrl" alt />
          </div>
        </div>
        <div class="item-big">
          <div class="name">
            <span class="txt">热销榜</span>
          </div>
          <div class="imgWrap">
            <img
              src="https://yanxuan-item.nosdn.127.net/91a264d84fed57f97c48dc107370e941.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt
            />
          </div>
        </div>
      </div>
      <div class="line2">
        <div
          class="item"
          v-for="(item, index) in categoryHotSellModule.categoryList"
          :key="index"
          v-show="index > 1"
        >
          <div class="name">{{item.categoryName}}</div>
          <div class="imgWrap">
            <img :src="item.picUrl" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryHotSellModule',
  props: ['categoryHotSellModule']
}
</script>

<style lang="stylus" scoped>
.categoryHotSellModule
  background-color #fff
  margin-bottom .26667rem
  .moduleTitle
    width 100%
    height 1.33333rem
    line-height 1.33333rem
    padding 0 .4rem
    background #fff
    overflow hidden
    .left
      float left
      font-size .42667rem
      font-family "PingFangSC-Regular"
  // end moduleTitle
  .content
    padding 0 .26667rem .26667rem .4rem
    overflow hidden
    .line1
      .item-big
        background #F9F3E4
        width 4.53333rem
        height 2.66667rem
        float left
        border-radius .05333rem
        margin 0 .13333rem .13333rem 0
        position relative
        &:last-child
          background #EBEFF6
        .name
          position relative
          padding-left .32rem
          color #333
          font-family "PingFangSC-Medium"
          font-size .37333rem
          margin-top .88rem
          z-index: 5
          .txt
            display inline-block
            position relative
            &::before
              content ''
              position absolute
              left 0
              bottom -.21333rem
              width .64rem
              height .05333rem
              background #333
        .imgWrap
          position absolute
          top 0
          right 0
          width 2.66667rem
          height 2.66667rem
          img
            display inline
            width 100%
            height auto
    // .line2 start
    .line2

      .item
        display block
        width 2.2rem
        height 2.4rem
        background #F5F5F5
        border-radius .05333rem
        float left
        margin 0 .13333rem .13333rem 0
        .name
          margin-top .13333rem
          text-align center
          font-size .32rem
          color #333
          font-family "PingFangSC-Medium"
        .imgWrap
          width 1.6rem
          height 1.6rem
          margin .02667rem 0 0 .30667rem
          img
            width 100%
    // .line2 end
</style>
