<template>
  <div class="tabbar">
    <div></div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Tabbar",
  data() {
    return {

    };
  },
  computed: {
    // custom_style() {
    // 	return {width: this.custom.width,border: this.custom.border}
    // }
  }

}
</script>

<style scoped>
.tabbar {
  display: flex;
  /*background-color: #f6f6f6;*/
  background-color: rgba(230,230,230,0.5);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 3px 0 rgba(100,100,100,.6);
}
</style>

