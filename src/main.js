import Vue from 'vue'
import App from './App.vue'
import 'animate.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomePage from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import Samples from './components/Samples.vue'
import Experience from './components/Experience.vue'
import DetailMasters_Experience from './components/DetailMasters_Experience.vue'
import StMarys_Experience from './components/StMarys_Experience.vue'
import NotFound from './components/404.vue'
import NavigationBar from './components/LayoutComponents/NavigationBar.vue'

Vue.component('navigation-Bar', NavigationBar);
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    {
      path: '/experience', component: Experience,
      children: [
        {
          path: '',
          name: 'dmi',
          component: DetailMasters_Experience
        },

        {
          path: 'stmarys',
          name: 'stmarys',
          component: StMarys_Experience
        }
      ]
    },
    { path: '/aboutme', component: AboutMe, name: 'AboutMe' },
    { path: '/samples', component: Samples, name: 'Samples' },
    { path: '*', component: NotFound, name: 'NotFound' }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
