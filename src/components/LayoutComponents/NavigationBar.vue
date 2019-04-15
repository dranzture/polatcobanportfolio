<template>
  <div id="navBar" class="container-fluid p-0">
    <nav
      class="navbar fixed-top navbar-expand-sm navbar-light animated fadeInRight faster"
      style="background-color: #e3f2fd;"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNavDropdown" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto">
          <li>
            <a class="nav-link" href="https://www.linkedin.com/in/polat-%C3%A7oban-b9951b70/">
              <img width="30" height="30" src="./linkedinIco.svg" alt="linkedinIcon">
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold" style="color:#2cafe3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link font-weight-bold"
              style="color:#2cafe3"
              to="/aboutme"
            >About Me</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link font-weight-bold"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color:#2cafe3"
              to
            >Experience</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="nav-link dropdown-item"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="color:#2cafe3"
                :to="{name:'dmi'}"
              >Detail Masters</router-link>
              <router-link
                class="nav-link dropdown-item"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="color:#2cafe3"
                to="/experience/stmarys"
              >St. Mary's Uni</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link font-weight-bold"
              style="color:#2cafe3"
              to="/samples"
            >Samples</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
</style>
