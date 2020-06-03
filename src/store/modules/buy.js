import { reqNavList, reqRecAuto } from '@/api/wyIndex'
const state = {
  // # 轮播图数据
  navList: [],
  // # 瀑布流的数据
  recAuto: {}
}
const mutations = {
  // # 获取轮播图的mutation
  RECEIVE_NAVLIST(state, navList) {
    state.navList = navList
  },
  // # 获取瀑布流的mutation
  RECEIVE_RECAUTO(state, recAuto) {
    state.recAuto = recAuto
  }
}
const actions = {
  // # 获取轮播图的action
  async getNavList({ commit }) {
    const result = await reqNavList()
    if (result.code == 200) {
      commit('RECEIVE_NAVLIST', result.data.navList)
    }
  },
  // # 获取瀑布流的数据
  async getRecAuto({ commit }, page) {
    const result = await reqRecAuto(page)
    if (result.code == 200) {
      commit('RECEIVE_RECAUTO', result.data.result)
    }
  }
}
const getters = {
  // # 处理轮播图数据
  newNavList(state) {
    let newNavList = []
    var j = 0
    var item = []
    for (var i = 0; i < state.navList.length; i++) {
      ++j
      item.push(state.navList[i])
      if (j % 2 == 0) {
        newNavList.push(item)
        item = []
      }
      if (i === state.navList.length - 1 && item.length === 1) {
        newNavList.push(item)
      }
    }
    return newNavList ? newNavList : []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
