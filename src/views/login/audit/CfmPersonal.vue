<template>
  <div class="personal">
    <van-nav-bar title="个人信息(1)" left-text="返回" right-text="下一页"
                 left-arrow border fixed placeholder z-index="50"
                 @click-right="handleNext" @click-left="clickLeft()"></van-nav-bar>
    <van-cell-group title="个人信息">
      <van-cell title="姓名" value="内容" />
      <van-cell title="手机号码" value="内容" />
      <van-cell title="电子邮箱" value="内容" />
      <van-cell title="身份证号" value="内容" />
      <van-cell title="证件照片" value="内容" />
    </van-cell-group>
    <van-cell-group title="个体工商户信息">
      <van-cell title="开户行" value="内容" />
      <van-cell title="开户名" value="内容" />
      <van-cell title="账号" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "CfmPersonal",
  data() {
    return {
      person_info: [1,2,3,34]
    }
  },
  methods: {
    handleNext() {
      this.$router.push('/cfm_individual')
    }
  }
}
</script>

<style scoped lang="scss">
.personal {
  .reg-status{
    margin-top: 10px;
  }
}
</style>