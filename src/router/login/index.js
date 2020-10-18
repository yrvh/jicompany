// 登录和注册 功能的前端路由

// 登录注册模块
const Login = () => import('views/login/Login')
const Forget = () => import('views/login/Forget')
const SetPassword = () => import('views/login/SetPassword')
const Playform = () => import('views/login/Platform')
const ChooseIdent = () => import('views/login/ChooseIdent')
const UpIdcard = () => import('views/login/UpIdcard')

// 业者注册模块
const ChooseFree = () => import('views/login/free/ChooseFree')
const RegFreecom = () => import('views/login/free/RegFreecom')
const RegFree = () => import('views/login/free/RegFree')
const RegSecretary = () => import('views/login/free/RegSecretary')
const RegPersonal = () => import('views/login/free/RegPersonal')

// 合作伙伴注册模块
const ChooseCoop = () => import('views/login/coop/ChooseCoop')
const RegCoop = () => import('views/login/coop/RegCoop')
const RegCoopcom = () => import('views/login/coop/RegCoopcom')
const RegCoopContract = () => import('views/login/coop/RegCoopContract')
const RegSecretaryCoop = () => import('views/login/coop/RegSecretaryCoop')
const RegSecretaryCoopcom = () => import('views/login/coop/RegSecretaryCoopcom')
const RegPersonalCoop = () => import('views/login/coop/RegPersonalCoop')
const RegCominfoCoop = () => import('views/login/coop/RegCominfoCoop')

// 单位注册模块
const RegCom = () => import('views/login/company/RegCom')
const RegCominfo = () => import('views/login/company/RegCominfo')
const RegSecretaryCom = () => import('views/login/company/RegSecretaryCom')

// 用户确认信息模块
const Audit = () => import('views/login/audit/Audit')
const CfmPersonal = () => import('views/login/audit/CfmPersonal')
const CfmIndividual = () => import('views/login/audit/CfmIndividual')
const CfmIncome = () => import('views/login/audit/CfmIncome')
const CfmContract = () => import('views/login/audit/CfmContract')

export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/forget',
    component: Forget
  },
  {
    path: '/setpassword',
    component: SetPassword
  },
  {
    path: '/platform',
    component: Playform
  },
  {
    path: '/choose_ident',
    component: ChooseIdent
  },
  {
    path: '/upidcard',
    component: UpIdcard
  },
  // 业者的注册 相关路由====================
  {
    path: '/choose_free',
    component: ChooseFree
  },
  {
    path: '/regfreecom',
    component: RegFreecom
  },
  {
    path: '/regfree',
    component: RegFree
  },
  {
    path: '/reg_secretary',
    component: RegSecretary
  },
  {
    path: '/reg_personal',
    component: RegPersonal
  },
  // 合作伙伴的注册 相关路由==============
  {
    path: '/choose_coop',
    component: ChooseCoop
  },
  {
    path: '/regcoopcom',
    component: RegCoopcom
  },
  {
    path: '/regcoop',
    component: RegCoop
  },
  {
    path: '/regcoop_contract',
    component: RegCoopContract
  },
  {
    path: '/reg_secretarycoop',
    component: RegSecretaryCoop
  },
  {
    path: '/reg_secretarycoopcom',
    component: RegSecretaryCoopcom
  },
  {
    path: '/reg_personalcoop',
    component: RegPersonalCoop
  },
  {
    path: '/reg_cominfocoop',
    component: RegCominfoCoop
  },



  // 单位的注册 相关路由=============================
  {
    path: '/reg_com',
    component: RegCom
  },
  {
    path: '/reg_cominfo',
    component: RegCominfo
  },
  {
    path: '/reg_secretarycom',
    component: RegSecretaryCom
  },

  // 审核之后 确认信息相关路由===============
  {
    path: '/audit',
    component: Audit
  },
  {
    path: '/cfm_personal',
    component: CfmPersonal
  },
  {
    path: '/cfm_individual',
    component: CfmIndividual
  },
  {
    path: '/cfm_income',
    component: CfmIncome
  },
  {
    path: '/cfm_contract',
    component: CfmContract
  },
]

