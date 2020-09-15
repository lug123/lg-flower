<template>
  <div class="recommend">
    <div class="recomment-head">
      <h4>精品推荐</h4>
      <a href="javascript:;">
        >
      </a>
    </div>
    <div class="recommend-main"
    v-for="item in recommends"
    :key="item.id"
    @click="clickItem(item.id)"
    >
      <div class="mleft">
        <img v-lazy="item.pic" alt="">
      </div>
      <div class="mright">
        <h3>{{item.name}}</h3>
        <p class="miaoshu">经典热销款 </p>
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
</template>

<script>
import { currency } from '../../../filters'
export default {
  props: {
    recommends: {
      type: Array,
      required: true
    }
  },
  filters: {
    currency
  },
  methods: {
    clickAddCart (item) {
      this.$emit('clickAddCart', item)
    },
    clickItem (itemId) {
      this.$emit('click', itemId)
    }
  }
}
</script>

<style lang="scss" scoped>
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
