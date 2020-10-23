<template>
  <div class="order-cord">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory" >
      <template #title>
        <span class="title">历史订单</span>
      </template>
      <!--      <template #right>-->
      <!--        <span class="manage">设置</span>-->
      <!--      </template>-->
    </van-nav-bar>
    <div class="p-holder"></div>
    <div class="filter">
      <van-tabs v-model="time_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in time_arr" :title="item"></van-tab>
      </van-tabs>
      <van-tabs v-model="community_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in community_arr" :title="item"></van-tab>
      </van-tabs>
      <van-tabs v-model="staff_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in staff_arr" :title="item"></van-tab>
      </van-tabs>
      <van-tabs v-model="type_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in type_arr" :title="item"></van-tab>
      </van-tabs>
    </div>

    <van-cell title="张三 (10月9日)" value="天府新城 1栋2单303" label="材料单: 1500元" border is-link
              center></van-cell>

    <div class="history"></div>
    <van-cell title="收入统计" is-link :border="false"></van-cell>
    <van-cell title="小区管理" is-link :border="false"></van-cell>
    <van-cell title="员工管理" is-link :border="false"></van-cell>
    <van-cell title="商品管理" is-link :border="false"></van-cell>
    <van-cell title="劳务价格设定" is-link :border="false"></van-cell>


  </div>
</template>

<script>

export default {
  name: "OrderCord",
  data() {
    return {
      time_mark: null,   // 时间的标致
      community_mark: null,   // 小区的标致,
      staff_mark: null,   // 员工的标致,
      type_mark: null,   // 订单类型标致
      time_arr: ['全部时间','10月9日','10月10日','10月11日','10月12日','10月13日','10月14日','10月15日','10月16日','10月17日'],
      community_arr: ['全部小区','文邦国际','碧海园','海语城','银河产业园','天府新城','大都金沙湾','碧桂园','恒大名都'],
      staff_arr: ['全部员工','张三','李四','老王','小赵','小明','张良','刘邦','荀香','韩信','萧何','张衡'],
      type_arr: ['全部类型','材料单','劳务单'],
      list: [
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 1,
          name: '张三',
          tiem: '10月8日',
          addr: '天宝福地1栋2单303',
          type: '劳务单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 0,
          name: '李四',
          tiem: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        }
      ]
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
.order-cord {
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

  .filter {
    background-color: #14929C;
    margin-bottom: 30px;

  }


  .van-cell {
    background-color: var(--cl-tF);
    margin-bottom: 10px;
  }

}
</style>
