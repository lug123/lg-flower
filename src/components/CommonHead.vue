<template>
<van-nav-bar :title="title" left-text="返回" left-arrow @click-left="$router.go(-1)">
  <template #right>
    <van-icon name="comment-o" size="18"/>
  </template>
</van-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.common-head{
  position: fixed;
  left:0;
  top:0;
  width:100%;
  z-index:2;
}
.van-nav-bar{
  background: #fff;
}
/deep/ .van-nav-bar__text {
    color:black;
}
/deep/ .van-nav-bar__arrow {
    font-size: 20px;
    color:black;
}
/deep/ .van-nav-bar__title{
    color:rgb(247, 121, 104);
    font-size: 20px;
    font-weight: 600;
  }
/deep/ .van-icon{
  color:black;
}
</style>