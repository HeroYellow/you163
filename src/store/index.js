import Vue from 'vue'
import Vuex from 'vuex'
// ~ 引入modules
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
