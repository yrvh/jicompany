<template>
  <div id="main">
    <router-view/>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "@/components/content/MainTabbar/MainTabbar";

export default {
  name: 'Main',
  components: {
    MainTabbar
  }
}
</script>

<style>

#main {
  /*height: 100vh;*/
  /*background-color: var(--cl-tF8);*/
  padding-bottom: 50px;
}
</style>
