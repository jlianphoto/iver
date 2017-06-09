<template>
<div>
  <button @click="show = !show">laji</button>
  <slide-down>
    <div v-show="show">士大夫</div>
  </slide-down>
</div>
</template>


<script type="text/javascript">

  import slideDown from '../packages/slideDown';
  console.log(slideDown)

  export default {
    data() {
      return {
        show:false
      }
    },
    methods:{

    },
    components:{
      slideDown:slideDown
    }
  };
</script>

<style type="text/css">

</style>