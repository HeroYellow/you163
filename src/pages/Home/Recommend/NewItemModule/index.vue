<template>
  <div class="newItemModule">
    <div class="moduleTitle">
      <div class="left">新品首发</div>
      <a href="javascript:;" class="right">
        更多
        <i></i>
      </a>
    </div>
    <div class="goodGrid">
      <ul class="list">
        <li class="item" v-for="(item, index) in newItemList" :key="index">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img :src="item.listPicUrl" alt />
              </div>
            </div>
            <div class="name">{{ item.name }}</div>
            <!-- <div class="newItemDesc">果香清新，一口难忘</div> -->
            <div class="price">
              <span class="priceInner">
                <span>￥{{ item.counterPrice }}</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>
        <!-- <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img
                  src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </div>
            </div>
            <div class="name">仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</div>
            <div class="newItemDesc">果香清新，一口难忘</div>
            <div class="price">
              <span class="priceInner">
                <span>￥69</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img
                  src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </div>
            </div>
            <div class="name">仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</div>
            <div class="newItemDesc">果香清新，一口难忘</div>
            <div class="price">
              <span class="priceInner">
                <span>￥69</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img
                  src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </div>
            </div>
            <div class="name">仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</div>
            <div class="newItemDesc">果香清新，一口难忘</div>
            <div class="price">
              <span class="priceInner">
                <span>￥69</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img
                  src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </div>
            </div>
            <div class="name">仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</div>
            <div class="newItemDesc">果香清新，一口难忘</div>
            <div class="price">
              <span class="priceInner">
                <span>￥69</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="good">
            <div class="hd">
              <div class="wraper">
                <img
                  src="https://yanxuan-item.nosdn.127.net/111af5f1e3fd7355f2b9e9b705c21919.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </div>
            </div>
            <div class="name">仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</div>
            <div class="newItemDesc">果香清新，一口难忘</div>
            <div class="price">
              <span class="priceInner">
                <span>￥69</span>
              </span>
            </div>
            <span></span>
            <div class="specification">
              <div>西</div>
              <div>班</div>
              <div>牙</div>
              <div>直</div>
              <div>采</div>
            </div>
            <div class="tagWraper">
              <span class="gradientPrice">618预售</span>
            </div>
          </div>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItemModule',
  props: ['newItemList']
}
</script>

<style lang="stylus" scoped>
.newItemModule
  background-color #fff
  // margin-bottom .26667rem
  padding-bottom .34667rem
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
    .right
      display block
      font-size .37333rem
      float right
      color #333
      line-height 1.33333rem
      i
        margin -.06667rem 0 0 .10667rem
        display inline-block
        vertical-align middle
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png);
        background-repeat no-repeat
        background-size 100% 100%
        width .17333rem
        height .30667rem
  // moduleTitle end
  .goodGrid
    padding-left .13333rem
    background-color #fff
    .list
      display flex
      flex-wrap wrap
      position relative
      z-index 0
      overflow hidden
      .item
        padding 0 0 .17333rem!important
        margin-left .26667rem
        width 2.88rem
        float left
        position relative
        overflow hidden
        background-color #fff
        .good
          display block
          width 100%
        .hd
            background-color #f5f5f5
            border-radius .05333rem
            position relative
            z-index 0
          .wraper
            background-color #f5f5f5
            padding-bottom 100%
            margin-bottom .16rem
            position relative
            img
              background-color: #f5f5f5
              top: 0
              left: 0
              width: 100%
              height: 100%
              position: absolute
              display block
              border-radius .05333rem .05333rem 0 0
        .name
          margin-top 0
          padding 0
          font-size .32rem
          white-space normal
          line-height .48rem
          text-overflow ellipsis
          overflow hidden
          color #333
          text-align left
        .newItemDesc
          display block
        .price
          font-size .42667rem
          line-height .64rem
          color #DD1A21
          text-align left
          font-family "PingFangSC-Regular"
          .priceInner
              display flex
              align-items center
        .specification
          background #f4f4f4
          position: absolute;
          border-width: .5px;
          border-radius: .02667rem;
          border-style: solid;
          border-color: #b4a078;
          width: .42667rem;
          top: 0;
          margin-top: .13333rem;
          margin-left: .13333rem;
          padding: .16rem 0;
          color: #b4a078;
          background-color: #f4f4f4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          div
            font-size: .26667rem;
            text-align: center;
            line-height: 1;
        .tagWraper
          width: 100%
          z-index 1
          margin 0 0 .05333rem -.16rem
          height .44rem
          overflow hidden
          padding-left: 0
          .gradientPrice
            margin-left .16rem
            margin-bottom: .06667rem;
            height: .45rem;
            padding: 0 .10667rem;
            line-height: .45rem;
            color: #DD1A21;
            background: rgba(255,255,255,.9);
            border: 1px solid #DD1A21;
            border-radius: .2rem;
            white-space: nowrap;
            &::before
              content: '';
              display: inline-block;
              height: 100%;
              vertical-align: middle;
              width: 0;
</style>
