<template>
    <div class="container-fluid p-0">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light animated fadeInRight faster" style="background-color: #e3f2fd;">       
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li>
                  <a class="nav-link" href="#">
                    <img width="30" height="30" src="./linkedinIco.svg" alt="linkedinIcon">
                  </a> 
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link font-weight-bold" style="color:#33d1ff" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font-weight-bold" style="color:#33d1ff" to="/AboutMe">About Me</router-link>
                </li>
            </ul>
          </div>
        </nav>
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
</style>
