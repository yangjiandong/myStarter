node.js && vue begin
===

node
---

要求 node 6.x

## 配置 npm 源

npmrc 设置，主要采用 `registry.npm.taobao.org` or `r.cnpmjs.org`

[在中国，安装 & 升级 npm 依赖的正确方法](https://sebastianblade.com/the-truly-way-to-install-upgrade-npm-dependency-in-china/)

.npmrc
```
registry = https://r.cnpmjs.org
strict-ssl=false

## https://registry.npm.taobao.org/
# chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver
chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver # chromedriver 二进制包镜像

operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver # operadriver 二进制包镜像
phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs # phantomjs 二进制包镜像
fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents # fsevents 二进制包
sass_binary_site http://cdn.npm.taobao.org/dist/node-sass # node-sass 二进制包镜像
electron_mirror http://cdn.npm.taobao.org/dist/electron/ # electron 二进制包镜像
# ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
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



