import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";

// import plugins individually - require exports-loader
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/carousel";
import "expose-loader?$!expose-loader?jQuery!jquery";
import "slick-carousel/slick/slick.min.js";
import "vue-popperjs/dist/vue-popper.min.js";
import "@/assets/regacy.scss";
import "@/assets/imageClasses.css";
import VueProgressiveImage from "vue-progressive-image";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";

Vue.use(VueProgressiveImage);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  throttleWait: 10,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
});
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
