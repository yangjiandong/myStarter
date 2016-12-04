var cooking = require('cooking');

cooking.set({
  entry: './src/index.js',
  dist: './dist',
  hash: true,
  sourceMap: true
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();

