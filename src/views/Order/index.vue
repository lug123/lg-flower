<template>
  <div>
    <common-head title="确认订单"></common-head>
    <div class="wrap">
      <van-contact-card
        :type="cardType"
        :name="order.contact.name"
        :tel="order.contact.tel"
        :add-text="order.contact.address"
        @click="choseContact"
      />
      <div class="items">
        <van-card
          v-for="item in order.items"
          :key="item.id"
          :num="item.num"
          :price="item.minPrice"
          :title="item.name"
          :thumb="item.pic"
        />
        <van-submit-bar
          :price="order.price*100"
          button-text="确认订单"
          @submit="onSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    // console.log(this.order.contact);
  },
  methods: {
    choseContact () {
      if (this.cardType === 'add') {
        this.$router.push('/addContact')
      } else {
        this.$router.push('/addressLists')
      }
    },
    onSubmit () {
      alert('购买成功')
    }
  },
  computed: {
    cardType () {
      if (this.order.contact.name) {
        return 'edit'
      } else {
        return 'add'
      }
    },
    ...mapState({
      order: (state) => state.order.nowOrder
    })
  },
  components: {
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: -55px;
  .items{
    margin-top: 20px;
    .van-submit-bar__bar{
      border-top: 1px solid #ccc;
    }
    .van-card__price-integer,.van-card__price-currency{
      color: #FF734C;
      font-weight: 500;
      font-size: 20px;
    }
    .van-card__title{
      margin-top: 10px;
      font-size: 16px;
      font-weight: 600;
    }
    .van-stepper{
      margin-top: 12px;
    }
  }
}
</style>
