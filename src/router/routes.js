// ~ 引入Home路由组件
import Home from '@/pages/Home'
// ~ 引入Recommend路由组件
import Recommend from '@/pages/Home/Recommend'
// ~ 引入LifeStyle路由组件
import LifeStyle from '@/pages/Home/LifeStyle'

// ~ 引入Category路由组件
import Category from '@/pages/Category'
// ~ 引入CateList路由组件
import CateList from '@/pages/Category/CateList'

// ~ 引入Buy路由组件
import Buy from '@/pages/Buy'
// ~ 引入Cart路由组件
import Cart from '@/pages/Cart'
// ~ 引入Person路由组件
import Person from '@/pages/Person'
// ~ 引入Search路由组件
import Search from '@/pages/Search'

export default [
  // # Home
  {
    path: '/home',
    component: Home,
    children: [
      // # Recommend
      { path: '/home', component: Recommend },
      // # LifeStyle
      { path: '/home/lifestyle', component: LifeStyle }
    ]
  },
  // # Category
  {
    path: '/category/catelist',
    component: Category,
    children: [
      {
        path: '/category/catelist',
        component: CateList
      }
    ]
  },
  // { path: '/category', redirect: '/category/catelist' },
  // # Buy
  { path: '/buy', component: Buy },
  // # Cart
  { path: '/cart', component: Cart },
  // # Person
  { path: '/person', component: Person },
  // # Search
  { path: '/search', component: Search },
  { path: '/', redirect: '/home' }
]
