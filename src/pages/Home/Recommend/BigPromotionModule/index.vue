<template>
  <div class="bigPromotionModule">
    <div class="bigPromotionModule-hd">
      <a href="javascript:;">
        <div class="promGood">
          <img
            src="https://yanxuan-item.nosdn.127.net/c2357fd0d9d477635aeea490399602df.png?imageView&thumbnail=168x0&quality=75"
            alt
          />
        </div>
      </a>
    </div>
    <div class="bigPromotionModule-bd">
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigPromotionModule',
  props: ['bigPromotionModule']
}
</script>

<style lang="stylus" scoped>
.bigPromotionModule
  background-color rgb(199, 12, 13)
  overflow hidden
  // bigPromotionModule-hd start
  .bigPromotionModule-hd
    height 3.2rem
    a
      display flex
      align-items center
      justify-content center
      overflow hidden
      position relative
      height 100%
      color #333
      width 100%
      background url(https://yanxuan.nosdn.127.net/5d07f2917f7831cd868fc0a0cdf4b9b5.jpeg?quality=75&type=webp&imageView&thumbnail=750x0) 0% 0% / 100% 100%
      .promGood
        position absolute
        top 14%
        left 10%
        width 2.24rem
        height 2.24rem
        img
          width 100%
          height 100%

  // end bigPromotionModule-bd

  // bigPromotionModule-bd start
  .bigPromotionModule-bd
    height 2.48rem
    display flex
    align-items center
    justify-content space-between
    margin 0 .26667rem .10667rem
    margin-bottom .26667rem
    margin-top .26667rem
    a
      background url(https://yanxuan.nosdn.127.net/a526ae177b5302d3143d88520d330604.png?quality=75&type=webp&imageView&thumbnail=375x0) 0% 0% / 100% 100%
      display flex
      width 4.68rem
      align-items center
      justify-content center
      overflow hidden
      position relative
      height 100%
      color #333
  // end bigPromotionModule-bd
</style>
