# VUI

> ui component for V2.0

## Included
 - **AddressPicker**
 - **Datatime**
 - **Dialog**
 - **SelectPicker**
 - **Swiper**
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


### addressPicker

参数

- {Boolean} hasCounty : 是否显示区域 , 默认 true

- {Array} value : 初始值 , 默认 ["北京" , "北京市" , "东城区"]

Example
```html

<address-picker v-on:change="getValue">区域:</address-picker>

```

```js
import address from '../../packages/addressPicker';
export default {
   data() {
     return {
       value:["广东省","佛山市","南海区"]
     };
   },
   methods:{
   //get message from child component
   getValue(msg){
     console.log(msg);
    }
   },
   components:{
     addressPicker : address
   }
 };

```


### datetime (beta)

参数

- {String} format : 日期格式 , 默认 "YYYY-MM-DD"

可选 "YYYY-MM-DD" , "MM-DD" , "YYYY-MM"

- {String} value : 初始值 , 默认 今天

- {Number} minYear : 可选最小年 , 默认 new Date().getFullYear()-10;

- {Number} maxYear : 可选最大年 , 默认 new Date().getFullYear()+10;

Example
```html
<datetime v-on:change="getValue"></datetime>
```

```js
import datetime from '../../packages/datetime';
export default {
	methods:{
	  //get message from child component
      getValue(msg){
        console.log(msg)
      }
    },
    components:{
      datetime : datetime
    }
}

```


### selectPicker

参数

- {Array} options : options , 默认 []
- {String} defaultVal : 默认值 , 默认 ""


Example
```html
<select-picker :options="options" v-on:change="getValue">请选择</select-picker>

```

```js
import selectPicker from '../packages/selectPicker';
export default {
    data() {
      return {
        options : ["select","select1","select2","select3","select4"]
      };
    },
    methods:{
      getValue(msg){
        console.log(msg)
      }
    },
    components:{
      selectPicker,
    }
  };

```




### countup

依赖 countup.js

参数 

- {Number} startVal : 开始值 , 默认 0

- {Number} endVal : 结束值 , 默认 0

- {Number} decimals : 小数位置 , 默认 0

- {Number} duration : 动画时长 , 默认 2

- {object} options : 缓动 , 默认 {}

```js
var easeOutCubic = function(t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (1.77635683940025e-15 * tc * ts + 0.999999999999998 * tc + -3 * ts + 3 * t);
};
var options = {
    easingFn: easeOutCubic
};
```



Example
```html
<count-up :startVal="0" :endVal="2000.98" :decimals="2" class="countUp"></count-up>

```

```js
import datetime from '../../packages/datetime';
export default {
   components:{
     countUp : countUp
   }
}
```


### swiper

参数 

- {Array} imgs : 开始值 , 默认 []

- {Number} defaultIndex : 开始值 , 默认 0

- {Boolean} auto : 是否自动轮播 , 默认 false


Example
```html
<swiper :imgs="imgs" :defaultIndex="1" :auto="true"></swiper>

```

```js
import swiper from '../packages/swiper';
export default {
  data() {
    return {
        imgs : [
          {
            imgUrl:'url' 
          },
          {
            imgUrl:'url'  , 
            href:'href'
          },
          {
            imgUrl:'url'  , 
            href:'href'
          }
        ]
      }
  },
  components:{
    swiper : swiper
  }
};

```

### switch

参数 

- {Boolean} value : 初始值 , 默认 false

- {Boolean} disabled : 是否禁用 , 默认 false


Example
```html
<v-switch v-on:sChange="getValue" :value="true" :disabled="true"></v-switch>

```

```js
export default {
    mounted(){
		//get initial value	
      console.log(this.$refs.s1.value)
   },
   methods:{
	   // get value when the value is changed
     getValue(msg){
       console.log(msg)
     }
   }
};
```


### Grid

行和列
- {row} class="row"
- {col} class="col-1" (支持1-12);
```html
  <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
    <div class="col-4"></div>
  </div>
```

行偏移
- {col-offset} class="col-offset-4"
```html
  <div class="row">
      <div class="col-4 col-offset-4"></div>
      <div class="col-4"></div>
  </div>
```

Example
![demo](https://github.com/jlianphoto/vui/blob/master/src/img/grid.png)

