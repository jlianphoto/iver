webpackJsonp([14],{127:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(47);e.default={methods:{toastHandler:function(){n.a.toast("message")},alertHandler:function(){n.a.alert("title","message")},alertHandler2:function(){n.a.alert({title:"title",message:"message",confirmTxt:"confirm",animate:!0})},confirmHandler:function(){n.a.confirm({title:"title",message:"message"})},confirmCallback:function(){n.a.confirm({title:"title",message:"message",confirmCallback:function(){alert("confirm")},cancleCallback:function(){alert("cancle")}})}}}},185:function(t,e,a){e=t.exports=a(90)(!0),e.push([t.i,".padding-content{padding:20px}","",{version:3,sources:["/Users/jlian/Project/IVER/src/demo/dialog.vue"],names:[],mappings:"AACA,iBACE,YAAc,CACf",file:"dialog.vue",sourcesContent:["\n.padding-content {\n  padding: 20px;\n}\n"],sourceRoot:""}])},207:function(t,e,a){var n=a(185);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(91)("ca008c08",n,!0)},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"padding-content"},[a("div",{staticClass:"title"},[t._v('toast("msg")')]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.toastHandler}},[t._v("toast")]),t._v(" "),a("div",{staticClass:"title"},[t._v('alert("title" , "message")')]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.alertHandler}},[t._v("alert")]),t._v(" "),a("div",{staticClass:"title"},[t._v('alert({title:"title" , confirmTxt:"confirm"})')]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.alertHandler2}},[t._v("alert")]),t._v(" "),a("div",{staticClass:"title"},[t._v('confirm({"title":"title" , message:"message"})')]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.confirmHandler}},[t._v("confirm")]),t._v(" "),a("div",{staticClass:"title"},[t._v("callback")]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.confirmCallback}},[t._v("confirm")])])},staticRenderFns:[]}},97:function(t,e,a){a(207);var n=a(13)(a(127),a(245),null,null);t.exports=n.exports}});