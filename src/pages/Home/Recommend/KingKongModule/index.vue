<template>
  <div class="kingKongModule">
    <ul class="list">
      <li class="item" v-for="(item, index) in kingKongModule.kingKongList" :key="index">
        <a href="javascript:;">
          <img :src="item.picUrl" alt />
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KingKongModule',
  props: ['kingKongModule']
}
</script>

<style lang="stylus" scoped>
.kingKongModule
  background #fff
  padding-bottom .42667rem
  .list
    display flex
    flex-wrap wrap
    .item
      width 1.46667rem
      height 2.08rem
      margin .13333rem .26667rem 0
      margin-bottom .12rem
      a
        img
          width 1.46667rem
          height 1.46667rem
        span
          display block
          margin-top .13333rem
          text-align center
          font-size .32rem
          color rgb(51, 51, 51)
          line-height .48rem
          white-space nowrap
</style>
