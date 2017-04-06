<template>
  <div class="vi-dropDown">
      <ul class="vi-dropDown-nav">
        <li>深圳</li>
        <li>薪酬</li>
        <li>排序</li>
      </ul>
      <div class="vi-dropDown-wrapper">
        <div class="vi-dropDown-list active">
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
            <ul>
              <li>asdfasdf</li>
            </ul>
        </div>
        <div class="vi-dropDown-list">
            <ul>
              <li>asdfasdf</li>
            </ul>
        </div>
        <div class="vi-dropDown-list">
            <ul>
              <li>asdfasdf</li>
            </ul>
        </div>
      </div>
      <div class="vi-dropDown-cover"></div>
  </div>
</template>



<script type="text/javascript">
  import './dropDown.scss';
  
  export default {
    name:"dropDown",
    data(){
      return {
        
      }
    },
    props:{
      dropDownData:{
        type    : Array,
        default(){
          return []
        }
      }
    },
    created(){
      console.log(this.dropDownData)
    },
    methods:{
      
    }
  };
</script>
