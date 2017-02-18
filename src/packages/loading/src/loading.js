import Vue from 'vue';

let defaultMsg = "加载中..."

const loadConstructor = Vue.extend(require('./loading.vue'));
let lock = true;
// 创建组件
let createComponent = ()=>{
    return new loadConstructor({
        el : document.createElement('div')
    })
}
let component = new createComponent();

let loading = {
    show : (msg)=>{
        if (!lock) {return};
        lock = false;
        component.message = msg?msg:defaultMsg;
        document.body.appendChild(component.$el);
    },
    hide : (msg)=>{
        document.body.removeChild(component.$el)
        lock = true;
    }
}

export default loading;