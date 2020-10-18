<template>
  <div class="manager">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory" >
      <template #title>
        <span class="title">管理中心</span>
      </template>
      <!--      <template #right>-->
      <!--        <span class="manage">设置</span>-->
      <!--      </template>-->
    </van-nav-bar>
    <div class="p-holder"></div>

    <van-cell title="订单记录" is-link :border="false"></van-cell>
    <van-cell title="收入统计" is-link :border="false"></van-cell>
    <van-cell title="员工管理" is-link :border="false"></van-cell>
    <van-cell title="商品管理" is-link :border="false"></van-cell>
    <van-cell title="劳务价格设定" is-link :border="false"></van-cell>
    <van-cell title="小区分配" is-link :border="false"></van-cell>
    <van-cell title="员工管理" is-link :border="false"></van-cell>
    <van-cell title="轮播图管理" is-link :border="false"></van-cell>


  </div>
</template>

<script>

export default {
  name: "Manager",
  data() {
    return {
    }
  },
  methods: {
    onDirectory() {   // 点击设置
      console.log("点击设置");
    },
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.manager {
  .manage {color: var(--cl-textF);}
  .van-nav-bar {
    .title {
      color: var(--cl-textF);
    }
    background-color: var(--cl-bg-theme) !important;
  }

  .p-holder {
    margin: 46px 0 10px;
    height: 1px;
    background-color: var(--cl-bg-theme);
  }

  .van-cell {
    background-color: var(--cl-tF);
    margin-bottom: 10px;
  }

}
</style>
