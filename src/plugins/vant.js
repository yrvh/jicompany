import Vue from 'vue'

import {
  Button, Swipe, SwipeItem, Lazyload, NavBar, Tab, Tabs,
  Cell, CellGroup, Search, Popup, Icon, Collapse, CollapseItem,
  Tag, List, PullRefresh, Image, Form, Field, Checkbox, CheckboxGroup,
  Notify, Toast, CountDown, Empty, DropdownMenu, DropdownItem, Uploader,
  Step, Steps, Dialog, Switch, Picker, DatetimePicker, Area, Card, Stepper,
  GoodsAction, GoodsActionIcon, GoodsActionButton, Radio
} from 'vant'

// 该数组每一项 用Vue.use() 来注册成为组件
const components_arr = [
  Button,Swipe,SwipeItem,Lazyload,NavBar,Tab,Tabs,
  Cell,CellGroup,Search,Popup,Icon,Collapse,CollapseItem,
  Tag, List, PullRefresh, Image, Form, Field, Checkbox, CheckboxGroup,
  CountDown, Empty, DropdownMenu, DropdownItem, Uploader,
  Step, Steps, Dialog, Switch, Picker, DatetimePicker, Area, Card, Stepper,
  GoodsAction, GoodsActionIcon, GoodsActionButton, Radio
]

components_arr.forEach( (item,index) => {
  Vue.use(item)
})



// 挂载到Vue原型链上,   相当于给Vue添加类属性或者类方法
Vue.prototype.$notify = Notify
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

