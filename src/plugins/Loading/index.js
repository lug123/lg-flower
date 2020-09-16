import Load from './loading.vue'
// 创建loading创建
const loading = {
  install: (Vue) => {
    // 创建一个组件 构造器
    const Loading = Vue.extend(Load)
    // new一个组件
    const loadingComponent = new Loading()
    // 得到这个组件的 模板（相当于div等一些东西）
    const tpl = loadingComponent.$mount().$el
    // 加载到页面上
    document.body.appendChild(tpl)
    Vue.prototype.$showLoading = () => {
      loadingComponent.showLoading = true
    }
    Vue.prototype.$hideLoading = () => {
      loadingComponent.showLoading = false
    }
  }
}

export default loading
