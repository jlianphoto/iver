# IVER

> ui component for V2.0

## Included
 - **Grid**
 - **Button**
 - **Swiper**
 - **CountUp**
 - **Datetime**
 - **AddressPicker**
 - **swiper**
 - **Dialog**
 - **Switch**
 - **Loading**

## Start


### install
```js
npm install -S iver
```

### use all components
```js
import {iver} from 'iver';
Vue.use(iver);
```

### on demand
```js
import  {component} from 'iver'
Vue.component(component.name, component);
```


## Css

### Response
sass

```js
$phone: 750;  //设计图尺寸
$remBase:$phone/3200; //基准值
@function torem($size) {
  $remSize: $size / $remBase;
  @return $remSize * 1rem;
}
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

### Button
```js
{default} class="btn"
{outline} class="btn-outline"
{inline}  class="btn-inline"
{color}   default(orange) btn  ,  optional(blue) btn-blue
```



## Compontents

### Dialog

引入:
```js

import {dialog} from 'iver';

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
import {addressPicker} from 'iver';
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
import {datetime} from 'iver';
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
import {selectPicker} from 'iver';
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




### countUp

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
import {datetime} from 'iver';
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
import {swiper} from 'iver';
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
import {vswitch} from 'iver';
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

## Plugin
inject dialog and loading into Vue

```js
  import {iverPlugin} from 'iver'
  Vue.use(iverPlugin)
  
  this.$iver.dialog
  this.$iver.loading
```



### lottery

参数 

- {Array} prizesList  : 抽奖图片数组 , 默认 []

- {Object} lotteryBtn : 抽奖按钮图片 , 默认 {img : ""}

- {Number} prize : 中奖位置 , 默认 0

- {Number} speed : 抽奖按钮图片 , 默认 100

- {Number} cycle : 转动圈数 , 默认 20

- {Object} beforeLottery : 抽奖前处理函数 , 可用于发送请求获取结果 , 必须定义

`beforeLottery` 需要引入两个参数 `resolve` 成功之后调用 , reject失败之后调用,可在`reject`里面写回调函数

- {Object} resultHandler : 抽奖结束回调函数 , 用于处理结果


Example
```html
<lottery :beforeLottery="beforeLottery" :lotteryBtn="lotteryBtn" :prizesList="prizesList" :prize="prize" :resultHandler="resultHandler"></lottery>

```

```js

  import lottery from '../packages/lottery';

  export default {
    data() {
      return {
        prize:0,
        prizesList:[
          require("../img/lottery/icon-lottery-prize4.png"),
          require("../img/lottery/icon-lottery-prize2.png"),
          require("../img/lottery/icon-lottery-prize1.png"),
          require("../img/lottery/icon-lottery-prize3.png"),
          require("../img/lottery/icon-lottery-prize5.png"),
          require("../img/lottery/icon-lottery-prize6.png"),
          require("../img/lottery/icon-lottery-prize7.png"),
          require("../img/lottery/icon-lottery-prize8.png"),
        ],
        lotteryBtn:{
          img : require("../img/lottery/icon-lottery-btn.png")
        }
      }
    },
    methods:{
      beforeLottery(resolve,reject){

          /*
          * send ajax to get result and pass to child component
          **/ 
          
          // get result : this.prize
          setTimeout(()=>{
            this.prize = 1;
            resolve();
          },10)

      },
      resultHandler(){
        alert("draw"+ this.prize)
      }
    },
    components:{
      lottery:lottery
    }
  };
```

## Plugin
inject dialog and loading into Vue

```js
  import {iverPlugin} from 'iver'
  Vue.use(iverPlugin)
  
  this.$iver.dialog
  this.$iver.loading
```