<template>
  <div>
    <home-head></home-head>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="wrap">
       <!-- 轮播 -->
       <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="banner in banners"
          :key="banner.id"
        >
          <img :src="banner.picUrl" alt="" >
        </van-swipe-item>
      </van-swipe>
       <!-- 宫格导航 -->
       <van-grid :column-num='5'>
        <van-grid-item
          v-for="cate in cates"
          :key="cate.id"
          :icon="cate.icon"
          :text="cate.name"
          @click="enterItemList(cate.id)"/>
      </van-grid>
      <recommend
        :recommends = "recommends"
        @click="clickItem"
        @clickAddCart="add_cart"
      />
    </div>
    </van-pull-refresh>
    <my-tabbar></my-tabbar>

  </div>
</template>

<script>
import MyTabbar from '../../components/MyTabbar'
import HomeHead from './components/HomeHead'
import Recommend from './components/Recommend'
import { getCates, getBanners, getRecommends } from '../../api/index'
import { mapActions } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      banners: [],
      cates: [],
      recommends: [],
      isLoading: false
    }
  },
  created () {
    this.fetchBanners()
    this.fetchCates()
    this.fetchReconmmend()
  },
  methods: {
    add_cart (item) {
      item.isChecked = true
      item.num = 1
      this.addCart(item)
      Toast('成功加入购物车')
    },
    fetchBanners () {
      // banner数据获取
      getBanners().then(res => {
        if (res.data.code === 0) {
          this.banners = res.data.data
        }
      })
    },
    enterItemList (cateId) {
      // 进入 商品列表(动态路由传参)
      this.$router.push(`/itemLists/${cateId}`)
    },
    clickItem (id) {
      // 点击进入详情页(query传参)
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    fetchCates () {
      // 分类获取
      getCates().then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.cates = res.data.data
        }
      })
    },
    fetchReconmmend () { 
      // 获取
      getRecommends().then(res => {
        console.log(res)
        this.isLoading = false
        if (res.data.code === 0) {
          this.recommends = res.data.data
        }
      })
    },
    onRefresh () {
      // 数据更新
      this.fetchReconmmend()
    },
    ...mapActions('cart', ['addCart'])
  },
  components: {
    MyTabbar,
    HomeHead,
    Recommend
  }
}
</script>

<style lang="scss" scoped>
.my-swipe{
  img{
    width:100%;
  }
}
</style>
