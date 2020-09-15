<template>
  <div>
    <common-head title="添加联系人"></common-head>
    <div class="wrap">
      <van-address-edit
        :area-list="addressInfo"
        show-postal
        show-set-default
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
  components: {
    CommonHead
  },
  methods: {
    onSave (add) {
      add.id = Date.now()
      this.addContact(add)
      this.$router.go(-1)
    },
    ...mapMutations('address', ['addContact'])
  },
  computed: {
    ...mapState({
      addressInfo: (state) => state.address.addressInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  padding: 0;
}
</style>
