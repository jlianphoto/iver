webpackJsonp([4],{105:function(t,n,i){i(217);var e=i(13)(i(135),i(261),null,null);t.exports=e.exports},135:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(154);n.default={data:function(){return{imgs:[{imgUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3660092960,2510943983&fm=15&gp=0.jpg"},{imgUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=52317448,4275287853&fm=15&gp=0.jpg",href:"/demo/demo"},{imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=524793706,3113878690&fm=23&gp=0.jpg",href:"/demo/demo"}]}},components:{swiper:e.a}}},144:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(202);i.n(e);n.default={name:"swiper",data:function(){return{prefixCls:"iv-swiper",isTransition:!1,currentX:0,startX:0,width:0,index:0,dots:[],timer:null}},props:{imgs:{type:Array,default:function(){return[]}},defaultIndex:{type:Number,default:0},auto:{type:Boolean,default:!1}},computed:{itemLength:function(){return this.imgs.length}},mounted:function(){var t=this;this.width=this.$el.offsetWidth,this.el=this.$el.querySelector(".iv-swiper-wrapper"),this.index=this.defaultIndex,this.dots=this.imgs.map(function(n,i){return i==t.index}),this.setNowImg(),this.auto&&this.autoSwiper()},methods:{touchstart:function(t){this.auto&&clearInterval(this.timer),t=t.changedTouches[0],this.isTransition=!1,this.startX=t.pageX},touchmove:function(t){t=t.changedTouches[0];var n=t.pageX-this.startX,i=this.currentX+n;this.el.style.webkitTransform="translate3d("+i+"px, 0, 0)"},touchend:function(t){var n=this;this.isTransition=!0,t=t.changedTouches[0];var i=t.pageX-this.startX;Math.abs(i)>this.width/6&&(i<0?(this.index++,this.index=this.index>this.itemLength-1?this.itemLength-1:this.index):(this.index--,this.index=this.index<0?0:this.index)),setTimeout(function(){n.setNowImg()},0),this.startX=0,this.auto&&this.autoSwiper()},dotHandler:function(){var t=this;this.dots=this.dots.map(function(n,i){return i==t.index})},setNowImg:function(){this.currentX=-this.index*this.width;var t=this.currentX;this.el.style.webkitTransform="translate3d("+t+"px, 0, 0)",this.dotHandler()},autoSwiper:function(){var t=this;this.isTransition=!0,this.timer=setInterval(function(){t.index++,t.index>t.itemLength-1?(t.index=0,t.isTransition=!1):t.isTransition=!0,t.setNowImg()},2e3)},forward:function(t){!t||""==t||this.$router.push(t)}}}},154:function(t,n,i){"use strict";var e=i(238),s=i.n(e);i.d(n,"a",function(){return s.a})},180:function(t,n,i){n=t.exports=i(90)(!0),n.push([t.i,".iv-swiper{width:100%;min-height:3.73333rem;background:#fff;overflow:hidden;position:relative}.iv-swiper-wrapper{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%}.iv-swiper-wrapper a{display:block;width:100%;flex-shrink:0;-webkit-flex-shrink:0}.iv-swiper-wrapper a img{width:100%}.iv-swiper-dot{position:absolute;bottom:.26667rem;left:50%;transform:translate(-50%);display:-webkit-box;display:-webkit-flex;display:flex}.iv-swiper-dot li{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;width:0;overflow:hidden;margin-right:.21333rem;border-radius:50%;width:.26667rem;height:.26667rem;background:#fff;opacity:.5}.iv-swiper-dot li:last-child{margin-right:0}.iv-swiper-dot li.active{background:#f97d00;opacity:1}.iv-swiper .isTransition{transition:transform .3s cubic-bezier(.2,.4,.58,1);-webkit-transition:-webkit-transform .3s cubic-bezier(.2,.4,.58,1)}","",{version:3,sources:["/Users/jlian/Project/IVER/src/packages/swiper/src/src/packages/swiper/src/swiper.scss","/Users/jlian/Project/IVER/src/packages/swiper/src/src/scss/_common.scss","/Users/jlian/Project/IVER/src/packages/swiper/src/src/scss/_var.scss"],names:[],mappings:"AAIA,WACI,WAAW,AACX,sBCIqB,ADHrB,gBEDa,AFEb,gBAAgB,AAChB,iBAAkB,CAiDrB,AA/CG,mBCYH,oBAAoB,AAElB,qBAAqB,AACrB,aAAa,ADbR,eAAgB,CACnB,AAED,qBACI,cAAc,AACd,WAAW,AACX,cAAc,AACd,qBAAsB,CACzB,AAED,yBACI,UAAW,CACd,AAED,eACI,kBAAkB,AAClB,iBCnBiB,ADoBjB,SAAS,AACT,0BAA0B,ACRjC,oBAAoB,AAElB,qBAAqB,AACrB,YAAa,CDOX,AAED,kBCLH,mBDMsB,ACLtB,eDKsB,ACJtB,ODIsB,ACFtB,cAAa,AACb,QAAQ,AACR,gBAAe,ADCR,uBC3BiB,AD4BjB,kBAAkB,AAClB,gBC7BiB,AD8BjB,iBC9BiB,AD+BjB,gBEnCS,AFoCT,UAAW,CACd,AAED,6BACI,cAAe,CAClB,AAED,yBACI,mBE3CU,AF4CV,SAAU,CACb,AAhDL,yBAmDM,mDAA0D,AAC1D,kEAA0E,CAC3E",file:"swiper.scss",sourcesContent:["@import \"../../../scss/_common\";\n\n$prefixCls : '.iv-swiper';\n\n#{$prefixCls}{\n    width: 100%;\n    min-height: torem(140);\n    background:$white;\n    overflow: hidden;\n    position: relative;\n\n    &-wrapper{\n        @include flexbox();\n        min-height: 100%;\n    }\n\n    &-wrapper a{\n        display: block;\n        width: 100%;\n        flex-shrink: 0;\n        -webkit-flex-shrink: 0;\n    }\n\n    &-wrapper a img{\n        width: 100%;\n    }\n\n    &-dot {\n        position: absolute;\n        bottom: torem(10);\n        left: 50%;\n        transform: translate(-50%);\n        @include flexbox();\n    }\n\n    &-dot li{\n        @include flex(1);\n        margin-right: torem(8);\n        border-radius: 50%;\n        width: torem(10);\n        height: torem(10);\n        background: $white;\n        opacity: .5;\n    }\n\n    &-dot li:last-child{\n        margin-right: 0;\n    }\n\n    &-dot li.active{\n        background: $orange;\n        opacity: 1;\n    }\n\n    .isTransition{\n      transition: transform 0.3s cubic-bezier(0.2, 0.4, 0.58, 1);\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.2, 0.4, 0.58, 1);\n    }\n}\n\n\n","@import \"_var\";\n\n\n//base\n$phone:750;\n$url:'../../img/';\n$remBase:$phone/20;\n//font-size\n@function torem($size) {\n  $remSize: $size / $remBase;\n  @return $remSize * 1rem;\n}\n\n//ellipsis\n@mixin ellipsis(){\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n//flexbox\n@mixin flexbox(){\n\t//OLD - iOS 6-, Safari 3.1-6 \n\tdisplay: -webkit-box;\n  \t//NEW - Chrome\n  \tdisplay: -webkit-flex;\n  \tdisplay: flex;\n}\n//flex\n@mixin flex($per){\n\t-webkit-box-flex:$per;\n\t-webkit-flex:$per;\n\tflex:$per;\n\t//下面3个属性是为了兼容安卓4.3\n\tdisplay:block;\n\twidth:0%;\n\toverflow:hidden;\n}\n//arrow\n@mixin arrow($deg){\n\tcontent: '';\n\tdisplay:inline-block;\n\tmargin-top:torem(-5);\n\twidth:torem(10);\n\theight:torem(10);\n\tborder-right:1px solid #C7C7C7;\n\tborder-top:1px solid #C7C7C7;\n\t@include transform(rotate($deg));\n}\n//center\n@mixin center(){\n\tdisplay:-webkit-box;\n\tdisplay:-moz-box;\n\tdisplay:-ms-box;\n\tdisplay:-o-box;\n\tdisplay:box;\n\t-webkit-box-pack: center;\n\tbox-pack:center;\n\t-webkit-box-align:center;\n\tbox-align:center;\n}\n// border-bottom\n@mixin borderBottom(){\n\t&:before{\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 1px;\n\t\tbackground: $lineGray;\n\t\tposition: absolute;\n\t\tbottom:0;\n\t\tleft: 0;\n    \t@include transform(scaleY(0.5));\n\t}\n}\n//keyframes\n@mixin keyframes($animateName){\n\t@-webkit-keyframes #{$animateName}\n\t{\n\t\t@content;\n\t}\n\t@keyframes #{$animateName}\n\t{\n\t\t@content;\n\t}\n}\n//animation\n@mixin animation($str) {\n\tanimation: $str;\n\t-webkit-animation: $str;\n\t// -moz-animation: $str;\n\t// -ms-animation: $str;\n\t// -o-animation: $str;\n}\n//transition\n@mixin transition($transition){\n\ttransition:$transition;\n\t-webkit-transition:$transition;\n\t// -moz-transition:$transition;\n\t// -ms-transition:$transition;\n\t// -o-transition:$transition;\n}\n//transform\n@mixin transform($transition){\n\ttransform:$transition;\n\t-webkit-transform:$transition;\n\t// -moz-transform:$transition;\n\t// -ms-transform:$transition;\n\t// -o-transform:$transition;\n}\n\n\n","//color\n$textDefault: #333333;\n$textLight\t: #a6a6a6;\n$lineGray\t: #e0e0e0;\n\n\n$white\t\t: #ffffff;\n$orange\t\t: #f97d00;\n$orangeLight: #ff9329;\n$blue \t\t: #2e9fe5;\n$blueLight \t: #52b5f3;\n$gray \t\t: #d8d8d8;"],sourceRoot:""}])},195:function(t,n,i){n=t.exports=i(90)(!0),n.push([t.i,".demo-address-title{background:#fff}","",{version:3,sources:["/Users/jlian/Project/IVER/src/demo/swiper.vue"],names:[],mappings:"AACA,oBACE,eAAiB,CAClB",file:"swiper.vue",sourcesContent:["\n.demo-address-title{\n  background: #fff;\n}\n"],sourceRoot:""}])},202:function(t,n,i){var e=i(180);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(91)("263901bc",e,!0)},217:function(t,n,i){var e=i(195);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(91)("206d930c",e,!0)},238:function(t,n,i){var e=i(13)(i(144),i(252),null,null);t.exports=e.exports},252:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:t.prefixCls},[i("div",{class:[{isTransition:t.isTransition},t.prefixCls+"-wrapper"],on:{touchstart:t.touchstart,touchmove:function(n){n.stopPropagation(),n.preventDefault(),t.touchmove(n)},touchend:t.touchend}},t._l(t.imgs,function(n){return i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.forward(n.href)}}},[i("img",{attrs:{src:n.imgUrl}})])})),t._v(" "),i("ul",{class:t.prefixCls+"-dot"},t._l(t.dots,function(n,e){return i("li",{class:{active:t.dots[e]}})}))])},staticRenderFns:[]}},261:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"demo-address-title title"},[t._v("default")]),t._v(" "),i("swiper",{attrs:{imgs:t.imgs}}),t._v(" "),i("div",{staticClass:"demo-address-title title"},[t._v("defaultIndex : 2")]),t._v(" "),i("swiper",{attrs:{imgs:t.imgs,defaultIndex:1}}),t._v(" "),i("div",{staticClass:"demo-address-title title"},[t._v("auto play")]),t._v(" "),i("swiper",{attrs:{auto:!0,imgs:t.imgs}})],1)},staticRenderFns:[]}}});