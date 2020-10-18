// 风控的所有数据请求
import {tkaxios} from "./request";
import Qs from 'qs'
const root = '/control'


export function getUserMain(obj) {   // 风控获取用户信息
  return tkaxios({
    method: 'post',
    url: root+'/ms/fr/user/main ',
    data: Qs.stringify(obj)
  })
}













































export function getHomeMultidata() {   // why的接口
  return myaxios({
    url: '/home/multidata'
  })
}