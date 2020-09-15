<template>
  <div>
    <common-head title="添加联系人"></common-head>
    <div class="wrap">
      <van-address-edit
        :area-list="addressInfo"
        show-postal
        show-set-default
        :address-info="con"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      />
    </div>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      con: {

      }
    }
  },
  components: {
    CommonHead
  },
  created () {
    this.calculate()
  },
  methods: {
    onSave (con) {
      this.changeCon(con)
      this.$router.go(-1)
    },
    calculate () {
      this.con = this.contacts[(this.$route.query.index) - 0]
    },
    ...mapMutations('address', ['changeCon'])
  },
  computed: {
    ...mapState({
      addressInfo: (state) => state.address.addressInfo,
      contacts: (state) => state.address.contacts
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  padding: 0;
}
</style>
