<template>
  <div class="order">
    <div class="top">
      <div class="time"><span class="icontime iconfont icon-yuyue"></span>{{time}}</div>
<!--      <div class="detail">订单详情<van-icon class="arrow" name="arrow" /> </div>-->
    </div>

    <div class="address"><span class="iconfont icon-dizhi"></span>{{address}}</div>
    <div class="contract">
      <span>联系人: {{cname}}</span>
      <van-icon class="message" name="chat" />
    </div>
    <div class="contract">
      <span>联系人: {{tel}}</span>
      <van-icon class="tel" name="phone" />
    </div>

    <div class="master">{{ ordertype }}: {{master}} <span class="fee-master">费用 {{fee_m}} (元)</span></div>
    <slot name="negotiate"></slot>
    <van-button size="large" :text="status" color="#1079f2" block :disabled="isDis"/>
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
      default: '待定'
    },
    status: {
      type: String,
      default: ''
    },
    ordertype: {
      type: String,
      default: '所需材料'
    },
    cname: {
      default: '未填写'
    },
    tel: {
      default: '未填写'
    },
    isDis: {
      type: Boolean,
      default: false
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
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 4px;
}
.time {color: var(--cl-text-theme);}
.detail {
  font-size: 12px;
  color: var(--cl-text9);
  display: flex;
  align-items: center;
}
.arrow {margin-left: 5px;}

.address {
  color: #7a7a7a;
  line-height: 30px;
}

.contract {
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
}
.message,.tel { color: var(--cl-text-theme); font-size: 28px; margin-left: 20px;}

.master { margin: 4px 0 8px;}
.fee-master {float: right; font-size: 14px; font-weight: 600; color: var(--cl-textP); margin-top: 3px;}

.van-button { margin-top: 30px; }
.icontime {color: var(--cl-text-theme); margin-right: 5px; font-size: 20px;}
</style>