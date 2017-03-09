EmacScript6
===

tip
---

## [string 模板](http://localhost:8095/#docs/string)

```
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

## this 理解

```
var a = 10;
var obj = {
    a: 20
}

function fn () {
    console.log(this.a);
}

fn(); // 10
fn.call(obj); // 20
```

## 箭头函数

```
() => `aa` // return aa
or
() => {
    test()
    other()
}
```

## 延伸操作符

允许我们将一个数组想分开的参数那样传递给一个函数

```
var someArray = ["a","b","c"];
console.log(...someArray);
```
