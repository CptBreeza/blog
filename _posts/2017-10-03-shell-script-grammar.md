---
layout: post
title: Shell Script Grammar
author: CptBreeza
date: 2017-10-03 01:16:51 +0800
tag: notes
---

## Variables

#### 语法

```sh
#!/bin/sh # 使用 Bourne shell

echo $MY_MESSAGE
# 未被赋值的变量为空(字符串)
# 在 Shell 中使用 ./my_script.sh 执行脚本时，实际上创建了新进程，在 Shell 中赋值的变量不会被带进来
# 想要在 my_script.sh 中使用 Shell 中赋值的变量，那么
# 1. export MYVAR，这样在创建新进程时会继承变量
# 2. source my_script.sh，也可以 . ./my_script.sh，不创建新进程，在当前的 Shell 中执行脚本，而这样也
#    将脚本中的变量暴露出来

MY_MESSAGE="Hello World!" # 使用引号包裹字符串，防止意外情况
echo $MY_MESSAGE
read MY_MESSAGE # 从 stdin 读变量

read MY_NAME
echo "Your name is : ${MY_NAME:-`whoami`}"
# :- 可以为变量指定默认值

touch $MY_NAME_file # 错误，变量 MY_NAME_file 不存在
touch ${MY_NAME}_file # 正确
```

#### 特殊变量

- `$0` - 程序的 basename
- `$1 - 9` - 脚本的头 9 个参数
- `$@` - 所有参数
- `$#` - 参数的数量

如果有超过 9 个参数，使用 `shift`，参考下面的脚本

```sh
#!/bin/sh
while [ "$#" -gt "0"]
do
  echo "\$1 is $1"
  shift
done
```

## Loops

#### for loops

```sh
#!/bin/sh

for i in 1 2 3 4 5
do
  echo "Looping ... i is set to $i"
done
```

#### while loops

```sh
#!/bin/sh

INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye"]
do
  echo "Please type something in (bye to quit)"
  read INPUT_STRING
  echo "You typed: $INPUT_STRING"
done

# : 总是被判定为 true，所以使用 "while :" 可以实现死循环

# 常用技巧

while read f
do
  case $f in
       hello)  echo English  ;;
       howdy)  echo American ;;
       *)      echo Unknown  ;;
  esac
done
```

## Test

```sh
if [ ... ]     # 方括号周围的空格是必需的
then           # 也可以写作 "if [ ... ]; then"
  # if-code
else
  # else-code
fi

[ ... ] && if-code
[ ... ] || else-code
[ ... ] && if-code || else-code
```

## Case

```sh
#!/bin/sh

while read f
do
  case $f in
       hello)  echo English  ;;
       howdy)  echo American ;;
       *)      echo Unknown  ;;
  esac
done
```

## External Programs

```sh
#!/bin/sh

MY_NAME=`whoami`
# 使用 ` 包裹的表达式，被认为是一条命令，会在执行后将该命令产生的标准输出作为值
echo $MY_NAME
```

## References

[Shell Scripting Tutorial](https://www.shellscript.sh)
