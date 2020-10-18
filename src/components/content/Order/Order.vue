<template>
  <div class="order">
    <div class="time"><span class="iconfont icon-yuyue"></span>{{time}}</div>
    <div class="address"><span class="iconfont icon-dizhi"></span>{{address}}</div>
    <div class="master">用料: {{master}} <span class="fee-master">物料费 ¥ {{fee_m}}元</span></div>
    <div class="amount">
      劳务量: {{labour}}
      <span class="fee-labour">劳务费 ¥ {{fee_l}}元</span>
    </div>
    <van-button size="large" :text="status" color="#1079f2" block/>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    time: {

    },
    address: {
      type: String,
      default: '',
    },
    master: {
      type: String,
      default: '',
    },
    fee_m: {
      type: [String,Number],
      default: 0,
    },
    labour: {
      type: String,
      default: '',
    },
    fee_l: {
      type: [String,Number],
      default: 0,
    },
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.order {
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
}
.time {color: var(--cl-text-theme); border-bottom: 1px solid #f0f0f0; line-height: 30px;}
.address {
  color: var(--cl-text9);
  line-height: 30px;
}
.master { margin: 4px 0 8px;}
.fee-labour,.fee-master {float: right; font-size: 14px; font-weight: 600;}
.fee-master {color: var(--cl-textP); }
.fee-labour { color: var(--cl-text-theme); }
.van-button { margin-top: 20px; }
.iconfont {color: var(--cl-text-theme); margin-right: 5px; font-size: 20px;}
</style>