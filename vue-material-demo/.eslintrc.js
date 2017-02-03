module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "arguments": true,
    "window": true,
    "Promise": true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 必须有结束封号;
    "semi": ["error", "always"],
    // 统一采用单引号
    "quotes": [2, "single"],
    // 使用了未声明的变量，显示错误信息
    "no-undef": [2],
    // 变量与操作符之间出现多个空格，显示提醒信息
    "no-multi-spaces": [1]
  }
}
