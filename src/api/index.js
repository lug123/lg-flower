import request from '../utils/request'
//获取分类
const getCates = (params = {}) => request.get('/shop/goods/category/all', { params })
//获取轮播图
const getBanners = () => request.get('/banner/list')
// 获取首页商品
const getRecommends = () => request.post('/shop/goods/list',{
  categoryId:164197
})
//获取商品详情
const getItemDetail = (id) =>request.get('/shop/goods/detail?id=' + id)
//获取商品列表
const getItemLists = (params={}) =>request.post('/shop/goods/list',params)
export {
  getCates,
  getBanners,
  getRecommends,
  getItemDetail,
  getItemLists
}