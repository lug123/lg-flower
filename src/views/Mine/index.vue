<template>
  <div>
    <common-head title="个人中心"></common-head>
    <img src="../../assets/img/geren.png">
   <my-tabbar></my-tabbar>
  </div>
</template>

<script>
import MyTabbar from '../../components/MyTabbar'
import CommonHead from '../../components/CommonHead'
export default {
  components: {
    MyTabbar,
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  margin-bottom: 50px;
}
</style>
