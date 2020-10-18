<template>
  <div class="platform">
    <van-nav-bar left-text="返回" title="慧业通云服务平台条款" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>
    <div class="content" v-html="contract"></div>
  </div>
</template>

<script>
import {getPlatform} from "@/network/login";

export default {
  name: "Platform",
  data(){
    return {
      contract: null,   // 协议内容
    }
  },
  created() {
    // 网络请求协议内容
    getPlatform().then( res => {
      if(res.result==1){
        this.contract = res.text
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .platform{
    padding: 10px 15px 20px;
  }
</style>