<template>
  <div :class="['datetime' , {isShow : isShow}]">
  
    <div class="list">
      <div class="arrow lis" @click="init">
        <span>请选择日期:</span>
        <span class="text-right">{{showText}}</span>
      </div>
    </div>

    <div :class="['dt-container', {showMask:showMask}]" ref="container">
      <div class="dt-header">
        <span class="dt-cancle" @click="cancleHandler">取消</span>
        <span class="dt-confirm" @click="confirmHandler">确认</span>
      </div>
      <div class="dt-wraper" ref="wraper">
        <div class="dt-content">
          <div class="dt-scroller" v-if="formatControl.year" @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove" @touchend.stop.prevent="touchend">
            <div class="dt-mask-top"></div>
            <div class="dt-mask-bottom"></div>
            <ul :class="[{isTransition:isTransition} , 'dt-year']" ref="year">
              <li class="dt-item" v-for="year in dateArr.year">{{year}}</li>
            </ul>
          </div>

          <div class="dt-scroller" v-if="formatControl.month" @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove" @touchend.stop.prevent="touchend">
            <div class="dt-mask-top"></div>
            <div class="dt-mask-bottom"></div>
            <ul :class="[{isTransition:isTransition} , 'dt-month']" ref="month">
              <li class="dt-item" v-for="month in dateArr.month">{{month}}</li>
            </ul>
          </div>

          <div class="dt-scroller" v-if="formatControl.day"  @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove" @touchend.stop.prevent="touchend">
            <div class="dt-mask-top"></div>
            <div class="dt-mask-bottom"></div>
            <ul :class="[{isTransition:isTransition} ,'dt-day']" ref="day">
              <li class="dt-item" v-for="day in dateArr.day">{{day}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="v-cover" @click="cancleHandler"></div>
  </div>
</template>



<script type="text/javascript">

import './datetime.scss';

export default {
    name: 'datetime',
    data(){
        return {
            isShow : false,
            showMask   : false,
            isTransition:true,
            startY:null,
            startTime:null,
            currentY:{
                year : 0,
                month : 0,
                day : 0
            },
            //确定后的index值
            nowIndex:{  
                year:3,
                month:3,
                day:3
            },
            //滚动后的index值 
            index:{
                year:3,
                month:3,
                day:3
            },
            //日期数据  
            dateArr:{
                year:[],
                month:[],
                day:[]
            },
            //选中的值
            selected:{
                year:0,
                month:0,
                day:0
            },
            formatControl:{
                year:true,
                month:true,
                day:true
            },
            showText:''
        };
    },
    props:{
        format:{
            type:String,
            default:'YYYY-MM-DD'
        },
        value:{
            type:String,
            default(){
                let value = '';
                if (!this.value) {
                    var year = new Date().getFullYear(),
                        month = new Date().getMonth()+1,
                        day = new Date().getDate();

                    if (this.format === 'YYYY-MM-DD') {
                        value = `${year}-${month}-${day}`;
                    }
                    else if(this.format === 'YYYY-MM'){
                        value = `${year}-${month}`;
                    }
                    else if(this.format === 'MM-DD'){
                        value = `${month}-${day}`;
                    }
          
                }else{
                    value = this.value;
                }
                return value;
            }
        },
        minYear:{
            type:Number,
            default(){
                let defaultYear = new Date().getFullYear()-10;
                return defaultYear;
            }
        },
        maxYear:{
            type:Number,
            default(){
                let defaultYear = new Date().getFullYear()+10;
                return defaultYear;
            }
        }
    },
    // 判断format 处理数据
    created(){

        if (this.format === 'YYYY-MM') {
            this.formatControl.day = false;

            this.currentY = {year:0,month:0};
            this.nowIndex = {year:3,month:3};
            this.index = {year:3,month:3};
            this.dateArr = {year:[],month:[]};
            this.selected = {year:0,month:0};

        
            // year
            for (let i = 0 , length = this.maxYear-this.minYear; i <= length; i++) {
                this.dateArr.year.push(this.maxYear-i);
            }
            // month
            for (let i = 1; i < 13; i++) {
                this.dateArr.month.push(i);
            }
            return;
        }


        if (this.format === 'MM-DD') {
            this.formatControl.year = false;

            this.currentY = {month:0,day:0};
            this.nowIndex = {month:3,day:3};
            this.index = {month:3,day:3};
            this.dateArr = {month:[],day:[]};
            this.selected = {month:0,day:0};

            // month
            for (let i = 1; i < 13; i++) {
                this.dateArr.month.push(i);
            }
            // day
            for(let i=1; i<=30; i++){
                this.dateArr.day.push(i);
            }

            return;
        }

        /*
    * default data
    */ 
        // year
        for (let i = 0 , length = this.maxYear-this.minYear; i <= length; i++) {
            this.dateArr.year.push(this.maxYear-i);
        }
        // month
        for (let i = 1; i < 13; i++) {
            this.dateArr.month.push(i);
        }
        //day
        for (var i = 1; i < 32; i++) {
            this.dateArr.day.push(i);
        }
    },
    mounted(){
        this.itemH = this.$refs.wraper.querySelector('li').offsetHeight;

        // get dom
        this.year = this.$refs.year;
        this.month = this.$refs.month;
        this.day = this.$refs.day;
        this.container = this.$refs.container;

        // handle default value from props
        var date = this.value.split('-');

        var obj = {};
        if (this.format === 'YYYY-MM-DD') {
            obj = {
                year:parseInt(date[0]),
                month:parseInt(date[1]),
                day:parseInt(date[2])
            };
        }
        else if (this.format === 'YYYY-MM') {
            obj = {
                year:parseInt(date[0]),
                month:parseInt(date[1])
            };
        }
        else if(this.format === 'MM-DD'){
            obj = {
                month:parseInt(date[0]),
                day:parseInt(date[1])
            };
        }

        for (let type in obj) {
            this.nowIndex[type] = this.dateArr[type].indexOf(obj[type]);
            this.index[type] = this.dateArr[type].indexOf(obj[type]);
            this.selected[type] = obj[type];
            this.currentY[type] = -(this.nowIndex[type]-3)*this.itemH;
        }

        this.setText();
    },
    methods:{
        touchstart(e){
            e = e.changedTouches[0];
            this.isTransition = false;
            this.startY = e.pageY;
            this.startTime = new Date().getTime();
        },
        touchmove(e){
            let el = e.currentTarget.querySelector('ul');
            let type = el.className.replace(/dt-/, '');

            let event = e.changedTouches[0];

            let offset = this.currentY[type] + event.pageY - this.startY;
            el.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
        },
        touchend(e){

            //获取元素
            let el = e.currentTarget.querySelector('ul');
            let type = el.className.replace(/dt-/, '');

            //获取li的个数
            let length = el.querySelectorAll('li').length;
      
            let event = e.changedTouches[0];
    
            // slow
            this.isTransition = true;
            let time = new Date().getTime()-this.startTime;
            time = time>200?10000:time;
          
            let distant =  event.pageY-this.startY;

            let offset = this.currentY[type] + distant + 290*(distant/time);

            offset = Math.round(offset/this.itemH)*this.itemH;

            if (offset>this.itemH*3) {
                offset = this.itemH*3;
            }

            if (offset < -this.itemH*(length-4)) {
                offset = -this.itemH*(length-4);
            }

            this.currentY[type]=offset;

            el.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;

            // change index after rolling
            let index = offset/this.itemH-3,
                types = el.className.replace(/dt-/, '');
            this.index[types] = Math.abs(index);

            if (el.classList.contains('dt-month') && this.format==='YYYY-MM-DD') {
                this.getDays();
            }
     
        },
        /*
        * get days
        */ 
        getDays(){

            // 获取月份天数
            function handlerday (year,month) {
                var d = new Date(year,month ,1,0,0,0);
                var lastDay = new Date(d-1000);
                return lastDay.getDate();
            }

            // 修改day数组
            var year = this.year.querySelectorAll('li')[this.index.year].innerHTML,
                month = this.month.querySelectorAll('li')[this.index.month].innerHTML;

            var n = handlerday(year , month);
      
            var day = [];
            for(let i=1; i<=n; i++){
                day.push(i);
            }
            this.dateArr.day = day;

        },

        /*
        * filter : "0"->"00"
        */
        filterNumber(num){
            return num >= 10 ? num : '0' + num;
        },
        /*
        * show result in the page
        */
        setText(){
            for (let type in this.selected) {
        
                this.selected[type] = this.filterNumber(this.dateArr[type][this.index[type]]);
            }
            switch (this.format) {
                case 'YYYY-MM-DD':
                    this.showText=`${this.selected.year}-${this.selected.month}-${this.selected.day}`;
                    break;
                case 'MM-DD':
                    this.showText=`${this.selected.month}-${this.selected.day}`;
                    break;
                case 'YYYY-MM':
                    this.showText=`${this.selected.year}-${this.selected.month}`;
                    break;
            }
        },

        /*
    * use plugin
    */ 
        init(){
            this.isTransition = false;
            for (let type in this.index) {
                this.index[type] = this.nowIndex[type];
                var offset = -(this.nowIndex[type]-3)*this.itemH;
                this[type].style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
            }
            this.isShow = true;
            // be compatible with ISO10
            setTimeout(()=>{
                this.showMask = true;
            },150);
        },

        /*
    * confirm event handler
    */ 
        confirmHandler(){

            for (let type in this.index) {
                this.nowIndex[type] = this.index[type];
            }
            this.setText();
            this.isShow = false;

            // pass the value to father
            this.$emit('change',this.showText);

        },

        /*
    * cancle event handler
    */ 
        cancleHandler(){
            this.isShow = false;
            this.showMask = false;
        }


    }
};
</script>
