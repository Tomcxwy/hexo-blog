---
title: git常用命令
date: 2025-12-22 15:44:00
tags:
---
# Git的一些常用命令

```
# 初始化一个新的Git仓库
git init
# 在当前目录初始化一个新的Git仓库

# 克隆远程仓库到本地
git clone <repository_url>
# 将远程仓库克隆到本地

# 查看仓库状态
git status
# 查看当前工作区和暂存区的状态

# 查看修改过的文件内容
git diff
# 比较工作区和暂存区的差异

# 添加文件到暂存区
git add <file_name>
# 将指定的文件添加到暂存区，准备提交
git add . 
# 将所有文件（包括新文件和修改过的文件）添加到暂存区

# 提交更改
git commit -m "commit message"
# 将暂存区的修改提交到本地仓库，并附带提交说明

# 查看提交历史
git log
# 查看提交历史记录

# 切换分支
git checkout <branch_name>
# 切换到指定的分支

# 创建并切换到一个新分支
git checkout -b <new_branch_name>
# 创建一个新分支并切换到该分支

# 合并分支
git merge <branch_name>
# 将指定的分支合并到当前分支

# 删除分支
git branch -d <branch_name>
# 删除本地分支（仅当分支已经被合并时）

# 查看当前分支
git branch
# 列出所有本地分支并标出当前所在分支

# 拉取远程仓库的最新更改
git pull
# 从远程仓库拉取最新的更改并合并到本地分支

# 推送本地更改到远程仓库
git push
# 将本地分支的更改推送到远程仓库

# 查看远程仓库
git remote -v
# 查看远程仓库的 URL

# 添加远程仓库
git remote add origin <repository_url>
# 将远程仓库 URL 添加为本地仓库的远程仓库 origin

# 重命名分支
git branch -m <old_branch_name> <new_branch_name>
# 将本地分支重命名

# 重置当前分支到某个提交
git reset --hard <commit_id>
# 将当前分支重置到指定的提交（会丢失未提交的更改）

# 创建标签
git tag <tag_name>
# 创建一个新的标签

# 推送标签到远程
git push origin <tag_name>
# 将本地标签推送到远程仓库

# 删除远程分支
git push origin --delete <branch_name>
# 删除远程仓库的分支

```

# gitignore不起作用

```
#运行以下代码
git rm -r --cached .
git add .
git commit -m "update .gitignore"
```

