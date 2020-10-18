<template>
  <swiper class="my-swiper">
    <swiper-item v-for="(image,index) in img_arr" :key="index">
      <!--<img class="image" v-lazy="image" alt="">-->
      <a href="#">
        <img class="image" :src="image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/Swiper"
export default {
  name: "MainSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {   // 动态加载在 轮播图数据时 用这个属性接收
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      img_arr: [
        require("assets/img/home/s1.jpg"),
        require("assets/img/home/s2.jpg"),
        require("assets/img/home/s3.jpg"),
        require("assets/img/home/s4.jpg"),
        require("assets/img/home/s5.jpg"),
        require("assets/img/home/s6.jpg"),
        require("assets/img/home/s7.jpg"),
        require("assets/img/home/s8.jpg"),
      ],
    }
  },
}
</script>

<style scoped>
.my-swiper {
  height: 200px;
}
</style>