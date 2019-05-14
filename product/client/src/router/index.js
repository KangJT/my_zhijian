import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import SwitchTab from '@/views/switchTab'
import Index from '@/views/index'
import Toolbox from '@/views/toolbox/index.vue'
import Mine from '@/views/mine'
import Detail from '@/views/detail'
console.log(Toolbox, 'ss')
Vue.use(Router)
// vue路由按需加载  骨架屏
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/tab',
      name: 'SwitchTab',
      component: SwitchTab,
      children: [
        {
          path: '/toolbox',
          name: 'Toolbox',
          component: Toolbox
        },
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
    {

      path: '/goods/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
