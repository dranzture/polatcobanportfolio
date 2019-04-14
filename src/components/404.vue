<template>
  <div class="container-flud" id="home-main">
    <div class="row align-items-center text-center h-100">
      <div class="col">
        <img class="animated fadeInUpBig faster rounded-circle">
        <p class="pt-2 text-white animated fadeInUpBig faster">404!</p>
        <p class="text-white animated fadeInUpBig faster">Hello :(, Is it me you are looking for?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#home-main {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2cafe3+0,49c0f0+0 */
  background: #2cafe3; /* Old browsers */
  background: -moz-linear-gradient(top, #2cafe3 0%, #49c0f0 0%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #2cafe3 0%,
    #49c0f0 0%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #2cafe3 0%,
    #49c0f0 0%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2cafe3', endColorstr='#49c0f0',GradientType=0 ); /* IE6-9 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
}
p {
  font-size: 24px;
}
</style>
