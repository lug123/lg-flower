<template>
  <div>
    <common-head
    title="Hua.com花礼网"></common-head>
      <div class="wrap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="banner in detail.pics"
            :key="banner.id"
          >
            <img :src="banner.pic" alt="">
          </van-swipe-item>
        </van-swipe>
       <!-- /轮播 -->
       <div class="content">
         <div class="biaoti">
           <p v-if="detail.basicInfo"><b>{{detail.basicInfo.name}} </b> <br>一往情深韩式系列/慢慢喜欢你</p>

          <div class="price" v-if="detail.basicInfo"><span class="now">{{ detail.basicInfo.minPrice | currency }}</span><span class="formerly">{{ detail.basicInfo.originalPrice | currency }}</span></div>
         </div>
        <div class="kongge"></div>
         <div class="detailsinfo-item">
           <div class="item-title">花语</div>
           <div class="item-desc">慢慢喜欢你，余生都是你</div>
          </div>
          <div class="detailsinfo-item">
            <div class="item-title">材料</div>
            <div class="item-desc">艾莎玫瑰16枝、白色洋桔梗5枝、尤加利10枝</div>
          </div>
          <div class="detailsinfo-item">
            <div class="item-title">包装</div>
            <div class="item-desc">嫣粉/玫粉色欧雅纸5张、白色雪梨纸2张、粉色罗纹烫金丝带2米</div>
          </div>
          <div  class="detailsinfo-item">
            <div class="item-title">配送</div>
          </div>

          <div class="detailsinfo-item">
            <div class="item-title">附送</div>
            <div class="item-desc">下单填写留言，即免费赠送精美贺卡！</div>
          </div>
          <div class="kongge"></div>
       </div>
        <div class="tuwen">
          <p>图文详情</p>
          <div class="rich-text" v-html="detail.content"></div>
        </div>

      </div>
    <van-goods-action >
      <van-goods-action-icon icon="wap-home-o" text="首页" color="#232628" to="/"/>
      <van-goods-action-icon icon="cart-o" :badge="items.length?items.length:''" text="购物车" color="#232628" to="/cart" />
      <van-goods-action-button color="#3D4D42" type="warning" text="加入购物车"  @click="clickAction(0)"  />
      <van-goods-action-button color="#FF734C" type="danger" text="立即购买" @click="clickAction(1)"  />
    </van-goods-action>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div class="itemCard">
        <van-card
          :num="item.num"
          :price="item.minPrice*item.num"
          :title="item.name"
          :thumb="item.pic"
        >
          <template #tags>
            <van-stepper v-model="item.num" />
          </template>
          <template #footer>
            <van-button type="warning" size="large" @click="confirm">确定</van-button>
          </template>
        </van-card>
      </div>
      </van-popup>
    <!-- /弹出层 -->
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
import { getItemDetail } from '../../api'
import { currency } from '../../filters/index'
import { mapState, mapActions } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      detail: {},
      show: false,
      item: {
        num: 1,
        isChecked: true
      },
      action: 0 // 0加入购物车 1立即购买
    }
  },
  created () {
    this.fenchItemDetail()
  },
  filters: {
    currency
  },
  methods: {
    confirm () {
      // 点击弹出层 确认按钮
      if (this.action) {
        // 立即购买
        alert('购买成功')
      } else {
        // 判断是否存在
        const isHave = this.items.find(el => el.id === this.item.id)
        if (!isHave) {
        // 加入购物车
          this.addCart(this.item)
          Toast('加入购物车成功')
        } else {
          Toast('购物车中已存在,请勿重复添加')
        }
      }
      // 关闭商品
      this.show = false
    },
    fenchItemDetail () {
      getItemDetail(this.$route.query.id).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.detail = res.data.data
          this.item = {
            ...this.item,
            ...res.data.data.basicInfo
          }
        }
      })
    },
    clickAction (action) {
      this.show = true
      this.action = action
    },
    ...mapActions('cart', ['addCart'])
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.carts.items
    }),
    content () {
      return this.detail.content.replace(/<img/g, '<img style="vertical-align:bottom;width:100%"')
    }
  },
  components: {
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  padding: 0;
  img{
    width:100%;
  }
  .content{
    .biaoti{
      padding-left: 20px;
      p{
        b{
          color: #FF734C;
          font-size: 18px;
        }
        font-size: 14px;
        color: #71797F;
      }
      .price{
          display: flex;
          height: 70px;
          width: 100px;
          align-items: center;
          margin-top: -30px;
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
    }
    .kongge{
      height: 20px;
      background-color: #f1f1f1;;
    }
    .detailsinfo-item{
      display: flex;
      font-size: 12px;
      align-content: center;
      box-sizing: border-box;
      padding-right: 20px;
      margin: 15px 0;
      .item-desc{
        flex: 1;
        padding: 10px 0;
        border-bottom: 1px solid #f1f1e4;
        color: #232628;
        justify-content: center;
      }
      .item-title{
        width:40px;
        font-weight: 500;
        color: #232323;
        padding: 10px 0;
        padding-left: 20px;
      }
    }

  }
  .tuwen{
      p{
        padding-left:30px;
        font-weight: 500;
        font-size: 20px;
      }
    }
}
.rich-text /deep/ img{
  vertical-align: bottom;
  width:100%;
}
.itemCard{
  .van-card__price-integer,.van-card__price-currency{
    color: #FF734C;
    font-weight: 500;
    font-size: 20px;
  }
  padding-top:20px;
  .van-card__title{
    font-size: 18px;
    font-weight: 500;
  }
  .van-stepper{
    margin-top: 12px;
  }
  .van-button{
    margin-top: 40px;
    margin-left: -3px;
  }
}
.van-goods-action{
  background-color:#F7F9FA;
  .van-goods-action-icon{
    background-color:#F7F9FA;
  }
}
</style>
