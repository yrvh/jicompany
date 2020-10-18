<template>
  <div class="coop">
    <van-nav-bar left-text="返回" title="选择合伙人类型" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>
    <div class="content">
      <div class="regcom" @click="handleImg('/regcoopcom',2)">
        <span>企业合作伙伴</span>
        <span class="remark">(以单位的形式,成为合作伙伴)</span>
      </div>
      <div class="regcustom" @click="handleImg('/regcoop',1)">
        <span>个人合作伙伴</span>
        <span class="remark">(以个人的形式,成为合作伙伴)</span>
      </div>
    </div>
  </div>
</template>

<script>
import {SETHT} from "@/store/mutype";

export default {
  name: "ChooseCoop",
  data(){
    return {
    }
  },
  methods: {
    handleImg(path,hhrtype) {
      this.$store.commit(SETHT,hhrtype)
      this.$router.push(path)
    }
  },
  created() {
    
  }
}
</script>

<style scoped lang="scss">
.coop{
  padding: 0 20px;
  height: 100vh;
  background-color: var(--cl-bg-tF);
  .content {
    margin-top: 80px;
    div {
      width: 100%; height: 120px; border-radius: 4px; margin-bottom: 30px;
      color: #fff; font-size: 18px;
      display: flex; flex-direction: column; justify-content: center; align-items: center;
    }
    .regcom {background-color: var(--cl-bg-theme);}
    .regcustom{background-color: var(--cl-bg-yel);}
    .remark {font-size: 12px;}
  }
}
</style>