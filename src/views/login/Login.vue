<template>
  <div class="login">
    <van-image :src="require('assets/img/login/login.jpg')"></van-image>

    <!-- 登录和注册 的包裹容器 -->
    <div class="container">
      <van-tabs v-model="switch_mark" color="#7EB6FF" animated border ellipsis title-inactive-color="#999">

        <!-- 登录功能-->
        <van-tab title="登录">
          <van-form ref="loginform_ref" :show-error="false">
            <van-field v-model="loginform.account" label="账号" placeholder="请输入用户名/手机号"
                       maxlength="24" required clearable clear-trigger="always" name="account"
                       :rules="loginform_rules.account" @input="isChange"/>
            <van-field v-model="loginform.password" label="密码" placeholder="请输入密码" type="password"
                       maxlength="18" required clearable clear-trigger="always" name="password"
                      :rules="loginform_rules.password" @keyup="enterSubmit"/>

            <div class="login-log">
              <van-checkbox v-model="loginform.memory" shape="square">记住密码</van-checkbox>
              <div class="forget" @click="onForget">忘记密码?</div>
            </div>

            <div class="login-btn">
              <van-button type="info" text="登录" size="large" @click="login"></van-button>
            </div>

          </van-form>
        </van-tab>

        <!--    注册功能    -->
        <van-tab title="注册">
          <van-form ref="regform_ref" :show-error="false">
            <van-field v-model="regform.username" label="用户名" placeholder="请输入用户名" type="text"
                       maxlength="18" required clearable clear-trigger="always" name="username"
                       :rules="regform_rules.username"/>
            <van-field v-model="regform.tel" label="手机号码" placeholder="请输入手机号" type="number"
                       maxlength="18" required clearable clear-trigger="always" name="tel"
                       :rules="regform_rules.tel"/>

            <van-field v-model="regform.verify" label="验证码" placeholder="请输入验证码" type="number"
                       maxlength="8" required clearable clear-trigger="always" name="verify"
                       :rules="regform_rules.verify">
              <template #button>
                <van-button v-if="able" size="small" type="info" @click="getVerify()">获取验证码</van-button>
                <div v-else class="mytime">
                  <van-count-down :time="60*1000" format="ss 秒" @finish="onFinish"/>
                </div>
              </template>
            </van-field>

            <van-field v-model="regform.pwd" label="密码" placeholder="请输入密码" type="password"
                       maxlength="18" required clearable clear-trigger="always" name="password"
                       :rules="regform_rules.pwd"/>
            <van-field v-model="regform.re_pwd" label="确认密码" placeholder="请再次输入密码" type="password"
                      maxlength="18" required clearable clear-trigger="always" name="repassword"
                       :rules="regform_rules.re_pwd"/>

            <div class="reg-log">
              <van-checkbox v-model="regform.agree" shape="square" @change="isAgree"><span class="read-agree">已阅读并且同意</span></van-checkbox>
              <div class="contract" @click="onContract">《慧业通云服务平台条款》</div>
            </div>

            <div class="reg-btn">
              <van-button type="info" text="下一步" size="large" @click="regSubmit()"></van-button>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { loginHyt, getVerifyReg, submitNextReg } from 'network/login'
import {SETUN, SETPWD, SETTEL, LOGIN, SETMEM} from "@/store/mutype";

export default {
  name: "login",
  data() {
    return {
      switch_mark: null,   // 标识符
      able: true,   // 获取验证码的按钮是否可用
      msm_code: null,   // 系统发的验证码
      loginform: {   // 登录的表单
        account: '',
        password: '',
        memory: false,   // 是否记住密码
      },
      loginform_rules: {   // 登录表单的校验规则
        account: [
          { required: true, message: '账号不能为空!'},
        ],
        password: [
          { required: true, message: '请输入登录密码!~'}
        ],
      },
      regform: {   // 注册的表单
        username: '',
        tel: '',
        verify: null,
        pwd: '',
        re_pwd: '',
        agree: false,   // 是否同意条款
      },
      regform_rules: {
        username: [
          { required: true, message: '用户名不能为空!'},
          // { checkUsername, message: '用户名格式不正确!'}
        ],
        tel: [
          { required: true, message: '手机号不能为空!'},
          // { checkMobile, message: '手机号格式不正确!'}
        ],
        verify: [
          {required: true, message: '验证码不能为空!'},
        ],
        pwd: [
          {required: true, message: '密码不能为空!'},
          // { checkPwd, message: '请输入8~18位密码(字母 数字 下划线)!' }
        ],
        re_pwd: [
          {required: true, message: '确认密码不能为空!'},
          // { checkPwd, message: '请输入8~18位密码(字母 数字 下划线)!' }
        ],
      }
    }
  },
  methods: {
    // ===================登录页 相关函数=============================================================
    isChange() {   // @input 账号输入框发生改变触发函数
      let pwd = window.localStorage.getItem("password"+this.loginform.account)
      if(pwd) {
        this.loginform.password = pwd
        this.loginform.memory = true
      }
      // 如果用vuex做,, 如下:
      // let stat  = this.$store.memory.some((value,index) => {
      //   console.log(value)
      //   if(value.ant == this.loginform.account) { this.loginform.password = value.pwd}
      //   return value == this.loginform.account
      // })
    },
    onForget() {   // 忘记密码
      console.log("跳转到忘记密码的页面")
      this.$router.push('/forget')   // 编程式导航
    },
    login() {   // 点击登录按钮
      this.$refs.loginform_ref.validate().then( () =>{

        // 发起网络请求
        loginHyt(this.loginform.account,this.loginform.password).then( res => {
          if(res.status == 100) return this.$notify({ type: "warning", message: "密码不正确!" })
          else if(res.status == -1) return this.$notify({ type: "warning", message: "用户不存在"})
          else if(res.status == 175) {   // 重签三方协议
            console.log("重签三方协议")
          }
          else {
            if(this.loginform.memory) {  // 记住密码
              // this.$store.commit(SETMEM,{ ant: this.loginform.account, pwd: this.loginform.password })
              window.localStorage.setItem("account"+this.loginform.account,this.loginform.account)
              window.localStorage.setItem("password"+this.loginform.account,this.loginform.password)
            }
            else {  // 未选中时删除密码
              window.localStorage.setItem("password"+this.loginform.account,'')
            }
            this.$store.commit(LOGIN,res)   // 将登陆者的token信息 用store存储

            if (res.userType == 1 && res.dlregid == 0) {   // 自行注册的 业者=======================
              if ([1, 2, 3, 4, 5, 44].includes(res.status)) {
                console.log("跳转到audit.html 页面")
              } else if (res.status == 11) {   // 11 服务费用不通过
                console.log("跳转到onLineContract.html")
              } else if (res.status == 55 || res.status == 22) {   // 55单位退回   22个人信息不通过
                console.log("跳转到 freeInfo.html")
              } else if (res.status == 0 || res.status == 8) {
                console.log("跳转到业者首页")
              }
            }

            else if (res.userType == 1 && res.dlregid == 1) {   // 代理注册的 业者=======================
              if ([4, 11, 33, 44, 55, 66].includes(res.status)) {
                console.log("跳转到audit.html 页面")
              } else if (res.status == 11) {   // 11 服务费用不通过
                console.log("跳转到onLineContract.html")
              } else if (res.status == 55 || res.status == 22) {   // 55单位退回   22个人信息不通过
                console.log("跳转到 freeInfo.html")
              } else if (res.status == 8) {
                console.log("跳转到业者首页")
              }
            }

            else if (res.userType == 2 && res.dlregid == 0) {   // 自行注册的 单位======================
              if ([2, 22, 3, 6].includes(res.status)) {
                console.log("跳转到audit.html 页面")
              } else if (res.status == 8) {
                console.log("跳转到单位首页")
              }
            }

            else if (res.userType == 2 && res.dlregid == 1) {   // 代理注册的 单位=======================
              if ([2, 22, 3, 6].includes(res.status)) {
                console.log("跳转到audit.html 页面")
              } else if (res.status == 8) {
                console.log("跳转到单位首页")
              }
            }

            else if (res.userType == 11 && res.dlregid == 0) {   // 自行注册的 伙伴=======================
              if ([1, 2, 3, 4, 44].includes(res.status)) {   // 比业者少了5待单位确认的状态
                console.log("跳转到audit.html 页面")
              } else if (res.status == 11) {   // 11 服务费用不通过
                console.log("跳转到onLineContract.html")
              } else if (res.status == 22) {   // 毕业者少55单位退回   22个人信息不通过
                console.log("跳转到 freeInfo.html")
              } else if (res.status == 0 || res.status == 8) {
                console.log("跳转到 伙伴首页")
              }
            }
            else if (res.userType == 11 && res.dlregid == 1) {   // 代理注册的 伙伴=======================
              if ([1, 2, 3, 4, 44].includes(res.status)) {
                console.log("跳转到audit.html 页面")
              } else if (res.status == 11) {   // 11 服务费用不通过
                console.log("跳转到onLineContract.html")
              } else if (res.status == 22) {   // 毕业者少55单位退回   22个人信息不通过
                console.log("跳转到 freeInfo.html")
              } else if (res.status == 0 || res.status == 8) {
                console.log("跳转到 伙伴首页")
              }
            }

            else if (res.userType == 4) {   // 商秘公司=======================
              if(res.status == 222 ){
                this.$notify({ type: "warning", message: "该角色已停用!" })
              }
              else{
                if (res.poststatus == 1 && res.status == 888) {   // 风控主管
                  this.$router.replace('/main/checkhome')

                }
                else if (res.poststatus == 2 && res.status == 888) {   // 业务员
                  console.log("跳转到 业务员页面")
                  window.localStorage.setItem('token_clerk',res.code_app)   // 将token存储在本地
                }
                else if (res.poststatus == 3 && res.status == 888) {   // 营销员
                  console.log("跳转到 营销员页面")
                  window.localStorage.setItem('token_sell',res.code_app)   // 将token存储在本地
                }
                else if (res.poststatus == 4 && res.status == 888) {
                  window.localStorage.setItem('token_manager',res.code_app)   // 将token存储在本地
                }
              }

            }

          }

        }).catch( err => { console.log(err)} )   // 函数loginHyt()的结束

      })   // 函数validate().then的结束---括号
    },    // 函数login()的结束---括号
    enterSubmit(event) {   // 密码框内点击 回车键
      if(event.key=="Enter") {
        console.log("点击了回车")
      }
    },

    // =====================注册页相关函数==================================================
    getVerify() {   // 获取验证码
      this.able = false
      getVerifyReg(this.regform.tel).then( res => {
        if(res.result==0){
          this.able = true
          this.$toast.fail(res.message)
        }
        else if(res.result == 1){
          this.msm_code = res.msm
        }
      })
    },
    onFinish() {   // 倒计时结束自动执行
      this.able = true
    },
    isAgree() {   // 勾选复选框---同意平台协议
      if(this.regform.agree) {
        this.$router.push('/platform')
      }
    },
    onContract() {   // 点击同意平台协议
      this.regform.agree = !this.regform.agree
      if(this.regform.agree) {
        this.$router.push('/platform')
      }
    },
    regSubmit() {   // 点击了 注册========
      if(this.msm_code != this.regform.verify) {
        this.$toast.fail("验证码不正确")
        // this.$notify({type: "warning", message: res.message})
      }
      else if(this.regform.pwd !== this.regform.re_pwd) {
        this.$toast.fail("两次密码输入不一致")
      }
      else if(!this.regform.agree) {
        this.$toast.fail("未同意平台条款")
      }
      else {
        this.$refs.regform_ref.validate().then( () => {
          this.$store.commit(SETTEL,this.regform.tel)
          this.$store.commit(SETUN,this.regform.username)
          this.$store.commit(SETPWD,this.regform.pwd)

          submitNextReg(this.regform.tel,this.regform.username,this.regform.verify,this.msm_code).then( res => {
            if([0,-1,-2,-3].includes(res.status)) {
              this.$toast.fail(res.message)
            }
            else if(res.status == 1) {
              this.$router.push('/choose_ident')
            }
          })
        })
      }
    }
  },
  created() {
    // console.log("获取线上最新版本")
    // console.log("获取本地版本号")
    // console.log("比较本地版本和最新版本")
    // console.log("确认更新版本")
    // console.log("下载最新版本")
    // console.log("安装最新版本")
  },
  updated() {
    if(this.switch_mark==1){
      console.log("是否扫码注册")
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    .van-image {height: 25vh; width: 100%;}
    .container {
      position: absolute;left: 50%;transform: translate(-50%,-50px);
      box-shadow: 0 0 10px 1px #ddd;
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
      padding: 0 10px;
      .van-form {
        margin-top: 10px;
        .login-log {
          height: 60px; display: flex; justify-content: space-between; align-items: center;
          padding: 0 10px;
          .forget {color: var(--cl-text-t9)}
          .forget:active {color: var(--cl-high-text)}
        }
        .reg-log {
          height: 60px; display: flex; align-items: center;
          padding: 0 10px;
          font-size: 14px;
          .read-agree {color: var(--cl-text-t9); }
          .contract {color: var(--cl-high-text); }
        }
        .login-btn,.reg-btn {
          width: 100%; margin: 20px 0 40px; display: flex; justify-content: center;
          .van-button { width: 90%; }
        }
      }
    }
  }

</style>