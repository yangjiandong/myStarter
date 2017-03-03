webstorm
====

for vue
----

采用了 [ AirBNB Eslint](http://airbnb.io/javascript/)

##  将 JS 的解析引擎从 ES5 改成 ES6

```
Settings > Languages & Frameworks > Javascript
选中 ECMAScript6，不要勾选 Prefer Strict mode
```

## 设置对象前后括号加空格

example:

```
const obj = { a: 1, b: 2 };
```

这样，在对象的花括号里面要加空格，要勾选这个选项：

```
Settings > Editor > Code Style > Javascript > Spaces > Within > Object literal braces
```

## 设置对象或数组的每一个元素后面强制加逗号，包括最后一个

```
const obj = {
  a: 1,
  b: 2,
};
```

这种情况，b: 2, 这行，末尾的逗号是必须的，这也是 AirBNB 的规则，但是 WebStorm 不认，我们也要配上。

这次不需要进选项页，只需要找到一个高亮提示错误的地方，然后左边会出现一个灯泡，点击过去之后选择 Disable Inspection 即可。

## 修改一些实在不便的 ESLint 配置

```
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': ["error", {
      allow: ['log', 'warn', 'error']
    }],
    'no-unused-vars': ["warn", { "args": "none" }],
    'no-param-reassign': ["error", { "props": false }],
    'newline-per-chained-call': ["error", { "ignoreChainWithDepth": 10 }],
  }
}
```

