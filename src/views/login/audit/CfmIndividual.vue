<template>
  <div class="individual">
    <van-nav-bar title="工商户信息(2)" left-text="返回" right-text="下一页"
                 left-arrow border fixed placeholder z-index="50"
                 @click-right="handleNext" @click-left="clickLeft()"></van-nav-bar>


    <van-cell-group title="商户基本信息">
      <van-cell title="统一社会信用代码" value="内容" />
      <van-cell title="经营者" value="内容" />
      <van-cell title="商户名称" value="内容" />
      <van-cell title="类型" value="内容" />
      <van-cell title="注册日期" value="内容" />
      <van-cell title="经营范围" value="内容" />
      <van-cell title="经营场所" value="内容" />
      <van-cell title="登记机关" value="内容" />
      <van-cell title="发证日期" value="内容" />
      <van-cell title="营业执照" value="内容" />
    </van-cell-group>
    <van-cell-group title="工商账户信息">
      <van-cell title="开户行" value="内容" />
      <van-cell title="开户名" value="内容" />
      <van-cell title="账号" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "CfmIndividual",
  data() {
    return {
    }
  },
  methods: {
    handleNext() {
      this.$router.push('/cfm_income')
    }
  }
}
</script>

<style scoped lang="scss">
.individual {
  .reg-status{
    margin-top: 10px;
  }
}
</style>