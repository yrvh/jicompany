<template>
  <div class="manager">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory" >
      <template #title>
        <span class="title">订单管理</span>
      </template>
      <!--      <template #right>-->
      <!--        <span class="manage">设置</span>-->
      <!--      </template>-->
    </van-nav-bar>
    <div class="p-holder"></div>
    <div class="filter">
      <van-tabs v-model="month_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in month_arr" :title="item"></van-tab>
      </van-tabs>
      <van-tabs v-model="day_mark" color="#1079f2" line-width="20px" line-height="5px">
        <van-tab v-for="item in day_arr" :title="item"></van-tab>
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

    <van-cell v-for="item in list" :title="item.name + `(${item.time})`" :value="item.addr"
              :label="item.type + `: ${item.amount}`" border is-link center></van-cell>

    <div class="all-money">总金额: ¥ 23000.00</div>



  </div>
</template>

<script>

export default {
  name: "Manager",
  data() {
    return {
      month_mark: null,   // 月份的标致
      day_mark: null,   // 日期的标致
      community_mark: null,   // 小区的标致,
      staff_mark: null,   // 员工的标致,
      type_mark: null,   // 订单类型标致
      month_arr: ['全部月份','20年10月','20年09月','20年08月','20年07月','20年06月','20年05月','20年04月','20年03月'],
      day_arr: ['全部日期','01日','02日','03日','04日','05日','06日','07日','08日','09日','10日','11日','12日','13日','14日','15日','16日','17日'],
      community_arr: ['全部小区','文邦国际','碧海园','海语城','银河产业园','天府新城','大都金沙湾','碧桂园','恒大名都'],
      staff_arr: ['全部员工','张三','李四','老王','小赵','小明','张良','刘邦','荀香','韩信','萧何','张衡'],
      type_arr: ['全部类型','材料单','劳务单'],
      list: [
        {
          id: 0,
          name: '李四',
          time: '10月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 1,
          name: '张三',
          time: '10月8日',
          addr: '天宝福地1栋2单303',
          type: '劳务单',
          amount: '1000元'
        },
        {
          id: 2,
          name: '吴起',
          time: '10月7日',
          addr: '春天花园1栋2单303',
          type: '劳务单',
          amount: '1400元'
        },
        {
          id: 3,
          name: '张仪',
          time: '10月4日',
          addr: '观山海1栋2单303',
          type: '劳务单',
          amount: '1600元'
        },
        {
          id: 4,
          name: '苏秦',
          time: '10月3日',
          addr: '碧桂园1栋2单303',
          type: '材料单',
          amount: '1200元'
        },
        {
          id: 5,
          name: '廉颇',
          time: '10月6日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1100元'
        },
        {
          id: 6,
          name: '李牧',
          time: '10月1日',
          addr: '春天花园1栋2单303',
          type: '劳务单',
          amount: '1200元'
        },
        {
          id: 7,
          name: '商鞅',
          time: '10月2日',
          addr: '大都金沙湾1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 8,
          name: '白起',
          time: '09月10日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1100元'
        },
        {
          id: 9,
          name: '王翦',
          time: '09月23日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 10,
          name: '孙武',
          time: '09月12日',
          addr: '恒大1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 11,
          name: '伯牙',
          time: '08月11日',
          addr: '春天花园1栋2单303',
          type: '材料单',
          amount: '1600元'
        },
        {
          id: 12,
          name: '范蠡',
          time: '09月11日',
          addr: '春天花园1栋2单303',
          type: '劳务单',
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
.manager {
  padding-bottom: 50px;
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
  .all-money {
    height: 50px;
    background-color: var(--cl-bg-op);
    border: 1px solid #1079F2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    line-height: 50px;
    text-align: right;
    padding-right: 10px;
    font-size: 18px;
    color: var(--cl-text-theme);
  }

}
</style>
