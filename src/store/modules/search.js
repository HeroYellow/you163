import { reqKeywords, reqProductList, reqkeywordList } from '@/api/wyIndex'
const state = {
  keywords: {},
  wordList: [],
  productList: []
}
const mutations = {
  // TODO 获取热词的mutation
  RECEIVE_KEYWORDS(state, keywords) {
    state.keywords = keywords
  },
  // TODO 搜索展示的关键字
  RECEIVE_WORDLIST(state, wordList) {
    state.wordList = wordList
  },
  // TODO 获取搜索到的商品的mutation
  RECEIVE_PRODUCTLIST(state, productList) {
    state.productList = productList
  }
}
const actions = {
  // TODO 获取热词的action
  async getKeywords({ commit }) {
    const result = await reqKeywords()
    if (result.code == 200) {
      commit('RECEIVE_KEYWORDS', result.data)
    }
  },
  // TODO 获取关键字列表
  async getWordList({ commit }, keyword) {
    const result = await reqkeywordList(keyword)
    if (result.code == 200) {
      commit('RECEIVE_WORDLIST', result.data)
    }
  },
  // TODO 获取搜索到的商品的action
  async getProductList({ commit }, keyword) {
    const result = await reqProductList(keyword)
    if (result.code == 200) {
      commit('RECEIVE_PRODUCTLIST', result.data.directlyList)
    }
  }
}
const getters = {
  // # 搜索框提示的默认字
  defaultKeyword(state) {
    const defaultKeyword = state.keywords.defaultKeyword.keyword
    return defaultKeyword ? defaultKeyword : ''
  },
  // # 搜索框下面的热词
  hotKeywordVOList(state) {
    const hotKeywordVOList = state.keywords.hotKeywordVOList
    return hotKeywordVOList ? hotKeywordVOList : []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
