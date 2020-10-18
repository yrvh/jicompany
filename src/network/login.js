// 登录和注册 的所有网络请求
import {myaxios} from "./request";
import Qs from 'qs'

const root = '/hyt'
// 请求登录的函数, 获取用户信息
export function loginHyt(account,password) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/login",
    // transformRequest: [ data => {
    //   return this.$Qs.stringify(data)
    // }],
    data: Qs.stringify({
      tel: account,
      password: password
    })
  })
}

// 忘记密码模块: 获取验证码=========================================================
export function getVerifyForget(tel) {
  return myaxios({
    method: 'post',
    url: root + "/getMsm_findps_app",//  getMsm_app2getMsm_app2
    data: Qs.stringify({
      tel
      // pass_app: window.localStorage.getItem("password17078259505"),
      // tel_app: window.localStorage.getItem("account17078259505"),
      // code_app: window.localStorage.getItem("token_check")
    })
  })
}
// 忘记密码模块: 核查验证码
export function checkVerifyForget(telcode,validateCode) {
  return myaxios({
    // headers: {
    //   'Content-Type':'application/json; charset=utf-8 ',   // 设置传输的数据格式text/html   application/x-www-form-urlencoded   application/json
    // },
    method: 'post',
    url: root + "/check_code_app",
    data: Qs.stringify({
      telcode,
      validateCode
    })
  })
}
// 忘记密码模块: 重置密码
export function resetPassword(tel ,password) {
  return myaxios({
    method: 'post',
    url: root + "/findpassword_app",
    data: Qs.stringify({
      tel,
      password
    })
  })
}

// ==================== 自行注册相关 =============================
// 平台协议模块:  获取协议内容
export function getPlatform() {
  return myaxios({
    method: 'post',
    url: root + "/user_app/get_pt_xy",
  })
}

// 获取验证码
export function getVerifyReg(tel) {
  return myaxios({
    method: 'post',
    url: root + "/getMsm_app",
    data: Qs.stringify({
      tel
    })
  })
}

// 点击下一步:  提交 手机号 用户名 验证码,  进行注册
export function submitNextReg(tel,username,telcode, validateCode) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/isExits",
    data: Qs.stringify({
      tel,
      username,
      telcode,
      validateCode
    })
  })
}
// 业者: 搜索服务的单位
export function searchComReg(name='',type) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/yz/comlist",
    data: Qs.stringify({
      name,
      type
    })
  })
}
// 完善个人信息验证 身份证是否被注册
export function validIdcard(idcard) {
  return myaxios({
    method: 'post',
    url: root + "/share/checkIdCard_dl",
    data: Qs.stringify({
      idcard
    })
  })
}

// 业者新用户 提交个人信息的请求
export function submitFreeinfo(obj) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/yz/add",
    data: Qs.stringify(obj)
  })
}

// 请求 业者与商秘公司的协议
export function getSecretary(id) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/yz/showXY",
    data: Qs.stringify({
      comid: id
    })
  })
}
// 用户下载 业者与商秘公司的协议
export function downSecretary(url) {
  return myaxios({
    method: 'get',
    url: root + url
  })
}




// ==================== 伙伴自行注册相关 =============================
// 搜索商秘公司
export function searchComCoop() {
  return myaxios({
    method: 'post',
    url: root + "/user_app/hhr/comlist"
  })
}
// 获取个人合作伙伴相关协议
export function getContractCoop(id) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/hhr/showXY",
    data: Qs.stringify({
      comid: id
    })
  })
}
// 获取企业合作伙伴相关协议
export function getContractCoopcom(id) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/hhr/showXY",
    data: Qs.stringify({
      comid: id
    })
  })
}

// 个人合作伙伴 新用户 提交个人信息的请求
export function submitCoopinfo(obj) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/hhr/add",
    data: Qs.stringify(obj)
  })
}
// 获取公司类型
export function getComtype() {
  return myaxios({
    method: 'post',
    url: root + "/api/reg_dl/sf/get_company_type",
  })
}

// 企业合作伙伴 新用户 提交企业信息的请求
export function submitCominfoCoop(obj) {
  console.log(obj)
  return myaxios({
    method: 'post',
    url: root + "/user_app/hhr_dw/add",
    data: Qs.stringify(obj)
  })
}



























// var formData = new FormData();
// formData.append("pworkmassesList", JSON.stringify(arr));
// formData.append("account",this.account);



