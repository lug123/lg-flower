<template>
  <div>
    <common-head title="分类"></common-head>
    <div class="cates">
      <div class="left">
       <div
        v-for="(cate, index) in cates"
        :key="cate.id"
        @click="changeCate(index)"
        :class="['cate', {active: index===num}]">{{cate.name}}</div>
      </div>
      <div class="right">
        <div class="recommend-main" v-for="item in items" :key='item.id' @click="clickItem(item.id)">
              <div class="mleft">
                <img v-lazy="item.pic" alt="">
              </div>
              <div class="mright">
                <h3>{{item.name}}</h3>
                <p class="miaoshu">经典热销款 </p>
                <p>全新款式 你值得拥有</p>
                <div class="buy">
                  <div class="price"><span class="now">{{ item.minPrice | currency }}</span><span class="formerly">{{ item.originalPrice | currency }}</span></div>
                  <van-icon @click.stop="add_cart(item)"
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
import { getCates, getItemLists } from '../../api'
import MyTabbar from '../../components/MyTabbar'
import CommonHead from '../../components/CommonHead'
import {mapActions} from 'vuex'
import { Toast } from 'vant'
import { currency } from '../../filters'
export default {
  name: 'cates',
  data () {
    return {
      cates: [],
      num: 0,
      items: []
    }
  },
  filters: {
    currency
  },
  created () {
    this.fetchAllCates()
  },
  methods: {
    changeCate (index) {
      // 切换分类
      this.num = index
      this.fetchItemLists()
    },
    fetchAllCates () {
      // 获取分类
      getCates().then(res => {
        if (res.data.code === 0) {
          this.cates = res.data.data
          this.fetchItemLists()
        }
      })
    },
    fetchItemLists () {
      // 获取分类对于商品
      getItemLists({
        categoryId: this.cates[this.num].id
      }).then(res => {
        this.items = []
        if (res.data.code === 0) {
          this.items = res.data.data
        }
      })
    },clickItem (id) {
      // 点击进入详情页(query传参)
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },add_cart(item){
      item.isChecked = true
      item.num = 1
      this.addCart(item)
      Toast('成功加入购物车')
    },...mapActions('cart',['addCart'])
  },
  components: {
    MyTabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.cates{
  position: fixed;
  top:46px;
  bottom:50px;
  left:0;
  right:0;
 
  display:flex;
  .left{
    flex:1;
    border-right:1px solid #ccc;
    .cate{
      line-height: 50px;
      text-align: center;
      font-size:14px;
      &.active{
        color:#FF734C;
        background: #f1f1f1;
        border-left: 2px solid #FF734C;
      }
    }
  }
  .right{
    flex:4;
    overflow: auto ;
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
    height: 140px;
    margin-bottom: 10px;
    .mleft{
      height: 170px;
      width: 50%;
      margin: 0;
      padding: 0;
      img{
        height: 80%;
        margin: 0;
        padding: 0;
      }
    }
    .mright{
      height: 150px;
      width: 50%;
      padding-left: 20px;
      p{
        margin: 6px 0px;
      }
      h3{
        overflow: hidden;
        height: 20px;
        padding: 0;
        margin:3px 0;
      }
      .sell{
        color: #71797F;
        font-size: 10px;
        position: relative;
        top:-18px;
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
          padding: 0;
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
}
</style>
