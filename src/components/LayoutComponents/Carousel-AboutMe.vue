<template>
  <div class="container">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="d-block w-100" src="../pictures/polat4.jpg" alt height="600px">
        </div>
        <div class="carousel-item active">
          <img class="d-block w-100" src="../pictures/polat5.jpg" alt height="600px">
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="../pictures/polat3.jpg" alt height="600px">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../pictures/polat2.jpg" alt height="600px">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
