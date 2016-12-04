var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/index.js',
    vendor: ['vue']
  },
  dist: './dist',
  clear: true, //clear dist dir
  hash: true,
  sourceMap: true,
  template: './index.html', // load index.html
  devServer: {
    port: 8888,
    publicPath: '/' //开启 dev-server 时默认打包的资源文件路径是和 index.html 同级的
  },
  postcss: [
    require('postcss-salad')
  ],
  extractCSS: true,
  chunk: [
    'vendor', // entry 里定义的入口文件，也就是会将 vue 单独打包
    'manifest' // 这个并没有在 entry 里声明的会将所有公用部分打包，也就是 webpack runtime
  ],
  publicPath: '/dist/', // 打包后的资源文件相对于 url 的路径
  extends: ['vue2', 'lint'] // 安装 cooking-lint 并配置 '.eslintrc' 文件
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();

