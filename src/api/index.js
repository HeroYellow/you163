// 引入二次封装的axios文件
import ajax from './ajax'

// # 首页
export const reqIndexDatas = () => ajax('/')

// # 获取分类左侧导航栏数据
export const reqCateNavDatas = () => ajax('/catenavdatas')

// # 获取分类右侧商品数据
export const reqCateLists = () => ajax('/catelists')

// # 获取值得买的navList
export const reqNavList = () => ajax('/topic/v1/know/navWap.json')

