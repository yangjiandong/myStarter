React
===

脚手架
---

## yo

修改npm源为淘宝源
```
npm config set registry “https://registry.npm.taobao.org”
```

安装脚手架
```
首先确保自己安装了nodejs，然后全局安装yeoman
npm install -g yo

然后直接安装脚手架
npm install -g generator-reactpackage
```

创建React项目
```
在合适的地方新建一个文件夹，在文件夹下运行：
yo reactpackage
```

调试打包React项目
```
然后使用以下命令：
npm run dev //项目开发过程使用，启动服务，实时刷新
npm run build //开发完成之后打包文件（js、css分开打包）
```

## react-starter-kit

```
$ git clone https://github.com/bodyno/react-starter-kit.git
$ cd react-starter-kit
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

## webstorm

```
npm install -g create-react-app
```

