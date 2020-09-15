<template>
  <div>
  <common-head title="联系人列表"></common-head>
  <div class="wrap">
      <van-address-list
        v-model="chosenAddressId"
        :list="contacts"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select = "changeContact"
        index
      />
    </div>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
import { mapState, mapMutations } from 'vuex'
export default {
  data(){
    return{
      chosenAddressId: '1'
    }
  },
  methods:{
    onAdd(){
      this.$router.push('/addContact')
    },
    onEdit(item,index){
      this.$router.push({
        path:'/ChangeContact',
        query:{
          index
        }
        })
    },
    changeContact(contacts,index){
      // 切换联系人
      this.setNowOrderContact(contacts)
      this.chosenAddressId = contacts.id
      this.$router.go(-1)
    },
    ...mapMutations('order',['setNowOrderContact'])
  },
    components:{
      CommonHead
  },
    computed: {
      ...mapState({
        contacts: (state) => state.address.contacts
    })
  }
  }
</script>

<style lang="scss" scoped>
.wrap{
  margin-top: -50px;
}
</style>