<template>
  <div class="demo-grid">
      <div class="title">col : col-4(1~12)</div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
      <div class="title">offset : col-offset-4</div>
      <div class="row">
        <div class="col-4 col-offset-4"></div>
        <div class="col-4"></div>
      </div>
      <div class="title">example</div>
      <div class="row example">
        <div class="col-4" v-for="img in imgsComputed"><img :src="img"/></div>
      </div>
  </div>
</template>


<script type="text/javascript">
export default {
    name: 'grid',
    computed:{
        imgsComputed(){
            var imgSrc = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1138263027,3345338965&fm=21&gp=0.jpg';
            var imgs = [];
            for(let i = 0 ; i<6 ; i++){
                imgs.push(imgSrc);
            }
            return imgs;
        }
    }
};
</script>

<style lang="scss">
  @import '../scss/_common';
  .demo-grid .title{
    background:#fff;
  }
  .demo-grid .row div{
    height:100px;
  }
  .demo-grid .row div:nth-child(odd){
    background: $orange;
  }
  .demo-grid .row div:nth-child(even){
    background: yellowgreen;
  }
  .demo-grid .row.example div{
    padding:torem(10);
    background : $white;
    height:auto;
  }
  .demo-grid .example img{
    width: 100%;
  }

</style>