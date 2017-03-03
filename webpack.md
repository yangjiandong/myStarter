webpack
===

简介
---

Webpack是当下最热门的前端资源模块化管理和打包工具，它可以将很多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源，还可以将按需加载的模块进行代码分割，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。

下图是官方对Webpack的简介，通过这幅图也不难看出，一些相互依赖的模块文件，会被打包成一个或多个js文件，可以减少HTTP的请求次数。

参考
---

https://vuejs-templates.github.io/webpack/

[gitbook](https://github.com/hzh1990/vuejs-templates)

plugin
----

## html-webpack-plugin

xx
---

CommonJs 是应用在 NodeJs，是一种同步的模块机制。它的写法大致如下：
```
var firstModule = require("firstModule");
//your code...
module.export = anotherModule
```

AMD 的应用场景则是浏览器，异步加载的模块机制。require.js 的写法大致如下
```
define(['firstModule'], function(module){

    //your code...
    return anotherModule
})
```

其实我们单比较写法，就知道 CommonJs 是更为优秀的。它是一种同步的写法，对 Human 友好，而且代码也不会繁琐臃肿。

webpack 是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如 JS（含 JSX）、coffee、样式（含 less/sass）、图片等都作为模块来使用和处理。

我们可以直接使用 require(XXX) 的形式来引入各模块，即使它们可能需要经过编译（比如 JSX 和 sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情，这块我们后续会提到。

其优势主要可以归类为如下几个：

- webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
- 支持模块加载器和插件机制，可对模块灵活定制。特别是我最爱的 babel-loader，有效支持 ES6。
- 能被模块化的不仅仅是 JS 了。
- 可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能。
- 将样式文件和图片等静态资源也可视为模块进行打包。配合 loader 加载器，可以支持 sass，less 等 CSS 预处理器。
- 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转 base64 等。
- 扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。
- 内置有 source map，即使打包在一起依旧方便调试

node 下热加载问题

在ebpack.conf.js中写入
```
watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
}

```

告诉webpack采用poll的方式监听代码，每1000毫秒检测一次代码有没有发生变化

nodemon解决方法
在CLI启动时候加上参数--legacy-watch或-L(简写)，即nodemon -L xxx.js，-L表示的是采用poll的方式监听代码变化。webpack.conf.js中写入

## CoffeeScript, Sass loader

```
npm install style-loader css-loader url-loader babel-loader sass-loader file-loader --save-dev
```

webpack.config.js
```
// webpack.config.js
module.exports = {
    entry: path.join(__dirname, 'src/entry.js'),
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: "./out/",
        filename: 'bundle.js'
    },
    // 新添加的 module 属性
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};
```

## Asset Resolving Rules

URLs prefixed with `~`

example: `<img src="~assets/logo.png">`

## [stack-source-map](https://github.com/chemzqm/stack-source-map)

## [file-load](https://github.com/webpack-contrib/file-loader)

example:

```
require("file-loader?name=js/[hash].script.[ext]!./javascript.js");
// => js/0dcbbaa701328a3c262cfd45869e351f.script.js

require("file-loader?name=html-[hash:6].html!./page.html");
// => html-109fa8.html

require("file-loader?name=[hash]!./flash.txt");
// => c31e9820c001c9c4a86bce33ce43b679

require("file-loader?name=[sha512:hash:base64:7].[ext]!./image.png");
// => gdyb21L.png
// use sha512 hash instead of md5 and with only 7 chars of base64

require("file-loader?name=img-[sha512:hash:base64:7].[ext]!./image.jpg");
// => img-VqzT5ZC.jpg
// use custom name, sha512 hash instead of md5 and with only 7 chars of base64

require("file-loader?name=picture.png!./myself.png");
// => picture.png

require("file-loader?name=[path][name].[ext]?[hash]!./dir/file.png")
// => dir/file.png?e43b20c069c4a01867c31e98cbce33c9
```

