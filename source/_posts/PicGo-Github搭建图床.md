---
title: PicGO+Github搭建图床
date: 2025-12-25 13:53:50
tags:
  - github
excerpt: 用PicGo实现自动上传Typora中的图片
---
## 1.GitHub创建图片仓库

![image-20251225135642876](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225135642876.png)

输入对应信息，仓库设为共有，否则无法获取图片

![image-20251225135819031](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225135819031.png)

创建成功![image-20251225145313705](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225145313705.png)

## 2.生成 GitHub Token（用于PicGo访问）

点击头像中的setting->Developer Settings->Personal access tokens->Tokens->Generate new token（classic)

![image-20251225145441555](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225145441555.png)

设为不会过期,并设置repo权限

![image-20251225145512975](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225145512975.png)

创建成功

![image-20251225145551693](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225145551693.png)

## 3.配置PicGo

2.4.1版本PicGo安装包

链接：https://pan.quark.cn/s/74c9bfc5630b

进入GitHub图床设置，新建一个图床

![image-20251225141313389](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225141313389.png)

输入如下信息，注意自定义域名最好写为 https://cdn.jsdelivr.net/gh/用户名/仓库名，避免使用GitHub原始地址（慢）

![image-20251225141613526](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225141613526.png)

## 4.Typora设置

进行如下设置

![image-20251225144902252](https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/image-20251225144902252.png)

完成以上配置后就可以自动将粘贴到Typora中的图片上传到GitHub的对应仓库中去了
