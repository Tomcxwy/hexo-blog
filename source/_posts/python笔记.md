---
title: python笔记
date: 2026-03-23 10:12:22
tags:
  - python
expert: python笔记
---
# python元组
`a = (1,2,3)`
### 列表里面的元素可以被修改，元组里面的元素不能被修改，但是能被访问。
# python中循环后可接else
```python
# [0,5) 左闭右开的区间
a = range(5)
```
```python
for i in range(5):
    print(i)
    if i==5:
        break
else:
    print("循环正常结束")
```
### python里else可以接在循环的正下方，表述循环正常结束。如果触发了break语句，就不会执行else。while循环同样可以。

# 字符串切片
```python
a = "my name is xxx"

# 切取的是字符串a中下标1-4的字符
a = a[1:5]

# 从最开始切取到4
a = a[:5]

# 从1切取到最后
a = a[1:]

# 切取的是全部
a = a[:]

# 前两个是开始和结束，最后一个是步长，表示搁1个切取一次。如果是1，就表示连续切取。
a = a[1:5:2]

# 表示把字符串反过来
a = a[::-1]

# 表示从倒数第五个字符一直截取到倒数第一个字符,不包括倒数第一个字符。
a = a[-5:-1]
```

# 字符串操作
## 替换指定字符、分割字符串、拼接字符串
```python
a = "my name is xxx"

# 把字符串a中的 xxx 替换为 pig
a = a.replace("xxx","pig")

# 按照指定字符分割字符串
arr = a.split(" ")
# 输出 ['my','name','is','xxx']

# 拼接字符串
string = "-".join(arr)
# 输出 my-name-is-pig
```
## 转换大小写
```python
a = "hello".capitalize() # 将字符串的第一个字母转换为大写
b = "hello".title() # 将字符串每个单词的首字母转化为大写
c = "hello".lower() # 将字符串中的大写字母转换为小写
d = "hello".upper() # 将字符串中的小写字母转换为大写
```
## 删除空白符
```python
e = "    hello".lstrip() # 删除字符串左边的空白
f = "    hello".rstrip() # 删除字符串右边的空白
g = "    hello    ".strip() # 删除字符串两边的空白
```
# 列表操作
```python
b = 12
a = [1, False, "happy", b, [1,2,3]]

# 添加一个元素
a.append("abc")

# 在下标为1的字符前面插入一个字符 t
a.insert(1,'t')

# 删除第0个元素
a.pop(0)

# 删除 happy 字符
a.remove("happy")

# 清空列表
a.clear()

a[0]="123" # 列表可以这样写，但是字符串不能这样写。

# 删除列表
del a
```
## 列表排序的两种方式
```python
a = [1,5,3,8,9]

# 直接操作列表a
a.sort()

# 返回一个新的列表
a = sorted(a)
```
# 字典
```python
# 键和值可以是任意数据类型
d = {"name": "Pig", "age": 20}

# 获取字典里的键
d.keys()

# 获取字典里的值
d.values()

# 获取字典里包含的元组
d.items()
# 输出 [('name', 'Pig'), ('age', 20)]

# 遍历一个字典
for k, v in d.items():
    print(k)
    print(v)
```
# 函数
## 函数的拆包
```python
def g():
    return 1,2
b = g()
print(b)
# 输出结果为(1,2)

# 可以用多个参数接收来进行拆包
a,b = g()
```
## 不定长参数-带一个星号
```python
# 不知道需要接收几个参数，就用 *args，表示可能有无穷个参数
# 普通参数需要写在不定长参数前面，下面的1就表示n接收的参数
def a(n,*args):
    for i in args:
        print(i)
a(1,2,3,5,9,7)
```
## 默认参数、不定长参数-带两个星号
```python
# 这里默认参数age已经赋值为19，带两个星号表示形参需要带有参数名和参数值，且可以有无穷多个。
def a(age=18, *args, **kwargs):
    if age >= 18:
        for i in args:
            print(i)
    else:
        print("no!")
    print(kwargs["ns"])
    print(kwargs["nt"])
a(19, 2, 3, 5, 9, 7, ns = 15, nt = 16)
```