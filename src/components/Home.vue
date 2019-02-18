<template>
  <div>
    <div id="home-main" class="wrapper text-center">
      <img id="profile-pic" src="https://picsum.photos/500/500">
      <p class="pt-2">Welcome to Polat Coban's Portfolio!</p>
      <p>San Antonio, TX</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  }
};
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Rajdhani');
 #home-main{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#87e0fd+0,53cbf1+56,05abe0+100;Blue+3D+%23+16 */
  background: #87e0fd; /* Old browsers */
  background: -moz-linear-gradient(top, #87e0fd 0%, #53cbf1 56%, #05abe0 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #87e0fd 0%,#53cbf1 56%,#05abe0 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #87e0fd 0%,#53cbf1 56%,#05abe0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 ); /* IE6-9 */
  position: absolute; top: 0; right: 0; bottom: 0; left: 0;
}
#profile-pic{
  border-radius: 50%;
  padding-top: 10em;
}
p{
  font-family: 'Rajdhani', sans-serif;
  font-size: 32px;
}
</style>
