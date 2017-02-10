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

import dialog from '../packages/dialog';

```

#### toast
- {String} message : 消息内容

```js

dialog.toast("message")

```

#### alert
参数接受两种类型:

1. 字符串

参数

- {String} title : 警告框标题

- {String} message : 信息

```js

dialog.alert("title" , "message")

```
2.对象

- {String} title : 警告框标题

- {String} message : 信息

- {Function} confirmCallback : 回调函数

- {String} confirmTxt : 确定按钮文字

```js

dialog.alert({
	title:"title", // default "消息提示"
	message:"message",
	confirmTxt:"确认", //default"确认"
	confirmCallback: fn
})


```

#### confirm

参数

- {String} title : 警告框标题

- {String} message : 信息

- {Function} confirmCallback : 回调函数

- {Function} cancleCallback : 回调函数

- {String} confirmTxt : 确定按钮文字

- {String} cancleTxt : 取消按钮文字

```js

dialog.confirm({
	title           :"title", // default "消息提示"
	message         :"message",
	confirmTxt      :"确认", //default"确认"
	cancleTxt       :"确认", //default"取消"
	confirmCallback : fn,
	cancleCallback  : fn
})


```