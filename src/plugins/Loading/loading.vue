<template>
  <div class="bg" v-if="showLoading">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLoading: false
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes load-effect {
    0%{
      box-shadow:
         0 -3em 0 .2em #FFF,/*上*/
         2em -2em 0 0 #FFF,/*右上*/
         3em 0 0 -.5em #FFF,/*右*/
         2em 2em 0 -.5em #FFF,/*右下*/
         0 3em 0 -.5em #FFF, /*下*/
         -2em 2em 0 -.5em #FFF, /*左下*/
         -3em 0 0 -.5em #FFF, /*左*/
         -2em -2em 0 0 #FFF;/*左上*/
   }
   12.5% {
      box-shadow:
         0 -3em 0 0 #FFF,
         2em -2em 0 .2em #FFF,
         3em 0 0 0 #FFF,
         2em 2em 0 -.5em #FFF,
         0 3em 0 -.5em #FFF,
         -2em 2em 0 -.5em #FFF,
         -3em 0 0 -.5em #FFF,
         -2em -2em 0 -.5em #FFF;
  }
  25% {
      box-shadow:
         0 -3em 0 -.5em #FFF,
         2em -2em 0 0 #FFF,
         3em 0 0 .2em #FFF,
         2em 2em 0 0 #FFF,
         0 3em 0 -.5em #FFF,
         -2em 2em 0 -.5em #FFF,
         -3em 0 0 -.5em #FFF,
         -2em -2em 0 -.5em #FFF;
   }
   37.5% {
      box-shadow:
         0 -3em 0 -.5em #FFF,
         2em -2em 0 -.5em #FFF,
         3em 0 0 0 #FFF,
         2em 2em 0 .2em #FFF,
         0 3em 0 0 #FFF,
         -2em 2em 0 -.5em #FFF,
         -3em 0 0 -.5em #FFF,
         -2em -2em 0 -.5em #FFF;
   }
   50% {
      box-shadow:
         0 -3em 0 -.5em #FFF,
         2em -2em 0 -.5em #FFF,
         3em 0 0 -.5em #FFF,
         2em 2em 0 0 #FFF,
         0 3em 0 .2em #FFF,
         -2em 2em 0 0 #FFF,
         -3em 0 0 -.5em #FFF,
         -2em -2em 0 -.5em #FFF;
   }
   62.5% {
      box-shadow:
         0 -3em 0 -.5em #FFF,
         2em -2em 0 -.5em #FFF,
         3em 0 0 -.5em #FFF,
         2em 2em 0 -.5em #FFF,
         0 3em 0 0 #FFF,
         -2em 2em 0 .2em #FFF,
         -3em 0 0 0 #FFF,
         -2em -2em 0 -.5em #FFF;
   }
   75% {
      box-shadow:
         0 -3em 0 -.5em #FFF,
         2em -2em 0 -.5em #FFF,
         3em 0 0 -.5em #FFF,
         2em 2em 0 -.5em #FFF,
         0 3em 0 -.5em #FFF,
         -2em 2em 0 0 #FFF,
         -3em 0 0 .2em #FFF,
         -2em -2em 0 0 #FFF;
   }
   87.5% {
      box-shadow:
         0 -3em 0 0 #FFF,
         2em -2em 0 -.5em #FFF,
         3em 0 0 -.5em #FFF,
         2em 2em 0 -.5em #FFF,
         0 3em 0 -.5em #FFF,
         -2em 2em 0 0 #FFF,
         -3em 0 0 0 #FFF,
         -2em -2em 0 .2em #FFF;
   }
   100% {
      box-shadow:
         0 -3em 0 .2em #FFF,
         2em -2em 0 0 #FFF,
         3em 0 0 -.5em #FFF,
         2em 2em 0 -.5em #FFF,
         0 3em 0 -.5em #FFF,
         -2em 2em 0 -.5em #FFF,
         -3em 0 0 -.5em #FFF,
         -2em -2em 0 0 #FFF;
   }
}
.bg{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,.6);
  z-index:10;
  display:flex;
  justify-content: center;
  align-items: center;
}
.loader{
  font-size: 20px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  text-indent: -9999em;
  animation: load-effect 1s infinite linear;
}
</style>
