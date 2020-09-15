<template>
  <div>
    <div class="wrap">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <van-search
        v-model.trim="value"
        show-action
        shape="round"
        left="arrow-left"
        background="#fff"
        placeholder="搜索鲜花、蛋糕、礼品"
        @search="onSearch"
      >

      <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <h3>搜索记录</h3>
    <div class="histories">
      <div class="his" v-for='item in history' :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      history: localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
    }
  },
  methods: {
    onSearch () {
      let item = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
      if (this.value !== '') {
        item.unshift(this.value)// 将数据添加到最顶端
        item = [...new Set(item)]// 数组去重
        if (item.length > 6) { // 最多6条数据
          item.length = 6
        }
        localStorage.setItem('history', JSON.stringify(item))
        this.$router.push({
          path: '/searchResult',
          query: {
            word: this.value
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  display: flex;
  margin: 0 auto;
  padding: 0;
  border-bottom: 3px solid #f1f1f1;
}
.van-icon{
  margin-top: 16px;
  font-size: 22px;
  margin-right: -10px;
  margin-left: 8px;
}
.van-search{
  width: 90%;
  margin-left: 12px;
}
h3{
  margin-left: 16px;
}
.histories{
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  justify-content: flex-start;
  .his{
    line-height: 30px;
    padding:0 10px;
    background: #f1f1f1;
    margin-top: 10px;
    color:#666;
    font-size:12px;
    margin-left:15px;
    border-radius: 15px;
  }
}
</style>
