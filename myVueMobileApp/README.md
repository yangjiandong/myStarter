vue mobile app
===

2017.02.06
----------

## 仿照 vue-cnodejs 构建

TODO, 打包发布产品，源码没保护

readme
---

## module

### fastclick

规避移动设备上click事件的延迟响应

### timeago.js

将datetime时间转化成类似于*** 时间前的描述字符串

### moment

JavaScript 日期处理类库

### lodash


### libs

Alert

## webpack 2.x 系列

### ExtractTextPlugin

将样式抽取出来为独立的文件

将require引入的样式嵌入js文件中，有好处也有坏处。好处是减少了请求数，坏处也很明显，就是当你的样式文件很大时，造成编译的js文件也很大。

我们可以使用插件的方式，将样式抽取成独立的文件。使用的插件就是extract-text-webpack-plugin

### CommonsChunkPlugin

```
  //其他配置
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
      minChunks: 3 // 提取至少3个模块共有的部分
    })
  ]
```

### webpack相关模块

```
webpack                               // 用来构建打包程序
webpack-dev-server                    // 开发环境下，设置代理服务器
html-webpack-plugin                   // html 文件编译
url-loader                            // 图片  转化成base64格式
file-loader                           // 字体  将字体文件打包
css-loader                            // css  生成
less                                  // css  预处理器less
less-loader                           // css  预处理器less的webpack插件
style-loader                          // css  插入到style标签
autoprefixer-loader                   // css  浏览器兼容性问题处理
babel-core                            // ES6  代码转换器
babel-loader                          // ES6  代码转换器，webpack插件
babel-plugin-transform-object-assign  // ES6  Object.assign方法做兼容处理
babel-preset-es2015                   // ES6  代码编译成现在浏览器支持的ES5
babel-preset-stage-0                  // ES6  ES7要使用的语法阶段
vue-loader                            // vue  组件编译
babel-helper-vue-jsx-merge-props      // vue  jsx语法编译
babel-plugin-syntax-jsx               // vue  jsx语法编译
babel-plugin-transform-vue-jsx        // vue  jsx语法编译

cross-env                             // 解决跨平台设置NODE_ENV的问题

vue                                   // 构建用户界面的
vue-router                            // 路由
vuex                                  // 组件状态管理

karma                                 // 自动化测试
e2e                                   // 端对端测试
```

# 使用vue2.0+vuex2.0+vue-router2.0重构的卖座网

## vue2.0参考资料

> 官方文档http://vuejs.org/guide/ 中文翻译http://vuefe.cn/

> vue-router2文档 http://router.vuejs.org/zh-cn/index.html

> vuex2.0文档 http://vuex.vuejs.org/en/index.html

> vue-resourece https://github.com/vuejs/vue-resource

> 滑动广告插件 https://github.com/surmon-china/vue-awesome-swiper

##演示效果
![](../vue卖座网.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
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
