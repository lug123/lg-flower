import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/index'
import order from './Order/index'
import address from './address/index'

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
  }
})
