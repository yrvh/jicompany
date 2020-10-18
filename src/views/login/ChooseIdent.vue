<template>
  <div class="ident">
    <van-nav-bar left-text="返回" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>
    <div class="info-title">请选择您注册慧业通的角色</div>
    <div class="content">
      <van-image height="140px" width="100%" v-for="item in img_arr" :key="item.id"
                 :src="item.imgurl" @click="handleImg(item.path,item.userType)"></van-image>
    </div>
  </div>
</template>

<script>
import { SETUT } from '@/store/mutype'
export default {
  name: "ChooseIdent",
  data(){
    return {
      img_arr: [
        {
          id: 0,
          imgurl: require('assets/img/login/free.png'),
          userType: 1,
          path: '/choose_free'
        },
        {
          id: 1,
          imgurl: require('assets/img/login/company.png'),
          userType: 2,
          path: '/choose_company'
        },
        {
          id: 2,
          imgurl: require('assets/img/login/coop.jpg'),
          userType: 11,
          path: '/choose_coop'
        }
      ]
    }
  },
  methods: {
    handleImg(path,userType) {
      this.$store.commit(SETUT,userType)
      this.$router.push(path)
    }
  },
  created() {
    // 网络请求协议内容
  }
}
</script>

<style scoped lang="scss">
.ident{
  padding: 0 20px;
  height: 100vh;
  background-color: var(--cl-bg-tF);
  .info-title {
    line-height: 60px; font-size: 17px; font-weight: 700;
  }
  .content {
    .van-image { margin-bottom: 30px;}
  }
}
</style>