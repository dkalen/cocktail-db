// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueMasonry from 'vue-masonry-css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Slider from 'material-components-vue/dist/slider'

Vue.config.productionTip = false;

Vue.use(VueMasonry);
Vue.use(VueMaterial);
Vue.use(Slider);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
