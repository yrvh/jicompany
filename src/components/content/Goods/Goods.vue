<template>
  <div class="goods" @click="onHandle">
    <van-image :src="img" width="100%" height="50vw" radius="8px 8px 0 0" fit="fill"></van-image>
    <div class="title" :style="{color: '#fff'}">{{title}}</div>
    <slot name="discount"/>
    <slot name="tag"/>
    <div class="sell">
      <div class="price">¥ {{price}}</div>
      <div class="amount">销量:{{amount}}</div>
    </div>
    <div class="old-price">劳务费 ¥ {{old}} (每{{units}})</div>
    <slot/>
  </div>

</template>

<script>
export default {
  name: "Goods",
  props: {
    img: {
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      default: ''
    },
    old: {   // 原价
      default: ''
    },
    amount: {
      default: ''
    },
    units: {   // 计量单位
    },
    counter: {   // 计数器
    }
  },
  methods: {
    onHandle() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.goods {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--cl-bg-op);
  width: 48%;
  margin-bottom: 10px;
  .title {font-size: 15px;}
  .sell {
    padding: 0 5px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  .price {color: #ee3333;}
  .amount {color: var(--cl-texta); font-size: 12px;}
  .old-price {color: #ccc; text-decoration: line-through; font-size: 13px; margin-bottom: 8px;}
}
</style>