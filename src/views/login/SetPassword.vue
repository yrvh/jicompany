<template>
  <div class="setpwd">
    <van-nav-bar left-text="登录页" title="重置密码" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft(-2)"/>

    <van-form ref="setpwdform_ref" :show-error="false">
      <van-field v-model="setpwdform.pwd" label="新密码" placeholder="请输入密码" type="password"
                 maxlength="18" required clearable clear-trigger="always" name="password"
                 :rules="setpwdform_rules.pwd"/>
      <van-field v-model="setpwdform.re_pwd" label="确认密码" placeholder="请再次输入密码" type="password"
                 maxlength="18" required clearable clear-trigger="always" name="repassword"
                 :rules="setpwdform_rules.re_pwd"/>


      <div class="setpwd-btn">
        <van-button type="info" text="完成" size="large" @click="setpwdSubmit()"></van-button>
      </div>

    </van-form>
  </div>
</template>

<script>
import {resetPassword} from "@/network/login";

export default {
  name: "SetPassword",
  data() {
    return {
      tel: '',
      setpwdform: {   // 忘记密码: 手机号的表单
        pwd: '',
        re_pwd: ''
      },
      setpwdform_rules: {   // 表单的校验
        pwd: [
          {required: true, message: '密码不能为空!'},
          // { checkPwd, message: '请输入8~18位密码(字母 数字 下划线)!' }
        ],
        re_pwd: [
          {required: true, message: '确认密码不能为空!'},
          // { checkPwd, message: '请输入8~18位密码(字母 数字 下划线)!' }
        ],
      },
    }
  },
  methods: {
    // checkMobile(value){
    //   const regMobile = /^(0|86|17951)?(13[0-9]|14[5-9]|15[012356789]|166|17[0-9]|18[0-9]|19[8-9])[0-9]{8}$/
    //   console.log(regMobile.test(value))
    //   return regMobile.test(value)
    // },
    setpwdSubmit() {   // 点击完成
      if(this.setpwdform.pwd !== this.setpwdform.re_pwd) {
        this.$toast.fail("两次密码输入不一致")
      }
      else {
        this.$refs.setpwdform_ref.validate().then( () => {
          resetPassword(this.tel,this.setpwdform.pwd).then( res => {
            console.log(res)
            if(res.result == 0){
              this.$notify({type: "warning", message: "密码修改失败!"})
            }
            else if(res.result==1) {
              this.$router.push('/login')
            }
          })
        })
      }
    },
  },
  created() {
    this.tel = this.$route.query.tel
  }

}
</script>

<style scoped lang="scss">
.setpwd {
  .van-form {
    margin-top: 10px;
    .setpwd-btn {
      width: 100%; margin: 40px 0; display: flex; justify-content: center;
      .van-button { width: 90%; }
    }
  }
}
</style>