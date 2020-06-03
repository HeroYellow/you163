import Vue from 'vue'
import VueRouter from 'vue-router'
// ~ 引入routes
import routes from './routes'

Vue.use(VueRouter)

// 重写push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

// 重写replace
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return originalReplace.call(this, location, onComplete, onAbort)
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
