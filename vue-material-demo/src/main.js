import Vue from 'vue';
import VueRouter from 'vue-router';

// configs
import './config.js';
import routes from './routes.js';
import App from './App';

// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'roboto-fontface/css/roboto/sass/roboto-fontface-light-italic.scss'
// import 'roboto-fontface/css/roboto/sass/roboto-fontface-light.scss'
import 'material-design-icons/iconfont/material-icons.css';
import 'vue-material/dist/vue-material.css';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
});

let Main = Vue.component('app', App);
let handleSectionTheme = (currentRoute) => {
  let theme = 'default';
  let name = currentRoute.name;

  if (name) {
    if (name === 'getting-started') {
      theme = 'indigo';
    } else if (name.indexOf('themes') >= 0) {
      theme = 'cyan';
    } else if (name.indexOf('ui-elements') >= 0) {
      theme = 'purple';
    } else if (name === 'changelog') {
      theme = 'orange';
    } else if (name === 'about') {
      theme = 'green';
    } else if (name === 'error') {
      theme = 'red';
    }
  }

  Vue.material.setCurrentTheme(theme);
};

Main = new Main({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Main.closeSidenav();

    next();
  });
});

router.afterEach((to) => {
  handleSectionTheme(to);
});
