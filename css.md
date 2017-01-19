css
===

sass
---

一种缩进语法

sass 是Haml的一部分，Haml 是一种预处理器，由 Ruby 开发者设计和开发。因为这样，Sass 使用类似 Ruby的语法，没有花括号，没有分号，具有严格的缩进


## vue中使用sass-loader后括号分行就报错

```
<style lang="sass" scoped >
$vueColor: #42b983;
h1 { 
  color: $vueColor;
}
</style>
```

以上代码报
```
Invalid CSS after "section {": expected "}", was "{"
...
```

把代码改成｛｝在同一行（如下形式）报错就消失了
```
<style lang="sass" scoped >
$vueColor: #42b983;
h1 { color: $vueColor;}
</style>
```

解决
- sass 可以不用'{}'的啊，我记得 只有文件名了.sass的时候 要加{}
- 改成lang="scss"解决了
```
<style lang="scss" scoped >
$vueColor: #42b983;
h1 { color: $vueColor;}
</style>
```

scss
---

SCSS 是完全和 CSS 兼容的

less
---

stylus
---

postcss
---

