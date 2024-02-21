<!-- ClientLayout.vue -->
<template>
    
  <div id="body-pd">
    <router-view name="header"/>
    <div style="margin-top: 50px;">
      <router-view/>
    </div>
    <router-view name="footer"/>
  </div>
</template>

<script>


export default {
  name: 'ClientLayout', 

}
</script>
<style>
@import '/public/css/style.css';
@import '/public/css/loadingNprogress.css';
@import "~quill/dist/quill.snow.css";
</style>