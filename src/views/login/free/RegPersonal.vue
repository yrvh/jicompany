<template>
  <div class="personal">
    <van-nav-bar title="完善个人信息" left-text="返回" right-text="完成"
                 left-arrow border fixed placeholder z-index="50"
                 @click-right="handleNext" @click-left="clickLeft()"></van-nav-bar>
    <van-form ref="personalform_ref" :show-error="false">
      <van-cell-group title="个人基本信息">
        <van-field v-model="personalform.realname" label="姓名" placeholder="请输入姓名" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="realname"
                   :rules="personalform_rules.realname"/>
        <van-field v-model="personalform.tel" label="手机号" type="number" required name="tel"
                   :rules="personalform_rules.tel" disabled/>
        <van-field v-model="personalform.email" label="电子邮箱" placeholder="请输入电子邮箱" type="text"
                   maxlength="32" required clearable clear-trigger="always" name="email"
                   :rules="personalform_rules.email"/>
        <van-field v-model="personalform.idCardNum" label="身份证号" placeholder="请输入身份证号" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="idCardNum"
                   :rules="personalform_rules.idCardNum"/>

        <van-cell title="证件照片" :value="upPhoto" required is-link border center to="/upidcard" />

        <van-cell title="年收入范围(元)" :value="personalform.monthsy" required
                  border center>
          <template #extra>
            <van-dropdown-menu duration="0.3" active-color="#7EB6FF" >
              <van-dropdown-item title="档" v-model="personalform.monthsy" :options="options"/>
            </van-dropdown-menu>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group title="个人账户信息">
        <van-field v-model="personalform.khh" label="开户行" placeholder="请输入开户行"  type="text"
                   maxlength="18" required clearable clear-trigger="always" name="khh"
                   :rules="personalform_rules.khh"/>
        <van-field v-model="personalform.accountName" label="开户名" placeholder="请输入开户名"  type="text"
                   maxlength="18" required clearable clear-trigger="always" name="accountName"
                   :rules="personalform_rules.accountName"/>
        <van-field v-model="personalform.account" label="账号" placeholder="请输入账号"  type="number"
                   maxlength="22" required clearable clear-trigger="always" name="account"
                   :rules="personalform_rules.account"/>
      </van-cell-group>

      <van-cell-group title="代理营销员信息" v-if="showSell">
        <van-field v-model="personalform. employeecode" label="营销员工号(选填)"  type="number" maxlength="4"
                   clearable clear-trigger="always" name=" employeecode"/>
      </van-cell-group>
    </van-form>
  </div>
</template>

<script>
import { validIdcard } from 'network/login'
import {submitFreeinfo} from "@/network/login";
import {SETCD, SETEM, SETISH, SETRN} from "@/store/mutype";
export default {
  name: "Personal",
  data() {
    return {
      personalform: {   // 个人信息表单
        username: '',   // 用户名
        password: '',   // 密码
        userType: '',   // 用户类型
        type: '',   // 有无单位
        comids: '',

        realname: '',   // 真名
        tel: '',
        email: '',
        idCardNum: '',
        idCardUpUrl: '',   // 身份证正面
        idCardDownUrl: '',   // 身份证反面
        monthsy: '1',
        khh: '',   // 开户行
        accountName: '',
        account: '',
        employeecode: '',

      },
      personalform_rules: {   // 表单的校验
        realname: [
          {required: true, message: '姓名不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '姓名格式不正确' }
        ],
        email: [
          {required: true, message: '邮箱不能为空!'},
          // { checkEmail, message: '邮箱格式不正确' }
        ],
        idCardNum: [
          {required: true, message: '身份证号不能为空!'},
          // { checkIdcard, message: '身份证格式不正确' }
        ],
        khh: [
          {required: true, message: '开户行不能为空!'},
        ],
        accountName: [
          {required: true, message: '开户名不能为空!'},
          { min: 2, max: 18, message: '用户名2~18位!'},
          // { checkUsername, message: '开户名格式不正确' }
        ],
        account: [
          {required: true, message: '账号不能为空!'},
          { min: 15, max: 22, message: '用户名15~22位!'},
          // { checkAccount, message: '银行卡号格式不正确' }
        ],
         employeecode: [
          { min: 4, max: 4, message: '请填入4位营销员工号!'},
          // {  employeecode, message: '营销员工号,格式不正确' }
        ],
      },
      options: [   // 收入范围下拉菜单
        { text: '0-60,000', value: '1' },
        { text: '60,000-360,000', value: '2' },
        { text: '360,000-600,000', value: '3' },
        { text: '600,000-1,200,000', value: '4' },
        { text: '1,200,000-2,400,000', value: '5' },
        { text: '>2,400,000', value: '6' },
      ],
    }
  },
  methods: {
    handleNext() {   // 点击了 完成=====
      this.personalform.idCardUpUrl = this.$store.state.reg.idCardUpUrl
      this.personalform.idCardDownUrl = this.$store.state.reg.idCardDownUrl
      if(this.personalform.idCardUpUrl=='' || this.personalform.idCardDownUrl=='') {
        this.$toast.fail("请上传身份证照片!")
      }
      else {
        this.$refs.personalform_ref.validate().then( () => {
          validIdcard(this.personalform.idCardNum).then(res => {
            if(res.valid) {
              this.$store.commit(SETRN,this.personalform.realname)
              this.$store.commit(SETEM,this.personalform.email)
              this.$store.commit(SETCD,this.personalform.idCardNum)

              submitFreeinfo(this.personalform).then(res => {
                if(res.result==1){
                  this.$toast.success(res.message)
                  setTimeout(()=>{
                    this.$router.push('/audit')
                  },1300)
                }
                else if(res.result==0){
                  this.$toast.fail(res.message)
                  this.$router.push('/audit')
                }
              })
            }
            else {
              this.$toast.fail("该身份证号已经注册!")
            }
          })
        })
      }
    },
  },
  computed: {
    // 格式化,  收入范围
    formatMonthsy() {
      if(this.monthsy=='1') {return '0-60,000'}
      else if(this.monthsy=='2') {return '60,000-360,000'}
      else if(this.monthsy=='3') {return '360,000-600,000'}
      else if(this.monthsy=='4') {return '600,000-1,200,000'}
      else if(this.monthsy=='5') {return '1,200,000-2,400,000'}
      else if(this.monthsy=='6') {return '>2,400,000'}
    },
    upPhoto() {   // 是否上传了照片
      if(this.$store.state.reg.idCardUpUrl!='' && this.$store.state.reg.idCardDownUrl!='') return '已上传'
      else return '未上传'
    },
    showSell() {
      return this.personalform. employeecode != ''
    }
  },
  created() {
    this.personalform.tel = this.$store.state.reg.tel
    this.personalform. employeecode = this.$store.state.reg. employeecode

    this.personalform.username = this.$store.state.reg.username
    this.personalform.password = this.$store.state.reg.password
    this.personalform.userType = this.$store.state.reg.userType
    this.personalform.type = this.$store.state.reg.type
    this.personalform.comids = this.$store.state.reg.comids
  }

}
</script>

<style scoped lang="scss">
.personal {
  .van-form {
    margin-top: 10px;
    .van-cell,.van-cell {
      background-color: #ffffff;
    }
  }
}
</style>