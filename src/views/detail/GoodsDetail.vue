<template>
  <div class="goods-detail">
    <van-swipe autoplay="3000" duration="600" indicator-color="#12091F">
      <van-swipe-item v-for="item in swi_arr" :key="item.id">
        <van-image :src="item.path" width="100%" height="100%" fit="fill"></van-image>
      </van-swipe-item>
    </van-swipe>

    <div class="goodsinfo">
      <div class="cont">
        <div class="sell">
          <div class="price">¥ 49</div>
          <div class="oldprice">¥ 69</div>
        </div>
        <div class="amount">销量:2000</div>
      </div>
      <div class="title">xx商品高品质装修优选,优惠热销推荐</div>
    </div>

    <van-tabs v-model="active" color="#f33" background="#f5f5f5" animated sticky swipeable>
      <van-tab title="详情">
        <div class="ttt">商品详情的参数</div>
      </van-tab>
      <van-tab title="评价">
        <div class="ttt">评价相关列表</div>
      </van-tab>
      <van-tab title="推荐">
        <div class="ttt">推荐商品</div>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  data() {
    return {
      active: 0,   // 活跃的选项
      search_name: '',   // 搜索的关键字
      swi_arr: [   // 轮播图的数组
        {
          id: 1,
          path: require("assets/img/home/s1.jpg"),
        },
        {
          id: 2,
          path: require("assets/img/home/s2.jpg"),
        },
        {
          id: 3,
          path: require("assets/img/home/s3.jpg"),
        },
        {
          id: 4,
          path: require("assets/img/home/s4.jpg"),
        },
        {
          id: 5,
          path: require("assets/img/home/s5.jpg"),
        },
        {
          id: 6,
          path: require("assets/img/home/s6.jpg"),
        },
        {
          id: 7,
          path: require("assets/img/home/s7.jpg"),
        },
        {
          id: 8,
          path: require("assets/img/home/s8.jpg"),
        },
      ],
    }
  }
}
</script>
<style scoped lang="scss">
.goods-detail {
  min-height: 100vh;
  background-color: #fff;
  .van-swipe {
    width: 100%;
    height: 170px;
  }
  .goodsinfo {
    padding: 15px;
    //background-color: var(--cl-bg-op);
    .cont {
      display: flex;
      justify-content: space-between;
    }
    .sell {
      display: flex; justify-content: space-between;
    }
    .price {color: #ee3333; margin-right: 5px; font-size: 18px;}
    .oldprice {
      color: #ccc;
      text-decoration: line-through;
      height: 25px; line-height: 25px; font-size: 12px; margin-bottom: 8px; }
    .amount {color: var(--cl-texta); font-size: 12px;}
    .title {color: #111;}
  }

  .ttt{
    color: #111;
    height: 200px;
    background-color: #fff;
  }
}

</style>