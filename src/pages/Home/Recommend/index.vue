<template>
  <div class="recommend-container" ref="recommendContainer">
    <div class="recommend-content">
      <!-- 轮播图 -->
      <Swipe :focusList="focusList" />
      <!-- ServicePolicy -->
      <ServicePolicy :policyDescList="policyDescList" />
      <!-- KingKongModule -->
      <KingKongModule :kingKongModule="kingKongModule" />
      <!-- BigPromotionModule -->
      <BigPromotionModule :bigPromotionModule="bigPromotionModule" />
      <!-- FreshmanModule -->
      <FreshmanModule :freshmanFlag="freshmanFlag" />
      <!-- CategoryHotSellModule -->
      <CategoryHotSellModule :categoryHotSellModule="categoryHotSellModule" />
      <!-- NewItemModule -->
      <NewItemModule :newItemList="newItemList" />
      <!-- FlashSaleModule -->
      <!-- <FlashSaleModule /> -->
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
// ~ 引入better-scroll
// import BScroll from 'better-scroll'
// ~ 引入轮播图组件
import Swipe from './Swipe'
// ~ 引入ServicePolicy组件
import ServicePolicy from './ServicePolicy'
// ~ 引入KingKongModule组件
import KingKongModule from './KingKongModule'
// ~ 引入BigPromotionModule组件
import BigPromotionModule from './BigPromotionModule'
// ~ 引入FreshmanModule组件
import FreshmanModule from './FreshmanModule'
// ~ 引入CategoryHotSellModule组件
import CategoryHotSellModule from './CategoryHotSellModule'
// ~ 引入NewItemModule组件
import NewItemModule from './NewItemModule'
// ~ 引入FlashSaleModule组件
// import FlashSaleModule from './FlashSaleModule'
// ~ 引入Footer组件
import Footer from './Footer'

// - 引入Vux的辅助函数
import { mapGetters } from 'vuex'
export default {
  name: 'Recommend',
  components: {
    Swipe,
    ServicePolicy,
    KingKongModule,
    BigPromotionModule,
    FreshmanModule,
    CategoryHotSellModule,
    NewItemModule,
    // FlashSaleModule,
    Footer
  },
  // mounted() {
  //   new BScroll(this.$refs.recommendContainer, {
  //     scrollY: true,
  //     click: true,
  //     bounce: false,
  //     scrollbar: {
  //       fade: true,
  //       interactive: false // 1.8.0 新增
  //     }
  //   })
  // },
  computed: {
    ...mapGetters([
      'focusList',
      'policyDescList',
      'kingKongModule',
      'freshmanFlag',
      'bigPromotionModule',
      'categoryHotSellModule',
      'newItemList'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.recommend-container
  position: absolute
  top: 148px
  left: 0
  right: 0
  .recommend-content
    padding-bottom 1.30667rem
</style>
