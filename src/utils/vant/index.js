// 自动按需引入 Vant 组件
import {
  Tabbar,
  TabbarItem,
  Button,
  Tab,
  Tabs,
  Icon,
  Swipe,
  SwipeItem
} from 'vant'
let vantUIs = [Tabbar, TabbarItem, Button, Tab, Tabs, Icon, Swipe, SwipeItem]

export default {
  install(Vue) {
    vantUIs.forEach(vantUI => [
      Vue.component(vantUI.name, vantUI)
      // Vue.use(vantUI)    // 也可以使用 Vue.use()
    ])
  }
}
