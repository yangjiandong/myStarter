css
===

sass
---

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

less
---

stylus
---

postcss
---

