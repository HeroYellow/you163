// ~ 引入API
import { reqCateNavDatas, reqCateLists } from '@/api'
const state = {
  // # 左侧导航栏数据
  cateNavDatas: [],
  // # 右侧商品展示数据
  cateList: []
}
const mutations = {
  // TODO 分类左侧导航栏的mutation
  RECEIVE_CATENAVDATAS(state, cateNavDatas) {
    state.cateNavDatas = cateNavDatas
  },
  // TODO 分类右侧商品展示数据的mutation
  RECEIVE_CATELIST(state, cateList) {
    state.cateList = cateList
  }
}
const actions = {
  // TODO 分类左侧导航栏的action
  async getCateNavDatas({ commit }) {
    const result = await reqCateNavDatas()
    if (result.code == 200) {
      commit('RECEIVE_CATENAVDATAS', result.data)
      return Promise.resolve()
    } else {
      return Promise.reject('获取数据失败')
    }
  },
  // TODO 分类右侧内容展示的action
  async getCateList({ commit }) {
    const result = await reqCateLists()
    if (result.code == 200) {
      commit('RECEIVE_CATELIST', result.data)
      return Promise.resolve()
    } else {
      return Promise.reject('获取数据失败')
    }
  }
}
const getters = {
  firstCateItem(state) {
    const firstCateItem = state.cateList[0]
    return firstCateItem ? firstCateItem : {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
