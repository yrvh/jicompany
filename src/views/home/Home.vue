<template>
  <div class="home">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory">
      <template #title>
        <span class="title">新单大厅</span>
      </template>
<!--      <template #right>-->
<!--        <span class="iconfont icon-wode-copy"></span>-->
<!--      </template>-->
    </van-nav-bar>
    <div class="p-holder"></div>

    <van-tabs color="#1079f2" v-model="tab_mark" animated swipeable sticky line-width="80px" offset-top="46px">
      <!--     待接单       -->
      <van-tab title="待接单" :badge="receive_total==0? '':receive_total">
        <order v-for="item in receive" :time="item.time" :address="item.address" :master="item.master"
                :fee_m="item.fee_m" :labour="item.labour" :fee_l="item.fee_l" status="接单"/>
      </van-tab>

      <!--     待送达       -->
      <van-tab title="待送达" :badge="send_total==0? '':send_total">
        <order v-for="item in send" :time="item.time" :address="item.address" :master="item.master"
               :fee_m="item.fee_m" :labour="item.labour" :fee_l="item.fee_l" status="正在配送中..."/>
      </van-tab>

      <!--     待完成       -->
      <van-tab title="待完成" :badge="complete_total==0? '':complete_total">
        <order v-for="item in complete" :time="item.time" :address="item.address" :master="item.master"
               :fee_m="item.fee_m" :labour="item.labour" :fee_l="item.fee_l" status="待劳务人员完成..."/>
      </van-tab>

    </van-tabs>
    
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tab_mark: null,   // tab的标致
      receive_total: 5,
      send_total: 6,
      complete_total: 8,
      receive: [   // 单位主界面数据
        {
          id: 0,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          master: '10斗沙子,15袋水泥',
          fee_m: '1500',
          labour: '10斗沙子,15袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1000',
        },
        {
          id: 1,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          master: '10斗沙子,15袋水泥',
          fee_m: '1500',
          labour: '10斗沙子,15袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1000',
        },
        {
          id: 2,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          master: '10斗沙子,15袋水泥',
          fee_m: '1500',
          labour: '10斗沙子,15袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1000',
        },
        {
          id: 3,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          master: '10斗沙子,15袋水泥',
          fee_m: '1500',
          labour: '10斗沙子,15袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1000',
        },
        {
          id: 4,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          master: '10斗沙子,15袋水泥',
          fee_m: '1500',
          labour: '10斗沙子,15袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1000',
        }
      ],
      send: [   // 业者主界面数据
        {
          id: 0,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 1,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 2,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 3,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 4,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 5,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        }
      ],
      complete: [   // 伙伴主界面数据
        {
          id: 0,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 1,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 2,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 3,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 4,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 5,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 6,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        },
        {
          id: 7,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          master: '30斗沙子,20袋水泥',
          fee_m: '2000',
          labour: '30斗沙子,20袋水泥 和 100块瓷砖,100块玻璃',
          fee_l: '1300',
        }
      ],
    }
  },
  methods: {
    onDirectory() {
      console.log("点击了通讯录");
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  .van-nav-bar {
    .title {
      color: var(--cl-textF);
    }
    background-color: var(--cl-bg-theme) !important;
  }
  .p-holder {
    width: 100%;
    height: 46px;
    //background-color: var(--cl-textP);
    //margin-bottom: 10px;
  }
}



</style>