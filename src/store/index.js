import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
// import moduleA from "./modules/moduleA";

// 1 安装插件
Vue.use(Vuex)

// 2 创建对象
const store = new Vuex.Store({
  state: {
    reg: {   // 注册相关的状态
      audit_step: 1,   // 注册的步骤
      userType: 1,   // 用户类型
      username: '',   // 用户名
      password: '',   // 密码
      realname: '',   // 真实名字
      tel: '',
      type: 1,   // 是否有单位
      comids: '',   // 注册到哪个, 接受服务的 单位
      idCardUpUrl: '',   // 身份证 正面
      idCardDownUrl: '',   // 反面
      email: '',
      idCardNum: '',
      employeecode: '',

      // 合作伙伴=================================================
      hhrtype: '',
      hhr_ms_xieyiID: '',
      yz_ms_xieyiID: '',

      // 公司和企业级合作伙伴========================================
      logoupload: '',   // 公司logo
      yyzzupload: '',   // 营业执照
      contactidCardzmupload: '',
      contactidCardbmupload: '',
    },
    login: {},
    memory: [{
      ant: '',   // 账号
      pwd: '',
    }]

  },
  mutations,
  actions,
  getters,
  modules: {
    // a: moduleA
  }
})

// 3 导出对象
export default store

