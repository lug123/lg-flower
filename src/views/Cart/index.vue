<template>
  <div>
    <common-head title="购物车"></common-head>
    <!-- 滑动模块 -->
    <div class="cart-wrap">
      <van-button v-if="!checkLogin()" size="large" color="rgba(255, 240, 236)" id="aaa" to="/login">您还未登录，请先登录（点击）</van-button>
      <div v-if="!carts.items.length"><img src="../../assets/timg.jpg" alt=""></div>
      <van-swipe-cell v-for="(item,index) in carts.items"
        :key="item.id">
        <div class="item" >
          <van-checkbox v-model="item.isChecked" @click="singleChange"></van-checkbox>
          <van-card
          :num="item.num"
          :price="(item.minPrice*item.num).toFixed(2)"
          :title="item.name"
          class="goods-card"
          :thumb="item.pic"
        >
          <template #tags>
            <van-stepper v-model="item.num" @change="numChange"></van-stepper>
          </template>
          </van-card>
        </div>

        <template #right>
          <van-button square text="删除" type="danger" @click="del(index)" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>

    <!-- 提交购物车 -->
    <van-submit-bar :price="carts.total*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="carts.isAllChecked" @click="allCheckedChange">全选</van-checkbox>
</van-submit-bar>

    <my-tabbar></my-tabbar>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
import MyTabbar from '../../components/MyTabbar'
import { mapState, mapActions, mapMutations } from 'vuex'
import { checkLogin } from '../../utils'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.Calc_total()
  },
  methods: {
    checkLogin,
    allCheckedChange () {
      this.setAllCheckedState(this.carts.isAllChecked)
      this.Calc_total()
    },
    singleChange () {
      this.setCarts(this.carts)
      this.Calc_total()
      const items = this.carts.items
      const allChecked = items.every(item => item.isChecked)
      this.setAllChecked(allChecked)// console.log(allChecked)
    },
    onSubmit () {
      if (!this.carts.total) {
        alert('请添加商品')
        return false
      } else {
        if (this.checkLogin()) { // 判断是否登录
          const checkedItems = this.carts.items.filter(el => el.isChecked)
          let contact = {}
          if (this.contacts.length > 0) {
            const defaultContact = this.contacts.find(el => el.isDefault)
            if (defaultContact) { // 有默认联系人
              contact = defaultContact
            } else {
              contact = this.contacts[0]
            }
          } else {
            alert('请添加联系人')
          }
          const nowOrder = {
            code: Date.now(), // 时间戳，订单编号
            items: checkedItems, // 商品
            contact, // 联系地址
            price: this.carts.total
          }
          this.setOrder(nowOrder)
          this.$router.push('/order')
        } else {
          this.$router.push({
            name: 'login',
            params: {
              from: '/cart'
            }
          })
        }
      }
    },
    del (index) {
      this.$dialog.confirm({
        title: '删除商品',
        message: '你确认要失去我吗？'
      })
        .then(() => {
          this.delItem(index)
          this.Calc_total()
        })
    },
    numChange () {
      this.setCarts(this.carts)
      this.Calc_total()
    },
    ...mapMutations('cart', ['setCarts', 'delItem', 'setAllChecked', 'setAllCheckedState']),
    ...mapActions('cart', ['Calc_total']),
    ...mapMutations('order', ['setOrder'])
  },
  components: {
    MyTabbar,
    CommonHead
  },
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
      contacts: (state) => state.address.contacts
    })

  }
}
</script>

<style lang="scss" scoped>

.cart-wrap{
  padding-bottom: 100px;
  img{
    width: 100%;
  }
  #aaa{
    color: #FF734C !important;
  }
}

.van-submit-bar{
  bottom:50px;
}
.delete-button {
  height: 100%;
}
.item{
  display: flex;
  .van-checkbox{
    margin:0 5px;
  }
  .van-card__title{
    font-size: 16px;
    font-weight: 500;
  }
  .van-card__price{
    color: #FF734C;
  }
  .van-stepper{
    margin-top: 14px;
  }
  .goods-card{
    flex: 1;
    .van-card__title{
      margin-bottom:10px;
    }
  }
}

</style>
