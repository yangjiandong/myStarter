vue tips
===

[参考](https://gold.xitu.io/entry/5775d1b76be3ff006af364a7)

指令keep-alive
---

在看demo的时候看到在vue-router写着keep-alive，keep-alive的含义：

如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个keep-alive指令

```
<component :is="curremtView" keep-alive=""></component>
```

如何让css只在当前组件中起作用
---

在每一个vue组件中都可以定义各自的css，js，如果想写的css只对当前组件起作用，则在style中写入scoped，即：
```
<style scoped></style>
```

vuejs循环插入图片
---

在写循环的时候，写入如下代码：
```
<div v-for="item in items">   
    <img src="{{item.image}}">
</div>
```

此时在控制台会出现警告
```
[Vue Warn]: src="{{item.image}}": interpolation in "src" attribute will cause a 404 request. Use v-bind:src instead.
```
这里意思是在“src”属性插值将导致404请求。使用v-绑定：src代替。
所以替换成如下：
```
<div v-for="item in items">   
    <img v-bind:src="item.image">
</div>
```

这里需要主要，v-bind在写的时候不能再用{{}}，根据官方的说法：
```
<a v-bind:href="url"></a>
```

这里 href 是参数，它告诉 v-bind 指令将元素的 href 特性跟表达式 url 的值绑定。可能你已注意到可以用特性插值 href="{{url}}" 获得同样的结果：这样没错，并且实际上在内部特性插值会转为 v-bind 绑定。


