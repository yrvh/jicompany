<template>
  <div class="reg-coop">
    <van-nav-bar left-text="返回" title="商务秘书公司" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>
    <div class="filterbox">
      <van-search v-model="search_name" background="#eeeeee" placeholder="请输入公司全称/统一社会信用代码..."
                  clearable clear-trigger="always" show-action>
        <template #action>
          <div @click="handleSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <!--  ================列表内容展示区=============   -->
    <van-empty v-if="is_empty" image="search" description="公司的全称 或 统一信用代码"></van-empty>

    <div v-else class="content">
      <van-pull-refresh v-model="is_refre" @refresh="onRefresh">
        <van-list v-model="is_loading" :finished="is_finished" finished-text="没有更多了"
                  :error.sync="is_error" error-text="请求失败,点击重新加载"
                  @load="onLoad()">
          <van-cell v-for="item in list" :key="item.id" is-link @click="onListItem(item.id)"
                    :icon="item.icon=='/img/R.png'? require('assets/img/login/logo_com.png'):item.icon" :title="item.name"/>
        </van-list>
      </van-pull-refresh>
    </div>


  </div>
</template>

<script>
import {searchComCoop} from 'network/login'
import {SETFID} from "@/store/mutype";

export default {
  name: "RegCoop",
  data() {
    return {
      search_name: '',   // 搜索框输入的内容
      is_getlist: true,   // 是否获取列表数据
      is_loading: true,   // 列表是否处于加载状态
      is_finished: false,   // 是否加载完成
      is_error: false,   // 是否出现加载失败
      is_refre: false,   // 是否下拉刷新
      is_empty: true,   // 列表长度是否为空
      list: []   // 列表数据
    }
  },
  mounted() {
  },
  methods: {
    onListItem(id) {   // 点击跳转到 商秘协议页面
      this.$store.commit(SETFID,id)
      this.$router.push('/regcoop_contract')
    },
    handleSearch() {   // 点击搜索
      this.is_getlist = true
      this.is_loading = true
      this.onLoad()
    },
    onLoad() {
      // this.is_error = true   // 加载失败时触发
      // fetchSomeThing().catch(() => {
      //   this.is_error = true;
      // });

      if(this.is_getlist){  // 手动获取列表
        if (this.is_refre) {   // 如果是下拉刷新的情况下, 清空列表
          this.list = []
          this.is_refre = false
        }
        searchComCoop().then( res => {
          this.list = res.rows
          // 加载状态结束
          this.is_loading = false;
          // 全部加载完成
          if(this.list.length == res.total) this.is_finished = true;

          // 空状态的判断
          if(this.list.length == 0) {
            this.is_empty = true;   // 如果没数据 设为空状态
          }
          else{
            this.is_empty = false;
          }
        })
      }
      else{
        this.is_loading = false
        this.is_empty = true
      }

    },
    // 下拉刷新
    onRefresh() {
      this.is_finished = false;
      this.is_loading = true;
      this.onLoad();
    },
  },
  created() {
    this.onLoad()
  }
}
</script>

<style scoped lang="scss">
.reg-coop{
  min-height: 100vh;
  //background-color: #34AEFF;
  padding-bottom: 50px;
  .filterbox {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 47px;
  }
  .content {
    margin-top: 70px;
    .van-cell {
      color: var(--cl-text-t9);
      .van-icon { font-size: 19px; font-weight: 700;}
    }
  }
  .van-empty {margin-top: 200px;}

}

</style>