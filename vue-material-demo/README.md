vue-material-demo
===

01.22
---

## eslint for vue

`npm install eslint-config-vue --save-dev`

暂时不启用

## login

```javascript
router.beforeEach((to, from, next) => {
  /**
   * 1.如果已经登陆，访问的是登陆页面，直接重定向到主页，如果不是则放开
   * 2.如果没有登陆，所有访问重定向到登录页
   */
  console.log(to.path);
  if (store.getters.getIsLogin) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});
```

01.20
---

## alias assets的使用 , URLs prefixed with `~` 

example: `<img src="~assets/logo.png">`


## api proxying

```
// config/index.js
module.exports = {
  // ...
  dev: {
    proxyTable: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

The above example will proxy the request /api/posts/1 to http://jsonplaceholder.typicode.com/posts/1.

> 注意不要用 `localhost`

## update Changelog.vue

use `vue-resource`, `vuex`

## mobile app

https://github.com/alex1504/vue2.0-demo

## 解决左侧菜单不显示问题

参考以上项目，把 `vue-material.css` 放到 `index.html`

01.19
---

## 运行有点问题

tag 2.1

返回 db5f1cc, `git co db5f1cc`

tag 2.2

App.vue 代码有影响

```
<release-version></release-version>
```

01.18
---

## 参考 vue-material doc

before git tag 2.0

```
git tag 2.0
git push origin --tags
```

## move src/asserts/files to /static

2017.01.17
---

## [demo](http://codepen.io/vue-material/pen/WoZpMR)

use [material ui](https://github.com/marcosmoura/vue-material)

```
vue init webpack vue-material-demo
cd vue-material-demo
npm install
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```

`http://localhost:8000`

## roboto-and-material-icons-fonts 本地化问题

```
npm install roboto-fontface --save
npm install material-design-icons --save
npm install sass-loader --save-dev
npm install node-sass --save-dev
```

暂时不采用 `roboto-fontface` 字体有的虚
