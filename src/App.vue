<template>
  <div id="app">
    <keep-alive exclude="UpIdcard">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
import MainTabbar from "@/components/content/MainTabbar/MainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/icon/iconfont.css";

#app {
  height: 100vh;
  /*background-color: var(--cl-tF8);*/
  /*width: 375px;*/
  /*background-image: url("assets/img/bg.jpg");*/
}
</style>
