import loading from '../../packages/loading';
import dialog from '../../packages/dialog';


var Vui = {};

Vui.install = function (Vue, options) {

	Vue.$vui = {
		loading : loading,
		dialog : dialog
	};
  	//注入组件
  	Vue.mixin({
    	created: function () {
      		this.$vui = Vue.$vui
    	}
  	})

}

export default Vui;