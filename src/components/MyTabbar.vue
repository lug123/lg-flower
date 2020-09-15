<template>
  <div>
    <van-tabbar
    :route="true"
     inactive-color="#666"
     active-color="#f66">
      <van-tabbar-item
        to="/home"
      >
        <span>首页</span>
        <template #icon=" props ">
          <van-icon class="iconfont" size="20" class-prefix="icon"
            name="shouye"
          ></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        to="/cates"
      >
        <span>分类</span>
        <template #icon="props">
          <van-icon class="iconfont" size="20" class-prefix="icon"
            name="icon04"
          ></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item
      :badge="items.length?items.length:''"
        to="/cart"
      >
        <span>购物车</span>
        <template #icon="props">
          <van-icon class="iconfont" size="20" class-prefix="icon"
            name="gouwuche"
          ></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        to="/mine"
      >
        <span>我的</span>
        <template #icon="props">
          <van-icon class="iconfont" size="20" class-prefix="icon"
            name="xiaolian"
          ></van-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      items: (state) => state.cart.carts.items
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
