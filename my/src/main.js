import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

Vue.config.debug = process.env.NODE_ENV !== 'production';

Vue.use(VueRouter);
Vue.use(VueResource);

//component
const First = {template: '<div><h2>我是第一个子页面</h2></div>'};
import secondcomponent from './component/secondcomponent.vue'

//创建路由
const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes:[
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

//start app
const app = new Vue({
  router: router,
  render: h=>h(App)
}).$mount('#app')

/*new Vue({*/
  //el: '#app',
  //render: h => h(App)
/*})*/
