node
===

npm
---

```
--dev-save
```

当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下 npm install module-name），然后连同版本号手动将他们添加到模块配置文件 package.json 中的依赖里（dependencies）。

- -save 和 save-dev 可以省掉你手动修改 package.json 文件的步骤。
- pm install module-name -save 自动把模块和版本号添加到 dependencies 部分
- pm install module-name -save-dve 自动把模块和版本号添加到 devdependencies 部

cooking
---

cooking 是一个基于 webpack 但是提供更简单的配置项，同时内置了许多常用配置的构建工具。同时搭配命行工具可以将常用开发环境的依赖 (devDependencies) 安装全局，并且提供的脚手架功能能快速搭建基于 Vue 或 React 的项目。

```
npm install cooking -g
```

Upgrading to the latest LTS version
---

```
sudo npm cache clean -f
sudo npm install -g n
sudo PROJECT_NAME="node" PROJECT_URL="https://npm.taobao.org/mirrors/node/" n project stable

? PROJECT_NAME="io" PROJECT_URL="https://npm.taobao.org/mirrors/iojs/" n project stable
? 然后就可以开始升级了：自动安装到最新的稳定版本命令是 n stable，自由选择版本安装是 n 4.4.0（版本号）
备注：升级前后可先使用 node -v 查看版本。查看所有 node 版本是 n ls
```

Upgrading npm
---

```
sudo npm install npm@latest -g
```

## phantomjs

```
PHANTOMJS_CDNURL=https://npm.taobao.org/dist/phantomjs npm install phantomjs --registry=https://registry.npm.taobao.org --no-proxy
```

## node-sass

```
cnpm install node-sass
```

cnpm
---

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

