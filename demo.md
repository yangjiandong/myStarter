Demo
====

第一版
----

- 适应 mobile
- 提供登陆，强制用户登陆
- 几种菜单风格使用，左侧菜单，底部菜单
- 动态授权菜单生成
- 发布方式尝试，单独发布，集成发布

## Vue

基于vue-cli 搭建基本项目

```
#webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
vue init webpack vue-demo-project
```

## api

参考 [NeteaseCloudWebapp](https://github.com/javaSwing/NeteaseCloudWebApp), 定义api目录

```
const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic'
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
...
```

类似手机app，用户可以自定义api访问地址

## 参考

- [shinygang/vue-cnodejs](https://github.com/shinygang/Vue-cnodejs), 采用左侧菜单
- [Ryqsky/cndoe-vue](https://github.com/Ryqsky/cnode_vue), 采用底部菜单
- [wszgxz/vue-cnode](https://github.com/wszgxa/vue-cnode), 采用左侧菜单
- [卖座网](https://cnodejs.org/topic/57fb47da487e1e4578afb388)

