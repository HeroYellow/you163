// 引入二次封装的axios文件
import ajax from './wyApi'

// # 获取值得买的navList
export const reqNavList = () => ajax('/topic/v1/know/navWap.json')

// # 获取值得买的瀑布流数据
export const reqRecAuto = page =>
  ajax(`/topic/v1/find/recAuto.json?page=${page}&size=2`)
