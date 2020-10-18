<template>
  <div class="message">
<!--    <van-nav-bar title="信息列表" left-text="返回" right-text="完成"-->
<!--                 left-arrow border fixed placeholder z-index="50"-->
<!--                 @click-right="onDirectory" @click-left="clickLeft()"></van-nav-bar>-->
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory">
      <template #title>
        <span class="title">消息</span>
      </template>
      <template #right>
        <span class="iconfont icon-wode-copy"></span>
      </template>
    </van-nav-bar>
    <div class="p-holder"></div>

    <Msg class="msg-cord" v-for="item in msglist" :info="item"/>
  </div>

</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msglist: [
        {
          img: require('assets/img/home/v1.jpg'),
          name: '张六',
          time: '2小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/v2.jpg'),
          name: '李三',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v3.jpg'),
          name: '老王',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '1'
        },
        {
          img: require('assets/img/home/v4.jpg'),
          name: '李白',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v5.jpg'),
          name: '荀香',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/s3.jpg'),
          name: '王阳明',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/s4.jpg'),
          name: '老杜',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '4'
        },
        {
          img: require('assets/img/home/s6.jpg'),
          name: '吴有训',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '5'
        },
        {
          img: require('assets/img/home/v1.jpg'),
          name: '张六',
          time: '2小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/v2.jpg'),
          name: '李三',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v3.jpg'),
          name: '老王',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '1'
        },
        {
          img: require('assets/img/home/v4.jpg'),
          name: '李白',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v5.jpg'),
          name: '荀香',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/s3.jpg'),
          name: '王阳明',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/s4.jpg'),
          name: '老杜',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '4'
        },
        {
          img: require('assets/img/home/s6.jpg'),
          name: '吴有训',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '5'
        },
        {
          img: require('assets/img/home/v1.jpg'),
          name: '张六',
          time: '2小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/v2.jpg'),
          name: '李三',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v3.jpg'),
          name: '老王',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '1'
        },
        {
          img: require('assets/img/home/v4.jpg'),
          name: '李白',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v5.jpg'),
          name: '荀香',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/s3.jpg'),
          name: '王阳明',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/s4.jpg'),
          name: '老杜',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '4'
        },
        {
          img: require('assets/img/home/s6.jpg'),
          name: '吴有训',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '5'
        },
        {
          img: require('assets/img/home/v1.jpg'),
          name: '张六',
          time: '2小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/v2.jpg'),
          name: '李三',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v3.jpg'),
          name: '老王',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '1'
        },
        {
          img: require('assets/img/home/v4.jpg'),
          name: '李白',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v5.jpg'),
          name: '荀香',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/s3.jpg'),
          name: '王阳明',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/s4.jpg'),
          name: '老杜',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '4'
        },
        {
          img: require('assets/img/home/s6.jpg'),
          name: '吴有训',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '5'
        },
        {
          img: require('assets/img/home/v1.jpg'),
          name: '张六',
          time: '2小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/v2.jpg'),
          name: '李三',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v3.jpg'),
          name: '老王',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '1'
        },
        {
          img: require('assets/img/home/v4.jpg'),
          name: '李白',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/v5.jpg'),
          name: '荀香',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '2'
        },
        {
          img: require('assets/img/home/s3.jpg'),
          name: '王阳明',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '3'
        },
        {
          img: require('assets/img/home/s4.jpg'),
          name: '老杜',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '4'
        },
        {
          img: require('assets/img/home/s5.jpg'),
          name: '吴有训',
          time: '3小时前',
          new: '瓷砖多少钱?',
          amount: '5'
        },
      ]
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
  .van-nav-bar {
    .title {
      color: var(--cl-textF);
    }
    background-color: var(--cl-bg-theme) !important;
  }
  .p-holder {
    width: 100%;
    height: 46px;
    //background-color: #ee3333;
    //margin-bottom: 10px;
  }
  .msg-cord {
    //margin-bottom: 10px;
  }


</style>