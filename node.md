node
===

npm libs
---

## devDependencies vs dependencies

它们真正的区别是，devDependencies 下列出的模块，是我们开发时用的，比如 grunt-contrib-uglify，我们用它混淆 js 文件，它们不会被部署到生产环境。dependencies 下的模块，则是我们生产环境中需要的依赖。

## Karma

是一个简单的 javascript 测试工具，它允许在多个真正的浏览器执行 JavaScript

## chalk

log tool

## autoprefixer

Autoprefixer 解析 CSS 文件并且添加浏览器前缀到 CSS 规则里

```
a{
     transition :transform 1s
}
//Autoprefixer 使用一个数据库根据当前浏览器的普及度以及属性支持提供给你前缀
a{
     -webkit-transition :-webkit-transform 1s;
     transition :-ms-transform 1s;
     transition :transform 1s
}
```

## eventsource-polyfill

事件推送

## extract-text-webpack-plugin

希望样式通过`<link>`引入，而不是放在`<style>`标签内

## http-proxy-middleware

前端代理

```
# 添加配置
import proxy from 'http-proxy-middleware';

const apiProxy = proxy('/api/v1', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    ws: true
});
browserSync({
  server: {
    baseDir: 'src',

    middleware: [
      apiProxy,
      ...
    ]
  }
})
```

## semver

它是 语义化版本（Semantic Versioning）规范 的一个实现，目前是由 npm 的团队维护的，实现了版本和版本范围的解析、计算、比较

## opn

Opens stuff like websites, files, executables. Cross-platform.

npm
---

```
--dev-save
```

当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下 npm install module-name），然后连同版本号手动将他们添加到模块配置文件 package.json 中的依赖里（dependencies）。

- -save 和 save-dev 可以省掉你手动修改 package.json 文件的步骤。
- pm install module-name -save 自动把模块和版本号添加到 dependencies 部分
- pm install module-name -save-dve 自动把模块和版本号添加到 devdependencies 部

package.json
---

版本 `^` 表示什么

简单说明
```
^1.2.3 := >=1.2.3-0 <2.0.0-0
```

cooking
---

cooking 是一个基于 webpack 但是提供更简单的配置项，同时内置了许多常用配置的构建工具。同时搭配命行工具可以将常用开发环境的依赖 (devDependencies) 安装全局，并且提供的脚手架功能能快速搭建基于 Vue 或 React 的项目。

```
npm install cooking -g
```

Upgrading to the latest LTS version
---

```
sudo npm cache clean -f
sudo npm install -g n
sudo PROJECT_NAME="node" PROJECT_URL="https://npm.taobao.org/mirrors/node/" n project stable

? PROJECT_NAME="io" PROJECT_URL="https://npm.taobao.org/mirrors/iojs/" n project stable
? 然后就可以开始升级了：自动安装到最新的稳定版本命令是 n stable，自由选择版本安装是 n 4.4.0（版本号）
备注：升级前后可先使用 node -v 查看版本。查看所有 node 版本是 n ls
```

## Upgrading npm

```
sudo npm install npm@latest -g
```

npmrc 设置
---

[在中国，安装 & 升级 npm 依赖的正确方法](https://sebastianblade.com/the-truly-way-to-install-upgrade-npm-dependency-in-china/)

chromedriver

.npmrc
```
registry = https://r.cnpmjs.org
## https://registry.npm.taobao.org/
chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver
chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver # chromedriver 二进制包镜像

operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver # operadriver 二进制包镜像
phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs # phantomjs 二进制包镜像
fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents # fsevents 二进制包
sass_binary_site http://cdn.npm.taobao.org/dist/node-sass # node-sass 二进制包镜像
electron_mirror http://cdn.npm.taobao.org/dist/electron/ # electron 二进制包镜像
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
```


## phantomjs

```
PHANTOMJS_CDNURL=https://npm.taobao.org/dist/phantomjs npm install phantomjs --registry=https://registry.npm.taobao.org --no-proxy
```

or download (http://cdn.npm.taobao.org/dist/phantomjs/phantomjs-2.1.1-macosx.zip), and link to path(~/bin)
```
ln -s ~/workspace/vuejs/phantomjs-2.1.1-macosx/bin/phantomjs ./phantomjs
```

## node-sass

```
cnpm install node-sass
```

cnpm
---

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

Cordova 打包
---

## 打包发布后不显示

app/config/index.js
```
assetsPublicPath: '',
```

app/build/webpack.prod.conf.js
```
有可能不需要改
vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: false
    })
  },
```

Q&A
---

## error in enoent no such file or directory node-sass/vendor

重新安装 node-sass，并且推荐 `cnpm`

```
cnpm i node-sass
```

## import (ES6) or require() (Node) 

ES6 语法

## webpack load 次序

```
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
```

Loaders are processed in reverse array order. That means css-loader will run before style-loader.

从右到左


