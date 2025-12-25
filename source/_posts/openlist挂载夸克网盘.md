---
title: openlist挂载夸克网盘
date: 2025-12-24 12:17:06
tags: 
  - openlist
excerpt: 使用openlist搭建webdav，实现在同一局域网下访问
index_img: https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122833258.png
---
## 下载地址

链接：https://pan.quark.cn/s/79657131f7d1

## 操作指南

安装后端服务并启动，rclone选择性安装（可以不装）

![image-20251224122347426](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122347426.png)

在这里配置端口号及密码

![image-20251224122546119](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122546119.png)

同样可选设置，建议关闭启动时显示主窗口

![image-20251224122640311](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122640311.png)

点击网页打开本地控制台

![image-20251224122805563](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122805563.png)

输入设置好的用户名密码进行登录

![image-20251224122833258](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122833258.png)

登录之后点击管理

![image-20251224122904934](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224122904934.png)

点击 存储->添加

![image-20251224123013780](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123013780.png)

选择夸克，填入挂载路径，并登录网页端夸克网盘获取cookie

![image-20251224123221262](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123221262.png)

![image-20251224123249892](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123249892.png)

其余不用动，最后点击添加

成功之后如图一，图二未添加cookie登录失败

![image-20251224123348077](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123348077.png)

点击 用户->编辑

![image-20251224123501740](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123501740.png)

全部勾选，保存

![image-20251224123520455](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123520455.png)

成功之后可在首页看到挂载的网盘

![image-20251224123614312](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123614312.png)

如果要在局域网访问webdav，可以 点击电脑wifi，点击属性，其中ipv4地址即为本机ip地址

只要连接同一网络，即可通过 [ ipv4地址:openlist里设置的端口号 ] 访问该webdav

例如 10.8.192.1:1314

![image-20251224123828555](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251224123828555.png)