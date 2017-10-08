---
layout: post
title: ES5 标准库
author: CptBreeza
date: 2017-10-08 15:23:00 +0800
tag: notes
---

## ES5 标准库

#### Object

- `Object.keys`
- `Object.getOwnPropertyNames()`
- `Object.prototype.valueOf()`
- `Object.prototype.hasProperty()`

#### Array

- `Array.isArray()`
- 数组元素操作：`push/pop` (!)，`shift/unshift` (!)，`indexOf`
- 数组操作：`concat`，`reverse`，`slice`，`join`
- 函数式编程：`sort`，`map`，`forEach`，`filter`，`reduce`

#### String

- 字符串操作：`concat`，`slice`，`trim`，`toLowerCase/toUpperCase`，`split`
- 正则表达式相关：`match`，`search`，`replace`

#### Date

- `Date()` 返回当前时间（字符串）
- 类型转换
  1. 转换为数值：对应的毫秒数
  2. 转换为字符串：对应的日期字符串


- 运算
  1. 加法：返回连接后的两个字符串
  2. 减法：间隔的毫秒数


- `Date.now` 距离 1970 年 1 月 1 日 00:00:00 UTC 的毫秒数
- `Date.parse` 解析时间，返回与上条格式相同的毫秒数


- 一系列 `get*/set*` 方法

#### RegExp

- `test`，`exec`

#### JSON

- `JSON.stringify` 将一个值转换成符合 JSON 标准的格式
- `JSON.parse` 将一个符合 JSON 标准的字符串转换成对象
