vue mobile app
===

2017.02.06
----------

## 仿照 vue-cnodejs 构建

readme
---

## module

### fastclick

规避移动设备上click事件的延迟响应

### timeago.js

将datetime时间转化成类似于*** 时间前的描述字符串

### moment

JavaScript 日期处理类库

### libs

Alert

## webpack module

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
