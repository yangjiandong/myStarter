Vue Starter
===

my-vue
---

采用 cooking 构建，[参考](https://gold.xitu.io/entry/57d4c2130bd1d00058453ac4)

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


