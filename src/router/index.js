import Vue from 'vue'
import VueRouter from 'vue-router'

import login from  './login'
import home from './home'

const Home = () => import('views/home/Home')
const Message = () => import('views/message/Message')
const Manager = () => import('views/manager/Manager')
const Mine = () => import('views/mine/Mine')


const GoodsDetail = () => import('views/detail/GoodsDetail')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象==============
const routes = [
  {
    path: '*',   // 当路由没有匹配的组件时,  则跳转到login页面
    redirect: '/main'   // login
  },
  {
    path: '/main',
    component: () => import('views/Main'),
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'message',
        component: Message
      },
      {
        path: 'manager',
        component: Manager
      },
      {
        path: 'mine',
        component: Mine
      },
    ]
  },
  {
    path: '/goodsdetail',
    component: GoodsDetail
  },
  ...login,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 3. 导出
export default router

