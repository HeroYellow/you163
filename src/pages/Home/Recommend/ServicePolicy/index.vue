<template>
  <div class="servicePolicy">
    <ul class="g-grow">
      <li class="item" v-for="(policy, index) in policyDescList" :key="index">
        <a href="javascript:;">
          <i :style="{ 'background-image': `url(${policy.icon})` }"></i>
          <span>{{policy.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServicePolicy',
  props: ['policyDescList']
}
</script>

<style lang="stylus" scoped>
.servicePolicy
  background #fff
  .g-grow
    width 100%
    height .96rem
    padding 0 .4rem
    display flex
    flex-flow row nowrap
    align-items center
    .item
      flex 1
      a
        display inline-block
        height .42667rem
        i
          display inline-block
          width: .42667rem
          height: .42667rem
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-bf1239c157.png)
          background-repeat no-repeat
          background-size 100% 100%
        span
          font-size .32rem
          color #333
          margin-left .10667rem
          line-height .42667rem
          display inline-block
          vertical-align middle
</style>
