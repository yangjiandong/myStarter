import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

//
const First = {template: '<div><h2> My is First</h2></div>'};

new Vue({
  el: '#app',
  render: h => h(App)
})
