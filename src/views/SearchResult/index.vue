<template>
  <div>
    <common-head title="商品列表"></common-head>
    <div class="wrap">
      <div class="list-head">
        <div
          :class="['price',{active:active.priceSales === 0}]"
          @click="byPrice"
        >
          <span>价格</span>
          <div :class="['angle','up',{
            active: active.priceSales === 0 && active.upDown === 1
          }]"></div>
          <div :class="['angle','down',{
            active: active.priceSales === 0 && active.upDown === 0
          }]"></div>
        </div>
        <div
          @click="bySale"
          :class="['sale',{active:active.priceSales === 1}]"
          >
          <span>销量</span>
          <div :class="['angle','up',{
            active: active.priceSales === 1 && active.upDown === 1
          }]"></div>
          <div :class="['angle','down',{
            active: active.priceSales === 1 && active.upDown === 0
          }]"></div>
        </div>
      </div>
      <div class="recommend">
    <div class="recommend-main"
    v-for="item in items"
    :key="item.id"
    @click="clickItem(item.id)"
    >
      <div class="mleft">
        <img v-lazy="item.pic" alt="">
      </div>
      <div class="mright">
        <h3>{{item.name}}</h3>
        <p class="miaoshu">经典热销款</p>
        <p>全新款式 你值得拥有</p>
        <div class="buy">
          <div class="price"><span class="now">{{ item.minPrice | currency }}</span><span class="formerly">{{ item.originalPrice | currency }}</span></div>
          <van-icon @click.stop="clickAddCart(item)"
           size="20" color="#f66" class="iconfont tubiao" class-prefix="icon" name="gouwuche1"></van-icon>
        </div>
        <span class="sell">已销售{{item.numberSells}}件</span>
      </div>
    </div>
  </div>
    </div>
   <my-tabbar></my-tabbar>
  </div>
</template>

<script>
import MyTabbar from '../../components/MyTabbar'
import CommonHead from '../../components/CommonHead'
import { currency } from '../../filters/index'
import { getItemLists } from '../../api/index'
import { mapActions } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      items: [],
      active: {
        priceSales: 0, // 0价格  1 销量
        upDown: 0 // 0 降序  1升序
      }
    }
  },
  filters: {
    currency
  },
  created () {
    this.fetchItems()
  },
  methods: {
    clickAddCart (item) {
      item.isChecked = true
      item.num = 1
      this.addCart(item)
      Toast('成功加入购物车')
    },
    bySale () {
      this.active.priceSales = 1
      // console.log(this.active.upDown)
      if (this.active.upDown === 0) {
        this.active.upDown = 1
      } else {
        this.active.upDown = 0
      }
      this.fetchItems()
    },
    byPrice () {
      // console.log(this.active.upDown)
      this.active.priceSales = 0
      if (this.active.upDown === 0) {
        this.active.upDown = 1
      } else {
        this.active.upDown = 0
      }
      this.fetchItems()
    },
    fetchItems () {
      getItemLists({
        k: this.$route.query.word,
        orderBy: this.orderBy
      }).then(res => {
        if (res.data.code === 0) {
          this.items = res.data.data
        }
      })
    },
    clickItem (id) {
      // 进入详情页
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    ...mapActions('cart', ['addCart'])
  },
  computed: {
    orderBy () {
      let orderBy = 'priceUp'
      // console.log(456)
      if (this.active.priceSales === 0 && this.active.upDown === 0) {
        orderBy = 'priceDown'
      } else if (this.active.priceSales === 0 && this.active.upDown === 1) {
        orderBy = 'priceUp'
      } else if (this.active.priceSales === 1 && this.active.upDown === 0) {
        orderBy = 'ordersUp'
      } else if (this.active.priceSales === 1 && this.active.upDown === 1) {
        orderBy = 'ordersDown'
      }
      return orderBy
    }
  },
  components: {
    MyTabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.list-head{
  line-height:40px;
  background: rgb(240, 236, 236);
  display: flex;
  font-size:14px;
  margin-top: -40px;
  justify-content: space-around;
  .angle{
    width:0;
    height:0;
    border:6px solid transparent;
    &.up{
      border-bottom-color:#999;
    }
    &.down{
      border-top-color:#999;
    }
  }
  .price,.sale{
    position: relative;
    &.active{
      color:#f66;
    }
  }
  .angle{
    position: absolute;
    right:-15px;
  }
  .angle.up{
    top:8px;
    &.active{
      border-bottom-color:#f66;
    }
  }
  .angle.down{
    top:22px;
    &.active{
      border-top-color:#f66;
    }
  }
}
.recommend{
  background: #f1f1f1;
  padding-bottom: 10px;
  .recomment-head{
    line-height: 50px;
    display: flex;
    padding:0 10px;
    box-sizing: border-box;
    justify-content: space-between;
    h4{
      margin:0;
      font-size:18px;
      color:#333;
    }
    a{
      font-size:22px;
      color:#333;
    }
  }
  .recommend-main{
    width: 96%;
    background-color: #fff;
    display: flex;
    margin-left: 2%;
    box-shadow:0 1px 4px 0 #e9ecf0;
    justify-content: space-between;
    height: 170px;
    margin-bottom: 10px;
    .mleft{
      height: 170px;
      width: 50%;
      margin: 0;
      padding: 0;
      img{
        height: 100%;
        margin: 0;
        padding: 0;
      }
    }
    .mright{
      height: 150px;
      width: 50%;
      padding-left: 20px;
      h3{
        height: 20px;
        overflow: hidden;
      }
       .sell{
        color: #71797F;
        font-size: 10px;
        position: relative;
        top:-22px;
      }
      .miaoshu{
        padding: 5px;
        border-top: 1px solid #E9ECF0;
        border-bottom: 1px solid #E9ECF0;
      }
      .buy{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price{
          display: flex;
          height: 70px;
          width: 100px;
          align-items: center;
          margin-top: -20px;
          .now{
            color: #FF734C;
            font-weight: 500;
            font-size: 20px;
          }
          .formerly{
            color: #71797F;
            font-size: 12px;
            margin-left: 10px;
            margin-bottom: -4px;
            text-decoration: line-through;
          }
        }
        .tubiao{
          font-size: 18px;
          margin-top: -18px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
