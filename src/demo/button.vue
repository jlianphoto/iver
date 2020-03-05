<template>
  <div class="demo-button">
    <ul>
      <li>
        <div class="title">btn</div>
        <button class="btn">btn</button>
      </li>
      <li>
        <button class="btn-blue">btn-blue</button>
      </li>
      <li>
        <div class="title">btn-outline</div>
        <button class="btn-outline">btn-outline</button>
      </li>
      <li>
        <button class="btn-outline-blue">btn-outline-blue</button>
      </li>
      <li>
          <div class="title">btn-inline</div>
          <button class="btn-inline">btn-inline</button>
          <button class="btn-inline-blue">btn-inline-blue</button>
      </li>
      <li>
        <div class="title">disable</div>
        <button class="btn disable">disable</button>
      </li>
      <li>
        <button class="btn-outline disable">disable</button>
      </li>
      <li>
        <button class="btn-inline disable">disable</button>
      </li>
    </ul>
  </div>
</template>


<script type="text/javascript">

</script>

<style lang="scss">
@import '../scss/_common';
.demo-button {
  background:$white;
}
.demo-button  ul{
  padding:10px;
}
.demo-button li{
  margin-top: 10px;
}


</style>