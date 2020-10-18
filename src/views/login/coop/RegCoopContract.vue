<template>
  <div class="regcoop-contract">
    <van-nav-bar left-text="返回" title="合作伙伴协议" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>
    <div class="content" v-html="contract"></div>

    <div class="footer">
      <van-button color="#bbb" text="拒绝" size="large" @click="handleRefuse" :disabled="!is_sole"></van-button>
      <van-button type="info" text="同意" size="large" @click="handleAgree" :disabled="!is_sole"></van-button>
    </div>

  </div>
</template>

<script>
import {getContractCoop} from "@/network/login";
import {SETHM, SETMS} from "@/store/mutype";

export default {
  name: "RegCoopContract",
  data(){
    return {
      mult_data: null,   // 请求回来的多项数据
      contract: null,   // 协议内容
      is_sole: true,   // 协议内容是否浏览完毕
    }
  },
  methods: {
    chuDI() {
      console.log("协议内容触底了")
      this.is_sole = true
    },
    handleRefuse() {   // 点击拒绝
      this.clickLeft()
    },
    handleAgree() {   // 点击同意
      this.$router.push('/reg_secretarycoop')
    },
  },
  mounted() {
    // 网络请求协议内容
    let id = this.$store.state.reg.comids
    getContractCoop(id).then( res => {
      this.mult_data = res
      this.contract = res.hhr_ms_text
      this.$store.commit(SETHM,res.hhr_ms_id)
      this.$store.commit(SETMS,res.yz_ms_id)
    })
  }
}
</script>

<style scoped lang="scss">
.regcoop-contract{
  width: 100vw;
  height: 100vh;
  padding-bottom: 60px;
  .content {
    width: 100vw;
    height: calc(100vh - 110px);
    overflow: scroll;
    padding: 10px;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 5px;
    width: 100vw; margin-top: 20px; display: flex; justify-content: space-around;
    .van-button { width: 40%; color: #fff;}
  }
}
</style>