<template>
  <div class="income">
    <van-nav-bar title="收入纳税信息(3)" left-text="返回" right-text="下一页"
                 left-arrow border fixed placeholder z-index="50"
                 @click-right="handleNext" @click-left="clickLeft()"></van-nav-bar>

    <van-cell-group title="收入信息">
      <van-cell title="收入范围" value="内容" />
    </van-cell-group>
    <van-cell-group title="纳税信息">
      <van-cell title="行业类型" value="内容" />
      <van-cell title="增值税" value="内容" />
      <van-cell title="核定定额" value="内容" />
      <van-cell title="个人所得税" value="内容" />
      <van-cell title="核定定额" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "CfmIncome",
  data() {
    return {
      reg_status: '待商秘公司确认',
      income_info: [1,2,3,34]
    }
  },
  methods: {
    handleNext() {
      this.$router.push('/cfm_contract')
    }
  }
}
</script>

<style scoped lang="scss">
.income {
  .reg-status{
    margin-top: 10px;
  }
}
</style>