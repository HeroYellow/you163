<template>
  <div class="catelist-container" ref="catelistContainer">
    <div class="subCateContainer" ref="subCateContainer">
      <div class="subCateContent" ref="subCateContent">
        <div class="banner">
          <img
            src="https://yanxuan.nosdn.127.net/9fafb4adb40303dc2914c3aa04da03df.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            alt=""
          />
        </div>
        <div class="cateList" v-if="!cateItem.name">
          <ul class="list">
            <li
              class="cateItem"
              v-for="item in cateItem.categoryList"
              :key="item.id"
            >
              <div class="cateImgWrapper">
                <img :src="item.bannerUrl" alt="" />
              </div>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
        <div class="cateList" v-else>
          <div class="hd">{{ cateItem.name }}</div>
          <ul class="list">
            <li
              class="cateItem"
              v-for="item in cateItem.subCateList"
              :key="item.id"
            >
              <div class="cateImgWrapper">
                <img :src="item.wapBannerUrl" alt="" />
              </div>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ~ 引入vuex辅助函数
import { mapState } from 'vuex'
// ~ 引入better-scroll
import BScroll from 'better-scroll'

export default {
  name: 'CateList',
  data() {
    return {
      cateItem: {},
      catelistHeight: 0,
      subCateContentHeight: 0,
      subCateContainerHeight: 0
    }
  },
  mounted() {
    this.catelistHeight = this.$refs.catelistContainer.clientHeight
    this.getCateList()
  },
  computed: {
    ...mapState({
      cateList: state => state.category.cateList
    })
  },
  methods: {
    // TODO 初始化滑动
    _initBScroll() {
      const catelistHeight = this.$refs.catelistContainer.clientHeight
      const subCateContentHeight = this.$refs.subCateContent.offsetHeight
      this.$refs.subCateContainer.style.height =
        (subCateContentHeight > catelistHeight
          ? catelistHeight
          : subCateContentHeight - 1) + 'px'
      this.$nextTick(() => {
        new BScroll(this.$refs.subCateContainer, {
          scrollY: true,
          click: true
        })
      })
    },
    // TODO 获取右侧内容展示数据并初始化滚动
    getCateList() {
      // # 分发获取右侧数据的action
      const promise = this.$store.dispatch('getCateList')
      promise.then(() => {
        const { categoryId } = this.$route.query
        if (!categoryId) {
          this.cateItem = this.cateList[0]
        } else {
          this.cateItem = this.cateList.find(
            item => this.$route.query.categoryId == item.id
          )
        }
        // this.$nextTick(() => {
        // # 初始化滑动
        // this._initBScroll()
        this.$nextTick(() => {
          this.subCateContentHeight = this.$refs.subCateContent.offsetHeight
          this.subCateContainerHeight =
            this.subCateContentHeight > this.catelistHeight
              ? this.catelistHeight
              : this.subCateContentHeight - 1
          this.$nextTick(() => {
            this.$refs.subCateContainer.style.height =
              this.subCateContainerHeight + 'px'
            new BScroll(this.$refs.subCateContainer, {
              scrollY: true,
              click: true
            })
          })
        })
        // })
      })
    }
  },
  watch: {
    $route: {
      handler() {
        this.$nextTick(() => {
          this.getCateList()
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.catelist-container
  height 100%
  overflow hidden
  // subCateContainer start
  .subCateContainer
    // subCateContent start
    .subCateContent
      padding .4rem .4rem .28rem
      // banner start
      .banner
        position relative
        width 100%
        height 2.56rem
        display table
        margin-bottom .42667rem
        background center no-repeat #eee
        background-size cover
        border-radius 4px
        img
          width 100%
          height 2.56rem
      // end banner

      // cateList start
      .cateList
        margin-bottom .16rem
        .hd
          max-width 7.04rem
          padding-bottom .10667rem
          margin-bottom .32rem
          text-align left
          font-weight 700
          color #333
          border-bottom 1px solid #d9d9d9
          white-space nowrap
          font-size .37333rem
          text-overflow ellipsis
          overflow hidden
        .list
          display flex
          flex-wrap wrap
          .cateItem
            font-size 0
            width 1.92rem
            margin-right: .45333rem;
            vertical-align top
            &:nth-child(3n)
              margin-right 0
            .cateImgWrapper
              width 1.92rem
              height 1.92rem
              img
                width 100%
                background #fff
                height 100%
            span
              display block
              height .96rem
              font-size .32rem
              color: #333
              text-align center
              line-height .48rem
              display block
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              overflow hidden
              text-overflow: ellipsis
      // cateList end

      // end subCateContent

  // end subCateContainer
</style>
