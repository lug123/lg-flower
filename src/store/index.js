import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/index'
import order from './Order/index'
import address from './address/index'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    order,
    address
  },
  plugins: [vuexLocal.plugin]
})
