require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
import store from './Store/index';
import App from './App.vue';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "./vee-validate";

Vue.use(VueRouter);
Vue.use(Buefy);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});
