const cart = {
  namespaced: true,
  state: {
    carts: {
      total: 0,
      isAllChecked: true,
      items: []
    }
  },
  mutations: {
    // 计算总价格
    CalcTotal (state, total) {
      state.carts.total = total
    },
    // 设置购物车数据
    setCarts (state, carts) {
      state.carts = carts
    },
    // 删除商品
    delItem (state, index) {
      state.carts.items.splice(index, 1)
    },
    // 设置全选状态
    setAllChecked (state, allChecked) {
      state.carts.isAllChecked = allChecked
    },
    // 全选选中
    setAllCheckedState (state, allCheckedState) {
      state.carts.items.forEach(item => { item.isChecked = allCheckedState })
    },
    // 加入购物车
    addCart (state, item) {
      state.carts.items.push(item)
    },
    // 增加购买数量
    addItemNum (state, index) {
      state.carts.items[index].num++
    }
  },
  actions: {
    // 加入购物车
    addCart ({ commit, state: { carts } }, item) {
      const { items } = carts
      const index = items.findIndex(el => el.id === item.id)
      if (index === -1) {
        commit('addCart', item)
      } else {
        commit('addItemNum', index)
      }
    },
    // 计算总价格
    Calc_total ({ commit, state: { carts } }) {
      const { items } = carts
      let total = 0
      // 选择选中的商品
      const checkedItems = items.filter(item => item.isChecked)
      checkedItems.forEach(item => {
        total += item.minPrice * item.num
      })
      total = parseFloat(total.toFixed(2))
      commit('CalcTotal', total)
    }
  }
}
export default cart
