import {
  SETBD,
  SETFID,
  SETFT,
  SETISH,
  SETPWD,
  SETRN,
  SETTEL,
  SETUN,
  SETUT,
  SETCD,
  SETEM,
  SETSN,
  SETHT,
  SETHM,
  SETMS,
  SETLG,
  SETLC,
  SETCF,
  SETCB,
  LOGIN, SETMEM,
} from './mutype'

export default {
  // 注册
  [SETUT](state,val) {
    state.reg.userType = val
  },
  [SETUN](state,val) {
    state.reg.username = val
  },
  [SETPWD](state,val) {
    state.reg.password = val
  },
  [SETRN](state,val) {
    state.reg.realname = val
  },
  [SETTEL](state,val) {
    state.reg.tel = val
  },
  [SETISH](state,val) {
    state.reg.type = val
  },
  [SETFID](state,val) {
    state.reg.comids = val
  },
  [SETFT](state,val) {
    state.reg.idCardUpUrl = val
  },
  [SETBD](state,val) {
    state.reg.idCardDownUrl = val
  },
  [SETEM](state,val) {
    state.reg.email = val
  },
  [SETCD](state,val) {
    state.reg.idCardNum = val
  },
  [SETSN](state,val) {
    state.reg.employeecode = val
  },
  [SETHT](state,val) {
    state.reg.hhrtype = val
  },
  [SETHM](state,val) {
    state.reg. hhr_ms_xieyiID = val
  },
  [SETMS](state,val) {
    state.reg.yz_ms_xieyiID = val
  },


  [SETLG](state,val) {
    state.reg.logoupload = val
  },
  [SETLC](state,val) {
    state.reg.yyzzupload = val
  },
  [SETCF](state,val) {
    state.reg.contactidCardzmupload = val
  },
  [SETCB](state,val) {
    state.reg.contactidCardbmupload = val
  },

  // 记住密码
  [SETMEM](state,payload) {
    state.memory.push(payload)
  },
  // 登录
  [LOGIN](state,payload) {
    state.login = payload
  }

}