<template>
  <div class="msg">
    <van-image :src="info.img" width="50px" height="50px" round fit="fill"></van-image>
    <div class="content">
      <div class="top item-con">
        <div class="name">{{info.name}}</div>
        <div class="time">{{ info.time }}</div>
      </div>
      <div class="btm item-con">
        <div class="new">{{info.new}}</div>
        <div class="amount">{{info.amount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Msg",
  props: {
    info: {
      type: [Array,Object],
      default: []
    }
  }

}
</script>

<style scoped lang="scss">
.msg {
  background-color: var(--cl-tF);
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .van-image {
    margin-right: 10px;
  }
  .content {
    flex: 1;
  }
  .item-con {
    display: flex;
    justify-content: space-between;
  }
  .amount {
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    background-color: #ee3333;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
  }
  .time { font-size: 13px; color: var(--cl-text9); }
}
</style>