<template>
  <div class="freshmanModule">
    <div class="moduleTitle">
      <span class="txt">新人专享礼</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <div class="img">
            <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="module1">
          <div class="activityItem">
            <div class="picWrap">
              <div class="pic">
                <img
                  src="https://yanxuan-item.nosdn.127.net/3e2810d4cbcda975d4e0fdc606b46e8b.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt
                />
              </div>
              <div class="discount">
                <div class="line1">¥11</div>
                <div class="line2">¥12.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
            </div>
          </div>
        </div>
        <div class="module2">
          <div class="activityItem">
            <div class="picWrap">
              <div class="pic">
                <img
                  src="https://yanxuan-item.nosdn.127.net/3c2a24cb6a6d7134c66bcd651f2978d1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt
                />
              </div>
              <div class="discount">
                <div class="line1">¥11</div>
                <div class="line2">¥12.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle"></div>
              <div class="tag">1元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreshmanModule',
  props: ['freshmanFlag']
}
</script>

<style lang="stylus" scoped>
.freshmanModule
  background-color #fff
  margin-bottom .26667rem
  margin-top .26667rem
  padding-bottom .4rem
  // moduleTitle start
  .moduleTitle
    height 1.2rem
    width 100%
    line-height 1.2rem
    text-align center
    font-family "PingFangSC-Regular"
    font-size .42667rem
    padding 0 .4rem
    background #fff
    overflow hidden
    .txt
      display inline-block
      position relative
      &::before
        left -.53333rem
        content ''
        position absolute
        top .6rem
        width .32rem
        height .04rem
        background #333
      &::after
        right -.53333rem
        content ''
        position absolute
        top .6rem
        width .32rem
        height .04rem
        background #333
  // end moduleTitle

  // content start
  .content
    padding-left .4rem
    overflow hidden
    // left start
    .left
      display block
      width 4.57333rem
      height 5.78667rem
      background #F9E9CF
      border-radius .05333rem
      margin-right .05333rem
      float left
      color #333
      .name
        font-family "PingFangSC-Medium"
        font-size .42667rem
        padding .4rem 0 0 .4rem
      .imgWrap
        margin .49333rem auto
        width 3.44rem
        height 3.42667rem
        position relative
        .img
          width 3.44rem
          height 3.42667rem
          img
            width 100%
            height 100%
    // end left
    .right
      float left
      .module1, .module2
        background #FBE2D3
        border-radius 4px
        width 4.57333rem
        height 2.86667rem
        margin-bottom .05333rem
        .activityItem
          display block
          color #333
          width 4.57333rem
          height 2.93333rem
          float left
          border-radius .05333rem
          margin 0 .05333rem .05333rem 0
          font-size .32rem
          padding .26667rem 0 0 .4rem
          height 2.86667rem
          position relative
          background-image url(?quality=75&type=webp&imageView&thumbnail=343x220)
          background-size 100% 100%
          line-height 1.5
        .picWrap
          position absolute
          right 0
          top .2rem
          width 2.66667rem
          height 2.66667rem
          .pic
            width 2.66667rem
            height 2.66667rem
            img
              display inline
              width 100%
              height auto
          .discount
            position absolute
            top 0
            right .4rem
            width 1.06667rem
            height 1.06667rem
            opacity .8
            background #F59524
            border-radius 50%
            padding-top .13333rem
            color #fff
            text-align center
            .line1
              font-size .32rem
            .line2
              font-size .26667rem
              margin-top -.09333rem
              text-decoration line-through
        .cnt
          position relative
          .title
            font-family "PingFangSC-Medium"
            font-size .42667rem
          .subTitle
            color #7F7F7F
          .tag
            position relative
            display inline-block
            padding 0 .13333rem
            height .42667rem
            background #CBB693
            border-radius .05333rem
            color #fff
            font-size .29333rem
            line-height .42667rem
            text-align center
      .module2
        background #FFECC2
  // end content
</style>
