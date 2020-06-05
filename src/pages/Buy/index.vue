<template>
  <div class="buy-container">
    <header class="header">
      <div class="topbar">
        <router-link to="/home" class="toHome">
          <van-icon name="wap-home-o" />
        </router-link>
        <span class="title">值得买</span>
        <div class="right">
          <a href="javascript:;" class="search" @touchend="toSearch">
            <van-icon name="search" />
          </a>
          <router-link to="/cart" class="cart">
            <van-icon name="shopping-cart-o" />
          </router-link>
        </div>
      </div>
    </header>
    <div class="swiperTab-container">
      <div class="swiperTab-title">
        <img
          class="u-title"
          src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
          alt=""
        />
        <div class="u-text">严选好物 用心生活</div>
        <img
          class="u-bg"
          src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
          alt=""
        />
      </div>
      <div class="swiper">
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(list, index) in newNavList"
              :key="index"
            >
              <a href="javascript:;" v-for="item in list" :key="item.id">
                <img :src="item.picUrl" alt="" />
                <h3>选妹购物车</h3>
                <p>今日内部爆料！</p>
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="waterfall">
      <div class="left">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="item" v-for="(item, index) in leftList" :key="index">
            <a href="javascript:;" class="item-box">
              <img :src="item.picUrl" alt="" />
              <p class="con">{{ item.title }}</p>
              <div class="userInfo">
                <img :src="item.avatar" alt="" />
                <span class="username">{{ item.nickname }}</span>
                <span class="view"> <i></i> {{ item.readCount }}</span>
              </div>
              <div class="line"></div>
              <div class="ft">
                <p class="con-ft">{{ item.subTitle }}</p>
                <a href="javascript:;">去购买 &gt;</a>
              </div>
            </a>
          </div>
        </van-list>
      </div>
      <div class="right">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="item" v-for="(item, index) in rightList" :key="index">
            <a href="javascript:;" class="item-box">
              <img :src="item.picUrl" alt="" />
              <p class="con">{{ item.title }}</p>
              <div class="userInfo">
                <img :src="item.avatar" alt="" />
                <span class="username">{{ item.nickname }}</span>
                <span class="view"> <i></i> {{ item.readCount }}</span>
              </div>
              <div class="line"></div>
              <div class="ft">
                <p class="con-ft">{{ item.subTitle }}</p>
                <a href="javascript:;">去购买 &gt;</a>
              </div>
            </a>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
// - 引入swiper
import Swiper from 'swiper'
// ~ 引入vuex辅助函数
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Buy',
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      leftList: [],
      rightList: [],
      page: 1
    }
  },
  mounted() {
    // # 调用函数获取navList数据
    this.getNavList()
    // # 调用函数获取瀑布流数据
    this.getRecAuto()
  },
  methods: {
    toSearch() {
      this.$router.push('/search')
    },
    // TODO 分发getRecAuto获取瀑布流
    async getRecAuto() {
      // this.page = page
      await this.$store.dispatch('getRecAuto', this.page)
      // this.leftList = this.recAuto[0].topics
      this.leftList.push(...this.recAuto[0].topics)
      this.rightList.push(...this.recAuto[1].topics)
      // this.rightList = this.recAuto[1].topics
    },
    // TODO 分发getNavList获取navList
    async getNavList() {
      await this.$store.dispatch('getNavList')
      new Swiper(this.$refs.swiper, {
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    async onLoad() {
      // 异步更新数据
      this.page++
      await this.getRecAuto()
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成
      if (
        this.recAuto[0].topics.length <= 0 &&
        this.recAuto[1].topics.length <= 0
      ) {
        this.finished = true
      }
    }
  },
  computed: {
    ...mapGetters(['newNavList']),
    ...mapState({
      recAuto: state => state.buy.recAuto
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../static/stylus/mixins'
.buy-container
  height 100%
  padding-top 1.3333333rem
  .header
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    .topbar
      position: relative;
      height: 100px;
      background-color: #fafafa;
      box-sizing: border-box;
      border-bottom: .01rem solid #d9d9d9;
      padding: 0 .26rem 0 .24rem;
      display flex
      align-items center
      justify-content space-between
      .toHome
        font-size 60px;
        float left
      .title
        font-size: .46rem;
        position absolute
        left 50%
        transform translateX(-50%)
      .right
        float right
        font-size 60px;
        .search
          margin-right 20px;
  // end header
  .swiperTab-container
    position: relative;
    padding-top: 1.45rem;
    background: #eee;
    .swiperTab-title
      position: absolute;
      top: 0;
      z-index: 1;
      .u-title
        position: absolute;
        width: 1.8rem;
        height: auto;
        top: .6rem;
        left: .12rem;
        z-index: 2;
      .u-text
        font-size: .4rem;
        line-height: .44rem;
        height: .44rem;
        position: absolute;
        font-family: 'PingFangSC-Regular';
        left: 2rem;
        top: 1rem;
        color: #FFF;
      .u-bg
        width: 10rem;
        height: auto;
    // swiperTab-title end
    .swiper
      position relative
      z-index 2
      background: #fff;
      height 100px;
      margin 30px 20px 0;
      border-radius 16px
      height 540px;
      padding-top 40px
      // .swiper-wrapper
      //   width 100%
      //   height 100%
      //   overflow hidden
      //   .swiper-content
      //     width 1602px;
      //     .swiper-item
      //       width 178px;
      //       height 200px
      //       display inline-block
      //       margin-bottom 20px
      .swiper-slide
        width 178px
        a
          display flex
          align-items center
          flex-direction column
          width 178px
          height 200px
          text-align center
          margin-bottom 20px
          img
            width 120px
            height 120px
          h3
            font-weight 700
            font-size 26px;
            margin-top 10px
            color #333;
          p
            font-size 20px;
            color #999
            margin-top 10px

  // swiperTab-container end
  .waterfall
    display flex
    padding 20px
    justify-content space-between
    .left, .right
      width 48%
      .item
        margin-bottom 20px
        .item-box
          display flex
          flex-direction column
          border-radius 16px
          overflow hidden
          background #fff
          img
            width 100%
          .con
            color #333
            padding 10px;
            font-size 28px;
            line-height 1.2
          .userInfo
            display flex
            padding 10px
            align-items center
            justify-content space-around
            img
              width 48px
              height 48px
              border-radius 50%
            .username
              font-size 20px;
            .view
              display flex
              font-size 20px;
              align-items center
              i
                width 32px
                height 32px
                background url(./images/icon-view.png)
                background-size 100%
          .line
            margin 10px 20px
            border-1px-top(#666)
          .ft
            display flex
            padding 20px 20px 15px
            font-size 20px;
            align-items center
            justify-content space-between
            font-size 20px

            .con-ft
              width 60%
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            a
              color #DD1A21
              font-family consolas
</style>
