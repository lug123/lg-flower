<template>
  <div class="head">
    <div class="head-left" @click="enterCates">
      <van-icon class="iconfont" 
        class-prefix="icon"
        name="icon04"
      ></van-icon>
    </div>
    <div class="head-center" @click="enterSearch">
       <van-icon class="iconfont" 
        class-prefix="icon"
        name="search"
      ></van-icon>
      <p>搜索商品</p>
    </div>
    <div class="head-right">
       <van-icon class="iconfont" 
        class-prefix="icon"
        name="kefu"
      ></van-icon>
    </div>
  </div>
</template>

<script>
  export default {
     methods: {
      enterCates () {
        this.$router.push('/cates')
     },
     enterSearch (){
       this.$router.push('/search')
     }
    }
  }
</script>

<style lang="scss" scoped>
.head{
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background-color: #435448;
  font-size:12px;
  position: fixed;
  left:0;
  top:0;
  z-index: 999;
  display: flex;
    .head-left{
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-icon04{
      color:white ;
      font-size: 24px;
    }
    .head-right{
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
        .icon-kefu{
        color:white ;
        font-size: 30px;
      }
    }
    .head-center{
      height: 34px;
      color:white ;
      border-radius: 17px;
      align-self: center;
      background: rgba(255,255,255,.2);
      display: flex;
      flex:1;
      align-items: center;
      .icon-search{
      margin:0px 8px 0 8px;
      }
    
    }
}
</style>