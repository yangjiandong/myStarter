vue.js组件开发和使用规范
===

使用规范
---

使用`:prop` 传递数据类型为数字 或 `boolean`时，必须带 `:`,比如

```
正确的使用方法：
<Page :current=1 :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
```

开发规范
---

## 开发之前

尽量使用最新ES语法，具体如下：

- 正确使用const和let替代var
- 使用模板字符串${this.data}
- 将工具函数等依赖单独分离，并用import导入
- 对象字面量缩写、箭头函数
- 通用工具集可以在utils/assist内扩展
- 在local/routers内测试组件

## 组件

1,命名

- 尽量简单、表意
- export 出的对象是用驼峰命名法，比如 Page 、 ButtonItem
- 如组件需要嵌套使用，子组件命名在父组件后加-item，比如timeline及timeline-item


2,目录

- 组件应在目录 compoents/下，每个组件要有单独的目录，目录命名是用小写，入口文件为index.js，导出组件，再由index.js 暴露给使用者
- 每个组件的文件名当使用小写， 但必须与组件的名称一致，比如 timeline.vue和timeline-item.vue

3,属性

- 必须规定type或者使用validator进行验证
- 如果validator验证为几个值中的一个，则使用utils/assist内的oneOf函数进行验证
- 如果有尺寸的参数size，则只能使用small 、large，默认是适中，可不写

## 事件

1,命名

- 使用on- 为前缀，比如on-change

2,规范

- 使用$emit来对外触发事件，而不用$dispatch和$broadcast
- 嵌套组件之间通信，使用$parent和$children，而不用$emit，避免使用这错误使用自定义事件

经验
----

## vue-router 路由懒加载

对应的组件定义成异步组件：

```
const Foo = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./Foo.vue'], () => {
    resolve(require('./Foo.vue'))
  })
}
or
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
```

javascript 格式规范
----

## [JavaScript 语句后应该加分号么](https://www.zhihu.com/question/20298345)

- Vue.js 的代码全部不带分号
- 一行开头是括号或者方括号的时候加上分号就可以了

