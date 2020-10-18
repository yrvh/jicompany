<template>
  <div class="reg-cominfo">
    <van-nav-bar title="企业信息登记" left-text="返回" right-text="完成"
                 left-arrow border fixed placeholder z-index="50"
                 @click-right="handleNext" @click-left="clickLeft()"></van-nav-bar>

    <van-form ref="comform_ref" :show-error="false">
      <van-cell-group title="公司基本信息">
        <van-cell title="公司商标" required is-link border center :to="{ path: '/upidcard', query: {status: 'logo'} }" >
          <template #default>
            <van-image height="30px" width="30px" :src="require('assets/img/login/logo_com.png')"></van-image>
          </template>
        </van-cell>

        <van-field v-model="comform.creditCode" label="统一信用代码" placeholder="请输入统一社会信用代码" type="text"
                   maxlength="24" required clearable clear-trigger="always" name="creditCode"
                   :rules="comform_rules.creditCode"/>
        <van-field v-model="comform.name" label="单位名称" placeholder="请输入单位名称" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="name"
                   :rules="comform_rules.name"/>
        <van-field v-model="comform.namePY" label="单位名称缩写" placeholder="请输入单位名称缩写" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="namePY"
                   :rules="comform_rules.namePY"/>
        <van-field v-model="comform.capital" label="注册资本(万)" placeholder="请输入注册资本(万)" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="capital"
                   :rules="comform_rules.capital"/>
        <!--   公司类型的选择     -->
        <van-cell title="公司类型" :value="comtype_text" required is-link border center @click="show_ctype = true"></van-cell>
        <van-popup v-model="show_ctype" overlay position="bottom" :duration="0.2" round lock-scroll
                   close-on-popstate get-container=".reg-cominfo">
          <van-picker :columns="comtype" title="公司类型" show-toolbar
                      @cancel="show_ctype = false" @confirm="onConfirmCtype">
          </van-picker>
        </van-popup>

        <!--   公司类型 住所     -->
        <van-cell title="公司住所" :value="companyArea" required is-link border center @click="show_carea = true"></van-cell>
        <van-popup v-model="show_carea" overlay position="bottom" :duration="0.2" round lock-scroll
                   close-on-popstate get-container=".reg-cominfo">
          <van-area :value="local_area" title="公司住所" swipe-duration="500"
                    :area-list="area" @confirm="onConfirmArea"></van-area>
        </van-popup>

        <van-field v-model="comform.address" label="详细地址" placeholder="请输入详细地址" type="text"
                   maxlength="50" required clearable clear-trigger="always" name="address"
                   :rules="comform_rules.address"/>
        <van-field v-model="comform.phone" label="固定电话" placeholder="请输入固定电话" type="tel"
                   maxlength="18" required clearable clear-trigger="always" name="phone"
                   :rules="comform_rules.phone"/>

        <!--   公司类型 成立日期     -->
        <van-cell title="成立日期" :value="comform.createtime" required is-link border center @click="show_ctime = true"></van-cell>
        <van-popup v-model="show_ctime" overlay position="bottom" :duration="0.2" round lock-scroll
                   close-on-popstate get-container=".reg-cominfo">
          <van-datetime-picker v-model="cur_create" type="date" title="成立日期" show-toolbar :min-date="mindate" :visible-item-count="6" :swipe-duration="500"
                               :max-date="todaydate" @cancel="show_ctime = false" @confirm="onConfirmCtime">
          </van-datetime-picker>
        </van-popup>

        <!--   公司类型 经营期限     -->
        <van-cell title="经营期限" :value="comform.endtime" required is-link border center @click="show_etime = true"></van-cell>
        <van-popup v-model="show_etime" overlay position="bottom" :duration="0.2" round lock-scroll
                   close-on-popstate get-container=".reg-cominfo">
          <van-datetime-picker v-model="cur_end" type="date" title="经营期限" show-toolbar :max-date="maxdate" :visible-item-count="6" :swipe-duration="500"
                               :min-date="todaydate" @cancel="show_ctime = false" @confirm="onConfirmEtime">
          </van-datetime-picker>
        </van-popup>

        <van-field v-model="comform.businessRange" label="业务范围" placeholder="请输入业务范围" type="text"
                   maxlength="120" required clearable clear-trigger="always" name="businessRange"
                   :rules="comform_rules.businessRange"/>
        <van-field v-model="comform.zybusiness" label="主营业务" placeholder="请输入主营业务" type="text"
                   maxlength="120" required clearable clear-trigger="always" name="zybusiness"
                   :rules="comform_rules.zybusiness"/>
        <van-field v-model="comform.registerCompany" label="公司登记机关" placeholder="请输入公司登记机关" type="text"
                   maxlength="30" required clearable clear-trigger="always" name="registerCompany"
                   :rules="comform_rules.registerCompany"/>

        <!--   公司类型 发证日期     -->
        <van-cell title="发证日期" :value="comform.getCarTime" required is-link border center @click="show_gtime = true"></van-cell>
        <van-popup v-model="show_gtime" overlay position="bottom" :duration="0.2" round lock-scroll
                   close-on-popstate get-container=".reg-cominfo">
          <van-datetime-picker v-model="cur_get" type="date" title="发证日期" show-toolbar :min-date="mindate" :visible-item-count="6" :swipe-duration="500"
                               :max-date="todaydate" @cancel="show_gtime = false" @confirm="onConfirmGtime">
          </van-datetime-picker>
        </van-popup>

        <van-cell title="营业执照" :value="upLicense" required is-link border center :to="{ path: '/upidcard', query: {status: 'license'} }" >
        </van-cell>
      </van-cell-group>

      <van-cell-group title="法定代表人信息">
        <van-field v-model="comform.lawname" label="法定代表人" placeholder="法定代表人姓名" type="text"
                   maxlength="15" required clearable clear-trigger="always" name="lawname"
                   :rules="comform_rules.lawname"/>
        <van-cell title="证件类型" value="身份证" required border center />
        <van-field v-model="comform.idCardNum" label="证件号码" placeholder="请输入证件号码" type="text"
                   maxlength="22" required clearable clear-trigger="always" name="idCardNum"
                   :rules="comform_rules.idCardNum"/>
        <van-cell title="证件照片" :value="upPhoto" required is-link border center to="/upidcard" />
        <van-field v-model="comform.mobile" label="手机号码" placeholder="请输入手机号码" type="text"
                   maxlength="18" required clearable clear-trigger="always" name="mobile"
                   :rules="comform_rules.mobile"/>
        <van-field v-model="comform.email" label="电子邮箱" placeholder="请输入电子邮箱" type="text"
                   maxlength="24" required clearable clear-trigger="always" name="email"
                   :rules="comform_rules.email"/>
      </van-cell-group>

      <van-cell-group title="联系人信息">
        <van-cell title="开启联系人?" border center >
          <template #extra>
            <van-switch v-model="comform.isUseContact" active-value="1" inactive-value="0"
                        active-color="#7EB6FF" inactive-color="#ddd" size="25px">
            </van-switch>
          </template>
        </van-cell>

        <template v-if="comform.isUseContact==1">
          <van-field v-model="comform.contactname" label="联系人姓名" placeholder="请输入联系人姓名" type="text"
                     maxlength="15" required clearable clear-trigger="always" name="contactname"
                     :rules="comform_rules.contactname"/>
          <van-cell title="证件类型" value="身份证" required is-link border center />
          <van-field v-model="comform.contactCardNum" label="证件号码" placeholder="请输入证件号码" type="text"
                     maxlength="22" required clearable clear-trigger="always" name="contactCardNum"
                     :rules="comform_rules.contactCardNum"/>
          <van-cell title="证件照片" :value="upPhotoCt" required is-link border center :to="{ path: '/upidcard', query: {status: 'card'} }"  />
          <van-field v-model="comform.contactMobile" label="手机号码" placeholder="请输入手机号码" type="text"
                     maxlength="22" required clearable clear-trigger="always" name="contactMobile"
                     :rules="comform_rules.contactMobile"/>
          <van-field v-model="comform.contactEmail" label="电子邮箱" placeholder="请输入电子邮箱" type="text"
                     maxlength="22" required clearable clear-trigger="always" name="contactEmail"
                     :rules="comform_rules.contactEmail"/>
        </template>

      </van-cell-group>

      <van-cell-group title="公司账户信息">
        <van-field v-model="comform.accountList[0].accountBank" label="开户行" placeholder="请输入开户行"  type="text"
                   maxlength="18" required clearable clear-trigger="always" name="khh"
                   :rules="comform_rules.khh"/>
        <van-field v-model="comform.accountList[0].accountName" label="开户名" placeholder="请输入开户名"  type="text"
                   maxlength="18" required clearable clear-trigger="always" name="accountName"
                   :rules="comform_rules.accountName"/>
        <van-field v-model="comform.accountList[0].account" label="账号" placeholder="请输入账号"  type="number"
                   maxlength="22" required clearable clear-trigger="always" name="account"
                   :rules="comform_rules.account"/>
        <template v-if="comform.accountList.length==2 || comform.accountList.length==3">
          <van-field v-model="comform.accountList[1].accountBank" label="开户行2" placeholder="请输入开户行"  type="text"
                     maxlength="18" required clearable clear-trigger="always" name="khh"
                     :rules="comform_rules.khh"/>
          <van-field v-model="comform.accountList[1].accountName" label="开户名" placeholder="请输入开户名"  type="text"
                     maxlength="18" required clearable clear-trigger="always" name="accountName"
                     :rules="comform_rules.accountName"/>
          <van-field v-model="comform.accountList[1].account" label="账号" placeholder="请输入账号"  type="number"
                     maxlength="22" required clearable clear-trigger="always" name="account"
                     :rules="comform_rules.account"/>
        </template>
        <template v-if="comform.accountList.length==3">
          <van-field v-model="comform.accountList[2].accountBank" label="开户行3" placeholder="请输入开户行"  type="text"
                     maxlength="18" required clearable clear-trigger="always" name="khh"
                     :rules="comform_rules.khh"/>
          <van-field v-model="comform.accountList[2].accountName" label="开户名" placeholder="请输入开户名"  type="text"
                     maxlength="18" required clearable clear-trigger="always" name="accountName"
                     :rules="comform_rules.accountName"/>
          <van-field v-model="comform.accountList[2].account" label="账号" placeholder="请输入账号"  type="number"
                     maxlength="22" required clearable clear-trigger="always" name="account"
                     :rules="comform_rules.account"/>
        </template>

        <van-button v-if="comform.accountList.length!=3"  type="info" size="large" text="+添加更多账户" color="#7EB6FF" @click="onButton"/>
      </van-cell-group>

      <van-cell-group title="代理营销员信息" v-if="showSell">
        <van-field v-model="comform. employeecode" label="营销员工号(选填)"  type="number" maxlength="4"
                   clearable clear-trigger="always" name=" employeecode"/>
      </van-cell-group>
    </van-form>
  </div>
</template>

<script>
import { validIdcard,submitCominfoCoop,getComtype } from 'network/login';
import {SETCD, SETEM, SETRN} from "@/store/mutype";
import area from "common/area"
export default {
  name: "RegCominfo",
  data() {
    return {
      show_ctype: false,   // 是否展示 选公司类型====================
      comtype_text: '',   // 选中时的公司类型文本
      comtype: [],   // 公司类型选项

      show_ctime: false,   // 是否展示 公司成立时间选择器==========================
      maxdate: new Date(2060,0,1),   // 最大日期
      mindate: new Date(1950,0,1),   // 最小日期
      todaydate: new Date(),   // 今天日期
      cur_create: new Date(),   // 默认展示的日期

      show_etime: false,   // 是否展示 公司经营期限选择器==========================
      cur_end: new Date(),   // 默认展示的日期

      show_gtime: false,   // 是否展示 发证日期选择器==========================
      cur_get: new Date(),   // 默认展示的日期


      show_carea: false,   // 是否展示住所============================
      area: area,   // 地区列表================================
      local_area: '',   // 当前选中的地址

      comform: {   // 公司信息表单===========================
        username: '',   // 用户名
        password: '',   // 密码
        userType: '',   // 用户类型
        tel: '',
        msid: '',   // 所选择的秘书公司ID

        employeecode: '',   // 营销员工号

        logoupload: '',   // 公司logo===
        name: '',   // 单位名称
        creditCode: '',   // 统一社会信用代码
        namePY: '',   // 公司名缩写
        capital: '',   // 注册资本
        companytypeid: '',   // 公司类型id
        province: '',   // 省份
        city: '',   // 城市
        area: '',   // 区
        address: '',   // 详细地址
        phone: '',   // 座机
        createtime: '',   // 成立日期
        endtime: '',   // 经营期限
        businessRange: '',   // 业务范围
        zybusiness: '',   // 主营业务
        registerCompany: '',   // 公司登记机关
        getCarTime: '',   // 发证日期
        yyzzupload: '',   // 营业执照上传(图片形式

        logoupload2: '',   // 公司logo   URL（修改时才有）
        yyzzupload2: '',   // 营业执照URL（修改时才有）


        idCardNum: '',   // 法人证件号码==========================================
        lawname: '',   // 法定代表人姓名
        email: '',   // 法人电子邮箱
        idCardUpUrl: '',  // 法人证件正面照片（图片形式）
        idCardDownUrl: '', // 法人证件背面照片（图片形式）
        mobile: '',   // 法人手机号，（启用联系人后才有）
        fridCardzm: '',   // 法人证件正面照片URL（修改时才有）
        fridCardbm: '',   // 法人证件背面照片URL（修改时才有）

        isUseContact: 0,   // 是否启用联系人信息  0  1================================
        contactname: '',   // 联系人姓名
        contactCardNum: '',   //联系人证件号码
        contactidCardzmupload: '',   // 联系人证件正面照片（图片形式）
        contactidCardbmupload: '',   // 联系人证件背面照片（图片形式
        contactMobile: '',  // 联系人手机号
        contactEmail: '',   // 联系人email

        contactfridCardzm: '',   // 联系人证件正面照片URL（修改时才有）
        contactfridCardbm: '',   // 联系人证件背面照片URL（修改时才有）
        //================================================================================
        accountList: [
          {accountBank: '', accountName: '', account: ''}
        ],   // 银行卡集合 [{accountBank: accountBank, accountName: accountName, account: account]



      },
      comform_rules: {   // 表单的校验
        creditCode: [
          {required: true, message: '统一社会信用代码不能为空!'},
          { min: 12, max: 24, message: '姓名12~24位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        name: [
          {required: true, message: '公司名不能为空!'},
          { min: 3, max: 18, message: '公司名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        namePY: [
          {required: true, message: '公司名缩写不能为空!'},
          { min: 3, max: 18, message: '公司名缩写3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        address: [
          {required: true, message: '详细地址不能为空'}
        ],
        capital: [
          {required: true, message: '注册资本不能为空!'},
          { min: 3, max: 18, message: '注册资本3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        phone: [
          {required: true, message: '固定电话不能为空!'},
          // { checkUsername, message: '格式不正确' }
        ],
        endtime: [
          {required: true, message: '经营期限不能为空!'},
          { min: 3, max: 18, message: '经营期限3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        businessRange: [
          {required: true, message: '业务范围不能为空!'},
        ],
        zybusiness: [
          {required: true, message: '主营业务不能为空!'},
        ],
        registerCompany: [
          {required: true, message: '公司登记机关不能为空!'},
        ],
        idCardNum: [
          {required: true, message: '法人证件号码不能为空!'},
          { min: 15, max: 22, message: '证件号码15~22位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        mobile: [
          {required: true, message: '法人手机号不能为空!'},
          { min: 9, max: 18, message: '法人手机号9~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        contactname: [
          {required: true, message: '联系人姓名不能为空!'},
          { min: 3, max: 15, message: '联系人姓名3~15位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        contactCardNum: [
          {required: true, message: '联系人证件号不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        contactMobile: [
          {required: true, message: '联系人电话不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        contactEmail: [
          {required: true, message: '联系人邮箱不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        accountBank: [
          {required: true, message: '开户行不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        accountName: [
          {required: true, message: '开户名不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
        ],
        account: [
          {required: true, message: '银行账号不能为空!'},
          { min: 3, max: 18, message: '姓名3~18位!'},
          // { checkUsername, message: '格式不正确' }
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
    handleNext() {   // 点击了 完成=========================================
      this.comform.logoupload = this.$store.state.reg.logoupload   // 获取logo
      this.comform.yyzzupload = this.$store.state.reg.yyzzupload   // 获取营业执照
      this.comform.idCardUpUrl = this.$store.state.reg.idCardUpUrl
      this.comform.idCardDownUrl = this.$store.state.reg.idCardDownUrl
      if(this.comform.logoupload == '') {
        this.$toast.fail("请上传公司logo!")
        }
      else if(this.comform.yyzzupload == '') {
        this.$toast.fail("请上传公司营业执照")
      }
      else if(this.comform.idCardUpUrl=='' || this.comform.idCardDownUrl=='') {
        this.$toast.fail("请上传身份证照片!")
      }
      else {
        this.$refs.comform_ref.validate().then( () => {
          validIdcard(this.comform.idCardNum).then(res => {   // 验证身份证是否已经被注册
            if(res.valid) {
              submitCominfoCoop(this.comform).then(res => {
                if(res.result==1){
                  this.$store.commit(SETRN,this.comform.realname)
                  this.$store.commit(SETEM,this.comform.email)
                  this.$store.commit(SETCD,this.comform.idCardNum)
                  this.$router.push('/audit')
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

    onConfirmCtype({id, text}) {   // 确定当前公司类型============================
      this.comtype_text = text
      this.comform.companytypeid = id
      this.show_ctype = false
    },
    onConfirmArea([p,c,a]) {   // 确定 公司住所
      this.comform.province = p.name
      this.comform.city = c.name
      this.comform.area = a.name
      this.show_carea = false
    },
    onConfirmCtime(val) {   // 确定 成立日期
      this.comform.createtime = val.toLocaleDateString().replaceAll('/','-')
      this.show_ctime = false
    },
    onConfirmEtime(val) {   // 确定 经营期限
      this.comform.endtime = val.toLocaleDateString().replaceAll('/','-')
      this.show_etime = false
    },
    onConfirmGtime(val) {   // 确定 发证日期
      this.comform.getCarTime = val.toLocaleDateString().replaceAll('/','-')
      this.show_gtime = false
    },

    onButton() {   // 点击添加更多银行账户
      if(this.comform.accountList.length==1) {
        console.log("当前只有一个银行卡")
        this.comform.accountList.push({accountBank: '', accountName: '', account: ''})
      }
      else if(this.comform.accountList.length==2) {
        console.log("当前2张银行卡")
        this.comform.accountList.push({accountBank: '', accountName: '', account: ''})
      }
      else {
        console.log(333)
      }
    },
  },
  computed: {
    upPhoto() {   // 是否上传 法人照片
      if(this.$store.state.reg.idCardUpUrl!='' && this.$store.state.reg.idCardDownUrl!='') return '已上传'
      else return '未上传'
    },
    upPhotoCt() {   // 是否上传 联系人照片
      if(this.$store.state.reg.contactidCardzmupload!='' && this.$store.state.reg.contactidCardbmupload!='') return '已上传'
      else return '未上传'
    },
    upLicense() {
      if(this.$store.state.reg.yyzzupload!='') return '已上传'
      else return '未上传'
    },
    showSell() {
      return this.comform. employeecode != ''
    },
    companyArea() {
      if(this.comform.province){return this.comform.province + '-' + this.comform.city + '-' + this.comform.area}
      else {return ''}

    }
  },
  created() {
    this.comform.tel = this.$store.state.reg.tel
    this.comform. employeecode = this.$store.state.reg.employeecode

    this.comform.username = this.$store.state.reg.username
    this.comform.password = this.$store.state.reg.password
    this.comform.userType = this.$store.state.reg.userType
    this.comform.msid = this.$store.state.reg.comids


    this.comform.logoupload = this.$store.state.reg.logoupload   // 获取logo
    this.comform.yyzzupload = this.$store.state.reg.yyzzupload   // 获取营业执照
    this.comform.idCardUpUrl = this.$store.state.reg.idCardUpUrl   // 获取身份证正面
    this.comform.idCardDownUrl = this.$store.state.reg.idCardDownUrl   // 获取身份证背面
  },
  mounted() {
    getComtype().then(res => {
      this.comtype= res
    })
  },


}
</script>

<style scoped lang="scss">
.reg-cominfo {
  padding-bottom: 50px;
  .van-form {
    margin-top: 10px;
    .van-cell {
      background-color: #ffffff;
    }
    .van-picker {
      background-color: #ee3333;
    }
  }
}
</style>