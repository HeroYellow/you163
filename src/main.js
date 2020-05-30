import Vue from 'vue'
import App from './App.vue'
// ~ 引入router
import router from '@/router'
// 引入接口函数
import * as API from './api'
// 保证的任意的一个组件实例都可以直接访问相关的接口函数
Vue.prototype.$API = API
// ~ 引入vant
import vant from '@/utils/vant'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
