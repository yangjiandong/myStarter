import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Home from './components/Home'
import Search from './components/Search'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
    path: '/',
    component: Home,
    // beforeEnter: (to, from, next) => {
    //     // ...
    // }
}, {
    path: '/home',
    component: Home
}, {
    path: '/search',
    component: Search
}]

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    // el: '#app',
    router,
    store,
    ...App
}).$mount('#app');

