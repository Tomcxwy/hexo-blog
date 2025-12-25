---
title: conda常用命令
date: 2025-12-22 15:34:33
tags:
  - conda
excerpt: 一些conda的常用命令
index_img: https://cdn.jsdelivr.net/gh/Tomcxwy/blog-images/img/conda.png
categories: ["常用命令"]
---
# 环境管理

```
# 创建环境（指定 Python 版本）
conda create -n myenv python=3.11

# 激活环境
conda activate myenv

# 退出环境
conda deactivate

# 删除环境
conda remove -n myenv --all

# 克隆环境
conda create -n newenv --clone oldenv

# 导出环境配置
conda env export > environment.yml

# 根据配置文件创建环境
conda env create -f environment.yml

# 更新环境（根据 yml 文件）
conda env update -f environment.yml

```

# 包管理

```
# 安装包（指定环境）
conda install -n myenv numpy

# 安装指定版本
conda install numpy=1.23.5

# 更新包
conda update numpy

# 删除包
conda remove numpy

# 安装 pip 包（在当前环境中）
pip install package_name

```

#  信息查看

```
# 查看所有环境
conda env list
conda info --envs

# 查看当前环境中的包
conda list

# 搜索包
conda search package_name

# 查看 conda 信息
conda info

```

# 其他常用

```
# 更新 conda 本身
conda update conda

# 更新所有包
conda update --all

# 清理缓存（释放磁盘空间）
conda clean -a

```

