// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'));
  });
};
//
// const List = resolve => {
//   require.ensure(['./views/list.vue'], () => {
//     resolve(require('./views/list.vue'));
//   });
// };

const routers = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/cnodevue',
  name: 'cnodevue',
  component: Home
}, {
  path: '/login',
  name: 'login',
  component (resolve) {
    require.ensure(['./views/login.vue'], () => {
      resolve(require('./views/login.vue'));
    });
  }
}, {
  path: '*',
  component: Home
}];

export default routers;
