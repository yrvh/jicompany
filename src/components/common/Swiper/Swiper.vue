<template>
  <div class="swiper-box">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>

    <slot name="indicator"></slot>

    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item,index) in slideCount" class="indi-item" :class="{active: index===currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {   // 轮播时间
      type: Number,
      default: 3000
    },
    animDuration: {   // 延时时间
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,   // 元素个数
      totalWidth: 0,   // swiper的宽度
      swiperStyle: {},   // swiper样式
      currentIndex: 1,   // 当前的index
      scrolling: false, // 是否正在滚动
    }
  },

  mounted() {
    // 1 操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();
      // 开起定时器
      this.startTimer();
    },100)
  },

  methods: {
    // 定时器操作
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      },this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer)
    },


    // 滚动正确的位置
    scrollContent(currentPosition) {
      // 设置正在滚动
      this.scrolling = true
      // 开始滚动动画
      this.swiperStyle.transition = 'transform' + this.animDuration + 'ms'
      this.setTransform(currentPosition)
      // 判断滚动位置
      this.checkPosition();
      // 滚动完成
      this.scrolling = false
    },

    checkPosition() {
      window.setTimeout(() => {
        // 校验正确的位置
        this.swiperStyle.transition = '0ms';
        if(this.currentIndex >= this.slideCount + 1){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        else if(this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }

        // 结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex-1);
      }, this.animDuration)
    },

    //设置滚动的位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`;
    },

    // 操作DOM 在DOM前后添加Slide
    handleDom() {
      // 获取要操作的元素
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = swiperEl.getElementsByClassName('slide');
      // 保存的个数
      this.slideCount = slidesEls.length;
      // 如果大于1, 那么在前后分别添加一个slide
      if(this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      // 让swiper元素 显示第一个( 目前是显示前边添加的最后一个元素
      this.setTransform(-this.totalWidth)
    },

    // 拖动事件的处理
    touchStart(e) {
      // 如果正在滚动, 不可以拖动
     if(this.scrolling) return;
     // 停止定时器
      this.stopTimer();
      // 保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    touchMove(e) {
      // 计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition

      // 设置当前位置
      this.setTransform(moveDistance);
    },

    touchEnd(e) {
      // 获取移动的距离
      let currentMove = Math.abs(this.distance);
      // 判断最终的距离
      if(this.distance === 0) {
        return
      }
      else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      }
      else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }

      // 移动正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 移动完成后  重新开启定时器
      this.startTimer()
    },

    // 控制上一个 下一个
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      // 移除定时器
      this.stopTimer();
      // 修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 添加定时器
      this.startTimer();
    }
  }

}
</script>

<style scoped>
.swiper-box {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fafafa;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: #7EB6FF;
}
</style>