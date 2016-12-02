node
===

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
```

Upgrading npm
---

```
sudo npm install npm@latest -g
```

cnpm
---

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

