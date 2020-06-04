// 引入二次封装的axios文件
import ajax from './wyApi'

// # 获取值得买的navList
export const reqNavList = () => ajax('/topic/v1/know/navWap.json')

// # 获取值得买的瀑布流数据
export const reqRecAuto = page =>
  ajax(`/topic/v1/find/recAuto.json?page=${page}&size=2`)

// # 搜索页面的关键字
export const reqKeywords = () => ajax('/xhr/search/init.json')

// # 搜索关联字
export const reqkeywordList = keyword =>
  ajax({
    method: 'post',
    url: '/xhr/search/searchAutoComplete.json',
    params: {
      keywordPrefix: keyword
    }
  })

// # 搜索到的数据
export const reqProductList = keyword =>
  ajax(
    `/xhr/search/search.json?keyword=${keyword}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=1&needPopWindow=true&_stat_search=userhand`
  )
