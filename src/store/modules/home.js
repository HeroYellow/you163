import { reqIndexDatas } from '@/api'

const state = {
  // # 首页数据
  indexDatas: {}
}
const mutations = {
  // # 首页数据的mutation
  RECEIVE_INDEXDATAS(state, indexDatas) {
    state.indexDatas = indexDatas
  }
}
const actions = {
  // # 首页数据的action
  async getIndexDatas({commit}) {
    const result = await reqIndexDatas()
    if (result.code === 200) {
      commit('RECEIVE_INDEXDATAS', result.data)
    } else {
      return Promise.reject('请求数据失败')
    }
  }
}
const getters = {
  // # 新人模块
  bigPromotionModule(state) {
    const bigPromotionModule = state.indexDatas.bigPromotionModule
    return bigPromotionModule ? bigPromotionModule : {}
  },
  // # 类目热销榜
  categoryHotSellModule(state) {
    const categoryHotSellModule = state.indexDatas.categoryHotSellModule
    return categoryHotSellModule ? categoryHotSellModule : {}
  },
  // # 限时购
  flashSaleModule(state) {
    const flashSaleModule = state.indexDatas.flashSaleModule
    return flashSaleModule ? flashSaleModule : {}
  },
  // # 首页轮播图
  focusList(state) {
    const focusList = state.indexDatas.focusList
    return focusList ? focusList : []
  },
  // # 新人专属
  freshmanFlag(state) {
    return state.indexDatas.freshmanFlag
  },
  indexActivityModule(state) {
    const indexActivityModule = state.indexDatas.indexActivityModule
    return indexActivityModule ? indexActivityModule : []
  },
  // # 宫格导航
  kingKongModule(state) {
    const kingKongModule = state.indexDatas.kingKongModule
    return kingKongModule ? kingKongModule : {}
  },
  // # 新品首发
  newItemList(state) {
    const newItemList = state.indexDatas.newItemList
    return newItemList ? newItemList : []
  },
  // # 轮播图下面的口号
  policyDescList(state) {
    const policyDescList = state.indexDatas.policyDescList
    return policyDescList ? policyDescList : []
  },
  popularItemList(state) {
    const popularItemList = state.indexDatas.popularItemList
    return popularItemList ? popularItemList : []
  },
  sceneLightShoppingGuideModule(state) {
    const sceneLightShoppingGuideModule = state.indexDatas.sceneLightShoppingGuideModule
    return sceneLightShoppingGuideModule ? sceneLightShoppingGuideModule : []
  },
  tagList(state) {
    const tagList = state.indexDatas.tagList
    return tagList ? tagList : []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
