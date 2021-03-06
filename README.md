Vue Starter
===

lookup port in mac
---

```
lsof -n -Pl|grep :8000
```

Gaining insight on TCP traffic

```
lsof -itcp
or
netstat -anptcp
```

vue-axios-github
----

一个项目学会前端实现登录拦截

myVueMobileApp
---

仿造 vue-cnodejs

vue-material-douban
---

[github](https://github.com/alex1504/vue2.0-demo)

use vue-material, api is douban, mobile app

vue-material
---

use [material ui](https://github.com/marcosmoura/vue-material)

```
vue init webpack vue-material-demo
cd vue-material-demo
npm install
npm run dev
```

continue, by http://codingthesmartway.com/using-material-design-with-vue-js-2/
```
npm install --save vue-material
```

alias assets 的使用 , URLs prefixed with `~` , example: `<img src="~assets/logo.png">`

## api proxying

```angular2html
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

vue-tutorial
---

重写 [vue-tutorail](https://github.com/keepfool/vue-tutorials) 原有基于 1.x

vue2new
---

- [介绍](http://www.jianshu.com/p/fb758398268a)
- [src](https://code.csdn.net/Kevin_QQ/vue-tutorial/tree/master)

multiple-pages-vue
---

## multiple pages

- [github](https://github.com/cooking-demo/multiple-pages-vue)

my-vue
---

## 采用 cooking 构建，[参考](https://gold.xitu.io/entry/57d4c2130bd1d00058453ac4)

```
mkdir my-vue
cd my-vue
npm init
npm i cooking@next -D #i 是 install 的简写，－D 是 --dev-save 的简写

npm install babel-core babel-loader css-loader file-loader postcss postcss-loader\
 html-loader html-webpack-plugin json-loader style-loader url-loader\
 webpack@beta webpack-dev-server@beta extract-text-webpack-plugin@beta -D

npminstall babel-preset-es2015 -D
# 手工安装到下一步报错，只能完全参考 github 项目
npm run cooking build -- -p
```

需调整 webpack 版本，主要参考 [github](https://github.com/cooking-demo/simple)

continue
```
# install vue
npm i vue@next -S
```


webstorm
---

- [参考](http://www.jianshu.com/p/ab778fde3b99)
- plugin: download/

example
```
vue init webapck-simple vue2new
# create dir vue2new
```

目录结构对照 Python Web 开发，其实就是：
```
|- node_modules/ -> venv/ 虚拟环境
|- package.json -> requirements.txt
|- src/main.js -> init.py
|- src/App.vue -> /templates/base.html
```
## cooknt

对 js 的语法检查还是比较严格

package.json
```
"devDependencies":
"cooking-lint": "^0.1.2",
```
cooking.conf.js
```
extends: ['vue2'] //, 'lint'] 安装 cooking-lint 并配置 '.eslintrc' 文件
```

暂时取消

Element
---

- element
- 2016.12.13, update element to 1.0.6

Vue2.0 新手完全填坑攻略—从环境搭建到发布
---

- my
- [参考](https://segmentfault.com/a/1190000007124470)
- use Element
```
cnpm install element-ui@next -S
cnpm install style-loader --save-dev
cnpm install css-loader --save-dev
cnpm install file-loader --save-dev
```


