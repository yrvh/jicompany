// 公共的工具类, 公共的方法,

export function sum(a,b) {
  return a + b
}
export function clickLeft(num=null) {
  if(num) this.$router.go(num)
  this.$router.back()
}

// 自定义手机号的 校验规则
export let checkMobile = (value) => {
  const regMobile = /^(0|86|17951)?(13[0-9]|14[5-9]|15[012356789]|166|17[0-9]|18[0-9]|19[8-9])[0-9]{8}$/;
  return regMobile.test(value)
}
// 自定义密码的格式 校验规则
export let checkPwd = (value) => {
  const regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
  return regPwd.test(value)
}
// 自定义用户名的格式 校验规则
export let checkUsername = (value) => {
  const regUsername = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
  return regUsername.test(value)
}