/*
* dialog组件
*
* @param title : 提示标题
* @param message : 提示消息
* @param confirmTxt : 确定按钮文字
* @param cancleTxt : 取消按钮文字
* @param confirmCallback : 确定回调
* @param cancleCallback : 取消回调
*
* toast("message")
*
* alert("title" , "message")
* alert({"title":"title" , message:"message"})
*
* confirm({"title":"title" , message:"message"})
*/ 



import Vue from 'vue';


// 默认配置
let defaultOption = {
	title:"消息提示",
	message:"",
	confirmTxt:"确定",
	cancleTxt:"取消",
	confirmCallback:()=>{
		document.body.removeChild(component.$el);
	},
	cancleCallback:()=>{
		document.body.removeChild(component.$el);
	}
}



// vue构造函数
const dialogConstructor = Vue.extend(require('./dialog.vue'));

let lock = true;

// 创建组件
let createComponent = ()=>{
	return new dialogConstructor({
		el : document.createElement('div')
	})
}

let component = new createComponent();

let dialog = {
	toast : (msg)=>{

		if (!lock) {return};
		lock = false;
		component.type = "toast";
		component.message = msg;
		document.body.appendChild(component.$el);

		var timer = null;
		Vue.nextTick(function(){
			timer = setTimeout(function(){
				document.body.removeChild(component.$el)
				lock = true;
			},1500)
		})

	},
	alert : (...options)=>{
		component.type = "dialogBox";
		component.isShow = false;

		if (typeof options[0] ==="object") {
			for(let k in defaultOption){
				component[k] = options[k] || defaultOption[k];
			}
		}else if(typeof options[0] == "string"){
			for(let k in defaultOption){
				component[k] = defaultOption[k];
			}
			component["title"] = options[0];
			component["message"] = options[1];
		}

		document.body.appendChild(component.$el);
	},
	confirm : (options)=>{
		component.type = "dialogBox";
		component.isShow = true;
		if (typeof options ==="object") {
			for(let k in defaultOption){
				component[k] = options[k] || defaultOption[k];
			}
		}
		document.body.appendChild(component.$el);
	}
}


export default dialog;