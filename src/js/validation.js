/*
*	验证
*/ 


let valid = {

	// 必填
	isRequire : (val)=>{
		return /^\s*$/.test(val);
	},

	// 手机号码
	isMobile : (val)=>{
	 return /^0?1[3|4|5|8|7][0-9]\d{8}/.test(val);
	},

	// 密码
	isPassword : (val)=>{
		return val && val.length>=6;
	},

	// 微信
	isWeixin : ()=>{
		let ua = window.navigator.userAgent.toLowerCase();
        return (ua.indexOf("micromessenger") > 0);
	},

	//IOS
	isIOS : ()=>{
		let ua = window.navigator.userAgent.toLowerCase();
		return (!$.isWeixin() && (ua.indexOf('iphone') > -1|| ua.indexOf('mac') > -1) && (ua.indexOf('safari') == -1))
	},

	// android
	isAndroid : ()=>{
		let ua = navigator.userAgent
		return ((ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) && !!window.jsObj)
	}

}


export default valid;