// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import './assets/css/reset.css'
import icons from './plugins/icons'
// 适配问题
import 'lib-flexible/flexible'
import components from '@/components/index.js'
// 全局引入过滤器
import filter from './plugins/filter'
// 全局导入过滤器
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
Vue.config.productionTip = false
Vue.use(icons)
Vue.use(components)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
