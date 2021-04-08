import Vue from 'vue';
import App from './App.vue';
import '../src/assets/style.css';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress, "vep");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
