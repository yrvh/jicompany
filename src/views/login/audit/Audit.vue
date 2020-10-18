<template>
  <div class="audit">
    <van-nav-bar title="资料审核中" border fixed placeholder z-index="50"></van-nav-bar>
    <div class="image-box">
      <van-image width="100%" :src="require('assets/img/login/audit.jpg')"></van-image>
    </div>
    <van-steps :active="active" active-icon="checked" active-color="#7EB6FF">
      <van-step>用户注册</van-step>
      <van-step>信息审核中</van-step>
      <van-step>完善资料中</van-step>
      <van-step>确认信息</van-step>
    </van-steps>

    <div class="content">
      <div>需要提供材料:</div>
      <span> 1.本人身份证原件</span>
      <span> 2.授权委托协议书签字</span>
      <span> 3.本人收款账户信息（开户机构、开户名、账号）</span>
      <div>邮寄地址:</div>
      <span> 广西北海市海城区西藏路高新技术创业园3号楼121室，</span>
      <span> 0779-3919890。</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Audit",
  data(){
    return {
      active: 2,   // 当前步骤条
    }
  },
  methods: {
    handleNext() {
      // 点击完成
      // 返回到上一页
      this.$router.replace('/reg_personal')
    },
  },
  created() {
    // 网络请求协议内容
  }
}
</script>

<style scoped lang="scss">
.audit{
  padding: 0 20px;
  height: 100vh;
  background-color: var(--cl-bg-tF);
  .image-box { width: 70%; margin: 40px auto 0; margin-bottom: 30px;}
  .content {
    font-size: 14px;
    margin-top: 40px;
    display: flex; flex-direction: column;
    div {margin-top: 40px;}
    span {text-indent: 10px;}
  }
}
</style>