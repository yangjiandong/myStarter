node.js && vue begin
===

包括但不限于基于 Node.js 的前端工程化方案；诸如 Webpack、Rollup 这样的打包工具；Babel、PostCSS 这样的转译工具；TypeScript、Elm 这样转译至 JavaScript 的编程语言；React、Angular、Vue 这样面向现代 Web 应用需求的前端框架及其生态，也涌现出了像同构 JavaScript 与通用 JavaScript 应用这样将服务器端渲染（Server-side Rendering）与单页面应用模型（Single-page App）结合的 Web 应用架构方式，可以说是百花齐放。

node
---

要求 node 6.x

## 配置 npm 源

npmrc 设置，主要采用 `registry.npm.taobao.org` or `r.cnpmjs.org`

[在中国，安装 & 升级 npm 依赖的正确方法](https://sebastianblade.com/the-truly-way-to-install-upgrade-npm-dependency-in-china/)

```
$ npm set registry https://registry.npm.taobao.org # 注册模块镜像
$ npm set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
$ npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver # chromedriver 二进制包镜像
$ npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver # operadriver 二进制包镜像
$ npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs # phantomjs 二进制包镜像
$ npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents # fsevents 二进制包
$ npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass # node-sass 二进制包镜像
$ npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/ # electron 二进制包镜像

$ npm cache clean # 清空缓存
```

or update .npmrc
```
## https://registry.npm.taobao.org/
registry = https://r.cnpmjs.org
strict-ssl=false
fse_binary_host_mirror=http://npm.taobao.org/mirrors/fsevents # fsevents 二进制包
chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
operadriver_cdnurl=http://cdn.npm.taobao.org/dist/operadriver
phantomjs_cdnurl=http://cdn.npm.taobao.org/dist/phantomjs
sass_binary_site=http://cdn.npm.taobao.org/dist/node-sass
electron_mirror=http://cdn.npm.taobao.org/dist/electron/
disturl=https://npm.taobao.org/dist
```

vue
---

## 安装项目搭建脚手架

```
npm install -g vue-cli
```

## 开始

[参考 vue-webpack](https://vuejs-templates.github.io/webpack/)

```
vue init webpack my-webpack-simple-demo
```

项目目录结构

```
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```
##  参考入门示例

- [vue js 入门到进阶 SPA 应用开发](https://my.oschina.net/fellowtraveler/blog/760728)

## vue 基本规范

vue-stand.md




