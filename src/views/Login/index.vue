<template>
  <div>
      <common-head title="登录/注册"></common-head>
      <div class="img"><img src="https://img02.hua.com/m/login/wx_login_logo.png"></div>

      <div class="wrap">

        <van-cell-group>
        <van-field v-model="user.userName" label="账号" placeholder="请输入用户名" />
        <van-field v-model="user.pwd" type="password" label="密码" placeholder="请输入用户名" />
        </van-cell-group>
        <van-button type="info" round size="large" @click="login" color="#ff734c">登录/注册</van-button>
      </div>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
export default {
  data () {
    return {
      user: {
        userName: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      if (!this.user.userName) {
        alert('请输入账号')
        return false
      } else {
        if (!this.user.pwd) {
          alert('请输入密码')
          return false
        } else {
          setTimeout(() => {
            const token = 'safwgfdgdfh'
            localStorage.setItem('access_token', token)
            if (this.$route.params.from) {
              this.$router.push(this.$route.params.from)
            } else {
              this.$router.push('/home')
            }
          }, 1000)
        }
      }
    }
  },
  components: {
    CommonHead
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  text-align: center;
  .van-cell-group{
    width: 90%;
    margin-left: 5%;
  }
  .van-button{
    margin-top: 30px ;
    width: 80%;
  }
}
.img{
    width: 150px;
    height: 20px;
    margin:auto;
    margin-top: 20px;
    img{
      width: 100%;
    }
  }
</style>
