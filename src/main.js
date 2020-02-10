import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import Routes from './routes.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueCookies);

// Setting global expiration time for cookies
Vue.$cookies.config("1d");

export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: "history",
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
