<template>
  <div>
    <div class="outWrap">
      <div class="headWrap">
        <div class="row">
          <form
            class="m-searchIptWrap searchIpt"
            role="search"
            action="/search"
            @submit.prevent="handleSubmit"
          >
            <div class="m-ipt m-searchIpt">
              <input
                type="search"
                class="ipt"
                :placeholder="placeholder"
                v-model.trim="keyword"
                @touchstart="cancelBubble"
                @keyup="search"
              />
            </div>
          </form>
          <span class="cancel">取消</span>
        </div>
        <div class="keyword-list" v-show="keyword && wordList.length > 0">
          <van-cell is-link v-for="(item, index) in wordList" :key="index">{{
            item
          }}</van-cell>
        </div>
      </div>
      <!-- <div class="searchWrap" v-show="!keyword">
        <div class="searchHistory">
          <div class="hisWrap">
            <div class="tit">历史记录</div>
            <i class="u-icon u-icon-del1"></i>
          </div>
          <nav class="list">
            <a class="item">拖鞋</a>
          </nav>
        </div>
      </div> -->
      <div class="m-searchSuggestions" v-show="!keyword">
        <div class="hd">
          <div class="tit">热门搜索</div>
        </div>
        <nav class="list">
          <a
            class="item"
            :class="{ highlight: item.highlight }"
            v-for="(item, index) in hotKeywords"
            :key="index"
            >{{ item.keyword }}</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// ~ 引入vuex的辅助函数
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      placeholder: '',
      hotKeywords: [],
      list: [],
      wordList: []
    }
  },
  computed: {
    ...mapGetters(['defaultKeyword', 'hotKeywordVOList']),
    ...mapState({
      productList: state => state.search.productList
    })
  },
  mounted() {
    // # 调用函数获取热词展示
    this.getKeywords()
  },
  methods: {
    cancelBubble(e) {
      e.stopPropagation()
    },
    async search() {
      if (!this.keyword) return
      await this.$store.dispatch('getWordList', this.keyword)
      this.wordList = this.$store.state.search.wordList
    },
    // TODO 获取热词
    async getKeywords() {
      await this.$store.dispatch('getKeywords')
      this.placeholder = this.defaultKeyword
      this.hotKeywords = this.hotKeywordVOList
    },
    // TODO 提交
    async handleSubmit() {
      if (!this.keyword) return
      await this.$store.dispatch('getProductList', this.keyword)
      this.list = this.productList
    }
  }
}
</script>

<style lang="stylus" scoped>
.headWrap
  width: 750px
  height: 88px
  background-color: #fff

  .row
    padding: 0 30px
    width: 750px
    height: 88px
    line-height: 88px
    display: flex

    .m-searchIptWrap
      width: 80%
      height: 100%
      line-height: 100%
      padding-top: 20px

      .m-ipt
        width: 604px
        height: 50px
        padding: 0 20px
        background-color: #f4f4f4
        border-radius: 10px

        &::before
          content: ' '
          margin-right: 0.21333rem
          display: inline-block
          vertical-align: middle
          background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp);
          background-repeat: no-repeat
          background-size: 100% 100%
          width: 0.37333rem
          height: 0.37333rem

        .ipt
          width: 520px
          height: 50px
          padding-bottom: 4px
          background-color: #f4f4f4
          font-size: 28px
          color: rgba(0, 0, 0, 0.8)
          outline: none
          border: none

    .cancel
      margin-left: 80px
      width: 60px
      height: 84px
      color: #333333
      font-size: 28px

.searchWrap
  padding: 0 30px 30px
  background-color: #ffffff
  margin-bottom: 20px

.searchHistory
  // padding: 0 30px 30px
  background-color: #ffffff
  margin-bottom: 20px

  .hisWrap
    display: flex
    align-items: center

  .tit
    width: 100%
    height: 80px
    line-height: 80px
    font-size: 28px
    color: #999999

  .u-icon
    background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/del1-c917b2d4a8.png?imageView&type=webp') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/del1-c917b2d4a8.png?imageView&type=webp);
    background-size: 100% 100%
    display: inline-block
    vertical-align: middle
    width: 54px
    height: 54px

  .list
    margin-bottom: 20px
    overflow: hidden

    .item
      float: left
      line-height: 47px
      margin: 0 32px 32px 0
      color: #333333
      padding: 0 15px
      font-size: 24px
      border: 1px solid #999

.m-searchSuggestions
  background-color: #ffffff
  margin-bottom: 20px
  padding: 0 30px 30px
  .hd
    height 90px
    line-height 90px
    color #999
    font-size 28px
  .list
    overflow hidden
    .item
      color #333
      font-size 24px
      margin  0 32px 32px 0
      padding  0 15px
      border 1px solid #999
      float left
      border-radius 4px
      line-height 30px
    .highlight
      color #dd1a21
      border 1px solid #dd1a21
</style>
