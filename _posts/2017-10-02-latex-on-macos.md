---
layout: post
title: LaTeX on macOS
author: CptBreeza
date: 2017-10-02 00:16:03 +0800
tag: notes
---

## 使用中文

1. 使用 `XeLaTeX`
2. 使用 `ctexart`
3. 设置字体

4. 可用自带字体
   1. `STSong`
   2. `STHeiti`
   3. `STKaiti`
   4. `SKFangsong`

例子

```latex
\documentclass[UTF8, nofonts]{ctexart}

\setCJKmainfont[BoldFont=STHeiti,ItalicFont=STKaiti]{STSong}
\setCJKsansfont[BoldFont=STHeiti]{STXihei}
\setCJKmonofont{STFangsong}

\begin{document}
\end{document}
```

## Sublime 集成

1. 使用 `LaTeXTools` 包
2. 使用 Skim 可以实时查看编译好的 pdf 文档

## References

- [中文](http://leungwensen.github.io/blog/2015/fixing-latex-in-mac.html)
- [Sublime 集成](http://zhihu.com/question/23918126/answer/29977055)
