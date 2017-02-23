Todo
===

TODO
---

## webapck

webpack 下 vue2 怎么优雅调试 css

## css,vue 调试

[Webpack sourcemap](https://segmentfault.com/a/1190000004280859):

- `#eval-source-map` : 这个就是把 eval 的 sourceURL 换成了完整 souremap 信息的 DataUrl
- or `#cheap-module-eval-source-map` : 不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的。
- [Stack-source-map](https://github.com/chemzqm/stack-source-map),Attamp to make error stack works with source-map in browser, only Chrome supportted yet.
- [解决生产环境下Debug](https://blog.sentry.io/2015/10/29/debuggable-javascript-with-source-maps.html)

  ```
  /# sourceMappingURL: http://company.intranet/app/static/app.min.js.map
  ```

## dev 测试数据

## eslint, jsbeautify format 支持

### sbt3

感觉比较流畅，format 采用 jsbeautify，目前的问题是格式化后删除了所有空行，没有保留 `function ()` 空格

### vim

没有sbt3 流畅，暂时没采用jsbeautify 格式化

### webstorm

## axios

- 自定义属性

## javascript 工具库

- timeage 时间支持库，比如显示`x 小时前`
- autoprefixer
- chalk 字符处理 比如显示颜色样式

参考起步项目
---

# vue

## mobile webapp

### 基于 vue.js 重写 Cnodejs.org 社区的 webapp

- [gitbub](https://github.com/shinygang/Vue-cnodejs)

  基于 `vue2` ，可参考用于构建 mobile app

### 重构的卖座网

- [gitbub](https://github.com/zhengguorong/maizuo/tree/master/vuexMaizuo2)

### vux

结合微信 ui

Mobile web UI Components based on Vue and WeUI. Be Cool with Vue & WeUI. (https://vux.li/)

- [gitbub](https://github.com/airyland/vux)

## blog

[github](https://github.com/jcc/blog)

Laravel and Vue.js。可以看看，界面

## ui

### vue-material

[github](https://github.com/marcosmoura/vue-material)

google material 风格

example:

use douban api, https://github.com/alex1504/vue2.0-demo

### Element ui

饿了吗 web 前端

A Vue.js 2.0 UI Toolkit for Web (http://element.eleme.io/)

- [gitbub](https://github.com/ElemeFE/element)

### mint-ui

Mobile UI elements for Vue.js http://mint-ui.github.io/#!/en

- [gitbub](https://github.com/ElemeFE/mint-ui/)

## Admin

### adminLTE

- [github](https://github.com/liujians/vue-adminLte-vue-router)

在原有 adminLTE 的基础上采用了 vue

### vue-bulma

轻量级高性能 MVVM Admin UI 框架

- [github](https://github.com/wangxg2016/vue-bulma)

### 基于 vue.js 重写 Cnodejs.org 社区的 webapp

- [github](https://github.com/shinygang/Vue-cnodejs)

## mobile

### elemnt 饿了么

- [github](https://github.com/liangxiaojuan/eleme)

## weixin

### vue-wechat

[github](https://github.com/useryangtao/vue-wechat)

但采用了 1.0

### vue-weui

[github](https://github.com/adcentury/vue-weui)

但采用了 1.0

# React

## ANT Design

[github](https://github.com/ant-design/ant-design)

## ANT Design Mobile

[github](https://github.com/ant-design/ant-design-mobile)

更新 Vue.js from 1.x to 2.0
---

项目升级更新详情：https://github.com/liuzhenangel/v2ex_frontend/commit/8bc0a8d87728e9e08f9207ebe0ff6e806cc704f2

第一步，安装 vue-migration-helper 工具。

```
# install
npm install --global git://github.com/vuejs/vue-migration-helper.git

# navigate to a Vue 1.x project directory
cd path/to/my-vue-project

# scan all files in the current directory
vue-migration-helper
# scan all files in specific sub-directories
vue-migration-helper src folder-a folder-b
```

第二步，根据提示信息修改文件中对应的地方。

12.04
---

## 找到合适的开发框架

- cooking

暂时还是按 webpack 管理

2016.12.02
---

## Admin

### adminLTE

- [gitbub](https://github.com/liujians/vue-adminLte-vue-router)

### vue-bulma

轻量级高性能 MVVM Admin UI 框架

- [gitbub](https://github.com/wangxg2016/vue-bulma)

### other bulma

Vue Admin Panel Framework, Powered by Vue 2.0 and Bulma 0.2

- [github](https://github.com/vue-bulma/vue-admin)

## webapp

### tong2-family 基于 vue、vuex、vue-router、echarts 的数据可视化展示平台

> 使用 vue2.0、vuex、vue-router2.0、echarts 搭建的一个数据展示平台
不支持 IE8 及其以下版本，单页面应用
对华科电信大二学生的做了一些调查，对调查结果进行可视化展示，同时分析了通信 1502 班的群聊记录，得到班级群聊活跃度等信息？

- [github](https://github.com/hieeyh/tong2-family)

## daza

php 开发的 webapi，提供 web，android，ios，web 前端采用 vue(1.0)

- [daza-frontend](https://github.com/lijy91/daza-frontend)

## table

### vue-table

data table simplify! -- vuetable is a Vue.js component that will automatically request (JSON) data from the server and display them nicely in html table with swappable/extensible pagination component.

- [gitbub](https://github.com/ratiw/vue-table)

## tree

