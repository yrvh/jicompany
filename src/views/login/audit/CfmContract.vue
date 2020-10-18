<template>
  <div class="contract">
    <van-nav-bar title="协议文本(4)" left-text="返回"
                 left-arrow border fixed placeholder z-index="50"
                 @click-left="clickLeft()">
    </van-nav-bar>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" />
  </div>
</template>

<script>
export default {
  name: "CfmContract",
  data() {
    return {
      reg_status: '待商秘公司确认',
      contract_info: [1,2,3,34]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.contract {
  .van-cell {margin-top: 10px;}

}
</style>