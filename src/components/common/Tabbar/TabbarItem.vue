<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
	export default {
    name: "TabbarItem",
		props:{
			path: {
				type: String,
			},
			tabbar_index: {   // 默认不是激活状态
				type: Number,
				default: 0
			},
			active_color: {
				type: String,
				default: "#f00"  // 内置被激活的文字颜色
			},
			default_color: {
				type: String,
				default: "#999999"   // 内置没激活的文字颜色
			}
		},
		data() {
			return {
			  // is_active: true
			};
		},
		methods: {
			itemClick() {
			  this.$router.replace(this.path)
				this.$emit("changeTabbar")
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1   // vue 原生用这种方法
			},
			activeStyle() {
				return this.isActive ? {color: this.active_color} : {color: this.default_color}
			}
		},


	}
</script>

<style scoped>
	.tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tabbar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
