# VUI

> ui component for V2.0

## Included
 - **Picker**
 - **AddressPicker**
 - **Datatime**
 - **Dialog**
 - **SelectPicker**
 - **Switper**
 - **Switch**
 - **Countup**


## Start

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

## Build

``` bash
# build for production with minification
npm run build

```

## Compontents

### Dialog

引入:
```js

import from '../packages/dialog';

```

- toast
message : 消息内容

```js

toast("message")

```

- alert
参数接受两种类型:
1.字符串
title : 警告框标题
message : 信息
```js

alert("title" , "message")

```
2.对象
title : 警告框标题
message : 信息
confirmCallback : 回调函数
confirmTxt : 确定按钮文字

