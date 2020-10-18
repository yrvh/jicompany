import axios from 'axios'
import Vue from 'vue'
import https from 'https'

export function myaxios(config) {   // 注册相关接口, 不需要验证token
  // 1 创建axios的实例
  const instance = axios.create({
    // baseURL: urlDns,
    timeout: 5000,
    // httpsAgent: new https.Agent({   // 取消验证ssl证书
    //   rejectUnauthorized: false
    // }),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',   // 设置传输的数据格式text/html   application/x-www-form-urlencoded   application/json
    }
  })
  // 2.1 axios的拦截器,请求时的拦截 (发请求之前的 生命周期函数)
  instance.interceptors.request.use(config => {
    console.log("注册相关接口 请求成功时: 触发的拦截")
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时, 都希望在界面中显示出一个请求的图标
    // 3. 某些网络请求,必须携带一些特殊的信息. (如登录要token 否则让他跳到登录页面)
    return config
  },err => {
    console.log("请求失败失败时: 触发的拦截")
    console.log(err)
  })
  // 2.2 响应时的拦截  (数据返回之前的 生命周期函数)
  instance.interceptors.response.use(res => {
    console.log("响应成功时: 触发的拦截")
    console.log(res)
    return res.data
  }, err => {
    console.log("响应失败时: 触发的拦截")
    console.log(err)
  })

  // 3 发送真正的网络请求
  return instance(config)   // 返回是一个promise对象
}



export function tkaxios(config) {   // 登录之后业务相关, 需要验证token的接口===================================
  // 1 创建axios的实例
  const instance = axios.create({
    // baseURL: urlDns,
    timeout: 5000,
    // httpsAgent: new https.Agent({   // 取消验证ssl证书
    //   rejectUnauthorized: false
    // }),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',   // 设置传输的数据格式text/html   application/x-www-form-urlencoded   application/json
    }
  })
  // 2.1 axios的拦截器,请求时的拦截 (发请求之前的 生命周期函数)
  instance.interceptors.request.use(config => {
    console.log("请求成功时: 触发的拦截")
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时, 都希望在界面中显示出一个请求的图标
    // 3. 某些网络请求,必须携带一些特殊的信息. (如登录要token 否则让他跳到登录页面)
    if(config.istoken){console.log("有tokent");}
    else {
      console.log("不验证token");
    }
    return config
  },err => {
    console.log("请求失败失败时: 触发的拦截")
    console.log(err)
  })
  // 2.2 响应时的拦截  (数据返回之前的 生命周期函数)
  instance.interceptors.response.use(res => {
    console.log("响应成功时: 触发的拦截")
    console.log(res)
    if(res.result==0) {
      console.log("token过期, 强制跳转到登录页");
      // this.$notify({type: "warning", message: "登录验证过期,请重新登录"})
      // this.$router.replace('/login')
    }
    return res.data
  }, err => {
    console.log("响应失败时: 触发的拦截")
    console.log(err)
  })

  // 3 发送真正的网络请求
  return instance(config)   // 返回是一个promise对象
}