/* Root */
const Introduction = require('./pages/Introduction');
const GettingStarted = require('./pages/GettingStarted');
const About = require('./pages/About');
const Changelog = require('./pages/Changelog');
const Error404 = require('./pages/Error');

/* Components */
const Avatar = (resolve) => require(['./pages/components/Avatar'], resolve);

/* UI Elements */

const main = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: GettingStarted
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: Changelog
  }
];

const components = [
  {
    path: '/components',
    name: 'components',
    redirect: '/components/avatar'
  },
  {
    path: '/components/avatar',
    name: 'components:avatar',
    component: Avatar
  }
];

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
];

export default [].concat(main, components, error);
