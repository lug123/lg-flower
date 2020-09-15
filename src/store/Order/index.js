export default ({
  namespaced: true,
  state: {
    order: [],
    nowOrder: {
      code: '1599874163581', // 时间戳，订单编号
      items: [], // 商品
      contact: {}, // 联系地址
      price: 999
    }
  },
  mutations: {
    setOrder (state, order) {
      state.nowOrder = order// 将拿过来的数据放入vuex中的state中
    },
    setNowOrderContact (state, contact) {
      // 切换当前订单的地址
      state.nowOrder.contact = contact
    }
  },
  actions: {
  }
})
