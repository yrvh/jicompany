<template>
  <div class="mine">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory">
      <template #title>
        <span class="title">个人中心</span>
      </template>
<!--      <template #right>-->
<!--        <span class="manage">设置</span>-->
<!--      </template>-->
    </van-nav-bar>
    <!--  登录  -->
    <div class="p-holder">
      <div class="contain">
        <van-image :src="require('assets/img/home/v2.jpg')" width="80px" height="80px" round fit="fill"></van-image>
        <div class="info">
          <div class="name">小颖</div>
          <div class="account">152****3488</div>
        </div>
      </div>
    </div>

    <van-cell title="设置" is-link :border="false"></van-cell>
    <van-cell title="我的小区" is-link :border="false"></van-cell>
    <van-cell title="客服" is-link :border="false"></van-cell>
    <van-cell title="账户与安全" is-link :border="false"></van-cell>

    <van-button size="large" color="#ee3333" block>退出登录</van-button>

  </div>
</template>

<script>

export default {
  name: "Mine",
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
.mine {
  .manage {color: var(--cl-textF);}
  .van-nav-bar {
    .title {
      color: var(--cl-textF);
    }
    background-color: var(--cl-bg-theme) !important;
  }

  .p-holder {
    margin: 46px 0 40px;
    padding-top: 20px;
    height: 125px;
    border-bottom-left-radius: 50% 20px;
    border-bottom-right-radius: 50% 20px;
    background-color: var(--cl-bg-theme);
  }

  .contain {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .info {
      flex: 1;
      color: var(--cl-textF);
    }
    .van-image {
      margin-right: 10px;
    }
    .name {
      margin: 15px 0;
    }
  }

  .van-cell {
    background-color: var(--cl-tF);
    margin-bottom: 10px;
  }
  .van-button {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 52px;
  }
}
</style>
