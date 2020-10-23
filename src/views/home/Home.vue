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
    <div class="nav-btn">
      <van-button text="材料订单" :color=" nav_mark==0? '#1079f2':'#ccc' " @click="changeNav(0)"/>
      <van-button text="劳务订单" :color=" nav_mark==1? '#1079f2':'#ccc' " @click="changeNav(1)"/>
    </div>
    
    <van-tabs v-show="nav_mark==0" color="#1079f2" v-model="status_master" animated swipeable sticky line-width="80px" offset-top="46px">
      <!--     待接单       -->
      <van-tab title="待接单" :badge="receive_total==0? '':receive_total">
        <order v-for="item in receive_m" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               :master="item.master" :fee_m="item.fee_m" status="接单"/>
      </van-tab>

      <!--     待送达       -->
      <van-tab title="待送达" :badge="send_total==0? '':send_total">
        <order v-for="item in send" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               :master="item.master" :fee_m="item.fee_m" status="送达"/>
      </van-tab>

      <!--     已送达       -->
      <van-tab title="已送达" :badge="complete_total==0? '':complete_total">
        <order v-for="item in sended" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               :master="item.master" :fee_m="item.fee_m" status="已送达" :isDis="true"/>
      </van-tab>
    </van-tabs>



    <van-tabs v-show="nav_mark==1" color="#1079f2" v-model="status_labour" animated swipeable sticky line-width="80px" offset-top="46px">
      <!--     待接单       -->
      <van-tab title="待接单" :badge="receive_total==0? '':receive_total">
        <order v-for="item in receive_l" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               ordertype="劳务量" :master="item.master" status="接单" :isDis="item.fee_m? false : true">
          <div class="negotiate" slot="negotiate">
            <div class="title_price">请定价:</div>
            <van-field v-model="item.fee_m" maxlength="10" placeholder="请劳务人员定价..." border clearable center/>
            <div class="commit_price">提交</div>
          </div>
        </order>
      </van-tab>

      <!--     待完成       -->
      <van-tab title="待完成" :badge="complete_total==0? '':complete_total">
        <order v-for="item in complete" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               ordertype="劳务量" :master="item.master" :fee_m="item.fee_m" status="完成"/>
      </van-tab>

      <!--     已完成       -->
      <van-tab title="已完成" :badge="send_total==0? '':send_total">
        <order v-for="item in completed" :time="item.time" :address="item.address" :cname="item.cname" :tel="item.tel"
               ordertype="劳务量" :master="item.master" :fee_m="item.fee_m"  status="已完成" :isDis="true"/>
      </van-tab>
    </van-tabs>
    
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 头部导航=========================================
      nav_mark: 0,

      status_master: null,   // tab的标致, 材料
      status_labour: null,   // tab的标致, 劳务
      receive_total: 5,
      send_total: 6,
      complete_total: 8,
      receive_m: [   // 材料: 待接单
        {
          id: 0,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 1,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 2,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 3,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 4,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        }
      ],
      send: [   // 物料单 待送达
        {
          id: 0,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 1,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 2,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 3,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 4,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 5,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        }
      ],
      sended: [   // 物料单 已完成
        {
          id: 0,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 1,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 2,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 3,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 4,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 5,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 6,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 7,
          time: '2020年09月22日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        }
      ],
      receive_l: [   // 材料: 待接单
        {
          id: 0,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥'
        },
        {
          id: 1,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥'
        },
        {
          id: 2,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥'
        },
        {
          id: 3,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥'
        },
        {
          id: 4,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥'
        }
      ],
      complete: [   // 材料: 待接单
        {
          id: 0,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 1,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 2,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 3,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 4,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        }
      ],
      completed: [   // 材料: 待接单
        {
          id: 0,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 1,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 2,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 3,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        },
        {
          id: 4,
          time: '2020年10月10日',
          address: 'xy花园3栋.1单.403室',
          cname: '小张',
          tel: '15677980000',
          master: '100块红砖,20块玻璃,200块瓷砖,100,袋陶粒,10斗沙子,15袋水泥',
          fee_m: '1500'
        }
      ],
    }
  },
  methods: {
    onDirectory() {
      console.log("点击了通讯录");
    },
    changeNav(num) {
      this.nav_mark = num
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.home{
  padding: 0 2px;
  width: 100vw;
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
  .nav-btn {
    display: flex; justify-content: space-between;
    .van-button { width: 49vw; height: 46px;}
  }
  .negotiate {
    display: flex; align-items: center; justify-content: space-between;
    .title_price {width: 80px; color: var(--cl-text-theme); }
    .commit_price {width: 120px; line-height: 44px; color: var(--cl-textF); background-color: var(--cl-text-theme); text-align: center;}
    .van-field {background-color: var(--cl-tF0); flex: 1;}
  }
}



</style>