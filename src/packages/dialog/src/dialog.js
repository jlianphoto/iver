import Vue from 'vue';


// 默认配置
let defaultOption = {
	title:"消息提示",
	message:"",
	confirmTxt:"确定",
	cancleTxt:"取消",
	animate:false,
	confirmCallback:()=>{
		
	},
	cancleCallback:()=>{
		
	}
}



// vue构造函数
const dialogConstructor = Vue.extend(require('./dialog.vue'));

let lock = true;

// 创建组件
let createComponent = function(){
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
		if (!lock) {return};
		lock = false;

		component.type = "dialogBox";
		component.isShow = false;

		if (typeof options[0] ==="object") {
			for(let k in defaultOption){
				component[k] = options[0][k] || defaultOption[k];
			}
		}else if(typeof options[0] == "string"){
			for(let k in defaultOption){
				component[k] = defaultOption[k];
			}
			component["title"] = options[0];
			component["message"] = options[1];
		}

		document.body.appendChild(component.$el);
		component["showDialog"] = true;
		lock = true;
	},
	confirm : (options)=>{
		if (!lock) {return};
		lock = false;

		component.type = "dialogBox";
		component.isShow = true;
		if (typeof options ==="object") {
			for(let k in defaultOption){
				component[k] = options[k] || defaultOption[k];
			}
		}
		document.body.appendChild(component.$el);
		component["showDialog"] = true;
		lock = true;
	}
}


export default dialog;