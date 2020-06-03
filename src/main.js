import Vue from 'vue'
import App from './App.vue'
// ~ 引入router
import router from '@/router'
// ~ 引入store
import store from '@/store'
// 引入接口函数
import * as API from './api'
// 保证的任意的一个组件实例都可以直接访问相关的接口函数
Vue.prototype.$API = API

// ~ 引入swiper样式
import 'swiper/css/swiper.css'

// ~ 引入vant
import vant from '@/utils/vant'
// ~ 引入common.css
import './static/css/common.css'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
