<template>
  <div class="forget">
    <van-nav-bar left-text="登录页" title="找回密码" left-arrow border fixed z-index="50" placeholder @click-left="clickLeft()"/>

    <van-form ref="forgetform_ref" :show-error="false">
      <van-field v-model="forgetform.tel" label="手机号" placeholder="请输入手机号" type="number"
                 maxlength="18" required clearable clear-trigger="always" name="tel"
                 :rules="forgetform_rules.tel"/>

      <van-field v-model="forgetform.verify" label="验证码" placeholder="请输入验证码" type="number"
                 maxlength="8" required clearable clear-trigger="always" name="verify">
        <template #button>
          <van-button v-if="able" size="small" type="info" @click="getVerify()">获取验证码</van-button>
          <div v-else class="mytime">
            <van-count-down :time="60*1000" format="ss 秒" @finish="onFinish"/>
          </div>
        </template>
      </van-field>

      <div class="forget-btn">
        <van-button type="info" text="下一步" size="large" @click="forgetNext()"></van-button>
      </div>

    </van-form>
  </div>
</template>

<script>
import {getVerifyForget,checkVerifyForget} from 'network/login'

export default {
  name: "Forget",
  data() {
    return {
      able: true,   // 获取验证码的按钮是否可用
      msm: null,   // 系统验证码
      forgetform: {   // 忘记密码: 手机号的表单
        tel: '',
        verify: ''
      },
      forgetform_rules: {   // 表单的校验
        tel: [
          {required: true, message: '手机号不能为空!'},
          // { checkMobile, message: '手机号格式不正确' }
        ],
      }
    }
  },
  methods: {
    onClear() {   // 清空手机框时可以 重新发验证码
      this.able = true
    },
    getVerify() {   // 获取验证码
      this.able = false
      getVerifyForget(this.forgetform.tel).then( res => {
        if (res.result == 0) {
          this.$notify({type: "warning", message: res.message})
          this.able = true
        }
        else {
          this.msm = res.msm
        }
      })
    },
    onFinish() {   // 倒计时结束自动执行
      this.able = true
    },
    forgetNext() {   // 点击下一步
      this.$refs.forgetform_ref.validate().then( () => {
        checkVerifyForget(this.forgetform.verify,this.msm).then( res => {
          if(res.result == 0) {
            this.$toast.fail(res.message)
          }
          else {
            this.$router.push({
              path: '/setpassword',
              query: {
                tel: this.forgetform.tel
              }
            })
          }
        })
      })

    },
  }

  
}
</script>

<style scoped lang="scss">
.forget {
  .van-form {
    margin-top: 10px;
    //height: 310px;
    .mytime {
      border-radius: 2px;
      width: 76px;
      height: 30px;
      background-color: #aaa;
      display: flex; justify-content: center; align-items: center;
      .van-count-down {color: #fff;}
    }
    .forget-btn {
      width: 100%; margin: 40px 0; display: flex; justify-content: center;
      .van-button { width: 90%; }
    }
  }
}
</style>