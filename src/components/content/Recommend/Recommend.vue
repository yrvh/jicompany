<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in rarr" :key="item.id" @click="onItem(item.link)">
      <div class="contain">
        <div class="icon iconfont" :class="item.icon" :style="{color: item.icolor}"></div>
        <div class="title">{{item.title}}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    rarr: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onItem(link) {   // 点击导航的每一项
      if( this.$route.path != link ) this.$router.push(link)
    }
  }
}
</script>

<style scoped>
  .recommend {
    /*background-color: var(--cl-tF0);*/
    /*background-color: #f99;*/
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid #fff;
  }
  .recommend-item {
    width: 25%;
    text-align: center;
  }
  .contain {
    width: 70px;
    margin: 0 auto;
    background-color: rgba(230,230,230,0.3);
    border-radius: 10px 0 10px 0;
  }
  .icon {
    width: 65px;
    height: 65px;
    line-height: 65px;
    border-radius: 50%;
    margin: 0 auto;
    color: #fff;
    font-size: 40px;
  }
  .title {font-size: 14px; transform: translateY(-12px)}

</style>