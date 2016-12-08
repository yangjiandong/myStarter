Vue Starter
===

webstorm
---

- [参考](http://www.jianshu.com/p/ab778fde3b99)
- plugin: download/

example
```
vue init webapck-simple vue2new
# create dir vue2new
```

目录结构对照 Python Web 开发，其实就是：
```
|- node_modules/ -> venv/ 虚拟环境
|- package.json -> requirements.txt
|- src/main.js -> init.py
|- src/App.vue -> /templates/base.html
```

vue2new
---

- [介绍](http://www.jianshu.com/p/fb758398268a)
- [src](https://code.csdn.net/Kevin_QQ/vue-tutorial/tree/master)

multiple-pages-vue
---

## multiple pages

- [github](https://github.com/cooking-demo/multiple-pages-vue)

my-vue
---

## 采用 cooking 构建，[参考](https://gold.xitu.io/entry/57d4c2130bd1d00058453ac4)

```
mkdir my-vue
cd my-vue
npm init
npm i cooking@next -D #i 是 install 的简写，－D 是 --dev-save 的简写

npm install babel-core babel-loader css-loader file-loader postcss postcss-loader\
 html-loader html-webpack-plugin json-loader style-loader url-loader\
 webpack@beta webpack-dev-server@beta extract-text-webpack-plugin@beta -D

npminstall babel-preset-es2015 -D
# 手工安装到下一步报错，只能完全参考 github 项目
npm run cooking build -- -p
```

需调整 webpack 版本，主要参考 [github](https://github.com/cooking-demo/simple)

continue
```
# install vue
npm i vue@next -S
```

## cooknt

对 js 的语法检查还是比较严格

package.json
```
"devDependencies":
"cooking-lint": "^0.1.2",
```
cooking.conf.js
```
extends: ['vue2'] //, 'lint'] 安装 cooking-lint 并配置 '.eslintrc' 文件
```

暂时取消

Element
---

- element

Vue2.0 新手完全填坑攻略—从环境搭建到发布
---

- my
- [参考](https://segmentfault.com/a/1190000007124470)
- use Element
```
cnpm install element-ui@next -S
cnpm install style-loader --save-dev
cnpm install css-loader --save-dev
cnpm install file-loader --save-dev
```


