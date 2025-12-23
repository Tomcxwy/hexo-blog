---
title: Hello World
excerpt: 第一次哦
date: 2025-12-22 15:47:38
#如果想把某些文章隐藏，不在首页和其他归档分类页里展示
hide: false 
#如果只是想让文章在首页隐藏，但仍需要在归档分类页里展示
archive: false
#如果想手动将某些文章固定在首页靠前的位置，可以在安装 hexo-generator-index >= 2.0.0 版本的情况下
#sticky 数值越大，该文章越靠前，达到类似于置顶的效果，其他未设置的文章依然按默认排序。
#当文章设置了 sticky 后，主题会默认在首页文章标题前增加一个图标，来标识这是一个置顶文章，可以通过主题配置去关闭或修改这个功能
sticky: 100
#文章在首页的封面图
index_img: /img/hello-world.png
#标签
#tags: ["初始","hello-world"]
tags: 
  - hello
  - world
#分类
categories: ["杂七杂八"]
#文章页背景图
#banner_img: /img/hello-world.png
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## 快速开始

### 新建一篇文章

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### 启动服务

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### 生成静态文件

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)
