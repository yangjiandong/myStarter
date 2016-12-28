import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'

import MComponent from './components/myComponent'

// 注意次序
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)
//
Vue.component('my-component', MComponent)

// 参考 https://github.com/ElemeFE/element-dashboard
const router = new VueRouter({
  mode: 'history',
  // base: '/',
  routes: routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  ...App
})
