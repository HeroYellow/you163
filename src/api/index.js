// 引入二次封装的axios文件
import ajax from './ajax'

// 获取三级分类数据信息列表
export const reqBaseCategoryList = () => ajax('/product/getBaseCategoryList')
