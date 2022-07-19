require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
import store from './Store/index';
import App from './App.vue';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "./vee-validate";
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

var AddToCalendar = require('vue-add-to-calendar');
Vue.use(AddToCalendar);

gsap.registerPlugin(ScrollTrigger);

Vue.mixin({
    created: function () {
      this.gsap = gsap;
    }
  });

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(VueViewer)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});
