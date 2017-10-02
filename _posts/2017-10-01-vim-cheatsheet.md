---
layout: post
title: Vim Cheatsheet
subtitle: 
author: CptBreeza
date: 2017-10-01 23:56:41 +0800
categories: 
tag: notes
---

# Vim Cheatsheet

## File

- `:e` - Open
- `:w` - Save
- `:x, ZZ or :wq` - save and quite
- `:q!` - quite without saving

## Commands

`[OPERATOR][NUMBER][MOTION]`

`N<COMMAND>`

`<START POSITION><COMMAND><END POSITION>`

### Operator

Operators are actions.

- d - Delete
- c - Change
- y - Yank
- p - Paste
- r - Replace
- . - Repeat
- gU - Uppercase
- gu - Lowercase
- J -Join the lines together
- <> - Indent the line
- = - Auto indent

### Motions

Motions provide context.

- w - Until the start of the next word
- e - To the end of the current word
- $ - To the end of the line
- b - Backward by word
- t, - Go to just before the character ,
- fa - Go to the next occurrence of the letter a
- () - Beginning of current/next sentence
- {} - Beginning of current/next paragraph

**Example**: remove everything until the 3rd occurrence of the '.'

`3dt.`

## Searching

- `:/cats` - Search after the cursor position
- `:?cats` - Search before the cursor position
- `%` - Matching (), [], {}
- `*` - Go to the next occurrence of the word under the cursor

### Navigation

- n - Go to the next match
- N - Go to the previous match

## Replacing

- `:%s/cat/dog` - Find and Replace the first match
- `:%s/cat/dog/g` - Find and Replace all matches

## Completion

- `<C-n>` - Next completion
- `<C-p>` - Previous completion

## Execute External Command

`:!ls -al`

## Undo/Redo

- `u` - Undo
- `<C-r>` Redo

## Tabs and Panes

- `<Alt-#>` - Navigate tabs
- `<C-w>h/j/k/l` - Navigate panes

## Referencees

- [Learn Vim Progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
