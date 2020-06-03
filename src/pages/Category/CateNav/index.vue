<template>
  <div class="cateNav-container" ref="cateNav">
    <div class="cateNavVertWrap">
      <div class="cateNavVert" ref="cateNavVert">
        <ul class="cateNavVertContent" ref="cateNavVertContent">
          <router-link
            :to="`/category/catelist?categoryId=${item.id}`"
            tag="li"
            :class="{
              active: index === 0 && firstView && !$route.query.categoryId
            }"
            v-for="(item, index) in cateNavDatas"
            :key="item.id"
            ><a href="javascript:;">{{ item.name }}</a></router-link
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// ~ 引入better-scroll
import BScroll from 'better-scroll'
// ~ 引入Vuex辅助函数
import { mapState } from 'vuex'

export default {
  name: 'CateNav',
  data() {
    return {
      firstView: true,
      cateNavHeight: 0,
      cateNavVertContentHeight: 0,
      cateNavVertHeight: 0
    }
  },
  computed: {
    ...mapState({
      cateNavDatas: state => state.category.cateNavDatas
    })
  },
  mounted() {
    this.cateNavHeight = this.$refs.cateNav.clientHeight
    // # 调用函数获取左侧导航栏数据并初始化滚动
    this.getCateNavDatas()
  },
  methods: {
    // TODO 初始化滑动
    // _initBScroll() {
    //   const cateNavHeight = this.$refs.cateNav.clientHeight
    //   const cateNavVertContentHeight = this.$refs.cateNavVertContent
    //     .offsetHeight
    //   this.$refs.cateNavVert.style.height =
    //     (cateNavVertContentHeight > cateNavHeight
    //       ? cateNavHeight
    //       : cateNavVertContentHeight - 1) + 'px'
    //   this.$nextTick(() => {
    //     new BScroll(this.$refs.cateNavVert, {
    //       scrollY: true,
    //       click: true
    //     })
    //   })
    // },
    // TODO 获取左侧导航栏数据并初始化滚动
    getCateNavDatas() {
      // # 分发获取左侧导航栏数据的action
      const promise = this.$store.dispatch('getCateNavDatas')
      promise.then(() => {
        // # 初始化滑动
        this.cateNavVertContentHeight = this.$refs.cateNavVertContent.offsetHeight
        this.$nextTick(() => {
          this.cateNavVertHeight =
            this.cateNavVertContentHeight > this.cateNavHeight
              ? this.cateNavHeight
              : this.cateNavVertContentHeight - 1
          this.$refs.cateNavVert.style.height = this.cateNavVertHeight + 'px'
          this.$nextTick(() => {
            new BScroll(this.$refs.cateNavVert, {
              scrollY: true,
              click: true
            })
          })
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.cateNav-container
  float left
  width 2.16rem
  height 100%
  background-color #fff
  position relative
  // cateNavVertWrap start
  .cateNavVertWrap
    height 100%
    position relative
    .cateNavVert
      .cateNavVertContent
        padding .53333rem 0
        li
          position relative
          width 100%
          height .66667rem
          text-align center
          border none
          margin-top .53333rem
          &:first-child
            margin-top 0
          &.router-link-exact-active, &.active
            a
              color #ab2b2b
            &::before
              content: ' '
              position: absolute
              top 0
              left 0
              bottom 0
              width .08rem
              background-color #ab2b2b
          a
            display block
            color #333
            line-height .66667rem
            white-space nowrap
            font-size .37333rem
            text-overflow ellipsis
            overflow hidden
  // end cateNavVertWrap
</style>
