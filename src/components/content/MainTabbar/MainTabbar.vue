<template>
  <tabbar>
    <tabbar-item :path="path[0]" active_color="#1079f2" default_color="#999999">
      <img slot="item-icon" :src="require('assets/img/tabbar/home4.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/home5.png')" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item :path="path[1]" active_color="#1079f2" default_color="#999999">
      <img slot="item-icon" :src="require('assets/img/tabbar/message4.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/message5.png')" alt="">
      <div slot="item-text">消息</div>
    </tabbar-item>
    <tabbar-item :path="path[2]" active_color="#1079f2" default_color="#999999">
      <img slot="item-icon" :src="require('assets/img/tabbar/manager4.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/manager5.png')" alt="">
      <div slot="item-text">管理</div>
    </tabbar-item>
    <tabbar-item :path="path[3]" active_color="#1079f2" default_color="#999999">
      <img slot="item-icon" :src="require('assets/img/tabbar/mine4.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/mine5.png')" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@/components/common/Tabbar/Tabbar";
import TabbarItem from "@/components/common/Tabbar/TabbarItem";

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {   // tabbar的跳转路径
      path: ['/main/home','/main/message','/main/manager','/main/mine']
    }
  }
}
</script>

<style scoped>

</style>
