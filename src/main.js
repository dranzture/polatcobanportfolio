import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import HomePage from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import Samples from './components/Samples.vue'
import Experience from './components/Experience.vue'
import NotFound from './components/404.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'Home' },
    { path:'/experience', component: Experience, name:'Experience'},
    { path: '/aboutme', component: AboutMe, name: 'AboutMe' },
    { path: '/samples', component: Samples, name: 'Samples' },
    { path: '*', component: NotFound, name: 'NotFound' }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
