import loading from '../../packages/loading';
import dialog from '../../packages/dialog';


var iver = {};

iver.install = function (Vue) {

    Vue.$iver = {
        loading: loading,
        dialog: dialog
    };
    //注入组件
    Vue.mixin({
        created: function () {
            this.$iver = Vue.$iver;
        }
    });

};

export default iver;