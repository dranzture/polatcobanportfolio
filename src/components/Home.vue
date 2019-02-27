<template>
  <div>
    <div id="home-main" class="wrapper text-center">
        <img class="animated fadeInUpBig faster" id="profile-pic" src="https://picsum.photos/500/500">
        <p class="pt-5 text-white animated fadeInUpBig faster">Welcome to Polat Coban's Portfolio!</p>
        <p class="text-white animated fadeInUpBig faster">San Antonio, TX</p>
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
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
#home-main{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2cafe3+0,49c0f0+0 */
  background: #2cafe3; /* Old browsers */
  background: -moz-linear-gradient(top, #2cafe3 0%, #49c0f0 0%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #2cafe3 0%,#49c0f0 0%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #2cafe3 0%,#49c0f0 0%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2cafe3', endColorstr='#49c0f0',GradientType=0 ); /* IE6-9 */
  position: absolute; top: 0; right: 0; bottom: 0; left: 0;
  overflow: hidden;
}
#profile-pic{
  border-radius: 50%;
  padding-top: 10em;
}
p{
  font-family: 'Julius Sans One', sans-serif;
  font-size: 32px;
  
}
</style>
