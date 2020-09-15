import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import 'lib-flexible'
import { Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Grid, GridItem, PullRefresh, NavBar, GoodsAction, GoodsActionIcon, GoodsActionButton, Popup, Card, Stepper, Button, SubmitBar, SwipeCell, Checkbox, Dialog, Field, CellGroup, ContactCard, AddressList, AddressEdit, Search, Lazyload, Sidebar, SidebarItem } from 'vant'
import './assets/fonts/iconfont.css'
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(PullRefresh)
  .use(NavBar)
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)
  .use(Popup)
  .use(Card)
  .use(Stepper)
  .use(Button)
  .use(SubmitBar)
  .use(SwipeCell)
  .use(Checkbox)
  .use(Dialog)
  .use(Field)
  .use(CellGroup)
  .use(ContactCard)
  .use(AddressList)
  .use(AddressEdit)
  .use(Search)
  .use(Sidebar)
  .use(SidebarItem)

const load = require('./assets/img/loading.gif')
Vue.use(Lazyload, { // 图片懒加载
  loading: load,
  preload: '100%'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
